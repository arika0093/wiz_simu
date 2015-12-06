var CardSuggNames = new Array();

$(function () {
	var ct = 0;
	for (ct in Cards) {
		CardSuggNames.push(Cards[ct].name);
	}

	$(".DeckSel").autocomplete({
		source: CardSuggNames,
	});
});

function decksel(base, descp) {
	var selval = document.getElementById(base).value;
	var desc = $("#" + descp);
	var ct = 0;
	if (selval != "") {
		for (ct in CardSuggNames) {
			if (CardSuggNames[ct] == selval) {
				var asdc = Cards[ct].as1.desc;
				var ssdc = Cards[ct].ss1.desc;
				if (asdc.length >= 30 | ssdc.length >= 30) {
					var b = "<br/>";
				} else {
					var b = " / ";
				}
				desc.html("AS: " + assc + b + "SS: " + ssdc);
				desc.fadeIn("slow");
				return;
			}
		}
	}
	desc.text("");
	desc.fadeOut("slow");
}