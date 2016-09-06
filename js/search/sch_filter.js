// -------------------------------
// 検索結果生成用の関数
// -------------------------------
var MatchResult = [];

// UIのクエリをObjectにまとめる
function schfl_create_queryobj() {
	var rst = {
		obj_type: "search/query",
	};
	// 基礎情報
	rst.name = $("#s_name").val();
	rst.name_q = Number($("#s_name_q").val());
	rst.attr_m = Number($("#s_attr_m").val());
	rst.attr_s = Number($("#s_attr_s").val());
	rst.species = Number($("#s_spec").val());
	rst.disttype = $("#is_dist").prop("checked") ? 1 :
		$("#is_nodist").prop("checked") ? 2 : 0;
	// AS
	var as_mc = $("#sch_as_chain").val();
	rst.as_types = schfl_textarr_from_msel(".sch_as_type option:selected");
	rst.as_name = $("#s_astext").val();
	rst.as_maxchain = as_mc.length > 0 ? Number(as_mc) : -1;
	rst.as_ch_cond = Number($("#sch_asc_cond").val());
	rst.as_search_ao = Number($("#as_schcond").val());
	// SS
	var ss_mc = $("#sch_ss_turn").val()
	rst.ss_types = schfl_textarr_from_msel(".sch_ss_type option:selected");
	rst.ss_name = $("#s_sstext").val();
	rst.ss_maxturn = ss_mc.length > 0 ? Number(ss_mc) : -1;
	rst.ss_fastskl = $("#sch_ssturn_fast").prop("checked");
	rst.ss_search_ao = Number($("#ss_cond").val());
	rst.ss_target = Number($("#sch_ss_target").val());
	// Awake
	rst.awake_types = schfl_textarr_from_msel(".sch_aw_type option:selected");

	return rst;
}

// 複数項目を含むセレクタからtext()の配列を返却する
function schfl_textarr_from_msel(slt) {
	return $(slt).map(function (i, e) {
		var t = $(this).text();
		var v = $(this).val();
		return v != -1 ? t : null;
	}).get();
}

// 検索かけ & 結果表示
function schfl_show_result() {
	// クエリ取得
	var q = location.search;
	if (!q || q == "") {
		return false;
	}
	q = q.indexOf("?q=") == 0 ? q.substr(3) : q;
	// get
	deckdata_LoadUrl(q, function (result) {
		// parse
		var js = JSON.parse(result);
		var obj = js.long.length > 0 ? JSON.parse(js.long) : null;
		// Cardsから検索
		var rst_cards = schfl_grep(obj);
		var st = searchText(obj)
		// imageno順にソート
		rst_cards.sort(function (a, b) {
			return (a.imageno < b.imageno ? 1 : -1);
		});
		// 件数が少ないなら詳細、多いならアイコンのみ表示
		if (rst_cards.length <= 3) {
			schfl_grepshow(rst_cards ,st);
		} else {
			schfl_grepshow_icon(rst_cards ,st);
		}
		MatchResult = rst_cards;
	});
}

// 渡されたObjに沿ってCardsから絞り込み
function schfl_grep(obj) {
	if (!obj || obj.obj_type != "search/query") {
		return null;
	}
	return $.grep(Cards, function (e) {
		var rst = true;
		// 表示しない精霊ならfalse
		rst = rst && (!e.disable);
		// 名前絞り込み
		if (obj.name.length > 0) {
			// 検索条件に応じて振り分け
			switch (obj.name_q) {
				case 0:
					// 部分一致
					rst = rst && e.name.indexOf(obj.name) >= 0;
					break;
				case 1:
					// 完全一致
					rst = rst && e.name == obj.name;
					break;
				case 2:
					// 含まない
					rst = rst && e.name.indexOf(obj.name) < 0;
					break;
			}
		}
		// 属性/種族絞り込み
		if (obj.attr_m == -2 || obj.attr_m != obj.attr_s) {
			// 通常時はAND検索
			if (obj.attr_m >= 0) {
				rst = rst && (e.attr[0] == obj.attr_m);
			}
			if (obj.attr_s >= -1) {
				rst = rst && (e.attr[1] == obj.attr_s || (obj.attr_s == 20 && e.attr[1] >= 3) || (obj.attr_s >= 99 && e.attr[1] >= 0));
			}
		} else {
			// 主属性 = 副属性指定時はOR検索
			var attr_rst = false;
			if (obj.attr_m >= 0) {
				attr_rst = attr_rst || (e.attr[0]== obj.attr_m);
			}
			if (obj.attr_s >= -1) {
				attr_rst = attr_rst || (e.attr[1] == obj.attr_s);
			}
			rst = rst && attr_rst;
		}
		if (obj.species >= 0) {
			rst = rst && (e.species[0] == obj.species);
		}
		// 配布チェック
		rst = rst && (obj.disttype != 1 || e.is_dist) && (obj.disttype != 2 || !e.is_dist);
		// AS絞り込み
		rst = rst && (schfl_grep_as(obj, e.as1) || schfl_grep_as(obj, e.as2));
		// SS絞り込み
		var ssrst = false;
		if (obj.ss_target <= 0) {
			// SS1
			ssrst = ssrst || schfl_grep_ss(obj, e.ss1, e);
		}
		if (obj.ss_target >= 0) {
			// SS2
			ssrst = ssrst || schfl_grep_ss(obj, e.ss2, e);
		}
		rst = rst && ssrst;
		// 潜在絞り込み
		rst = rst && (schfl_grep_awake(obj, e.awakes) || schfl_grep_awake(obj, e.Lawake));
		// 結果返却
		return rst;
	});
}

