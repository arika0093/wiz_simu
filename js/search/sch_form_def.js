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
			return e.isall && e.desc.indexOf("分散") > 0;
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
	"敵全体に残滅大魔術": "ss_continue_damage",
	"敵全体に割合ダメージ": "ss_ratiodamage_all",
	"敵単体に割合ダメージ": "ss_ratiodamage_s",
	// --- 補助関連 -------------------------
	"味方全体攻撃力アップ": {
		proc: "ss_enhance_all",
		genre: "《味方効果付与系》",
	},
	"自身の攻撃力アップ": "ss_enhance_own",
	"味方全体にブースト": "ss_boost_enhance_all",
	"自身にブースト": "ss_boost_enhance_s",
	"味方全体のステータスアップ": "ss_statusup_all",
	"精霊強化効果": "ss_reinforcement_all",
	"ダメージブロック": "ss_damageblock_all",
	"状態異常無効": "ss_absattack_disable",
	"スキルカウンター待機": "ss_skillcounter",
	"スキルブースト": "ss_skillboost",
	"敵ダメージを軽減": "ss_attr_guard",
	"挑発": "ss_provocate",
	// --- 敵妨害関連 -----------------------
	"全体遅延": {
		proc: "ss_delay_all",
		genre: "《敵妨害系》",
	},
	"単体遅延": "ss_delay_s",
	"敵に毒を付与": "poison",
	"無に帰す": "ss_death_limit",
	// --- 回復関連 -------------------------
	"全体回復": {
		proc: "ss_heal",
		genre: "《回復関連》",
	},
	"全体回復(固定値)": "ss_heal_absolute",
	"状態異常回復": "ss_abstate_cure",
	"リジェネ": "ss_regenerate",
	"起死回生": "ss_revival",
	"蘇生": "ss_resurrection",
	// --- チェイン関連 ----------------------
	"チェイン直接付与": {
		proc: "ss_addchain",
		genre: "《チェイン関連》",
	},
	"チェイン保護": "ss_chain_protect",
	// --- パネル関連 --------------------
	"パネルシャッフル": "ss_panel_shuffle",
	"パネル変換": "ss_panel_change",
	"パネル攻撃力アップ": {
		proc: "panel_attackup",
		genre: "《パネル関連系》"
	},
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
	"全体自傷": "ss_consume_all",
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
	"属性ステアップ/複属性でさらにアップ": {
		type: "status_up",
		check: function (e) {
			return e.sub_attr;
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
	"精霊交代": {
		type: "awake_noeffect",
		check: function (e) {
			return e.name == "精霊交代";
		}
	},
	"難易度ダウン": {
		type: "awake_noeffect",
		check: function (e) {
			return e.name == "難易度ダウン";
		}
	},
	"AS封印無効": {
		type: "abstate_invalid",
		check: function (e) {
			return e.tgtype == "as_sealed";
		}
	},
	"SS封印無効": {
		type: "abstate_invalid",
		check: function (e) {
			return e.tgtype == "ss_sealed";
		}
	},
	"毒無効": {
		type: "abstate_invalid",
		check: function (e) {
			return e.tgtype == "poison";
		}
	},
	"L時スキル発動": {
		type: "awake_spskill",
		check: function (e) {
			return true;
		}
	},
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