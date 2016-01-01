// クエスト選択肢追加, URLからquest選択
$(function () {
	var qsort = Quests;//.sort(function (a, b) {
	//	if (a.category > b.category) return +1;
	//	if (a.category < b.category) return -1;
	//})

	var sel = document.getElementById('QstSel');
	var seld = sel;
	for (var i = 0; i < qsort.length; i++) {
		if (i == 0 || qsort[i].category != qsort[i - 1].category) {
			var opg = document.createElement('optgroup');
			opg.label = qsort[i].category;
			sel.appendChild(opg);
			seld = opg;
		}
		var opt = document.createElement('option');
		opt.label = qsort[i].name;
		opt.value = qsort[i].id;
		opt.appendChild(document.createTextNode(qsort[i].name));
		seld.appendChild(opt);
	}

	var q = loadquest_from_url();
	if (q) {
		$("select[id='QstSel'] option[value=" + q.id + "]").prop('selected', true);
		//$("#Qstdesc").text(q.desc);
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
	// redirect
	var query = create_url(true);
	if (query == null) {
		$("#dialog_sim_error").dialog("open");
		return;
	}
	var redirect_url = './simulator.html' + query;
	location.href = redirect_url;
}