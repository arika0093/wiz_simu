// 解答したときの処理
function panel(attr) {
	var is_allkill = true;
	// 全体について処理
	Allys.Status.chain += 1;
	// 各精霊について処理
	for (var i = 0; i < Allys.Deck.length; i++) {
		// AS処理
		answer_skill(i);
		// SSチャージを1増やす
		Allys.Now[i].ss_current += 1;
	}
	// 全部の敵を倒してるかどうか判定する


	// 全ての敵を倒していたら
	if (is_allkill) {
		// 次に進む
		Allys.Status.nowbattle += 1;
		Allys.Status.durturn.push(Allys.Status.nowturn);
		Allys.Status.nowturn = 0;
	}
	// ターン追加
	Allys.Status.nowturn += 1;
	Allys.Status.totalturn += 1;
	// 表示
	sim_show();
}

// アンサースキルの処理
function answer_skill(no) {



}