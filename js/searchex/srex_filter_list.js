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
	createFilterSpecObject(null, 0, {
		alias: ["りゅうぞく"],
	}),
	createFilterSpecObject(null, 1, {
		alias: ["しんぞく"],
	}),
	createFilterSpecObject(null, 2, {
		alias: ["まぞく"],
	}),
	createFilterSpecObject(null, 3, {
		alias: ["てんし"],
	}),
	createFilterSpecObject(null, 4, {
		alias: ["ようせい"],
	}),
	createFilterSpecObject(null, 5, {
		alias: ["あじん"],
	}),
	createFilterSpecObject(null, 6, {
		alias: ["ぶっしつ"],
	}),
	createFilterSpecObject(null, 7, {
		alias: ["まほうせいぶつ"],
	}),
	createFilterSpecObject(null, 8, {
		alias: ["せんし"],
	}),
	createFilterSpecObject(null, 9, {
		alias: ["じゅつし"],
	}),
	createFilterSpecObject(null, 10),
	createFilterSpecObject(null, 11, {
		alias: ["あびすこーど"],
	}),
	// その他フィルター
	// ---------------------------------
	createFilterObject({
		type: "other",
		name: "L精霊のみ",
		alias: ["えるせいれい"],
		desc: "レアリティがL以上の精霊のみを表示します。",
		short: () => "L精霊",
		cond_cd: (c) => {
			return c.islegend;
		},
	}),
	createFilterObject({
		type: "other",
		name: "配布精霊のみ",
		alias: ["はいふ"],
		desc: "一部を除いたガチャ産以外の精霊のみを表示します",
		short: () => "配布",
		cond_cd: (c) => {
			return c.is_dist;
		},
	}),
	createFilterObject({
		type: "other",
		name: "ガチャ産精霊のみ",
		alias: ["がちゃさん"],
		desc: "一部を除いたガチャ産精霊のみを表示します",
		short: () => "ガチャ",
		cond_cd: (c) => {
			return !c.is_dist;
		},
	}),
	// ダイアログを表示する系のフィルター
	// ---------------------------------
	
	
	
	
	
	
	
	
	
	
	
];

// ----------------------------
// 検索フィルター複合条件の一覧
// ----------------------------
var SrchMultiFilters = [
	createMultiFilter({
		name: "AND",
		desc: "[上級者向け]複数条件をANDで結合します",
		char: "&",
		multi_cond: (a, b) => {
			return a & (b !== undefined ? b : true);
		}
	}),
	createMultiFilter({
		name: "OR",
		desc: "[上級者向け]複数条件をORで結合します",
		char: "|",
		multi_cond: (a, b) => {
			return a | (b !== undefined ? b : true);
		}
	}),
	createMultiFilter({
		name: "XOR",
		desc: "[上級者向け]複数条件をXORで結合します",
		char: "^",
		multi_cond: (a, b) => {
			var _a = (a !== undefined ? a : true);
			var _b = (b !== undefined ? b : true);
			return _a ^ _b;
		}
	}),
	createMultiFilter({
		name: "NAND",
		desc: "[上級者向け]複数条件をNANDで結合します",
		char: "%",
		multi_cond: (a, b) => {
			var _a = (a !== undefined ? a : true);
			var _b = (b !== undefined ? b : true);
			return !(_a & _b);
		}
	}),
	createMultiFilter({
		name: "NOR",
		desc: "[上級者向け]複数条件をNORで結合します",
		char: "~",
		multi_cond: (a, b) => {
			var _a = (a !== undefined ? a : true);
			var _b = (b !== undefined ? b : true);
			return !(_a | _b);
		}
	}),

]




// ----------------------------
// 検索フィルターobjのベース
function createFilterObject(append){
	append = append || {};
	return $.extend(true, {
		type: "",               // フィルター種別
		name: "",               // 表示名
		alias: [],              // 別名
		desc: "",               // 説明名
		dialog: "",             // 呼び出しダイアログ名
		is_denial: false,       // cond_系統の判定結果を入れ替えるかどうか(否定条件)
		short: () => "",        // 短縮名(検索欄表記で使用)
		cond_cd: null,          // 精霊条件式(true: match)
		do_added: (fs) => true, // 条件追加時に実行する関数(true: accept)
		chk_add: (f) => {       // 他の条件が追加される時に実行する関数(a_flag: add-accept / p_flag: push-accept)
			var a_flag = true;
			var p_flag = true;
			return {a_flag, p_flag};
		},
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

// 検索フィルター: 種族obj
function createFilterSpecObject(spec_name, spec_i, append){
	spec_name = spec_name || get_spec_string(spec_i);
	var desc =
		`種族が${spec_name}である精霊を検索します。`;
	return $.extend(true, createFilterObject(), {
		type: "spec",
		name: spec_name,
		desc: desc,
		short: function () {
			var m_or_s = (this.is_subattr ? "副" : "主");
			return `${spec_name}`;
		},
		cond_cd: function (c) {
			return c.species == spec_i;
		},
	}, append);
}

// 検索複合フィルターのベース
function createMultiFilter(append){
	// 複数指定のcond_xxを同時に実行
	var cond = (flt, type, ...arg) => {
		var rst = false;
		var flg_1 = undefined;
		var flg_2 = undefined;
		var f1 = flt.flt1;
		var f2 = flt.flt2;
		if(f1 && f1[type] && f1[type].apply){
			flg_1 = f1[type].apply(f1, arg);
		}
		if(f2 && f2[type] && f2[type].apply){
			flg_2 = f2[type].apply(f2, arg);
		}
		// 両方undefinedだった時は、評価関数が両方未定義
		// なので、評価をパスする(trueを返す)
		if(flg_1 === undefined && flg_2 === undefined){
			rst = true;
		}
		// 片方undefinedだった時は、残りだけで評価
		else if(flg_1 === undefined) {
			rst = flg_2;
		}
		else if(flg_2 === undefined) {
			rst = flg_1;
		}
		// 両方普通の場合は、ちゃんと評価
		else {
			rst = flt.multi_cond(flg_1, flg_2);
		}
		return rst;
	}
	return $.extend(true, createFilterObject(), {
		type: "multi",
		name: "",
		char: "",
		flt1: null,
		flt2: null,
		short: function () {
			var f1_short = this.flt1 ? this.flt1.short() : "(未指定)";
			var f2_short = this.flt2 ? this.flt2.short() : "(未指定)";
			return `[${f1_short} ${this.name} ${f2_short}]`;
		},
		// 条件実行時は、登録されてる2つのflt関数を呼び出す
		cond_cd: function (c) {
			return cond(this, "cond_cd", c);
		},
		// 2つのflt関数を実行した後に、ここで結果を判定(virtual)
		multi_cond: (flg1, flg2) => true,
		// 自身をActiveに登録する時の関数、1個目のfltを登録
		chk_add_txt: function (f) {
			var clone = $.extend(true, {}, this)
			var flg = (clone.flt1);
			if (!flg) {
				clone.flt1 = f;
			}
			return clone;
		},
		// 別のfltが登録される時の関数
		chk_add: function (f) {
			var flg = (this.flt1 && this.flt2);
			var a_flag = true;  // always add allow
			var p_flag = flg;   // 何も登録しなかったらpushを許可する
			if (!this.flt1) {
				this.flt1 = f;
			}
			else if (!this.flt2) {
				this.flt2 = f;
			}
			return {a_flag, p_flag};
		}
	}, append);
}

