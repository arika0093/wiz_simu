// ?以下のURLを生成する(check: 必要項目が入力されているか確認する)
function create_url(check){
	// 精霊Noの配列
	var nolists = new Array();
	// チェックする文字入力欄(ID)
	var input_ids = ["deck01", "deck02", "deck03", "deck04", "deck05"];
	// No列挙
	for (var ct = 0; ct < 5; ct++) {
		var input = $("#" + input_ids[ct]).val();
		if (input == "") {
			nolists.push(0);
			continue;
		}
		var card = $.grep(Cards, function (e, i) {
			return e.name == input;
		})[0];
		var number = card !== undefined ? card.cardno : 0;
		nolists.push(number);
	}
	// checkする必要があるなら問題ないかチェック
	if (check && (nolists.length <= 0 || quest_id == "")) {
		return null;
	}
	// questのid取得
	var quest_id = $("#QstSel").val();
	return "?" + nolists.toString() + "," + quest_id;
}