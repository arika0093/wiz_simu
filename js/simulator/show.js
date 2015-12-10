// 現在の状況を表示する
function sim_show() {
	// sim_info
	var popupstr = "(";
	$("#sim_info_status").text(Enemys.Quest.name);
	for (var i = 0; i < Enemys.Popuplist.length; i++) {
		var t = Allys.Status.durturn[i] !== undefined ? Allys.Status.durturn[i].toString() : "?";
		popupstr += t;
		if (i != Enemys.Popuplist.length - 1) {
			popupstr += "-";
		}
	}
	$("#sim_turns").text(
		"turn: " + Allys.Status.nowturn + " / " + Allys.Status.nowbattle + "戦目 " +
		popupstr + ")"
	);

	// sim_ally
	for (var i = 0; i < 5; i++) {
		var dec = Allys.Deck[i];
		var now = Allys.Now[i];
		if (dec !== undefined) {
			// 指定
			$("#ally0" + (i + 1) + "_attr_main").attr("class", "attr_" + dec.attr[0]);
			$("#ally0" + (i + 1) + "_attr_sub").attr("class", "attr_" + (dec.attr[1] != -1 ? dec.attr[1] : dec.attr[0]));
			$("#ally0" + (i + 1) + "_img").attr("src", get_image_url(dec.imageno));
			$("#ally0" + (i + 1) + "_name").text(dec.name);
			$("#ally0" + (i + 1) + "_status").text("HP: " + now.nowhp + "/" + now.maxhp + ", ATK: " + now.atk);
			// SSターン取得
			var sst = get_ssturn(dec, now);
			if (sst[0] == 0) {
				// SS発動可能
				$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button");
				$("#ally0" + (i + 1) + "_ss_button").text(ss_remain_text(sst));
			} else {
				// SS発動不可
				$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button_disabled");
				$("#ally0" + (i + 1) + "_ss_button").text(ss_remain_text(sst));
				$("#ally0" + (i + 1) + "_ss_button").attr("disabled", "disabled");
			}
		} else {
			// 無効化
			$("#ally0" + (i + 1) + "_attr_main").attr("class", "attr_none");
			$("#ally0" + (i + 1) + "_attr_sub").attr("class", "attr_none");
			$("#ally0" + (i + 1) + "_img").attr("src", "./image/dummy.png");
			$("#ally0" + (i + 1) + "_ss_button").text("(未選択)");
			$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button_disabled");
			$("#ally0" + (i + 1) + "_ss_button").attr("disabled", "disabled");
		}
	}
	// sim_enemy
	var enemys_dat = Enemys.Data[Allys.Status.nowbattle - 1].enemy;
	for (var i = 0; i < enemys_dat.length; i++) {
		var e = enemys_dat[i];
		if (e !== undefined) {
			// 指定
			$("#enemy0" + (i + 1) + "_attr_main").attr("class", "attr_" + e.attr);
			$("#enemy0" + (i + 1) + "_attr_sub").attr("class", "attr_" + e.attr);
			$("#enemy0" + (i + 1) + "_img").attr("src", get_image_url(e.imageno));
			$("#enemy0" + (i + 1) + "_name").text(e.name);
			$("#enemy0" + (i + 1) + "_hp").text("HP: " + e.nowhp + "/" + e.hp);
		} else {
			// 無効化
			$("#enemy0" + (i + 1) + "_attr_main").attr("class", "attr_none");
			$("#enemy0" + (i + 1) + "_attr_sub").attr("class", "attr_none");
			$("#enemy0" + (i + 1) + "_img").attr("src", "./image/dummy.png");
		}
	}
}

// 画像のURLを返却する
function get_image_url(no) {
	if (no < 0) {
		return "./image/dummy.png";
	}
	return "http://i.quiz.colopl.jp/img/card/small/card_" + ("0000" + no).slice(-5) + "_0.png"
}

// SSの残り表記を返却する
function ss_remain_text(rem_turn) {
	// SS1, SS2
	var SS1 = rem_turn[0];
	var SS2 = rem_turn[1];
	// L精霊ならSS1,SS2表記
	if (SS2 !== undefined) {
		// SS2が打てるならSS2表記のみ
		if (SS2 == 0) {
			return "SS2: 発動可能";
		}
		var SS1_text = SS1 != 0 ? ("残り" + SS1 + "T") : "発動可能";
		var SS2_text = "残り" + SS2 + "T";
		return "SS1: " + SS1_text + " / SS2: " + SS2_text;
	} else {
		var SS_text = SS1 != 0 ? ("残り" + SS1 + "T") : "発動可能";
		return "SS: " + SS_text;
	}
}