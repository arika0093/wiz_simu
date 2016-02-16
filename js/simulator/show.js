// for timer
var _Timer = undefined;

// 現在の状況を表示する
function sim_show() {
	// timer reset
	if (_Timer) {
		clearInterval(_Timer);
	}

	// sim_info_turn
	if (Field.Status.chain_status == 1) {
		var chain_state = "(保護)";
	} else if (Field.Status.chain_status == -1) {
		var chain_state = "(封印)";
	} else {
		var chain_state = "";
	}
	$("#sim_turns").text(
		"turn: " + totalturn_string() + " / chain: " + Field.Status.chain
			+ chain_state + " / " + Field.Status.nowbattle + "戦目 (" + durturn_string() + ")"
	);

	// sim_info_status
	$("#sim_info_status").text(Field.Quest.name);

	// sim_result
	if (Field.Status.finish) {
		$("#sim_share").fadeIn("slow");
		$("#dialog_simfinish_popup").dialog("open");
	} else if (is_ally_alldeath()) {
		$("#dialog_gameover").dialog("open");
	} else {
		$("#sim_share").fadeOut("slow");
	}
	// sim_restart / logview
	if (Field.Status.totalturn > 0) {
		$("#sim_restart").fadeIn("slow");
		$("#sim_logview").fadeIn("slow");
	} else {
		$("#sim_restart").fadeOut("slow");
		$("#sim_logview").fadeOut("slow");
	}

	// ----------------
	// sim_ally
	for (var i = 0; i < 5; i++) {
		var dec = Field.Allys.Deck[i];
		var now = Field.Allys.Now[i];
		if (dec !== undefined) {
			// 死んでたら薄暗く表示	
			if (now.nowhp <= 0) {
				$("#ally0" + (i + 1) + "_img").attr("class", "chara_img_dead");
			} else {
				$("#ally0" + (i + 1) + "_img").attr("class", "chara_img");
			}
			// 指定
			$("#ally0" + (i + 1) + "_attr_main").attr("class", "attr_" + dec.attr[0]);
			$("#ally0" + (i + 1) + "_attr_sub").attr("class", "attr_" + (dec.attr[1] != -1 ? dec.attr[1] : dec.attr[0]));
			$("#ally0" + (i + 1) + "_img").attr("src", get_image_url(dec.imageno));
			$("#ally0" + (i + 1) + "_name").text(dec.name);
			$("#ally0" + (i + 1) + "_status").text("HP: " + now.nowhp + "/" + now.maxhp + ", ATK: " + now.atk);
			// SSが発動可能かどうか
			var sst = get_ssturn(dec, now);
			var ss_disabled = $.grep(now.turn_effect, function (e) {
				return e.ss_disabled;
			}).length > 0;
			if (!ss_disabled && sst[0] == 0 && now.nowhp > 0 && !Field.Status.finish) {
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
			$("#ally0" + (i + 1) + "_img").attr("src", "/image/noimage.png");
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
			// 死んでたら薄暗く表示、鉄壁が貼ってあるならグレースケールで表示
			var is_impregnable = $.grep(e.turn_effect, function (eff) {
				return eff.type == "impregnable";
			}).length > 0;
			if (e.nowhp <= 0) {
				$("#enemy0" + (i + 1) + "_img").attr("class", "chara_img_dead");
			} else if (is_impregnable) {
				$("#enemy0" + (i + 1) + "_img").attr("class", "chara_img_impregnable");
			} else {
				$("#enemy0" + (i + 1) + "_img").attr("class", "chara_img");
			}
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
				eff_text += e.turn_effect[l].desc;
				if (e.turn_effect[l].lim_turn >= 0) {
					 eff_text += "(" + e.turn_effect[l].lim_turn + "t)"
				}
			}
			$("#enemy0" + (i + 1) + "_stats").text(eff_text);
			$("#enemy0" + (i + 1) + "_stats").attr("title", eff_text);
		} else {
			// 無効化
			$("#enemy0" + (i + 1) + "_attr_main").attr("class", "attr_none");
			$("#enemy0" + (i + 1) + "_attr_sub").attr("class", "attr_none");
			$("#enemy0" + (i + 1) + "_img").attr("src", "/image/noimage.png");
			$("#enemy0" + (i + 1) + "_name").text("");
			$("#enemy0" + (i + 1) + "_hp").text("");
			$("#enemy0" + (i + 1) + "_stats").text("");
			$("#enemy0" + (i + 1) + "_stats").attr("title", "");
		}
	}
	// 発動中の効果を点滅表示
	if (!Field.Status.finish) {
		var blink_onetime = 2500;
		var b_vis = [-1, -1, -1, -1, -1, -1, -1, -1];
		var blink = function () {
			// 味方
			for (var i = 0; i < Field.Allys.Deck.length; i++) {
				var now = Field.Allys.Now[i];
				var teffs = $.grep(now.turn_effect, function (e) {
					return e.desc && e.icon;
				});
				if (teffs.length <= 0 || now.nowhp <= 0) {
					b_vis[i] = -1;
					$("#ally0" + (i + 1) + "_teff").attr("src", "/image/noimage.png");
				} else {
					b_vis[i] = b_vis[i] != -1 ? (b_vis[i] + 1) % (teffs.length) : 0;
					$("#ally0" + (i + 1) + "_teff").attr("src",
						"/image/icon/" + teffs[b_vis[i]].icon + ".png");
					$("#ally0" + (i + 1) + "_teff").fadeIn(blink_onetime / 3, function () {
						$(this).fadeOut(blink_onetime / 2);
					});
				}
			}
			// 敵
			var es = GetNowBattleEnemys();
			for (var i = 5; i < es.length + 5; i++) {
				var edat = es[i - 5];
				var teffs = $.grep(edat.turn_effect, function (e) {
					return e.desc && e.icon;
				});
				if (teffs.length <= 0 || edat.nowhp <= 0) {
					b_vis[i] = -1;
					$("#enemy0" + (i - 4) + "_teff").attr("src", "/image/noimage.png");
				} else {
					b_vis[i] = b_vis[i] != -1 ? (b_vis[i] + 1) % (teffs.length) : 0;
					$("#enemy0" + (i - 4) + "_teff").attr("src",
						"/image/icon/" + teffs[b_vis[i]].icon + ".png");
					$("#enemy0" + (i - 4) + "_teff").fadeIn(blink_onetime / 3, function () {
						$(this).fadeOut(blink_onetime / 2);
					});
				}
			}
		};
		blink();
		_Timer = setInterval(blink, blink_onetime);
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
	// 敵の数に応じてattack_target_selの中身を変える
	var eleng = GetNowBattleEnemys().length;
	if (eleng == 2) {
		// 2体(中央を消す)
		$("#attack_target_sel option[value=1]").hide();
		$("#atarget_sel_1 option[value=1]").hide();
		$("#atarget_sel_2 option[value=1]").hide();
	} else {
		// 3体(全て表示)
		$("#attack_target_sel option").show();
		$("#atarget_sel_1 option").show();
		$("#atarget_sel_2 option").show();
	}
	// 1体なら選択を無効化
	$("#attack_target_sel").attr("disabled", eleng <= 1);
	$("#atarget_sel_1").attr("disabled", eleng <= 1);
	$("#atarget_sel_2").attr("disabled", eleng <= 1);

	// ally_info
	var cost_total = 0;
	var paneb_total = [0, 0, 0, 0, 0];
	var paneb_total_str = "";
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		cost_total += card_cost(Field.Allys.Deck[i]);
		var paneb_aw = card_paneb(Field.Allys.Deck[i]);
		for (var j = 0; j < 5; j++) {
			paneb_total[j] += paneb_aw[j];
		}
	}
	for (var j = 0; j < 5; j++) {
		if (paneb_total[j] <= 0) { continue; }
		if (paneb_total_str != "") {
			paneb_total_str += ", ";
		}
		paneb_total_str += Field.Constants.Attr[j] + ": " + paneb_total[j];
	}
	$("#ally_info_text").text("Cost: " + cost_total + " / Panel Boost: [" + paneb_total_str + "]");

	// ---------------------------------------
	// dialog
	// ---------------------------------------
	// log
	$("#dialog_simlog").dialog({
		autoOpen: false,
		modal: true,
		width: 450,
		height: 480,
		open: function(e, ui){
			// sim_log
			var logtext = "";
			var tt = Field.Status.totalturn;
			var log_stat = Field.Status.log[tt] !== undefined ? tt : tt - 1;
			for (var i = 0 ; i <= log_stat; i++) {
				logtext += create_log(i);
			}
			$("#sim_log_inner").html(logtext);
			$("#sim_log_inner").accordion("refresh");
		},
		buttons: {
			"ダメージ計算": function() {
				$("#dialog_simlog_detail").dialog("open");
			},
			"閉じる": function () {
				$(this).dialog("close");
			},
		},
	});
	// detail log
	$("#dialog_simlog_detail").dialog({
		autoOpen: false,
		modal: true,
		width: 1000,
		open: function (e, ui) {
			// sim_log
			var logtext = "";
			var dl = Field.Status.d_log;
			for (var i = 0 ; i < dl.length; i++) {
				logtext += dl[i] + "<br/>";
			}
			$("#sim_dlog_inner").html(logtext);
		},
		buttons: {
			"Close": function () {
				$(this).dialog("close");
			},
		},
	});
	// ally status
	$("#dialog_allystatus").dialog({
		autoOpen: false,
		modal: true,
		width: 450,
		open: function () {
			// hide
			$(".ui-dialog-titlebar").hide();
			// listup turn effect
			var li_t = "";
			var n = Number($("#allystat_index").text());
			var card = Field.Allys.Deck[n];
			var now = Field.Allys.Now[n];
			var teff = now.turn_effect;
			for (var i = 0; i < teff.length; i++) {
				if (teff[i].desc != null) {
					if (teff[i].icon) {
						li_t += "<li><img class='teff_icon' src='/image/icon/" + teff[i].icon + ".png' />";
					} else {
						li_t += "<li class='no_icon'>";
					}
					li_t += teff[i].desc;
					if (teff[i].lim_turn > 0) {
						li_t += "(残り: " + teff[i].lim_turn + "t)";
					}
					li_t += "</li>";
				}
			}
			if (teff.length <= 0) {
				li_t = "<li class='no_icon'>(現在継続中の効果はありません)</li>";
			}
			$("#allystat_name").text((n+1) + ": " + card.name);
			$("#ally_tefflist").html(li_t);
			// target select
			if (card.attr[1] != -1) {
				$("#allystat_tg_2").show();
			} else {
				$("#allystat_tg_2").hide();
			}
			$("#atarget_sel_1").val(now.target[0] + "");
			$("#atarget_sel_2").val(now.target[1] + "");
			// close when click dialog outside
			$('.ui-widget-overlay').bind('click', function () {
				$("#dialog_allystatus").dialog('close');
			});
		},
		close: function () {
			// target set
			var n = Number($("#allystat_index").text());
			var now = Field.Allys.Now[n];
			now.target[0] = Number($("#atarget_sel_1").val());
			now.target[1] = Number($("#atarget_sel_2").val());
			// title show
			$(".ui-dialog-titlebar").show();
		},
	});
	// tweet result
	$("#dialog_simfinish_popup").dialog({
		autoOpen: false,
		modal: true,
		width: 600,
		open: function () {
			var nam = Field.Quest.name;
			var trn = durturn_string();
			var tot = totalturn_string();
			var text = nam + " を " + tot + " ターン(" + trn + ") で突破！";
			// hide
			$(".ui-dialog-titlebar").hide();
			// tweet data
			$("#simfinish_tweettext").html(
				text + "<br/><div class='sh_url'>" + absolutePath("/simulator/" + location.search) + "</div> #wiz_simu"
			);
			// close when click dialog outside
			$('.ui-widget-overlay').bind('click', function () {
				$("#dialog_simfinish_popup").dialog('close');
			});
		},
		close: function() {
			// title show
			$(".ui-dialog-titlebar").show();
		},
		buttons: {
			"結果をツイートする": function () {
				tweet_result();
				$(this).dialog("close");
			},
			"閉じる": function () {
				$(this).dialog("close");
			},
		},
	});
	// gameover log
	$("dialog_gameover").dialog({
		autoOpen: false,
		modal: true,
		width: 450,
		buttons: {
			"始めからやり直す": function () {
				load_field(0);
				$(this).dialog("close");
			},
			"デッキ選択画面に戻る": function () {
				back_decksel();
				$(this).dialog("close");
			},
		},
	});
	// no effect
	$("#dialog_ss_noaction").dialog({
		autoOpen: false,
		modal: true,
		width: 450,
		buttons: {
			"OK": function () {
				$(this).dialog("close");
			},
		},
	});
}

