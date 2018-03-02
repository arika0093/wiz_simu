{
	name: "超熱剛拳 ドゥーガ・ザムンタール",
	cardno: 3870,
	imageno: 5490,
	hp: 2212,
	atk: 2446,
	cost: 29,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(200, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Spec_statusup(0, 200, [9, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<属性特効連撃>水属性の敵単体へ特効5連撃/計300％",
		proc: ChainDualAttrAttack(3.0, 0, 5, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<挑発>3ターン敵の攻撃を自分に集めダメージを50％軽減する",
		turn: 7,
		proc: [ss_provocate(3, 0.5)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<属性特効連撃>水属性の敵単体へ特効5連撃/計400％",
		proc: ChainDualAttrAttack(4.0, 0, 5, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<挑発>3ターン敵の攻撃を自分に集めダメージを75％軽減する",
		turn: 9,
		proc: [ss_provocate(3, 0.75)]
	},
}