// AS絞り込み検索
function schfl_grep_as(obj, as) {
	if (!as || !as.proc) {
		return false;
	}
	// 条件チェック
	var rst = true;
	// AS説明部分一致
	if (obj.as_name) {
		rst = rst && (as.desc.indexOf(obj.as_name) >= 0);
	}
	// ASを1次元配列に落としこむ
	var arr_as = [];
	for (var i in as.proc) {
		if (as.proc[i] && as.proc[i].length > 0) {
			for (var j in as.proc[i]) {
				arr_as.push(as.proc[i][j]);
			}
		} else {
			arr_as.push(as.proc[i]);
		}
	}
	// 各AS定義についてチェック
	rst = rst && $.grep(arr_as, function (e) {
		var grep_rst = true;
		if (!e) { return false; }
		// 発動最大チェイン数チェック
		switch (obj.as_ch_cond) {
			case 0:
				// 以下
				grep_rst = grep_rst && (obj.as_maxchain < 0 || e.chain <= obj.as_maxchain);
				break;
			case 1:
				// 以上
				grep_rst = grep_rst && (obj.as_maxchain < 0 || e.chain >= obj.as_maxchain);
				break;
			case 2:
				// 一致
				grep_rst = grep_rst && (obj.as_maxchain < 0 || e.chain == obj.as_maxchain);
				break;
		}
		// 条件ASのそれぞれについて確認
		if (e && obj.as_types && obj.as_types.length > 0) {
			var greps = $.grep(obj.as_types, function (as_type) {
				var ast = sfdef_as_namelist[as_type];
				// type不一致ならそれ以上見ない
				if (ast.type && e.type != ast.type && ast.type !== null) {
					return false;
				}
				// checkを通す
				return !ast.check || ast.check(e);
			});
			// AND/ORによって処理を変える
			if (obj.as_search_ao == 0) {
				// AND
				grep_rst = grep_rst && (obj.as_types.length <= 0 || greps.length == obj.as_types.length);
			} else {
				// OR
				grep_rst = grep_rst && (obj.as_types.length <= 0 || greps.length > 0);
			}
		}
		// grep result
		return grep_rst;
	}).length > 0;
	// return result
	return rst;
}

// SS絞り込み検索
function schfl_grep_ss(obj, ss, card) {
	if (!ss || !ss.proc) {
		return false;
	}
	// 条件チェック
	var rst = true;
	// SS説明部分一致
	if (obj.ss_name) {
		rst = rst && (ss.desc.indexOf(obj.ss_name) >= 0);
	}
	// 発動ターン確認
	var fsturn = obj.ss_fastskl ? has_fastnum(card) : 0;
	rst = rst && (obj.ss_maxturn < 0 || obj.ss_maxturn >= ss.turn - fsturn);
	// 各SS定義についてチェック
	var checksheet = $.extend(true, [], obj.ss_types);
	var grp_ss = $.grep(ss.proc, function (eb) {
		var grep_rst = true;
		if (!eb) {
			return false;
		}
		// 条件分岐SSなら、それぞれの引数についてチェック
		var es = [];
		if (eb.is_cond) {
			var eb_ps = [eb.p1, eb.p2, eb.p3, eb.p4];
			$.each(eb_ps, function (i, g) {
				if (g && g.is_skill) {
					es.push(g);
				}
			});
		} else {
			es = [eb];
		}
		$.each(es, function (i, e) {
			// 条件SSのそれぞれについて確認
			if (obj.ss_types && obj.ss_types.length > 0) {
				var greps = $.grep(obj.ss_types, function (ss_type) {
					if (obj.ss_types.length <= 0) {
						return true;
					}
					var sst = sfdef_ss_namelist[ss_type];
					var ischeck = false;
					// type一致ならcheck関数を通す
					if (!$.isArray(sst.proc)) {
						ischeck = (e.name == sst.proc || (e.name == sst && !sst.proc) || sst.proc === null);
					} else {
						ischeck = $.grep(sst.proc, function (f) {
							return e.name == f;
						}).length > 0;
					}
					if (ischeck) {
						var rst = !sst.check || sst.check(e, ss);
						if (rst) {
							var sp_index = checksheet.indexOf(ss_type);
							if(sp_index >= 0){
								checksheet.splice(sp_index, 1);
							}
						}
						return rst;
					}
					return false;
				});
				grep_rst = grep_rst && (obj.ss_types.length <= 0 || greps.length > 0);
			}
		});
		// grep result
		return grep_rst;
	});
	// AND/ORによって処理を変える
	rst = rst && checksheet.length <= (obj.ss_search_ao == 0 ? 0 : Math.max(obj.ss_types.length - 1, 0));
	// return result
	return rst;
}

