// -------------------------------
// 検索フォーム生成用の定義データ群
// -------------------------------
// AS表示名 ←→ AS定義名の相互定義リスト
var sfdef_as_namelist = {
	// 攻撃系
	"攻撃関連": {
		genre: "《攻撃系》",
		type: "attack",
		check: function (e) {
			return true;
		},
	},
	"連撃": {
		type: "attack",
		check: function (e) {
			return e.atkn > 1;
		},
	},
	"属性特効": {
		type: "attack",
		check: function (e) {
			var ea = e.attr;
			for (var ea_s in ea) {
				if (ea[ea_s] < 1) {
					return true;
				}
			}
			return false;
		},
	},
	"種族特効": {
		type: "attack",
		check: function (e) {
			var ea = e.spec;
			for (var ea_s in ea) {
				if (ea[ea_s] < 1) {
					return true;
				}
			}
			return false;
		},
	},
	"全体攻撃": {
		type: "attack",
		check: function (e) {
			return e.isall && !e.isvariance;
		},
	},
	"分散攻撃": {
		type: "attack",
		check: function (e) {
			return e.isall && e.isvariance;
		},
	},
	// エンハンス系
	"エンハンス関連": {
		genre: "《エンハンス系》",
		type: "support",
		check: function (e) {
			return e.subtype == "enhance";
		},
	},
	"複属性考慮エンハンス": {
		type: "support",
		check: function (e) {
			return e.subattr;
		},
	},
	// 回復系
	"回復関連": {
		genre: "《回復系》",
		type: "heal",
		check: function (e) {
			return true;
		},
	},
	// その他
	"AS軽減": {
		genre: "《その他》",
		type: "as_spskill",
		check: function (e) {
			return e.subtype == "as_guard";
		},
	},
	// 条件/攻撃後処理
	"リーダー時効果値アップ": {
		genre: "《条件/攻撃後処理》",
		type: null,
		check: function (e) {
			return e.desc == when_leader().desc;
		},
	},
	"単体自傷攻撃": {
		type: null,
		check: function (e) {
			return e.af_desc == as_consume_own().af_desc;
		},
	},
	"全体自傷攻撃": {
		type: null,
		check: function (e) {
			return e.af_desc == as_consume_all().af_desc;
		},
	},
};

