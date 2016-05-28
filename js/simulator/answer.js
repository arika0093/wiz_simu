// 解答したときの処理
function panel(attr) {
	var st = Field.Status;
	// 文字ログ出力
	var p_str = "";
	for (var ar = 0; ar < attr.length; ar++) {
		if (p_str != "") { p_str += "/"; }
		p_str += Field.Constants.Attr[attr[ar]];
	}
	Field.log_push("【パネル: " + p_str + "】");
	// 再現用ログ関連
	actl_save_answer(attr);
	// チェイン+1
	if (st.chain_status >= 0) {
		st.chain += 1;
	}
	// 付与効果実行
	var pnladd = Number($("#panel_add_sel").val());
	if (pnladd != 0) {
		st.panel_add[pnladd - 1].func(Field);
	}
	// 解答した時点で生存している敵にフラグを建てる（タゲ異常パニック用）
	{
		var enemys = GetNowBattleEnemys();
		$.each(enemys, function (i,e) {
			e.flags.isAliveWhenAnswer = e.nowhp > 0 ? i+1 : false;
		});		
	}
	// 自傷する（ダメージパニック用）
	{
		for (var i = 0; i < Field.Allys.Deck.length; i++) {
			var now = Field.Allys.Now[i];
			var card = Field.Allys.Deck[i];
			var is_match_attr = $.grep(attr, function (t) {
				return t == card.attr[0] || t == card.attr[1];
			}).length != 0;
			if (is_match_attr) {
				$.each(now.turn_effect, function (n,e) {
					if(e.panic_consume){
						Field.log_push("Unit["+ (i+1) +"]: 【混乱自傷】");
						damage_ally(e.panic_damage, i, true);
						if(card.attr[1] != -1){
							damage_ally(e.panic_damage, i, true);
						}
					}
				});
			}
		}
	}
	// 味方攻撃処理
	{
		// 使用したASリスト
		var as_afters = [];
		// エンハ処理
		answer_skill(pickup_answerskills(attr, "support"), attr, as_afters);
		// 攻撃
		var atk_skill = pickup_answerskills(attr, "attack");
		$.each(atk_skill, function (i, e) {
			if (e != null) {
				atk_skill[i].unshift(Default_as()[0]);
			}
		});
		answer_skill(atk_skill, attr, as_afters);
		// 回復
		answer_skill(pickup_answerskills(attr, "heal"), attr, as_afters);
		// SS効果発動
		answer_skill(pickup_answerskills(attr, "as_spskill"), attr, as_afters);
		// 使用したASの使用後処理
		for (var i = 0; i < as_afters.length; i++) {
			if (as_afters[i][0]) {
				as_afters[i][0]();
			}
		}
		// ASエンハ値リセット
		for (var i = 0; i < atk_skill.length; i++) {
			Field.Allys.Now[i].as_enhance = 0;
		}
	}
	// 敵スキル処理
	{
		// 物理カウンター
		var enemys = GetNowBattleEnemys();
		$.each(enemys, function (i, e) {
			for (var n = 0; n < Field.Allys.Deck.length; n++) {
				if (e.flags.is_as_attack[n] > 0 && e.turn_effect.length > 0) {
					var skillct = $.grep(e.turn_effect, function (g) {
						return g.on_attack_damage;
					});
					for (var j = 0; j < skillct.length; j++) {
						skillct[j].on_attack_damage(Field, i, n);
					}
					e.flags.is_as_attack[n] = 0;
				}
			}
		});
		// 分裂処理
		enemy_damage_switch_check("enemy_division");
	}
	// 各精霊のSSチャージを1増やす
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		var now = Field.Allys.Now[i];
		if (now.nowhp > 0) {
			now.ss_current += 1;
			// L処理
			legend_timing_check(Field.Allys.Deck, Field.Allys.Now, i);
		}
	}
	// 敵の処理
	enemy_move();
	// 敵ダメージ反応系
	enemy_damage_switch_check("damage_switch");
	// 次のターンへ進む
	nextturn(false);
	// 表示
	sim_show();
}

