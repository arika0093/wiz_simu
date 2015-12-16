// URLのnoからデッキを読み込む
function loaddeck_from_url() {
	var cds = new Array();
	var q = getquery();

	if (q.length > 0) {
		for (var ct = 0; ct < 5; ct++) {
			if (q[ct] == 0) { continue; }
			var card = $.grep(Cards, function (e, i) {
				return e.cardno == q[ct];
			})[0];
			if (card !== undefined) {
				cds.push(card);
			}
		}
	}
	return cds;
}

// URLのidからquestを読み込む
function loadquest_from_url() {
	var q = getquery();

	if (q.length >= 6) {
		return $.grep(Quests, function (e, i) {
			return e.id == q[5];
		})[0];
	}
	return undefined;
}

// URLのnoを配列にして返却する
function getquery() {
	var result = [];
	if (1 < window.location.search.length) {
		var query = window.location.search.substring(1);
		var parameters = query.split(',');
		for (var i = 0; i < parameters.length; i++) {
			var param = decodeURIComponent(parameters[i]);
			result[i] = param;
		}
	}
	return result;
}