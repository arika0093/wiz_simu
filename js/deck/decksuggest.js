// 各種情報管理
var Deckdata = deckdata_DataTemplate();

// deckdataからデッキを読み込んで指定する関数
function decksgg_loaddeck(data) {
	// deck select
	Deckdata = data || deckdata_DataTemplate();
	// 後方互換性
	if (!Deckdata.deck[5]) {
		Deckdata.deck[5] = deckdata_DeckCardTemplate();
	}
	// apply
	for (var i = 0; i < 6; i++) {
		if (i != 5) {
			$("#deck0" + (i + 1)).attr("placeholder", "《精霊名を入力します》");
		} else {
			$("#deck0" + (i + 1)).attr("placeholder", "《精霊名を入力します: 助っ人》");
		}
		set_autocmp(i+1)();
		if (Deckdata && Deckdata.deck[i] && Deckdata.deck[i].cardno > 0) {
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
	if (Deckdata.quest != ""){
		$("#QstSel").val(Deckdata.quest);
		$('#QstSel').trigger("chosen:updated");
	}
	// checkbox event
	$("#helper_sel").toggle(Deckdata.deck[5].cardno > 0);
	$("#helper_show").prop("checked", Deckdata.deck[5].cardno > 0);
	$("#helper_show").on("click", function () {
		var checked = $(this).prop("checked")
		$("#helper_sel").toggle(checked);
	});

	// sortable
	$("#allys_sel").sortable();
}

// autocomplete指定 / deckload / Dialog
$(function () {
	// Cards sort
	Cards = Cards.sort(function (a, b) {
		return a.imageno < b.imageno ? 1 : -1;
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
	mana_blink();
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
			var p_t = (ni + 1) + ": " +
				"<a target='_blank' href='/search/detail/?id=" + cd.cardno + "'>" + cd.name +
				"</a><br/>マナの値を0-200の間で指定してください。(HP: " + cd.hp + ")";
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
			"結晶追加": function(){
				$("#dialog_allyedit_awakeadd").dialog("open");
			},
			"結晶削除": function() {
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
		height: 480,
		modal: true,
		open: function () {
			// item add
			var sel = $("#allyedit_awakeadd_name");
			var opts = "<option value='-1' selected></option>";
			var aws = Awake_crystal_lists;
			for (var i = 0; i < aws.length; i++) {
				opts += "<option value='" + i + "'>" + aws[i].name + "</option>";
			}
			sel.html(opts);
			// select box
			sel.chosen({
				allow_single_deselect: true,
				disable_search: true,
				search_contains: true,
			});

			// value reset
			$("#ae_awake_value").val("");
			$("#ae_awake_cost").val("");
			$('#allyedit_awakeadd_name').trigger("chosen:updated");
		},
		buttons: {
			"OK": function () {
				var sel_index = $("#allyedit_awakeadd_name").val();
				if (sel_index && sel_index != "" && sel_index >= 0) {
					var idx = Number(sel_index);
					var awc_data = Awake_crystal_lists[idx];
					// param replace
					var pr_1 = typeof awc_data.param1 == "string" ? ifNumThenStr2Num(
							awc_data.param1.replace("{0}", $("#ae_awake_value").val())
						) : awc_data.param1;
					var pr_2 = typeof awc_data.param2 == "string" ? ifNumThenStr2Num(
							awc_data.param2.replace("{0}", $("#ae_awake_value").val())
						) : awc_data.param2;
					var pr_3 = typeof awc_data.param3 == "string" ? ifNumThenStr2Num(
							awc_data.param3.replace("{0}", $("#ae_awake_value").val())
						): awc_data.param3;
					var awake_c = awc_data.imple(pr_1, pr_2, pr_3);
					if(awake_c.type == "awake_spskill"){
						pr_1 = awc_data.param1;
						awake_c = awc_data.imple(pr_1, pr_2, pr_3);
					}
					// plus item
					var aw_value = $("#ae_awake_value").val();
					awake_c.display_text = awc_data.name
						+ (Number(aw_value) > 0 ? "(" + aw_value + ")" : "");
					awake_c.add_cost = Number($("#ae_awake_cost").val());
					awake_c.is_legend = awc_data.is_legend;
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
				var ds = $.cookie("savedecks");
				ds = ds ? JSON.parse(ds) : [];
				sel_name = $("#deckload_cookie option:selected").text();
				var is_match = $.grep(ds, function (e) {
					return e.name == sel_name;
				}).length > 0;
				if (is_match) {
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
	// Search Dialog
	$("#dialog_search").dialog({
		autoOpen: false,
		width: 450,
		modal: true,
		open: function (e, ui) {
			// close when click dialog outside
			$('.ui-widget-overlay').bind('click', function () {
				$("#dialog_search").dialog('close');
			});
			/* -- for position change
			$("#dialog_search").parent().css({
				position: "fixed",
				top: "15px",
			});
			*/
		},
		buttons: {
			"検索": function () {
				var rst_html = "";
				// 選択状況を取得
				var m_attr = Number($("#s_attr_m").val());
				var s_attr = Number($("#s_attr_s").val());
				var as = schfl_textarr_from_msel(".sch_as_type option:selected");
				var ss = schfl_textarr_from_msel(".sch_ss_type option:selected");
				// obj生成
				var obj = {
					obj_type: "search/query",
					attr_m: m_attr,
					attr_s: s_attr,
					as_types: as,
					ss_types: ss,
					disttype: $("#is_dist").prop("checked"),
					// default value
					name: "",
					as_maxchain: -1,
					as_ch_cond: 0,
					ss_maxturn: -1,
					ss_target: 0,
					ss_search_ao: 0,
					awake_types: [],
					aw_name: "",
				}
				// Cardsの中から絞り込み検索
				var rst_cards = schfl_grep(obj);
				// imageno順にソート
				rst_cards.sort(function (a, b) {
					return (a.imageno < b.imageno ? 1 : -1);
				});
				// HTMLに変換,反映
				$.each(rst_cards, function (i, e) {
					rst_html += "<div class='item'><img class='item_img' src='"
						+ get_image_url(e.imageno) + "' /><p class='item_name' onclick='search_apply(\""
						+ e.name + "\")'>" + e.name + "</p> <a href='/search/detail/?id=" + e.cardno
						+ "' target='_blank'>[詳細]</a></div>";
				});
				$("#src_result").html(rst_html);
			},
			"閉じる": function () {
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
				var term = req.term.toLowerCase();
				var roma2kana = $.trim(r2k(req.term));
				var hira2kana = $.trim(h2k(req.term));
				resp($.map(Cards, function (value, key) {
					var rst = true;
					var al = value.alias;
					// アルファベット大文字小文字の区別をしない
					// &、・などは省略してチェック
					var nm = value.name.toLowerCase().replace(/[&・\& ]/g, "");
					rst = rst && nm.indexOf(term) >= 0;
					rst = rst || nm.indexOf(roma2kana) >= 0;	// ローマ字からカタカナに変換して比較
					rst = rst || nm.indexOf(hira2kana) >= 0;	// 平仮名からカタカナに変換して比較
					if (al && al.length > 0) {					// 別名が定義されてるならそれら全てに対しチェック
						for (var i = 0; i < al.length; i++) {
							if (al[i].indexOf("/") == 0) {
								rst = rst || al[i].replace("/", "") == term;
							} else {
								rst = rst || al[i].toLowerCase().indexOf(term) >= 0;
								rst = rst || al[i].indexOf(roma2kana) >= 0;
								rst = rst || al[i].indexOf(hira2kana) >= 0;
							}
						}
					}
					rst = rst && value.as1.proc != null;		// ASが未定義のものは除く
					rst = rst && !value.disable;				// 無効化されていない(進化後が存在する精霊など)
					// 全表示の時も無効化精霊は出さない
					rst = rst || (term == "*all*" && value.imageno > 0 && !value.disable);
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

// 検索画面を開く
function search_click(n) {
	// index save
	$("#search_target_no").text(n + "");
	// open
	$("#dialog_search").dialog("open");
}
// 精霊を指定する
function search_apply(name) {
	// get index
	var no = Number($("#search_target_no").text());
	// set
	var apply_txb = $("#deck0" + no);
	apply_txb.val(name);
	decksel(no);
	// selected reset
	$("#dialog_search select").map(function (i, e) {
		e.selectedIndex = 0;
	});
	$("#src_result").html("");
	// close
	$("#dialog_search").dialog('close');
}



// デッキ情報をリセットする
function deck_reset_ready() {
	$("#dialog_deck_reset").dialog("open");
}
function deck_reset() {
	Deckdata = deckdata_DataTemplate();
	for (var i = 0; i < 6; i++) {
		decksel_show(i + 1, null);
		$("#deck0" + (i + 1)).val("");
	}
	$("#QstSel").val("");
	$('#QstSel').trigger("chosen:updated");
}

// デッキ読み込み、保存
function deck_load_ready() {
	$("#dialog_deck_load").dialog("open");
}
function deck_save_ready() {
	$("#decksave_name").val("");
	$("#dialog_deck_save").dialog("open");
}

