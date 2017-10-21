// turn_effectのターン数減少
function reduce_turneffect(fld, is_ssfin) {
	// 全滅確認
	var allkill = is_allkill(fld) && !isexist_enemy_rev(fld);
	// 味方ターンエフェクト減算処理
	for (var i = 0; i < fld.Allys.Deck.length; i++) {
		for (var j = 0; j < fld.Allys.Now[i].turn_effect.length; j++) {
			var teff = fld.Allys.Now[i].turn_effect[j];
			// 戦闘を跨ぐ際にターンを減少させる(AS撃破時) or 未全滅時
			if ((teff.isreduce_stg && !is_ssfin) || !allkill) {
				// 後付けエフェクトなら無視する
				// answer.js - panel()を参照のこと
				if(teff.isnotafteradded){
					teff.lim_turn -= 1;
					teff.isnotafteradded = false;
				}
			}
		}
	}
	if (!allkill) {
		// 敵ターンエフェクト減算処理
		var enemys = GetNowBattleEnemys(fld);
		for (var i = 0; i < enemys.length; i++) {
			for (var j = 0; j < enemys[i].turn_effect.length; j++) {
				enemys[i].turn_effect[j].lim_turn -= 1;
			}
		}
	}
}

// (味方)効果の継続確認を行う
function turn_effect_check(fld, is_turn_move, is_ssfin) {
	// 全効果をまとめる
	var all_turneff = [];
	var ct = 0;
	for (var i = 0; i < fld.Allys.Deck.length; i++) {
		var now = fld.Allys.Now[i];
		// 重複効果を削除
		turneff_break_dual(fld, now.turn_effect, i, is_turn_move);
		for (var j = 0; j < now.turn_effect.length; j++) {
			all_turneff[ct] = {
				index: i,
				position: j,
				effect: fld.Allys.Now[i].turn_effect[j],
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
		var now = fld.Allys.Now[all_turneff[te].index];
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
			turneff.effect(fld, all_turneff[te].index, turneff, state, is_turn_move, is_allkill(fld), is_ssfin);
			turneff._notfirst = true;
		}
		if (turneff.lim_turn == 0) {
			var tf_index = all_turneff[te].index;
			var tf_pos = all_turneff[te].position;
			// 残りターンが0なら除外
			turneff_remove_pos(fld, now.turn_effect, all_turneff[te].position);
			turneff_remove_pos(fld, all_turneff, te);
			te--;
			// 同じindexを持つtfのpositionをずらす
			$.each(all_turneff, function (i, e) {
				if (e.index == tf_index && e.position >= tf_pos) {
					e.position--;
				}
			});
		}
	}
	// スキカン確認
	if (is_turn_move && !is_ssfin) {
		turneff_check_skillcounter(fld);
	}
}

// turn_effectの初回effect未実行のもののみに対して初回呼び出しを行う
function turn_effect_check_onlyfirst(fld, now, index){
	var teffs = now.turn_effect;
	for (var te = 0; te < teffs.length; te++) {
		var turneff = teffs[te];
		if (!turneff._notfirst) {
			var state = "first";
			// 呼び出し
			turneff.effect(fld, index, turneff, state, false, is_allkill(fld), false);
			turneff._notfirst = true;
		}
	}
}

// ターン継続効果の確認(敵版)
function enemy_turn_effect_check(fld, is_turn_move) {
	var enemys = GetNowBattleEnemys(fld);
	for (var i = 0; i < enemys.length; i++) {
		// 重複効果を削除
		turneff_break_dual(fld, enemys[i].turn_effect, i, is_turn_move);
		for (var te = 0; te < enemys[i].turn_effect.length; te++) {
			var turneff = enemys[i].turn_effect[te];
			if (!turneff._notfirst || is_turn_move) {
				// 発動
				turneff.effect(fld, i, turneff, turneff.lim_turn == 0, is_turn_move, is_allkill(fld));
				turneff._notfirst = true;
			}
			if (turneff.lim_turn == 0) {
				// 残りターンが0なら除外
				turneff_remove_pos(fld, enemys[i].turn_effect, te)
				te -= 1;
			}
		}
	}
}

// 重複しているターン継続効果の解除
function turneff_break_dual(fld, teffs, index, is_turn_move) {
	turneff_break_dual_settype(fld, teffs, index, "", is_turn_move);
}

// 重複しているターン継続効果をtypeを指定して解除
function turneff_break_dual_settype(fld, teffs, index, type, is_turn_move) {
	for (var t = 0; t < teffs.length; t++) {
		// 同一typeが複数存在し新しい方が重複不可なら最初の要素を消す
		var duals = $.grep(teffs, function (e) {
			return (e.type == teffs[t].type) && (!type || type == teffs[t].type) && (!teffs[t].isdual);
		});
		if (duals.length >= 2) {
			for (var i = 0; i < duals.length - 1; i++) {
				// 消す前に終了時関数をcallする(state: overlay)
				var pos = teffs.indexOf(duals[i]);
				duals[i].effect(fld, index, duals[i], "overlay", is_turn_move, is_allkill(fld));
				turneff_remove_pos(fld, teffs, pos);
				t = (pos <= t ? t - 1 : t);
			}
		}
	}
}

// 指定位置のturneffectを削除して返す
// pos: 削除対象のindex or 削除対象のturn_effect
function turneff_remove_pos(fld, teffs, pos) {
	if (pos >= 0) {
		// remove
		teffs.splice(pos, 1);
	} else {
		var idx = teffs.indexOf(pos);
		// for debug
		console.log(pos.desc + "/index:" + idx);
		teffs.splice(idx, 1);
	}
}

// チャージスキルの確認を行う
function turneff_chargeskill_check(fld) {
	var nows = fld.Allys.Now;
	$.each(nows, function (i, e) {
		// 抽出
		var tf_chs = $.grep(e.turn_effect, function (g) {
			return g.type == "ss_charge";
		});
		for (var c = 0; c < tf_chs.length; c++) {
			var tf = tf_chs[c];
			if (tf.charge_turn <= 0 && tf.charged_fin) {
				// 残りカウントが0なら関数実行
				tf.charged_fin(fld, i);
				tf.charged_fin = null;
				/*
				// 削除
				turneff_break_cond(e.turn_effect, -1, function (tf) {
					return !tf.charged_fin && tf.charge_turn <= 0;
				}, "end");
				// 発動後処理
				ss_afterproc(i);
				// 全滅していたら次のターンへ進む
				if (is_allkill()) {
					var t = fld.Status.totalturn;
					nextturn(true);
					return;
				}
				*/
			}
		}
	});
}

// スキル反射のみ確認を行う(先制行動時などの確認に使用)
function turneff_check_skillcounter(fld) {
	var nows = fld.Allys.Now;
	$.each(nows, function (i, e) {
		var tf_scs = $.grep(e.turn_effect, function (g) {
			return g.type == "ss_skill_counter" || g.type == "ss_dual_counter";
		});
		for (var c = 0; c < tf_scs.length; c++) {
			tf_scs[c].counter(fld, i, tf_scs[c], "", true, is_allkill(fld));
		}
	});
}

// ターン継続効果の全解除(味方)
function turneff_allbreak(fld, teffs, index, call_type) {
	while (teffs.length > 0) {
		var teff = teffs[0];
		// 除外時効果
		if (call_type) {
			teff.effect(fld, index, teff, call_type, false, false);
		}
		turneff_remove_pos(fld, teffs, 0);
	}
}

// ターン継続効果の全解除(敵)
function turneff_allbreak_enemy(fld, teffs, index) {
	while (teffs.length > 0) {
		var teff = teffs[0];
		// 除外時効果
		teff.effect(fld, index, teff, false, false, false);
		turneff_remove_pos(fld, teffs, 0);
	}
}

// 指定したターン継続効果の解除
function turneff_break(fld, teffs, index, type, call_type) {
	for (var i = 0; i < teffs.length; i++) {
		var teff = teffs[i];
		if (teff.type != type) {
			continue;
		}
		// 除外時効果
		if (call_type) {
			teff.effect(fld, index, teff, call_type, false, false);
		}
		turneff_remove_pos(fld, teffs, i);
		i--;
	}
}

// ターン継続効果の解除(条件)
function turneff_break_cond(fld, teffs, index, func, call_type) {
	call_type = call_type || "overlay";
	for (var i = 0; i < teffs.length; i++) {
		var teff = teffs[i];
		if (!func(teff)) {
			continue;
		}
		teff.effect(fld, index, teff, call_type, false, false);
		turneff_remove_pos(fld, teffs, i);
		i--;
	}
}

// 一番最後にかけられたターン継続効果の解除(条件)
function turneff_break_last(fld, teffs, index, func, call_type) {
	call_type = call_type || "overlay";
	var cond_tfs = $.grep(teffs, function(e){
		return func(e);
	});
	var teff = cond_tfs[cond_tfs.length];
	var i = teffs.indexOf(teff);
	teff.effect(fld, index, teff, call_type, false, false);
	turneff_remove_pos(fld, teffs, i);
}

// 継続効果追加
function ss_continue_effect_add(fld, eff_obj) {
	// 重複してたら削除
	var cont_effs = fld.Status.continue_eff;
	cont_effs = cont_effs.filter(function (e) {
		return e.type != eff_obj.type;
	});
	// 追加
	cont_effs.push(eff_obj);
	fld.Status.continue_eff = cont_effs;
}

// 継続効果の確認/発動/除外
function ss_continue_effect_check(fld, is_ssfin) {
	var cont_effs = fld.Status.continue_eff;
	for (var i = 0; i < cont_effs.length; i++) {
		var ceff = cont_effs[i];
		// 発動
		ceff.effect(fld, ceff.index, ceff, is_ssfin);
		// 敵が全滅していない場合か、デメリット効果なら、ターン数を減らす
		if (ceff.isdemerit || !is_allkill(fld)) {
			ceff.lim_turn--;
		}
		// 残りターンが0以下なら除外
		if (ceff.lim_turn <= 0) {
			turneff_remove_pos(fld, cont_effs, i);
			i--;
		}
	}
}

//烈眼ダメージのチェック
function retsugan_check(fld, is_ssfin){
	if(is_ssfin){
		return
	}
	var is_retsugan=false;
	fld.Allys.Now.forEach(function(ally, n){
		if(ally.islegend && ally.lgstart_turn != fld.Status.totalturn){
			fld.Allys.Deck[n].crystal.forEach(function(crstl){
				if (crstl.name && crstl.name.indexOf("烈眼") != -1) {
					is_retsugan = true;
				}
			})
		}
	})
	if(is_retsugan){
		ss_object_done(fld, 0, ss_consume_all(0.1));
	}
}

/*
// ターン終了時効果のチェック(敵味方両方確認)
function after_turneffect_check() {
	// 味方チェック(今のところやらない)

	// 敵チェック
	var es = GetNowBattleEnemys();
	$.each(es, function (i, e) {
		// 実行
		$.each(e.after_turn, function (j, et) {
			et();
		});
		// clear
		e.after_turn = [];
	});
}
*/