// ------------------------------------
// テンプレート生成
// ------------------------------------
// dataのテンプレートを生成する
function deckdata_DataTemplate(size) {
	size = size || 6;
	var data = {
		quest: "",
		deck: [],
	};
	for (var i = 0; i < size; i++) {
		data.deck.push(deckdata_DeckCardTemplate());
	}
	return data;
}

// deck内のテンプレートを生成する
function deckdata_DeckCardTemplate() {
	return $.extend(true, {}, {
		cardno: 0,
		mana: 200,
		awake: -1,
		awake_default: -1,
		level: 110,
		level_default: 110,
		crystal: [],
	});
}

// ------------------------------------
// 便利関数
// ------------------------------------
// dataを保存してURLを生成する
function deckdata_Create(data, fc) {
	deckdata_Apply(data, true);
	deckdata_SaveUrl(data, function (result) {
		var js = JSON.parse(result);
		fc(js.short);
	});
}

// クエリを読み込んでdataを引数に取る関数を実行する
function deckdata_Load(query, fc) {
	// get query
	query = (query || window.location.search);
	if (query.indexOf("?") == 0) {
		query = query.substring(1);
	}
	// type check
	if (query == "") {
		fc(deckdata_DataTemplate());
	} else if (!deckdata_CheckOldUrl(query)) {
		// new ver
		deckdata_LoadUrl(query, function (result) {
			var js = JSON.parse(result);
			var data = js.long.length > 0 ? JSON.parse(js.long) : null;
			fc(data);
		});
	} else {
		// old ver
		var data = deckdata_LoadOldUrl(query);
		fc(data);
	}
}

// 状況をdataに入れる
function deckdata_Apply(data, ignore_check) {
	var is_valid = false;
	data = $.extend(true, {}, data || deckdata_DataTemplate(5));
	// 状況取得(card)
	for (var i = 0; i < 6; i++) {
		var inp_name = $("#deck0" + (i + 1)).val();
		if (!data.deck[i]) { continue; }
		if (inp_name != "") {
			var crd = $.grep(Cards, function (e, i) {
				return e.name == inp_name && !e.disable;
			})[0];
			data.deck[i].cardno = crd.cardno;
			data.deck[i].awake_default = crd.awakes.length;
			is_valid = is_valid || crd.cardno > 0;
		} else {
			data.deck[i] = deckdata_DeckCardTemplate();
		}
	}
	// 状況取得(quest)
	var qst_name = $("#QstSel").val();
	data.quest = qst_name;
	is_valid = is_valid && qst_name && qst_name.length > 0;
	// 返却
	return is_valid || ignore_check ? data : null;
}

// ------------------------------------
// 各種操作関数
// ------------------------------------
// dataを保存
function deckdata_SaveUrl(data, after) {
	// AJAXを使ってPHPを呼ぶ
	$.ajax({
		type: "POST",
		url: "http://api.wiztools.net/shorten.php",
		data: "t=set&d=" + JSON.stringify(data),
		success: after,
		error: (xhr, status, err) => {
			throw err;
		}
	});
}

// URL読み込み
function deckdata_LoadUrl(short, after) {
	// AJAXを使ってPHPを呼ぶ
	$.ajax({
		type: "POST",
		url: "http://api.wiztools.net/shorten.php",
		data: "t=get&d=" + short,
		success: after,
		error: (xhr, status, err) => {
			throw err;
		}
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
			if (card.cardno > 0) {
				var awake_num = card.awakes.length;
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
		})[0].id;
	}
	return data;
}

// 旧版URL query読み込み
function deckdata_GetOldQuery(qr) {
	var result = [];
	var q = qr ? qr : window.location.search;
	if (1 < q.length) {
		var query = q.indexOf("?") == 0 ? q.substring(1) : q;
		var parameters = query.split(',');
		for (var i = 0; i < parameters.length; i++) {
			var param = decodeURIComponent(parameters[i]);
			result[i] = param;
		}
	}
	return result;
}