// 誤答
function answer_miss()
{
	Field.log_push("【誤答】");
	// 誤答処理
	if (Field.Status.chain_status <= 0) {
		Field.Status.chain = 0;
	}
	// 敵の処理
	enemy_move();
	// 敵ダメージ反応系
	enemy_damage_switch_check();
	// 次のターンへ進む
	nextturn(false);
	// 表示
	sim_show();
}

// アンサースキルから踏んだパネルに応じた特定要素のみを抜き出す
function pickup_answerskills(attr, type, subtype) {
	var result = [];
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		// カード種類
		var card = Field.Allys.Deck[i];
		var al_now = Field.Allys.Now[i];
		// 死んでいたらnullを入れる
		if (al_now.nowhp <= 0) {
			result.push(null);
			continue;
		}
		// 踏んだパネル色と属性のどれかとで一致しない場合nullを入れる
		var is_match_attr = $.grep(attr, function (t) {
			return t == card.attr[0] || t == card.attr[1];
		}).length != 0;
		if (!is_match_attr) {
			result.push(null);
			continue;
		}

		// AS取得
		var ASkill = is_legendmode(card, al_now) ? card.as2 : card.as1;
		// ASがない場合抜き出さない
		if (!ASkill || !ASkill.proc) {
			result.push([]);
			continue;
		}
		// 二重配列の場合1つにまとめる
		var as_proc = [];
		if (ASkill.proc[0].length) {
			for (var a = 0; a < ASkill.proc.length; a++) {
				multi_as(as_proc, ASkill.proc[a]);
			}
		} else {
			as_proc = ASkill.proc;
		}

		// 抜き出し
		result.push($.grep(as_proc, function (e) {
			return (e.type == type) && (subtype !== undefined ? e.subtype == subtype : true);
		}));
	}
	return result;
}

// アンサースキルの前処理
function answer_skill(as_arr, panel, as_afters) {
	// 残り連撃回数管理
	var atk_duals = [1, 1, 1, 1, 1];
	var rem_duals = [1, 1, 1, 1, 1];
	// 攻撃前処理
	for (var i = 0; i < as_arr.length; i++) {
		var now = Field.Allys.Now[i];
		// 攻撃前処理
		$.each(now.turn_effect, function (_i, e) {
			if (e.bef_answer && as_arr[i]) {
				for (var ali = 0; ali < as_arr[i].length; ali++) {
					// 攻撃前処理を行い、戻り値がfalseなら除去する
					if (!e.bef_answer(Field, as_arr[i][ali])) {
						as_arr[i].splice(ali, 1);
						ali--;
					}
				}
			}
		});
	}
	// 各精霊の連撃回数を取得する
	for (var i = 0; i < as_arr.length; i++) {
		var chain = Field.Status.chain;
		// ASがないなら処理せず飛ばす
		if (as_arr[i] == null || as_arr[i].length <= 0) { continue; }
		for (var j = 0; j < as_arr[i].length; j++) {
			var card = Field.Allys.Deck[i];
			var as = as_arr[i][j];
			// ASが適用されるならば攻撃数を取得
			if (as.type == "attack" && is_answer_target(as, chain, -1, -1, i, -1, panel)) {
				var subattr = (card.attr[1] >= 0) ? 2 : 1;
				rem_duals[i] = Math.max(rem_duals[i], as.atkn * subattr);
				atk_duals[i] = rem_duals[i];
			}
		}
	}
	// 攻撃処理
	var loop_ct = 0;
	do {
		// 現在の参照精霊を優先して処理
		if (loop_ct < as_arr.length) {
			answer_skill_proc(as_arr, panel, loop_ct, atk_duals, rem_duals, loop_ct, as_afters);
		}
		// それ以外を処理
		for (var i = 0; i < as_arr.length; i++) {
			if (i == loop_ct) { continue; }
			answer_skill_proc(as_arr, panel, i, atk_duals, rem_duals, loop_ct, as_afters);
		}
	} while (function () {
		// 残攻撃回数を減らして全て0以下なら終了
		var rst = false;
		for (var l = 0; l < rem_duals.length; l++) {
			if (l <= loop_ct) {
				rem_duals[l]--;
			}
			rst = rst || rem_duals[l] > 0;
		}
		loop_ct++;
		return rst;
	}());
}

