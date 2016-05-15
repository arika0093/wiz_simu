// -------------------------------
// 検索フォーム生成用の定義データ群
// -------------------------------
// AS表示名 ←→ AS定義名の相互定義リスト
var sfdef_as_namelist = {
	"属性特攻": {
		genre: "《攻撃系》",
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
	"敵全体に特攻ダメージ": {
		proc: "ss_damage_all",
		check: function (e, p) {
			return e.p1.is_cond && e.p1.name == "special_attr";
		}
	},
	"敵単体に特攻ダメージ": {
		proc: "ss_damage_s",
		check: function (e, p) {
			return e.p1.is_cond && e.p1.name == "special_attr";
		}
	},
	"敵全体に残滅大魔術": "ss_continue_damage",
	"敵全体に割合ダメージ": "ss_ratiodamage_all",
	"敵単体に割合ダメージ": "ss_ratiodamage_s",
	"敵に毒を付与": "poison",
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
	// --- パネル付与関連 --------------------
	"パネル攻撃力アップ": {
		proc: "panel_attackup",
		genre: "《パネル付与系》"
	},
	"チェインプラス": "panel_chainplus",
	"パネル回復": "panel_healally",
	"パネルスキルブースト": "panel_skillboost",
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

