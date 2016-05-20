// ------------------------------------
// 潜在結晶用データ定義
// ------------------------------------
var Awake_crystal_lists = [{
	name: "攻撃力アップ",
	imple: Statusup,
	param1: 0,
	param2: "{0}",
}, {
	name: "HPアップ",
	imple: Statusup,
	param1: "{0}",
	param2: 0,
}, {
	name: "コストダウン",
	imple: Costdown,
	param1: "{0}",
}, {
	name: "SS効果値アップ",
	imple: Awake_SkillRateup,
	param1: "{0}",
	param2: 0,
}, {
	name: "L時味方攻撃力アップ",
	imple: Attr_statusup,
	param1: 0,
	param2: "{0}",
	param3: [1, 1, 1, 1, 1],
	is_legend: true,
}, {
	name: "L時ダメージブロック300 4T （効果値は指定できません）",
	imple: Awake_SpecialSkill,
	param1: "ss_damageblock_all",
	param2: 300,
	param3: 4,
	is_legend: true,
}, {
	name: "L時HP25%回復 （効果値は指定できません）",
	imple: Awake_SpecialSkill,
	param1: "ss_heal",
	param2: 0.25,
	is_legend: true,
}, ];
