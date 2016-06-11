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
	// quest set
	var dd = deckdata_Apply(Deckdata);
	if (dd == null) {
		$("#dialog_sim_error").dialog("open");
		return false;
	} else {
		// redirect
		deckdata_Create(dd, function (short) {
			var redirect_url = '/simulator/p/?' + short;
			location.href = redirect_url;
		});
		return true;
	}
}

