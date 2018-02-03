// ----------------------------
// 検索フィルター複合条件の一覧
// ----------------------------

// ----------------------------
// 検索フィルターの一覧
// ----------------------------
var SrchFilters = [
	// ダイアログを表示する系のフィルター
	// ---------------------------------
	createDialogFilterObject("属性詳細指定", "精霊の属性を詳細に指定します。", "attr", {
		alias: ["ぞくせいしょうさい", "火", "水", "雷", "光", "闇"],
		short: function () {
			var str = "";
			var ms = this.dialog_obj.attr_m;
			var ss = this.dialog_obj.attr_s;
			if(ms.length > 0){
				str += `主: ${get_attr_string(ms, "|")},`;
			}
			if(ss.length > 0){
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
			if(ms.length > 0){
				flg = flg && $.grep(ms, (e) => {
						return c.attr[0] == e;
					}).length > 0;
			}
			if(ss.length > 0){
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
			// pushed button
			$("#sub_alltoggle")
			.off("click")
			.on("click", () => {
				const Allchecked = 5;
				var s_checked = $("input[name=sub_attr]:checked");
				var count = s_checked.length;
				$.each($("input[name=sub_attr]"), (i, e) => {
					$(e).prop("checked", (count < Allchecked));
				})
				$("div.dlg_attr_input").controlgroup("refresh");
			})
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
	createDialogFilterObject("種族詳細指定", "精霊の種族を詳細に指定します。", "spec", {
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
	createDialogFilterObject("ASチェイン数指定", "ASが起動するチェイン数を指定します。", "aschain", {
		alias: ["あんさーすきる", "astyeinnsuu", "aschain", "ちぇいんすう"],
		typelist: [
			"より上", "以上", "一致", "以下", "未満"
		],
		is_aschainobj: true,
		short: function () {
			var o = this.dialog_obj;
			var type_short = [">", "≧", "=", "≦", "<"];
			return `AS発動ch ${type_short[o.type]} ${o.chain}`;
		},
		cond_aschain : function (c, asproc_list){
			var Invalid = -99;
			var o = this.dialog_obj;
			var opt_chain = o.chain;
			var opt_type = o.type;
			var chk_cond = (a, b) =>{
				switch (opt_type) {
					case 0:
						return a > b;
					case 1:
						return a >= b;
					case 2:
						return a == b;
					case 3:
						return a <= b;
					case 4:
						return a < b;
					default:
						return false;
				}
			}
			// ASチェイン数比較処理を行い、どれかにmatchしたらOK
			return $.grep(asproc_list, (e, i) =>{
					return (e ? chk_cond(e.chain, opt_chain) : null);
				}).length > 0;
		},
		cond_cd: function (c) {
			// ASが未指定の時はここで比較する
			// ASが何か指定されていたら、そちらでしっかり比較する
			var all_asproc = $.map([c.as1, c.as2], (e) => {
				if(e){
					if($.isArray(e.proc)){
						return [].concat(...e.proc);
					} else {
						return e.proc;
					}
				} else {
					return null;
				}
			})
			var all_target = $.map(all_asproc, (e) => 1);
			return this.cond_aschain(c, all_asproc, all_target);
		},
		initialize: () => {},
		onsaved: function (obj) {
			// objに突っ込む
			obj.chain = $("#aschain_spinner").val() - 0;
			obj.type = $("#aschain_type option:selected").val() - 0;
		},
	}),
	createDialogFilterObject("SSターン数指定", "SS発動ターンを指定します。", "ssturn", {
		alias: ["たーんすうしてい", "ssta-nnsuu", "ssturn", "すぺしゃるすきる"],
		typelist: [
			"より上", "以上", "一致", "以下", "未満"
		],
		is_ssturnobj: true,
		short: function () {
			var o = this.dialog_obj;
			var type_short = [">", "≧", "=", "≦", "<"];
			return `SS${o.isfast ? "初回" : "発動"}T ${type_short[o.type]} ${o.turn}`;
		},
		cond_ssturn : function (c, target_ss){
			var Invalid = -99;
			var o = this.dialog_obj;
			var opt_turn = o.turn;
			var opt_type = o.type;
			var fasts = (o.isfast ? has_fastnum(undefined, c) : 0);
			var chk_cond = (a, b) =>{
				switch (opt_type) {
					case 0:
						return a > b;
					case 1:
						return a >= b;
					case 2:
						return a == b;
					case 3:
						return a <= b;
					case 4:
						return a < b;
					default:
						return false;
				}
			}
			// SSターン数を抜き出す、対象でなかったらInvalid(処理しない)
			var sst = $.map([c.ss1, c.ss2], (e, i) =>{
				return ((e && target_ss[i] > 0) ? e.turn : Invalid);
			});
			// SSチャージT数を抜き出す
			var ssc = o.ischarge ? $.map([c.ss1, c.ss2], (e) =>{
					return e ? (e.charged || 0) : 0
				}) : [0, 0];
			// ターン数が-1(非処理)でないなら、指定された比較条件に沿って比較
			// どちらかがmatchしていればOK
			return (sst[0] != Invalid && chk_cond(sst[0] - fasts + ssc[0], opt_turn))
				|| (sst[1] != Invalid && chk_cond(sst[1] - fasts + ssc[1], opt_turn));
		},
		cond_cd: function (c) {
			// ターン数のみで比較
			return checkCond_CardSSturn(c, /.*/);
		},
		initialize: () => {},
		onsaved: function (obj) {
			// objに突っ込む
			obj.turn = $("#ssturn_spinner").val() - 0;
			obj.type = $("#ssturn_type option:selected").val() - 0;
			obj.isfast = $("#ssturn_isfast").prop("checked");
			obj.ischarge = $("#ssturn_ischarge").prop("checked");
		},
	}),
	createDialogFilterObject("文字列検索", "指定された文字列で精霊を検索します。", "string", {
		alias: ["もじれつけんさく", "せいきひょうげん", "regex", "string", /.?"$/],
		short: function () {
			var o = this.dialog_obj;
			var pls = (o.isregex ? "/" : "\"");
			return `${pls}${o.string}${pls}`;
		},
		is_stringfilter: true,
		cond_cd: function (c) {
			var o = this.dialog_obj;
			var is_ssflag = false;
			var srch_txt = (!o.isregex ? o.string : new RegExp(o.string));
			var srch_strs = [];
			// 検索範囲をリストアップ
			$.each(o.findpos, (i, e) => {
				var arr = [];
				switch(e){
					// Card name
					case 0:
						if(c.alias){
							arr = [].concat(c.name, ...c.alias);
						} else {
							arr = [c.name];
						}
						break;
					// AS
					case 1:
						arr = $.map([c.as1,c.as2], (e) => (e ? e.desc : null));
						break;
					// SS
					case 2:
						arr = $.map([c.ss1,c.ss2], (e) => (e ? e.desc : null));
						is_ssflag = true;
						break;
					// 潜在
					case 3:
						var mapconcat = (a, b) => {
							return $.map([a,b], (ab) => ab ? ab : null);
						}
						arr = $.map(mapconcat(e.awakes, e.Lawake), (e) => (e ? [e.name, e.desc] : null));
						break;
				}
				srch_strs.push(...arr);
			})
			// 実際に検索
			var rst = isStringContainCheck(srch_txt, srch_strs, true);
			// SSが含まれてるならターン数も検索しとく
			// もしかしたらコメントアウトするかも
			if(rst && is_ssflag){
				rst = checkCond_CardSSturn(c, srch_txt);
			}
			return rst;
		},
		initialize: function () {
			// /または"で入力してきたなら、入力中の文字列を突っ込む
			var o = this.dialog_obj;
			var str = o.matched_str;
			if(str.indexOf("\"") >= 0){
				str = str.replace(/["!&|^]/g, "");
				$("#string_input").val(str);
			}
			// contorolgroup initialize
			$("div#dialog_string div.dlg_string_input_checks").controlgroup();
		},
		onsaved: function (obj) {
			// 検索箇所
			var rst = []
			var pos_checked = $("input[name=sinput_types]:checked");
			$.each(pos_checked, (i, e) => {
				rst.push(Number($(e).prop("value")));
			})
			// objに突っ込む
			obj.string = $("#string_input").val();
			obj.isregex = $("#string_isregex").prop("checked");
			obj.findpos = rst;
		},
	}),
	
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
	// AS詳細フィルター
	// ---------------------------------
	createAnswerSkillDetailObject("攻撃系AS", null, /(?!回復|ガード)/, {
		alias: ["こうげきけいあんさーすきる", "攻撃系"],
	}),
	createAnswerSkillDetailObject("連撃AS", null, /(|属性特効)連撃/, {
		alias: ["れんげき"],
	}),
	createAnswerSkillDetailObject("味方HP削りAS", "全体自傷AS", /味方のMAXHP[0-9]{2,}[%％]を使/, {
		alias: ["みかた", "ぜんたい", "けずり", "じしょう"],
	}),
	createAnswerSkillDetailObject("解答時間依存AS", "解答依存AS", /(|平均)解答(|時間)が早いほど/, {
		alias: ["かいとうじかんいぞん", "かいとういぞん"],
	}),
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
	createSpecialSkillObject("ダメージブロック", "ダメブロ", {
		alias: ["だめぶろ"],
	}),
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
		alias: ["とくしゅぱねるへんかん", "こうかふよ"],
	}),
	/* createSpecialSkillObject("連結パネル生成", "連結パネル", {
		alias: ["れんけつぱねる"],
	}), */
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
		alias: ["かいふくSS", "SSかいふく"],
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
		alias: ["こうげきすきる", "こうげきけい"],
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
	createSpecialSkillDetailObject("味方HP削りSS", null, /味方全体の(|MAX)HP(|の)[0-9]{1,3}[%％]を/, {
		alias: ["みかたHPけずり", "ぜんたいじしょう"],
	}),
	createSpecialSkillDetailObject("不調SS", null, /HP(|が)[0-9]{1,3}%以下/, {
		alias: ["HPいぞん", "ふちょう"],
	}),
	createSpecialSkillDetailObject("敵全体対象", null, /敵全体[へに]/, {
		alias: ["てきぜんたい"],
	}),
	createSpecialSkillDetailObject("敵単体対象", null, /敵単体[へに]/, {
		alias: ["てきたんたい"],
	}),
	createSpecialSkillDetailObject("解答時間依存SS", "解答依存SS", /(|平均)解答(|時間)が早いほど/, {
		alias: ["かいとうじかんいぞん", "かいとういぞん"],
	}),
	createSpecialSkillObject("チャージSS", null, {
		cond_cd: (c) => {
			return $.map([c.ss1, c.ss2], (e) => {
					return (e ? e.charged : null);
				}).length > 0;
		}
	}),
	// 特殊効果パネル
	createSpecialSkillDetailObject("パネル付与:ダメージ軽減", "パネル付与:軽減",
		/<特殊パネル変換>.*パネルに.*(|ダメージ)軽減/, {
			alias: ["とくしゅぱねるへんかん", "ぱねるふよ", "だめーじけいげん", "がーど"],
		}),
	createSpecialSkillDetailObject("パネル付与:スキルチャージ", "パネル付与:スキチャ",
		/<特殊パネル変換>.*パネルに.*スキル(チャージ|ブースト)/, {
			alias: ["とくしゅぱねるへんかん", "ぱねるふよ", "すきるぶーすと", "すきちゃ", "すきぶ"],
		}),
	createSpecialSkillDetailObject("パネル付与:チェインプラス", "パネル付与:Ch+",
		/<特殊パネル変換>.*パネルに.*チェイン/, {
			alias: ["とくしゅぱねるへんかん", "ぱねるふよ", "ちぇいんぷらす", "ちぇいんふよ"],
		}),
	createSpecialSkillDetailObject("パネル付与:攻撃力UP", "パネル付与:攻撃UP",
		/<特殊パネル変換>.*パネルに.*攻撃力アップ/, {
			alias: ["とくしゅぱねるへんかん", "ぱねるふよ", "こうげきりょくあっぷ", "こうげきあっぷ"],
		}),
	createSpecialSkillDetailObject("パネル付与:ランダム", "パネル付与:ランダム",
		/<特殊パネル変換>.*(|の効果を)ランダムで付与/, {
			alias: ["とくしゅぱねるへんかん", "ぱねるふよ", "らんだむふよ", "らんだむぱねる"],
		}),
	// 効果解除
	createSpecialSkillDetailObject("効果解除:ガード", null,
		/<効果解除(|大魔術)>.*ガード/, {
			alias: ["こうかかいじょ", "がーどかいじょ"],
		}),
	createSpecialSkillDetailObject("効果解除:ダメージブロック", "効果解除:ダメブロ",
		/<効果解除(|大魔術)>.*(ダメージブロック|ダメブロ)/, {
			alias: ["こうかかいじょ", "だめぶろ"],
		}),
	createSpecialSkillDetailObject("効果解除:カウンター", null,
		/<効果解除(|大魔術)>.*(カウンター)/, {
			alias: ["こうかかいじょ"],
		}),
	createSpecialSkillDetailObject("効果解除:属性吸収", "効果解除:吸収",
		/<効果解除(|大魔術)>.*(属性吸収)/, {
			alias: ["こうかかいじょ", "ぞくせいきゅうしゅう"],
		}),
	// 潜在フィルター
	// ---------------------------------
	createAwakeObject("経験値取得量UP", "経験値UP", null, {
		src_alias: ["経験値取得量アップ"],
		alias: ["けいけんち"],
	}),
	createAwakeObject("ゴールド取得量UP", "ゴールドUP", null, {
		src_alias: ["ゴールド取得量アップ"],
		alias: ["ごーるど"],
	}),
	createAwakeObject("ドロップ率UP", "ドロップUP", null, {
		src_alias: ["ドロップアップ"],
	}),
	createAwakeObject("難易度ダウン", null, null, {
		alias: ["なんいどだうん"],
	}),
	createAwakeObject("戦後回復", null, null, {
		src_alias: ["バトル終了後にHP回復"],
		alias: ["せんごかいふく", "ばとるしゅうりょうじ"],
	}),
	createAwakeObject("チェインブースト", null, null),
	createAwakeObject("九死一生", null, null, {
		alias: ["きゅうしいっしょう"],
	}),
	createAwakeObject("セカンドファスト", "ｾｶﾝﾄﾞﾌｧｽﾄ", null),
	createAwakeObject("AS発動時間延長", "AS延長潜在", null, {
		alias: ["はつどうじかんえんちょう"],
	}),
	createAwakeObject("心眼", null, null, {
		alias: ["しんがん"],
	}),
	createAwakeObject("心眼・絶", "心眼(絶)", null, {
		alias: ["しんがんぜつ"],
	}),
	createAwakeObject("心眼・破", "心眼(破)", null, {
		alias: ["しんがんは"],
	}),
	createAwakeObject("精霊交替", null, null, {
		alias: ["せいれいこうたい"],
	}),
	createAwakeObject("チェインガード", "Chガード潜在", null),
	createAwakeObject("アンサースキル封印", "AS封印無効", null, {
		alias: ["ASふういんむこう", "あんさーふういんむこう"],
	}),
	createAwakeObject("SPスキル封印", "SS封印無効", null, {
		alias: ["SSふういんむこう", "SPふういんむこう", "すきるふういんむこう"],
	}),
	createAwakeObject("封印無効", null, /封印(・|無効)/, {
		alias: ["ふういんむこう"],
	}),
	createAwakeObject("毒無効", null, /毒(・|無効)/, {
		alias: ["どくむこう"],
	}),
	createAwakeObject("弱体化無効", null, /弱体化(・|無効)/, {
		alias: ["じゃくたいかむこう"],
	}),
	createAwakeObject("死の秒針無効", null, /死の秒針(・|無効)/, {
		alias: ["しのびょうしんむこう"],
	}),
	createAwakeObject("弱体化無効", null, /弱体化(・|無効)/, {
		alias: ["じゃくたいかむこう"],
	}),
	createAwakeObject("回復反転無効", null, /回復反転(・|無効)/, {
		alias: ["かいふくはんてんむこう"],
	}),
	createAwakeObject("ディスチャージ無効", null, /ディスチャージ(・|無効)/, {
		alias: ["でぃすちゃーじむこう"],
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
	createFilterObject({
		type: "other",
		name: "L時スキルのみ",
		alias: ["れじぇんどじのすきるのみ"],
		desc: "AS/SS検索において、L化スキルのみを検索対象にします。",
		short: () => "Lスキルのみ",
		cond_cd: null,
		cond_islegend: function(c, is_lskill){
			return is_lskill;
		},
		cond_aschain: function (c, tg_arr, is_lskill) {
			return is_lskill;
		},
		cond_ssturn: function (c, target_ss) {
			return target_ss[1] > 0;
		},
	}),
	
	// マニアックな人向けフィルター
	// ---------------------------------

];
var SrchMultiFilters = [
	createMultiFilter({
		id: "multi_AND",
		name: "AND",
		desc: "[上級者向け]複数条件をANDで結合します",
		char: "&",
		multi_cond: (a, b) => {
			return a & (b !== undefined ? b : true);
		}
	}),
	createMultiFilter({
		id: "multi_OR",
		name: "OR",
		desc: "[上級者向け]複数条件をORで結合します",
		char: "|",
		multi_cond: (a, b) => {
			return a | (b !== undefined ? b : true);
		}
	}),
	createMultiFilter({
		id: "multi_XOR",
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
		id: "multi_NAND",
		name: "NAND",
		desc: "[上級者向け]複数条件をNANDで結合します",
		multi_cond: (a, b) => {
			var _a = (a !== undefined ? a : true);
			var _b = (b !== undefined ? b : true);
			return !(_a & _b);
		}
	}),
	createMultiFilter({
		id: "multi_NOR",
		name: "NOR",
		desc: "[上級者向け]複数条件をNORで結合します",
		multi_cond: (a, b) => {
			var _a = (a !== undefined ? a : true);
			var _b = (b !== undefined ? b : true);
			return !(_a | _b);
		}
	}),
]



// ----------------------------
// ASチェイン数を比較する関数
function checkCond_CardASchain(c, matches){
	var as_list = $.grep([c.as1, c.as2], (e, i) => {
		var rst = (e != undefined);
		var is_lskill = (i != 0);
		rst = rst && isStringContainCheck(matches, e.desc, true);
		if(rst){
			// 全追加asを捜査して、チェイン指定Objがあったらチェックを通す
			$.each(getAllActiveFilter(), (ai, ae) => {
				if(ae.cond_aschain){
					var tg_arr = $.map(e.proc, (pr_e) => {
						return pr_e;
					});
					// 否定条件とXORで比較する
					rst = rst && (ae.cond_aschain(c, tg_arr, is_lskill) ^ ae.is_denial);
				}
			});
		}
		return (rst ? e : null);
	});
	return as_list.length > 0;
}

// SSターン条件を比較する関数
function checkCond_CardSSturn(c, matches){
	var ss_targets = $.map([c.ss1, c.ss2], (e, i) => {
		var is_ss2 = (i != 0);
		if(!e){
			return null;
		}
		if(!c.disp_ss){
			return {ss: e, is_ss2};
		}
		if((i == 0 && !c.disp_ss.is_ss2) || (i == 1 && c.disp_ss.is_ss2)){
			return {ss: e, is_ss2};
		} else {
			return null;
		}
	})
	var ss_list = $.grep(ss_targets, (e, i) => {
		var rst = (e.ss != undefined);
		rst = rst && isStringContainCheck(matches, e.ss.desc, true);
		if(rst){
			// 全追加SSを捜査して、ターン指定Objがあったらチェックを通す
			$.each(getAllActiveFilter(), (ai, ae) => {
				if(ae.cond_ssturn){
					var tg_arr = [0, 0];
					var ix = (e.is_ss2 ? 1 : 0)
					tg_arr[ix] = 1;
					rst = rst && (ae.cond_ssturn(c, tg_arr) ^ ae.is_denial);
				}
			});
		}
		return (rst ? e : null);
	});
	return ss_list.length > 0;
}


// ----------------------------
// 検索フィルターobjのベース
function createFilterObject(append){
	append = append || {};
	return $.extend(true, {
		id: "",                 // 識別ID
		type: "",               // フィルター種別
		name: "",               // 表示名
		alias: [],              // 別名
		desc: "",               // 説明名
		dialog: "",             // 呼び出しダイアログ名
		is_denial: false,       // cond_系統の判定結果を入れ替えるかどうか(否定条件)
		priority: 0,            // 表示優先度 高いほど先頭に出る
		params: {},             // 引数保存用、関数から呼び出す変数はここに保存しておくこと
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
		id: `dialog_${dialog}`,
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
			if(!this.isdialogentered){
				// 入力文字をdialog_objに格納
				this.dialog_obj.matched_str = fobj.matched_str;
				// もし入力の必要があるならダイアログ召喚
				var clicked = $(fobj.clicked);
				var dlg_name = this.dialog;
				$(dlg_name).prop("title", this.name);
				$(dlg_name).dialog({
					width: 500,
					modal: true,
					open: () => {
						// 初期化関数をコール
						this.initialize();
						// dialogをカスタマイズ
						$(".ui-dialog-titlebar").hide();
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
							// 閉じてから追加処理
							$(dlg_name).dialog("close");
							addObjectToActiveFilter(clicked, this);
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
		id: `attr_${attr_i}`,
		params: {
			attr_name: attr_name,
			attr_i: attr_i,
			is_subfixed: is_subfixed,
		},
		type: "attr",
		name: `${attr_name}属性`,
		desc: desc,
		is_subfixed: is_subfixed,
		is_subattr: is_subfixed,
		short: function () {
			var m_or_s = (this.is_subattr ? "副" : "主");
			return `${m_or_s}属性: ${this.params.attr_name}`;
		},
		cond_cd: function (c) {
			var i = (this.is_subattr ? 1 : 0)
			return c.attr[i] == this.params.attr_i;
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
		id: `spec_${spec_i}`,
		params: {
			spec_name: spec_name,
			spec_i: spec_i,
		},
		type: "spec",
		name: spec_name,
		desc: desc,
		short: function () {
			return this.params.spec_name;
		},
		cond_cd: function (c) {
			return c.species ==this.params.spec_i;
		},
	}, append);
}

// 検索フィルター: AS(簡易)
function createAnswerSkillObject(as_name, as_short_name, append){
	as_short_name = as_short_name || as_name;
	return $.extend(true, createFilterObject(), {
		id: `answer_${as_name}`,
		params: {
			as_name: as_name,
			as_short_name: as_short_name,
		},
		type: "answer",
		name: `<${as_name}>`,
		desc: `ASが<${as_name}>である精霊を検索します。`,
		short: function () {
			return this.params.as_short_name;
		},
		cond_cd: function (c) {
			var regex_str = `(\<${this.params.as_name}|・${this.params.as_name}\>)`;
			return checkCond_CardASchain(c, new RegExp(regex_str));
		},
	}, append);
}

// 検索フィルター: AS(詳細)
function createAnswerSkillDetailObject(name, short, matches, append){
	short = short || name;
	return $.extend(true, createFilterObject(), {
		id: `answer_${name}`,
		params: {
			name: name,
			short: short,
			matches: matches,
		},
		type: "answer",
		name: name,
		desc: `[${name}]を所持している精霊を検索します。`,
		short: function () {
			return this.params.short;
		},
		cond_cd: function (c) {
			return checkCond_CardASchain(c, this.params.matches);
		},
	}, append);
}

// 検索フィルター: SS(簡易)
function createSpecialSkillObject(ss_name, ss_short_name, append){
	ss_short_name = ss_short_name || ss_name;
	return $.extend(true, createFilterObject(), {
		id: `special_${ss_name}`,
		params: {
			ss_name: ss_name,
			ss_short_name: ss_short_name,
		},
		type: "special",
		name: ss_name,
		desc: `SSが<${ss_name}>である精霊を検索します。`,
		short: function () {
			return this.params.ss_short_name;
		},
		cond_cd: function (c) {
			return checkCond_CardSSturn(c, `<${this.params.ss_name}>`);
		},
	}, append);
}

// 検索フィルター: SS(詳細)
function createSpecialSkillDetailObject(name, short, matches, append){
	short = short || name;
	return $.extend(true, createFilterObject(), {
		id: `sdetail_${name}`,
		params: {
			name: name,
			short: short,
			matches: matches,
		},
		type: "special",
		name: name,
		desc: `[${name}]を持つ精霊を検索します。`,
		short: function () {
			return this.params.short;
		},
		cond_cd: function (c) {
			return checkCond_CardSSturn(c, this.params.matches);
		},
	}, append);
}

// 検索フィルター: 潜在
function createAwakeObject(aw_name, aw_short, aw_match, append){
	aw_short = aw_short || aw_name;
	return $.extend(true, createFilterObject(), {
		id: `awake_${aw_name}`,
		params: {
			aw_name,
			aw_short,
			aw_match,
		},
		type: "awake",
		name: aw_name,
		desc: `[${aw_name}]潜在を持つ精霊を検索します。`,
		short: function () {
			return this.params.aw_short;
		},
		cond_cd: function (c) {
			var rst = false;
			var srch_txt = [];
			var	src_alias = this.src_alias || [];
			var aws = c.awakes.concat(c.Lawake);
			var aw_list = $.map(aws, (e) => {
				return (e ? [e.name, e.desc] : null);
			});
			srch_txt.push(this.params.aw_match || this.params.aw_name);
			srch_txt.push(...src_alias);
			$.each(srch_txt, (i, e) => {
				rst = rst || isStringContainCheck(e, aw_list, true);
			})
			return rst;
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
		char: null,
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

// ----------------------------
// フィルターの中身をJSONに変換
function convertActiveFilterToJSON(){
	var sv_obj = {
		query: "query/searchex",
		disp_ss: isDispSSDmg,
		sdmg_obj: getSdmgObject(),
		inp: $("#schbox").val(),
		af: ActiveSrchFilter,
	}
	return JSON.stringify(sv_obj);
}

// JSONからフィルターの中身を復元
function restoreActiveFilterFromJSON(json){
	var restoreRecursion = (obj) => {
		if(!obj || !obj.id){
			return {};
		}
		var afs = SrchFilters;
		var af = $.grep(afs, (e) => {
			return e.id == obj.id;
		})[0];
		if(obj.flt1){
			obj.flt1 = restoreRecursion(obj.flt1);
		}
		if(obj.flt2){
			obj.flt2 = restoreRecursion(obj.flt2);
		}
		return $.extend(true, {}, af, obj);
	}
	var rst = {};
	var aj = JSON.parse(json, (k, v) => {
		if(typeof v === "string" && /^\/.*\/$/.test(v)){
			v = new RegExp(v.replace(/(^\/|\/$)/g, ""));
		}
		return v;
	});
	// active-filterは既存のsrchFilterを使って復元する
	aj.af = $.map(aj.af, (e) => {
		return restoreRecursion(e);
	});
	return aj;
}

