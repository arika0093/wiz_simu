// 指定属性で相手を攻撃
//	enemy: 敵データ, now: 自身のデータ, atk_atr: 攻撃属性,
//	rate: 倍率, atkn: 攻撃回数, pn: 踏んだパネル, ch: チェイン数, rnd: 乱数, 
//	i: 味方の番号, e: 敵の番号, is_ss: SSかどうか, var_num: 分散対象数(未指定なら通常)
//  added_frame: ダメージを与えたF数(未指定ならcontを使わず即付与)
function attack_enemy(enemy, now, atk_atr, rate, atkn, pn, ch, rnd, i, e, is_ss, var_num, added_frame) {
	var con = enemy.contract_dmgs;
	var consum = sumContractDamages(enemy);
	var bef_hp = (enemy.nowhp - consum);
	// ダメージ計算
	var d_dat = calculate_damage(enemy, now, atk_atr, rate, atkn, pn, ch, rnd, i, e, is_ss, var_num, false);
	var d = d_dat.damage;
	var bef_ond = d;
	
	// NowHPから削る
	if(added_frame === undefined){
		enemy.nowhp = Math.max(enemy.nowhp - d, 0);
	} else {
		// 予約
		con.push({
			added_f: added_frame,
			damage: d,
			damage_data: d_dat,
		});
	}
	// 合計予約ダメに追加しておく
	consum += d;
	
	// HPが0になりそうならターン効果を全て消す
	if (enemy.nowhp <= consum) {
		turneff_allbreak(enemy.turn_effect, e, "dead");
		// 撃破カウント
		Field.Status.total_kill += 1;
	}
	// ダメージフラグ
	enemy.flags.on_damage = (enemy.flags.on_damage ? enemy.flags.on_damage+1 : 1);
	// セットしておいた乱数を削除
	now.atk_rand = 0;

	// ログ
	var e_nowhp = (enemy.nowhp - consum);
	var log_cc = (e_nowhp <= 0) && (bef_hp >= 1);
	var l_t = "Unit[" + (i + 1) + "]: 敵[" + (e + 1) + "]へ" +
		Field.Constants.Attr[atk_atr] + "攻撃( " + d +
		"ダメージ)(残: " + Math.max(e_nowhp, 0) + "/" + enemy.hp + ")" +
		(log_cc ? "[超過: " + (d - bef_hp) + "]" : "");
	Field.log_push(l_t, (log_cc ? "blue" : null));

	// 詳細ログ
	Field.detail_log("attack_enemy", "calculate",
		"Unit[" + (i+1) + "]: " +
		"攻撃力(" + now.atk + (!is_ss ? "/2" : "") + ")" +
		" * 倍率(" + rate + "+" + d_dat.as_enh + "+" + d_dat.sst_enh + ")" +
		" * チェイン(" + (1 + ch / 100).toFixed(2) + ")" +
		(!is_ss ? " * パネル(" + (pn.indexOf(atk_atr) >= 0 ? 1 : 0.5) + ")" : "") +
		" * 属性相性(" + attr_magnification(atk_atr, enemy.attr) + ")" +
		(d_dat.lst_multi != 1 ? " * 補正値(" + d_dat.lst_multi + ")" : "") +
		" * 乱数(" + d_dat.random.toFixed(2) + ")" +
		(atkn > 1 ? " / 攻撃回数(" + atkn + ")" : "") +
		(var_num ? " / 分散(" + var_num + ")" : "") +
		((d / bef_ond) != 1 ? " * 攻撃時処理[*" + (d / bef_ond).toFixed(2) + "]" : "") +
		" = ダメージ(" + d + ") "
	);

	return d;
}

// 与えるダメージを計算する(ダメブロ、鉄壁などを無視する)
//	enemy: 敵データ, now: 自身のデータ, atk_atr: 攻撃属性,
//	rate: 倍率, atkn: 攻撃回数, pn: 踏んだパネル, ch: チェイン数, rnd: 乱数(未使用値),
//	i: 味方の番号, e: 敵の番号, is_ss: SSかどうか, var_num: 分散対象数(未指定なら通常)
//	is_simulate: 敵ワンパン判定時のみtrue
function calculate_damage(enemy, now, atk_atr, rate, atkn, pn, ch, rnd, i, e, is_ss, var_num, is_simulate) {
	var d = 0;
	// エンハ
	var as_enh = now.as_enhance ? Number(now.as_enhance.toFixed(2)) : 0;
	var ss_enh = now.ss_enhance ? Number(now.ss_enhance.toFixed(2)) : 0;
	var bss_enh = now.ss_boost_enhance ? Number(now.ss_boost_enhance.toFixed(2)) : 0;
	var rfm_enh = now.ss_reinforcement_atk ? Number(now.ss_reinforcement_atk.toFixed(2)) : 0;
	// 乱数決定
	var rnd = 0;
	if(!now.atk_rand){
		rnd = now.atk_rand = damage_rand();
	} else {
		rnd = now.atk_rand;
	}
	// 最終補正値
	var card = Field.Allys.Deck[i];
	var lst_multi = Awake_get_multiple(card, now);
	// 攻撃力
	d = now.atk / (!is_ss ? 2 : 1);
	// AS倍率、エンハ
	d *= (rate + as_enh + ss_enh + bss_enh + rfm_enh);
	// チェイン数考慮
	d *= Number((1 + ch / 100)).toFixed(2);
	// パネル
	d *= (pn.indexOf(atk_atr) >= 0 ? 1 : 0.5);
	// 属性考慮
	d *= attr_magnification(atk_atr, enemy.attr);
	// 補正値
	d *= lst_multi;
	// 乱数考慮
	d *= rnd;
	// 攻撃回数考慮
	d /= atkn;
	// 分散考慮
	d /= (var_num || 1);
	// 切り捨て
	var d_ws = d = Math.floor(d);
	// 凶暴化状態か取得
	var is_berserk = !is_ss && $.grep(now.turn_effect, function(e){
		return e.isberserk;
	}).length > 0;
	// 凶暴化状態なら威力を三倍に
	if(is_berserk){
		d *= 3;
	}
	// 攻撃時スキル確認
	if (enemy.turn_effect.length > 0) {
		var skillct = $.grep(enemy.turn_effect, function (g) {
			return g.on_damage !== undefined;
		});
		is_ondamage = true;
		skillct.sort(function (a, b) {
			if (a.priority > b.priority) return -1;
			if (a.priority < b.priority) return +1;
		})
		for (var j = 0; j < skillct.length; j++) {
			d = Math.round(skillct[j].on_damage(Field, d, atk_atr, is_berserk, is_simulate));
		}
	}

	// return object
	return {
		damage: d,
		damage_withoutskill: d_ws,
		base_rate: rate,
		as_enh: as_enh,
		sst_enh: (ss_enh + bss_enh + rfm_enh),
		final_rate: (rate + as_enh + ss_enh + bss_enh + rfm_enh),
		random: rnd,
		lst_multi: lst_multi,
	};
}

