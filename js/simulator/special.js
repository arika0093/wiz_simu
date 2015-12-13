// SSを発動する
function ss_push(n) {
	var card = Field.Allys.Deck[n];
	var now = Field.Allys.Now[n];
	var is_l = is_legendmode(card, now);
	// SSを打つ
	Field.log_push("Unit[" + (n + 1) + "]: SS発動");
	var ss = is_l ? card.ss2 : card.ss1;
	if (ss.proc != null) {
		ss.proc(Field);
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
	// 再表示
	sim_show();
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