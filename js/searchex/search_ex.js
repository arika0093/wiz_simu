// activeな検索フィルター条件
var ActiveSrchFilter = [];
// 検索結果表示上限
var ListupMax = 50;
// 詳細を開いているかどうか
var isOpenDetail = false;

function logpush(t){
	$(".links").append(`<span>${t}</span><br/>`);
}


// on load
$(() => {
	// Cards.jsのいらない要素を消す
	Cards = $.map(Cards, (e, i) => {
		if(!e.disable && !e.original){
			e.def_index = i;
			return e;
		} else {
			return null;
		}
	}).reverse();
	
	// カードIDが指定されていたらそれを開く
	var cardid = sepalateAndGetQuery("id");
	if(cardid){
		var cs = $.grep(Cards, (e) => {
			return e.cardno == Number(cardid);
		});
		if(cs.length > 0){
			setUpperStyle();
			displayCardDetail(cs[0]);
		}
	}
	
	// 疑似textboxがクリックされたら本来のtextboxにフォーカスを移す
	$("div.textbox_wrap")
		.on("click", () => {
			var truth_box = $("input#schbox");
			truth_box.focus();
		});
	// text-boxにフォーカスが移ったら上を詰める
	// フォーカスが外れたら上を元に戻す
	$("input#schbox")
		.on("focus", () => {
			setUpperStyle();
		})
		.on("focusout", () => {
			resetStyleWithoutClass();
		});
	// 入力時のイベント
	$("input#schbox")
		.on("keyup", $.debounce(200, (e) => {
			// Escapeキーなら全削除
			if(e.keyCode == 27){
				clearInput();
				return;
			}
			// Enterキーの時、要素が1つしかないならそれをクリックした扱いにする
			if(e.keyCode == 13){
				var flt_items = $("#filterbox_wrapper li.rst_item");
				var rst_items = $("#resultbox_wrapper li.rst_item");
				if(rst_items.length == 1){
					rst_items[0].click();
					return;
				}
				if(flt_items.length == 1){
					flt_items[0].click();
					return;
				}
			}
			// 文字が入力されてたらクラスを付与
			var {val, isstrinput, isinput} = toggleClassOfInputed();
			if(isstrinput){
				// 絞り込み条件表示
				listupFilterCondition(val);
			}
			if(isinput){
				// 精霊表示
				listupCardThrowFilter(val);
			}
		}));
	// フィルター検索結果をクリックした時の結果をあらかじめ記述
	$("#filterbox_wrapper")
		.on("click", "li.rst_item", function () {
			// data-indexに指定されている条件を追加
			var clicked = $(this);
			var dat_index = clicked.data("index");
			if(dat_index >= 0){
				var txtbox = $("input#schbox");
				var added_obj = $.extend(SrchFilters[dat_index], { index: dat_index });
				// 追加時関数をパスしたら追加+フォームリセット+いろいろ描画
				if(added_obj.do_added(ActiveSrchFilter)){
					ActiveSrchFilter.push(added_obj);
					var text_old = txtbox.val().split(" ");
					var matched_i = clicked.data("matched");
					text_old.splice(matched_i, 1);
					var text_new = text_old.join(" ");
					txtbox.val(text_new);
					txtbox.focus();
					outputFilterConditionElement();
					listupFilterCondition(text_new);
					listupCardThrowFilter(text_new);
				}
			}
		});
	// ソート種類をクリックした時の結果をあらかじめ記述
	$("div.list_sortopts")
		.on("change", "input[name=sortradio]", function () {
			// data-indexに指定されている条件を追加
			var clicked = $(this);
			var dat_index = clicked.data("index");
			if(dat_index >= 0){
				var txtbox = $("input#schbox");
				var so = SrchSortOptions[dat_index];
				// Cardsを指定された条件でソート
				Cards = Cards.sort(so.sort);
				listupCardThrowFilter(txtbox.val());
			}
		});
	// 精霊をクリックした時の処理を記述
	$("#resultbox_wrapper")
		.on("click", "li.rst_chara", function () {
			// data-indexに指定されている条件を追加
			var clicked = $(this);
			var c_index = clicked.data("index");
			if(c_index >= 0){
				// 位置保存(横幅1500px以上のときは処理しない)
				var ypos = -1;
				if($(document).width() < 1500){
					var ypos = $(document).scrollTop();
				}
				$("div#maindata").data("ypos", ypos);
				// 表示
				var c = Cards[c_index];
				displayCardDetail(c);
			}
		});
	// フィルター条件(textbox内)をクリックした時の結果をあらかじめ記述
	$(document)
		.on("click", "div.sch_opt_box", function() {
			// クリックされたindexのアイテムを削除
			var clicked = $(this);
			var flt_index = clicked.data("fltindex");
			if(flt_index >= 0){
				var txtbox = $("input#schbox");
				ActiveSrchFilter.splice(flt_index, 1)
				// フォーカスをあわせて再描画
				txtbox.focus();
				var txt = txtbox.val();
				outputFilterConditionElement();
				toggleClassOfInputed();
				listupFilterCondition(txt);
				listupCardThrowFilter(txt);
			}
		})
	// 精霊詳細を閉じる要素にhoverした時の処理
	$(document)
		.on("mouseenter mouseleave", "div#detail_wrap, div#close_aside", function (e) {
			$("div#detail_wrap").toggleClass("closed_hover", (e.type == "mouseenter"));
		})
		.on("mouseenter mouseleave", "div#detail_wrap > *", function (e) {
			$("div#detail_wrap").toggleClass("closed_hover", (e.type != "mouseenter"));
			e.stopPropagation();
		});
	// 精霊詳細を閉じる時の処理を記載
	$(document)
		.on("click", "div#detail_wrap, div#close_aside", function () {
			logpush("click outer detail_wrap");
			$("div#search_wrap").removeClass("indata");
			$("div#detail_wrap").removeClass("indata");
			// URL変更
			history.replaceState(null, null, `/searchex/`);
			// flag close
			isOpenDetail = false;
			toggleClassOfInputed();
			resetStyleWithoutClass();
			// 位置を復元
			var ypos = $("div#maindata").data("ypos");
			if(ypos >= 0){
				$(document).scrollTop(ypos);
			}
		})
		.on("click", "div#detail_wrap > *", function (e) {
			logpush("click inner detail_wrap");
			e.stopPropagation();
		});
	
	
	// ソート種類の出力
	listupSortCondition();
	$("input[name=sortradio]#sortby_regist").prop("checked", true);
	// その他
	$("#reg_num").text(`${Cards.length}`);
	
	
	
	
	
	
	
})

