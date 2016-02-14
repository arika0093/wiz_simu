// ?以下のURLを生成する(check: 必要項目が入力されているか確認する)
function create_url(check) {
	var hasvalue = false;
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
		if (number != 0) {
			var add_tx = String(number);
			if (Manaplus[ct] != 200 || AwakeNum[ct] != -1) {
				add_tx += "|" + Manaplus[ct];
			}
			if (AwakeNum[ct] != -1) {
				add_tx += "|" + AwakeNum[ct];
			}
			nolists.push(add_tx);
		} else {
			nolists.push(number);
		}
		hasvalue = hasvalue || number != 0;
	}
	// questのid取得
	var quest_id = $("#QstSel").val();
	// checkする必要があるなら問題ないかチェック
	if (check && (!hasvalue || quest_id == "")) {
		return null;
	}
	return "?" + nolists.toString() + "," + quest_id;
}

// tweet用のURLを生成
function create_tweeturl(name, durt, tot, func) {
	// URL生成
	var url = absolutePath("/simulator/" + location.search);
	var nam = Field.Quest.name;
	var trn = durt.replace("+", "%2B");
	var tot = tot.replace("+", "%2B");
	var text = "このデッキで " + nam + " を " + tot + " ターン(" + trn + ") で突破！%0A" + url;
	var tweeturl = "https://twitter.com/intent/tweet?hashtags=wiz_simu" + "&text=" + text;
	func.url = url;
	func.twurl = tweeturl;
	return create_shorturl(url, func);
}

// 短縮URLを生成
function create_shorturl(url, func) {
	var login = "o_4ru705ravj";
	var apikey = "R_9978afe5408747fa92c36eaae09e767a";
	var encUrl = encodeURIComponent(url);
	var bitly = "https://api-ssl.bitly.com/v3/shorten?login=" + login +
			"&apiKey=" + apikey + "&longUrl=" + encUrl;
	// Send request
	$.ajax({
		type: "get",
		url: bitly,
		async: false,
		dataType: "jsonp",
		processData: false,
		contentType: false,
		success: func,
	});
}