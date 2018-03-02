{
	name: "金剛覇軍騎士 デューク・エイジス",
	cardno: 4427,
	imageno: 6172,
	hp: 3990,
	atk: 1401,
	cost: 43,
	attr: [1, -1],
	species: [8],
	awakes: [
		Statusup(200, 0),
		Statusup(200, 0),
		Statusup(200, 0),
		Costdown(2),
		Costdown(2),
		Attr_relief([0, 0, 1, 0, 0, ], 10),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<回復>水属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<ガード>水・雷属性ダメージを50％軽減(継続：2ターン)",
		turn: 8,
		proc: [ss_attr_guard([0,1,1,0,0], 0.5, 2)]
	},
	islegend: true,
	Lawake: [
		Statusup(2000, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復、戦士はさらに回復(水：13％ / 水+種族：17％)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), SpecHeal(0.17, [0,1,0,0,0], [8], 0)],
	},
	ss2: {
		desc: "<ガード>水・雷属性ダメージを75％軽減(継続：2ターン)",
		turn: 10,
		proc: [ss_attr_guard([0,1,1,0,0], 0.75, 2)]
	},
}