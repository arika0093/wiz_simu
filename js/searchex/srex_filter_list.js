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
	// AS簡易フィルター
	// ---------------------------------
	createAnswerSkillObject("攻撃", null, {
		alias: ["こうげき"],
	}),
	createAnswerSkillObject("連撃", null, {
		alias: ["れんげき"],
	}),
	createAnswerSkillObject("属性特効", null, {
		alias: ["ぞくせいとっこう", "特攻"],
	}),
	createAnswerSkillObject("種族特効", null, {
		alias: ["しゅぞくとっこう", "特攻"],
	}),
	createAnswerSkillObject("属性特効連撃", "特効連撃", {
		alias: ["ぞくせいとっこうれんげき", "特攻"],
	}),
	createAnswerSkillObject("チェイン攻撃", "Ch攻撃", {
		alias: ["ちぇいん"],
	}),
	createAnswerSkillObject("快調攻撃", "快調AS", {
		alias: ["かいちょう"],
	}),
	createAnswerSkillObject("不調攻撃", "不調AS", {
		alias: ["ふちょう"],
	}),
	createAnswerSkillObject("全体攻撃", "全体AS", {
		alias: ["ぜんたい"],
	}),
	createAnswerSkillObject("分散攻撃", "分散AS", {
		alias: ["ぶんさん"],
	}),
	createAnswerSkillObject("種族数攻撃", "種族数AS", {
		alias: ["しゅぞくすう"],
	}),
	createAnswerSkillObject("属性の加護", "属性AS", {
		alias: ["ぞくせいのかご"],
	}),
	createAnswerSkillObject("パネル色数攻撃", "パネルAS", {
		alias: ["ぱねるいろすう"],
	}),
	createAnswerSkillObject("嘆きの怒り", "死亡数AS", {
		alias: ["なげきのいかり", "しぼうすう"],
	}),
	createAnswerSkillObject("攻撃強化", "エンハンスAS", {
		alias: ["こうげききょうか", "えんはんす"],
	}),
	createAnswerSkillObject("複属性攻撃強化", "複エンハAS", {
		alias: ["ふくぞくせいえんはんす", "ふくえんはんす"],
	}),
	createAnswerSkillObject("種族攻撃強化", "種族エンハ", {
		alias: ["しゅぞくえんはんす"],
	}),
	createAnswerSkillObject("回復", "回復AS", {
		alias: ["かいふく"],
	}),
	createAnswerSkillObject("ガード", "ガードAS"),
	// SS簡易フィルター
	// ---------------------------------
	createSpecialSkillObject("大魔術", null, {
		alias: ["だいまじゅつ"],
	}),
	createSpecialSkillObject("遅延大魔術", "遅延+攻撃", {
		alias: ["ちえん"],
	}),
	createSpecialSkillObject("特効大魔術", "特効SS", {
		alias: ["とっこう", "特攻"],
	}),
	createSpecialSkillObject("犠牲魔術", "犠牲", {
		alias: ["ぎせい", "ぜんたいぎせい"],
	}),
	createSpecialSkillObject("自己犠牲魔術", "自己犠牲", {
		alias: ["じこぎせい"],
	}),
	createSpecialSkillObject("反動大魔術", "反動", {
		alias: ["はんどう"],
	}),
	createSpecialSkillObject("反動大魔術・蝕", "反動・蝕", {
		alias: ["はんどうしょく"],
	}),
	createSpecialSkillObject("弱体化大魔術", "弱体化", {
		alias: ["じゃくたいか"],
	}),
	createSpecialSkillObject("残滅大魔術", "残滅", {
		alias: ["ざんめつ", "斬滅"],
	}),
	createSpecialSkillObject("効果解除大魔術", "効果解除+攻撃", {
		alias: ["こうかかいじょ"],
	}),
	createSpecialSkillObject("毒", null, {
		alias: ["どく"],
	}),
	createSpecialSkillObject("割合削り", null, {
		alias: ["わりあいけずり"],
	}),
	createSpecialSkillObject("多弾魔術", "多弾", {
		alias: ["ただん", "多段"],
	}),
	createSpecialSkillObject("斬撃大魔術", "斬撃", {
		alias: ["ざんげき"],
	}),
	createSpecialSkillObject("純属性大魔術", "純属性SS", {
		alias: ["じゅんぞくせい"],
	}),
	createSpecialSkillObject("一閃斬撃大魔術", "一閃斬撃", {
		alias: ["いっせんざんげき"],
	}),
	createSpecialSkillObject("連鎖解放大魔術", "連鎖解放", {
		alias: ["れんさかいほう"],
	}),
	createSpecialSkillObject("時限大魔術", "時限", {
		alias: ["じげん"],
	}),
	createSpecialSkillObject("無に還す瞳", "無に還す", {
		alias: ["むにかえすひとみ", "むにきす"],
	}),
	createSpecialSkillObject("激化大魔術", "激化", {
		alias: ["げきか"],
	}),
	createSpecialSkillObject("詠唱大魔術", "詠唱", {
		alias: ["えいしょう"],
	}),
	createSpecialSkillObject("炸裂大魔術", "炸裂", {
		alias: ["さくれつ"],
	}),
	createSpecialSkillObject("詠唱多弾大魔術", "詠唱多弾", {
		alias: ["えいしょうただん"],
	}),
	createSpecialSkillObject("融合大魔術", "融合SS", {
		alias: ["ゆうごう"],
	}),
	createSpecialSkillObject("ガード", "ガードSS"),
	createSpecialSkillObject("ダメージブロック", "ダメブロ"),
	createSpecialSkillObject("状態異常無効", "異常無効", {
		alias: ["じょうたいいじょうむこう"],
	}),
	createSpecialSkillObject("鉄壁・極", "鉄壁SS", {
		alias: ["てっぺき"],
	}),
	createSpecialSkillObject("パネル変換", "変換", {
		alias: ["へんかん"],
	}),
	createSpecialSkillObject("シャッフル", null),
	createSpecialSkillObject("特殊パネル変換", "特殊ﾊﾟﾈﾙ変換", {
		alias: ["とくしゅぱねるへんかん"],
	}),
	createSpecialSkillObject("連結パネル生成", "連結パネル", {
		alias: ["れんけつぱねる"],
	}),
	createSpecialSkillObject("遅延", null, {
		alias: ["ちえん"],
	}),
	createSpecialSkillObject("スキルチャージ", "スキチャ", {
		alias: ["すきちゃ", "すきぶ", "すきるぶーすと"],
	}),
	createSpecialSkillObject("スキルチャージ&遅延", "ｽｷﾁｬ遅延", {
		alias: ["すきちゃちえん", "すきぶちえん"],
	}),
	createSpecialSkillObject("解答削り", null, {
		alias: ["かいとうけずり"],
	}),
	createSpecialSkillObject("効果解除", null, {
		alias: ["こうかかいじょ"],
	}),
	createSpecialSkillObject("ブースト", null),
	createSpecialSkillObject("ダメージ強化", "エンハSS", {
		alias: ["だめーじきょうか", "えんはんす"],
	}),
	createSpecialSkillObject("複属性ダメージ強化", "複エンハSS", {
		alias: ["ふくぞくせいだめーじきょうか", "ふくぞくせいえんはんす"],
	}),
	createSpecialSkillObject("ステータスアップ", "ステアップ"),
	createSpecialSkillObject("精霊強化", null, {
		alias: ["せいれいきょうか"],
	}),
	createSpecialSkillObject("カウンター", null),
	createSpecialSkillObject("チェインガード", "Chガード"),
	createSpecialSkillObject("AS発動時間延長", "AS延長", {
		alias: ["あんさーすきるはつどうじかんえんちょう", "ASえんちょう"],
	}),
	createSpecialSkillObject("挑発", null, {
		alias: ["ちょうはつ"],
	}),
	createSpecialSkillObject("狂暴化", null, {
		alias: ["きょうぼうか", "凶暴"],
	}),
	createSpecialSkillObject("純属性強化", "純強化", {
		alias: ["じゅんぞくせいきょうか"],
	}),
	createSpecialSkillObject("ダブルスキル付与", "ダブルスキル"),
	createSpecialSkillObject("チェイン犠牲強化", "Ch消費エンハ", {
		alias: ["ちぇいんぎせいきょうか", "ちぇいんしょうひ", "えんはんす"],
	}),
	createSpecialSkillObject("行動感知", null, {
		alias: ["こうどうかんち"],
	}),
	createSpecialSkillObject("撃破強化", null, {
		alias: ["げきはきょうか"],
	}),
	createSpecialSkillObject("回復", "回復SS", {
		alias: ["かいふく"],
	}),
	createSpecialSkillObject("継続回復", null, {
		alias: ["けいぞくかいふく", "りじぇね"],
	}),
	createSpecialSkillObject("状態異常回復", "異常回復", {
		alias: ["じょうたいいじょうかいふく"],
	}),
	createSpecialSkillObject("状態異常回復&蘇生", "異常回復+蘇生", {
		alias: ["じょうたいいじょうかいふく", "そせい"],
	}),
	createSpecialSkillObject("蘇生", null, {
		alias: ["そせい"],
	}),
	createSpecialSkillObject("自己犠牲蘇生", null, {
		alias: ["じこぎせいそせい"],
	}),
	createSpecialSkillObject("起死回生", null, {
		alias: ["きしかいせい"],
	}),
	createSpecialSkillObject("複属性回復", "複属性回復SS", {
		alias: ["ふくぞくせいかいふく"],
	}),
	createSpecialSkillObject("スキルコピー", null),
	// SS内容フィルター
	// ---------------------------------
	createSpecialSkillDetailObject("攻撃系SS", null, /(多弾|大)魔術/, {
		alias: ["こうげきすきる"],
	}),
	createSpecialSkillDetailObject("多段カウンター", null, /多[弾段](式|)カウンター/, {
		alias: ["ただん"],
	}),
	createSpecialSkillDetailObject("見破り", null, /解答を見破/, {
		alias: ["みやぶり"],
	}),
	createSpecialSkillDetailObject("スキル反射無視", "反射無視", /スキル反射を無視し/, {
		alias: ["すきるはんしゃむし"],
	}),
	createSpecialSkillDetailObject("味方HP削りSS", null, /味方全体の(|MAX)HP(|の)[0-9]{1,3}%を/, {
		alias: ["みかたHPけずり"],
	}),
	createSpecialSkillDetailObject("不調SS", null, /HP(|が)[0-9]{1,3}%以下/, {
		alias: ["HPいぞん", "ふちょう"],
	}),
	createSpecialSkillObject("チャージSS", null, {
		cond_cd: (c) => {
			return $.map([c.ss1, c.ss2], (e) => {
				return (e ? e.charged : null);
			}).length > 0;
		}
	}),
	// 潜在フィルター
	// ---------------------------------
	
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
	createDialogFilterObject("属性詳細指定", "精霊の属性を詳細に指定することができます。", "attr", {
		alias: ["ぞくせいしょうさい", "火", "水", "雷", "光", "闇"],
		short: function () {
			var str = "";
			var ms = this.dialog_obj.attr_m;
			var ss = this.dialog_obj.attr_s;
			if(ms.length >= 0){
				str += `主: ${get_attr_string(ms, "|")},`;
			}
			if(ss.length >= 0){
				str += `副: ${get_attr_string(ss, "|")}`;
			} else {
				str += `副: 単属性`;
			}
			return str;
		},
		cond_cd: function (c) {
			var flg = true;
			var ms = this.dialog_obj.attr_m;
			var ss = this.dialog_obj.attr_s;
			if(ms.length >= 0){
				flg = flg && $.grep(ms, (e) => {
					return c.attr[0] == e;
				}).length > 0;
			}
			if(ss.length >= 0){
				flg = flg && $.grep(ss, (e) => {
					if(c.attr[1] == e){
						return true;
					}
					// mainで指定済の属性だったら、単属性確認
					else if(ms.indexOf(e) >= 0){
						return c.attr[0] == e && c.attr[1] == -1;
					}
				}).length > 0;
			} else {
				flg = flg && c.attr[1] == -1;
			}
			return flg;
		},
		initialize: () => {
			// control group init
			$("div#dialog_attr div.dlg_attr_input").controlgroup();
		},
		onsaved: function (obj) {
			// チェック状況を取得
			var m_checked = $("input[name=main_attr]:checked");
			var s_checked = $("input[name=sub_attr]:checked");
			// objに突っ込む
			var m_arr = [];
			var s_arr = [];
			$.each(m_checked, (i, e) => {
				m_arr.push(Number($(e).prop("value")));
			})
			$.each(s_checked, (i, e) => {
				s_arr.push(Number($(e).prop("value")));
			})
			obj.attr_m = m_arr;
			obj.attr_s = s_arr;
		},
	}),
	createDialogFilterObject("種族詳細指定", "精霊の種族を詳細に指定することができます。", "spec", {
		alias: ["しゅぞくしょうさい"],
		speclist: [
            "龍族", "神族", "魔族", "天使", "妖精", "亜人", "物質", "魔法生物", "戦士", "術士", "アイテム", "AbCd",
		],
		short: function () {
			var str = "種族: ";
			var specs = this.dialog_obj.specs;
			$.each(specs, (i,e) => {
				str += `${this.speclist[e]}|`;
			})
			str = str.slice(0, -1); // 末尾の|を取り払う
			return str;
		},
		cond_cd: function (c) {
			var specs = this.dialog_obj.specs;
			return $.grep(specs, (e) => {
				return e == c.species;
			}).length > 0;
		},
		initialize: function () {
			// 種族リストを元に色々追加
			// alias
			this.alias.push.apply(this.speclist);
			// dom
			if(!($("div.dlg_spec_input input").length)){
				var dom = $("#dialog_spec div.dlg_spec_input");
				dom.empty();
				$.each(this.speclist, (i, e) => {
					dom.append(`<label for="spec_${i}">${e}</label>
                    <input type="checkbox" name="spec_input" id="spec_${i}" value="${i}">`);
				})
				// control group init
				dom.controlgroup();
			}
		},
		onsaved: function (obj) {
			// チェック状況を取得
			var rst = [];
			var sp_checked = $("input[name=spec_input]:checked");
			// objに突っ込む
			$.each(sp_checked, (i, e) => {
				rst.push(Number($(e).prop("value")));
			})
			obj.specs = rst;
		},
	}),
	// SSターン数
	
	// AS詳細
	
	// SS詳細
	
	// 潜在詳細
	
	
	// マニアックな人向けフィルター
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
		priority: 0,            // 表示優先度 高いほど先頭に出る
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

