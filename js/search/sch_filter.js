// -------------------------------
// 検索結果生成用の関数
// -------------------------------
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
	// AS
	var as_mc = $("#sch_as_chain").val();
	rst.as_types = schfl_textarr_from_msel(".sch_as_type option:selected");
	rst.as_name = $("#s_astext").val();
	rst.as_maxchain = as_mc.length > 0 ? Number(as_mc) : -1;
	rst.as_search_ao = Number($("#as_schcond").val());
	// SS
	var ss_mc = $("#sch_ss_turn").val()
	rst.ss_types = schfl_textarr_from_msel(".sch_ss_type option:selected");
	rst.ss_name = $("#s_sstext").val();
	rst.ss_maxturn = ss_mc.length > 0 ? Number(ss_mc) : -1;
	rst.ss_fastskl = $("#sch_ssturn_fast").prop("checked");
	rst.ss_search_ao = Number($("#ss_cond").val());
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
		// imageno順にソート
		rst_cards.sort(function (a, b) {
			return (a.imageno < b.imageno ? 1 : -1);
		});
		schfl_grepshow(rst_cards);
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
			var name_q = obj.name_q;		// 部分一致か完全一致か
			rst = rst && (name_q == 0 ? e.name.indexOf(obj.name) >= 0 : e.name == obj.name);
		}
		// 属性/種族絞り込み
		if (obj.attr_m >= 0) {
			rst = rst && (e.attr[0] == obj.attr_m);
		}
		if (obj.attr_s >= -1) {
			rst = rst && (e.attr[1] == obj.attr_s);
		}
		if (obj.species >= 0) {
			rst = rst && (e.species[0] == obj.species);
		}
		// AS絞り込み
		rst = rst && (schfl_grep_as(obj, e.as1) || schfl_grep_as(obj, e.as2));
		// SS絞り込み
		rst = rst && (schfl_grep_ss(obj, e.ss1, e) || schfl_grep_ss(obj, e.ss2, e));
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
		if (as.proc[i].length > 0) {
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
		// 発動最大チェイン数チェック
		grep_rst = grep_rst && (obj.as_maxchain < 0 || e.chain <= obj.as_maxchain);
		// 条件ASのそれぞれについて確認
		if (obj.as_types && obj.as_types.length > 0) {
			var greps = $.grep(obj.as_types, function (as_type) {
				var ast = sfdef_as_namelist[as_type];
				// type不一致ならそれ以上見ない
				if (ast.type && e.type != ast.type) {
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
	rst = rst && $.grep(ss.proc, function (e) {
		var grep_rst = true;
		// 条件SSのそれぞれについて確認
		if (obj.ss_types && obj.ss_types.length > 0) {
			var greps = $.grep(obj.ss_types, function (ss_type) {
				var sst = sfdef_ss_namelist[ss_type];
				// type一致ならcheck関数を通す
				if (e.name == sst.proc || (e.name == sst && !sst.proc) || sst.proc === null) {
					return !sst.check || sst.check(e, ss);
				}
				return false;
			});
			// AND/ORによって処理を変える
			if (obj.ss_search_ao == 0) {
				// AND
				grep_rst = grep_rst && (obj.ss_types.length <= 0 || greps.length == obj.ss_types.length);
			} else {
				// OR
				grep_rst = grep_rst && (obj.ss_types.length <= 0 || greps.length > 0);
			}
		}
		// grep result
		return grep_rst;
	}).length > 0;
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
function schfl_grepshow(cs) {
	var div = $("#search_result");
	var html = "";
	if (cs.length <= 0) {
		html += "該当結果: 0件";
	} else {
		for (var i = 0; i < cs.length; i++) {
			var c = cs[i];
			html += "<img class='chara' src='" + get_image_url(c.imageno)
				+ "' title='" + c.name + "' />";
		}
	}
	div.html(html);
	return;
}
