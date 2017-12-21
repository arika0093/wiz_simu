// 立ち回り確認関連の機能
$(function(){
	// get query
	var id = location.search.indexOf("?id=") == 0 ? 	location.search.substr(4) : null;
	var sid = location.search.indexOf("?sid=") == 0 ?	location.search.substr(5) : null;
	if (!id && !sid) {
		// ERROR
		errorShow();
		return;
	}
	
	// get data
	var type_str = (id ? "view_id" : "view_sh");
	$.ajax({
		type: "POST",
		url: "https://api.wiztools.net/result_sav.php",
		data: "tp=" + type_str + "&id=" + (id || sid),
		success: loadDeckDataFromResult,
	});
});

// 立ち回り詳細の情報からデッキ情報を取得する
function loadDeckDataFromResult(dat){
	var js = JSON.parse(dat);
	if(!js.success || js.no_registed == true || js.results == null){
		errorShow();
		return;
	}
	var js_r = js.results[0];
	deckdata_Load("?" + js_r.shorturl, showResultData(js_r));
}

// 返ってきたデータをまとめて表示する
function showResultData(js){
	return function(js_d){
		var rst = "";
		// デッキ情報をまとめる
		var deck = getCardsInfo(js_d);
		var dtable = createCardDataTable(deck);
		// 立ち回り情報をまとめる
		var act = JSON.parse(js.action);
		var action = createActionList(js, act);
		
		// クエスト名取得
		var qname = "";
		$.each(Quests, function(i,e){
			if(js.stage == e.id){
				qname = "<a href='/simulator/quest/?id=" + e.id + "' target='_blank'>" + e.name + "</a>";
			}
		});
		
		// 合成
		var actf = actionSpScoreAnalyze(js.turn, null, act);
		rst += "<div class='clearturn'>" + (qname ? qname + "<br/>" : "") + js.turn + "T (" + js.turn_detail +
			") [ Action-Factor: " + actf + " ]</div>" + dtable + action;
		
		$("dt#stage").html("立ち回り詳細");
		$("a#run_url").prop("href","/simulator/?" + js.shorturl);
		$("div#result").html(rst);
	};
}

// カード情報を配列にいれる
function getCardsInfo(ddata){
	var rst = [];
	$.each(ddata.deck, function(i, e){
		var crd_info = {};
		// Card
		crd_info.card = $.grep(Cards, function(c){
			return c.cardno == e.cardno;
		})[0];
		// マナ
		crd_info.mana = e.mana;
		// 潜在
		crd_info.awake = e.awake;
		crd_info.awake_def = e.awake_default;
		// レベル
		crd_info.level = e.level;
		crd_info.level_def = e.level_default;
		// 結晶
		crd_info.crystal = e.crystal;
		rst[i] = crd_info;
	})
	return rst;
}

