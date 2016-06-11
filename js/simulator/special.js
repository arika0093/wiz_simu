// SSを発動する
function ss_push(n) {
	var card = Field.Allys.Deck[n];
	var now = Field.Allys.Now[n];
	var is_l = is_legendmode(card, now);
	var ss = is_l ? card.ss2 : card.ss1;
	// SSを打つ
	Field.log_push("Unit[" + (n + 1) + "]: SS発動");
	var ss_rst = ss_procdo(ss, now, n);
	// 発動成功なら
	if (ss_rst) {
		// SSを保存しておく
		if (ss.proc && ss.proc[0] && !ss.proc[0].is_skillcopy) {
			Field.Status.latest_ss = ss;
		}
		// 発動後処理
		ss_afterproc(n);
		// ------------------
		// L状態ならL潜在を解除
		if (is_l) {
			minus_legend_awake(Field.Allys.Deck, Field.Allys.Now, n);
			now.islegend = false;
			Field.log_push("Unit[" + (n + 1) + "]: Lモード解除");
		}
		// SSターンをリセット
		now.ss_current = 0;
		now.ss_isfirst = false;
		now.ss_isboost = false;
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
			nextturn(true);
		}
		// 再表示
		sim_show();
	} else {
		// failed
		$("#dialog_ss_noaction").dialog("open");
	}
}

// SSを順番に発動していく関数
function ss_procdo(ss, now, index) {
	var ss_rst = true;
	if (ss.proc != null) {
		// チャージスキルの場合turn_effectに追加
		if (ss.charged > 0) {
			now.turn_effect.push({
				desc: "チャージスキル待機(残り" + ss.charged + "t)",
				type: "ss_charge",
				icon: "force_reservior",// 後で変える(?)
				isdual: false,
				iscursebreak: false,	// 呪い解除されない
				isreduce_stg: true,		// ターン跨ぎでカウントが減る
				priority: 1,
				charge_turn: ss.charged,
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
					if (is_t || (!is_sfin && is_b)) {
						teff.charge_turn--;
						teff.desc = "チャージスキル待機(残り" + teff.charge_turn + "t)";
					}
				},
				// 発動スキル
				charged_fin: function (fld) {
					fld.log_push("Unit[" + (index + 1) + "]: チャージスキル発動");
					for (var i = 0; i < ss.proc.length; i++) {
						ss_object_done(fld, index, ss.proc[i]);
					}
					return true;
				},
			});
			Field.log_push("Unit[" + (index + 1) + "]: チャージスキル発動待機…");
			return true;
		}
		// 実行
		for (var i = 0; i < ss.proc.length; i++) {
			if (ss.proc[i]) {
				ss_rst = ss_object_done(Field, index, ss.proc[i]);
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
	// 敵ダメージ反応系
	enemy_damage_switch_check("damage_switch");
	turneff_check_skillcounter(Field);
	// ターン効果確認
	turn_effect_check(false, is_allkill());
	enemy_turn_effect_check(false);
}

// Lモードに入ったタイミングかどうかを判定する
function legend_timing_check(cards, nows, index) {
	var is_l = is_legendmode(cards[index], nows[index]);
	var rst = is_l && !nows[index].islegend;
	if (rst) {
		nows[index].islegend = true;
		Field.log_push("Unit[" + (index + 1) + "]: Lモード");
		// L時の潜在を反映させる
		add_awake_ally(cards, nows, index, true);
		// L時のSSを発動する
		Awake_dospskill(Field, index);
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
