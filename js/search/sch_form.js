// -------------------------------
// 検索フォーム生成用の関数群
// -------------------------------
// 読み込み時実行
$(function () {
	// init
	sf_aslist_add();
	sf_sslist_add();
	sf_awlist_add();
	sf_aplist_add();

	conbobox_chosen_apply();
});

// chosen適応
function conbobox_chosen_apply() {
	var sel = $("#search_f .skill_sel");
	if (sel.chosen) {
		sel.chosen({
			search_contains: true,
		});
	}
}

// 新しいコンボボックスを追加する
function create_new_combobox(adb, adcls, fstitem, fc){
	var base = $(adb);
	var adcls = "<select class='" + adcls + " skill_sel' >" +
		"<option value='-1'>" + fstitem + "</option></select>";
	base.append(adcls);
	if (fc) { fc(); }
	conbobox_chosen_apply();
}

// AS要素追加時
function when_add_as_type() {
	var cond = $("#as_schcond");
	cond.show();
	sf_aslist_add();
}

// AS候補にAS一覧を追加
function sf_aslist_add() {
	var slf = $(".sch_as_type:last");
	var p_html = "<option value='-1'>《ASの種類を指定》</option>";
	// add
	var ct = 0, c = 0;
	for (ak in sfdef_as_namelist) {
		var at = sfdef_as_namelist[ak];
		var is_obj = (at.type !== undefined);
		// genre check
		if (is_obj && at.genre) {
			if (ct != 0) {
				p_html += "</optgroup>";
			}
			p_html += "<optgroup label='" + at.genre + "'>";
			ct++;
		}
		// plus
		p_html += "<option value='" + c + "'>" + ak + "</option>";
		c++;
	}
	slf.html(p_html + "</optgroup>");
}

// SS候補にSS一覧を追加
function sf_sslist_add() {
	var slf = $(".sch_ss_type:last");
	var p_html = "<option value='-1'>《SSの種類を指定》</option>";
	// add
	var ct = 0, c = 0;
	for (sk in sfdef_ss_namelist) {
		var st = sfdef_ss_namelist[sk];
		var is_obj = !!st.proc;
		// genre check
		if (is_obj && st.genre) {
			if (ct != 0) {
				p_html += "</optgroup>";
			}
			p_html += "<optgroup label='" + st.genre + "'>";
			ct++;
		}
		// plus
		p_html += "<option value='" + c + "'>" + sk + "</option>";
		c++;
	}
	slf.html(p_html + "</optgroup>");
}

// SS要素追加時
function when_add_ss_type() {
	var cond = $("#ss_cond");
	cond.show();
	sf_sslist_add();
}

// 潜在候補追加
function sf_awlist_add() {
	var slf = $(".sch_aw_type:last");
	var p_html = "<option value='-1'>《潜在能力の種類を指定》</option>";
	// add
	var ct = 0, c = 0;
	for (sk in sfdef_aw_namelist) {
		// plus
		p_html += "<option value='" + c + "'>" + sk + "</option>";
		c++;
	}
	slf.html(p_html + "</optgroup>");
}

// Append候補追加
function sf_aplist_add() {
	var slf = $(".sch_ap_type:last");
	if (!slf) { return; }
	var p_html = "<option value='-1'>《登場イベントの種類を指定》</option>";
	// add
	var added_list = [];
	for (c in Cards) {
		var ape = Cards[c].ape;
		if (!ape || added_list[ape] || Cards[c].disable) { continue; }
		added_list[ape] = ape;
	}
	// sort
	var apels = [];
	for (ai in added_list) {
		apels.push(added_list[ai]);
	}
	for (sa in SpecialAlias) {
		apels.push(sa);
	}
	apels.sort();
	// html add
	for (ap in apels) {
		// plus
		p_html += "<option value='" + ap + "'>" + apels[ap] + "</option>";
	}
	slf.html(p_html + "</optgroup>");
}

// 検索ボタンが押された
function sf_search_start() {
	// 検索クエリ生成用obj作成
	var q = schfl_create_queryobj();
	// 別タブで開くかどうか
	var is_newtab = $("#sf_opentab").prop("checked");
	if (is_newtab) {
		var w = window.open("/search/s/loading.html", "_blank");
	}
	// objをJSON化して短縮する
	deckdata_SaveUrl(q, function (result) {
		var js = JSON.parse(result);
		if (w) {
			// 別タブで検索結果表示ページを開く
			w.location = "/search/s/?q=" + js.short;
		} else {
			// このページのlocation移動
			location = "/search/s/?q=" + js.short;
		}
	});
	return;
}

// リセットボタン
function sf_formreset() {
	// input初期化
	$("#search_match_form input").val("");
	// select初期化
	var sel = $("#search_match_form select");
	sel.map(function (i, e) {
		e.selectedIndex = 0;
	});
	if (sel.chosen) {
		sel.trigger("chosen:updated");
	}
}