// カード情報からtableを作成する
function createCardDataTable(crds){
	var h = "<div class='wraptb'><table class='cdtable'>";
	var dmax = 5;
	// 見出し
	for(var i=0; i < dmax; i++){
		h += "<th>Unit[" + (i+1) + "]</th>";
	}
	// 画像
	h += "<tr>"
	for(var i=0; i < dmax; i++){
		var c = crds[i].card;
		if(!c){
			continue;
		}
		h += "<td class='cardimgs'><a href='/search/detail/?id=" + c.cardno + "'><img class='chara_img' src='" +
			get_image_url(c.imageno, c.imageno_prefix) + "' title='" + c.name + "' /></a></td>";
	}
	h += "</tr><tr>"
	// Lv, マナ, 覚醒数
	for(var i=0; i < dmax; i++){
		var c = crds[i].card;
		if(!c){
			continue;
		}
		var mylv = (crds[i].level || -1);
		var lv_str = (mylv == -1 || (mylv == (c.islegend ? 110 : 90)) ? "MAX" : mylv);
		var aw_str = (crds[i].awake == -1 || crds[i].awake == crds[i].awake_def ? "MAX" : crds[i].awake);
		h += "<td class='c_status'>Lv:" + lv_str + " [+" + crds[i].mana + "]<br/>覚醒: " + aw_str + "</td>";
	}
	h += "</tr><tr>"
	// 結晶[1]
	for(var i=0; i < dmax; i++){
		var c = crds[i].card;
		if(!c){
			continue;
		}
		if(crds[i].crystal.length < 1){
			h += "<td class='c_crystal_none'></td>";
		} else {
			var btx = crds[i].crystal[0].name;
			var rtx = btx.replace(/\((?!仮).*?\)/g, "");
			rtx = rtx.replace(/\s*<.*?>/g, "");
			rtx = rtx.replace(/〈/g, "<br/>〈");
			h += "<td class='c_crystal' title='" + crds[i].crystal[0].display_text + "'>" + rtx + "</td>";
		}
	}
	h += "</tr><tr>"
	// 結晶[2]
	for(var i=0; i < dmax; i++){
		var c = crds[i].card;
		if(!c){
			continue;
		}
		if(crds[i].crystal.length < 2){
			h += "<td class='c_crystal_none'></td>";
		} else {
			var btx = crds[i].crystal[1].name;
			var rtx = btx.replace(/\((?!仮).*?\)/g, "");
			rtx = rtx.replace(/\s*<.*?>/g, "");
			rtx = rtx.replace(/〈/g, "<br/>〈");
			h += "<td class='c_crystal' title='" + crds[i].crystal[1].display_text + "'>" + rtx + "</td>";
		}
	}
	h += "</tr>"
	h += "</table></div>";
	return h;
}

// action情報から立ち回り一覧を作成する
function createActionList(js, act){
	var h = "<table class='action_lst'><th class='actb'>戦闘数</th><th class='actb'>ターン数</th><th class='actm'>行動</th>";
	var acts = createActionStrData(js, act);
	
	for(var i=0; i < acts.length; i++){
		var acts_b = acts[i];
		var same_b = false;
		for(var j=0; j < acts_b.length; j++){
			var acts_t = acts_b[j];
			var same_t = false;
			if(!acts_t){
				continue;
			}
			for(var k=0; k < acts_t.length; k++){
				var acts_k = acts_t[k];
				if(!acts_k || acts_k == ""){
					continue;
				}
				h += "<tr><td>" + (!same_b ? (i + 1) + "戦目" : "") + "</td>" +
					"<td>" + (!same_t ? (j + 1) + "T目" : "") + "</td>" +
					"<td>" + acts_k +"</td></tr>"
				same_b = same_t = true;
			}
		}
	}
	
	h += "</table>";
	return h;
}

