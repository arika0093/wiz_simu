{
	name: "極楽女将 トモエ・ムツラ",
	cardno: 4462,
	imageno: 6155,
	hp: 2333,
	atk: 2264,
	cost: 46,
	attr: [2, -1],
	species: [9],
	awakes: [
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Costdown(2),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Statusup(0, 200),
		Attr_relief([0, 0, 1, 0, 0, ], 10),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
	],
	as1: {
		desc: "<回復>雷属性の味方を回復/11％",
		proc: Heal(0.11, [0,0,1,0,0], 0)
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 6,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復/14％",
		proc: Heal(0.14, [0,0,1,0,0], 0)
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、ダメージ25％軽減の効果を付与",
		turn: 9,
		proc: [ss_panel_change([0,0,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)]
	},
}