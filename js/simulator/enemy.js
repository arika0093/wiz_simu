// 今戦っている相手の配列を返す
function GetNowBattleEnemys(i) {
	if (i === undefined) {
		return Field.Enemys.Data[Field.Status.nowbattle - 1].enemy;
	} else {
		return Field.Enemys.Data[Field.Status.nowbattle - 1].enemy[i];
	}
}

// 敵出現順番生成
function CreateEnemypopup(qst) {
	var poplist = [];
	var pop_i = [];
	for (var t = 0; t < qst.aprnum; t++) {
		pop_i.push($.map(qst.data, function (e, i, c) {
			// 配列内に現在見てるターン数の数字があったら現在の配列番号を返す
			var aprt_i = $.inArray(t + 1, e.appearance);
			if (aprt_i >= 0) {
				return i;
			}
		}));
		var rand = Math.floor(Math.random() * pop_i[t].length);
		poplist.push(pop_i[t][rand]);
	}
	return poplist;
}

// 敵を全滅させたか確認し、全滅してたら次の敵を出現させる
function allkill_check(is_ssfinish) {
	var is_allkill = true;
	var ntrun = Field.Status.nowturn;
	var enemy = GetNowBattleEnemys();

	for (var i = 0; i < enemy.length; i++) {
		// 全部の敵を倒してるかどうか判定する
		is_allkill = (is_allkill && enemy[i].nowhp == 0);
	}
	// 全ての敵を倒していたら
	if (is_allkill) {
		// 全終了確認
		if (Field.Enemys.Popuplist.length <= Field.Status.nowbattle) {
			// 終了処理開始
			Field.Status.finish = true;
			Field.log_push(Field.Status.nowbattle + "戦目突破(" + ntrun + "ターン)");
			Field.log_push("QUEST CLEARED! (Total: " + (Field.Status.totalturn + 1) + "turn)");
		} else {
			Field.log_push(Field.Status.nowbattle + "戦目突破(" + ntrun + "ターン)");
			// 次に進む
			Field.Status.nowbattle += 1;
		}
		// パネル付与効果を全部リセット
		Field.Status.panel_add = [];
		Field.Status.durturn.push({ ssfin: is_ssfinish, turn: ntrun });
		Field.Status.nowturn = 0;
	}
	return is_allkill;
}

// 敵出現時の処理を行う
function enemy_popup_proc(){
	var enemys = GetNowBattleEnemys();
	for (var i = 0; i < enemys.length; i++) {
		if (enemys[i].on_popup) {
			for (var j = 0; j < enemys[i].on_popup.length; j++) {
				enemys[i].on_popup[j](Field, i);
			}
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
				now.turn_effect.splice(now.turn_effect.indexOf(duals[0]), 1);
				continue;
			}
			if (turneff.lim_turn >= 0 && (!turneff._notfirst || is_turn_move)) {
				// 発動
				var prm = (!turneff._notfirst ? 1 : Math.min(turneff.lim_turn - 1, 0));
				turneff.effect(Field, prm, i);
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