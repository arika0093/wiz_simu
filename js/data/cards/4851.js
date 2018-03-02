{
	name: "神誅の黄金弓 ルフ・ファルネーゼ",
	cardno: 4851,
	imageno: 6586,
	hp: 2112,
	atk: 3303,
	cost: 43,
	attr: [2, -1],
	species: [8],
	awakes: [
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(200, 0),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Spec_statusup(200, 0, [8, ]),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<属性特効連撃>水属性の敵単体へ特効3連撃/計400％",
		proc: ChainDualAttrAttack(4.0, 0, 3, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<ダメージ強化>3ターン自分の攻撃力をアップ(+150％)",
		turn: 6,
		proc: [ss_enhance_own(1.5, 3)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効連撃>水属性の敵単体へ特効3連撃/計500％",
		proc: ChainDualAttrAttack(5.0, 0, 3, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<ダメージ強化>4ターン自分の攻撃力をアップ(+250％)",
		turn: 8,
		proc: [ss_enhance_own(2.5, 4)],
	},
}