// contract_dmgsの総和を返す
function sumContractDamages(enemy){
	return function(arr) {
		var sum = 0;
		if(!arr){ return 0; }
		arr.forEach(function(elm) {
			sum += !elm.isreflected ? elm.damage : 0;
		});
		return sum;
	}(enemy.contract_dmgs);
}

// 味方にダメージを与える
function damage_ally(dmg, index, neft_check) {
	var card = Field.Allys.Deck[index];
	var now = Field.Allys.Now[index];
	var bef = now.nowhp;
	var aft = Math.floor(bef - dmg);
	var minhp = 0;
	// 死亡寸前発動スキル(e.g.起死回生)の判定
	if (aft <= 0) {
		for (var i = 0; i < now.turn_effect.length; i++) {
			var e = now.turn_effect[i];
			if (e.before_dead) {
				e.before_dead(Field, index);
				minhp = now.nowhp;
				// 発動したら取り除く
				now.turn_effect.splice(i, 1);
				i--;
			}
		}
	}
	// 九死一生の判定
	if (neft_check && aft <= 0 && minhp == 0 && awake_neftjod_check(now, index, bef)) {
		// 九死一生発動
		minhp = 1;
		Field.log_push("Unit[" + (index + 1) + "]: 九死一生発動");
	}
	now.nowhp = Math.max(aft, minhp);
	Field.log_push("Unit[" + (index + 1) + "]: " + dmg + "ダメージ(残: " + now.nowhp + "/" + now.maxhp + ")");
	// HPが0なら全効果を消す
	if (now.nowhp <= 0) {
		turneff_allbreak(now.turn_effect, index, "dead");
		// L時ならL潜在も消す
		if(is_legendmode(card, now)){
			minus_legend_awake(Field.Allys.Deck, Field.Allys.Now, index);
		}
	}
}

// 味方を回復する
function heal_ally(fld, value, index) {
	var h_val = Math.floor(value);
	var cd = fld.Allys.Deck[index];
	var now = fld.Allys.Now[index];
	// 死んでなかったら回復
	if (now.nowhp > 0) {
		// ドラゴンモード時に回復しない
		var is_drgmode = is_legendmode(cd, now) && pickup_awakes(cd, "awake_no_heal", true).length > 0;
		if (is_drgmode) {
			return false;
		}
		// 鉄壁時に回復しない
		var is_imple = $.grep(now.turn_effect, function(e){
			return e.type == "ss_impregnable";
		}).length > 0;
		if(is_imple){
			return false;
		}
		// 回復反転時は回復量を逆転させる
		var is_reverse = $.grep(now.turn_effect, function (e) {
			return e.type == "heal_reverse";
		});
		if (is_reverse.length > 0) {
			h_val = Math.floor(-h_val * is_reverse[0].reverse_rate);
		}
		// 回復
		now.nowhp = Math.min(now.maxhp, now.nowhp + h_val);
	}
	if (now.nowhp <= 0) {
		// 死んだら全効果を解除
		turneff_allbreak(now.turn_effect, index, "dead");
	}
	return true;
}

// 属性有利係数を返す
function attr_magnification(atk_atr, def_atr) {
	// 無属性を含む
	if(atk_atr == -1 || def_atr == -1){
		return 1;
	}
	// 両方とも火水雷
	else if (atk_atr <= 2 && def_atr <= 2) {
		var magn = [1, 1.5, 0.5];
		return magn[(atk_atr - def_atr + 3)%3];
	}
	// 両方とも光闇
	else if (atk_atr >= 3 && def_atr >= 3) {
		return (atk_atr != def_atr ? 1.5 : 1);
	}
	// それ以外なら1
	else {
		return 1;
	}
}

// 乱数を生成する
function damage_rand() {
	var r = Number($("#attack_rand_sel").val());
	if (r != -1) {
		return r;
	}
	var rnd = dmg_generate_rand(0, 200) / 1000;
	return 0.9 + rnd;
}

// 再現性のある乱数を生成する
function dmg_generate_rand(min, max) {
	var st = Field.Status;
	max = max || 1;
	min = min || 0;

	st.seed = (st.seed * 9301 + 49297) % 233280;
	var rnd = st.seed / 233280;
	
	return min + rnd * (max - min);
}