// 現在の絞り込み条件を出力
function outputFilterConditionElement(){
	var genhtml = (flt, i) => {
		return `<div class="sch_opt_box" data-fltindex="${i}">
			<span class="sch_opt_label">${flt.short()}</span>
			</div>`;
	}
	// 出力
	var flts = ActiveSrchFilter;
	var output = "";
	for(var i = 0; i < flts.length; i++){
		output += genhtml(flts[i], i);
	}
	$("div.textbox_wrap div.sch_opt_box").remove();
	$("div.textbox_wrap").prepend(output);
	
}

// 絞り込みの条件をずらずらリストアップ
function listupFilterCondition(inp_text) {
	// 出力関数
	var genhtml = (flt) => {
		var dlgclass = (flt.dialog != "" ? "opendialog" : "");
		return `<li class="rst_item" data-index="${flt.index}" data-matched="${flt.matched}" >
			<div class="type">${flt.type}</div>
			<div class="name">${flt.name}</div>
			<div class="desc ${dlgclass}">${flt.desc.replace(/\n/, "<br/>")}</div>
		</li>`;
	}
	var flt_base_selector = "#filterbox_wrapper";
	// 既に追加されている要素を一旦消す
	$(flt_base_selector + " li").remove();
	// 検索文字が空白なら終了
	if(inp_text.length <= 0){
		return;
	}
	// リストアップ開始
	var flts = $.map(SrchFilters, (e, i) => {
		// 一致確認
		var alias = $.extend([], e.alias);
		alias.push(e.name);
		// 入力されている文字全てでチェックする
		var match_place = $.map(inp_text.split(" "), (te, ti) => {
			if(te.trim().length <= 0){
				return null;
			}
			return isStringContainCheck(te, alias) ? ti : null;
		});
		if(match_place.length > 0){
			// 管理用のindex付与
			e.index = i;
			e.matched = match_place[0];
			return e;
		} else {
			return null;
		}
	});
	flts.splice(Math.min(flts.length, ListupMax));
	// 結果が出たら出力
	if(flts.length > 0){
		var flt_base = $(flt_base_selector + " ul.result");
		var output = `<li class="rst_caption">絞り込み条件</li>`;
		for(var i = 0; i < flts.length; i++){
			output += genhtml(flts[i]);
		}
		flt_base.html(output);
	}
}

