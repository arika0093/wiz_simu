{
	name: "真なる鉄壁 カエデ・ジングウジ",
	cardno: 4453,
	imageno: 6146,
	hp: 2874,
	atk: 3003,
	cost: 38,
	attr: [2, -1],
	species: [8],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(200, 0),
		Statusup(200, 0),
		Costdown(2),
		Attr_relief([1, 0, 0, 0, 0, ], 20),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<連撃>8チェインで敵単体を4回連続攻撃/計600％",
		proc: ChainDualAttack(6.0, 8, 4),
	},
	ss1: {
		desc: "<ガード>3ターン火属性ダメージを75％軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,0,0,0,0], 0.75, 3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<連撃>8チェインで敵単体を4回連続攻撃/計700％",
		proc: ChainDualAttack(7.0, 8, 4),
	},
	ss2: {
		desc: "<ガード>3ターン火属性ダメージを100％軽減する",
		turn: 8,
		proc: [ss_attr_guard([1,0,0,0,0], 1, 3)]
	},
}