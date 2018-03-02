{
	name: "AbCd:Γ《慈愛の根源 スビェート》",
	cardno: 5121,
	imageno: 7069,
	hp: 4101,
	atk: 2431,
	cost: 77,
	attr: [2, 3],
	species: [11],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		NEFTJOD(30),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
	],
	as1: {
		desc: "<回復>雷属性の味方のHPを回復/13%",
		proc: Heal(0.13, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷・光属性化",
		turn: 3,
		proc: [ss_panel_change([0,0,1,1,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>雷属性の味方のHPを回復/15%",
		proc: Heal(0.15, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷・光属性化し、回復の効果を付与(回復：10％)",
		turn: 6,
		proc: [ss_panel_change([0,0,1,1,0]), panel_healally(0.10)],
	},
}