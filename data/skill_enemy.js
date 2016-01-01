// -----------------------------------
// 攻撃
// -----------------------------------
// (内部用)攻撃
function _s_enemy_attack(fld, dmg, ei, ai) {
	var e = GetNowBattleEnemys(ei);
	var cd = fld.Allys.Deck[ai];
	var now = fld.Allys.Now[ai];
	var rate = attr_magnification(e.attr, cd.attr[0]);
	var rnd = damage_rand();
	var l_dmg = Math.floor(dmg * rnd * rate);
	damage_ally(l_dmg, ai, true);
}

// 普通の攻撃(不利属性相手への単発ダメージ, 攻撃対象数, 攻撃回数, 連撃時攻撃対象を毎回変えるかどうか)
function s_enemy_attack(dmg, tnum, atkn, is_allrandom) {
	return function (fld, n) {
		Field.log_push("Enemy[" + (n + 1) + "]: " + tnum + "体" +
			(atkn > 1 ? atkn + "連撃(" : "攻撃(") + dmg + ")");
		var tg = gen_enemytarget_array(tnum, atkn, is_allrandom);
		for (var i = 0; i < tg.length; i++) {
			for (var j = 0; j < tg[i].length; j++) {
				_s_enemy_attack(fld, dmg * 2, n, tg[i][j]);
			}
		}
	}
}

// -----------------------------------
// 状態異常攻撃
// -----------------------------------
// 状態異常攻撃テンプレ(Field, 説明, 種類, ターン数, 対象, 発動敵番号, カウンター攻撃かどうか, 追加内容, 異常無効貫通)
function s_enemy_abstate_attack(fld, desc, type, turn, target, ei, is_counter, f_obj, disable_guard) {
	var tg = !target.length ? gen_enemytarget_array(target, 1, false)[0] : target;
	f_obj = f_obj || {};
	// effect add
	for (var i = 0; i < tg.length; i++) {
		var now = fld.Allys.Now[tg[i]];
		var eff_obj = $.extend(true, {}, {
			desc: desc,
			type: type,
			isabstate: true,
			isdual: false,
			turn: turn,
			lim_turn: turn,
			effect: function () { },
		}, f_obj);
		// 異常攻撃前効果を発動させ、戻り値がfalseのものが1つ以上あったら無効
		var is_abs_guard = $.grep(now.turn_effect, function (e) {
			return e.bef_absattack && !e.bef_absattack(fld, tg[i], ei);
		}).length > 0;
		if (!is_abs_guard && !disable_guard) {
			// Push
			now.turn_effect.push(eff_obj);
			fld.log_push("Enemy[" + (ei + 1) + "]: " + desc + "(" + turn + "t)(対象: Unit[" + (tg[i] + 1) + "])");
		} else {
			fld.log_push("Enemy[" + (ei + 1) + "]: " + desc + "(対象: Unit[" + (tg[i] + 1) + "])(無効)");
		}
		if (!is_counter) {
			// スキルカウンターを有効に
			now.flags.skill_counter[ei] = true;
		}
	}
}

// 毒(効果値, 対象数, 継続ターン)
function s_enemy_poison(d, tnum, t) {
	return function (fld, n, is_counter) {
		s_enemy_abstate_attack(
			fld, "毒(" + d + ")", "poison", t, tnum, n, is_counter,
			{
				is_poison: true,
				effect: function (f, oi, teff, state, is_t, is_b) {
					if (is_t && !is_b) {
						var now = fld.Allys.Now[oi];
						now.nowhp = Math.max(now.nowhp - d, 0);
						fld.log_push("Unit[" + (oi + 1) + "]: 毒(" + d + "ダメージ)");
					}
				},
			}
		);
	}
}

// AS封印(対象数, 継続ターン)
function s_enemy_as_sealed(tnum, t) {
	return function (fld, n, is_counter) {
		s_enemy_abstate_attack(
			fld, "AS封印", "as_sealed", t, tnum, n, is_counter,
			{
				bef_answer: function(fld, as) {
					return as.isdefault === true;
				}
			}
		);
	}
}

// SS封印(対象数, 継続ターン)
function s_enemy_ss_sealed(tnum, t) {
	return function (fld, n, is_counter) {
		s_enemy_abstate_attack(
			fld, "SS封印", "ss_sealed", t, tnum, n, is_counter,
			{
				ss_disabled: true,
			}
		);
	}
}

