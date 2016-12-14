// SSを発動する
function ss_push(n) {
	var card = Field.Allys.Deck[n];
	var now = Field.Allys.Now[n];
	var is_l = is_legendmode(card, now);
	var ss = is_l ? card.ss2 : card.ss1;
	var ss_rst = true;
	// SS発動前チェック
	if (sscheck_before(ss, n)) {
		// SSを打つ
		ss_rst = ss_procdo(Field, ss, now, n);
	} else {
		// チェックを通過しなかったら打ち切る
		return;
	}
	// 発動成功なら
	if (ss_rst) {
		Field.log_push("Unit[" + (n + 1) + "]: SS発動");
		// 発動後処理
		ss_afterproc(n);
		if (!now.flags.ss_chargefin) {
			// SSを保存しておく
			if (ss.proc && ss.proc[0] && !ss.proc[0].is_skillcopy) {
				Field.Status.latest_ss = ss;
			}
			// ------------------
			// L状態ならL潜在を解除
			if (is_l) {
				minus_legend_awake(Field.Allys.Deck, Field.Allys.Now, n);
				now.islegend = false;
				Field.log_push("Unit[" + (n + 1) + "]: Lモード解除");
			}
			// SSターンをリセット
			now.ss_current = has_secondfastnum(card);
			now.ss_isfirst = false;
			now.ss_isboost = false;
		} else {
			// チャージ発動状態解除
			now.flags.ss_chargefin = false;
		}
		// ------------------
		// 再現用ログ関連
		actl_save_special(n);
		// [進む]を使えないように
		if (!Field_log.is_ssindex) {
			Field_log.now_index++;
			Field_log.is_ssindex = true;
		}
		Field_log._removeover(Field.Status.totalturn);
		// 全滅していたら次のターンへ進む
		if (is_allkill()) {
			// 蘇生があるかのチェック
			var is_rev = isexist_enemy_rev();
			nextturn(!is_rev);
		}
		// 助っ人チェック
		helper_change_process();
		// 再表示
		sim_show();
	} else {
		// failed
		$("#dialog_ss_noaction").dialog("open");
	}
}

// SS発動前に味方単体指定があるかどうかを確認する関数
function sscheck_before(ss, n) {
	var is_exist = false;
	for (var i = 0; i < (ss.proc || []).length; i++) {
		is_exist = is_exist || (ss.proc[i].target == "ally_one");
		if (ss.proc[i].is_skillcopy) {
			var ls_ss = Field.Status.latest_ss.proc;
			if(!ls_ss){
				continue;
			}
			for (var j = 0; j < ls_ss.length; j++) {
				is_exist = is_exist || (ls_ss[j].target == "ally_one");
			}
		}
	}
	if (is_exist) {
		// 指定済みかチェック
		var target_seled = ss_allyselect_getindex();
		// 指定済みならOK
		if (target_seled >= 0) {
			return true;
		}
		// 未指定なら選択ダイアログを出して処理を終了させる
		else {
			$("#sso_skilled_index").text(n);
			$("#dialog_ss_selectone").dialog("open");
			return false;
		}
	} else {
		return true;
	}
}

// SSを順番に発動していく関数
function ss_procdo(fld, ss, now, index) {
	var ss_rst = true;
	if (ss.proc != null) {
		// チャージスキルの場合
		if (ss.charged > 0 || now.flags.ss_chargefin) {
			// チャージが終わっているか確認し、終わってないなら追加
			if (!now.flags.ss_chargefin) {
				// 自身に行動不可効果を付与
				now.turn_effect.push({
					desc: "チャージスキル待機(残り" + ss.charged + "t)",
					type: "ss_charge",
					icon: "force_reservior",// 後で変える(?)
					isdual: false,
					iscursebreak: false,	// 呪い解除されない
					isreduce_stg: true,		// ターン跨ぎでカウントが減る
					priority: 1,
					charge_turn: ss.charged,
					charge_skl: $.extend(true, ss.proc, []),
					turn: -1,
					lim_turn: -1,
					ss_disabled: true,		// SS発動不可
					// 攻撃無効
					bef_answer: function (f, as) {
						return false;
					},
					// 反射無効
					bef_skillcounter: function (f, ai) {
						return false;
					},
					// カウント減少
					effect: function (f, oi, teff, state, is_t, is_b, is_sfin) {
						// SS以外で戦闘を跨いだ場合カウントを減らす
						if (is_t && (!is_sfin || !is_b)) {
							teff.charge_turn--;
							teff.desc = "チャージスキル待機(残り" + Math.max(teff.charge_turn, 0) + "t)";
						}
						this.ss_disabled = (teff.charge_turn > 0);
					},
					// 発動スキル
					charged_fin: function (fld, oi) {
						// 発動可能状態にセット
						var now = fld.Allys.Now[oi];
						now.flags.ss_chargefin = true;
						now.flags.ss_chargeskl = this.charge_skl;
						return;
					},
				});
				// 全体チャージスキルなら味方全体にnT行動不可効果付与
				if (ss.isallcharge) {
					ss_add_chargenomove_otheruser(fld, ss.charged, index);
				}
				Field.log_push("Unit[" + (index + 1) + "]: チャージスキル発動待機…");
				return true;
			}
			// 終わっているなら発動
			else {
				var skl = now.flags.ss_chargeskl;
				for (var i = 0; i < skl.length; i++) {
					if (skl[i]) {
						ss_rst = ss_object_done(Field, index, skl[i], true);
					}
				}
				now.flags.ss_chargeskl = null;
				// 削除
				turneff_break_cond(now.turn_effect, -1, function (tf) {
					return !tf.charged_fin && tf.charge_turn <= 0;
				}, "end");
				return true;
			}
		}
		// 実行
		for (var i = 0; i < ss.proc.length; i++) {
			if (ss.proc[i]) {
				ss_rst = ss_object_done(Field, index, ss.proc[i], true);
			}
		}
	}
	return ss_rst !== false;
}

