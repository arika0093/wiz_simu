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
		nolists.push(number);
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

// tweet用のURLを生成して開く
function create_tweeturl(name, durt, tot) {
	// URL生成
	var url = absolutePath("./" + location.search);
	var nam = Field.Quest.name;
	var trn = durt.replace("+", "%2B");
	var tot = tot.replace("+", "%2B");
	var text = "「" + nam + "」を " + tot + " ターン(" + trn + ")で突破！%0A" + url;
	var tweeturl = "https://twitter.com/intent/tweet?hashtags=wiz_simu" + "&text=" + text;
	return create_shorturl(url, tweeturl);
}

// 短縮URLを生成
function create_shorturl(url, twurl) {
	var login = "o_4ru705ravj";
	var apikey = "R_9978afe5408747fa92c36eaae09e767a";
	var encUrl = encodeURIComponent(url);
	var bitly = "https://api-ssl.bitly.com/v3/shorten?login=" + login +
			"&apiKey=" + apikey + "&longUrl=" + encUrl;
	var win_opt = "menubar=no,toolbar=no,resizable=yes,scrollbars=no,width=640px,height=360px,top=40px,left=40px";
	// Send request
	$.ajax({
		type: "get",
		url: bitly,
		async: false,
		dataType: "jsonp",
		processData: false,
		contentType: false,
		success: function (d) {
			var s_url = d.data.url || url;
			twurl = twurl.replace(url, s_url);
			// 開く
			window.open(twurl, "tweet_result", win_opt);
		},
	});
	window.open("", "tweet_result", win_opt);
}