$(function () {
	var ct = 0;
	var names = new Array();
	for (ct in Cards) {
		names.push(Cards[ct].name);
	}

	$(".DeckSel").autocomplete({
		source: names,
	});
});