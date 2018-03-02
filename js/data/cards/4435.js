{
	name: "心繋がる星の夜に ソラナ&ヒカリ",
	cardno: 4435,
	imageno: 6130,
	hp: 3117,
	atk: 2087,
	cost: 50,
	attr: [1, 2],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Statusup(200, 0),
		Heal_afterbattle(10),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<攻撃強化>6チェインで水・雷属性の味方の攻撃力をアップ/+70％",
		proc: ChainEnhance(0.7, [0, 1, 1, 0, 0], 6)
	},
	ss1: {
		desc: "<カウンター>3ターンの間、スキルカウンター待機(200%)",
		turn: 7,
		proc: [ss_skillcounter(2, 3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化>6チェインで水・雷属性の味方の攻撃力をアップ/+100％",
		proc: ChainEnhance(1.0, [0, 1, 1, 0, 0], 6)
	},
	ss2: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機(200%)",
		turn: 10,
		proc: [ss_skillcounter(2, 5)]
	},
}