{
	name: "聖樹の守護霊弓 アルティミシア",
	cardno: 3781,
	imageno: 5413,
	hp: 2843,
	atk: 2422,
	cost: 43,
	attr: [2, -1],
	species: [1],
	awakes: [
		Statusup(0, 200),
		Costdown(2),
		Statusup(200, 0),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Costdown(2),
		Spec_statusup(0, 200, [1, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Heal_afterbattle(10),
		Spec_statusup(200, 0, [1, ]),
	],
	as1: {
		desc: "<回復>味方全員を回復、神族なら更に回復(通常：10％ / 神族：17％)",
		proc: [Heal(0.10, [1,1,1,1,1], 0), SpecHeal(0.17, [1,1,1,1,1], [1], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火&雷属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<回復>味方全員を回復、神族なら更に回復(通常：13％ / 神族：20％)",
		proc: [Heal(0.13, [1,1,1,1,1], 0), SpecHeal(0.20, [1,1,1,1,1], [1], 0)],
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
}