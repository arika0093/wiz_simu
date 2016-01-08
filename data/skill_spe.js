// ------------------------------------------------------
// 基本系
// ------------------------------------------------------
// (内部用)関数なら実行、普通の値ならそのまま返す
function ss_ratedo(r, fld, oi, ti, is_fst) {
	if (r && r.caller !== undefined) {
		return r(fld, oi, ti, (is_fst !== false));
	} else {
		return r;
	}
}

// ------------------------------------------------------
// 攻撃系
// ------------------------------------------------------
// (内部用)敵にSSダメージ
function ss_damage(fld, r, atr, atkn, own, tg) {
	var enemy = GetNowBattleEnemys(tg);
	var now = fld.Allys.Now[own];
	var rnd = damage_rand();
	attack_enemy(enemy, now, atr, ss_ratedo(r, fld, own, tg), atkn, [atr],
		fld.Status.chain, rnd, own, tg, true);
	// SSフラグを立てる
	enemy.flags.is_ss_attack = true;
}

// 敵全体に指定属性のダメージ
function ss_damage_all(r, attrs) {
	return function (fld, n) {
		for (var a = 0; a < attrs.length; a++) {
			var atr = attrs[a];
			for (var i = 0; i < GetNowBattleEnemys().length; i++) {
				// 攻撃
				var rt = ss_ratedo(r, fld, n, i, (a == 0) && (i == 0));
				ss_damage(fld, rt, atr, 1, n, i);
			}
		}
		return true;
	};
}

// 敵単体に指定属性のダメージ
function ss_damage_s(r, attrs, atn) {
	return function (fld, n) {
		var enemys = GetNowBattleEnemys();
		atkn = ss_ratedo(atn, fld, n);
		for (var an = 0; an < atkn; an++) {
			for (var a = 0; a < attrs.length; a++) {
				// 攻撃
				var atr = attrs[a];
				var atk_order = auto_attack_order(enemys, atr, n);
				var rt = ss_ratedo(r, fld, n, atk_order, (a == 0) && (an == 0));
				ss_damage(fld, rt, atr, atkn, n, atk_order);
			}
		}
		return true;
	};
}

// 敵全体に割合ダメージ
function ss_ratiodamage_all(r) {
	return function (fld, n) {
		var ratio = ss_ratedo(r, fld, n);
		var enemys = GetNowBattleEnemys();
		for (var i = 0; i < enemys.length; i++) {
			var e = enemys[i];
			var dmg = Math.floor(e.nowhp * ratio);
			e.nowhp = Math.max(e.nowhp - dmg, 0);
			// SSフラグを立てる
			e.flags.is_ss_attack = true;
			fld.log_push("Enemy[" + (i + 1) + "]: 割合ダメージ(" + (ratio * 100) + "%)(" + dmg + "ダメージ)");
		}
		return true;
	}
}

// 敵単体に割合ダメージ
function ss_ratiodamage_s(r) {
	return function (fld, n) {
		var ratio = ss_ratedo(r, fld, n);
		var enemys = GetNowBattleEnemys();
		var tg = auto_attack_order(enemys, -1, n);
		var e = enemys[tg];
		var dmg = Math.floor(e.nowhp * ratio);
		e.nowhp = Math.max(e.nowhp - dmg, 0);
		// SSフラグを立てる
		e.flags.is_ss_attack = true;
		fld.log_push("Enemy[" + (tg + 1) + "]: 割合ダメージ(" + (ratio * 100) + "%)(" + dmg + "ダメージ)");
		return true;
	}
}

// スキルカウンター待機(効果値, ターン数)
function ss_skillcounter(r, t) {
	return function (fld, n) {
		var rate = ss_ratedo(r, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			if (now.nowhp <= 0) { continue; }
			now.turn_effect.push({
				desc: "スキルカウンター待機(" + (rate * 100) + "%)",
				type: "ss_skill_counter",
				icon: "skill_counter",
				isdual: false,
				turn: t,
				lim_turn: t,
				priority: 99,
				effect: function (f, oi, teff, state, is_t, is_b) {
					var card = f.Allys.Deck[oi];
					var now_e = f.Allys.Now[oi];
					var sc_flag = now_e.flags.skill_counter;
					// スキルカウンター前行動
					var is_sc_cancel = $.grep(now_e.turn_effect, function (e) {
						return e.bef_skillcounter && !e.bef_skillcounter(f, oi);
					}).length > 0;
					if (is_t && !is_b && sc_flag.length > 0 && !is_sc_cancel) {
						fld.log_push("Unit[" + (oi + 1) + "]: スキルカウンター発動(" + (rate * 100) + "%)");
						// スキルカウンター対象の敵の数だけ繰り返す
						for (var sci = 0; sci < sc_flag.length; sci++) {
							if (!sc_flag[sci]) { continue; }
							for (var atri = 0; atri < card.attr.length; atri++) {
								// 攻撃
								if (card.attr[atri] >= 0) {
									ss_damage(f, rate, card.attr[atri], 1, oi, sci);
								}
							}
						}
						now_e.flags.skill_counter = [];
					}
				},
			});
		}
		fld.log_push("スキルカウンター待機(" + (rate * 100) + "%, " + t + "t)");
		return true;
	}
}