// アンサースキルの処理
function answer_skill_proc(as_arr, panel, i, atk_duals, rem_duals, loop_ct, as_afters) {
	var card = Field.Allys.Deck[i];
	var now = Field.Allys.Now[i];
	var subattr = (card.attr[1] && card.attr[1] >= 0) ? 2 : 1;
	var enemy_dat = GetNowBattleEnemys();
	// ASがないなら処理せず飛ばす
	if (as_arr[i] == null || as_arr[i].length <= 0) { return; }
	// 参照番を超えてるなら終了
	if (i > loop_ct) { return; }
	// 残攻撃回数が0以下なら飛ばす
	if (rem_duals[i] <= 0) { return; }
	// 攻撃属性(水炎属性の精霊が炎パネルを踏んだ時に炎から攻撃する的なアレ)
	var atk_attr = -1;
	if(panel.indexOf(card.attr[0]) >= 0){
		// 副属性を持っているなら、残り攻撃回数が半分以下なら属性を入れ替え
		if(card.attr[1] >= 0){
			atk_attr = (rem_duals[i] > atk_duals[i] / 2) ? card.attr[0] : card.attr[1];
		} else {
			atk_attr = card.attr[0];
		}
	} else {
		atk_attr = (rem_duals[i] > atk_duals[i]/2) ? card.attr[1] : card.attr[0];
	}
	// 攻撃属性がないならスルー
	if (atk_attr < 0) { return; }
		// 種類で分岐
		var rst = [];
		switch (as_arr[i][0].type) {
			case "attack":
				rst = answer_attack(card, now, enemy_dat, as_arr[i], atk_attr, panel, i, rem_duals[i]);
				break;
			case "support":
				rst = answer_enhance(as_arr[i], i, panel);
				break;
			case "heal":
				rst = answer_heal(as_arr[i], i, panel);
				break;
			case "as_spskill":
				rst = answer_spskill(as_arr[i], i, panel);
				break;
		}
	// 攻撃後処理に追加
	if (rst.length > 0) {
		as_afters.push(rst);
	}
}

// AS攻撃の処理
// (カード種類, 現在の状況, 敵データ, 自身のAS一覧, 攻撃属性, パネル, 味方番号, 残り攻撃回数)
function answer_attack(card, now, enemy, as, attr, panel, index, atk_rem) {
	// 敵それぞれに対して有効なASのindexの配列
	var as_pos = [];
	var as_afters = [];
	// 敵それぞれについて条件の良いASを取り出す
	for (var ai = 0; ai < as.length; ai++) {
		var chain = Field.Status.chain;
		for (var ei = 0; ei < enemy.length; ei++) {
			var rate_n = (is_answer_target(as[ai], chain, enemy[ei].attr, enemy[ei].spec, index, ei, panel) ? as[ai].rate : 0);
			var rate_b = (as_pos[ei] !== undefined ? as[as_pos[ei]].rate : 0);
			as_pos[ei] = (rate_n >= rate_b ? ai : as_pos[ei]);
		}
	}
	// どの敵を攻撃するか
	var targ = auto_attack_order(enemy, attr, index);
	// 各種情報
	var g_dmg = 0;
	var atk_as = as[as_pos[targ]]
	var en = enemy[targ];
	var ch = Field.Status.chain;
	// 全体攻撃なら敵全体にダメージ計算
	if (atk_as.isall) {
		for (var tg = 0; tg < enemy.length; tg++) {
			if (enemy[tg].nowhp <= 0) { continue; }
			var is_as = enemy[tg].flags.is_as_attack;
			// 乱数
			var rnd = damage_rand();
			// ダメージ計算
			g_dmg += attack_enemy(enemy[tg], now, attr, atk_as.rate, atk_as.atkn, panel, ch, rnd, index, tg, false);
			is_as[index] = is_as[index] ? is_as[index] + 1 : 1;
		}
	} else {
		// 乱数
		var rnd = damage_rand();
		var is_as = enemy[targ].flags.is_as_attack;
		// ダメージ計算
		g_dmg = attack_enemy(en, now, attr, atk_as.rate, atk_as.atkn, panel, ch, rnd, index, targ, false);
		is_as[index] = is_as[index] ? is_as[index] + 1 : 1;
	}
	// 攻撃後処理
	if (atk_as.after && atk_rem == atk_as.atkn) {
		as_afters.push(atk_as.after(Field, index, g_dmg));
	}
	return as_afters;
}

