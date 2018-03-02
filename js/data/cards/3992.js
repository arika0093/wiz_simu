{
	name: "復活の紅蓮道士 フー・シャオラン",
	cardno: 3992,
	imageno: 5673,
	hp: 2582,
	atk: 2322,
	cost: 36,
	attr: [0, -1],
	species: [2],
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Fastskill(1),
		Fastskill(1),
		Statusup(100, 0),
		Fastskill(1),
		Statusup(0, 200),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(200, 0, [2]),
	],
	as1: {
		desc: "<回復>火属性の味方を回復/13％",
		proc: Heal(0.13, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 6,
		proc: [ss_panel_change([1,0,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<回復>火属性の味方を回復/15％",
		proc: Heal(0.15, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、回復の効果を付与(8％)",
		turn: 8,
		proc: [ss_panel_change([1,0,0,0,0]), panel_healally(0.08)],
	},
}