// ------------------------------------------------------
// 敵関連系
// ------------------------------------------------------
// 毒ダメージを与える
function poison(dm, t) {
	return function (fld, n) {
		var enemys = GetNowBattleEnemys();
		var dmg = ss_ratedo(dm, fld, n);
		for (var i = 0; i < enemys.length; i++) {
			(function () {
				var indx = i;
				var e = enemys[indx];
				if (e.nowhp <= 0) { return; }
				e.turn_effect.push({
					desc: "毒(" + dm + ")",
					type: "poison",
					icon: "poison",
					isdual: false,
					turn: t,
					lim_turn: t,
					is_poison: true,
					effect: function (f, ei, teff, state, is_t, is_b) {
						if (is_t && !is_b) {
							e.nowhp = Math.max(e.nowhp - dmg, 0);
							if (e.nowhp <= 0) {
								// HPが0になったら敵スキルを全て解除
								turneff_allbreak(e.turn_effect, false);
							}
							fld.log_push("Enemy[" + (indx + 1) + "]: 毒(" + dmg + "ダメージ)");
						}
					},
				});
			})();
			// SSフラグを立てる
			enemys[i].flags.is_ss_attack = true;
		}
		return true;
	}
}

// ------------------------------------------------------
// 味方サポート系
// ------------------------------------------------------
// 全体エンハ
function ss_enhance_all(p, t, attr) {
	return function (fld, n) {
		if (!attr) {
			// 属性未指定なら全属性Up
			attr = [1,1,1,1,1];
		}
		var rate = ss_ratedo(p, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var cd = fld.Allys.Deck[i];
			var now = fld.Allys.Now[i];
			if (now.nowhp > 0 && attr[cd.attr[0]] > 0) {
				ss_enhance_own(p, t, true)(fld, i);
			}
		}
		fld.log_push("味方全体攻撃力Up(" + (rate * 100) + "%, " + t + "t)");
		return true;
	};
}

// 単体エンハ
function ss_enhance_own(p, t, _nolog) {
	return function (fld, n) {
		var rate = ss_ratedo(p, fld, n);
		var now = fld.Allys.Now[n];
		now.turn_effect.push({
			desc: "攻撃力アップ(" + (rate * 100) + "%)",
			type: "ss_enhance",
			icon: "enhance",
			isdual: false,
			turn: t,
			lim_turn: t,
			effect: function (f, oi, teff, state) {
				if (state == "first") {
					f.Allys.Now[oi].ss_enhance = rate;
				}
				else if (state == "end" || state == "overlay") {
					f.Allys.Now[oi].ss_enhance = 0;
				}
			},
		});
		if (!_nolog) {
			fld.log_push("Unit[" + (n + 1) + "]: 攻撃力Up(" + (rate * 100) + "%, " + t + "t)");
		}
		return true;
	}
}

