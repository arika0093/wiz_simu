// クエスト選択肢追加, URLからquest選択
$(function () {
	var sel = document.getElementById('QstSel');
	var seld = sel;
	for (var i = 0; i < Quests.length; i++) {
		if (Quests[i].hidden) {
			continue;
		}
		if (i == 0 || Quests[i].category != Quests[i - 1].category) {
			var opg = document.createElement('optgroup');
			opg.label = Quests[i].category;
			sel.appendChild(opg);
			seld = opg;
		}
		var opt = document.createElement('option');
		opt.label = Quests[i].name;
		opt.value = Quests[i].id;
		opt.appendChild(document.createTextNode(Quests[i].name));
		seld.appendChild(opt);
	}

	var qst_id = "-1";
	if (Deckdata) {
		var qst_load = $.grep(Quests, function (e) {
			return e.id == Deckdata.questdata.id;
		})[0];
		qst_id = qst_load ? qst_load.id : -1;
		var opt = $("select[id='QstSel'] option[value=" + qst_id + "]").prop('selected', true);
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
	if (!Deckdata.quest_imple.id) {
		Deckdata.quest = $("#QstSel").val();
		if (Deckdata.quest == "") {
			$("#dialog_sim_error").dialog("open");
			return;
		}
	}
	// redirect
	deckdata_Create(Deckdata, function (short) {
		var redirect_url = '/simulator/p/' + short;
		location.href = redirect_url;
	});
}