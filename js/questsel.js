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
	// 精霊Noの配列
	var nolists = new Array();
	// チェックする文字入力欄(ID)
	var input_ids = ["deck01", "deck02", "deck03", "deck04", "deck05"];
	// No列挙
	for (var ct = 0; ct < 5; ct++) {
		var input = $("#" + input_ids[ct]).val();
		if (input == "") {
			nolists.push(0);
			continue;
		}
		var card = $.grep(Cards, function (e, i) {
			return e.name == input;
		})[0];
		var number = card !== undefined ? card.cardno : 0;
		nolists.push(number);
	}
	// questのid取得
	var quest_id = $("#QstSel").val();
	// 問題ないかチェック
	if (nolists.length <= 0 || quest_id == "") {
		alert("入力内容に漏れがあります。クエストを指定して、精霊を最低一体以上指定してください。");
		return;
	}
	// redirect
	var redirect_url = './simulator.html?' + nolists.toString() + "," + quest_id;
	location.href = redirect_url;
}