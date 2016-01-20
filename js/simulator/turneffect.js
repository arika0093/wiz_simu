// turn_effectのターン数減少
function reduce_turneffect() {
	if (!is_allkill()) {
		// 味方ターンエフェクト減算処理
		for (var i = 0; i < Field.Allys.Deck.length; i++) {
			for (var j = 0; j < Field.Allys.Now[i].turn_effect.length; j++) {
				Field.Allys.Now[i].turn_effect[j].lim_turn -= 1;
			}
		}
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
function turn_effect_check(is_turn_move, is_battle_move) {
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
			turneff.effect(Field, all_turneff[te].index, turneff, state, is_turn_move, is_allkill());
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

// ターン継続効果の全解除
function turneff_allbreak(teffs, index, overlay_call) {
	while (teffs.length > 0) {
		var teff = teffs[0];
		// 除外時効果
		if (overlay_call) {
			teff.effect(Field, index, teff, "overlay", false, false);
		}
		teffs.splice(0, 1);
	}
}

// 指定したターン継続効果の解除
function turneff_break(teffs, index, type, overlay_call) {
	for (var i = 0; i < teffs.length; i++) {
		var teff = teffs[i];
		if (teff.type != type) {
			continue;
		}
		// 除外時効果
		if (overlay_call) {
			teff.effect(Field, index, teff, "overlay", false, false);
		}
		teffs.splice(i, 1);
		i--;
	}
}

// ターン継続効果の解除(条件)
function turneff_break_cond(teffs, index, func) {
	for (var i = 0; i < teffs.length; i++) {
		var teff = teffs[i];
		if (!func(teff)) {
			continue;
		}
		teff.effect(Field, index, teff, "overlay", false, false);
		teffs.splice(i, 1);
		i--;
	}
}