// エンハスキルの処理
function answer_enhance(as, i, p) {
	var as_afters = [];
	for (var ci = 0; ci < Field.Allys.Deck.length; ci++) {
		var ass = {rate: 0};
		var card = Field.Allys.Deck[ci];
		var now = Field.Allys.Now[ci];
		var chain = Field.Status.chain;
		// 最大の値を取り出す
		for (var ai = 0; ai < as.length; ai++) {
			var as_t = { rate: 0 };
			if (is_answer_target(as[ai], chain, card.attr[0], card.species, ci, -1, p)) {
				as_t = as[ai];
			}
			ass = ass.rate < as_t.rate ? as_t : ass;
		}
		// エンハ値追加
		var bef_enh = now.as_enhance ? now.as_enhance : 0;
		now.as_enhance = bef_enh + ass.rate;
		// 攻撃後処理
		if (ass.after && ci == i) {
			as_afters.push(ass.after(Field, i, true));
		}
	}
	return as_afters;
}

// 回復スキルの処理
function answer_heal(as, i, p) {
	var as_afters = [];
	for (var ci = 0; ci < Field.Allys.Deck.length; ci++) {
		var ass = {rate: 0};
		var card = Field.Allys.Deck[ci];
		var now = Field.Allys.Now[ci];
		var chain = Field.Status.chain;
		// 最大の値を取り出す
		for (var ai = 0; ai < as.length; ai++) {
			var as_t = {rate: 0};
			if(is_answer_target(as[ai], chain, card.attr[0], card.species, ci, -1, p)){
				as_t = as[ai];
			}
			ass = ass.rate < as_t.rate ? as_t : ass;
		}
		if (ass.rate > 0) {
			// 回復
			var heal_val = Math.floor(ass.rate * now.maxhp);
			var before = now.nowhp;
			heal_ally(heal_val, ci, true);
			Field.log_push("Unit[" + (ci + 1) + "]: HP回復(HP: " + before + "→" + now.nowhp + ")");
			// 攻撃後処理
			if (ass.after && ci == i) {
				as_afters.push(ass.after(Field, i, true));
			}
		}
	}
	return as_afters;
}

// SP発動スキルの処理
function answer_spskill(as, i, p) {
	var as_afters = [];
	for (var ai = 0; ai < as.length; ai++) {
		ass = as[ai];
		if(is_answer_target(ass, chain, -1, -1, i, -1, panel)){
			var sco = ass.skill(ass.p1, ass.p2, ass.p3, ass.p4);
			ss_object_done(Field, i, sco);
		}
		// 攻撃後処理（いらない？）
		if (ass.after)  {
			as_afters.push(ass.after(Field, i, true));
		}
	}
	return as_afters;
}

// ASの対象になるかどうかを確認する
function is_answer_target(as, ch, tg_attr, tg_spec, own_i, enm_i, panels) {
	var rst = true;
	// チェイン確認
	rst = rst && (ch >= as.chain);
	// 属性確認
	rst = rst && (tg_attr < 0 || as.attr[tg_attr] == 1);
	// 種族確認
	rst = rst && (tg_spec < 0 || check_spec_inarray(as.spec, tg_spec));
	// 条件確認
	rst = rst && (as.cond(Field, own_i, enm_i, panels));
	return rst;
}