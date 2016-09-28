// クエスト選択肢追加
$(function () {
	var sel = document.getElementById('QstSel');
	var seld = sel;
	for (var i = 0; i < Quests.length; i++) {
		if (!Quests[i].is_dispsim) {
			continue;
		}
		if (i == 0 || Quests[i].category != Quests[i - 1].category) {
			var opg = document.createElement('optgroup');
			var ct = Quests[i].category_jp ? Quests[i].category_jp : Quests[i].category;
			opg.label = ct;
			sel.appendChild(opg);
			seld = opg;
		}
		var opt = document.createElement('option');
		opt.label = Quests[i].name;
		opt.value = Quests[i].id;
		opt.appendChild(document.createTextNode(Quests[i].name));
		seld.appendChild(opt);
	}
	// select box
	$("#QstSel").val("");
	$("#QstSel").chosen({
		allow_single_deselect: true,
		search_contains: true,
	});
});

// 項目選択
function optsel() {
	var sel = document.getElementById('QstSel');
	var desc = $("#Qstdesc");
	var selval = sel.options[sel.selectedIndex].value;
	var ct = 0;
	if (selval != "") {
		for (ct in Quests) {
			if (Quests[ct].id == selval) {
				desc.text(Quests[ct].desc);
				desc.fadeIn("slow");
			}
		}
	} else {
		desc.text("");
		desc.fadeOut("slow");
	}
};

// シミュ開始
function sim_start() {
	// sort
	var db = $.extend(true, {}, Deckdata);
	var sort_array = $('#allys_sel').sortable('toArray');
	for (var i = 0; i < 5; i++) {
		var load_i = Number(sort_array[i].replace("ally0", "")) - 1;
		db.deck[i] = Deckdata.deck[load_i];
	}
	// quest set
	var dd = deckdata_Apply(db);
	if (dd == null) {
		$("#dialog_sim_error").dialog("open");
		return false;
	} else {
		// is use helper?
		var checked = $("#helper_show").prop("checked");
		if (!checked && db.deck[5]) {
			delete db.deck.pop();
		}
		// redirect
		deckdata_Create(db, function (short) {
			var redirect_url = '/simulator/p/?' + short;
			location.href = redirect_url;
		});
		return true;
	}
}

