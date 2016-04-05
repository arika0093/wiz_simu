// turn_effectのターン数減少
function reduce_turneffect(is_ssfin) {
	// 全滅確認
	var allkill = is_allkill();
	// 味方ターンエフェクト減算処理
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		for (var j = 0; j < Field.Allys.Now[i].turn_effect.length; j++) {
			var teff = Field.Allys.Now[i].turn_effect[j];
			// 戦闘を跨ぐ際にターンを減少させる(AS撃破時) or 未全滅時
			if ((teff.isreduce_stg && !is_ssfin) || !allkill) {
				teff.lim_turn -= 1;
			}
		}
	}
	if (!allkill) {
		// 敵ターンエフェクト減算処理
		var enemys = GetNowBattleEnemys();
		for (var i = 0; i < enemys.length; i++) {
			for (var j = 0; j < enemys[i].turn_effect.length; j++) {
				enemys[i].turn_effect[j].lim_turn -= 1;
			}
		}
	}
}

// (味方)効果の継続確認を行う
function turn_effect_check(is_turn_move, is_ssfin) {
	// 全効果をまとめる
	var all_turneff = [];
	var ct = 0;
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		var now = Field.Allys.Now[i];
		// 重複効果を削除
		turneff_break_dual(now.turn_effect, i, is_turn_move);
		for (var j = 0; j < now.turn_effect.length; j++) {
			all_turneff[ct] = {
				index: i,
				position: j,
				effect: Field.Allys.Now[i].turn_effect[j],
			};
			ct++;
		}
	}
	// Sort
	all_turneff = all_turneff.sort(function (a, b) {
		var a_pr = a.effect.priority ? a.effect.priority : 0;
		var b_pr = b.effect.priority ? b.effect.priority : 0;
		if (a_pr < b_pr) return +1;
		if (a_pr > b_pr) return -1;
	})
	for (var te = 0; te < all_turneff.length; te++) {
		var now = Field.Allys.Now[all_turneff[te].index];
		var turneff = all_turneff[te].effect;
		if (!turneff._notfirst || is_turn_move) {
			// 発動時状況を決める(初回呼び出し時: first, 終了時: end)
			if (!turneff._notfirst) {
				var state = "first";
			} else if (turneff.lim_turn == 0) {
				var state = "end";
			} else {
				var state = "";
			}
			// 呼び出し
			turneff.effect(Field, all_turneff[te].index, turneff, state, is_turn_move, is_allkill(), is_ssfin);
			turneff._notfirst = true;
		}
		if (turneff.lim_turn == 0) {
			// 残りターンが0なら除外
			now.turn_effect.splice(all_turneff[te].position, 1);
			all_turneff.splice(te, 1);
			te--;
		}
	}
}

// ターン継続効果の確認(敵版)
function enemy_turn_effect_check(is_turn_move) {
	var enemys = GetNowBattleEnemys();
	for (var i = 0; i < enemys.length; i++) {
		// 重複効果を削除
		turneff_break_dual(enemys[i].turn_effect, i, is_turn_move);
		for (var te = 0; te < enemys[i].turn_effect.length; te++) {
			var turneff = enemys[i].turn_effect[te];
			if (!turneff._notfirst || is_turn_move) {
				// 発動
				turneff.effect(Field, i, turneff, turneff.lim_turn == 0, is_turn_move, is_allkill());
				turneff._notfirst = true;
			}
			if (turneff.lim_turn == 0) {
				// 残りターンが0なら除外
				enemys[i].turn_effect.splice(te, 1);
				te--;
			}
		}
	}
}

// 重複しているターン継続効果の解除
function turneff_break_dual(teffs, index, is_turn_move) {
	for (var t = 0; t < teffs.length; t++) {
		// 同一typeが複数存在し新しい方が重複不可なら最初の要素を消す
		var duals = $.grep(teffs, function (e) {
			return (e.type == teffs[t].type) && (!teffs[t].isdual);
		});
		if (duals.length >= 2) {
			for (var i = 0; i < duals.length - 1; i++) {
				// 消す前に終了時関数をcallする(state: overlay)
				var pos = teffs.indexOf(duals[i]);
				duals[i].effect(Field, index, duals[i], "overlay", is_turn_move, is_allkill());
				teffs.splice(pos, 1);
				t = (pos <= t ? t - 1 : t);
			}
		}
	}
}

