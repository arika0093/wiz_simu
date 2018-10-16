// for timer
var _Timer = undefined;

// 現在の状況を表示する
function sim_show(fld) {
	// 自動試走中なら何もしない
	if (fld.Status.isautomode) {
		return;
	}
	// timer reset
	if (_Timer) {
		clearInterval(_Timer);
	}
	// target-effect reset
	$("div.enemy").removeClass("selected_target");

	// sim_info_turn
	if (fld.Status.chain_status == 1) {
		var chain_state = "(保護)";
	} else if (fld.Status.chain_status == -1) {
		var chain_state = "(封印)";
	} else {
		var chain_state = "";
	}
	$("#sim_turns").html(
		"turn: " + totalturn_string(fld) + " / chain: " + fld.Status.chain
			+ chain_state + (fld.Status.finish ? " / Act-Factor: " + fld.Status.speedscore :
			" / " + fld.Status.nowbattle + "戦目 (" + durturn_string(fld) + ")")
	);

	// sim_info_status
	$("#sim_info_status").html(fld.Quest.name +
		" [<a target='_blank' href='/simulator/quest/?id=" + fld.Quest.id + "'>敵行動</a> /" +
		" <a target='_blank' href='/simulator/d/?qid=" + fld.Quest.id + "'>投稿デッキ</a>]"
	);

	// sim_result
	if (is_ally_alldeath(fld)) {
		$("#dialog_gameover").dialog("open");
	} else if (fld.Status.finish /*&& !fld.Status.isautomode*/) {
		$("#sim_share").fadeIn("slow");
		$("#sim_rndview").hide();
	} else {
		$("#sim_share").fadeOut("slow");
		$("#sim_rndview").fadeIn("slow");
	}
	// sim_restart / logview
	if (fld.Status.totalturn > 0) {
		$("#sim_restart").fadeIn("slow");
		$("#sim_logview").fadeIn("slow");
	} else {
		$("#sim_restart").fadeOut("slow");
		$("#sim_logview").fadeOut("slow");
	}

	// ----------------
	// sim_ally
	for (var i = 0; i < 5; i++) {
		var dec = fld.Allys.Deck[i];
		var now = fld.Allys.Now[i];
		if (dec !== undefined) {
			// 各種指定
			var attr0 = (dec.attr[0] != -1 ? dec.attr[0]+"" : "none");
			$("#ally0" + (i + 1) + "_attr_main").attr("class", "attr_" + attr0);
			$("#ally0" + (i + 1) + "_attr_sub").attr("class", "attr_" + (dec.attr[1] != -1 ? dec.attr[1] : attr0));
			$("#ally0" + (i + 1) + "_img").attr("src", get_image_url(dec.imageno, dec.imageno_prefix));
			$("#ally0" + (i + 1) + "_name").text(dec.name);
			$("#ally0" + (i + 1) + "_status").text("HP: " + now.nowhp + "/" + now.maxhp + ", ATK: " + now.atk);

			// タゲ指定
			$("#ally0" + (i + 1) + "_img").draggable({
				containment: $("#sim_top"),
				opacity: 0.75,
				helper: "clone",
				distance: 12,
				zIndex: 10,
				start: function (event, ui) {
					$("div.enemy").removeClass("selected_target");
				}
			});
			// タゲ指定を有効/無効化
			$("#ally0" +(i +1) + "_img").draggable(now.nowhp > 0 ? "enable" : "disable");

			// 生存確認して、死んでたら薄暗く表示
			if (now.nowhp > 0) {
				$("#ally0" + (i + 1)).removeClass("dead")
				$("#ally0" + (i + 1) + "_img").attr("class", "chara_img");
			} else {
				$("#ally0" + (i + 1)).addClass("dead")
				$("#ally0" + (i + 1) + "_img").attr("class", "chara_img_dead");
			}

			// SSが発動可能かどうか
			var sst = get_ssturn(fld, dec, now);
			if (is_ss_active(fld, i)) {
				// SS発動可能
				$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button");
				$("#ally0" + (i + 1) + "_ss_button").text(ss_remain_text(fld, sst, now.flags.ss_chargefin));
				$("#ally0" + (i + 1) + "_ss_button").attr("disabled", false);
			} else {
				// SS発動不可
				$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button_disabled");
				$("#ally0" + (i + 1) + "_ss_button").text(ss_remain_text(fld, sst));
				$("#ally0" + (i + 1) + "_ss_button").attr("disabled", "disabled");
			}
			// HPバー指定
			var stat = $("#ally0" + (i + 1) + "_status")[0];
			var basetxt = stat.innerText;
			var hprate = now.nowhp / now.maxhp;
			var barWidth = 239 * hprate;
			var barColor;
			if (hprate > 0.5) {
				barColor = "lightgreen"
			} else if (hprate > 0.2) {
				barColor = "orange"
			} else {
				barColor = "red"
			}
			// 表示エリアの再定義
			stat.style.position = "relative";
			if (now.nowhp == 0) {
				stat.style.borderTop = "1px solid #cccccc"
				stat.style.borderLeft = "1px solid #cccccc"
			} else {
				stat.style.borderTop = "1px solid gray"
				stat.style.borderLeft = "1px solid gray"
			}
			stat.style.width = "239px";
			stat.style.height = "17px";
			stat.style.margin = 0;
			stat.style.textAlign = "center";
			stat.style.borderRadius = "2px";
			stat.style.backgroundColor = "";
			stat.innerText = "";
			// 棒グラフの棒の部分の表示
			stat.innerHTML += "<div style=position:absolute;top:0px;left:0px;width:" + Math.ceil(barWidth) + "px;height:17px;background-color:" + barColor + ";></div>"
			// 元々の文字の表示
			stat.innerHTML += "<div style=position:absolute;top:-1px;left:0px;width:239px;height:18px;background-color:transparent;>" + basetxt + "</div>"
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
	var enemys_dat = GetNowBattleEnemys(fld);
	// 敵が3体以下なら4/5体目の表示を消す
	if(enemys_dat.length <= 3){
		$(".enemy_5").hide();
	} else {
		$(".enemy_5").show();
	}
	
	for (var i = 0; i < 5; i++) {
		var e = enemys_dat[i];
		if (e !== undefined) {
			// 各種指定
			var eattr = (e.attr != -1 ? e.attr+"" : "none");
			$("#enemy0" + (i + 1) + "_attr_main").attr("class", "attr_" + eattr);
			$("#enemy0" + (i + 1) + "_attr_sub").attr("class", "attr_" + eattr);
			$("#enemy0" + (i + 1) + "_img").attr("src", get_image_url(e.imageno, e.imageno_prefix));
			$("#enemy0" + (i + 1) + "_name").text(e.name);
			$("#enemy0" + (i + 1) + "_hp").text("HP: " + e.nowhp + "/" + e.hp);

			// drop able
			$("#enemy0" + (i + 1)).droppable({
				accept: $("img.chara_img"),
				activeClass: "img_accept_active",
				hoverClass: "img_accept_hover",
				drop: function (event, ui) {
					// get index
					var drg_id = ui.draggable.attr("id");
					var drg_index = Number(drg_id.replace("ally0", "").replace("_img", "")) - 1;
					var drp_id = this.id;
					var drp_index = Number(drp_id.replace("enemy0", "")) - 1;
					// set target
					var now = fld.Allys.Now[drg_index];
					now.target[0] = drp_index;
					now.target[1] = drp_index;
				},
			});

			//生きていたら残りターン表示
			if (e.nowhp > 0) {
				$("#enemy0" + (i + 1) + "_turn").text((e.move && e.move.turn) ? e.move.turn : "--");
				$("#enemy0" + (i + 1) + "_turn").removeClass("enemy_turn_disable");
			}else{
				$("#enemy0" + (i + 1) + "_turn").addClass("enemy_turn_disable");
			}
			// 死んでたら薄暗く表示、鉄壁が貼ってあるならグレースケールで表示
			if (e.nowhp <= 0) {
				$("#enemy0"+ (i + 1)).addClass("dead")
			}else{
				$("#enemy0"+ (i + 1)).removeClass("dead")
			}
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

			// 継続中の効果を並べる
			var eff_text = "";
			for (var l = e.turn_effect.length - 1; l >= 0; l--) {
				// 非表示要素は飛ばす
				if (e.turn_effect[l].desc == null) {
					continue;
				}
				if (eff_text != "") {
					eff_text += ", ";
				}
				eff_text += e.turn_effect[l].desc;
				if (e.turn_effect[l].lim_turn >= 0) {
					eff_text += "(" +e.turn_effect[l].lim_turn + "t)"
				}
			}
			$("#enemy0" + (i +1) + "_stats").text(eff_text);
			$("#enemy0" + (i +1) + "_stats").attr("title", eff_text);
		} else {
			// 無効化
			$("#enemy0" + (i + 1) + "_attr_main").attr("class", "attr_none");
			$("#enemy0" + (i + 1) + "_attr_sub").attr("class", "attr_none");
			$("#enemy0" + (i + 1) + "_img").attr("src", "/image/noimage.png");
			$("#enemy0" + (i + 1) + "_name").text("");
			$("#enemy0" + (i + 1) + "_hp").text("");
			$("#enemy0" + (i + 1) + "_stats").text("");
			$("#enemy0" + (i + 1) + "_stats").attr("title", "");
			$("#enemy0" + (i + 1) + "_turn").addClass("enemy_turn_disable");
		}
	}
	// 発動中の効果を点滅表示
	if (!fld.Status.finish) {
		var blink_onetime = 2500;
		var b_vis = Array.apply(null, Array(5+5)).map(() => -1); // 味方5体+敵5体のblink-icon数
		var blink = function () {
			// 味方
			for (var i = 0; i < fld.Allys.Deck.length; i++) {
				var now = fld.Allys.Now[i];
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
			var es = GetNowBattleEnemys(fld);
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
	for (var i = 0; i < fld.Status.panel_add.length; i++) {
		var opt = $('<option>').val(i + 1)
			.text(fld.Status.panel_add[i].desc)
			.attr("selected", i == fld.Status.panel_add.length - 1);
		$("#panel_add_sel").append(opt);
	}
	var bbefi = fld.Quest.battle_before_def + 1;
	if (bbefi >= 0) {
		$("#panel_add_sel").val(bbefi);
	}
	// sim_panel
	$(".panel_button").attr("disabled", fld.Status.finish);
	// sim_fld_move
	$("#fld_move_before").attr("disabled", (Field_log.now_index == 0));
	$("#fld_move_after").attr("disabled", (Field_log.now_index >= Field_log.length() - 1));
	// 敵の数に応じてattack_target_selの中身を変える
	var eleng = GetNowBattleEnemys(fld).length;
	if(eleng >= 4){
		// 4体以上(全表示)
		$("#attack_target_sel option").show();
		$("#atarget_sel_1 option").show();
		$("#atarget_sel_2 option").show();
	}
	else if(eleng >= 2){
		if (eleng <= 3) {
			// 3体以下(奥を消す)
			$("#attack_target_sel option[value=3]").hide();
			$("#attack_target_sel option[value=4]").hide();
			$("#atarget_sel_1 option[value=3]").hide();
			$("#atarget_sel_1 option[value=4]").hide();
			$("#atarget_sel_2 option[value=3]").hide();
			$("#atarget_sel_2 option[value=4]").hide();
		}
		if (eleng <= 2) {
			// 2体以下(中央を消す)
			$("#attack_target_sel option[value=1]").hide();
			$("#atarget_sel_1 option[value=1]").hide();
			$("#atarget_sel_2 option[value=1]").hide();
		} else {
			// 3体
			$("#attack_target_sel option[value=1]").show();
			$("#atarget_sel_1 option[value=1]").show();
			$("#atarget_sel_2 option[value=1]").show();
		}
	}
	// 1体なら選択を無効化
	$("#attack_target_sel").attr("disabled", eleng <= 1);
	$("#atarget_sel_1").attr("disabled", eleng <= 1);
	$("#atarget_sel_2").attr("disabled", eleng <= 1);

	// ally_info
	var cost_total = 0;
	var paneb_total = [0, 0, 0, 0, 0];
	var paneb_total_str = "";
	for (var p in fld.Allys.Deck) {
		var c = fld.Allys.Deck[p];
		var paneb_aw = card_paneb(fld, c);
		if (Number(p) >= 0) {
			cost_total += card_cost(fld, c);
		}
		for (var j = 0; j < 5; j++) {
			paneb_total[j] += paneb_aw[j];
		}
	}
	for (var j = 0; j < 5; j++) {
		if (paneb_total[j] <= 0) { continue; }
		if (paneb_total_str != "") {
			paneb_total_str += ", ";
		}
		paneb_total_str += fld.Constants.Attr[j] + ": " + paneb_total[j];
	}
	$("#ally_info_text").text("Cost: " + cost_total + " / Panel Boost: [" + paneb_total_str + "]");

	// ---------------------------------------
	// dialog
	// ---------------------------------------
	// log
	$("#dialog_simlog").dialog({
		autoOpen: false,
		modal: true,
		width: 550,
		height: 580,
		open: function(e, ui){
			// sim_log
			var logtext = "";
			var tt = Field.Status.totalturn;
			var log_stat = Field.Status.log[tt] !== undefined ? tt : tt - 1;
			for (var i = 0 ; i <= log_stat; i++) {
				var l_t = create_log(fld, i);
				l_t = l_t.replace(/\/\/\{blue}/g, "<span class='blue'>");
				l_t = l_t.replace(/\/\/\{orange}/g, "<span class='orange'>");
				l_t = l_t.replace(/\{}\/\//g, "</span>");
				logtext += l_t;
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
		width: 1100,
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
			// ----------------------------
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
					if (teff[i].subicon) {
						li_t += "<img class='teff_icon' src='/image/icon/" + teff[i].subicon + ".png' />";
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
			var hp_perc = Math.floor(100*100*now.nowhp/now.maxhp)/100;
			
			$("#allystat_name").html((n + 1) + ": " +
				"<a target='_blank' href='/search/detail/?id=" + card.cardno + "'>" + card.name + "</a>" +
				"<a href='javascript:;' style='float:right; display:block' id='opendmgcalc'>ダメージ計算を開く</a>" +
				"<br/><div style='text-align: right;'>HP: " + now.nowhp + "/" + now.maxhp +
				"(" + hp_perc.toFixed(2) + "%), ATK: " + now.atk +
				calcAndShowAccumulatePercent(fld, n) +
				"</div>");
			$("#ally_tefflist").html(li_t);
			$("#opendmgcalc").off("click");
			$("#opendmgcalc").on("click", function(){
				openDamageCalcPage(fld, n);
			});
			// ----------------------------
			// target select
			if (card.attr[1] != -1) {
				$("#allystat_tg_2").show();
			} else {
				$("#allystat_tg_2").hide();
			}
			$("#atarget_sel_1").val(now.target[0] + "");
			$("#atarget_sel_2").val(now.target[1] + "");
			// ----------------------------
			// button of special skill
			var als_ssbtn = $("#allystat_ss_button");
			var sst = get_ssturn(fld, card, now);
			var ss_disabled = $.grep(now.turn_effect, function (e) {
				return e.ss_disabled;
			}).length > 0;
			als_ssbtn.text(ss_remain_text(fld, sst, now.flags.ss_chargefin));
			// 一旦既に定義されてるclickイベントを解除する(解除しないと連続してSSが発動する)
			als_ssbtn.off("click");
			als_ssbtn.on("click", function () {
				// クリックされたらSSを打つ
				$("#dialog_allystatus").dialog('close');
				ss_push(n);
			});
			if (!ss_disabled && sst[0] == 0 && now.nowhp > 0 && !Field.Status.finish) {
				// SS発動可能
				als_ssbtn.attr("class", "ally_ss_button");
				als_ssbtn.attr("disabled", false);
			} else {
				// SS発動不可
				als_ssbtn.attr("class", "ally_ss_button_disabled");
				als_ssbtn.attr("disabled", "disabled");
			}
			// ----------------------------
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
			var trn = durturn_string(fld);
			var tot = totalturn_string(fld);
			var text = simshow_create_fintext(fld);
			// hide
			$(".ui-dialog-titlebar").hide();
			// tweet data
			var url = absolutePath("/simulator/v/?id=" + Field.Status.result_enc);
			$("#simfinish_tweettext").html(
				text + "<br/><div class='sh_url'><a href='" + url + "' target='_blank'>" + url + "</a></div> #wzsim"
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
				tweet_result(fld);
				$(this).dialog("close");
			},
			"結果を全体公開する": function () {
				$("#dialog_simshare_popup").dialog('open');
			},
			"閉じる": function () {
				$(this).dialog("close");
			},
		},
	});
	// share result
	$("#dialog_simshare_popup").dialog({
		autoOpen: false,
		modal: true,
		width: 500,
		open: function () {
			// close when click dialog outside
			/*
			$('.ui-widget-overlay').bind('click', function () {
				$("#dialog_simshare_popup").dialog('close');
			});
			*/
		},
		buttons: {
			"投稿": function () {
				var user = $("#simshare_user").val();
				var comm = $("#simshare_comment").val();
				if (user.length > 0 && comm.length > 0) {
					// send
					actl_send_share(fld, Field.Status.result_id, user, comm, function(rst){
						// msg alert
						alert("送信完了しました。ご協力ありがとうございます。");
					});
					// close
					$(this).dialog("close");
				} else {
					alert("ユーザー名とコメントを入力してください。");
				}
			},
			"キャンセル": function () {
				$(this).dialog("close");
			},
		},
	});
	// gameover log
	$("#dialog_gameover").dialog({
		autoOpen: false,
		modal: true,
		width: 450,
		buttons: {
			"1T前に戻る": function() {
				load_field(Field, -1);
				$(this).dialog("close");
			},
			"始めからやり直す": function () {
				load_field(Field, 0);
				$(this).dialog("close");
			},
			"デッキ選択に戻る": function () {
				back_decksel();
				$(this).dialog("close");
			},
		},
	});
	// randchecker
	$("#dialog_randchecker").dialog({
		autoOpen: false,
		modal: true,
		width: 450,
		buttons: {
			"testrun": function () {
				// initilize
				var loop = Number($("#randcheck_rnum").val());
				// 描画関連処理
				var opdialog = function(n, c, t, is_fin){
					var fin_p = (c/t*100).toFixed(2);
					var clr_p = (n/c*100).toFixed(2);
					var rst_tx = "";
					if(is_fin){
						rst_tx = `Result: ${n} / ${t} ( 突破率: ${clr_p}% )`;
					} else {
						rst_tx = `Calculating: ${n} / ${c} [ ${fin_p}% done. ]`;
					}
					$("#randcheck_rsttext").html(rst_tx);
				}
				// test
				autoRun_RepeatTest(Field, condNextBattleOrFinish, convertRepeatStr2TaskFunc(), loop)
					.progress(v => {
						opdialog(v.matched, v.finished, v.total, false);
					})
					.then(v => {
						opdialog(v.matched, v.finished, v.total, true);
					});
				$("#dialog_randchecker_rst").dialog("open");
			},
			"close": function () {
				$(this).dialog("close");
			},
		},
	});
	// randchecker-result
	$("#dialog_randchecker_rst").dialog({
		autoOpen: false,
		modal: true,
		width: 400,
		buttons: {
			"close": function () {
				$(this).dialog("close");
			},
		},
	});
	// ss_single_one
	$("#dialog_ss_selectone").dialog({
		autoOpen: false,
		modal: true,
		width: 400,
		open: function() {
			// images set
			var cds = Field.Allys.Deck;
			for (var i = 0; i < cds.length; i++) {
				var c = cds[i];
				var dom = $("#sso_ally_image_" + i);
				dom.prop("src", get_image_url(c.imageno, c.imageno_prefix));
				dom.on("click", function (e) {
					// set
					var tg_id = e.target.id;
					var tg_idx = tg_id.replace("sso_ally_image_", "");
					$("#sso_selected_index").text(tg_idx);
					$("#dialog_ss_selectone").dialog("close");
					for (var j = 0; j < cds.length; j++) {
						var dm = $("#sso_ally_image_" + j);
						dm.off("click");
					}
					// skill done
					var skl_index = Number($("#sso_skilled_index").text())
					ss_push(skl_index);
					return;
				});
			}
		},
		buttons: {
			"Cancel": function () {
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

// ダメージ計算を開く
function openDamageCalcPage(fld, i){
	var c = fld.Allys.Deck[i];
	var now = fld.Allys.Now[i];
	var cryst = c.crystal || [];
	// アドヴェリタス潜在
	var has_advawake = $.grep(open_awake_composite(cryst), function(e){
		return e.type == "awake_damage_multiple";
	}).length > 0;
	// 効果値アップ潜在
	var cryst_rateups = $.grep(open_awake_composite(cryst), function(e){
		return e.type.indexOf("awake_rateup") >= 0;
	});
	var cryst_rateup_val = 0;
	$.each(cryst_rateups, function(i,e){
		cryst_rateup_val += e.upvalue
	});
	// 乱数
	var rand_val = Number($("#attack_rand_sel").val());
	var rand = (rand_val != -1 ? rand_val : 1);
	// 敵データ
	var enemys = GetNowBattleEnemys(fld);
	var e = enemys.sort(function(a,b){
		if( a.hp > b.hp ) return -1;
		if( a.hp < b.hp ) return 1;
		return 0;
	})[0];
	
	// 蓄積持ちの打点を計算してあるならそれを使用
	// ないなら標準
	var skillrate = 0;
	var skill_awc_rate = cryst_rateup_val;
	var enh_rate = Math.floor((now.ss_enhance || 0)*100);
	var acc_rate = $("div#acc_perc").data("rate");
	if(acc_rate > 0){
		skillrate = acc_rate;
		skill_awc_rate = 0;
		enh_rate = 0;
	}
	

	// クエリ
	var query = {
		obj_type: "dmgcalc/query",
		cond: {
			find_killatk: false,
			empty_rate: !(skillrate > 0),
			add_atk: 0,
			add_awatk: (now.def_awatk - now.def_atk),
			status_up: (now.atk - now.def_awatk),
			level: (now.level || 110),
			awakenum: c.awakes.length,
			manaplus: now.mana,
			is_advawake: has_advawake,
			as_panel_type: 0,
			skillrate,
			skill_awc_rate,
			enh_rate,
			as_iscritical: false,
			hit_num: 1,
			rand: rand,
			chain: fld.Status.chain,
			e_guard: 0,
			e_weaken: 0,
		},
		ally: {
			isloading: true,
			card: c,
		},
		enemy: {
			imageno: e.imageno,
			img_pref: e.imageno_prefix,
			attr: e.attr,
			hp: e.hp,
		},
	};
	// gen url and open page
	var w = window.open("/damagecalc/loading.html", "_blank");
	// objをJSON化して短縮する
	deckdata_SaveUrl(query, function (result) {
		var js = JSON.parse(result);
		// 別タブで検索結果表示ページを開く
		w.location = "/damagecalc/?q=" + js.short;
	});
	return;
}

// 蓄積大魔術の溜まっている%を取得、表示
function calcAndShowAccumulatePercent(fld, n){
	var perc = 0;
	var rate = 0;
	var card = fld.Allys.Deck[n];
	var now = fld.Allys.Now[n];
	var is_l = is_legendmode(fld, card, now);
	var ss = is_l ? card.ss2 : card.ss1;
	var target_ss = !ss.proc ? [] : ss.proc.filter((e) => {
		return e.is_skillcopy || e.is_acc;
	})[0];
	
	if(!target_ss){
		// 対象のSSがない
		perc = -1;
	} else if(target_ss.is_skillcopy){
		// スキルコピー
		perc = 0;
	} else {
		// 蓄積持ち
		var n = target_ss.name;
		var max_r = target_ss.p1;
		var max_v = target_ss.p2;
		var {total} = getEnhanceRate(now);
		var a = 0;
		var b = 0;
		if(n.indexOf("Heal") >= 0){
			// 蓄積聖
			a = fld.Status.accumulate_heal;
			b = now.accumulateHealCount;
		} else if(n.indexOf("Burn") >= 0){
			// 蓄積邪
			a = fld.Status.accumulate_dmg;
			b = now.accumulateBurnCount;
		} else if(n.indexOf("Overkill") >= 0){
			// 蓄積破
			a = fld.Status.accumulate_asok;
			b = now.accumulateASOverkillCount;
		}
		perc = Math.min((a - b)/max_v, 1);
		rate = (perc * (max_r + total)) + 1;
	}
	
	if(perc < 0){
		return "";
	} else {
		var p = Math.floor(perc*10000) / 100;
		var r = Math.floor(rate*10000) / 100;
		
		return `<div id="acc_perc" data-percent="${p}" data-rate="${r}">`+
			`蓄積ゲージ: ${p}% ${rate > 0 ? `[効果値: ${r}]` : ""}</div>`;
	}
	
}


// logを生成する
function create_log(fld, i) {
	var logtext = "<h3>turn: " + (i + 1) + "" + "</h3><div>";
	if (fld.Status.log[i] !== undefined) {
		for (var j = 0; j < fld.Status.log[i].length; j++) {
			logtext += fld.Status.log[i][j] + "<br/>";
		}
	}
	logtext += "</div>";
	return logtext;
}

// SSの残り表記を返却する
function ss_remain_text(fld, rem_turn, is_chfin) {
	// SS1, SS2
	var SS1 = rem_turn[0];
	var SS2 = rem_turn[1];
	// チャージ完了なら専用表記
	if (is_chfin) {
		return "CHARGE FULL";
	}
	// L精霊ならSS1,SS2表記
	else if (SS2 !== undefined) {
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
function totalturn_string(fld) {
	var f_st = fld.Status;
	if (f_st.finish && !f_st.fin_timeup) {
		var finish_ss = f_st.durturn[fld.Quest.aprnum - 1].ssfin
	} else {
		var finish_ss = false;
	}
	return (finish_ss ? (f_st.totalturn - 1) + "+SS" : f_st.totalturn.toString());
}

// 累計ターンの表記を返却する
function durturn_string(fld) {
	var popupstr = "";
	var disable_after = false;
	for (var i = 0; i < fld.Enemys.Popuplist.length; i++) {
		var t = "";
		var fs = fld.Status;
		var tu = fs.durturn[i];
		if (disable_after) {
			t = "X";
		} else if (!tu) {
			if (is_ally_alldeath(fld)) {
				t = "DD"; // DeaD
				disable_after = true;
			} else if (fs.fin_timeup) {
				t = "TU"; // TimeUp
				disable_after = true;
			} else {
				t = "?";
			}
		} else if (tu.ssfin){
			if (tu.turn != 1) {
				t = (tu.turn - 1).toString() + "+SS";
			} else {
				t = "SS";
			}
		} else {
			t = tu.turn.toString();
		}

		popupstr += t;
		if (i != fld.Enemys.Popuplist.length - 1) {
			popupstr += "-";
		}
	}
	return popupstr;
}

// 試走完了時のテキストを生成する
function simshow_create_fintext(fld, is_replace) {
	var rst = "";
	var nam = fld.Quest.name;
	var trn = durturn_string(fld).replace("+", is_replace ? "%2B" : "+");
	var tot = totalturn_string(fld).replace("+", is_replace ? "%2B" : "+");
	var is_fintimeup = fld.Status.fin_timeup;
	var kill_c = fld.Status.total_kill;
	var limit = fld.Status.limit_turn;
	var limitn = fld.Status.limit_now;

	if (!(limit > 0)) {
		rst = nam + " を " + tot + " ターン(" + trn + ") で突破！";
	} else if (is_fintimeup) {
		rst = nam + " で敵を " + kill_c + " 体撃破！[ 残り: 0/" + limit + " T ]";
	} else {
		rst = nam + " で敵を全て撃破！[ 残り: " + limitn + "/" + limit + " T ]";
	}
	return rst;
}

// ログ表示
function log_view() {
	$("#dialog_simlog").dialog("open");
}

// 乱数チェッカー表示
function rand_checker() {
	$("#dialog_randchecker").dialog("open");
}
function randcheck_selchange() {
	var si = $("#randcheck_act option:selected");
	if(si.attr("type") == "showp"){
		$("#rch_editpanel").show();
	} else {
		$("#rch_editpanel").hide();
	}
	
}
function randcheck_addact() {
	var si = $("#randcheck_act");
	var si_v = si.val();
	var pdata = $("#rch_editpanel").val();
	var add_num = si_v + (pdata ? "|" + pdata.replace(/|/g, "") : "") + "/";
	$("#randcheck_actdata").append(add_num);
	$("#randcheck_acts").append("<option>" + $("#randcheck_act option[value=" + si_v + "]").text() + "</option>");
	$("#rch_editpanel").val("");
}
function randcheck_alldelact() {
	$("#randcheck_actdata").text("");
	$("#randcheck_acts").html("");
}


// 味方精霊情報表示
function show_allystat(fld, n) {
	fld = fld || Field;
	if (!fld.Status.finish && n < fld.Allys.Deck.length) {
		$("#allystat_index").text(n + "");
		$("#dialog_allystatus").dialog("open");
	}
}

// ツイート
function tweet_result(fld) {
	fld = fld || Field;
	var win_opt = "menubar=no,toolbar=no,resizable=yes,scrollbars=no,width=640px,height=360px,top=40px,left=40px";
	// URL生成して開く
	if(fld.Status.result_enc){
		var vurl = absolutePath("/simulator/v/?id=" + fld.Status.result_enc);
	} else {
		var vurl = absolutePath("/simulator/" + location.search);
	}
	var text = //"このデッキを使って " +
			simshow_create_fintext(fld, true) + "%0A" + vurl;
	var tweeturl = "https://twitter.com/intent/tweet?hashtags=wzsim" + "&text=" + text;
	// 開く
	window.open(tweeturl, "tweet_result", win_opt);
}

// fieldのログを読む
function load_field(fld, i) {
	fld = fld || Field;
	// 読み込み前の戦闘数
	var target_bef = [];
	$.each(fld.Allys.Now, function (i, e) {
		target_bef[i] = { first: e.target[0], second: e.target[1] };
	});
	var btlct_bef = fld.Status.nowbattle;
	// 読み込み先取得
	var load_index = 0;
	if (i != 0) {
		load_index = i + Field_log.now_index;
		if (Field_log.is_ssindex && Field_log.Status[load_index]) {
			load_index + i;
		} else if (!Field_log.Status[load_index]) {
			load_index = Math.min(load_index, Field_log.length() - 1);
		}
	}

	if (load_index >= 0) {
		// 読み込み
		Field = Field_log.load(load_index);
		Field_log.is_ssindex = false;
		// 再表示
		sim_show(Field);
		// 戦闘数が読み込み前と違っていたらタゲリセット
		if (btlct_bef != Field.Status.nowbattle) {
			target_allselect(Field);
		} else {
			// 同じなら保存したログを読み込む
			$.each(Field.Allys.Now, function (i, e) {
				e.target[0] = target_bef[i].first;
				e.target[1] = target_bef[i].second;
			});
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
function target_allselect(fld, n) {
	fld = fld || Field;
	n = (n !== undefined ? n : $("#attack_target_sel").val());
	$("#attack_target_sel").val(n + "");
	$("div.enemy").removeClass("selected_target");
	for (var i = 0; i < fld.Allys.Deck.length; i++) {
		var now = fld.Allys.Now[i];
		now.target[0] = n;
		now.target[1] = n;
	}
	$("#enemy0" + (n + 1)).addClass("selected_target");
	setTimeout(function () {
		$("#enemy0" + (n + 1)).removeClass("selected_target");
	}, 2000);
}
