// -----------------------------------
// 基本
// -----------------------------------
// (内部用)Create enemy move object
function m_create_enemy_move(f) {
	return {
		move: f,
		interval: 0,
		count: 0,
	};
}

// -----------------------------------
// 敵行動制御
// -----------------------------------
// 初回のみ行動
function m_enemy_once(e_skl) {
	return m_enemy_nturn(e_skl, 999);
}

// nターンに1回行動
function m_enemy_nturn(e_skl, n) {
	e_skl.interval = n;
	return e_skl;
}


// 現在HPが最も高い味方を狙う
function m_enemy_tgtype_maxhp() {
	return function (nows, tnum) {
		var nowhp_list = [];
		var tg = [];
		// listup
		for (var i = 0; i < nows.length; i++) {
			nowhp_list[i] = {
				hp: nows[i].nowhp,
				index: i,
			};
		}
		// sort
		nowhp_list.sort(function (a, b) {
			return b.hp - a.hp;
		});
		// push
		for (var i = 0; i < Math.min(tnum, nows.length); i++) {
			tg[i] = nowhp_list[i].index;
		}
		return tg;
	}
}

// 現在HPが最も低い味方を狙う
function m_enemy_tgtype_minhp() {
	return function (nows, tnum) {
		return m_enemy_tgtype_maxhp()(nows, 5).reverse().slice(0, tnum);
	}
}

// -----------------------------------
// 攻撃
// -----------------------------------
// (内部用)攻撃
function _s_enemy_attack(fld, dmg, ei, ai) {
	var e = GetNowBattleEnemys(ei);
	var cd = fld.Allys.Deck[ai];
	var now = fld.Allys.Now[ai];
	// 属性倍率
	var rate = attr_magnification(e.attr, cd.attr[0]);
	// 攻撃前スキル(主に弱体化)確認
	$.each(now.turn_effect, function (i, e) {
		e.bef_damage ? rate = e.bef_damage(fld, rate) : false;
	});
	// 乱数
	var rnd = damage_rand();
	// 最終ダメ
	var l_dmg = Math.floor(dmg * rnd * rate);
	damage_ally(l_dmg, ai, true);
}

// 普通の攻撃(不利属性相手への単発ダメージ, 攻撃対象数, 攻撃回数, 攻撃対象詳細)
//   攻撃対象詳細: true: 連撃時攻撃対象を毎回変える / false: 変えない / func(): 条件指定
function s_enemy_attack(dmg, tnum, atkn, tgtype) {
	return m_create_enemy_move(function (fld, n, nows) {
		// ログ出力
		Field.log_push("Enemy[" + (n + 1) + "]: " +
			(atkn < fld.Allys.Deck.length ? tnum : "全") + "体" +
			(atkn > 1 ? atkn + "連撃(" : "攻撃(") + dmg + ")");
		// 攻撃対象取得
		var tg = gen_enemytarget_array(tnum, atkn, tgtype, nows);
		// 攻撃
		for (var i = 0; i < tg.length; i++) {
			for (var j = 0; j < tg[i].length; j++) {
				_s_enemy_attack(fld, dmg * 2, n, tg[i][j]);
			}
		}
	});
}

