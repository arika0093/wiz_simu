// activeな検索フィルター条件
var ActiveSrchFilter = [];
// 検索結果表示上限
var FilterListupMax = 10;
var CardsListupMax = 50;
// 詳細を開いているかどうか
var isOpenDetail = false;

// 火力データのみを抜き出したCards
var CardsSSDmg = null;
// 火力データを表示するかどうか
var isDispSSDmg = false;

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
	
	// 検索クエリが指定されていたら復元を試みる
	var query = sepalateAndGetQuery("q");
	if(query){
		deckdata_LoadUrl(query, (result) => {
			// 復元
			var js = JSON.parse(result);
			var long = js.long.replace(/(^"|"$)/g, "");
			var so = restoreActiveFilterFromJSON(long);
			if(so.af){
				ActiveSrchFilter = so.af;
			}
			if(so.disp_ss){
				isDispSSDmg = true;
				setSdmgObject(so.sdmg_obj);
				reloadCardsSS();
				// それ用にクラス付与
				$("#listup_dmgss_flg").prop("checked", true);
				$("#listup_dmgss").toggleClass("isflgon", true);
				$("#sdmg_optbox_wrapper").toggleClass("isflgon", true);
				$.each($(".oc_sortarea input"), (i,e) => $(e).prop("disabled", true) );
				$("div.oc_sortarea").toggleClass("disabled", true);
			}
			var txtbox = $("input#schbox");
			txtbox.val(so.inp);
			setUpperStyle();
			toggleClassOfInputed();
			outputFilterConditionElement();
			listupFilterCondition(so.inp);
			listupCardThrowFilter(so.inp);
		})
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
				if(rst_items.length != 1 || flt_items.length != 1){
					if(rst_items.length == 1){
						rst_items[0].click();
						return;
					}
					if(flt_items.length == 1){
						flt_items[0].click();
						return;
					}
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
	// URL保存をクリックした時の処理
	$("#url_generate")
		.on("click", () => {
			// まずjson化して
			var js = convertActiveFilterToJSON();
			// URL保存
			deckdata_SaveUrl(js, (result) => {
				var js_rst = JSON.parse(result);
				var url = `https://wiztools.net/searchex/?q=${js_rst.short}`;
				// history.pushState('','',"/searchex/?q=" + js_rst.short);
				$("#url_save_path").val(url);
				// dialogを開く
				$("#search_dialog_save").dialog({
					width: 500,
					modal: true,
					open: function () {
						$(".ui-dialog-titlebar").hide();
					},
					buttons: {
						"URLコピー": function (e, ui) {
							var alt_str = execCopy(url) ? "クリップボードにURLをコピーしました！" : "未対応です。";
							alert(alt_str);
						},
						"閉じる": function (e, ui) {
							$(this).dialog("close");
						}
					},
				});
			})
			
		})
	// 火力表示をクリックした時の結果をあらかじめ記述
	$("#listup_dmgss")
		.on("click", function () {
			// 現在の状況を取得して、反転させる
			var flg_input = $("#listup_dmgss_flg");
			var is_checked = flg_input.prop("checked");
			isDispSSDmg = !is_checked;
			flg_input.prop("checked", isDispSSDmg);
			$(this).toggleClass("isflgon", isDispSSDmg);
			$("#sdmg_optbox_wrapper").toggleClass("isflgon", isDispSSDmg);
			
			if(isDispSSDmg){
				// 火力順データが空なら、ここで加えておく
				reloadCardsSS();
			}
			// 火力順表示ならソートを無効化
			$.each($(".oc_sortarea input"), (i,e) => $(e).prop("disabled", isDispSSDmg) );
			$("div.oc_sortarea").toggleClass("disabled", isDispSSDmg);
			// 再描画
			var txtbox = $("input#schbox");
			listupCardThrowFilter(txtbox.val());
		});
	// 再計算ボタンを押した時の処理
	var reload = function () {
		// 再計算関数
		calcPreDamageAndSort(CardsSSDmg);
		// 再描画
		var txtbox = $("input#schbox");
		listupCardThrowFilter(txtbox.val());
	};
	$("#sdmg_optbox_wrapper input").on("change", reload);
	$("#sdmg_optbox_wrapper select").on("selectmenuchange", reload);
	// フィルター検索結果をクリックした時の結果をあらかじめ記述
	$("#filterbox_wrapper")
		.on("click", "li.rst_item", function () {
			addObjectToActiveFilter(this);
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
		})
	// 精霊クリック時に、aリンクが作動しないように指定
	$(document)
		.on("click", "a.invalid_click", (e) => {
			e.preventDefault();
		});
	// 上限数変更がクリックされたら数値を変更するダイアログを表示
	$(document)
		.on("click", "span[name=dispnum_change]", (e) => {
			var newnum = Number(window.prompt(
				`検索表示数の上限を指定してください。現在の表示数は ${CardsListupMax} です。\n`+
				`*** 注意: 数を大きくしすぎると動作が遅くなります。 ***`, ""));
			if(newnum > 0){
				CardsListupMax = newnum;
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
			$("div#search_wrap").removeClass("indata");
			$("div#detail_wrap").removeClass("indata");
			// URLとか変更
			window.title = `精霊検索 - Wiztools`;
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
			// タッチスクリーンでなければ無効化
			// null: タッチ可能, undefined: 不可
			if(!(window.ontouchstart === null)){
				e.stopPropagation();
			}
		});
	// iOS用にclick時に動く空のイベントハンドラを追加
	$("main > div#detail_wrap")
		.on("click", (e) => {});
	
	// 複合フィルターを普通のフィルター条件に追加
	Array.prototype.push.apply(SrchFilters, SrchMultiFilters);
	
	// フィルター全種類リストアップ
	var rst = "";
	$.each(SrchFilters, (i, e) => {
		rst += genFilterItemHtml(e);
	})
	$("#filter_alllist").html(rst);
	
	// ソート種類の出力
	listupSortCondition();
	$("input[name=sortradio]#sortby_regist").prop("checked", true);
	
	// その他labelとかtooltipとかの出力
	$("*[title]").tooltip();
	$("div.sdmg_opt_controlgroup").controlgroup();
	$("#reg_num").text(`${Cards.length}`);
	
	
	
	// regexをJSONにできるようにしておく
	RegExp.prototype.toJSON = RegExp.prototype.toString;
	
})

// 現在の絞り込み条件を出力
function outputFilterConditionElement(){
	var genhtml = (flt, i) => {
		var notop = flt.is_denial;
		return `<div class="sch_opt_box ${notop ? "sch_opt_notbox" : ""}" data-fltindex="${i}">
			${notop ? `<span class="opt_not">!</span>` : ""}
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

// 絞り込み条件を描画する関数
function genFilterItemHtml(flt, isdata) {
	var dlgclass = (flt.dialog != "" ? "opendialog" : "");
	var dsc = flt.desc
		.replace(/</, "&lt;")
		.replace(/>/, "&gt;")
		.replace(/\n/g, "<br/>");
	return `<li class="rst_item" data-index="${isdata ? flt.index : -1}" data-matched="${isdata ? flt.matched : -1}" >
			<div class="type">${flt.type}</div>
			<div class="name">${flt.name}</div>
			<div class="desc ${dlgclass}">${dsc}</div>
		</li>`;
}

// 絞り込みの条件をずらずらリストアップ
function listupFilterCondition(inp_text) {
	// 出力関数
	var flt_base_selector = "#filterbox_wrapper";
	// 既に追加されている要素を一旦消す
	$(flt_base_selector + " li").remove();
	// フィルター操作関連(と!)の文字を消す
	inp_text = inp_text.replace("!", "");
	$.each(SrchMultiFilters, (i, e) => {
		inp_text = inp_text.replace(e.char, "");
	});
	// 検索文字が空白なら終了
	if(inp_text.length <= 0){
		return;
	}
	// リストアップ開始
	var added_count = 0;
	var flts = $.map(SrchFilters, (e, i) => {
		// 追加しすぎなら後は除外
		if(added_count >= FilterListupMax){
			return null;
		}
		// 一致確認
		var alias = $.extend([], e.alias);
		alias.push(e.name, e.desc);
		// 入力されている文字全てでチェックする
		var match_place = $.map(inp_text.split(" "), (te, ti) => {
			if(te.trim().length <= 0){
				return null;
			}
			return isStringContainCheck(te, alias) ? ti : null;
		});
		if(match_place.length > 0){
			added_count++
			// 管理用のindex付与
			e.index = i;
			e.matched = match_place[0];
			return e;
		} else {
			return null;
		}
	});
	// 結果が出たら出力
	var is_overlst = (added_count >= FilterListupMax);
	var is_listup = (flts.length > 0);
	if(is_listup){
		var flt_base = $(flt_base_selector + " ul.result");
		var output = `<li class="rst_caption">絞り込み条件</li>`;
		for(var i = 0; i < flts.length; i++){
			output += genFilterItemHtml(flts[i], true);
		}
		if(is_overlst){
			output += `<li class="rst_overlst">${FilterListupMax}件以上の絞り込み条件が該当したため、`+
				`先頭${FilterListupMax}件のみを表示しています。</li>`;
		}
		flt_base.html(output);
	}
}

// 条件にマッチする精霊を描画する関数
function genCardItemHtml (c) {
	var fast = has_fastnum(undefined, c);
	if(!isDispSSDmg){
		var as_match = (c.as1.desc).match(/<.+?>/);
		var as_type = as_match ? as_match[0].replace("<","").replace(">","") : "-----";
		var ss_match = (c.ss1.desc).match(/<.+?>/)
		var ss_type = ss_match ? ss_match[0].replace("<","").replace(">","") : "-----";
		var ss_turn = `${Math.max(c.ss1.turn - fast, 0)}`+
			`${c.ss2 ? ("/" + Math.max(c.ss2.turn - fast, 0)) : ""}`;
		return `<a tabindex="-1" class="invalid_click" href="/search/detail/?id=${c.cardno}">
				<li class="rst_item rst_chara" data-index="${c.index}">
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
                </li>
                </a>`;
	} else {
		var ss = c.disp_ss;
		var ss_match = (ss.desc).match(/<.+?>/)
		var ss_type = ss_match ? ss_match[0].replace("<","").replace(">","") : "-----";
		var ss_subd = ss.subdesc != "" ? `(${ss.subdesc})` : "";
		var ss_turn = `${Math.max(ss.turn - fast + (ss.charged || 0), 0)}T`;
		var index = $.map(Cards, (e, i) => {
			return (e.cardno == c.cardno ? i : null)
		})[0];
		return `<a tabindex="-1" class="invalid_click" href="/search/detail/?id=${c.cardno}">
				<li class="rst_item rst_chara rst_ssdmg" data-index="${index}">
                    <div class="chara_icon"><img src="${get_image_url(c.imageno, c.imageno_prefix)}" /></div>
                    <div class="chara_name">${c.name}</div>
                    <div class="chara_desc chara_desc_ss">
	                    <span class="chara_ssdmg_ssn">${ss.is_ss2 ? "SS2" : "SS1"}, </span>
	                    <span class="chara_ssdmg_type">&lt;${ss_type}&gt; </span>
	                    <span class="chara_ssdmg_subtype">${ss_subd}</span>
	                    <span class="chara_ssdmg_turn">[${ss_turn}]</span><br/>
	                    <span class="chara_ssdmg_rate">rate: ${ss.rate.toFixed(1)},</span>
	                    <span class="chara_ssdmg_awatk">ATK: ${ss.aw_atk.toFixed(0)}</span>
                    </div>
                    <div class="chara_ssdmg_pdmg">${ss.pre_damage}</div>
                </li>
                </a>`;
	}
}

// 条件にマッチする精霊をリストアップする
function listupCardThrowFilter(inp_text){
	inp_text = inp_text.length > 0 ? inp_text.trim() : "";
	var rst_base_selector = "#resultbox_wrapper";
	// 既に追加されている要素を一旦消す
	$(`${rst_base_selector} a, ${rst_base_selector} li.rst_overlst`).remove();
	// 条件式がないなら終了
	var is_endflag = (ActiveSrchFilter.length <= 0 && inp_text.length <= 0);
	if(is_endflag){
		$(rst_base_selector).hide();
		return;
	}
	// 指定されてる条件で検索
	var added_count = 0;
	var cs = (isDispSSDmg ? CardsSSDmg : Cards);
	var fltCards = $.map(cs, (e, i) => {
		var check_rst = true;
		// 上限まで追加されてたら以降は全て無視
		if(added_count >= CardsListupMax){
			return null;
		}
		$.each(ActiveSrchFilter, (fi, fe) => {
			var dofunc = (p, ...args) => {
				if(!fe[p]){
					return true;
				}
				var do_rst = fe[p].apply(fe, args);
				// 反転条件が有効なら、実行結果に対してNOTする
				return do_rst ^ fe.is_denial;
			}
			var check_inner = true;
			if(!check_rst){
				return false;
			}
			// 条件関数内で判定を行った後、総合結果(check_rst)と比較,評価
			check_inner = check_inner && dofunc("cond_cd", e);
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
	var is_overlst = (added_count >= CardsListupMax);
	var is_listup = (fltCards.length > 0);
	if(is_listup){
		var rst_base = $(rst_base_selector + " ul.result");
		var output = "";
		for(var i = 0; i < fltCards.length; i++){
			output += genCardItemHtml(fltCards[i]);
		}
		if(is_overlst){
			output += `<li class="rst_overlst">${CardsListupMax}件以上の精霊と一致したため、`+
				`先頭${CardsListupMax}件のみを表示しています。`+
				`<br/>絞り込み条件を追加するか、<span class="linklike" name="dispnum_change">設定を変更</span>してください。</li>`;
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

// -----------------------------------
// ActiveFilterに足す関連の処理
function addObjectToActiveFilter(target, added_obj){
	// data-indexに指定されている条件を追加
	var clicked = $(target);
	var dat_index = clicked.data("index");
	if (dat_index >= 0) {
		var txtbox = $("input#schbox");
		var text_old = txtbox.val().split(" ");
		var matched_i = clicked.data("matched");
		var matched_str = text_old[matched_i];
		if(!added_obj){
			added_obj = $.extend(true, {}, SrchFilters[dat_index], {index: dat_index});
		}
		var added_flag = false;
		var pushed_flag = true;
		// (追加されるobj)追加時関数を確認する
		added_flag = added_obj.do_added(getAllActiveFilter(), {
			matched_str: matched_str,
			clicked: clicked,
		});
		// (複合フィルター条件)追加時関数を確認する
		$.each(SrchMultiFilters, (i, e) =>{
			if (added_flag && matched_str.indexOf(e.char) >= 0) {
				added_obj = e.chk_add_txt(added_obj);
				return false;
			}
		})
		// (追加される側のobj)追加時関数を確認する
		$.each(getAllActiveFilter(), (i, e) =>{
			if (added_flag && e.chk_add) {
				var {a_flag, p_flag} = e.chk_add(added_obj);
				added_flag = added_flag && a_flag;
				pushed_flag = pushed_flag && p_flag;
				return p_flag;
			} else {
				// 追加時関数がないならpass
				return true;
			}
		})
		if (added_flag) {
			// 文字に!が含まれているなら、否定条件にする
			added_obj.is_denial = (matched_str.indexOf("!") >= 0);
			// フィルター検索に使った文字を消す
			text_old.splice(matched_i, 1);
			var text_new = text_old.join(" ");
			txtbox.val(text_new);
			txtbox.focus();
			// 追加 & 再描画
			if (pushed_flag) {
				ActiveSrchFilter.push(added_obj);
			}
			outputFilterConditionElement();
			listupFilterCondition(text_new);
			listupCardThrowFilter(text_new);
		}
	}
}

// CardsSSDmgを用意する関数
function reloadCardsSS(force_flag){
	force_flag = force_flag || false;
	if (CardsSSDmg === null || force_flag) {
		CardsSSDmg = $.map(Cards, (e) =>{
			return separateOfDamagedSkillFromCard(e);
		});
		// 仮火力計算を行っておく
		calcPreDamageAndSort(CardsSSDmg);
	}
}

// -----------------------------------
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
	$("div#menuitems").toggleClass("isinput", isinput);
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

// ActiveFilterを再帰込みで返す
function getAllActiveFilter(){
	var getAdfRecursion = (e) => {
		var rst_arr = [];
		if(e.flt1){
			Array.prototype.push.apply(rst_arr, getAdfRecursion(e.flt1));
		}
		if(e.flt2){
			Array.prototype.push.apply(rst_arr, getAdfRecursion(e.flt2));
		}
		rst_arr.push(e);
		return rst_arr;
	}
	var asf = ActiveSrchFilter;
	return $.map(asf, (e) => {
		var rst = getAdfRecursion(e)
		return rst;
	})
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
	// AS,SS
	check_cont_str = check_cont_str
		|| isStringContainCheck(t, function(){
			var arr = [e.as1.desc, e.ss1.desc];
			if (e.islegend) {
				arr.push(e.as2.desc, e.ss2.desc);
			}
			return arr;
		}(), true);
	// 潜在能力
	var mapconcat = (a, b) => {
		return $.map([a,b], (ab) => ab ? ab : null);
	}
	var aws = $.map(mapconcat(e.awakes, e.Lawake), (aw_e) => {
		return aw_e ? [aw_e.name, aw_e.desc] : null;
	});
	check_cont_str = check_cont_str || isStringContainCheck(t, aws, true);
	return check_cont_str;
}

// カード情報を表示する
function displayCardDetail(c){
	// 表示
	applyCardData(c);
	// いろいろ書き換え
	window.title = `${c.name} - Wiztools`;
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

// -----------------------------------
// 柔軟な文字列含有確認
function isStringContainCheck(base, targets, ignore_roman){
	if(!$.isArray(targets)){
		targets = [targets];
	}
	var rst = false;
	for(var i=0; i < targets.length; i++){
		var t = targets[i];
		// 正規表現で渡されていたらtest, そうでないならindexOf
		if(base.test) {
			rst = rst || base.test(t);
		} else if(t.test){
			rst = rst || t.test(base);
		} else {
			var h2k_t = h2k(t);
			rst = rst
				|| t.indexOf(base.toLowerCase()) >= 0
				|| t.indexOf(base.toUpperCase()) >= 0
				|| (!ignore_roman && h2k_t.indexOf(r2k(base)) >= 0)
				|| (!ignore_roman && h2k_t.indexOf(h2k(base)) >= 0)
		}
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
