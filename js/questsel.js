// クエスト選択肢追加, URLからquest選択
$(function () {
	var ct = 0;
	for (ct in Quests) {
		var sel = document.getElementById('QstSel');
		var opt = document.createElement('option');
		opt.value = Quests[ct].id;
		opt.appendChild(document.createTextNode(Quests[ct].name));
		sel.appendChild(opt);
	}

	var q = loadquest_from_url();
	if (q !== undefined) {
		$("select[id='QstSel'] option[value=" + q.id + "]").prop('selected', true);
		$("#Qstdesc").text(q.desc);
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
	if (query == "") {
		alert("入力内容に漏れがあります。クエストを指定して、精霊を最低一体以上指定してください。");
		return;
	}
	var redirect_url = './simulator.html' + query;
	location.href = redirect_url;
}