// 条件にマッチする精霊をリストアップする
function listupCardThrowFilter(inp_text){
	inp_text = inp_text.length > 0 ? inp_text.trim() : "";
	// 出力関数
	var genhtml = (c) => {
		var fast = has_fastnum(undefined, c);
		var as_match = (c.as1.desc).match(/<.+?>/);
		var as_type = as_match ? as_match[0].replace("<","").replace(">","") : "-----";
		var ss_match = (c.ss1.desc).match(/<.+?>/)
		var ss_type = ss_match ? ss_match[0].replace("<","").replace(">","") : "-----";
		var ss_turn = `${Math.max(c.ss1.turn - fast, 0)}`+
			`${c.ss2 ? ("/" + Math.max(c.ss2.turn - fast, 0)) : ""}`;
		return `<li class="rst_item rst_chara" data-index="${c.index}">
                    <div class="chara_icon"><img src="${get_image_url(c.imageno, c.imageno_prefix)}" /></div>
                    <div class="chara_name">${c.name}</div>
                    <div class="chara_desc">
                        <span class="chara_attr_m">${get_attr_string(c.attr[0])}</span> /
                        <span class="chara_attr_s">${c.attr[1] >= 0 ? get_attr_string(c.attr[1]) : "----"}</span>,
                        <span class="chara_spec">${get_spec_string(c.species)}</span>,
                        <span class="chara_hp">HP: ${c.hp}</span> /
                        <span class="chara_atk">ATK: ${c.atk}</span><br/>
                        <span class="chara_as">AS: ${as_type}</span> /
                        <span class="chara_ss">SS: ${ss_type}[${ss_turn}]</span>
                    </div>
                </li>`;
	}
	var rst_base_selector = "#resultbox_wrapper";
	// 既に追加されている要素を一旦消す
	$(rst_base_selector + " li.rst_item").remove();
	// 条件式がないなら終了
	var is_endflag = (ActiveSrchFilter.length <= 0 && inp_text.length <= 0);
	if(is_endflag){
		$(rst_base_selector).hide();
		return;
	}
	// 指定されてる条件で検索
	var added_count = 0;
	var fltCards = $.map(Cards, (e, i) => {
		var check_rst = true;
		// 上限まで追加されてたら以降は全て無視
		if(added_count >= ListupMax){
			return null;
		}
		$.each(ActiveSrchFilter, (fi, fe) => {
			// 条件関数内で判定を行った後、総合結果(check_rst)と比較,評価
			var check_inner = true;
			if(!check_rst){
				return false;
			}
			check_inner = check_inner && fe.cond_cd(e);
			check_inner = check_inner && fe.cond_as(e.as1, e.as2, e);
			check_inner = check_inner && fe.cond_ss(e.ss1, e.ss2, e);
			check_inner = check_inner && fe.cond_aw(e.awake, e.Lawake, e);
			check_rst = check_inner;
		})
		// inputに文字が入力されているなら、その文字列で検索をかける
		if(check_rst && inp_text.length > 0){
			var check_cont_all = true;
			// 文字列全体としてはAND一致
			// 各文字の条件比較としてはOR一致
			$.each(inp_text.split(" "), (ti, t) => {
				var check_cont_str = isStringContainedInCard(t, e);
				// 反映
				return check_cont_all = check_cont_all && check_cont_str;
			})
			check_rst = check_cont_all;
		}
		if(check_rst){
			added_count++;
			// Cards内のindexを追加して、リストに追加
			e.index = i;
			return e;
		} else {
			return null;
		}
	});
	// 結果が出たら出力
	var is_overlst = (added_count >= ListupMax);
	var is_listup = (fltCards.length > 0);
	if(is_listup){
		var rst_base = $(rst_base_selector + " ul.result");
		var output = "";
		for(var i = 0; i < fltCards.length; i++){
			output += genhtml(fltCards[i]);
		}
		rst_base.append(output);
	}
	$("span#rst_disp_num").html(`Matched: ${fltCards.length} 件${is_overlst ? "以上" : ""}`);
	$(rst_base_selector).show();
}