// -----------------------------------
// 状態異常攻撃
// -----------------------------------
// 状態異常攻撃テンプレ
// (Field, 説明, 種類, ターン数, 対象, 発動敵番号, カウンター攻撃かどうか, 追加内容, 異常無効貫通)
function s_enemy_abstate_attack(fld, desc, type, turn, target, ei, is_counter, f_obj, disable_guard) {
	var tg = !target.length ? gen_enemytarget_array(target, 1, false)[0] : target;
	f_obj = f_obj || {};
	// effect add
	for (var i = 0; i < tg.length; i++) {
		var now = fld.Allys.Now[tg[i]];
		var eff_obj = $.extend(true, {}, {
			desc: desc,
			type: type,
			icon: type,
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
	return m_create_enemy_move(function (fld, n, pnow, is_counter) {
		s_enemy_abstate_attack(
			fld, "毒(" + d + ")", "poison", t, tnum, n, is_counter, {
				is_poison: true,
				effect: function (f, oi, teff, state, is_t, is_b) {
					if (is_t && !is_b && state != "overlay") {
						var now = f.Allys.Now[oi];
						now.nowhp = Math.max(now.nowhp - d, 0);
						if (now.nowhp <= 0) {
							// 毒で死んだら全効果を解除
							turneff_allbreak(now.turn_effect, true);
						}
						f.log_push("Unit[" + (oi + 1) + "]: 毒(" + d + "ダメージ)");
					}
				},
			}
		);
	});
}

// 弱体化(対象属性, 効果値(ダメージ2倍なら2.0), 対象数, 継続ターン)
function s_enemy_attr_weaken(attr, rate, tnum, t) {
	return m_create_enemy_move(function (fld, n, pnow, is_counter) {
		var wattr_str = "";
		for (var i = 0; i < 5; i++) {
			if (attr[i] > 0) {
				if (wattr_str != "") {
					wattr_str += "/";
				}
				wattr_str += fld.Constants.Attr[i];
			}
		}
		s_enemy_abstate_attack(
			fld, "属性弱体化[" + wattr_str + "](" + rate + "倍)",
			"attr_weaken", t, tnum, n, is_counter, {
				bef_damage: function (fld, bef_rate) {
					return bef_rate * rate;
				},
			}
		);
	});
}

// AS封印(対象数, 継続ターン)
function s_enemy_as_sealed(tnum, t) {
	return m_create_enemy_move(function (fld, n, pnow, is_counter) {
		s_enemy_abstate_attack(
			fld, "AS封印", "as_sealed", t, tnum, n, is_counter, {
				bef_answer: function (f, as) {
					return as.isdefault === true;
				}
			}
		);
	});
}

// SS封印(対象数, 継続ターン)
function s_enemy_ss_sealed(tnum, t) {
	return m_create_enemy_move(function (fld, n, pnow, is_counter) {
		s_enemy_abstate_attack(
			fld, "SS封印", "ss_sealed", t, tnum, n, is_counter, {
				ss_disabled: true,
			}
		);
	});
}

// 封印(対象数, 継続ターン)
function s_enemy_all_sealed(tnum, t) {
	return m_create_enemy_move(function (fld, n, pnow, is_counter) {
		s_enemy_abstate_attack(
			fld, "封印", "all_sealed", t, tnum, n, false, {
				bef_answer: function (f, as) {
					return false;
				},
				bef_skillcounter: function (f, ai) {
					return false;
				},
				ss_disabled: true,
			}
		);
	});
}


// -----------------------------------
// 反射/カウンター関係
// -----------------------------------
// スキル反射(単発ダメージ)
function skill_counter(damage, t) {
	return m_create_enemy_move(function(fld, n){
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: スキル反射待機");
		enemy.turn_effect.push({
			desc: "スキル反射(" + damage + ")",
			type: "skill_counter",
			icon: "skill_counter",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function (){},
			on_ss_damage: function (fld, ei, ai) {
				Field.log_push("Enemy[" + (ei + 1) + "]: スキル反射発動(対象: Unit[" + (ai + 1) + "])");
				damage_ally(damage, ai, true);
			}
		});
	});
}

// 物理カウンター(単発ダメージ)
function attack_counter(damage, t) {
	return m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: 物理カウンター");
		enemy.turn_effect.push({
			desc: "物理カウンター(" + damage + ")",
			type: "attack_counter",
			icon: "attack_counter",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function () { },
			on_attack_damage: function (fld, ei, ai) {
				Field.log_push("Enemy[" + (ei + 1) + "]: 物理カウンター発動(対象: Unit[" + (ai + 1) + "])");
				damage_ally(damage, ai, true);
			}
		});
	});
}

// ダメージに反応してあれこれする
function damage_switch(cond, func) {
	return m_create_enemy_move(function (fld, n) {
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
	});
}

// -----------------------------------
// ダメージ関係
// -----------------------------------
// ダメージブロック(自身)
function damage_block_own(bl, t) {
	return m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: ダメージブロック(" + bl + ")");
		enemy.turn_effect.push({
			desc: "ダメージブロック(" + bl + ")",
			type: "damage_block",
			icon: "damage_block",
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
	});
}

// ダメージブロック(全体)
function damage_block_all(bl, t) {
	return m_create_enemy_move(function (fld, n) {
		var enemys = GetNowBattleEnemys();
		for (var i = 0; i < enemys.length; i++) {
			damage_block_own(bl, t)(fld, i);
		}
	});
}

// 鉄壁防御
function impregnable(t) {
	return m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: 鉄壁防御");
		enemy.turn_effect.push({
			desc: "鉄壁防御",
			type: "impregnable",
			icon: "impregnable",
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
	});
}

// -----------------------------------
// 敵状態変化
// -----------------------------------
// 属性変化
function attr_change(after) {
	return m_create_enemy_move(function (fld, n) {
		var e = GetNowBattleEnemys(n);
		var bef = e.attr;
		e.attr = after;
		Field.log_push("Enemy[" + (n + 1) + "]: 属性変化("
			+ fld.Constants.Attr[bef] + "→" + fld.Constants.Attr[after] + ")");
	});
}

// -----------------------------------
// その他
// -----------------------------------
// チェイン解除
function s_enemy_chain_break() {
	return m_create_enemy_move(function (fld, n) {
		if (fld.Status.chain_status <= 0) {
			fld.Status.chain = 0;
			Field.log_push("Enemy[" + (n + 1) + "]: チェイン解除");
		} else {
			Field.log_push("Enemy[" + (n + 1) + "]: チェイン解除(無効)");
		}
	});
}

// チェイン封印
function s_enemy_chain_sealed(t) {
	return m_create_enemy_move(function (fld, n) {
		if (fld.Status.chain_status <= 0) {
			fld.Status.chain_status = -1;
			fld.Status.chainstat_turn = t;
			Field.log_push("Enemy[" + (n + 1) + "]: チェイン封印(" + t + "t)");
		} else {
			Field.log_push("Enemy[" + (n + 1) + "]: チェイン封印(無効)");
		}
	});
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