// SS表示名 ←→ SS定義名の相互定義リスト
var sfdef_ss_namelist = {
	// --- 攻撃関連 -------------------------
	"敵全体にダメージ": {
		proc: "ss_damage_all",
		genre: "《攻撃/ダメージ系》",
	},
	"敵単体にダメージ": "ss_damage_s",
	"敵単体に連撃攻撃": {
		proc: "ss_damage_s",
		check: function (e, p) {
			return e.p3 >= 2;
		}
	},
	"敵全体に特効ダメージ": {
		proc: "ss_damage_all",
		check: function (e, p) {
			return e.p1.is_cond && e.p1.name == "special_attr";
		}
	},
	"敵単体に特効ダメージ": {
		proc: "ss_damage_s",
		check: function (e, p) {
			return e.p1.is_cond && e.p1.name == "special_attr";
		}
	},
	"敵単体に斬撃大魔術": "ss_damage_slash",
	"敵全体に残滅大魔術": "ss_continue_damage",
	"敵全体に割合ダメージ": {
		proc: ["ss_ratiodamage", "ss_ratiodamage_all"],
		target: "all",
	},
	"敵単体に割合ダメージ": {
		proc: ["ss_ratiodamage", "ss_ratiodamage_s"],
		target: "single",
	},
	// --- 補助関連 -------------------------
	"味方全体攻撃力アップ": {
		proc: ["ss_enhance", "ss_enhance_all", "ss_enhance_subattr"],
		target: "ally",
		genre: "《味方効果付与系》",
	},
	"味方全体攻撃力アップ(副属性UP)": {
		proc: ["ss_enhance_subattr"],
		target: "ally",
	},
	"自身の攻撃力アップ": {
		proc: ["ss_enhance", "ss_enhance_own"],
		target: "own",
	},
	"味方全体にブースト": {
		proc: ["ss_boost_enhance", "ss_boost_enhance_all"],
		target: "ally",
	},
	"自身にブースト": {
		proc: ["ss_boost_enhance", "ss_boost_enhance_own"],
		target: "own",
	},
	"味方全体のステータスアップ": {
		proc: ["ss_statusup", "ss_statusup_all"],
		target: "ally",
	},
	"自身のステータスアップ": {
		proc: "ss_statusup",
		target: "own",
	},
	"精霊強化効果": {
		proc: ["ss_reinforcement", "ss_reinforcement_all"],
	},
	"ダメージブロック": {
		proc: ["ss_damageblock", "ss_damageblock_all"],
	},
	"状態異常無効": "ss_absattack_disable",
	"スキルカウンター待機": "ss_skillcounter",
	"多段カウンター待機": "ss_dualcounter",
	"スキルブースト": "ss_skillboost",
	"敵ダメージを軽減": "ss_attr_guard",
	"挑発": "ss_provocate",
	// --- 敵妨害関連 -----------------------
	"全体遅延": {
		proc: "ss_delay",
		target: "all",
		genre: "《敵妨害系》",
	},
	"単体遅延": {
		proc: "ss_delay",
		target: "single",
	},
	"敵に毒を付与": "poison",
	"無に帰す": "ss_death_limit",
	// --- 回復関連 -------------------------
	"全体回復": {
		proc: "ss_heal",
		genre: "《回復関連》",
	},
	"全体回復(固定値)": "ss_heal_absolute",
	"状態異常回復": "ss_abstate_cure",
	"継続回復": "ss_regenerate",
	"起死回生": "ss_revival",
	"蘇生": "ss_resurrection",
	// --- チェイン関連 ----------------------
	"チェイン直接付与": {
		proc: "ss_addchain",
		genre: "《チェイン関連》",
	},
	"チェイン保護": "ss_chain_protect",
	// --- パネル関連 --------------------
	"パネルシャッフル": {
		proc: "ss_panel_shuffle",
		genre: "《パネル関連系》"
	},
	"パネル変換": "ss_panel_change",
	"パネル攻撃力アップ": "panel_attackup",
	"チェインプラス": "panel_chainplus",
	"パネル回復": "panel_healally",
	"パネルスキルブースト": "panel_skillboost",
	"パネル軽減": "panel_attr_guard",
	// --- 効果解除系 ------------------------
	"敵のカウンター解除": {
		proc: "ss_break_attackcounter",
		genre: "《敵効果解除系》",
	},
	"敵のスキル反射解除": "ss_break_skillcounter",
	"敵のガード解除": "ss_break_attrguard",
	"敵のダメージブロック解除": "ss_break_dblock",
	// --- その他 ------------------------
	"最後に使用したスキルをコピー": {
		proc: "ss_latest_copy",
		genre: "《その他》",
	},
	"AS発動時間延長": "ss_astime_ext",
	"解答を見破る": "ss_answer_foresight",
	// --- スキル効果 ---------------------
	"スキル反射無視": {
		proc: "ss_ignore_skillcounter",
		genre: "《付与効果系》",
	},
	"自身自傷": "ss_consume_own",
	"全体自傷": {
		proc: null,
		check: function (e, p) {
			var ps = [e.p1, e.p2, e.p3, e.p4];
			if (e.name == "ss_consume_all") {
				return true;
			}
			return $.grep(ps, function (p) {
				return p && p.is_cond && p.name == "ss_consume_all_cond";
			}).length > 0;
		}
	},
	"チャージスキル": {
		proc: null,
		check: function (e, p) {
			return p.charged > 0;
		}
	},
	"非チャージスキル": {
		proc: null,
		check: function (e, p) {
			return p.charged === undefined;
		}
	},
};