// チャージスキルの確認を行う
function turneff_chargeskill_check() {
	var nows = Field.Allys.Now;
	$.each(nows, function (i, e) {
		// 抽出
		var tf_chs = $.grep(e.turn_effect, function (g) {
			return g.type == "ss_charge";
		});
		for (var c = 0; c < tf_chs.length; c++) {
			var tf = tf_chs[c];
			if (tf.charge_turn <= 0) {
				// 残りカウントが0なら関数実行
				tf.charged_fin(Field);
				// 削除
				turneff_break_cond(tf_chs, -1, function (tf) {
					return tf.charge_turn <= 0;
				}, "end");
				e.turn_effect = tf_chs;
				// 発動後処理
				ss_afterproc(i);
				// 全滅していたら次のターンへ進む
				if (is_allkill()) {
					var t = Field.Status.totalturn;
					Field.Status.is_chargeend[t] = true;
					nextturn(true);
					return;
				}
			}
		}
	});
}

// 味方スキル反射のみ確認を行う(先制行動時の確認に使用)
function turneff_check_skillcounter(fld) {
	var nows = fld.Allys.Now;
	$.each(nows, function (i, e) {
		var tf_scs = $.grep(e.turn_effect, function (g) {
			return g.type == "ss_skill_counter";
		});
		for (var c = 0; c < tf_scs.length; c++) {
			tf_scs[c].effect(fld, i, tf_scs[c], "", true, is_allkill());
		}
	});
}

// ターン継続効果の全解除
function turneff_allbreak(teffs, index, call_type) {
	while (teffs.length > 0) {
		var teff = teffs[0];
		// 除外時効果
		if (call_type) {
			teff.effect(Field, index, teff, call_type, false, false);
		}
		teffs.splice(0, 1);
	}
}

// 指定したターン継続効果の解除
function turneff_break(teffs, index, type, call_type) {
	for (var i = 0; i < teffs.length; i++) {
		var teff = teffs[i];
		if (teff.type != type) {
			continue;
		}
		// 除外時効果
		if (call_type) {
			teff.effect(Field, index, teff, call_type, false, false);
		}
		teffs.splice(i, 1);
		i--;
	}
}

// ターン継続効果の解除(条件)
function turneff_break_cond(teffs, index, func, call_type) {
	call_type = call_type || "overlay";
	for (var i = 0; i < teffs.length; i++) {
		var teff = teffs[i];
		if (!func(teff)) {
			continue;
		}
		teff.effect(Field, index, teff, call_type, false, false);
		teffs.splice(i, 1);
		i--;
	}
}

// 継続効果追加
function ss_continue_effect_add(eff_obj) {
	// 重複してたら削除
	var cont_effs = Field.Status.continue_eff;
	cont_effs = cont_effs.filter(function (e) {
		return e.type != eff_obj.type;
	});
	// 追加
	cont_effs.push(eff_obj);
	Field.Status.continue_eff = cont_effs;
}

// 継続効果の確認/発動/除外
function ss_continue_effect_check() {
	var cont_effs = Field.Status.continue_eff;
	for (var i = 0; i < cont_effs.length; i++) {
		var ceff = cont_effs[i];
		// 発動
		ceff.effect(Field, ceff.index, ceff);
		// 全滅してなかったらターン数を減らす
		if (!is_allkill()) {
			ceff.lim_turn--;
		}
		Field.log_push("Unit[" + (ceff.index + 1) + "]: 継続ダメージ - 残り" + ceff.lim_turn + "t");
		// 残りターンが0以下なら除外
		if (ceff.lim_turn <= 0) {
			cont_effs.splice(i, 1);
			i--;
		}
	}
}