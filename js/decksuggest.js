// 名前サジェスト用
var CardSuggNames = new Array();

// autocomplete指定 / deckload
$(function () {
	var input_ids = ["deck01", "deck02", "deck03", "deck04", "deck05"];
	var desc_ids = ["Deckdesc1", "Deckdesc2", "Deckdesc3", "Deckdesc4", "Deckdesc5"];
	var ct = 0;

	for (ct in Cards) {
		CardSuggNames.push(Cards[ct].name);
	}
	$(".DeckSel").autocomplete({
		source: CardSuggNames,
	});

	var cds = loaddeck_from_url();
	if (cds.length > 0) {
		for (ct = 0; ct < cds.length; ct++) {
			$("#" + input_ids[ct]).val(cds[ct].name);
			$("#" + desc_ids[ct]).html(create_deschtml(cds[ct]));
		}
	}
});

// カード指定した時のAS/SS表示
function decksel(base, descp) {
	var selval = document.getElementById(base).value;
	var desc = $("#" + descp);
	var ct = 0;
	if (selval != "") {
		for (ct in CardSuggNames) {
			if (CardSuggNames[ct] == selval) {
				desc.html(create_deschtml(Cards[ct]));
				desc.fadeIn("slow");
				return;
			}
		}
	}
	desc.text("");
	desc.fadeOut("slow");
}

// descriptionを生成する
function create_deschtml(cd) {
	var asdc = cd.as1.desc;
	var ssdc = cd.ss1.desc;
	if (asdc.length >= 30 | ssdc.length >= 30) {
		var b = "<br/>";
	} else {
		var b = " / ";
	}
	return "AS: " + asdc + b + "SS: " + ssdc;
}
