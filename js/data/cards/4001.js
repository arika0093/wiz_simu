{
	name: "時空を超えた絆 Wセーラームーン",
	cardno: 4001,
	imageno: 5690,
	hp: 2546,
	atk: 2045,
	cost: 45,
	attr: [2, 1],
	species: [8],
	awakes: [
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Heal_afterbattle(10),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<回復>水・雷属性の味方のHPを回復、戦士はさらに回復(水雷：10％ / 水雷+種族：15％)",
		proc: [Heal(0.10, [0,1,1,0,0], 0), SpecHeal(0.15, [0,1,1,0,0], [8], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水&雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<回復>水・雷属性の味方のHPを回復、戦士はさらに回復(水雷：13％ / 水雷+種族：18％)",
		proc: [Heal(0.13, [0,1,1,0,0], 0), SpecHeal(0.18, [0,1,1,0,0], [8], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水&雷属性化し、回復の効果を付与(5％)",
		turn: 7,
		proc: [ss_panel_change([0,1,1,0,0]), panel_healally(0.05)],
	},
}