// 潜在表示名 ←→ 潜在定義内容の相互定義リスト
var sfdef_aw_namelist = {
	"戦後回復": {
		type: "heal_after_battle",
		check: function (e) {
			return true;
		}
	},
	"九死一生": {
		type: "neftjod",
		check: function (e) {
			return true;
		}
	},
	"単属性ステアップ": {
		type: "status_up",
		check: function (e) {
			return e.sub_attr && e.sub_attr["-1"];
		}
	},
	"属性ステアップ/複属性でさらにアップ": {
		type: "status_up",
		check: function (e) {
			return e.sub_attr && !e.sub_attr["-1"];
		}
	},
	"経験値取得量アップ": {
		type: "awake_noeffect",
		check: function (e) {
			return e.name == "経験値取得量アップ";
		}
	},
	"ゴールド取得量アップ": {
		type: "awake_noeffect",
		check: function (e) {
			return e.name == "ゴールド取得量アップ";
		}
	},
	"心眼": {
		type: "awake_noeffect",
		check: function (e) {
			return e.name == "心眼";
		}
	},
	"精霊交替": {
		type: "awake_noeffect",
		check: function (e) {
			return e.name == "精霊交替";
		}
	},
	"難易度ダウン": {
		type: "awake_noeffect",
		check: function (e) {
			return e.name == "難易度ダウン";
		}
	},
	"チェインブースト": {
		type: "awake_chboost",
		check: function (e) {
			return true;
		}
	},
	"AS封印無効": {
		type: "abstate_invalid",
		check: function (e) {
			return sfdef_absinvalid(e.tgtype, "as_sealed");
		}
	},
	"SS封印無効": {
		type: "abstate_invalid",
		check: function (e) {
			return sfdef_absinvalid(e.tgtype, "ss_sealed");
		}
	},
	"毒無効": {
		type: "abstate_invalid",
		check: function (e) {
			return sfdef_absinvalid(e.tgtype, "poison");
		}
	},
	"L時スキル発動": {
		type: "awake_spskill",
		check: function (e) {
			return true;
		}
	},
}

// 正規表現まとめ(AS)
var sfdef_asregex = {
	"一定HP以上で効果値UP": "/HP(が|)[1-9][0-9]%以上",
	"一定HP以下で効果値UP": "/HP(が|)[1-9][0-9]%以下",
	"5回以上の連撃": "/([5-9]|10)回連続攻撃",
	"効果値500%以上のAS": "/(|[1-9])[5-9][0-9]{2}%",
}

// 正規表現まとめ(SS)
var sfdef_ssregex = {
	"10回以上Hitの多段魔術": "/[火水雷](・[火水雷光闇]属性の(|[1-9])[5-9]|属性の[1-9][0-9])回連続ダメージ",
	"ニ色パネル変換": "/<(特殊|)パネル変換>ジャンルパネルを[火水雷]・[火水雷光闇]属性化",
	"三色パネル変換": "/<(特殊|)パネル変換>ジャンルパネルをALL属性化",
	"HPステアップ": "/<()ステータスアップ>味方全体の(攻撃力を[0-9]{3,}ダウンし、味方全体の|攻撃力と|)HPを[0-9]{3,}アップ",
	"ATKステアップ": "/<()ステータスアップ>味方全体の(HPを[0-9]{3,}ダウンし、味方全体の|)攻撃力(とHP|)を[0-9]{3,}アップ",
}

// 種族定義
Species = [
	"龍族",
	"神族",
	"魔族",
	"天使",
	"妖精",
	"亜人",
	"物質",
	"魔法生物",
	"戦士",
	"術士",
	"アイテム",
	"AbCd",
];

// 異常無効確認用の関数
function sfdef_absinvalid(tgtype, type) {
	if ($.isArray(tgtype)) {
		return $.grep(tgtype, function (e) {
			return e == type;
		}).length > 0;
	} else {
		return tgtype == type;
	}
}