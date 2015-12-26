// SSを発動する
function ss_push(n) {
	var card = Field.Allys.Deck[n];
	var now = Field.Allys.Now[n];
	var is_l = is_legendmode(card, now);
	var ss = is_l ? card.ss2 : card.ss1;
	var ss_rst = true;
	// SSを打つ
	Field.log_push("Unit[" + (n + 1) + "]: SS発動");
	if (ss.proc != null) {
		for (var i = 0; i < ss.proc.length; i++) {
			ss_rst = ss.proc[i](Field, n);
		}
	}
	// 発動成功なら
	if (ss_rst) {
		// SSを保存しておく
		Field.Status.latest_ss = ss;
		// ターン効果確認
		turn_effect_check(false);
		// 敵スキル関係の処理
		{
			// スキル反射確認
			var enemys = GetNowBattleEnemys();
			$.each(enemys, function (i, e) {
				if (e.flags.is_ss_attack && e.turn_effect.length > 0) {
					var skillct = $.grep(e.turn_effect, function (g) {
						return g.on_ss_damage !== undefined;
					});
					for (var j = 0; j < skillct.length; j++) {
						skillct[j].on_ss_damage(Field, i, n);
					}
					e.flags.is_ss_attack = false;
				}
			});
			// 敵ダメージ反応系
			enemy_damage_switch_check();
		}
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
		// 全滅していたら次のターンへ進む
		if (is_allkill()) {
			nextturn(true);
		}
		// [進む]を使えないように
		Field_log._removeover(Field.Status.totalturn);
		// 再表示
		sim_show();
	} else {
		// failed
		alert("SSを発動しても効果を得られません。");
	}
}

// Lモードに入ったタイミングかどうかを判定する
function legend_timing_check(cards, nows, index) {
	var is_l = is_legendmode(cards[index], nows[index]);
	var rst = is_l && !nows[index].islegend;
	if (rst) {
		nows[index].islegend = true;
		// L時の潜在を反映させる
		add_awake_ally(cards, nows, index, true);
		Field.log_push("Unit[" + (index + 1) + "]: Lモード");
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
	// 発動してないかどうか
	var fst = ally_n.ss_isfirst;
	// 計算
	var ss1 = Math.max(ss1_def - cg - (fst ? has_fastnum(card) : 0), 0);
	var ss2 = ss2_def !== undefined ? (Math.max(ss2_def - cg - (fst ? has_fastnum(card) : 0), 0)) : undefined;
	// 返却
	return [ss1, ss2];
}

// 効果の継続確認を行う
function turn_effect_check(is_turn_move) {
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		var now = Field.Allys.Now[i];
		for (var te = 0; te < now.turn_effect.length; te++) {
			var turneff = now.turn_effect[te];
			// 同一typeが複数存在し新しい方が重複不可なら最初の要素を消す
			var duals = $.grep(now.turn_effect, function (e) {
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
				now.turn_effect.splice(te, 1);
				te--;
			}
		}
	}
}