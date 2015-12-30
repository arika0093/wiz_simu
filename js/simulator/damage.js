// 指定属性で相手を攻撃
//	enemy: 敵データ, now: 自身のデータ, atk_atr: 攻撃属性, rate: 倍率, atkn: 攻撃回数,
//	pn: 踏んだパネル, ch: チェイン数, rnd: 乱数, i: 味方の番号, e: 敵の番号, is_ss: SSかどうか
function attack_enemy(enemy, now, atk_atr, rate, atkn, pn, ch, rnd, i, e, is_ss) {
	var d = 0;
	// エンハ
	var as_enh = now.as_enhance ? now.as_enhance : 0;
	var ss_enh = now.ss_enhance ? now.ss_enhance : 0;
	// 攻撃
	d = (now.atk / (!is_ss ? 2 : 1)) * (1 + ch / 100) * rnd / atkn;
	// AS倍率、エンハ
	d *= (rate + as_enh + ss_enh);
	// パネル
	d *= (pn.indexOf(atk_atr) >= 0 ? 1 : 0.5);
	// 属性考慮
	d *= attr_magnification(atk_atr, enemy.attr);
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
		enemy.turn_effect = [];
	}

	// log
	Field.log_push("Unit[" + (i + 1) + "]: 敵[" + (e + 1) + "]へ" +
		Field.Constants.Attr[atk_atr] + "攻撃( " + d +
		"ダメージ)(残: " + enemy.nowhp + "/" + enemy.hp + ")");
	return d;
}

// 敵ダメージに反応するあれこれの制御
function enemy_damage_switch_check() {
	var enemys = GetNowBattleEnemys();
	$.each(enemys, function (i, e) {
		if (e.flags.on_damage && e.turn_effect.length > 0) {
			var skillct = $.grep(e.turn_effect, function (g) {
				return g.type == "damage_switch";
			});
			for (var j = 0; j < skillct.length; j++) {
				if (skillct[j].cond(Field, i)) {
					skillct[j].on_cond(Field, i);
				}
			}
			e.flags.on_damage = false;
		}
	});
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
	if (neft_check && bef >= Math.floor(now.maxhp / 10) && aft <= 0 && minhp == 0) {
		var neft = pickup_awakes(Field.Allys.Deck[index], "neftjod", false);
		if (is_legendmode(Field.Allys.Deck[index], now)) {
			neft.concat(pickup_awakes(Field.Allys.Deck[index]), "neftjod", true);
		}
		if (neft.length > 0) {
			var neft_total = 0;
			$.each(neft, function (i, e) {
				neft_total += e.perc / 100;
			});
			if (Math.random() <= neft_total) {
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
		now.turn_effect = [];
	}
}

// 味方を回復する
function heal_ally(value, index) {
	var now = Field.Allys.Now[index];
	if (now.nowhp > 0) {
		now.nowhp = Math.min(now.maxhp, now.nowhp + value);
		return true;
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
	var tg = Number($("#attack_target_sel").val());
	for (var i = tg; i > 0; i--) {
		if (enemys[i]) { break; }
		else { tg--; }
	}
	if (tg != -1 && enemys[tg] && enemys[tg].nowhp > 0) {
		return tg;
	}
	var enemy_copy = enemys.concat();
	enemy_copy.sort(function (a, b) {
		// 属性有利: 降順 / HP: 昇順
		if (a.nowhp <= 0) { return +1; }
		if (b.nowhp <= 0) { return -1; }
		var mgn_a = attr_magnification(attr, a.attr);
		var mgn_b = attr_magnification(attr, b.attr);
		if (mgn_a < mgn_b) { return +1; }
		if (mgn_a > mgn_b) { return -1; }
		if (a.nowhp < b.nowhp) { return -1; }
		if (a.nowhp > b.nowhp) { return +1; }
		return 0;
	});
	return enemys.indexOf(enemy_copy[0]);
}

// 乱数を生成する
function damage_rand() {
	r = Number($("#attack_rand_sel").val());
	return (r != -1 ? r : 0.9 + (Math.random() * 0.2));
}