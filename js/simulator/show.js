// 現在の状況を表示する
function sim_show() {
	// sim_log
	var logtext = "";
	var tt = Field.Status.totalturn;
	var log_stat = Field.Status.log[tt] !== undefined ? tt : tt - 1;
	for (var i = log_stat ; i >= 0; i--) {
		logtext += "--- turn: " + (i + 1) + " ------------" + "<br/>";
		if (Field.Status.log[i] !== undefined) {
			for (var j = 0; j < Field.Status.log[i].length; j++) {
				logtext += Field.Status.log[i][j] + "<br/>";
			}
		}
	}
	$(".sim_log_inner").html(logtext);

	// sim_info_turn
	$("#sim_turns").text(
		"turn: " + totalturn_string() + " / chain: " + Field.Status.chain + " / "
			+ Field.Status.nowbattle + "戦目 (" + durturn_string() + ")"
	);
	// sim_info_status
	$("#sim_info_status").text(Field.Quest.name);

	// sim_result
	if (Field.Status.finish) {
		$("#sim_share").fadeIn("slow");
	} else {
		$("#sim_share").fadeOut("slow");
	}
	// sim_restart
	if (Field.Status.totalturn > 0) {
		$("#sim_restart").fadeIn("slow");
	} else {
		$("#sim_restart").fadeOut("slow");
	}

	// ----------------
	// sim_ally
	for (var i = 0; i < 5; i++) {
		var dec = Field.Allys.Deck[i];
		var now = Field.Allys.Now[i];
		if (dec !== undefined) {
			// 指定
			$("#ally0" + (i + 1) + "_attr_main").attr("class", "attr_" + dec.attr[0]);
			$("#ally0" + (i + 1) + "_attr_sub").attr("class", "attr_" + (dec.attr[1] != -1 ? dec.attr[1] : dec.attr[0]));
			$("#ally0" + (i + 1) + "_img").attr("src", get_image_url(dec.imageno));
			$("#ally0" + (i + 1) + "_name").text(dec.name);
			$("#ally0" + (i + 1) + "_status").text("HP: " + now.nowhp + "/" + now.maxhp + ", ATK: " + now.atk);
			// SSターン取得
			var sst = get_ssturn(dec, now);
			if (sst[0] == 0 && now.nowhp > 0 && !Field.Status.finish) {
				// SS発動可能
				$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button");
				$("#ally0" + (i + 1) + "_ss_button").text(ss_remain_text(sst));
				$("#ally0" + (i + 1) + "_ss_button").attr("disabled", false);
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
			$("#ally0" + (i + 1) + "_img").attr("src", "./image/noimage.png");
			$("#ally0" + (i + 1) + "_ss_button").text("(未選択)");
			$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button_disabled");
			$("#ally0" + (i + 1) + "_ss_button").attr("disabled", "disabled");
		}
	}
	// sim_enemy
	var enemys_dat = GetNowBattleEnemys();
	for (var i = 0; i < 3; i++) {
		var e = enemys_dat[i];
		if (e !== undefined) {
			// 指定
			$("#enemy0" + (i + 1) + "_attr_main").attr("class", "attr_" + e.attr);
			$("#enemy0" + (i + 1) + "_attr_sub").attr("class", "attr_" + e.attr);
			$("#enemy0" + (i + 1) + "_img").attr("src", get_image_url(e.imageno));
			$("#enemy0" + (i + 1) + "_name").text(e.name);
			$("#enemy0" + (i + 1) + "_hp").text("HP: " + e.nowhp + "/" + e.hp);
			// 継続中の効果を並べる
			var eff_text = "";
			for (var l = 0; l < e.turn_effect.length; l++) {
				// 非表示要素は飛ばす
				if (e.turn_effect[l].desc == null) { continue; }
				if (eff_text != "") {
					eff_text += ", ";
				}
				eff_text += e.turn_effect[l].desc + "(" + e.turn_effect[l].lim_turn + "t)";
			}
			$("#enemy0" + (i + 1) + "_stats").text(eff_text);
			$("#enemy0" + (i + 1) + "_stats").attr("title", eff_text);
		} else {
			// 無効化
			$("#enemy0" + (i + 1) + "_attr_main").attr("class", "attr_none");
			$("#enemy0" + (i + 1) + "_attr_sub").attr("class", "attr_none");
			$("#enemy0" + (i + 1) + "_img").attr("src", "./image/noimage.png");
			$("#enemy0" + (i + 1) + "_name").text("");
			$("#enemy0" + (i + 1) + "_hp").text("");
			$("#enemy0" + (i + 1) + "_stats").text("");
			$("#enemy0" + (i + 1) + "_stats").attr("title", "");
		}
	}

	// panel_addition
	// 全削除
	$('#panel_add_sel option').remove();
	// 未選択
	$("#panel_add_sel").append($('<option>').val(0).text("(未選択)"));
	// 追加していく
	for (var i = 0; i < Field.Status.panel_add.length; i++) {
		var opt = $('<option>').val(i + 1)
			.text(Field.Status.panel_add[i].desc)
			.attr("selected", i == Field.Status.panel_add.length - 1);
		$("#panel_add_sel").append(opt);
	}
	// sim_panel
	$(".panel_button").attr("disabled", Field.Status.finish);
	// sim_field_move
	$("#fld_move_before").attr("disabled", (Field.Status.totalturn == 0));
	$("#fld_move_after").attr("disabled", (Field.Status.totalturn == Field_log.length() - 1));
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

// 合計ターンの表記を返却する
function totalturn_string() {
	var finish_ss = Field.Status.finish && Field.Status.durturn[Field.Quest.aprnum - 1].ssfin;
	return (finish_ss ? (Field.Status.totalturn - 1) + "+SS" : Field.Status.totalturn.toString());
}

// 累計ターンの表記を返却する
function durturn_string() {
	var popupstr = "";
	for (var i = 0; i < Field.Enemys.Popuplist.length; i++) {
		var tu = Field.Status.durturn[i];
		var t = tu ?
			(tu.ssfin ?
				((tu.turn-1 != 0) ? (tu.turn - 1).toString() + "+SS" : "SS") :
				tu.turn.toString()
			) : "?";
		popupstr += t;
		if (i != Field.Enemys.Popuplist.length - 1) {
			popupstr += "-";
		}
	}
	return popupstr;
}

// ツイート
function tweet_result() {
	// URL生成
	var url = absolutePath("./" + location.search);
	var nam = Field.Quest.name;
	var trn = durturn_string().replace("+", "%2B");
	var tot = totalturn_string().replace("+", "%2B");
	var text = "「" + nam + "」を " + tot + " ターン(" + trn + ")で突破！%0A" + url;
	var tweeturl = "https://twitter.com/intent/tweet?hashtags=wiz_simu" + "&text=" + text;
	// 開く
	window.open(tweeturl, "Simulator result - Tweet");
}

// fieldのログを読む
function load_field(i) {
	var load_index = (i != 0 ? i + Field.Status.totalturn: 0);
	if (load_index <= Field_log.length()) {
		Field = Field_log.load(load_index);
		// 再表示
		sim_show();
	}
}

// デッキ選択に戻る
function back_decksel() {
	var param = location.search;
	// 移動
	location.href = "./index.html" + param;
}

// 相対パス → 絶対パス
function absolutePath(path) {
	var e = document.createElement('span');
	e.insertAdjacentHTML('beforeend', '<a href="' + path + '" />');
	return e.firstChild.href;
}