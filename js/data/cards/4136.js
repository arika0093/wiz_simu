{
	name: "聖光舞姫 シンシア・スターライト",
	cardno: 4136,
	imageno: 5814,
	hp: 2499,
	atk: 2478,
	cost: 31,
	attr: [2, -1],
	species: [9],
	awakes: [
		Statusup(0, 100),
		Statusup(100, 0),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<回復>雷属性の味方のHPを回復/12％",
		proc: Heal(0.12, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<回復>雷属性の味方のHPを回復/15％",
		proc: Heal(0.15, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、回復の効果を付与(8％)",
		turn: 8,
		proc: [ss_panel_change([0,0,1,0,0]), panel_healally(0.08)],
	},
}