// action情報をひとまず文字列配列に変換する
function createActionStrData(js, act){
	var tg = ["左", "中", "右", "左奥", "右奥"];
	var attr = ["火", "水", "雷", "光", "闇"];
	var allacts = [];
	var nowturn = 0;
	var nowbattle = 0;
	var c_rand = -1;
	// ターン数の推移を取得する
	var tdetail = js.turn_detail.replace(/SS/g, "1").split("-");
	// 1+SSとかの場合に対処
	$.each(tdetail, function(i,e){
		if(e.indexOf("+") >= 0){
			tdetail[i] = eval(tdetail[i]);
		}
	});
	
	// 行動を[現在のバトル数][現在のターン数][行動番目]の配列に突っ込んでいく
	act.forEach(function(turn, nt){
		var nowtarget = null;
		var t_h = "";
		var is_ntadd_flag = true;
		var is_answer_flag = false;
		if(!allacts[nowbattle]){
			allacts[nowbattle] = [];
		}
		turn.action.forEach(function(ac, di){
			var d_l = "";
			// 未使用領域なら初期化しておく
			if(!allacts[nowbattle][nowturn]){
				allacts[nowbattle][nowturn] = [];
			}
			// 行動種類で分類
			switch(ac.type){
				case "target":
					// タゲが前と同じでない時
					if(nowtarget != ac.target && JSON.stringify(nowtarget) != JSON.stringify(ac.target)){
						if(ac.target == -1){
							// ノータゲなら特になにもしない
							
						} else if(!$.isArray(ac.target)){
							// 配列でないなら(単タゲなら)素直に追加
							d_l = "全タゲ[" + tg[ac.target] + "]";
						} else {
							// 配列の場合ややこしくなる
							// とりあえず、最頻値を求める
							var allinone = [];
							$.each(ac.target, function(i,e){
								allinone = allinone.concat(e);
							});
							var mode = ArrayMath.mode(allinone);
							// そこから基準タゲを決定する
							var base_tg = (allinone.indexOf(-1) >= 0 ? -1 : mode);
							d_l = (base_tg != -1 ? "全タゲ[" + tg[base_tg] + "]" : "ターゲッティング: ");
							// 基準タゲから漏れている精霊をリストアップして追記
							$.each(ac.target, function(i,e){
								// 主タゲ
								var main_tg = e[0];
								// 副タゲ
								var sub_tg = e[1];
								// undefined(助っ人)なら未記載
								if(e[0] === undefined){
									d_l += "→Unit[" + (i+1) + "]自動"
								}
								// 主=副で、基準タゲが未指定(-1)なら主副同時記載
								if(main_tg != base_tg && main_tg == sub_tg && base_tg == -1){
									d_l += "→Unit[" + (i+1) + "]主副" + tg[main_tg];
								}
								// ずれていたら追記
								else {
									if(main_tg != base_tg){
										d_l += "→Unit[" + (i+1) + "]主" + tg[main_tg];
									}
									if(sub_tg != base_tg){
										d_l += "→Unit[" + (i+1) + "]副" + tg[sub_tg];
									}
								}
							});
							d_l = d_l.replace(/^→/, "");
							d_l = d_l.replace(/ターゲッティング: →/, "ターゲッティング: ");
						}
						d_l += "<br/>";
						nowtarget = ac.target;
					}
					// 乱数指定が存在し、前と異なる場合
					if(ac.const_rand && ac.const_rand != c_rand){
						d_l += "乱数指定[" + (ac.const_rand != -1 ? ac.const_rand : "random") + "]";
						d_l += "<br/>";
						c_rand = ac.const_rand;
					}
					break;
				case "answer":
					if(!ac.result){
						d_l = "(誤答)<br/>"
					}
					else {
						var ans_attr = get_attr_string(ac.attr, "/").replace(/属性/g, "");
						var asig_str = ac.asignore ? "(AS逃し)" : "";
						d_l = "回答" + asig_str + "[" + ans_attr + "]<br/>"
					}
					is_answer_flag = true;
					is_ntadd_flag = false;
					break;
				case "special":
					d_l = "Unit[" + (ac.index+1) + "]: SS発動<br/>"
					break;
				default:
					// nothing to do.
					break;
			}
			allacts[nowbattle][nowturn][di] = d_l.replace(/(^\s*<br\/>|<br\/>\s*$)/g, "");
			if(is_answer_flag){
				nowturn++;
			}
		});
		// 現在ターン増加フラグが立っているなら足す(SS抜けの場合に対処)
		if(is_ntadd_flag){
			nowturn++;
		}
		// turn_detailと照らし合わせて確認し、battle数を調節
		var tsum = 0;
		for(var b=0; b < nowbattle+1; b++){
			tsum += Number(tdetail[b]);
		}
		if(nowturn >= tsum){
			nowbattle++;
		}
		
	})
	return allacts;
}


// エラー出す
function errorShow(){
	$("a#run_url").hide();
	$("dt#stage").text("読み込みエラー");
	$("div#result").text("試走データを正常に取得することができませんでした。");
}