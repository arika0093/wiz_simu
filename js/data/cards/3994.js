{
	name: "御伽夢幻の凛花 セニア・ツァルカ",
	cardno: 3994,
	imageno: 5675,
	hp: 2611,
	atk: 2447,
	cost: 41,
	attr: [2, -1],
	species: [9],
	awakes: [
		Costdown(2),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(0, 200),
		Statusup(200, 0),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<回復>雷属性の味方を回復、術士なら更に回復(通常：10％ / 種族：15％)",
		proc: [Heal(0.10, [0,0,1,0,0], 0), SpecHeal(0.15, [0,0,1,0,0], [9], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 6,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		NEFTJOD(30),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復、術士なら更に回復(通常：13％ / 種族：18％)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), SpecHeal(0.18, [0,0,1,0,0], [9], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、回復の効果を付与(8％)",
		turn: 8,
		proc: [ss_panel_change([0,0,1,0,0]), panel_healally(0.08)],
	},
}