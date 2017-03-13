// for timer
var _Timer = undefined;

// 現在の状況を表示する
function sim_show() {
	// 自動試走中なら何もしない
	if (Field.Status.isautomode) {
		return;
	}
	// timer reset
	if (_Timer) {
		clearInterval(_Timer);
	}
	// target-effect reset
	$("div.enemy").removeClass("selected_target");

	// sim_info_turn
	if (Field.Status.chain_status == 1) {
		var chain_state = "(保護)";
	} else if (Field.Status.chain_status == -1) {
		var chain_state = "(封印)";
	} else {
		var chain_state = "";
	}
	$("#sim_turns").html(
		"turn: " + totalturn_string() + " / chain: " + Field.Status.chain
			+ chain_state + (Field.Status.finish ? " / Act-Factor: " + Field.Status.speedscore :
			" / " + Field.Status.nowbattle + "戦目 (" + durturn_string() + ")")
	);

	// sim_info_status
	$("#sim_info_status").html(Field.Quest.name +
		" [<a target='_blank' href='/simulator/quest/?id=" + Field.Quest.id + "'>敵行動</a> /" +
		" <a target='_blank' href='/simulator/d/?qid=" + Field.Quest.id + "'>投稿デッキ</a>]"
	);

	// sim_result
	if (is_ally_alldeath()) {
		$("#dialog_gameover").dialog("open");
	} else if (Field.Status.finish /*&& !Field.Status.isautomode*/) {
		$("#sim_share").fadeIn("slow");
		$("#sim_rndview").hide();
		$("#dialog_simfinish_popup").dialog("open");
	} else {
		$("#sim_share").fadeOut("slow");
		$("#sim_rndview").fadeIn("slow");
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
			// 各種指定
			$("#ally0" + (i + 1) + "_attr_main").attr("class", "attr_" + dec.attr[0]);
			$("#ally0" + (i + 1) + "_attr_sub").attr("class", "attr_" + (dec.attr[1] != -1 ? dec.attr[1] : dec.attr[0]));
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
			var sst = get_ssturn(dec, now);
			if (is_ss_active(Field, i)) {
				// SS発動可能
				$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button");
				$("#ally0" + (i + 1) + "_ss_button").text(ss_remain_text(sst, now.flags.ss_chargefin));
				$("#ally0" + (i + 1) + "_ss_button").attr("disabled", false);
			} else {
				// SS発動不可
				$("#ally0" + (i + 1) + "_ss_button").attr("class", "ally_ss_button_disabled");
				$("#ally0" + (i + 1) + "_ss_button").text(ss_remain_text(sst));
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
	var enemys_dat = GetNowBattleEnemys();
	for (var i = 0; i < 3; i++) {
		var e = enemys_dat[i];
		if (e !== undefined) {
			// 各種指定
			$("#enemy0" + (i + 1) + "_attr_main").attr("class", "attr_" + e.attr);
			$("#enemy0" + (i + 1) + "_attr_sub").attr("class", "attr_" + e.attr);
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
					var now = Field.Allys.Now[drg_index];
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
			for (var l = 0; l < e.turn_effect.length; l++) {
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
	var bbefi = Field.Quest.battle_before_def + 1;
	if (bbefi >= 0) {
		$("#panel_add_sel").val(bbefi);
	}
	// sim_panel
	$(".panel_button").attr("disabled", Field.Status.finish);
	// sim_field_move
	$("#fld_move_before").attr("disabled", (Field_log.now_index == 0));
	$("#fld_move_after").attr("disabled", (Field_log.now_index >= Field_log.length() - 1));
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
	for (var p in Field.Allys.Deck) {
		var c = Field.Allys.Deck[p];
		var paneb_aw = card_paneb(c);
		if (Number(p) >= 0) {
			cost_total += card_cost(c);
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
		width: 550,
		height: 580,
		open: function(e, ui){
			// sim_log
			var logtext = "";
			var tt = Field.Status.totalturn;
			var log_stat = Field.Status.log[tt] !== undefined ? tt : tt - 1;
			for (var i = 0 ; i <= log_stat; i++) {
				var l_t = create_log(i);
				l_t = l_t.replace(/\/\/{blue}/g, "<span class='blue'>");
				l_t = l_t.replace(/\/\/{orange}/g, "<span class='orange'>");
				l_t = l_t.replace(/{}\/\//g, "</span>");
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
			$("#allystat_name").html((n + 1) + ": " +
				"<a target='_blank' href='/search/detail/?id=" + card.cardno + "'>" + card.name +
				"</a><br/><div style='text-align: right;'>HP: " + now.nowhp + "/" + now.maxhp + ", ATK: " + now.atk + "</div>");
			$("#ally_tefflist").html(li_t);
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
			var sst = get_ssturn(card, now);
			var ss_disabled = $.grep(now.turn_effect, function (e) {
				return e.ss_disabled;
			}).length > 0;
			als_ssbtn.text(ss_remain_text(sst, now.flags.ss_chargefin));
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
			var trn = durturn_string();
			var tot = totalturn_string();
			var text = simshow_create_fintext();
			// hide
			$(".ui-dialog-titlebar").hide();
			// tweet data
			$("#simfinish_tweettext").html(
				text + "<br/><div class='sh_url'>" + absolutePath("/simulator/" + location.search) + "</div> #wzsim"
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
					actl_send_share(Field.Status.result_id, user, comm, function (rst) {
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
				load_field(-1);
				$(this).dialog("close");
			},
			"始めからやり直す": function () {
				load_field(0);
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
				// task
				var tobj = {
					"panel_fire":		[panel, [0]],
					"panel_water":		[panel, [1]],
					"panel_thunder":	[panel, [2]],
					"alltarget_left":	[target_allselect, 0],
					"alltarget_center":	[target_allselect, 1],
					"alltarget_right":	[target_allselect, 2],
					"unit1_ss":			[ss_push, 0],
					"unit2_ss":			[ss_push, 1],
					"unit3_ss":			[ss_push, 2],
					"unit4_ss":			[ss_push, 3],
					"unit5_ss":			[ss_push, 4],
				};
				// get task-do-array
				var task_doarr = $("#randcheck_actdata").text().split(",");
				var test_rnum = Number($("#randcheck_rnum").val());
				var is_calcdisp = $("#randcheck_disp").prop("checked");
				var disp_num = 5;
				// save before
				var bef_f = $.extend(true, {}, Field);
				var bef_battle = bef_f.Status.nowbattle;
				// test
				var break_counts = [];
				for (var d = 0; d < (is_calcdisp ? 5 : 1) ; d++) {
					break_counts[d] = 0;
					for (var i = 0; i < test_rnum; i++) {
						// Fieldにバックアップしておいたbeforeをコピー
						Field = $.extend(true, {}, bef_f);
						Field.Status.isautomode = true;
						Field.Status.seed = Math.random(1, 100000);
						// タスクを実行
						for (var j = 0; j < task_doarr.length; j++) {
							var ti = task_doarr[j];
							if (ti == "") { continue; }
							tobj[ti][0](tobj[ti][1]);
						}
						// 結果を確認
						var aft_battle = Field.Status.nowbattle;
						break_counts[d] += ((aft_battle - bef_battle > 0 || Field.Status.finish) ? 1 : 0);
					}
				}
				// 終了後処理
				Field.Status.isautomode = false;
				sim_show();
				// rst show
				var rst_tx = "";
				if (is_calcdisp) {
					var sum = function (arr) {
						return arr.reduce(function (prev, current, i, arr) {
							return prev + current;
						});
					};
					var ave = function (arr, fn) {
						return sum(arr, fn)/arr.length;
					}(break_counts);
					var disp = function (arr) {
						var varia = 0;
						for (i = 0; i < arr.length; i++) {
							varia = varia + Math.pow(arr[i] - ave, 2);
						}
						var v = (varia / (arr.length-1));
						return Math.sqrt(v);
					}(break_counts);
					rst_tx = "Result: <br/>Average±SD = " + ave.toFixed(2) + "±" + disp.toFixed(2) + " / " + test_rnum +
						" (" + (ave*100/test_rnum).toFixed(2) + "±" + (disp*100/test_rnum).toFixed(2) + "%)";
				} else {
					rst_tx = "Result: " + break_counts[0] + " / " + test_rnum +
						" (" + (break_counts[0] * 100 / test_rnum) + "%)";
				}
				$("#randcheck_rsttext").html(rst_tx);
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
		width: 300,
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
function ss_remain_text(rem_turn, is_chfin) {
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
function totalturn_string() {
	var f_st = Field.Status;
	if (f_st.finish && !f_st.fin_timeup) {
		var finish_ss = f_st.durturn[Field.Quest.aprnum - 1].ssfin
	} else {
		var finish_ss = false;
	}
	return (finish_ss ? (f_st.totalturn - 1) + "+SS" : f_st.totalturn.toString());
}

// 累計ターンの表記を返却する
function durturn_string() {
	var popupstr = "";
	var disable_after = false;
	for (var i = 0; i < Field.Enemys.Popuplist.length; i++) {
		var t = "";
		var fs = Field.Status;
		var tu = fs.durturn[i];
		if (disable_after) {
			t = "X";
		} else if (!tu) {
			if (is_ally_alldeath()) {
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
		if (i != Field.Enemys.Popuplist.length - 1) {
			popupstr += "-";
		}
	}
	return popupstr;
}

// 試走完了時のテキストを生成する
function simshow_create_fintext(is_replace) {
	var rst = "";
	var nam = Field.Quest.name;
	var trn = durturn_string().replace("+", is_replace ? "%2B" : "+");
	var tot = totalturn_string().replace("+", is_replace ? "%2B" : "+");
	var is_fintimeup = Field.Status.fin_timeup;
	var kill_c = Field.Status.total_kill;
	var limit = Field.Status.limit_turn;
	var limitn = Field.Status.limit_now;

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
function randcheck_addact() {
	var si = $("#randcheck_act");
	var si_v = si.val();
	var add_num = si_v + ",";
	$("#randcheck_actdata").append(add_num);
	$("#randcheck_acts").append("<option>" + $("#randcheck_act option[value=" + si_v + "]").text() + "</option>");
}
function randcheck_alldelact() {
	$("#randcheck_actdata").text("");
	$("#randcheck_acts").html("");
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
	var url = absolutePath("/simulator/" + location.search);
	var text = //"このデッキを使って " +
			simshow_create_fintext(true) + "%0A" + url;
	var tweeturl = "https://twitter.com/intent/tweet?hashtags=wzsim" + "&text=" + text;
	// 開く
	window.open(tweeturl, "tweet_result", win_opt);
}

// fieldのログを読む
function load_field(i) {
	// 読み込み前の戦闘数
	var target_bef = [];
	$.each(Field.Allys.Now, function (i, e) {
		target_bef[i] = { first: e.target[0], second: e.target[1] };
	});
	var btlct_bef = Field.Status.nowbattle;
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
		sim_show();
		// 戦闘数が読み込み前と違っていたらタゲリセット
		if (btlct_bef != Field.Status.nowbattle) {
			target_allselect();
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
function target_allselect(n) {
	n = (n !== undefined ? n : $("#attack_target_sel").val());
	$("#attack_target_sel").val(n + "");
	$("div.enemy").removeClass("selected_target");
	for (var i = 0; i < Field.Allys.Deck.length; i++) {
		var now = Field.Allys.Now[i];
		now.target[0] = n;
		now.target[1] = n;
	}
	$("#enemy0" + (n + 1)).addClass("selected_target");
	setTimeout(function () {
		$("#enemy0" + (n + 1)).removeClass("selected_target");
	}, 2000);
}

// 相対パス → 絶対パス
function absolutePath(path) {
	var e = document.createElement('span');
	e.insertAdjacentHTML('beforeend', '<a href="' + path + '" />');
	return e.firstChild.href;
}
