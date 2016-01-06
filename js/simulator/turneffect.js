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
		// 同一typeが複数存在し新しい方が重複不可なら最初の要素を消す
		var duals = $.grep(now.turn_effect, function (e) {
			return (e.type == turneff.type) && (!turneff.isdual);
		});
		if (duals.length >= 2) {
			// 消す前に終了時関数をcallする(state: overlay)
			turneff.effect(Field, all_turneff[te].index, turneff, "overlay", is_turn_move, is_allkill());
			now.turn_effect.splice(now.turn_effect.indexOf(duals[0]), 1);
			continue;
		}
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
		for (var te = 0; te < enemys[i].turn_effect.length; te++) {
			var turneff = enemys[i].turn_effect[te];
			// 同一typeが複数存在し新しい方が重複不可なら最初の要素を消す
			var duals = $.grep(enemys[i].turn_effect, function (e) {
				return (e.type == turneff.type) && (!turneff.isdual);
			});
			if (duals.length >= 2) {
				var ix = enemys[i].turn_effect.indexOf(duals[0]);
				enemys[i].turn_effect.splice(ix, 1);
				te = (ix <= te ? te - 1 : te);
				continue;
			}
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