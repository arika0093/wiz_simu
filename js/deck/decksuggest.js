// 各種情報管理
var Deckdata = deckdata_DataTemplate();

// deckdataからデッキを読み込んで指定する関数
function decksgg_loaddeck(data) {
	// deck select
	Deckdata = data || deckdata_DataTemplate();
	for (var i = 0; i < 5; i++) {
		$("#deck0" + (i + 1)).attr("placeholder", "《精霊名を入力します》");
		set_autocmp(i+1)();
		if (Deckdata && Deckdata.deck[i].cardno > 0) {
			// Get card
			var crd = $.grep(Cards, function (e) {
				return e.cardno == Deckdata.deck[i].cardno;
			})[0];
			decksel_show(i + 1, crd);
		} else {
			var pre_name = $("#deck0" + (i + 1)).val();
			var card = $.grep(Cards, function (e) {
				return e.name == pre_name;
			})[0];
			decksel_show(i + 1, card);
		}
	}
	// quest select
	$("#QstSel").val(Deckdata.quest);
}

// autocomplete指定 / deckload / Dialog
$(function () {
	// Cards sort
	Cards = Cards.sort(function (a, b) {
		return a.imageno > b.imageno ? 1 : -1;
	});
	// Load
	deckdata_Load(null, decksgg_loaddeck);
	// Manaplus blink
	var blink_interval = 3300;
	var mana_blink = function () {
		$('p.ally_mana').fadeOut(blink_interval / 3, function () {
			$(this).fadeIn(blink_interval / 3);
		});
	};
	mana_blink()
	setInterval(mana_blink, blink_interval);

	// Dialog
	// ----------------------
	// Error
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
	// ----------------------
	// Mana & Awake
	$("#dialog_manaset").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		open: function(){
			// get value
			var n = Number($("#d_mana_index").text());
			var ni = Number($("#d_mana_dindex").text());
			var cd = Cards[n];
			var cd_aws = cd.awakes.length;
			// set value(mana)
			$("#d_mana_edit").spinner({
				change: function () {
					var value = $("#d_mana_edit").spinner("value");
					if (value > 200) {
						$(this).spinner("value", 200);
						return false;
					} else if (value < 0) {
						$(this).spinner("value", 0);
						return false;
					}
				},
				spin: function (event, ui) {
					if (ui.value > 200) {
						$(this).spinner("value", 200);
						return false;
					} else if (ui.value < 0) {
						$(this).spinner("value", 0);
						return false;
					}
				},
			});
			$("#d_mana_edit").spinner("value", Deckdata.deck[ni].mana);
			var p_t = (ni+1) + ": " + cd.name + "<br/>マナの値を0-200の間で指定してください。(HP: " + cd.hp + ")";
			$("#d_mana_text").html(p_t);

			// set value(awake)
			$("#d_awake_edit").spinner({
				change: function () {
					var value = $("#d_awake_edit").spinner("value");
					if (value > cd_aws) {
						$(this).spinner("value", cd_aws);
						return false;
					} else if (value < 0) {
						$(this).spinner("value", 0);
						return false;
					}
				},
				spin: function (event, ui) {
					if (ui.value > cd_aws) {
						$(this).spinner("value", cd_aws);
						return false;
					} else if (ui.value < 0) {
						$(this).spinner("value", 0);
						return false;
					}
				},
			});
			$("#d_awake_edit").spinner("value",
				Deckdata.deck[ni].awake != -1 ? Deckdata.deck[ni].awake : cd_aws);
			// close when click dialog outside
			$('.ui-widget-overlay').bind('click', function () {
				$("#dialog_manaset").dialog('close');
			});
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
				var ni = Number($("#d_mana_dindex").text());
				var cd = Cards[n];
				var cd_aws = cd.awakes.length;
				var val = $("#d_mana_edit").spinner("value");
				var aws = $("#d_awake_edit").spinner("value");
				Deckdata.deck[ni].mana = val >= 0 ? val : 200;
				Deckdata.deck[ni].awake = aws != cd_aws ? aws : cd_aws;
				$("#ally0" + (ni + 1) + "_mana").text(Deckdata.deck[ni].mana
					? "+" + Deckdata.deck[ni].mana : "");
				$(this).dialog("close");
			},
			"Cancel": function () {
				$(this).dialog("close");
			},
		},
	});
	// ----------------------
	// Awake Crystal
	var allyedit_awake_reload = function () {
		// show list
		var n = Number($("#d_edit_index").text());
		var aws = Deckdata.deck[n].crystal;
		var opts = "";
		for (var i = 0; i < aws.length; i++) {
			opts += "<option value='" + i + "'>" + aws[i].display_text + "</option>";
		}
		$("#allyedit_awakes").html(opts);
	};
	$("#dialog_allyedit").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		open: function () {
			allyedit_awake_reload();
			// close when click dialog outside
			$('.ui-widget-overlay').bind('click', function () {
				$("#dialog_allyedit").dialog('close');
			});
		},
		buttons: {
			"+": function(){
				$("#dialog_allyedit_awakeadd").dialog("open");
			},
			"-": function() {
				sel_q = $("#allyedit_awakes").val();
				if (sel_q && sel_q != "") {
					var n = Number($("#d_edit_index").text());
					var aws = Deckdata.deck[n].crystal;
					aws.splice(Number(sel_q), 1);
					allyedit_awake_reload();
				} else {
					$("#dialog_noselect").dialog("open");
				}
			},
			"閉じる": function () {
				$(this).dialog("close");
			},
		},
	});
	$("#dialog_allyedit_awakeadd").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		open: function () {
			// item add
			var opts = "<option value='-1'>(未選択)</option>";
			var aws = Awake_crystal_lists;
			for (var i = 0; i < aws.length; i++) {
				opts += "<option value='" + i + "'>" + aws[i].name + "</option>";
			}
			$("#allyedit_awakeadd_name").html(opts);
			// value reset
			$("#ae_awake_value").val("");
			$("#ae_awake_cost").val("");
		},
		buttons: {
			"OK": function () {
				var sel_index = $("#allyedit_awakeadd_name").val();
				if (sel_index && sel_index != "" && sel_index >= 0) {
					var idx = Number(sel_index);
					var awc_data = Awake_crystal_lists[idx];
					// param replace
					var pr_1 = typeof awc_data.param1 == "string" ? Number(
							awc_data.param1.replace("{0}", $("#ae_awake_value").val())
						) : awc_data.param1;
					var pr_2 = typeof awc_data.param2 == "string" ? Number(
							awc_data.param2.replace("{0}", $("#ae_awake_value").val())
						) : awc_data.param2;
					var pr_3 = typeof awc_data.param3 == "string" ? Number(
							awc_data.param3.replace("{0}", $("#ae_awake_value").val())
						): awc_data.param3;
					var awake_c = awc_data.imple(pr_1, pr_2, pr_3);
					// plus item
					awake_c.display_text = awc_data.name + "(" + $("#ae_awake_value").val() + ")";
					awake_c.add_cost = Number($("#ae_awake_cost").val());
					// push
					var n = Number($("#d_edit_index").text());
					var aws = Deckdata.deck[n].crystal;
					aws.push(awake_c);
					// reload & close
					allyedit_awake_reload();
					$(this).dialog("close");
				}
			},
			"Cancel": function () {
				$(this).dialog("close");
			},
		},
	});
	// ----------------------
	// Deck Reset
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
	// ----------------------
	// Deck Load & Save
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
			// close when click dialog outside
			$('.ui-widget-overlay').bind('click', function () {
				$("#dialog_deck_load").dialog('close');
			});
		},
		buttons: {
			"読み込み": function () {
				// Apply
				sel_q = $("#deckload_cookie").val();
				if (sel_q && sel_q != "") {
					deckdata_Load(sel_q, decksgg_loaddeck);
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
				var dd = deckdata_Apply(Deckdata, true);
				deckdata_Create(dd, function (short) {
					// Load
					var ds = $.cookie("savedecks");
					ds = ds ? JSON.parse(ds) : [];
					// Add
					ds.push({
						name: $("#decksave_name").val(),
						query: short,
					});
					// Save
					$.cookie("savedecks", JSON.stringify(ds), {
						expires: 1095,
					});
				});
				$(this).dialog("close");
			},
			"Cancel": function () {
				$(this).dialog("close");
			},
		},
	});
	// ----------------------
	// Deck Delete
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
	// ----------------------
	// Select Error
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
					var rst = true;
					rst = rst && value.name.toLowerCase().indexOf(req.term.toLowerCase()) >= 0;
					rst = rst && value.as1.proc != null;
					rst = rst || (req.term == "*all*" && value.imageno > 0 && !value.isorigin);
					if (rst){
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
				$(".selector").autocomplete("close");
				// TABキーで次の要素に移動してないなら移動
				var next = $("#deck0" + (i + 1));
				if (e.keyCode !== 9) {
					next.focus();
					next.select();
				}
				return false;
			}
		})
		.dblclick(function () {
			$(this).autocomplete("search", "*all*");
		})
		.autocomplete("instance")._renderItem = function (ul, dec) {
			var AS = dec.data.as2 ? dec.data.as2 : dec.data.as1;
			return $("<li class='clearfix'>")
				.append("<img src='" + get_image_url(dec.data.imageno) + "' /><a>" + dec.label
					+ "</a><br/><p>" + AS.desc + "</p>")
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
		// show
		var AS = c.as2 ? c.as2 : c.as1;
		var SS = c.ss2 ? c.ss2 : c.ss1;
		$("#ally0" + idx + "_attr_main").attr("class", "attr_" + c.attr[0]);
		$("#ally0" + idx + "_attr_sub").attr("class", "attr_" + (c.attr[1] != -1 ? c.attr[1] : c.attr[0]));
		$("#ally0" + idx + "_img").attr("src", get_image_url(c.imageno));
		$("#ally0" + idx + "_mana").text("+" + Deckdata.deck[idx-1].mana);
		$("#deck0" + idx).val(c.name);
		$("#ally0" + idx + "_as").text("AS: " + AS.desc);
		$("#ally0" + idx + "_ss").text("SS: " + SS.desc);
	} else {
		$("#ally0" + idx + "_attr_main").attr("class", "attr_none");
		$("#ally0" + idx + "_attr_sub").attr("class", "attr_none");
		$("#ally0" + idx + "_img").attr("src", get_image_url(-1));
		$("#ally0" + idx + "_mana").text("");
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

// 潜在結晶編集
function open_deckedit(n) {
	$("#d_edit_index").text(n + "");
	$("#dialog_allyedit").dialog("open");
}

// デッキ情報をリセットする
function deck_reset_ready() {
	$("#dialog_deck_reset").dialog("open");
}
function deck_reset() {
	Deckdata = deckdata_DataTemplate();
	for (var i = 0; i < 5; i++) {
		decksel_show(i + 1, null);
		$("#deck0" + (i + 1)).val("");
	}
	$("#QstSel").val("");
}

// デッキ読み込み、保存
function deck_load_ready() {
	$("#dialog_deck_load").dialog("open");
}
function deck_save_ready() {
	$("#decksave_name").val("");
	$("#dialog_deck_save").dialog("open");
}