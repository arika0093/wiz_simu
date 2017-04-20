// SS関数定義リスト
var SpSkill = {
	// -----------------------------
	// 敵全体に属性ダメージ
	"ss_damage_all": function (fld, n, cobj, params) {
		var r = params[0];
		var attrs = params[1];
		var ignore_counter = params[2];

		for (var a = 0; a < attrs.length; a++) {
			var atr = attrs[a];
			for (var i = 0; i < GetNowBattleEnemys().length; i++) {
				// 攻撃
				ss_damage(fld, r, atr, 1, n, i, ignore_counter);
			}
		}
		return true;
	},
	// -----------------------------
	// 敵単体に属性ダメージ
	"ss_damage_s": function (fld, n, cobj, params) {
		var r = params[0];
		var attrs = params[1];
		var atkn = params[2];
		var ignore_counter = params[3];
		var enemys = GetNowBattleEnemys();
		for (var an = 0; an < atkn; an++) {
			for (var a = 0; a < attrs.length; a++) {
				// 攻撃
				var atr = attrs[a];
				var atk_order = auto_attack_order(fld, enemys, atr, n);
				ss_damage(fld, r, atr, atkn, n, atk_order, ignore_counter);
			}
		}
		return true;
	},
	// -----------------------------
	// 敵全体に連撃ダメージ
	"ss_damage_all_cons": function (fld, n, cobj, params) {
		var r = params[0];
		var attrs = params[1];
		var atkn = params[2];
		var ignore_counter = params[3];
		var enemys = GetNowBattleEnemys();
		for (var an = 0; an < atkn; an++) {
			for (var a = 0; a < attrs.length; a++) {
				for (var i = 0; i < enemys.length; i++) {
					// 攻撃
					var atr = attrs[a];
					ss_damage(fld, r, atr, atkn, n, i, ignore_counter);
				}
			}
		}
		return true;
	},
	// -----------------------------
	// 敵単体に連撃&チェインプラス
	"ss_damage_slash": function (fld, n, cobj, params) {
		var r = params[0];
		var attrs = params[1];
		var atkn = params[2];

		var enemys = GetNowBattleEnemys();
		for (var an = 0; an < atkn; an++) {
			for (var a = 0; a < attrs.length; a++) {
				// 攻撃
				var atr = attrs[a];
				var atk_order = auto_attack_order(fld, enemys, atr, n);
				ss_damage(fld, r, atr, atkn, n, atk_order, false);
				// チェイン封印されてなければチェインプラス
				if (fld.Status.chain_status != 2) {
					fld.Status.chain += 1;
					fld.log_push("チェインプラス(+1)");
				}
			}
		}
		return true;
	},
	// -----------------------------
	// 敵全体にダメージ&残滅ダメージ
	"ss_continue_damage": function (fld, n, cobj, params) {
		var dmg_r = params[0];
		var cont_r = params[1];
		var attrs = params[2];
		var turn = params[3];
		// 参照用にコピーを取る
		var now_state = $.extend(true, {}, fld.Allys.Now[n]);
		// 普通のダメージ
		var sda = ss_damage_all(dmg_r + 1, attrs, false);
		fld.log_push("Unit[" + (n + 1) + "]: 継続ダメージSS(威力: " + dmg_r * 100 + ")");
		ss_object_done(fld, n, sda);
		// 継続効果追加
		ss_continue_effect_add({
			type: "continue_damage",
			turn: turn,
			lim_turn: turn,
			index: n,
			effect: function (f, oi, ceff) {
				// 発動時の攻撃力などをコピーする
				var f_copy = $.extend(true, {}, f);
				f_copy.Allys.Now[oi] = now_state;
				// 継続ダメージ
				fld.log_push("Unit[" + (n + 1) + "]: 継続ダメージ発動(" + (cont_r * 100) + ") - 残り" + ceff.lim_turn + "t");
				var sda = ss_damage_all(cont_r + 1, attrs, true);
				ss_object_done(f_copy, n, sda);
				// SS状況を解除
				var es = GetNowBattleEnemys();
				for (var i = 0; i < es.length; i++) {
					es[i].flags.is_ss_attack = false;
				}
			}
		});
		return true;
	},
	// -----------------------------
	// 割合ダメージ
	"ss_ratiodamage": function (fld, n, cobj, params) {
		var ratio = params[0];
		var enemys = ss_get_targetenemy(fld, cobj, n);
		for (var i = 0; i < enemys.length; i++) {
			var e = enemys[i];
			var dmg = Math.floor(e.nowhp * ratio);
			e.nowhp = Math.max(e.nowhp - dmg, 0);
			// SSフラグを立てる
			e.flags.is_ss_attack = true;
			// ダメージを与えた
			e.flags.on_damage = true;
			fld.log_push("Enemy[" + (i + 1) + "]: 割合ダメージ(" + (ratio * 100) + "%)(" + dmg + "ダメージ)");
		}
		return true;
	},
	// -----------------------------
	// 全体遅延
	"ss_delay": function(fld, n, cobj, params){
		var turn = params[0];
		var enemys = ss_get_targetenemy(fld, cobj, n);
		for (var i = 0; i < enemys.length; i++) {
			(function () {
				var indx = i;
				var e = enemys[indx];
				if (e.nowhp <= 0 || !e.move) { return; }
				if (e.move.turn && !e.flags.isdelay) {
					e.flags.isdelay=true;
					e.move.turn=e.move.turn+turn;
					fld.log_push("Enemy[" + (i + 1) + "]: 遅延(+" + turn + "ターン)");
				}
			})();
			// SSフラグを立てる
			enemys[i].flags.is_ss_attack = true;
		}
		return true;
	},
	// -----------------------------
	// スキルカウンター待機
	"ss_skillcounter": function (fld, n, cobj, params) {
		var rate = params[0];
		var turn = params[1];
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			if (now.nowhp <= 0) { continue; }
			now.turn_effect.push({
				desc: "スキルカウンター待機(" + (rate * 100) + "%)",
				type: "ss_skill_counter",
				icon: "skill_counter",
				isdual: false,
				iscursebreak: true,
				turn: turn,
				lim_turn: turn,
				// スキルカウンター定義
				effect: function(){},
				counter: function (f, oi, teff, state, is_t, is_b) {
					var card = f.Allys.Deck[oi];
					var now_e = f.Allys.Now[oi];
					var sc_flag = now_e.flags.skill_counter;
					// スキルカウンター前行動
					var is_sc_cancel = $.grep(now_e.turn_effect, function (e) {
						return e.bef_skillcounter && !e.bef_skillcounter(f, oi);
					}).length > 0;
					if (is_t && !is_b && sc_flag.length > 0) {
						if (!is_sc_cancel) {
							f.log_push("Unit[" + (oi + 1) + "]: スキルカウンター発動(" + (rate * 100) + "%)");
							// スキルカウンター対象の敵の数だけ繰り返す
							for (var sci = 0; sci < sc_flag.length; sci++) {
								if (!sc_flag[sci]) { continue; }
								for (var atri = 0; atri < card.attr.length; atri++) {
									// 攻撃
									if (card.attr[atri] >= 0) {
										ss_damage(f, rate, card.attr[atri], 1, oi, sci, true);
										GetNowBattleEnemys(sci).flags.on_damage = true;
									}
								}
							}
						}
						// スキル反射フラグを解除
						f.Allys.Now[oi].flags.skill_counter = [];
					}
				},
			});
		}
		fld.log_push("スキルカウンター待機(" + (rate * 100) + "%, " + turn + "t)");
		return true;
	},
	// -----------------------------
	// 多段式カウンター待機
	"ss_dualcounter": function (fld, n, cobj, params) {
		var turn = params[0];
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			if (now.nowhp <= 0) { continue; }
			now.turn_effect.push({
				desc: "多段式カウンター待機",
				type: "ss_dual_counter",
				icon: "attack_counter_dual",
				isdual: false,
				iscursebreak: true,
				turn: turn,
				lim_turn: turn,
				// 多段式カウンター定義
				effect: function(){},
				counter: function (f, oi, teff, state, is_t, is_b) {
					var card = f.Allys.Deck[oi];
					var now_e = f.Allys.Now[oi];
					var dmg_flag = now_e.flags.damage_hits;
					// 多段式カウンター前行動
					var is_sc_cancel = $.grep(now_e.turn_effect, function (e) {
						return e.bef_skillcounter && !e.bef_skillcounter(f, oi);
					}).length > 0;
					if (is_t && !is_b && dmg_flag.length > 0) {
						if (!is_sc_cancel) {
							f.log_push("Unit[" + (oi + 1) + "]: 多段式カウンター発動");
							// 多段カウンター対象の敵の数だけ繰り返す
							for (var sci = 0; sci < dmg_flag.length; sci++) {
								if (!dmg_flag[sci]) { continue; }
								// 攻撃された回数だけ攻撃
								for (var atk_ct = 0; atk_ct < dmg_flag[sci]; atk_ct++) {
									for (var atri = 0; atri < card.attr.length; atri++) {
										if (card.attr[atri] >= 0) {
											ss_damage(f, 1, card.attr[atri], 1, oi, sci, true);
										}
									}
									GetNowBattleEnemys(sci).flags.on_damage = true;
								}
							}
						}
						// ダメージ反射フラグを解除
						f.Allys.Now[oi].flags.damage_hits = [];
					}
				},
			});
		}
		fld.log_push("多段式カウンター待機(" + turn + "t)");
		return true;
	},
	// -----------------------------
	// 敵全体に毒ダメージを与える
	"poison": function (fld, n, cobj, params) {
		var dmg = params[0];
		var t = params[1];
		var enemys = ss_get_targetenemy(fld, cobj, n);
		for (var i = 0; i < enemys.length; i++) {
			var en = enemys[i];
			if (en.nowhp > 0) { 
				en.turn_effect.push({
					desc: "毒(" + dmg + ")",
					type: "poison",
					icon: "poison",
					isdual: false,
					turn: t,
					lim_turn: t,
					is_poison: true,
					effect: function (f, ei, teff, is_end, is_t, is_b) {
						var e = GetNowBattleEnemys(ei);
						if (is_t && !is_b) {
							e.nowhp = Math.max(e.nowhp - dmg, 0);
							e.flags.on_damage = true;
							if (e.nowhp <= 0) {
								// HPが0になったら敵スキルを全て解除
								turneff_allbreak(e.turn_effect, ei, false);
							}
							fld.log_push("Enemy[" + (ei + 1) + "]: 毒(" + dmg + "ダメージ)");
						}
					},
				});
				// SSフラグを立てる
				en.flags.is_ss_attack = true;
			}
		}
		return true;
	},
	// -----------------------------
	// 時限大魔術
	"ss_damage_timebomb": function (fld, n, cobj, params) {
		var rate = params[0];
		var attrs = params[1];
		var atkn = params[2];
		var t = params[3];
		var enemys = ss_get_targetenemy(fld, cobj, n);
		for (var i = 0; i < enemys.length; i++) {
			var en = enemys[i];
			if (en.nowhp <= 0) { return; }
			// 参照用にコピーを取る
			var now_state = $.extend(true, {}, fld.Allys.Now[n]);
			en.turn_effect.push({
				desc: "時限大魔術",
				type: "ss_damage_timebomb",
				icon: null,
				isdual: true,
				turn: t,
				lim_turn: t,
				effect: function (f, ei, teff, is_end, is_t, is_b) {
					// 残りターンが0なら発動
					if (is_end) {
						// 発動時の攻撃力などをコピーする
						var f_copy = $.extend(true, {}, f);
						var fc_now = f_copy.Allys.Now[n] = now_state;
						// タゲ指定(内部的に)
						fc_now.target = [ei, ei];
						// 着火
						f.log_push("Enemy[" + (ei + 1) + "]: 時限大魔術 - 残り0t");
						var sda = ss_damage_s(rate, attrs, atkn, false);
						ss_object_done(f_copy, n, sda);
					}
				},
			});
			// SSフラグを立てる
			en.flags.is_ss_attack = true;
		}
		return true;
	},
	// -----------------------------
	// 無に還す瞳
	"ss_death_limit": function (fld, n, cobj, params) {
		var t = params[0];
		var enemys = ss_get_targetenemy(fld, cobj, n);
		for (var i = 0; i < enemys.length; i++) {
			var en = enemys[i];
			if (en.nowhp <= 0) { return; }
			en.turn_effect.push({
				desc: "無に還す瞳",
				type: "death_limit",
				icon: "death_limit",
				isdual: false,
				turn: t,
				lim_turn: t,
				effect: function (f, ei, teff, is_end, is_t, is_b) {
					var e = GetNowBattleEnemys(ei);
					// 残りターンが0ならHPを0に
					if (is_end) {
						f.log_push("Enemy[" + (ei + 1) + "]: 無に還す瞳 - 残り0t");
						e.nowhp = 0;
						// HPが0になったら敵スキルを全て解除
						turneff_allbreak(e.turn_effect, ei, false);
					}
				},
			});
			// SSフラグを立てる
			en.flags.is_ss_attack = true;
		}
		return true;
	},
	// -----------------------------
	// 属性弱体化効果を付与
	"ss_attr_weaken": function (fld, n, cobj, params) {
		var enemys = ss_get_targetenemy(fld, cobj, n);
		var attr = params[0];
		var rate = params[1];
		var turn = params[2];
		var teff_obj = {
			desc: "[" + get_attr_string(attr, "/") + "]弱体化",
			type: "attr_weaken",
			icon: "attr_weaken",
			isdual: false,
			turn: turn,
			lim_turn: turn,
			effect: function () { },
			priority: 2,
			on_damage: function (fld, dmg, a_i) {
				if (attr[a_i] > 0) {
					return dmg * (1 + rate);
				} else {
					return dmg;
				}
			}
		};
		for (var tg = 0; tg < enemys.length; tg++) {
			var en = enemys[tg];
			if (en.nowhp <= 0) { continue; }
			en.turn_effect.push($.extend(true, {}, teff_obj));
			// SSフラグを立てる
			en.flags.is_ss_attack = true;
		}
		return true;
	},
	// -----------------------------
	// エンハンス効果を付与
	"ss_enhance": function (fld, n, cobj, params) {
		var rate = params[0];
		var t = params[1];
		var attr = params[2];
		var calltype = params[3];
		if (!attr) {
			// 属性未指定なら全属性Up
			attr = [1, 1, 1, 1, 1];
		}
		var cds = ss_get_targetally(fld, cobj, fld.Allys.Deck, n);
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var cd = cds[i];
			var now = nows[i];
			if (now.nowhp > 0 && attr[cd.attr[0]] > 0) {
				switch (calltype) {
					case "RF":
						var isreinforce = true;
						var isreduce_stg = true;
						var typestr = "[精霊強化]"
						break;
					case "null":
						return null;
					case "SS":
					default:
						var typestr = ""
						break;
				}
				// 付与
				now.turn_effect.push({
					desc: "攻撃力アップ" + typestr + "(" + (rate * 100) + "%)",
					type: "ss_enhance" + calltype,
					icon: "enhance",
					isdual: false,
					iscursebreak: true,
					isreinforce: isreinforce,
					turn: t,
					lim_turn: t,
					effect: function (f, oi, teff, state) {
						if (state == "first") {
							if (teff.isreinforce) {
								f.Allys.Now[oi].ss_reinforcement_atk = rate;
							} else {
								f.Allys.Now[oi].ss_enhance = rate;
							}
						}
						else if (state == "end" || state == "dead" || state == "cursebreak" || state == "overlay") {
							if (teff.isreinforce) {
								f.Allys.Now[oi].ss_reinforcement_atk = 0;
							} else {
								f.Allys.Now[oi].ss_enhance = 0;
							}
						}
					},
				});
				fld.log_push("Unit[" + (i + 1) + "]: 攻撃力Up" + typestr + "(" + (rate * 100) + "%, " + t + "t)");
			}
		}
		return true;
	},
	// -----------------------------
	// エンハンス効果を付与(副属性込み)
	"ss_enhance_subattr": function (fld, n, cobj, params) {
		var r = params[0];
		var s_r = params[1];
		var t = params[2];
		var attr = params[3];
		var s_attr = params[4];
		var calltype = params[5];
		var cds = ss_get_targetally(fld, cobj, fld.Allys.Deck, n);
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var cd = cds[i];
			var now = nows[i];
			if (now.nowhp > 0 && attr[cd.attr[0]] > 0) {
				// check type
				switch (calltype) {
					case "RF":
						var isreinforce = true;
						var isreduce_stg = true;
						var typestr = "[精霊強化]"
						break;
					case "null":
						return null;
					case "SS":
					default:
						var typestr = ""
						break;
				}
				// check rate
				var rate = (s_attr[cd.attr[1]] > 0) ? s_r : r;
				// 付与
				now.turn_effect.push({
					desc: "攻撃力アップ" + typestr + "(" + (rate * 100) + "%)",
					type: "ss_enhance" + calltype,
					icon: "enhance",
					isdual: false,
					iscursebreak: true,
					isreinforce: isreinforce,
					turn: t,
					lim_turn: t,
					up_rate: rate,
					effect: function (f, oi, teff, state) {
						if (state == "first") {
							if (teff.isreinforce) {
								f.Allys.Now[oi].ss_reinforcement_atk = teff.up_rate;
							} else {
								f.Allys.Now[oi].ss_enhance = teff.up_rate;
							}
						}
						else if (state == "end" || state == "dead" || state == "cursebreak" || state == "overlay") {
							if (teff.isreinforce) {
								f.Allys.Now[oi].ss_reinforcement_atk = 0;
							} else {
								f.Allys.Now[oi].ss_enhance = 0;
							}
						}
					},
				});
				fld.log_push("Unit[" + (i + 1) + "]: 攻撃力Up" + typestr + "(" + (rate * 100) + "%, " + t + "t)");
			}
		}
		return true;
	},
	// -----------------------------
	// ブーストエンハンスをかける
	"ss_boost_enhance": function (fld, n, cobj, params) {
		var rate = params[0];
		var t = params[1];
		var dmg = params[2];
		var attr = params[3];
		if (!attr) {
			// 属性未指定なら全属性Up
			attr = [1, 1, 1, 1, 1];
		}
		var cds = ss_get_targetally(fld, cobj, fld.Allys.Deck, n);
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var cd = cds[i];
			var now = nows[i];
			if (now.nowhp > 0 && attr[cd.attr[0]] > 0) {
				now.turn_effect.push({
					desc: "攻撃力アップ[ブースト](" + (rate * 100) + "%)",
					type: "ss_boost_enhance",
					icon: "enhance_boost",
					isdual: false,
					iscursebreak: true,
					turn: t,
					lim_turn: t,
					effect: function (f, oi, teff, state, is_t, is_ak, is_ss) {
						if (state == "first") {
							f.Allys.Now[oi].ss_boost_enhance = rate;
						}
						else if (state == "end" || state == "dead" || state == "cursebreak" || state == "overlay") {
							f.Allys.Now[oi].ss_boost_enhance = 0;
						}
						else if (is_t && !is_ss && !f.Status.finish) {
							// 自傷
							var sco = ss_consume_own(dmg)
							ss_object_done(f, oi, sco);
						}
					},
				});
				fld.log_push("Unit[" + (i + 1) + "]: 自身攻撃力Up[Boost](" +
					(rate * 100) + "%, " + t + "t, dmg: " + (dmg * 100) + "%)");
			}
		}
		return true;
	},
	// -----------------------------
	// 精霊強化効果を味方全体に付与する
	"ss_reinforcement": function (fld, oi, cobj, params) {
		// paramsにssの配列を書いて、全て実行する
		var t = params[0];
		var skills = $.extend(true, [], cobj.p2);
		var all_done = function(f, state, is_t, is_ak){
			var sss = skills;
			for(n=0; n < sss.length; n++){
				ss_object_done(f, oi, sss[n]);
			}
			// dup-remove
			var nows = f.Allys.Now;
			for(n=0; n < nows.length; n++) {
				turn_effect_check_onlyfirst(nows[n], n);
				if (is_ak) {
					turneff_break_dual(nows[n].turn_effect, n, true);
				}
				// statusup-remove
				turneff_break_dual_settype(nows[n].turn_effect, n, "ss_statusup", true);
			}
		}
		// 自身に行動不能効果を付与
		fld.Allys.Now[oi].turn_effect.push({
			desc: "行動不能[精霊強化]",
			type: "ss_reactionaly_noaction",
			icon: "reinforcement",
			isdual: false,
			iscursebreak: false,	// 呪い解除されない
			isreduce_stg: false,	// ターン跨ぎでカウントが減らない
			effect: function (f, oi, teff, state, is_t, is_ak, is_ss) {
				if (state != "end" && state != "dead" && is_t && !is_ss) {
					all_done(f, state, is_t, is_ak);
				}
			},
			priority: 1,
			turn: t,
			lim_turn: t,
			ss_disabled: true,		// SS発動不可
			// 攻撃無効
			bef_answer: function (f, as) {
				return false;
			},
			// 反射無効
			bef_skillcounter: function (f, ai) {
				return false;
			},
		});
		//all_done(fld, false);
		return true;
	},
	// -----------------------------
	// ステアップ
	"ss_statusup": function (fld, n, cobj, params) {
		var up_limit = params[1];
		var t = params[2];
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var up_arrs = $.extend(true, {}, params[0]);
			var now = nows[i];
			if (now.nowhp <= 0) { continue; }
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
				subicon: "statusup_atk",
				isdual: false,
				iscursebreak: true,
				turn: t,
				lim_turn: t,
				up_hp: up_arrs[0],
				up_atk: up_arrs[1],
				effect: function (f, oi, teff, state) {
					var nowtg = f.Allys.Now[oi];
					if (state == "first") {
						nowtg.maxhp = Math.max(teff.up_hp + nowtg.maxhp, 1);
						nowtg.atk = Math.max(teff.up_atk + nowtg.atk, 0);
						nowtg.nowhp = Math.min(nowtg.nowhp + Math.max(params[0][0], teff.up_hp, 0), nowtg.maxhp);
						teff.icon = (teff.up_hp > 0 ? "statusup" : teff.up_hp < 0 ? "statusdown" : null);
						teff.subicon = (teff.up_atk > 0 ? "statusup_atk" : teff.up_atk < 0 ? "statusdown_atk" : null);
					}
					else if (state == "end" || state == "dead") {
						nowtg.maxhp = Math.max(nowtg.maxhp - teff.up_hp, 1);
						nowtg.nowhp = Math.min(nowtg.nowhp, nowtg.maxhp);
						nowtg.atk -= teff.up_atk;
					}
					else if (state == "overlay" || state == "cursebreak") {
						nowtg.maxhp = Math.max(nowtg.maxhp - teff.up_hp, 1);
						nowtg.nowhp = Math.min(Math.max(nowtg.nowhp, 1), nowtg.maxhp);
						nowtg.atk -= teff.up_atk;
					}
				},
			});
			fld.log_push("Unit[" + (i + 1) + "]: ステータスUp(HP:" + up_arrs[0] + ", ATK: " + up_arrs[1] +
				(t != -1 ? (", " + t + "t") : "") + ")");
		}
		return true;
	},
	// -----------------------------
	// ダメージブロック
	"ss_damageblock": function (fld, n, cobj, params) {
		var rate = params[0];
		var t = params[1];
		var calltype = params[2];
		switch(calltype){
			case "ringan":
				var typestr = "[凛眼]"
				break;
			case "SS":
			default:
				var typestr = ""
				break;
		}
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			if (now.nowhp > 0) {
				now.turn_effect.push({
					desc: "ダメージブロック" + typestr + "(" + rate + ")",
					type: "ss_damage_block" + calltype,
					icon: "damage_block",
					isdual: false,
					iscursebreak: true,
					turn: t,
					lim_turn: t,
					effect: function () { },
					priority: 1,
					on_damage: function (fld, dmg, attr) {
						if (dmg >= rate) {
							return dmg;
						} else {
							return 0;
						}
					}
				});
			}
			fld.log_push("Unit[" + (i + 1) + "]: ダメージブロック(" + rate + "/" + t + "t)");
		}
		return true;
	},
	// -----------------------------
	// 味方全体に軽減
	"ss_attr_guard": function (fld, n, cobj, params) {
		var attr = params[0];
		var rate = params[1];
		var turn = params[2];
		var calltype = params[3];
		switch(calltype){
			case "AS":
				var isdual = true;
				var isreduce_stg = true;
				var nolog = true;
				var typestr = "[AS]"
				break;
			case "RF":
				var isreinforce = true
				var typestr = "[精霊強化]"
				break;
			case "SS":
			default:
				var typestr = ""
				break;
		}
		var attrstr=get_attr_string(attr);		
		var cds = ss_get_targetally(fld, cobj, fld.Allys.Deck, n);
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var cd = cds[i];
			var now = nows[i];
			if (now.nowhp > 0) {
				now.turn_effect.push({
					effect: function () { },
					desc: attrstr + "軽減" + typestr + "(" + rate * 100 + "%)",
					type: "ss_attr_guard" + calltype,
					icon: "attr_guard",
					isguard: true,
					isdual: isdual,
					isreduce_stg: isreduce_stg,
					iscursebreak: true,
					turn: turn,
					lim_turn: turn,
					attr: attr,
					rate: rate*100,
					isreinforce: isreinforce,
				});
			}
			if (!nolog) {
				fld.log_push("Unit[" + (i + 1) + "]: 軽減" + typestr + "(" + attrstr + "/ " + rate * 100 + "%/ " + turn + "t)");
			};
		}
		return true;
	},
	// -----------------------------
	// 全体状態異常無効
	"ss_absattack_disable": function (fld, n, cobj, params) {
		var turn = params[0];
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			if (now.nowhp <= 0) { continue; }
			now.turn_effect.push({
				desc: "状態異常無効",
				type: "ss_absattack_disable",
				icon: "absattack_disable",
				isdual: false,
				iscursebreak: true,
				turn: turn,
				lim_turn: turn,
				effect: function () { },
				bef_absattack: function (fld, oi, ei) {
					return false;
				}
			});
		}
		return true;
	},
	// -----------------------------
	// 鉄壁効果付与
	"ss_impregnable": function (fld, n, cobj, params) {
		var turn = params[0];
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			if (now.nowhp <= 0) { continue; }
			now.turn_effect.push({
				desc: "鉄壁・極",
				type: "ss_impregnable",
				icon: "impregnable",
				isdual: false,
				iscursebreak: true,
				turn: turn,
				lim_turn: turn,
				effect: function () { },
				bef_absattack: function (fld, oi, ei) {
					return false;
				},
				bef_answer: function (f, as) {
					return false;
				},
				bef_skillcounter: function (f, ai) {
					return false;
				},
				on_damage: function (fld, dmg, attr) {
					return 0;
				},
				ss_disabled: true,
			});
			fld.log_push("Unit[" + (i + 1) + "]: 鉄壁・極(" + turn + "t)");
		}
		return true;
	},
	// -----------------------------
	// スキルブースト
	"ss_skillboost": function (fld, n, cobj, params) {
		var f_rate = params[0];
		var rst = false;
		var cds = ss_get_targetally(fld, cobj, fld.Allys.Deck, n);
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			// 自分にスキブをかけない
			if (i == n) { continue; }
			// スキブ処理
			var cd = cds[i];
			var now = nows[i];
			if (now.nowhp <= 0) { continue; }
			if (!now.ss_isboost && !is_legendmode(cd, now)) {
				now.ss_current += f_rate;
				now.ss_isboost = true;
				// L化確認
				legend_timing_check(fld.Allys.Deck, fld.Allys.Now, i);
				rst = true;
			}
		}
		return rst;
	},
	// -----------------------------
	// チェイン直接追加
	"ss_addchain": function (fld, n, cobj, params) {
		var ch = params[0];
		fld.Status.chain += ch;
		fld.log_push("チェインプラス(+" + ch + ")");
		return true;
	},
	// -----------------------------
	// チェイン保護
	"ss_chain_protect": function (fld, n, cobj, params) {
		var t = params[0];
		fld.Status.chain_status = 1;
		fld.Status.chainstat_turn = t;
		fld.log_push("Enemy[" + (n + 1) + "]: チェイン保護(" + t + "t)");
		return true;
	},
	// -----------------------------
	// 回復
	"ss_heal": function (fld, n, cobj, params) {
		var rate = params[0];
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			var hr = Math.floor(now.maxhp * rate);
			heal_ally(fld, hr, fld.Allys.Now.indexOf(now));
			fld.log_push("Unit[" + (i + 1) + "]: HP回復(" + (rate * 100) + "%)");
		}
		return true;
	},
	// -----------------------------
	// 指定値だけ全体回復(1000回復, etc)
	"ss_heal_absolute": function (fld, n, cobj, params) {
		var rate = params[0];
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			heal_ally(fld, rate, fld.Allys.Now.indexOf(now));
		}
		fld.log_push("Unit[" + (i + 1) + "]: HP回復(+" + rate + ")");
		return true;
	},
	// -----------------------------
	// 状態異常回復
	"ss_abstate_cure": function (fld, n, cobj, params) {
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			for (var te = 0; te < now.turn_effect.length; te++) {
				if (now.turn_effect[te].isabstate) {
					now.turn_effect.splice(te, 1);
					te--;
				}
			}
		}
		fld.log_push("Unit[" +(i +1) + "]: 異常回復");
		return true;
	},
	// -----------------------------
	// リジェネ付与
	"ss_regenerate": function (fld, n, cobj, params) {
		var rate = params[0];
		var t = params[1];
		var calltype = params[2];
		switch(calltype){
			case "RF":
				var isreinforce = true
				var isreduce_stg = true;
				var typestr = "[精霊強化]"
				break;
			case "SS":
			default:
				var typestr = ""
				break;
		}
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			now.turn_effect.push({
				desc: "HPを徐々に回復" + typestr + "(" + (rate * 100) + "%)",
				type: "ss_regenerate" + calltype,
				icon: "regenerate",
				isdual: false,
				iscursebreak: true,
				priority: 1,
				turn: t,
				lim_turn: t,
				effect: function (f, oi, teff, state, is_t) {
					if (is_t) {
						var nd = f.Allys.Now[oi];
						var hr = Math.floor(nd.maxhp * rate);
						heal_ally(f, hr, oi);
						fld.log_push("Unit[" + (oi + 1) + "]: HP徐々に回復" + typestr + "(+" + hr + ")");
					}
				},
			});
		}
		return true;
	},
	// -----------------------------
	// 起死回生
	"ss_revival": function (fld, n, cobj, params) {
		var rate = params[0];
		var t = params[1];
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var now = nows[i];
			if (now.nowhp <= 0) { continue; }
			now.turn_effect.push({
				desc: "起死回生",
				type: "ss_revival",
				icon: "revival",
				isdual: false,
				iscursebreak: true,
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
	},
	// -----------------------------
	// 蘇生
	"ss_resurrection": function (fld, n, cobj, params) {
		var attr = params[0];
		var rate = params[1];
		var cds = ss_get_targetally(fld, cobj, fld.Allys.Deck, n);
		var nows = ss_get_targetally(fld, cobj, fld.Allys.Now, n);
		for (var i = 0; i < nows.length; i++) {
			var cd = cds[i];
			var now = nows[i];
			if (now.nowhp <= 0 && attr[cd.attr[0]]) {
				now.nowhp = Math.min((now.maxhp * rate), now.maxhp);
				now.nowhp = Math.round(now.nowhp);
			}
		}
		fld.log_push("Unit[" + (i + 1) + "]: 蘇生(" + (rate * 100) + "%)");
		return true;
	},
	// -----------------------------
	// 攻撃力アップパネル付与効果
	"panel_attackup": function (fld, n, cobj, params) {
		var p = params[0];
		var dsc = "攻撃力アップ(" + (p * 100) + "%)";
		return panel_addition(dsc, function (fld) {
			for (var i = 0; i < fld.Allys.Deck.length; i++) {
				var now = fld.Allys.Now[i];
				now.as_enhance = (now.as_enhance ? now.as_enhance : 0) + p;
			}
			fld.log_push("パネル付与効果発動: " + dsc);
		});
		return true;
	},
	// -----------------------------
	// チェインプラスパネル付与効果
	"panel_chainplus": function (fld, n, cobj, params) {
		var p = params[0];
		var dsc = "チェインプラス(+" + p + ")";
		return panel_addition(dsc, function (fld) {
			if (fld.Status.chain_status >= 0) {
				fld.Status.chain += p;
				fld.log_push("パネル付与効果発動: " + dsc);
			}
		});
		return true;
	},
	// -----------------------------
	// 回復パネル付与効果
	"panel_healally": function (fld, n, cobj, params) {
		var r = params[0];
		var dsc = "味方回復(" + (r * 100) + "%)";
		return panel_addition(dsc, function (fld) {
			for (var i = 0; i < fld.Allys.Deck.length; i++) {
				var now = fld.Allys.Now[i];
				heal_ally(fld, now.maxhp * r, i);
			}
			fld.log_push("パネル付与効果発動: " + dsc);
		});
		return true;
	},
	// -----------------------------
	// スキルブーストパネル付与効果
	"panel_skillboost": function (fld, n, cobj, params) {
		var t = params[0];
		var dsc = "スキルブースト(+" + t + ")";
		return panel_addition(dsc, function (fld) {
			for (var i = 0; i < fld.Allys.Deck.length; i++) {
				// スキブ処理
				var card = fld.Allys.Deck[i];
				var now = fld.Allys.Now[i];
				if (now.nowhp <= 0) { continue; }
				if (!now.ss_isboost && !is_legendmode(card, now)) {
					now.ss_current += t;
					now.ss_isboost = true;
					// L化確認
					legend_timing_check(fld.Allys.Deck, fld.Allys.Now, i);
				}
			}
			fld.log_push("パネル付与効果発動: " + dsc);
		});
	},
	// -----------------------------
	// パネルに軽減効果を付与する
	"panel_attr_guard": function (fld, n, cobj, params) {
		var attr = params[0];
		var rate = params[1];
		var dsc = "パネル軽減効果(" + (rate * 100) + "%)";
		return panel_addition(dsc, function (fld) {
			fld.Status.panel_guard = {
				attr: attr,
				rate: rate,
			}
			fld.log_push("パネル付与効果発動: " + dsc);
		});
	},
	// -----------------------------
	// スキル反射無視
	"ss_ignore_skillcounter": function (fld, n, cobj, params) {
		var enemys = GetNowBattleEnemys();
		$.each(enemys, function (i, e) {
			if (e.flags) {
				e.flags.is_ss_attack = false;
			}
		});
		return true;
	},
	// -----------------------------
	// カウンター解除
	"ss_break_attackcounter": function (fld, n, cobj, params) {
		return ss_break_template(cobj.target, "attack_counter")(fld, n);
	},
	// スキル反射解除
	"ss_break_skillcounter": function (fld, n, cobj, params) {
		return ss_break_template(cobj.target, "skill_counter")(fld, n);
	},
	// ガード解除
	"ss_break_attrguard": function (fld, n, cobj, params) {
		return ss_break_template(cobj.target, "attr_guard")(fld, n);
	},
	// ダメブロ解除
	"ss_break_dblock": function (fld, n, cobj, params) {
		return ss_break_template(cobj.target, "damage_block")(fld, n);
	},
	// 属性吸収解除
	"ss_break_absorb": function (fld, n, cobj, params) {
		return ss_break_template(cobj.target, "attr_absorb")(fld, n);
	},
	// -----------------------------
	// SSコピー
	"ss_latest_copy": function (fld, n, cobj, params) {
		if (fld.Status.latest_ss) {
			var now = fld.Allys.Now[n];
			return ss_procdo(fld, fld.Status.latest_ss, now, n);
		} else {
			return false;
		}
	},

	// -----------------------------
	// デメリット系: 自分に割合ダメージ
	"ss_consume_own": function (fld, n, cobj, params) {
		var p = params[0];
		var now = fld.Allys.Now[n];
		var dmg = Math.floor(p * now.maxhp);
		fld.log_push("Unit[" + (n + 1) + "]: 自傷(" + (p * 100) + "%)");
		damage_ally(dmg, n);
		return true;
	},
	// -----------------------------
	// デメリット系: 味方全体に割合ダメージ
	"ss_consume_all": function (fld, n, cobj, params) {
		var p = params[0];
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
	},
	// -----------------------------
	// デメリット系: 自身を封印状態にする
	"ss_allsealed_own": function (fld, n, cobj, params) {
		var t = params[0];
		// 封印攻撃を呼ぶ
		s_enemy_abstate_attack(
			fld, "封印", "all_sealed", t, [n], -1, true, {
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
	},
	// -----------------------------
	// (バーニング用)SPスキル使用可能化
	"spskill_maxcharge": function (fld, n, cobj, params) {
		nows = fld.Allys.Now;
		$.each(nows, function (i, e) {
			e.ss_current = 999;
			// スキブ処理
			var card = fld.Allys.Deck[i];
			if (is_legendmode(card, e)) {
				legend_timing_check(fld.Allys.Deck, nows, i, true);
			}
		})
		return true;
	},
	"spskill_maxcharge_spec": function (fld, n, cobj, params) {
		nows = fld.Allys.Now;
		var spe = params[0]-1;
		$.each(nows, function (i, e) {
			if(fld.Allys.Deck[i].species.indexOf(spe)!=-1){
				e.ss_current = 999;
				// スキブ処理
				var card = fld.Allys.Deck[i];
				if (is_legendmode(card, e)) {
					legend_timing_check(fld.Allys.Deck, nows, i, true);
				}
			}
		})
		return true;
	},
	/*
	// -----------------------------
	// テンプレート
	"ss_template": function (fld, n, cobj, params) {
		var xxx1 = params[0];
		var xxx2 = params[1];
		var xxx3 = params[2];
		var xxx4 = params[3];

		return true;
	},
	*/
}

// ------------------------------------
// SS条件関数定義リスト
var SpCondSkill = {
	// -----------------------------
	// HP条件(一定以上)
	"ss_hp_more": function (fld, oi, cobj, params) {
		var cond = params[0];
		var a = params[1];
		var b = params[2];
		var now = fld.Allys.Now[oi];
		return (now.nowhp >= (now.maxhp * cond)) ? a : b;
	},
	"ss_hp_more_skill": function (fld, oi, cobj, params) {
		var scc_rst = this["ss_hp_more"](fld, oi, cobj, params);
		if (scc_rst) {
			return ss_object_done(fld, oi, scc_rst, true);
		}
		return null;
	},
	// -----------------------------
	// HP条件(一定以下)
	"ss_hp_less": function (fld, oi, cobj, params) {
		var cond = params[0];
		var a = params[1];
		var b = params[2];
		var now = fld.Allys.Now[oi];
		return (now.nowhp <= (now.maxhp * cond)) ? a : b;
	},
	"ss_hp_less_skill": function (fld, oi, cobj, params) {
		var scc_rst = this["ss_hp_less"](fld, oi, cobj, params);
		if (scc_rst) {
			return ss_object_done(fld, oi, scc_rst, true);
		}
		return null;
	},
	// -----------------------------
	// HP条件(一定未満)
	"ss_hp_under": function (fld, oi, cobj, params) {
		var cond = params[0];
		var a = params[1];
		var b = params[2];
		var now = fld.Allys.Now[oi];
		return (now.nowhp < (now.maxhp * cond)) ? a : b;
	},
	// -----------------------------
	// リーダー時に効果値アップ
	"ss_when_leader": function (fld, oi, cobj, params) {
		var a = params[0];
		var b = params[1];
		return (oi == 0) ? a : b;
	},
	// -----------------------------
	// 属性特攻
	"special_attr": function (fld, oi, cobj, params) {
		var attrs = params[0];
		var a = params[1] + 1;
		var b = params[2] + 1;
		var e = GetNowBattleEnemys();
		var rst = [];
		for (var i = 0; i < e.length; i++) {
			rst[i] = (attrs[e[i].attr] > 0) ? a : b;
		}
		return rst;
	},
	// -----------------------------
	// 回答時間依存
	"ss_answertime": function (fld, oi, cobj, params) {
		var a = params[0];
		var b = params[1];
		var time = Number($("#answer_time_sel").val());

		return a + b * time;
	},
	// -----------------------------
	// L精霊数依存
	"ss_legendnum": function (fld, oi, cobj, params) {
		var a = params[0];
		var b = params[1];
		var cards = fld.Allys.Deck;
		var nows = fld.Allys.Now;
		var num = 0;
		for (var i = 0; i < cards.length; i++) {
			num += (is_legendmode(cards[i], nows[i]) ? 1 : 0);
		}
		return a + b * num;
	},
	// -----------------------------
	// 激化大魔術
	"ss_intenselyval": function (fld, oi, cobj, params) {
		var a = params[0];
		var b = params[1];
		var max = params[2];
		var now = fld.Allys.Now[oi];
		var x = (now.intensely_val || 0);
		now.intensely_val = x + 1;
		return Math.min(a + b * Math.pow(2,x), max);
	},
	// -----------------------------
	// 味方全体自傷して自傷した数だけ効果値を増やす
	"ss_consume_all_cond": function (fld, oi, cobj, params) {
		var base = params[0];
		var dmg = params[1];
		var sca = ss_consume_all(dmg);
		return base * ss_object_done(fld, oi, sca);
	},
	// -----------------------------
	// 味方全体を封印状態にして対象数だけ効果値を増やす
	"ss_seal_all_cond": function (fld, oi, cobj, params) {
		var base = params[0];
		var nows = fld.Allys.Now;
		var count = 0;
		for (var i = 0; i < nows.length; i++) {
			if (nows[i].nowhp <= 0) { continue; }
			var scs = ss_allsealed_own(1);
			ss_object_done(fld, i, scs);
			count++;
		}
		return base * count;
	},
	// -----------------------------
	// 自身が異常状態かどうか
	"ss_is_abstate_own": function (fld, oi, cobj, params) {
		var a = params[0];
		var b = params[1];
		var now = fld.Allys.Now[oi];
		var is_abstate = $.grep(now.turn_effect, function (e) {
			return e.isabstate;
		}).length > 0;
		return is_abstate ? a : b;
	},
	// -----------------------------
	// 自身がAS封印状態かどうか
	"ss_is_assealed_own_skill": function (fld, oi, cobj, params) {
		var ss1 = params[0];
		var ss2 = params[1];
		var now = fld.Allys.Now[oi];
		var is_asseal = $.grep(now.turn_effect, function (e) {
			return e.type == "as_sealed";
		}).length > 0;
		return is_asseal ? ss1 : ss2;
	},
	// -----------------------------
	// 自身が毒かどうか
	"ss_is_poison_own": function (fld, oi, cobj, params) {
		var a = params[0];
		var b = params[1];
		var now = fld.Allys.Now[oi];
		var is_poison = $.grep(now.turn_effect, function (e) {
			return e.type == "poison";
		}).length > 0;
		if (is_poison) {
			return a;
		}
		return b;
	},
	"ss_is_poison_own_skill": function (fld, oi, cobj, params) {
		var scp_rst = this["ss_is_poison_own"](fld, oi, cobj, params);
		if (scp_rst) {
			return ss_object_done(fld, oi, cobj.p1, true);
		}
	},
	// -----------------------------
	// 相手が毒かどうか
	"ss_is_poison_enemy": function (fld, oi, cobj, params) {
		var a = params[0];
		var b = params[1];
		var rst = [];
		var es = GetNowBattleEnemys();
		for (var i = 0; i < es.length; i++) {
			var is_poison = $.grep(edat.turn_effect, function (e) {
				return e.type == "poison";
			}).length > 0;
			rst[i] = is_poison ? a : b;
		}
		return rst;
	},
	// -----------------------------
	// チェイン分岐
	"ss_chain_cond": function (fld, oi, cobj, params) {
		var ch = params[0];
		var a = params[1];
		var b = params[2];
		return (fld.Status.chain >= ch) ? a : b;
	},
	"ss_chain_cond_skill": function (fld, oi, cobj, params) {
		var scc_rst = this["ss_chain_cond"](fld, oi, cobj, params);
		return ss_object_done(fld, oi, scc_rst, true);
	},
	// -----------------------------
	// チェイン消費
	"ss_chain_cost": function (fld, oi, cobj, params) {
		var ch = params[0];
		var a = params[1];
		var b = params[2];
		if (fld.Status.chain >= ch) {
			fld.Status.chain -= ch;
			fld.log_push("チェイン消費: " + ch);
			return a;
		}
		return b;
	},
	"ss_chain_cost_skill": function (fld, oi, cobj, params) {
		var scc_rst = this["ss_chain_cost"](fld, oi, cobj, params);
		return ss_object_done(fld, oi, scc_rst, true);
	},
	

	/*
	// -----------------------------
	// テンプレート
	"ss_template": function (fld, oi, cobj, params) {
		var xxx1 = params[0];
		var xxx2 = params[1];
		var xxx3 = params[2];
		var xxx4 = params[3];

		return true;
	},
	*/
}

// (凛眼: 互換維持用)
SpSkill["ss_damageblock_all"] = SpSkill["ss_damageblock"];


// ------------------------------------
// 味方単体指定に変更する用の関数
// ::使用方法 ss_toselect_one(ss_heal(1))
function ss_toselect_one(skill) {
	if (skill.target == "ally") {
		skill.target = "ally_one";
	}
	return skill;
}

// ------------------------------------
// (内部用)実行関数
function ss_object_done(fld, n, c_obj, is_check_crs) {
	// type switch
	var skl_list = c_obj.is_skill ? SpSkill: SpCondSkill;
	// 未定義なら実行しない
	if (!skl_list || !skl_list[c_obj.name]) {
		return null;
	}
	// 引数チェック
	var params = [];
	var count = 0;
	while (c_obj["p" + (count + 1)] != null) {
		var p = c_obj["p" + (count + 1)];
		// 遅延評価関数なら特に何もしない
		if(c_obj.is_delay){
			params[count] = p;
		}
		// 条件またはスキルなら再帰
		else if (p.is_cond || p.is_skill) {
			params[count] = ss_object_done(fld, n, p, is_check_crs);
		}
		// 関数なら実行
		else if ($.isFunction(p)) {
			params[count] = p();
		}
		// 配列なら内部要素について再帰
		else if ($.isArray(p)) {
			params[count] = [];
			for (i = 0; i < p.length; i++) {
				var is_num = $.isNumeric(p[i]);
				params[count][i] = is_num ? p[i] : ss_object_done(fld, n, p[i], is_check_crs);
			}
		}
		// 関数型でないならそのまま
		else {
			params[count] = p;
		}
		count++;
	}
	// 潜在結晶チェック状態なら
	if (is_check_crs && c_obj.c_param) {
		// 潜在結晶効果値アップ系の処理を行う
		for (var pn in c_obj.c_param) {
			var pm = c_obj.c_param[pn];
			var card = fld.Allys.Deck[n];
			var tg = pm.target.length >= 2 ? pm.target : [pm.target];
			for (var i = 0; i < tg.length; i++) {
				$.each(pickup_awakes(card, pn, false), function (j, e) {
					var r_max = Number.MAX_VALUE;
					if ($.isArray(params[tg[i]])) {
						for (var k = 0; k < params[tg[i]].length; k++) {
							params[tg[i]][k] += Math.min(e.upvalue || e.up, pm.rate_max || r_max) * (pm.rate_mlt || 1);
						}
					} else {
						params[tg[i]] += Math.min(e.upvalue || e.up, pm.rate_max || r_max) * (pm.rate_mlt || 1);
					}
				})
			}
		}
	}
	// 関数実行
	return skl_list[c_obj.name](fld, n, c_obj, params);
}

// (内部用)敵にSSダメージ
function ss_damage(fld, r, atr, atkn, own, tg, isnot_ss) {
	var enemy = GetNowBattleEnemys(tg);
	var card = fld.Allys.Deck[own];
	var now = fld.Allys.Now[own];
	var rnd = damage_rand();
	// 威力が配列で渡されたら取り出す
	var rate = $.isArray(r) ? r[tg] : r;
	// 攻撃
	Field.Status.turn_dmg += attack_enemy(enemy, now, atr, rate, atkn, [atr],
		fld.Status.chain, rnd, own, tg, true);
	// SSフラグを立てる
	enemy.flags.is_ss_attack = (isnot_ss != true);
}

// (内部用)パネル付与効果
function panel_addition(dsc, fc) {
	Field.Status.panel_add.push({
		desc: dsc,
		func: fc,
	});
	return true;
}

// (内部用)敵スキル解除系テンプレ
function ss_break_template(target, type) {
	var _break_temp_fc = function (fld, oi, ei) {
		var is_break = false;
		var em = GetNowBattleEnemys(ei);
		for (var i = 0; i < em.turn_effect.length; i++) {
			var eff = em.turn_effect[i];
			// typeを含んでいる場合除く
			// (attack_counterが指定されてたら多段カウンターも除く)
			if (eff.type.indexOf(type) >= 0) {
				turneff_remove_pos(em.turn_effect, i);
				i--;
				is_break = true;
			}
		}
		return is_break;
	};
	return function (fld, n) {
		var cd = fld.Allys.Deck[n];
		var es = GetNowBattleEnemys();
		var rsts = false;
		if (target == "all") {
			for (var i = 0; i < es.length; i++) {
				var rst = _break_temp_fc(fld, n, i);
				es[i].flags.is_ss_attack = rst;
				rsts = rsts || rst;
			}
		} else {
			var tg = auto_attack_order(fld, es, cd.attr[0], n);
			var rst = _break_temp_fc(fld, n, tg);
			es[tg].flags.is_ss_attack = rst;
			rsts = rsts || rst;
		}
		return rsts;
	}
}

// (内部用)[対象:敵]効果対象が単体か全体かを判別して適切な敵配列を返却
function ss_get_targetenemy(fld, ss, ai) {
	switch (ss.target) {
		case "all":
			return GetNowBattleEnemys();
		case "single":
			var enemys = GetNowBattleEnemys();
			var tg = auto_attack_order(fld, enemys, -1, ai);
			return [enemys[tg]];
		default:
			console.error("INVALID VALUE: " + ss.target + "(index: " + ei + ")");
			return null;
	}
}

// (内部用)[対象:味方]効果対象が単体か全体かを判別して適切な味方配列を返却
function ss_get_targetally(fld, ss, array, ai) {
	if (!ss) {
		return array;
	}
	switch (ss.target) {
		case "ally":
			return array;
		case "own":
			return [array[ai]];
		case "ally_one":
			var si = ss_allyselect_getindex();
			return [array[si]];
		default:
			console.error("INVALID VALUE: " + ss.target + "(index: " + ai + ")");
			return null;
	}
}