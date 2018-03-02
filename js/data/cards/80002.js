{
	name: "悠の照神 ステイシー・マーキュリー",
	cardno: 80002,
	imageno: 5418,
	hp: 2521,
	atk: 2934,
	cost: 41,
	attr: [0, -1],
	species: [1],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(100, 0),
		Fastskill(1),
		Fastskill(1),
		Statusup(200, 0),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(0, 200, [1]),
		Spec_statusup(0, 200, [1]),
	],
	as1: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効4連撃/400％",
		proc: ChainDualAttrAttack(4.0, 0, 4, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効4連撃/500％",
		proc: ChainDualAttrAttack(5.0, 0, 4, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、攻撃力アップの効果を付与(+30％)",
		turn: 7,
		proc: [ss_panel_change([1,0,0,0,0]), panel_attackup(0.3)],
	},
}