// 潜在絞り込み検索
function schfl_grep_awake(obj, awake) {
	if (!awake || awake.length <= 0) {
		return false;
	}
	var o_type = obj.awake_types[0];
	if (!o_type) {
		return true;
	}
	return $.grep(awake, function (e) {
		var m_type = (e.type == sfdef_aw_namelist[o_type].type);
		return m_type && sfdef_aw_namelist[o_type].check(e);
	}).length > 0;
}


// 得られた結果を表示する関数
function schfl_grepshow(cs, st) {
	cs = cs || MatchResult;
	var div = $("#search_result");
	var html = "";
	html += st + "<br>";
	if (cs.length <= 0) {
		html += "該当結果: 0件";
	} else {
		for (var i = 0; i < cs.length; i++) {
			var c = cs[i];
			var as = c.islegend ? c.as2 : c.as1;
			var ss = c.islegend ? c.ss2 : c.ss1;
			var as_h = schfl_genhtml_skill("AS", as);
			var ss_h = schfl_genhtml_skill("SS", ss, c, true);
			html +=
				"<div class='rst_item attr_b" + c.attr[0] + "'><div class='head clearfix'>"+
				"<a class='c_name' href='/search/detail/?id=" + c.cardno + "'>" + c.name +
				"</a><p class='subdata'>HP: " + c.hp + " / ATK: " + c.atk + " / Cost: " + c.cost +
				" / 種族: " + Species[c.species[0]] + "</p></div><div class='body clearfix'>" +
				"<div class='attr attr_" + c.attr[0] + "' />" +
				"<div class='attr attr_" + (c.attr[1] >= 0 ? c.attr[1] : c.attr[0]) + "' />" +
				"<img class='ch_img' src='" + get_image_url(c.imageno) + "' />" +
				"<div class='skl_set'>" + as_h + ss_h + "</div></div></div>";
		}
	}
	div.html(html);
	// item show/hidden
	$("#show_d").hide();
	$("#show_i").show();
	return;
}

// AS/SSの表示HTML生成関数
function schfl_genhtml_skill(disp, skl, c, is_ss) {
	var skill_t = "";
	if (!skl) {
		return "";
	}
	if (is_ss) {
		// SS
		var f = has_fastnum(c);
		if (c.islegend) {
			skill_t += c.ss1.turn + "-" + c.ss2.turn;
			if (f > 0) {
				skill_t += " (" + Math.max(c.ss1.turn - f, 0) + "-" + Math.max(c.ss2.turn - f, 0) + ")";
			}
		} else {
			skill_t += c.ss1.turn;
			if (f > 0) {
				skill_t += " (" + Math.max(c.ss1.turn - f, 0) + ")";
			}
		}
	}
	var rst =
		"<div class='skill_" + disp + (is_ss ? " clearfix" : " ") + "'><p class='desc_" +
		disp + "'>" + skl.desc + "</p>" +
		(is_ss ? "<p class='turn_" + disp + "'>" + skill_t + "</p>" : "") + "</div>";
	return rst;
		
}

// 潜在能力の表示HTML生成関数
function schfl_genhtml_awake(aws) {
	var rst = "";
	for (var i = 0; i < aws.length; i++) {
		rst += "<p class='aw'>" + aws[i].name + "</p>";
	}
	return rst;
}