// ソート条件を出力
function listupSortCondition(){
	var genhtml = (so, i) => {
		return `<div class="sortopt">
                    <input type="radio" name="sortradio" id="sortby_${so.id}" data-index="${i}" />
                    <label for="sortby_${so.id}">${so.name}</label>
                </div>`;
	}
	var outputDom = $("div.list_sortopts");
	var output = "";
	var sso = SrchSortOptions;
	for(var i=0; i < sso.length; i++){
		output += genhtml(sso[i], i);
	}
	// 上書き
	outputDom.html(output);
}



// 入力欄を全て消す
function clearInput(){
	var txtbox = $("input#schbox");
	ActiveSrchFilter = [];
	// フォーカスをあわせて再描画
	txtbox.focus();
	txtbox.val("");
	outputFilterConditionElement();
	toggleClassOfInputed();
	listupFilterCondition("");
	listupCardThrowFilter("");
}

// 入力の有無に応じてクラスを切り替える
function toggleClassOfInputed(){
	var val = $("input#schbox").val();
	var isstrinput = (val != "");
	var isinput = isstrinput || (ActiveSrchFilter.length > 0) || isOpenDetail;
	$("header").toggleClass("inputed", isinput);
	$("div#infobox_wrapper").toggleClass("inputed", isinput);
	$("div#filterbox_wrapper").toggleClass("inputed", isinput);
	$("div#resultbox_wrapper").toggleClass("inputed", isinput);
	return {val, isstrinput, isinput};
}

// 上よりのスタイルに指定
function setUpperStyle(){
	$("header").css("margin-top", "0px");
	$("header:not([class=inputed]) a#topbanner").addClass("upperstyle");
	$("div#infobox_wrapper").css({
		"margin-top": 0,
		"margin-bottom": 0,
		opacity: 0,
		height: "0px",
	});
}

// class指定時(検索結果表示時)以外なら元に戻す
function resetStyleWithoutClass(){
	$("header:not([class=inputed])").prop("style", "");
	$("header:not([class=inputed]) a#topbanner").removeClass("upperstyle");
	$("div#infobox_wrapper:not([class=inputed])").prop("style", "");
}

// 絞り込み結果に一致するかどうかチェックする
function isStringContainedInCard(t, e){
	var check_cont_str = false;
	// 精霊名
	check_cont_str = check_cont_str
		|| isStringContainCheck(t, e.name);
	// alias
	check_cont_str = check_cont_str || (e.alias
		&& isStringContainCheck(t, e.alias));
	// 種族名
	check_cont_str = check_cont_str || (e.species >= 0
		&& isStringContainCheck(t, get_spec_string(e.species), true));
	// AS,SS
	check_cont_str = check_cont_str
		|| isStringContainCheck(t, function(){
			var arr = [e.as1.desc, e.ss1.desc];
			if (e.islegend) {
				arr.push(e.as2.desc, e.ss2.desc);
			}
			return arr;
		}(), true);
	return check_cont_str;
}

// カード情報を表示する
function displayCardDetail(c){
	// 表示
	applyCardData(c);
	history.replaceState(null, null, `/searchex/?id=${c.cardno}`);
	$("div#search_wrap").addClass("indata");
	$("div#detail_wrap").addClass("indata");
	// flag open
	isOpenDetail = true;
	toggleClassOfInputed();
	// 横幅が1500px以上ないなら精霊情報トップに移動
	if($(document).width() < 1500){
		var topbanner = $("a#topbanner");
		var pos = topbanner.scrollTop() + topbanner.height() + 5;
		$('html,body').scrollTop(pos);
	}
	
}



// 柔軟な文字列含有確認
function isStringContainCheck(base, targets, ignore_roman){
	if(!$.isArray(targets)){
		targets = [targets];
	}
	var rst = false;
	for(var i=0; i < targets.length; i++){
		var t = targets[i];
		var h2k_t = h2k(t);
		rst = rst || t.indexOf(base) >= 0
			|| (!ignore_roman && h2k_t.indexOf(r2k(base)) >= 0)
			|| (!ignore_roman && h2k_t.indexOf(h2k(base)) >= 0)
	}
	return rst;
}

// クエリを分解して、目的のものがあったら返す
function sepalateAndGetQuery(target){
	var q = location.search;
	var qs = q.split(/[\?\&]/g);
	for(var i = 0; i < qs.length; i++){
		var findstr = `${target}=`;
		var pos = qs[i].indexOf(findstr);
		if(pos >= 0){
			return qs[i].substr(findstr.length + pos);
		}
	}
	return null;
}
