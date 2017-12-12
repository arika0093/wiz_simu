// ----------------------------
// 検索フィルターの一覧
// ----------------------------
var SrchFilters = [
	// 属性フィルター
	// ---------------------------------
	createFilterAttrObject("火", 0, false, {
		alias: ["fire", "ひ"],
	}),
	createFilterAttrObject("水", 1, false, {
		alias: ["water", "みず"],
	}),
	createFilterAttrObject("雷", 2, false, {
		alias: ["thunder", "かみなり"],
	}),
	createFilterAttrObject("光", 3, true, {
		alias: ["light", "ひかり"],
	}),
	createFilterAttrObject("闇", 4, true, {
		alias: ["dark", "やみ"],
	}),
	createFilterAttrObject("無し", -1, true, {
		name: "純属性精霊",
		desc: "副属性を持たない精霊を検索します。",
		alias: ["pure", "純属性", "じゅんぞくせい", "単属性", "たんぞくせい", "なし"],
	}),
	// 種族フィルター
	// ---------------------------------
	
	
	
	
	
	
	
	
	
	
	
	
	
]


// 検索フィルターobjのベース
function createFilterObject(append){
	append = append || {};
	return $.extend(true, {
		type: "",               // フィルター種別
		name: "",               // 表示名
		alias: [],              // 別名
		desc: "",               // 説明名
		dialog: "",             // 呼び出しダイアログ名
		is_denial: false,       // 判定結果を入れ替えるかどうか(否定条件)
		short: () => "",        // 短縮名(検索欄表記で使用)
		cond_cd: (c) => true,   // 精霊条件式(true: match)
		cond_as: (as) => true,  // AS条件式(true: match)
		cond_ss: (ss) => true,  // SS条件式(true: match)
		cond_aw: (aw) => true,  // 潜在条件式(true: match)
		do_added: (fs) => {},   // 条件追加時に実行する関数
	}, append);
}

// 検索フィルター: 属性objのベース
function createFilterAttrObject(attr_name, attr_i, is_subfixed, append){
	var desc = (is_subfixed ?
		`副属性が${attr_name}属性である精霊を検索します。` :
		`主属性が${attr_name}属性である精霊を検索します。\n主属性が既に指定されているなら、副属性が一致しているかを確認します。`
	);
	
	return $.extend(true, createFilterObject(), {
		type: "attr",
		name: `${attr_name}属性`,
		desc: desc,
		is_subfixed: is_subfixed,
		is_subattr: is_subfixed,
		short: function () {
			var m_or_s = (this.is_subattr ? "副" : "主");
			return `${m_or_s}属性: ${attr_name}`;
		},
		cond_cd: function (c) {
			var i = (this.is_subattr ? 1 : 0)
			return c.attr[i] == attr_i;
		},
		do_added: function (fs) {
			// 既に主属性が追加済か確認
			var contain_m_attr = $.grep(fs, (e) => {
				return e.type == "attr" && !e.is_subfixed && !e.is_subattr;
			}).length > 0;
			this.is_subattr = (this.is_subfixed || contain_m_attr);
			return true;
		}
	}, append);
}