// iconのみを並べる
function schfl_grepshow_icon(cs, st) {
	cs = cs || MatchResult;
	var div = $("#search_result");
	var html = "";
	html += st + "<br>";
	if (cs.length <= 0) {
		html += "該当結果: 0件";
	} else {
		for (var i = 0; i < cs.length; i++) {
			var c = cs[i];
			html += "<a href='/search/detail/?id=" + c.cardno + "'>" +
				"<img class='ch_lists' src='" + get_image_url(c.imageno) + "' title='" + c.name + "' /></a>";
		}
	}
	div.html(html);
	// item show/hidden
	$("#show_i").hide();
	$("#show_d").show();
	return;
}


var cons = {
    name_q : {
        0:"を含む",
        1:"と一致する",
        2:"を含まない"
    },
    attr_m : {
        0:"火",
        1:"水",
        2:"雷"
    },
    attr_s : {
        "-1":"無し",
        "99":"有り",
        "0":"火",
        "1":"水",
        "2":"雷",
        "3":"光",
        "4":"闇",
        "20":"光/闇",
    },
    species : {
        "0":"龍族",
        "1":"神族",
        "2":"魔族",
        "3":"天使",
        "4":"妖精",
        "5":"亜人",
        "6":"物質",
        "7":"魔法生物",
        "8":"戦士",
        "9":"術士",
        "10":"アイテム",
        "11":"AbCd"
    },
    as_ch_cond : {
        "0":"以下",
        "1":"以上",
        "2":"一致",
    },
    "ss_target" : {
        "0":"SS1/SS2両方含む",
        "-1":"SS1のみ",
        "1":"SS2のみ",
    },
	"disttype" : {
         "0":"全精霊から検索",
		 "1":"配布精霊のみを検索",
		 "2":"配布精霊以外を検索"
	}
}
function searchText(q){
	console.log(q)
    // search_queryを受け取って検索条件文字列を返す
    // 例：console.log(searchText(schfl_create_queryobj()));
    var outp = ""
    if(q.name != ""){
        outp += "精霊名=\"" + q.name + "\""
        outp += appOpt(q, cons, "name_q", "")
    }
    outp += appOpt(q, cons, "attr_m", "主属性")
    outp += appOpt(q, cons, "attr_s", "複属性")
    outp += appOpt(q, cons, "species", "種族")
    if(q.as_name != ""){
        outp += "AS説明文=\"" + q.as_name + "\"を含む, "
    }
    if(q.as_maxchain >= 0){
        outp += "AS発動チェイン=" + q.as_maxchain + ""
        outp += appOpt(q, cons, "as_ch_cond", "")
    }
    if(q.as_types.length > 0){
        if(q.as_types.length == 1){
            outp += "AS種類=" + q.as_types[0]
        }else{
            var delimitor = ["AND", "OR"][q.as_search_ao]
            outp += "AS種類=[" + q.as_types.join(" " + delimitor + " ") + "]"
        }
        outp+=", "
    }
    var ssEnableFlag = false;
    if(q.ss_name != ""){
        ssEnableFlag = true;
        outp += "SS説明文=\"" + q.ss_name + "\"を含む, "
    }
    if(q.ss_maxturn >= 0){
        ssEnableFlag = true;
        outp += "SS発動"
        if(q.ss_fastskl){
            outp += "FS込"
        }
        outp += q.ss_maxturn + "ターン, "
    }
    if(q.ss_types.length > 0){
        ssEnableFlag = true;
        if(q.ss_types.length == 1){
            outp += "SS種類=" + q.ss_types[0]
        }else{
            var delimitor = ["AND", "OR"][q.ss_search_ao]
            outp += "SS種類 = [" + q.ss_types.join(" " + delimitor + " ") + "]"
        }
        outp += ", "
    }
    if(ssEnableFlag){
        outp += appOpt(q, cons, "ss_target", "SS対象")
    }
    if(q.awake_types.length > 0){
        if(q.awake_types.length == 1){
            outp += "潜在種類=" + q.awake_types[0]
        }else{
            var delimitor = ["AND", "OR"][q.awake_search_ao]
            outp += "潜在種類=[" + q.awake_types.join(" " + delimitor + " ") + "]"
        }
        outp+=", "
    }
    outp += appOpt(q, cons, "disttype", "")
    outp = outp == "" ? "条件なし" : outp.slice(0, -2)
    return outp
}
function getqck(q, c, k){
    return c[k][q[k]]
}
function appOpt(q, c, k, title){
    var tmpStr = getqck(q, c, k);
    if(tmpStr){
        title = title != "" ? title + "=" : title
        return title + tmpStr + ", "
    }else{
        return ""
    }
}