// 封印(対象数, 継続ターン)
function s_enemy_all_sealed(tnum, t) {
	return function (fld, n, is_counter) {
		s_enemy_abstate_attack(
			fld, "封印", "all_sealed", t, tnum, n, false,
			{
				bef_answer: function(fld, as) {
					return false;
				},
				ss_disabled: true,
			}
		);
	}
}


// -----------------------------------
// 反射/カウンター関係
// -----------------------------------
// スキル反射(単発ダメージ)
function skill_counter(damage, t) {
	return function(fld, n){
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: スキル反射待機");
		enemy.turn_effect.push({
			desc: "スキル反射(" + damage + ")",
			type: "skill_counter",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function (){},
			on_ss_damage: function (fld, ei, ai) {
				Field.log_push("Enemy[" + (ei + 1) + "]: スキル反射発動(対象: Unit[" + (ai + 1) + "])");
				damage_ally(damage, ai, true);
			}
		});
	};
}

// 物理カウンター(単発ダメージ)
function attack_counter(damage, t) {
	return function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: 物理カウンター");
		enemy.turn_effect.push({
			desc: "物理カウンター(" + damage + ")",
			type: "attack_counter",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function () { },
			on_attack_damage: function (fld, ei, ai) {
				Field.log_push("Enemy[" + (ei + 1) + "]: 物理カウンター発動(対象: Unit[" + (ai + 1) + "])");
				damage_ally(damage, ai, true);
			}
		});
	};
}

// ダメージに反応してあれこれする
function damage_switch(cond, func) {
	return function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		enemy.turn_effect.push({
			desc: null,
			type: "damage_switch",
			isdual: true,
			turn: -1,
			lim_turn: -1,
			effect: function () { },
			cond: cond,
			on_cond: func,
		});
	};
}

// -----------------------------------
// ダメージ関係
// -----------------------------------
// ダメージブロック(自身)
function damage_block_own(bl, t) {
	return function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: ダメージブロック(" + bl + ")");
		enemy.turn_effect.push({
			desc: "ダメージブロック(" + bl + ")",
			type: "damage_block",
			isdual: false,
			turn: t,
			lim_turn: t,
			priority: 1,
			effect: function () { },
			on_damage: function (fld, dmg, attr) {
				if (dmg >= bl) {
					return dmg;
				} else {
					return 0;
				}
			}
		});
	};
}

// ダメージブロック(全体)
function damage_block_all(bl, t) {
	return function (fld, n) {
		var enemys = GetNowBattleEnemys();
		for (var i = 0; i < enemys.length; i++) {
			damage_block_own(bl, t)(fld, i);
		}
	};
}

// 鉄壁防御
function impregnable(t) {
	return function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: 鉄壁防御");
		enemy.turn_effect.push({
			desc: "鉄壁防御",
			type: "impregnable",
			isdual: false,
			turn: t,
			lim_turn: t,
			priority: 2,
			effect: function () { },
			on_damage: function (fld, dmg, attr) {
				if (dmg < 1) {
					return 0;
				}
				return 1;
			}
		});
	};
}

// -----------------------------------
// 敵状態変化
// -----------------------------------
// 属性変化
function attr_change(after) {
	return function (fld, n) {
		var e = GetNowBattleEnemys(n);
		var bef = e.attr;
		e.attr = after;
		Field.log_push("Enemy[" + (n + 1) + "]: 属性変化("
			+ fld.Constants.Attr[bef] + "→" + fld.Constants.Attr[after] + ")");
	}
}

// -----------------------------------
// その他
// -----------------------------------
// チェイン解除
function s_enemy_chain_break() {
	return function (fld, n) {
		if (fld.Status.chain_status <= 0) {
			fld.Status.chain = 0;
			Field.log_push("Enemy[" + (n + 1) + "]: チェイン解除");
		} else {
			Field.log_push("Enemy[" + (n + 1) + "]: チェイン解除(無効)");
		}
	}
}

// チェイン封印
function s_enemy_chain_sealed(t) {
	return function (fld, n) {
		if (fld.Status.chain_status <= 0) {
			fld.Status.chain_status = -1;
			fld.Status.chainstat_turn = t;
			Field.log_push("Enemy[" + (n + 1) + "]: チェイン封印(" + t + "t)");
		} else {
			Field.log_push("Enemy[" + (n + 1) + "]: チェイン封印(無効)");
		}
	}
}

// -----------------------------------
// 条件
// -----------------------------------
// HPが指定%以下になったら実行
function s_enemy_when_hpdown(rate) {
	return function (fld, n) {
		var e = GetNowBattleEnemys(n);
		return e.nowhp <= Math.floor(e.hp * rate);
	}
}