// logを生成する
function create_log(i) {
	var logtext = "<h3>turn: " + (i + 1) + "" + "</h3><div>";
	if (Field.Status.log[i] !== undefined) {
		for (var j = 0; j < Field.Status.log[i].length; j++) {
			logtext += Field.Status.log[i][j] + "<br/>";
		}
	}
	logtext += "</div>";
	return logtext;
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

// ログ表示
function log_view() {
	$("#dialog_simlog").dialog("open");
}

// 味方精霊情報表示
function show_allystat(n) {
	if (!Field.Status.finish && n < Field.Allys.Deck.length) {
		$("#allystat_index").text(n + "");
		$("#dialog_allystatus").dialog("open");
	}
}

// ツイート
function tweet_result() {
	var win_opt = "menubar=no,toolbar=no,resizable=yes,scrollbars=no,width=640px,height=360px,top=40px,left=40px";
	// URL生成して開く
	var fc = function (d) {
		var s_url = d.data.url || encodeURIComponent(fc.url);
		fc.twurl = fc.twurl.replace(fc.url, s_url);
		// 開く
		window.open(fc.twurl, "tweet_result", win_opt);
	};
	create_tweeturl(Field.Quest.name, durturn_string(), totalturn_string(), fc);
	// popup block対策
	var w = window.open("", "tweet_result", win_opt);
	w.document.write("loading...");
}

// fieldのログを読む
function load_field(i) {
	// 読み込み前の戦闘数
	var btlct_now = Field.Status.nowbattle;
	// 読み込み先取得
	var load_index = (i != 0 ? i + Field.Status.log.length : 0);
	if (Field.Status.totalturn == 0 && Field.Status.log.length > 0) {
		load_index -= 1;
	}

	if (load_index <= Field_log.length()) {
		// 読み込み
		Field = Field_log.load(load_index);
		// 再表示
		sim_show();
		// 詳細ログ追加
		Field.detail_log("load_field", "move", "loaded turn " + (load_index + 1));
		// 戦闘数が読み込み前と違っていたらタゲリセット
		if (btlct_now != Field.Status.nowbattle) {
			target_allselect(-1);
		}
	}
}

// デッキ選択に戻る
function back_decksel() {
	var param = location.search;
	// 移動
	location.href = "/simulator/" + param;
}

// タゲ選択
function target_allselect(n) {
	n = (n !== undefined ? n : $("#attack_target_sel").val());
	$("#attack_target_sel").val(n + "");
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		var now = Field.Allys.Now[i];
		now.target[0] = n;
		now.target[1] = n;
	}
}

// 相対パス → 絶対パス
function absolutePath(path) {
	var e = document.createElement('span');
	e.insertAdjacentHTML('beforeend', '<a href="' + path + '" />');
	return e.firstChild.href;
}