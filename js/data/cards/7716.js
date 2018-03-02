{
	name: "鏡に映る夢現世界 ミラノ・サリス",
	cardno: 7716,
	imageno: 6317,
	hp: 4008,
	atk: 2805,
	cost: 52,
	attr: [0, 2],
	species: [9],
	awakes: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Fastskill(2),
		Attr_statusup(200, 0, [1, 0, 1, 0, 0, ]),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Spec_statusup(0, 300, [9, ]),
		Spec_statusup(300, 0, [9, ]),
	],
	as1: {
		desc: "<回復>火・雷属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：17％)",
		proc: [Heal(0.10, [1,0,1,0,0], 1), Heal(0.17, [1,0,1,0,0], 7)],
	},
	ss1: {
		desc: "<カウンター>3ターンの間、スキルカウンター待機",
		turn: 7,
		proc: [ss_skillcounter(2.0, 3)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 300),
		Statusup(700, 0),
		NEFTJOD(30),
	],
	as2: {
		desc: "<回復>火・雷属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：20％)",
		proc: [Heal(0.13, [1,0,1,0,0], 1), Heal(0.20, [1,0,1,0,0], 7)],
	},
	ss2: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機",
		turn: 10,
		proc: [ss_skillcounter(2.0, 5)],
	},
}