// 全体ステアップ
//   例: ss_statusup_all([500, 500], [2000, 2000], -1)
function ss_statusup_all(up_arr, up_limit, t) {
	return function (fld, n) {
		var up_arrs_b = ss_ratedo(up_arr, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			if (now.nowhp <= 0) { continue; }

			var up_arrs = $.extend([], up_arrs_b);
			// 既にかかってるステアップの値を取得する
			$.each(now.turn_effect, function (i, e) {
				if (e.type == "ss_statusup") {
					up_arrs[0] += e.up_hp;
					up_arrs[1] += e.up_atk;
				}
			});
			// 上限に達してたら上限に合わせる
			up_arrs[0] = Math.min(up_arrs[0], up_limit[0]);
			up_arrs[1] = Math.min(up_arrs[1], up_limit[1]);
			// 出力
			now.turn_effect.push({
				desc: "ステータスアップ(HP: " + up_arrs[0] + "/ATK: " + up_arrs[1] + ")",
				type: "ss_statusup",
				icon: "statusup",
				isdual: false,
				turn: t,
				lim_turn: t,
				up_hp: up_arrs[0],
				up_atk: up_arrs[1],
				effect: function (f, oi, teff, state) {
					var card = f.Allys.Deck[oi];
					var nowtg = f.Allys.Now[oi];
					if (state == "first") {
						nowtg.maxhp += teff.up_hp;
						nowtg.nowhp += teff.up_hp;
						nowtg.atk += teff.up_atk;
					}
					else if (state == "end" || state == "overlay") {
						nowtg.maxhp -= teff.up_hp;
						nowtg.nowhp = Math.min(nowtg.nowhp, nowtg.maxhp);
						nowtg.atk -= teff.up_atk;
					}
				},
			});
		}
		fld.log_push("味方全体ステータスUp(HP:" + up_arrs[0] + ", ATK: " + up_arrs[1] +
			(t != -1 ? (", " + t + "t") : "") + ")");
		return true;
	};
}

// 全体状態異常無効(ターン数)
function ss_absattack_disable(t) {
	return function (fld, n) {
		var rate = ss_ratedo(r, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			if (now.nowhp <= 0) { continue; }
			now.turn_effect.push({
				desc: "状態異常無効",
				type: "ss_absattack_disable",
				icon: "absattack_disable",
				isdual: false,
				turn: t,
				lim_turn: t,
				effect: function () { },
				bef_absattack: function (fld, oi, ei) {
					return false;
				}
			});
		}
		return true;
	}
}

// スキルブースト(早めるターン数)
function ss_skillboost(f) {
	return function (fld, n) {
		var f_rate = ss_ratedo(f, fld, n);
		var rst = false;
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			// 自分にスキブをかけない
			if (i == n) { continue; }
			// スキブ処理
			var card = fld.Allys.Deck[i];
			var now = fld.Allys.Now[i];
			if (now.nowhp <= 0) { continue; }
			if (!now.ss_isboost && !is_legendmode(card, now)) {
				now.ss_current += f_rate;
				now.ss_isboost = true;
				rst = true;
			}
		}
		return rst;
	}
}

// ------------------------------------------------------
// チェイン関連系
// ------------------------------------------------------
// チェイン直接追加
function ss_addchain(ch) {
	return function (fld, n) {
		fld.Status.chain += ch;
		return true;
	}
}

// チェイン保護
function ss_chain_protect(t) {
	return function (fld, n) {
		fld.Status.chain_status = 1;
		fld.Status.chainstat_turn = t;
		Field.log_push("Enemy[" + (n + 1) + "]: チェイン保護(" + t + "t)");
		return true;
	}
}

// ------------------------------------------------------
// 味方回復系
// ------------------------------------------------------
// 単純回復
function ss_heal(p) {
	return function (fld, n) {
		var rate = ss_ratedo(p, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			var hr = now.maxhp * rate;
			heal_ally(hr, i);
		}
		fld.log_push("味方全体HP回復(" + (rate * 100) + "%)");
		return true;
	};
}

// 状態異常回復
function ss_abstate_cure() {
	return function (fld, n) {
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			for (var te = 0; te < now.turn_effect.length; te++) {
				if (now.turn_effect[te].isabstate) {
					now.turn_effect.splice(te, 1);
					te--;
				}
			}
		}
		fld.log_push("味方全体異常回復");
		return true;
	};
}

// リジェネ(割合, ターン数)
function ss_regenerate(p, t) {
	return function (fld, n) {
		var rate = ss_ratedo(p, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			now.turn_effect.push({
				desc: "HPを徐々に回復(" + (rate * 100) + "%)",
				type: "ss_regenerate",
				icon: "regenerate",
				isdual: false,
				priority: 1,
				turn: t,
				lim_turn: t,
				effect: function (f, oi, teff, state, is_t) {
					if (is_t) {
						var nd = f.Allys.Now[oi];
						var hr = Math.floor(nd.maxhp * rate);
						heal_ally(hr, oi);
						fld.log_push("Unit[" + (oi + 1) + "]: HP徐々に回復(+" + hr + ")");
					}
				},
			});
		}
		fld.log_push("味方全体リジェネ(" + (rate * 100) + "%, " + t + "t)");
		return true;
	}
}

