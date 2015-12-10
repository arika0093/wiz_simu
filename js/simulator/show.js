// 現在の状況を表示する
function sim_show() {
	// sim_info
	var popupstr = "(";
	$("#sim_info_status").text("turn: " + Allys.Status.nowturn + " / " + Allys.Status.nowbattle + "戦目");
	for (var i = 0; i < Enemys.Popuplist.length; i++) {
		var t = Allys.Status.durturn[i] !== undefined ? Allys.Status.durturn[i].toString() : "?";
		popupstr += t;
		if (i != Enemys.Popuplist.length - 1) {
			popupstr += "-";
		}
	}
	$("#sim_turns").text(popupstr + ")");

	// sim_ally
	for (var i = 0; i < 5; i++) {
		var dec = Allys.Deck[i];
		var now = Allys.Now[i];
		if (dec === undefined) {
			continue;
		}
		$("#ally0" + (i + 1) + "_attr_main").attr("class", "attr_" + dec.attr[0]);
		$("#ally0" + (i + 1) + "_attr_sub").attr("class", "attr_" + (dec.attr[1] != -1 ? dec.attr[1] : dec.attr[0]));
		$("#ally0" + (i + 1) + "_img").attr("src", "http://i.quiz.colopl.jp/img/card/small/card_" + ("0000" + dec.imageno).slice(-5) + "_0.png");
		$("#ally0" + (i + 1) + "_name").text(dec.name);
		$("#ally0" + (i + 1) + "_status").text("HP: " + now.nowhp + "/" + now.maxhp + ", ATK: " + now.atk);
		$("#ally0" + (i + 1) + "_ss_button").val("----");
	}
	// sim_enemy
	for (var i = 0; i < 5; i++) {

	}
}