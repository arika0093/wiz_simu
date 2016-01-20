// 指定属性で相手を攻撃
//	enemy: 敵データ, now: 自身のデータ, atk_atr: 攻撃属性, rate: 倍率, atkn: 攻撃回数,
//	pn: 踏んだパネル, ch: チェイン数, rnd: 乱数, i: 味方の番号, e: 敵の番号, is_ss: SSかどうか
function attack_enemy(enemy, now, atk_atr, rate, atkn, pn, ch, rnd, i, e, is_ss) {
	var d = 0;
	// エンハ
	var as_enh = now.as_enhance ? Number(now.as_enhance.toFixed(2)) : 0;
	var ss_enh = now.ss_enhance ? Number(now.ss_enhance.toFixed(2)) : 0;
	// 攻撃力
	d = now.atk / (!is_ss ? 2 : 1);
	// AS倍率、エンハ
	d *= (rate + as_enh + ss_enh);
	// チェイン数考慮
	d *= Number((1 + ch / 100).toFixed(2));
	// パネル
	d *= (pn.indexOf(atk_atr) >= 0 ? 1 : 0.5);
	// 属性考慮
	d *= attr_magnification(atk_atr, enemy.attr);
	// 乱数考慮
	d *= rnd;
	// 攻撃回数考慮
	d /= atkn;
	// 切り捨て
	d = Math.floor(d);

	// 攻撃時スキル確認
	if (enemy.turn_effect.length > 0) {
		var skillct = $.grep(enemy.turn_effect, function (g) {
			return g.on_damage !== undefined;
		});
		skillct.sort(function (a, b) {
			if (a.priority > b.priority) return -1;
			if (a.priority < b.priority) return +1;
		})
		for (var j = 0; j < skillct.length; j++) {
			d = skillct[j].on_damage(Field, d);
		}
	}

	// NowHPから削る
	enemy.nowhp = Math.max(enemy.nowhp - d, 0);
	// ダメージフラグ
	enemy.flags.on_damage = (enemy.flags.on_damage ? enemy.flags.on_damage+1 : 1);
	// HPが0ならターン効果を全て消す
	if (enemy.nowhp <= 0) {
		turneff_allbreak(enemy.turn_effect, false);
	}

	// ログ
	var l_t = "Unit[" + (i + 1) + "]: 敵[" + (e + 1) + "]へ" +
		Field.Constants.Attr[atk_atr] + "攻撃( " + d +
		"ダメージ)(残: " + enemy.nowhp + "/" + enemy.hp + ")";
	Field.log_push(l_t);
	// 詳細ログ
	Field.detail_log("attack_enemy", "calculate",
		"攻撃力(" + now.atk + (!is_ss ? "/2" : "") + ")" +
		" * 倍率(" + rate + "+" + as_enh + "+" + ss_enh + ")" +
		" * チェイン(" + (1 + ch / 100) + ")" +
		" * パネル(" + (pn.indexOf(atk_atr) >= 0 ? 1 : 0.5) + ")" +
		" * 属性相性(" + attr_magnification(atk_atr, enemy.attr) + ")" +
		" * 乱数(" + rnd + ")" +
		(atkn > 1 ? " / 攻撃回数(" + atkn + ")" : "")
	);
	Field.detail_log("attack_enemy", "damage", l_t);

	return d;
}

// 味方にダメージを与える
function damage_ally(dmg, index, neft_check) {
	var now = Field.Allys.Now[index];
	var bef = now.nowhp;
	var aft = Math.floor(bef - dmg);
	var minhp = 0;
	// 死亡寸前発動スキル(e.g.起死回生)の判定
	if (aft <= 0) {
		$.each(now.turn_effect, function (i, e) {
			if (e.before_dead) {
				e.before_dead(Field, index);
				minhp = now.nowhp;
				// 発動したら取り除く
				now.turn_effect.splice(i, 1);
			}
		});
	}
	// 九死一生の判定
	if (neft_check && aft <= 0 && minhp == 0) {
		var neft = pickup_awakes(Field.Allys.Deck[index], "neftjod", false);
		if (is_legendmode(Field.Allys.Deck[index], now)) {
			neft.concat(pickup_awakes(Field.Allys.Deck[index]), "neftjod", true);
		}
		if (neft.length > 0) {
			var neft_total = 0;
			$.each(neft, function (i, e) {
				neft_total += e.perc / 100;
			});
			if (bef >= Math.floor(now.maxhp * neft[0].hpcond / 100) && Math.random() <= neft_total) {
				// 九死一生発動
				minhp = 1;
				Field.log_push("Unit[" + (index + 1) + "]: 九死一生発動");
			}
		}
	}
	now.nowhp = Math.max(aft, minhp);
	Field.log_push("Unit[" + (index + 1) + "]: " + dmg + "ダメージ(残: " + now.nowhp + "/" + now.maxhp + ")");
	// HPが0なら全効果を消す
	if (now.nowhp <= 0) {
		turneff_allbreak(now.turn_effect, true);
	}
}

// 味方を回復する
function heal_ally(value, index) {
	var now = Field.Allys.Now[index];
	if (now.nowhp > 0) {
		now.nowhp = Math.min(now.maxhp, now.nowhp + value);
		return true;
	}
	if (now.nowhp <= 0) {
		// 死んだら全効果を解除
		turneff_allbreak(now.turn_effect, true);
	}
	return false;
}

// 属性有利係数を返す
function attr_magnification(atk_atr, def_atr) {
	// 両方とも火水雷
	if (atk_atr <= 2 && def_atr <= 2) {
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

// 攻撃順序を自動で指定する
function auto_attack_order(enemys, attr, own_index) {
	// 攻撃順序が指定されているならそっちを優先
	var fst_attr = Field.Allys.Deck[own_index].attr[0];
	var now = Field.Allys.Now[own_index];
	var tg = (attr == fst_attr ? now.target[0] : now.target[1]);
	for (var i = tg; i > 0; i--) {
		if (enemys[i]) { break; }
		else { tg--; }
	}
	if (tg != -1 && enemys[tg] && enemys[tg].nowhp > 0) {
		return tg;
	}
	var enemy_copy = enemys.concat();
	enemy_copy.sort(function (a, b) {
		var pri_hp = 1000;
		// 属性有利: 降順 / HP: 昇順
		// 死んでたら優先度最後
		if (a.nowhp <= 0) { return +1; }
		if (b.nowhp <= 0) { return -1; }
		// 死にかけなら優先度最高
		if (a.nowhp <= pri_hp) { return -1; }
		if (b.nowhp <= pri_hp) { return +1; }
		var mgn_a = attr_magnification(attr, a.attr);
		var mgn_b = attr_magnification(attr, b.attr);
		// 属性有利の方が優先度高
		if (mgn_a < mgn_b) { return +1; }
		if (mgn_a > mgn_b) { return -1; }
		// HPが低い方が優先度高
		if (a.nowhp < b.nowhp) { return -1; }
		if (a.nowhp > b.nowhp) { return +1; }
		return 0;
	});
	return enemys.indexOf(enemy_copy[0]);
}

// 乱数を生成する
function damage_rand() {
	var r = Number($("#attack_rand_sel").val());
	if (r != -1) {
		return r;
	}
	var rnd = Math.floor((Math.random() * 20)) / 100;
	return (0.9 + rnd).toFixed(2);
}