// 起死回生(ターン数)
function ss_revival(r, t) {
	return function (fld, n) {
		var rate = ss_ratedo(r, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			if (now.nowhp <= 0) { continue; }
			now.turn_effect.push({
				desc: "起死回生",
				type: "ss_revival",
				icon: "revival",
				isdual: false,
				turn: t,
				lim_turn: t,
				effect: function () { },
				before_dead: function (f, oi) {
					var now = f.Allys.Now[oi];
					now.nowhp = Math.floor(now.maxhp * rate);
					f.log_push("Unit[" + (oi + 1) + "]: 起死回生発動");
				}
			});
		}
		return true;
	}
}

// 蘇生
function ss_resurrection(r, p) {
	return function (fld, n) {
		var rate = ss_ratedo(p, fld, n);
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var cd = fld.Allys.Card[i];
			var now = fld.Allys.Now[i];
			if (now.nowhp <= 0 && r[cd.attr[0]]) {
				now.nowhp = Math.min((now.maxhp * rate), now.maxhp);
			}
		}
		fld.log_push("味方全体蘇生(" + (rate * 100) + "%)");
		return true;
	};
}


// ------------------------------------------------------
// パネル付与系
// ------------------------------------------------------
// (内部用)パネル付与効果
function panel_addition(dsc, fc) {
	return function (fld, n) {
		fld.Status.panel_add.push({
			desc: dsc,
			func: fc,
		});
		return true;
	};
}

// 攻撃力アップパネル付与効果
function panel_attackup(p) {
	var dsc = "攻撃力アップ(" + (p * 100) + "%)";
	return panel_addition(dsc, function (fld) {
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			now.as_enhance = (now.as_enhance ? now.as_enhance : 0) + p;
		}
		fld.log_push("パネル付与効果: " + dsc);
	});
}

// チェインプラスパネル付与効果
function panel_chainplus(p) {
	var dsc = "チェインプラス(+" + p + ")";
	return panel_addition(dsc, function (fld) {
		if (fld.Status.chain_status >= 0) {
			fld.Status.chain += p;
			fld.log_push("パネル付与効果: " + dsc);
		}
	});
}

// 回復パネル付与効果
function panel_healally(r) {
	var dsc = "味方回復(" + (r * 100) + "%)";
	return panel_addition(dsc, function (fld) {
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			heal_ally(now.maxhp * r, i);
		}
		fld.log_push("パネル付与効果: " + dsc);
	});
}

// ------------------------------------------------------
// 解除系
// ------------------------------------------------------
// 敵スキル解除系テンプレ
function ss_break_template(target, type, logtext) {
	var _break_temp_fc = function (fld, oi, ei) {
		var is_break = false;
		var em = GetNowBattleEnemys(ei);
		for (var i = 0; i < em.turn_effect.length; i++) {
			var eff = em.turn_effect[i];
			// typeを含んでいる場合除く
			// (attack_counterが指定されてたら多段カウンターも除く)
			if (eff.type.indexOf(type) >= 0) {
				eff.splice(i, 1);
				i--;
				is_break = true;
			}
		}
		return is_break;
	};
	return function (fld, n) {
		var cd = fld.Allys.Deck[n];
		var es = GetNowBattleEnemys();
		if (target == "all") {
			for (var i = 0; i < es.length; i++) {
				_break_temp_fc(fld, n, i);
			}
		} else {
			_break_temp_fc(fld, n, auto_attack_order(es, cd.attr[0], n));
		}
	}
}

// カウンター解除(target: 対象["all":全体, その他:単体])
function ss_break_attackcounter(target) {
	return ss_break_template(target, "attack_counter");
}

// スキル反射解除(target: 対象["all":全体, その他:単体])
function ss_break_skillcounter(target) {
	return ss_break_template(target, "skill_counter");
}

// ガード解除(target: 対象["all":全体, その他:単体])
function ss_break_attrguard(target) {
	return ss_break_template(target, "attr_guard");
}

// ダメブロ解除(target: 対象["all":全体, その他:単体])
function ss_break_dblock(target) {
	return ss_break_template(target, "damage_block");
}

// ------------------------------------------------------
// その他
// ------------------------------------------------------
// SSコピー
function ss_latest_copy() {
	var func = function (fld, n) {
		if (fld.Status.latest_ss) {
			var ss = fld.Status.latest_ss;
			for (var i = 0; i < ss.proc.length; i++) {
				ss_rst = ss.proc[i](fld, n);
			}
			return true;
		} else {
			return false;
		}
	};
	func.is_skillcopy = true;
	return func;
}