// SS発動後処理
function ss_afterproc(n) {
	// 敵スキル関係の処理
	var enemys = GetNowBattleEnemys();
	$.each(enemys, function (i, e) {
		// スキル反射確認
		if (e.flags.is_ss_attack && e.turn_effect.length > 0) {
			var skillct = $.grep(e.turn_effect, function (g) {
				return g.on_ss_damage !== undefined;
			});
			for (var j = 0; j < skillct.length; j++) {
				skillct[j].on_ss_damage(Field, i, n);
			}
			e.flags.is_ss_attack = false;
		}
		// スキル反応確認
		$.each(e.turn_effect, function (g) {
			if (g.type == "skill_response") {
				g.on_ss_invoke(Field, i);
			}
		});
	});
	// 対象指定SSの指定を解除
	$("#sso_selected_index").text("");
	$("#sso_skilled_index").text("");
	// ターン効果確認
	turneff_check_skillcounter(Field);
	turn_effect_check(false, is_allkill());
	enemy_turn_effect_check(false);
	// 敵ダメージ反応系
	enemy_damage_switch_check("damage_switch", true, false, false);
}

// Lモードに入ったタイミングかどうかを判定する
function legend_timing_check(cards, nows, index, is_ignore_spskill) {
	var is_l = is_legendmode(cards[index], nows[index]);
	var rst = is_l && !nows[index].islegend;
	if (rst) {
		nows[index].islegend = true;
		Field.log_push("Unit[" + (index + 1) + "]: Lモード");
		// L時の潜在を反映させる
		add_awake_ally(cards, nows, index, true);
		// L時のSSを発動する
		if (!is_ignore_spskill) {
			Awake_dospskill(Field, index);
		}
	}
}

// Lモードに入っているかどうかを判定する
function is_legendmode(card, now) {
	return get_ssturn(card, now)[1] == 0;
}

// SSが残り何ターンで打てるかを配列で返す
function get_ssturn(card, ally_n) {
	// SS1 default
	var ss1_def = card.ss1.turn;
	// SS2 default
	var ss2_def = (card.islegend ? card.ss2.turn : undefined);
	// SSチャージターン
	var cg = ally_n.ss_current;
	// 計算
	var ss1 = Math.max(ss1_def - cg, 0);
	var ss2 = ss2_def !== undefined ? (Math.max(ss2_def - cg, 0)) : undefined;
	// 返却
	return [ss1, ss2];
}

// 味方単体を指定するSSにおいて、誰が指定されているかを取得
function ss_allyselect_getindex() {
	var istr = $("#sso_selected_index").text();
	return istr != "" ? Number(istr) : -1;
}

// 発動者以外の味方全員にnT行動不可(チャージ)を付与
function ss_add_chargenomove_otheruser(fld, turn, user_i) {
	var nows = fld.Allys.Now;
	for (var i = 0; i < nows.length; i++) {
		if (i == user_i) { continue; }
		var now = nows[i];
		now.turn_effect.push({
			desc: "チャージスキル待機",
			type: "ss_charge",
			icon: "force_reservior",// 後で変える(?)
			isdual: false,
			iscursebreak: false,	// 呪い解除されない
			isreduce_stg: true,		// ターン跨ぎでカウントが減る
			priority: 1,
			turn: turn,
			lim_turn: turn,
			ss_disabled: true,		// SS発動不可
			effect: function () { },
			// 攻撃無効
			bef_answer: function (f, as) {
				return false;
			},
			// 反射無効
			bef_skillcounter: function (f, ai) {
				return false;
			},
		});
	}
}