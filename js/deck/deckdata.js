// ------------------------------------
// テンプレート生成
// ------------------------------------
// dataのテンプレートを生成する
function deckdata_DataTemplate(size) {
	size = size || 5;
	var data = {
		quest: "",
		quest_imple: {},
		deck: [],
	};
	for (var i = 0; i < size; i++) {
		data.deck.push($.extend(true, {}, {
			cardno: -1,
			card_imple: {},
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
// クエリを読み込んでdataを引数に取る関数を実行する
function deckdata_Load(fc) {
	// get query
	var q = window.location.search;
	// type check
	if (!deckdata_CheckOldUrl(q)) {
		// new ver
		deckdata_LoadUrl(function (result) {
			var js = JSON.parse(result);
			fc(JSON.parse(js.d));
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
// data保存
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
				dd.id = card.cardno;
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
