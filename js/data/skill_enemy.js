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

// ダメージに反応してあれこれする(条件関数, 実行関数, ダメージフラグに関わらず常に実行するかどうか)
function damage_switch(cond, func, is_always) {
	var rst = m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		enemy.turn_effect.push({
			desc: null,
			type: "damage_switch",
			isdual: true,
			turn: -1,
			lim_turn: -1,
			effect: function () { },
			cond: cond,
			on_cond: m_enemy_once(func),
			oncond_anytime: is_always === true,
		});
	});
	return rst;
}

// -----------------------------------
// 攻撃
// -----------------------------------
// (内部用)攻撃
function _s_enemy_attack(fld, dmg, ei, ai, is_dmg_const) {
	var e = GetNowBattleEnemys(ei);
	var cd = fld.Allys.Deck[ai];
	var now = fld.Allys.Now[ai];
	if (!is_dmg_const) {
		// 属性倍率
		var rate = attr_magnification(e.attr, cd.attr[0]);
		// 属性軽減取得
		var relief = card_attr_relief(cd, now, e.attr);
		// 攻撃前スキル(主に弱体化)確認
		$.each(now.turn_effect, function (i, e) {
			e.bef_damage ? rate = e.bef_damage(fld, rate) : false;
		});
		// 乱数
		var rnd = damage_rand();
		// 最終ダメ
		var l_dmg = Math.floor(dmg * (1 - relief) * rnd * rate);
	} else {
		var l_dmg = Math.floor(dmg);
	}
	damage_ally(l_dmg, ai, true);
}