// ------------------------------------------------------
// 条件/効果値分岐系
// ------------------------------------------------------
// (内部用)初回値を取得するタイプの関数の場合に使用
function get_fstval(f) {
	var rate = 0;
	return function (fld, oi, ei, is_fst) {
		if (is_fst) {
			rate = f(fld, oi, ei);
		}
		return rate;
	}
}

// HP条件(一定以上)
// 例: HP20%以上で5, それ以外で2の時は ss_hp_more(0.2, 5, 2)
function ss_hp_more(cond, a, b) {
	return function (fld, oi, ei) {
		var now = fld.Allys.Now[i];
		return (now.nowhp >= (now.maxhp * cond)) ? a : b;
	}
}

// HP条件(一定以下)
function ss_hp_less(cond, a, b) {
	return function (fld, oi, ei) {
		var now = fld.Allys.Now[i];
		return (now.nowhp <= (now.maxhp * cond)) ? a : b;
	}
}

// HP条件(一定未満)
function ss_hp_under(cond, a, b) {
	return function (fld, oi, ei) {
		var now = fld.Allys.Now[i];
		return (now.nowhp < (now.maxhp * cond)) ? a : b;
	}
}

// 属性特攻
function special_attr(attrs, a, b) {
	return function (fld, oi, ei) {
		var e = GetNowBattleEnemys(ei);
		// 表記値+100%(バグ？)
		return ((attrs[e.attr] > 0) ? a : b) + 1;
	}
}

// 味方全体自傷して自傷した数だけ効果値を増やす
function ss_consume_all_cond(base, p) {
	return get_fstval(function (fld, oi) {
		return base * ss_consume_all(p)(fld, oi);
	});
}

// 自身が毒かどうか
function ss_is_poison_own(a, b) {
	return function (fld, oi) {
		var now = fld.Allys.Now[oi];
		var is_poison = $.grep(now.turn_effect, function (e) {
			return e.type == "poison";
		}).length > 0;
		if (is_poison) {
			return a;
		}
		return b;
	};
}

// 相手が毒かどうか
function ss_is_poison_enemy(a, b) {
	return function (fld, oi, ei) {
		var edat = GetNowBattleEnemys[ei];
		var is_poison = $.grep(edat.turn_effect, function (e) {
			return e.type == "poison";
		}).length > 0;
		if (is_poison) {
			return a;
		}
		return b;
	};
}

// チェイン分岐
function ss_chain_cond(ch, a, b) {
	return function (fld) {
		if (fld.Status.chain >= ch) {
			return a;
		}
		return b;
	};
}

// チェイン消費
function ss_chain_cost(ch, a, b) {
	return get_fstval(function (fld) {
		if (fld.Status.chain >= ch) {
			fld.Status.chain -= ch;
			fld.log_push("チェイン消費: " + ch);
			return a;
		}
		return b;
	});
}

// ------------------------------------------------------
// デメリット系
// ------------------------------------------------------
// 自分に割合pのダメージを与える
function ss_consume_own(p) {
	return function (fld, n) {
		var now = fld.Allys.Now[n];
		var dmg = Math.floor(p * now.maxhp);
		fld.log_push("Unit[" + (n + 1) + "]: 自傷(" + (p * 100) + "%)");
		damage_ally(dmg, n);
		return true;
	};
}

// 味方全体に割合pのダメージを与える
function ss_consume_all(p) {
	return function (fld, n) {
		var ct = 0;
		fld.log_push("全体自傷(" + (p * 100) + "%)");
		for (var i = 0; i < fld.Allys.Deck.length; i++) {
			var now = fld.Allys.Now[i];
			var dmg = Math.floor(p * now.maxhp);
			if (now.nowhp > 0) {
				damage_ally(dmg, i);
				ct++;
			}
		}
		return ct;
	};
}

// 自身を封印状態にする
function ss_allsealed_own(t) {
	return function (fld, n) {
		var tnum = [n, ];
		// 封印攻撃を呼ぶ
		s_enemy_abstate_attack(
			fld, "封印", "all_sealed", t, tnum, -1, true, {
				bef_answer: function (f, as) {
					return false;
				},
				bef_skillcounter: function (f, ai) {
					return false;
				},
				ss_disabled: true,
			}
		);
		return true;
	}
}