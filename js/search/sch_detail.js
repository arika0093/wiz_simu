var Detail_view = false;

function sch_show_detail() {
	// クエリ取得
	var id_q = location.search;
	if (!id_q || id_q == "") {
		// 指定されていなかったらランダム取得
		var rand_ix = Math.floor(Math.random() * Cards.length);
		var id = Cards[rand_ix].cardno;

		history.replaceState('', '', "/search/detail/?id=" + id);
	} else {
		var id = id_q.indexOf("?id=") == 0 ? id_q.substr(4) : -10;
	}
	// 抽出
	var cs = $.grep(Cards, function (e) {
		return e.cardno == id;
	});
	// check
	if (cs.length <= 0) {
		$("dl.List").text("ERROR: 未実装の精霊が指定されました。");
		return false;
	}

	var c = cs[0];
	// title set
	document.title = "「" + c.name + "」の詳細情報 - WizTools";
	applyCardData(c);

	// data output
	var dtb = $("#datatable");

	if (Detail_view) {
		var d_html = "<tr><th id='dt_key'>key</th><th>value</th>";
		for (var key in c) {
			d_html += "<tr><td id='dt_key'>" + key + "</td><td>" + jsobj_vardump(c[key], 0) + "</td></tr>";
		}
		dtb.html(d_html);
	} else {
		dtb.text("(定義データの表示は[表示切り替え]を押すことで切り替わります)");
	}

}

// 精霊データを代入する
function applyCardData(c){
// basic data output
	var attr_txt = "主: " + get_attr_string(c.attr[0]) +
		(c.attr[1] != -1 ? " / 副: " + get_attr_string(c.attr[1]) : "");
	$("#bs_image").prop("src", get_image_url_b(c.imageno, c.imageno_prefix));
	$("#c_name").text(c.name);
	$("#c_attr").text(attr_txt);
	$("#c_hp").text("HP: " + c.hp);
	$("#c_atk").text("攻撃力: " + c.atk);
	$("#c_cost").text("コスト: " + c.cost);
	$("#c_breed").text("種族: " + get_spec_string(c.species[0]));
	// awakes
	$("#awakes").html(schfl_genhtml_awake(c.awakes));
	// as
	$("#as_1").html("AS1: " + schfl_genhtml_skill("as1", c.as1, c, false));
	// ss
	$("#ss_1").html("SS1: " + schfl_genhtml_skill("ss1", c.ss1, c, !c.islegend));
	// legend
	if (c.islegend) {
		$("#Lawakes").html(schfl_genhtml_awake(c.Lawake));
		$("#as_2").html("AS2: " + schfl_genhtml_skill("as2", c.as2, c, false));
		$("#ss_2").html("SS2: " + schfl_genhtml_skill("ss2", c.ss2, c, true));
	} else {
		$("#Lawakes").hide();
		$("#as_2").hide();
		$("#ss_2").hide();
	}
}


// object dump
function jsobj_vardump(obj, tab) {
	var str = tab >= 0 ? "<div style='margin-left: " + tab + "em'>" : "";
	var ty = typeof (obj);
	if (ty == "object") {
		if ($.isArray(obj) && obj[0] >= 0) {
			// array
			str += "[" + obj + "]";
		} else {
			// object
			for (var key in obj) {
				var nextobj_ty = typeof (obj[key]);
				if (nextobj_ty != "object" || ($.isArray(obj[key]) && obj[key][0] >= 0)) {
					str += key + ": " + jsobj_vardump(obj[key], -1);
				} else {
					str += key + ":{<br/>" + jsobj_vardump(obj[key], 2) + "},<br/>";
				}
			}
		}
	} else if (ty == "function") {
		// func
		str = "(function)";
	} else if (ty == "string") {
		// string
		str = "\"" + obj + "\"";
	} else {
		// other
		str = obj + "";
	}
	// remove last br
	if (tab >= 0 && str.indexOf("{") >= 0) {
		str = str.substr(0, str.length - "<br/>".length);
	}
	// end
	str += (tab >= 0 ? "</div>" : "<br/>") + "";
	return str;
}

// toggle switch
function toggledata_push() {
	Detail_view = !Detail_view;
	sch_show_detail();
}