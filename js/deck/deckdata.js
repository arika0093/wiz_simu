// ------------------------------------
// テンプレート生成
// ------------------------------------
// dataのテンプレートを生成する
function deckdata_DataTemplate(size) {
	size = size || 5;
	var data = {
		quest: "",
		questdata: {},
		deck: [],
	};
	for (var i = 0; i < size; i++) {
		data.deck.push($.extend(true, {}, {
			cardno: -1,
			carddata: {},
			mana: 200,
			awake: 0,
			awake_default: 0,
			crystal: [],
		}));
	}
	return data;
}

// ------------------------------------
// 便利関数
// ------------------------------------
// dataを保存してURLを生成する
function deckdata_Create(data, fc) {
	deckdata_SaveUrl(data, function (result) {
		var js = JSON.parse(result);
		fc(js.short);
	});
}

// クエリを読み込んでdataを引数に取る関数を実行する
function deckdata_Load(query, cards, fc) {
	// get query
	query = query || window.location.search;
	// type check
	if (query == "") {
		fc(deckdata_DataTemplate(5));
	} else if (!deckdata_CheckOldUrl(query)) {
		// new ver
		deckdata_LoadUrl(query, function (result) {
			var js = JSON.parse(result);
			var data = JSON.parse(js.long);
			for (var i = 0; i < data.deck.length; i++) {
				var cd = data.deck[i];
				cd.carddata = $.grep(cards, function (e) {
					return e.cardno == cd.cardno;
				})[0];
			}
			fc();
		});
	} else {
		// old ver
		var data = deckdata_LoadOldUrl();
		fc(data);
	}
}

// ------------------------------------
// 各種操作関数
// ------------------------------------
// dataを保存
function deckdata_SaveUrl(data, after) {
	// AJAXを使ってPHPを呼ぶ
	$.ajax({
		type: "POST",
		url: "/api/shorten.php",
		data: "t=set&d=" + JSON.stringify(data),
		success: after,
	});
}

// URL読み込み
function deckdata_LoadUrl(short, after) {
	// AJAXを使ってPHPを呼ぶ
	$.ajax({
		type: "POST",
		url: "/api/shorten.php",
		data: "t=get&d=" + short,
		success: after,
	});
}

// ------------------------------------
// 互換維持用
// ------------------------------------
// 旧版URLかどうか確認する
function deckdata_CheckOldUrl(query) {
	return query.indexOf(",") >= 0;
}

// 旧版URL読み込み
function deckdata_LoadOldUrl(oldquery) {
	var data = deckdata_DataTemplate(5);
	var q = deckdata_GetOldQuery(oldquery);
	if (q.length > 0) {
		for (var ct = 0; ct < 5; ct++) {
			var dd = data.deck[ct];
			// | で区切る
			var q_spl = q[ct].split("|");
			// 精霊番号
			var cno = Number(q_spl[0]);
			if (cno == 0) { continue; }
			var card = $.extend(true, {}, $.grep(Cards, function (e, i) {
				return e.cardno == cno;
			})[0]);
			if (card) {
				var awake_num = card.awakes.length;
				dd.carddata = card;
				dd.cardno = card.cardno;
				dd.mana = (q_spl[1] ? Number(q_spl[1]) : 200);
				dd.awake = awake_num;
				dd.awake_default = (q_spl[2] ? Number(q_spl[2]) : awake_num);
			}
		}
	}
	if (q.length >= 6) {
		data.quest = $.grep(Quests, function (e, i) {
			return e.id == q[5];
		})[0];
	}
	return data;
}

// 旧版URL query読み込み
function deckdata_GetOldQuery(qr) {
	var result = [];
	var q = qr ? qr : window.location.search;
	if (1 < q.length) {
		var query = q.substring(1);
		var parameters = query.split(',');
		for (var i = 0; i < parameters.length; i++) {
			var param = decodeURIComponent(parameters[i]);
			result[i] = param;
		}
	}
	return result;
}

// ------------------------------------
// その他
// ------------------------------------
// 画像のURLを返却する
function get_image_url(no) {
	if (no < 0) {
		return "/image/noimage.png";
	}
	return "http://i.quiz.colopl.jp/img/card/small/card_" + ("0000" + no).slice(-5) + "_0.png"
}
