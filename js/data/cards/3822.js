{
	name: "時海の冒険者 ディー・リフリス",
	cardno: 3822,
	imageno: 4267,
	hp: 2643,
	atk: 2645,
	cost: 43,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Costdown(2),
		Costdown(2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<回復>火・水属性の味方を回復/13％",
		proc: Heal(0.13, [1,1,0,0,0], 0),
	},
	ss1: {
		desc: "<ガード>2ターン火・水属性のダメージを50％軽減する",
		turn: 7,
		proc: [ss_attr_guard([1,1,0,0,0], 0.5, 2)]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<回復>火・水属性の味方を回復/15％",
		proc: Heal(0.15, [1,1,0,0,0], 0),
	},
	ss2: {
		desc: "<ガード>3ターン火・水属性のダメージを50％軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,0,0,0], 0.5, 3)]
	},
}