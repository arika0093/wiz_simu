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
}, ];
