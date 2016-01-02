// マナプラス管理用global変数
var Manaplus = [200, 200, 200, 200, 200];

// autocomplete指定 / deckload / Dialog
$(function () {
	for (var i = 1; i <= 5; i++) {
		set_autocmp(i)();
	}
	// Load
	var cds = loaddeck_from_url();
	for (var idx = 1; idx <= 5; idx++) {
		$("#deck0" + idx).attr("placeholder", "《精霊名を入力します》");
		if((cds && cds[idx-1])){
			decksel_show(idx, cds[idx-1].card);
			Manaplus[idx-1] = cds[idx-1].mana;
		} else {
			decksel_show(idx, null);
		}
	}
	// Dialog
	$("#dialog_sim_error").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		buttons: {
			"OK": function () {
				$(this).dialog("close");
			},
		},
	});
	$("#dialog_manaset").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		open: function(){
			// get value
			var n = Number($("#d_mana_index").text());
			var ni = Number($("#d_mana_dindex").text());
			var cd = Cards[n];
			// set value
			$("#d_mana_edit").spinner({
				spin: function( event, ui ) {
					if ( ui.value > 200 ) {
						$( this ).spinner( "value", 200 );
						return false;
					} else if ( ui.value < 0 ) {
						$( this ).spinner( "value", 0 );
						return false;
					}
				}
			});
			$("#d_mana_edit").spinner("value", Manaplus[ni]);
			var p_t = (ni+1) + ": " + cd.name + "<br/>マナの値を0-200の間で指定してください。(HP: " + cd.hp + ")";
			$("#d_mana_text").html(p_t);
		},
		buttons: {
			"偶数調整": function () {
				var n = $("#d_mana_index").text();
				var cd = Cards[n];
				var mp = cd.hp % 2 == 0 ? 200 : 199;
				$("#d_mana_edit").spinner("value", mp);
			},
			"奇数調整": function () {
				var n = $("#d_mana_index").text();
				var cd = Cards[n];
				var mp = cd.hp % 2 == 1 ? 200 : 199;
				$("#d_mana_edit").spinner("value", mp);
			},
			"OK": function () {
				var n = $("#d_mana_index").text();
				var ni = $("#d_mana_dindex").text();
				var cd = Cards[n];
				var val = $("#d_mana_edit").spinner("value");
				Manaplus[ni] = val ? val : 0;
				$(this).dialog("close");
			},
			"Cancel": function () {
				$(this).dialog("close");
			},
		},
	});
	$("#dialog_deck_reset").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		buttons: {
			"OK": function () {
				deck_reset();
				$("#deckload_cookie").val("");
				$(this).dialog("close");
			},
			"Cancel": function () {
				$(this).dialog("close");
			},
		},
	});
	$("#dialog_deck_load").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		open: function (e, ui) {
			// Load
			var ds = $.cookie("savedecks");
			ds = ds ? JSON.parse(ds) : [];
			// Listup
			var opts = "";
			for (var i = 0; i < ds.length; i++) {
				opts += "<option value='" + ds[i].query + "'>" + ds[i].name + "</option>";
			}
			$("#deckload_cookie").html(opts);
		},
		buttons: {
			"読み込み": function () {
				// Apply
				sel_q = $("#deckload_cookie").val();
				if (sel_q && sel_q != "") {
					var dc = loaddeck_from_url(sel_q);
					var qst = loadquest_from_url(sel_q);
					for (var i = 0; i < dc.length; i++) {
						decksel_show(i + 1, dc[i].card);
					}
					if (qst) {
						$("#QstSel").val(qst.id);
					}
				} else {
					$("#dialog_noselect").dialog("open");
				}
			},
			"選択デッキを削除": function () {
				// Remove
				sel_name = $("#deckload_cookie option:selected").text();
				if (sel_name && sel_name != "") {
					$("#_data_passing").text(sel_name);
					$("#dialog_deletedeck").dialog("open");
				} else {
					$("#dialog_noselect").dialog("open");
				}
			},
			"閉じる": function () {
				$(this).dialog("close");
			},
		},
	});
	$("#dialog_deck_save").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		buttons: {
			"保存": function () {
				if ($("#decksave_name").val() == "") {
					$("#dialog_noname").dialog("open");
					return;
				}
				// Load
				var ds = $.cookie("savedecks");
				ds = ds ? JSON.parse(ds) : [];
				// Add
				ds.push({
					name: $("#decksave_name").val(),
					query: create_url(false),
				});
				// Save
				$.cookie("savedecks", JSON.stringify(ds), {
					expires: 1095,
				});
				$(this).dialog("close");
			},
			"Cancel": function () {
				$(this).dialog("close");
			},
		},
	});
	$("#dialog_deletedeck").dialog({
		autoOpen: false,
		width: 300,
		modal: true,
		buttons: {
			"削除する": function () {
				// Load
				var ds = $.cookie("savedecks");
				ds = ds ? JSON.parse(ds) : [];
				sel_name = $("#_data_passing").text();
				ds = $.grep(ds, function (e) {
					return e.name != sel_name;
				});
				// Save
				$.cookie("savedecks", JSON.stringify(ds), {
					expires: 1095,
				});
				$(this).dialog("close");
				$("#dialog_deck_load").dialog("option", "open")();
			},
			"Cancel": function () {
				$(this).dialog("close");
			},
		},
	});
	$("#dialog_noselect").dialog({
		autoOpen: false,
		width: 300,
		modal: true,
		buttons: {
			"OK": function () {
				$(this).dialog("close");
			},
		},
	});
	$("#dialog_noname").dialog({
		autoOpen: false,
		width: 300,
		modal: true,
		buttons: {
			"OK": function () {
				$(this).dialog("close");
			},
		},
	});
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
		$("#ally0" + idx + "_as").text("AS: " + c.as1.desc);
		$("#ally0" + idx + "_ss").text("SS: " + c.ss1.desc);
	} else {
		$("#ally0" + idx + "_attr_main").attr("class", "attr_none");
		$("#ally0" + idx + "_attr_sub").attr("class", "attr_none");
		$("#ally0" + idx + "_img").attr("src", get_image_url(-1));
		//$("#deck0" + idx).val("");
		$("#ally0" + idx + "_as").text("");
		$("#ally0" + idx + "_ss").text("");
	}
}

// マナプラス指定ダイアログを開く
function open_manaedit(n) {
	var input = $("#deck0" + (n+1)).val();
	var cards = $.grep(Cards, function (e, i) {
		return e.name == input;
	});
	if (cards && cards[0]) {
		var cd = cards[0];
		$("#d_mana_index").text(Cards.indexOf(cd));
		$("#d_mana_dindex").text(n + "");
		$("#dialog_manaset").dialog("open");
	}
}

// デッキ情報をリセットする
function deck_reset_ready() {
	$("#dialog_deck_reset").dialog("open");
}
function deck_reset() {
	for (var i = 1; i <= 5; i++) {
		decksel_show(i, null);
		$("#deck0" + i).val("");
		Manaplus[i] = 200;
	}
}

// デッキ読み込み、保存
function deck_load_ready() {
	$("#dialog_deck_load").dialog("open");
}
function deck_save_ready() {
	$("#decksave_name").val("");
	$("#dialog_deck_save").dialog("open");
}