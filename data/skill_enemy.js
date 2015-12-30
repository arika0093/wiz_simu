// -----------------------------------
// 攻撃
// -----------------------------------
// 普通の攻撃(単発ダメージ, 攻撃対象数, 攻撃回数)
function s_enemy_attack(dmg, tnum, atkn) {
	return function (fld, n) {
	}
}

// -----------------------------------
// 状態異常攻撃
// -----------------------------------
// 毒(効果値, 対象数, 継続ターン)
function s_enemy_poison(r, tnum, t) {
	return function (fld, n) {

	}
}


// -----------------------------------
// 反射/カウンター関係
// -----------------------------------
// スキル反射
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

// 物理カウンター
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
// 基本
// -----------------------------------
// HPが指定%以下になったら実行
function s_enemy_when_hpdown(rate) {
	return function (fld, n) {
		var e = GetNowBattleEnemys(n);
		return e.nowhp <= Math.floor(e.hp * rate);
	}
}