// autocomplete指定 / deckload
$(function () {
	for (var i = 1; i <= 5; i++) {
		set_autocmp(i)();
	}

	var cds = loaddeck_from_url();
	for (var idx = 1; idx <= 5; idx++) {
		$("#deck0" + idx).attr("placeholder", "《精霊名を入力します》");
		decksel_show(idx, cds ? cds[idx-1] : null);
	}
});

// autocompleteを指定する
function set_autocmp(i) {
	var idx = i;
	return function () {
		$("#deck0" + i).autocomplete({
			minLength: 2,
			delay: 500,
			source: function (req, resp) {
				resp($.map(Cards, function (value, key) {
					if (value.name.toLowerCase().indexOf(req.term.replace("*", "").toLowerCase()) >= 0 &&
						(value.as1.proc != null || req.term.indexOf("*") >= 0)){
						return {
							label: value.name,
							value: value.cardid,
							data: value,
						}
					}
				}));
			},
			focus: function(e, dec) {
				decksel_show(idx, dec.item.data);
				return false;
			},
			select: function (e, dec) {
				decksel_show(idx, dec.item.data);
				return false;
			}
		})
		.autocomplete("instance")._renderItem = function (ul, dec) {
			return $("<li class='clearfix'>")
				.append("<img src='" + get_image_url(dec.data.imageno) + "' /><a>" + dec.label
					+ "</a><br/><p>" + dec.data.as1.desc + "</p>")
				.appendTo(ul);
		};
	}
}

// カード指定した時のAS/SS表示
function decksel(i) {
	var ct;
	var selval = $("#deck0" + i).val();
	if (selval != "") {
		for (ct in Cards) {
			if (Cards[ct].name == selval) {
				decksel_show(i, Cards[ct]);
				return;
			}
		}
	}
	decksel_show(i);
}

// 精霊情報から表示を行う
function decksel_show(idx, c) {
	if (c) {
		$("#ally0" + idx + "_attr_main").attr("class", "attr_" + c.attr[0]);
		$("#ally0" + idx + "_attr_sub").attr("class", "attr_" + (c.attr[1] != -1 ? c.attr[1] : c.attr[0]));
		$("#ally0" + idx + "_img").attr("src", get_image_url(c.imageno));
		$("#deck0" + idx).val(c.name);
		//$("#deck0" + idx).css("color", "#000");
		$("#ally0" + idx + "_as").text("AS: " + c.as1.desc);
		$("#ally0" + idx + "_ss").text("SS: " + c.ss1.desc);
	} else {
		$("#ally0" + idx + "_attr_main").attr("class", "attr_none");
		$("#ally0" + idx + "_attr_sub").attr("class", "attr_none");
		$("#ally0" + idx + "_img").attr("src", get_image_url(-1));
		$("#deck0" + idx).val("");
		//$("#deck0" + idx).css("color", "#888");
		$("#ally0" + idx + "_as").text("");
		$("#ally0" + idx + "_ss").text("");
	}
}

// デッキ情報をリセットする
function deck_reset() {
	for (var i = 1; i <= 5; i++) {
		decksel_show(i, null);
	}
}