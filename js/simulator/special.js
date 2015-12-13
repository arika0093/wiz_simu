// SSを発動する
function ss_push(n) {

	// SSターンをリセット
	Allys.Now[n].ss_current = 0;
	Allys.Now[n].ss_isfirst = false;
	// 再表示
	sim_show();
}

// Lモードに入っているかどうかを判定する
function is_legendmode(card, ally_n) {
	return get_ssturn(card, ally_n)[1] == 0;
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