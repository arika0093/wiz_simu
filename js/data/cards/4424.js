{
	name: "白霊竜の金色の翼 リティカ・パス",
	cardno: 4424,
	imageno: 6169,
	hp: 2673,
	atk: 2650,
	cost: 38,
	attr: [2, -1],
	species: [0],
	awakes: [
		Costdown(2),
		Fastskill(1),
		Attr_relief([0, 1, 1, 0, 0, ], 10),
		Statusup(100, 0),
		Attr_relief([0, 1, 1, 0, 0, ], 10),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [0, ]),
		Spec_statusup(200, 0, [0, ]),
	],
	as1: {
		desc: "<回復>水・雷属性の味方のHPを回復、龍族・術士はさらに回復(水雷：10％ / 水雷+種族：14％)",
		proc: [Heal(0.10, [0,1,1,0,0], 0), SpecHeal(0.14, [0,1,1,0,0], [0,9], 0)],
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25％軽減する",
		turn: 6,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<回復>水・雷属性の味方のHPを回復、龍族・術士はさらに回復(水雷：13％ / 水雷+種族：17％)",
		proc: [Heal(0.13, [0,1,1,0,0], 0), SpecHeal(0.17, [0,1,1,0,0], [0,9], 0)],
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50％軽減する",
		turn: 10,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)]
	},
}