// 普通の攻撃(不利属性相手への単発ダメージ, 攻撃対象数, 攻撃回数, 攻撃対象詳細)
//   攻撃対象詳細: true: 連撃時攻撃対象を毎回変える / false: 変えない / func(): 条件指定
function s_enemy_attack(dmg, tnum, atkn, tgtype) {
	return m_create_enemy_move(function (fld, n, nows) {
		// ログ出力
		Field.log_push("Enemy[" + (n + 1) + "]: " +
			(tnum < fld.Allys.Deck.length ? tnum : "全") + "体" +
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

// 属性特攻(有利属性時ダメ, 不利属性時ダメ, 特攻属性, 攻撃対象数, 攻撃回数, 対象詳細)
function s_enemy_attack_attrsp(dmg_s, dmg_n, attr, tnum, atkn, tgtype) {
	return m_create_enemy_move(function (fld, n, nows) {
		// ログ出力
		Field.log_push("Enemy[" + (n + 1) + "]: " +
			(tnum < fld.Allys.Deck.length ? tnum : "全") + "体属性特攻" +
			(atkn > 1 ? atkn + "連撃(" : "攻撃(") + dmg_s + ")");
		// 攻撃対象取得
		var tg = gen_enemytarget_array(tnum, atkn, tgtype, nows);
		// 攻撃
		for (var i = 0; i < tg.length; i++) {
			for (var j = 0; j < tg[i].length; j++) {
				var targ = tg[i][j];
				var cd = fld.Allys.Deck[targ];
				var e = GetNowBattleEnemys(targ);
				var dmg = (attr == cd.attr[0]) ? dmg_s : dmg_n;
				_s_enemy_attack(fld, dmg, n, targ);
			}
		}
	});
}

// 割合ダメージ(削り幅, 攻撃対象数, 対象詳細)
function s_enemy_attack_ratio(rate, tnum, tgtype) {
	return m_create_enemy_move(function (fld, n, nows, is_counter) {
		// ログ出力
		Field.log_push("Enemy[" + (n + 1) + "]: " +
			(tnum < fld.Allys.Deck.length ? tnum : "全") + "体割合攻撃(" +
			(rate * 100) + "%)");
		// 攻撃対象取得
		var tg = gen_enemytarget_array(tnum, 1, tgtype, nows);
		// 攻撃
		for (var i = 0; i < tg.length; i++) {
			for (var j = 0; j < tg[i].length; j++) {
				var targ = tg[i][j];
				var nw = fld.Allys.Now[targ];
				var dmg = nw.nowhp * rate;
				_s_enemy_attack(fld, dmg, n, targ, true);
				if (!is_counter) {
					// スキルカウンターを有効に
					nw.flags.skill_counter[n] = true;
				}
			}
		}
	});
}

// 亡者の怨念
function s_enemy_attack_deadgrudge(r1, r2, r3, tgtype) {
	return m_create_enemy_move(function (fld, n, nows, is_counter) {
		var rates = [r1, r2, r3, r3];
		var deadnum = 0;
		var es = GetNowBattleEnemys();
		$.each(es, function (i, e) {
			if (e.nowhp <= 0) {
				deadnum++;
			}
		});
		fld.log_push("Enemy[" + (n + 1) + "]: 亡者の怨念発動");
		return s_enemy_attack(rates[deadnum], 1, 1, tgtype).move(fld, n, nows, is_counter);
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
		var logtext = "";
		var card = fld.Allys.Deck[tg[i]];
		var now = fld.Allys.Now[tg[i]];
		var eff_obj = $.extend(true, {}, {
			desc: desc,
			type: type,
			icon: type,
			isabstate: true,
			iscursebreak: false,
			isdual: false,
			isreduce_stg: true,
			turn: turn,
			lim_turn: turn,
			effect: function () { },
		}, f_obj);
		// 潜在の状態無効を確認
		var is_abs_guard_aw = Awake_AbsInvalid(card, now, type);
		// 異常攻撃前効果を発動させ、戻り値がfalseのものが1つ以上あったら無効
		// ユーザー側の攻撃前効果(ex: 異常無効)
		var is_abs_guard = $.grep(now.turn_effect, function (e) {
			return e.bef_absattack && !e.bef_absattack(fld, tg[i], ei);
		}).length > 0;
		// 攻撃側の攻撃前効果(ex: 回復反転の光闇除外)
		if(eff_obj.bef_absattack){
			is_abs_guard = is_abs_guard || !eff_obj.bef_absattack(fld, tg[i], ei);
		}
		if (!is_abs_guard && !is_abs_guard_aw && !disable_guard) {
			// 追加
			now.turn_effect.push(eff_obj);
			if (ei >= 0) {
				logtext += "Enemy[" + (ei + 1) + "]: ";
			}
			logtext += desc + "(" + turn + "t)(対象: Unit[" + (tg[i] + 1) + "])";
		} else {
			// 無効
			if (ei >= 0) {
				logtext += "Enemy[" + (ei + 1) + "]: ";
			}
			logtext += desc + "(" + turn + "t)(対象: Unit[" + (tg[i] + 1) + "])(無効)";
		}
		fld.log_push(logtext);
		if (!is_counter) {
			// スキルカウンターを有効に
			now.flags.skill_counter[ei] = true;
		}
		// スキル重複確認
		turn_effect_check(false);
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
						f.log_push("Unit[" + (oi + 1) + "]: 毒(" + d + "ダメージ)");
						damage_ally(d, oi, true);
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

// 死の秒針(対象数, 残りターン)
function s_enemy_deathlimit(tnum, limit) {
	return m_create_enemy_move(function (fld, n, pnow, is_counter) {
		s_enemy_abstate_attack(
			fld, "死の秒針", "death_limit", limit, tnum, n, false, {
				isreduce_stg: false,
				effect: function (f, oi, teff, state) {
					var nowtg = f.Allys.Now[oi];
					if (state == "end") {
						f.log_push("Unit[" + (oi+1) + "]: 死の秒針 - 残り0t");
						damage_ally(nowtg.maxhp, oi, true);
					}
				},
			}
		);
	});
}

// 回復反転(効果値, 対象数)【未実装】
function s_enemy_healrebase(rate, tnum) {
	return m_create_enemy_move(function (fld, n, pnow, is_counter) {
		s_enemy_abstate_attack(
			fld, "回復反転(" + (rate*100) + "%)",
			"heal_rebase", -1, tnum, n, false, {
				// 光闇属性なら反転は無効
				bef_absattack: function (fld, oi, ei) {
					var card = fld.Allys.Deck[oi];
					return !(card.attr[1] >= 3 && card.attr[1] <= 4);
				}
				// 後で実装
			}
		);
	});
}


// 呪い(HP低下値, 対象数, 継続ターン)
function s_enemy_cursed(hpdown, tnum, t) {
	return m_create_enemy_move(function (fld, n, pnow, is_counter) {
		var tg = !tnum.length ? gen_enemytarget_array(tnum, 1, false)[0] : tnum;
		for (var i = 0; i < tg.length; i++) {
			var card = fld.Allys.Deck[tg[i]];
			var now = fld.Allys.Now[tg[i]];
			// 追加
			var eff_obj = $.extend(true, {}, {
				desc: "呪い(HP: " + (-hpdown) + ")",
				type: "curse",
				icon: "curse",
				isabstate: false,
				iscursebreak: false,
				isdual: false,
				isreduce_stg: true,
				turn: t,
				lim_turn: t,
				hpdown: hpdown,
				effect: function (f, oi, teff, state) {
					var nowtg = f.Allys.Now[oi];
					if (state == "first") {
						// HP低下
						nowtg.maxhp = Math.max(-hpdown + nowtg.maxhp, 1);
						nowtg.nowhp = Math.min(nowtg.nowhp, nowtg.maxhp);
						// 効果解除
						turneff_break_cond(nowtg.turn_effect, oi, function (teff) {
							return teff.iscursebreak;
						});
					}
					else if (state == "end" || state == "overlay") {
						nowtg.maxhp += hpdown;
						nowtg.nowhp = Math.min(nowtg.nowhp + hpdown, nowtg.maxhp);
					}
				},
			});
			// 潜在の状態無効を確認
			var is_abs_guard_aw = Awake_AbsInvalid(card, now, "curse");
			if (!is_abs_guard_aw) {
				now.turn_effect.push(eff_obj);
				// スキル重複確認
				turn_effect_check(false);
			}
			fld.log_push("Enemy[" + (n + 1) + "]: 呪い(HP:" + (-hpdown) + "|" + t + "t)(対象: Unit[" + (tg[i] + 1) + "])");
		}
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
			on_ss_damage: function (f, ei, ai) {
				f.log_push("Enemy[" + (ei + 1) + "]: スキル反射発動(対象: Unit[" + (ai + 1) + "])");
				damage_ally(damage, ai, true);
			}
		});
	});
}

// スキル反射(スキル実行)
// (反射スキル関数「の関数」, 説明, ターン数, 反射が単体か, 反射スキル関数の引数1-4(単体反射の場合tnumの部分をnullに))
// (※実装を間違えてすごく雑な対応になってしまった)
function skill_counter_func(skill, desc, t, is_tgonly, p1, p2, p3, p4) {
	return m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: スキル反射待機");
		enemy.turn_effect.push({
			desc: "スキル反射(" + desc + ")",
			type: "skill_counter",
			icon: "skill_counter",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function () { },
			on_ss_damage: function (f, ei, ai) {
				f.log_push("Enemy[" + (ei + 1) + "]: スキル反射発動" + 
					(is_tgonly ? "(対象: Unit[" + (ai + 1) + "])" : ""));
				var p_1 = (!is_tgonly || p1 !== null) ? p1 : [ai];
				var p_2 = (!is_tgonly || p2 !== null) ? p2 : [ai];
				var p_3 = (!is_tgonly || p3 !== null) ? p3 : [ai];
				var p_4 = (!is_tgonly || p4 !== null) ? p4 : [ai];
				skill(p_1, p_2, p_3, p_4).move(f, ei);
			}
		});
	});
}

// SS反応(味方スキルに反応する)
function skill_response(skill) {
	return m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		enemy.turn_effect.push({
			desc: null,
			type: "skill_response",
			isdual: false,
			turn: -1,
			lim_turn: -1,
			effect: function () { },
			on_ss_invoke: function (f, ei) {
				f.log_push("Enemy[" + (ei + 1) + "]: SS反応スキル発動");
				skill.move(f, ei);
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
			on_attack_damage: function (f, ei, ai) {
				f.log_push("Enemy[" + (ei + 1) + "]: 物理カウンター発動(対象: Unit[" + (ai + 1) + "])");
				damage_ally(damage, ai, true);
			}
		});
	});
}

// 物理カウンター(多段式ダメージ)
function attack_counter_dual(damage, t) {
	return m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		Field.log_push("Enemy[" + (n + 1) + "]: 物理カウンター");
		enemy.turn_effect.push({
			desc: "多段式カウンター(" + damage + ")",
			type: "attack_counter",
			icon: "attack_counter_dual",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function () { },
			on_attack_damage: function (f, ei, ai) {
				f.log_push("Enemy[" + (ei + 1) + "]: 多段式カウンター発動(対象: Unit[" + (ai + 1) + "])");
				var atk_ct = GetNowBattleEnemys(ei).flags.is_as_attack[ai];
				for (var i = 0; i < atk_ct; i++) {
					damage_ally(damage, ai, true);
				}
			}
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
			damage_block_own(bl, t).move(fld, i);
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
// 敵状態変化 etc.
// -----------------------------------
// 分裂(自分自身が残った場合に発動/何回でも発動)
function s_enemy_division(copyhp) {
	return m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		enemy.turn_effect.push({
			desc: null,
			type: "enemy_division",
			isdual: false,
			turn: -1,
			lim_turn: -1,
			effect: function () { },
			cond: s_enemy_when_dead_l(),
			on_cond: m_create_enemy_move(function (f, i) {
				// 複製先
				var copyto = i != 0 ? 0 : 1;
				var hprate = copyhp ? copyhp : 1;
				var ens = Field.Enemys.Data[Field.Status.nowbattle - 1].enemy;
				ens[copyto] = $.extend(true, {}, GetNowBattleEnemys(i));
				ens[copyto].nowhp = ens[copyto].hp * hprate;
				fld.log_push("Enemy[" + (n + 1) + "]: 分裂");
			}),
			oncond_anytime: true,
		});
	});
}

// 敵全体を回復
function s_enemy_heal_all(rate) {
	return m_create_enemy_move(function (fld, n) {
		var es = GetNowBattleEnemys();
		$.each(es, function (i, e) {
			if (e.nowhp <= 0) { return; }
			var heal_v = e.hp * rate;
			e.nowhp = Math.min(e.nowhp + heal_v, e.hp);
			fld.log_push("Enemy[" + (i + 1) + "]: HP回復(" + heal_v + ")");
		})
	});
}

// 自分自身を回復
function s_enemy_heal_own(rate) {
	return m_create_enemy_move(function (fld, n) {
		var e = GetNowBattleEnemys(n);
		if (e.nowhp <= 0) { return; }
		var heal_v = e.hp * rate;
		e.nowhp = Math.min(e.nowhp +heal_v, e.hp);
		fld.log_push("Enemy[" +(i +1) + "]: HP回復(" +heal_v + ")");
	}); 
}

// 力溜め
function s_enemy_force_reservoir() {
	return m_create_enemy_move(function (fld, n) {
		var enemy = GetNowBattleEnemys(n);
		fld.log_push("Enemy[" + (n + 1) + "]: 力溜め");
		enemy.turn_effect.push({
			desc: "力溜め",
			type: "force_reservoir",
			icon: "force_reservior",	// typo
			isdual: false,
			turn: -1,
			lim_turn: -1,
			effect: function () { },
		});
	});
}

// 怒り状態
function m_enemy_angry() {
	return m_create_enemy_move(function (fld, n) {
		var e = GetNowBattleEnemys(n);
		// 怒り状態にする
		e.move.isangry = true;
		// log
		fld.log_push("Enemy[" + (n + 1) + "]: 怒り");
		// 怒り時のスキルを発動
		if (e.move.on_angry) {
			for (var i = 0; i < e.move.on_angry.length; i++) {
				e.move.on_angry[i].move(fld, n);
			}
		}
		// 参照カウントをリセット
		e.move.m_index = 0;
	});
}

// 属性変化
function attr_change(after) {
	return m_create_enemy_move(function (fld, n) {
		var e = GetNowBattleEnemys(n);
		var bef = e.attr;
		e.attr = after;
		fld.log_push("Enemy[" + (n + 1) + "]: 属性変化("
			+ fld.Constants.Attr[bef] + "→" + fld.Constants.Attr[after] + ")");
	});
}

// -----------------------------------
// その他
// -----------------------------------
// スキルディスチャージ
function s_enemy_discharge(tnum, minus_turn) {
	return m_create_enemy_move(function (fld, n) {
		var nows = fld.Allys.Now;
		$.each(nows, function (i, e) {
			var card = fld.Allys.Deck[i];
			var endcharge = card.islegend ? card.ss2.turn : card.ss1.turn;
			e.ss_current = Math.max(Math.min(endcharge, e.ss_current) - minus_turn, 0);
			// チャージできないように(仕様？)
			e.ss_isboost = true;
			// スキルカウンターを有効に
			nows[i].flags.skill_counter[n] = true;
		});
		fld.log_push("Enemy[" + (n + 1) + "]: スキルディスチャージ(-" + minus_turn + "t)");
	});
}


// チェイン解除
function s_enemy_chain_break() {
	return m_create_enemy_move(function (fld, n) {
		if (fld.Status.chain_status <= 0) {
			fld.Status.chain = 0;
			fld.log_push("Enemy[" + (n + 1) + "]: チェイン解除");
		} else {
			fld.log_push("Enemy[" + (n + 1) + "]: チェイン解除(無効)");
		}
	});
}

// チェイン封印
function s_enemy_chain_sealed(t) {
	return m_create_enemy_move(function (fld, n) {
		if (fld.Status.chain_status <= 0) {
			fld.Status.chain_status = -1;
			fld.Status.chainstat_turn = t;
			fld.log_push("Enemy[" + (n + 1) + "]: チェイン封印(" + t + "t)");
		} else {
			fld.log_push("Enemy[" + (n + 1) + "]: チェイン封印(無効)");
		}
	});
}

// -----------------------------------
// 条件
// -----------------------------------
// 指定した敵が倒れる
function s_enemy_when_dead(i1, i2) {
	return function (fld, n) {
		var rst = true;
		var e = GetNowBattleEnemys(i1);
		rst = rst && e.nowhp <= 0;
		if (i2 !== undefined) {
			e = GetNowBattleEnemys(i2);
			rst = rst && e.nowhp <= 0;
		}
		return rst;
	}
}

// 敵1体が倒れる
function s_enemy_when_dead_s() {
	return function (fld, n) {
		var rst = false;
		var es = GetNowBattleEnemys();
		for (var i = 0; i < es.length; i++) {
			if (i == n) { continue; }
			rst = rst || es[i].nowhp <= 0;
		}
		return rst;
	}
}

// 敵自身以外が倒れる
function s_enemy_when_dead_l() {
	return function (fld, n) {
		var rst = true;
		var es = GetNowBattleEnemys();
		for (var i = 0; i < es.length; i++) {
			if (i == n) { continue; }
			rst = rst && es[i].nowhp <= 0;
		}
		return rst;
	}
}

// HPが指定%以下
function s_enemy_when_hpdown(rate) {
	return function (fld, n) {
		var e = GetNowBattleEnemys(n);
		return e.nowhp <= Math.floor(e.hp * rate);
	}
}