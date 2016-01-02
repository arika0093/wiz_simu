// URLのnoからデッキを読み込む
function loaddeck_from_url(qr) {
	var cds = [];
	var q = getquery(qr);
	if (q.length > 0) {
		for (var ct = 0; ct < 5; ct++) {
			var spl_idx = q[ct].indexOf("|");
			var cno = q[ct].substr(0, spl_idx >= 0 ? spl_idx : undefined);
			var cmana = spl_idx >= 0 ? Number(q[ct].substr(spl_idx+1)) : 200;
			if (cno == 0) { continue; }
			var card = $.grep(Cards, function (e, i) {
				return e.cardno == cno;
			})[0];
			if (card) {
				cds.push({
					card: card,
					mana: cmana,
				});
			}
		}
	}
	return cds;
}

// URLのidからquestを読み込む
function loadquest_from_url(qr) {
	var q = getquery(qr);
	if (q.length >= 6) {
		return $.grep(Quests, function (e, i) {
			return e.id == q[5];
		})[0];
	}
	return null;
}

// URLのnoを配列にして返却する
function getquery(qr) {
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

// 画像のURLを返却する
function get_image_url(no) {
	if (no < 0) {
		return "./image/noimage.png";
	}
	return "http://i.quiz.colopl.jp/img/card/small/card_" + ("0000" + no).slice(-5) + "_0.png"
}