// ダイアログを使用する検索フィルターobjのベース
function createDialogFilterObject(name, desc, dialog, append){
	return $.extend(true, createFilterObject(), {
		type: "dialog",
		name: name,
		desc: desc,
		dialog: `#dialog_${dialog}`,
		dialog_obj: {},
		priority: 1,
		isdialogentered: false,
		initialize: () => true,
		onsaved: (flt) => true,
		do_added: function (fs, fobj) {
			// もし入力の必要があるならダイアログ召喚
			if(!this.isdialogentered){
				var clicked = $(fobj.clicked);
				var dlg_name = this.dialog;
				$(dlg_name).prop("title", name);
				$(dlg_name).dialog({
					width: 500,
					modal: true,
					open: () => {
						// 初期化関数をコール
						this.initialize();
						// close when click dialog outside
						$('.ui-widget-overlay').on('click', function () {
							$(dlg_name).dialog('close');
						});
					},
					buttons: {
						"追加": (e, ui) => {
							// データ保存関数をコール
							this.onsaved(this.dialog_obj);
							// 追加OKにする
							this.isdialogentered = true;
							// 追加処理
							addObjectToActiveFilter(clicked, this);
							$(dlg_name).dialog("close");
						},
						"キャンセル": (e, ui) => {
							$(dlg_name).dialog("close");
						}
					},
				});
				// この時は追加しない
				return false;
			}
			return true;
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

// 検索フィルター: AS(簡易)
function createAnswerSkillObject(as_name, as_short_name, append){
	as_short_name = as_short_name || as_name;
	return $.extend(true, createFilterObject(), {
		type: "answer",
		name: as_name,
		desc: `ASが<${as_name}>である精霊を検索します。`,
		short: () => as_short_name,
		cond_cd: function (c) {
			var as_list = $.map([c.as1, c.as2], (e) => {
				return (e ? e.desc : null);
			});
			return isStringContainCheck(`<${as_name}>`, as_list, true);
		},
	}, append);
}

// 検索フィルター: SS(簡易)
function createSpecialSkillObject(ss_name, ss_short_name, append){
	ss_short_name = ss_short_name || ss_name;
	return $.extend(true, createFilterObject(), {
		type: "special",
		name: ss_name,
		desc: `SSが<${ss_name}>である精霊を検索します。`,
		short: () => ss_short_name,
		cond_cd: function (c) {
			var ss_list = $.map([c.ss1, c.ss2], (e) => {
				return (e ? e.desc : null);
			});
			return isStringContainCheck(`<${ss_name}>`, ss_list, true);
		},
	}, append);
}

// 検索フィルター: SS(詳細)
function createSpecialSkillDetailObject(name, short, matchs, append){
	short = short || name;
	return $.extend(true, createFilterObject(), {
		type: "special",
		name: name,
		desc: `[${name}]を持つ精霊を検索します。`,
		short: () => short,
		cond_cd: function (c) {
			var ss_list = $.map([c.ss1, c.ss2], (e) => {
				return (e ? e.desc : null);
			});
			return isStringContainCheck(matchs, ss_list, true);
		},
	}, append);
}

// ----------------------------
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
			var flg = (this.flt1 != null && this.flt2 != null);
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

