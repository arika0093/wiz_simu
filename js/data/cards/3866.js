{
	name: "輝龍降臨 ルシェ・ワダツミ",
	cardno: 3866,
	imageno: 5486,
	hp: 2030,
	atk: 2444,
	cost: 25,
	attr: [1, -1],
	species: [0],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Spec_statusup(0, 200, [0, ]),
		Spec_statusup(200, 0, [0, ]),
		Fastskill(1),
		Spec_statusup(0, 200, [0, ]),
		Spec_statusup(200, 0, [0, ]),
	],
	as1: {
		desc: "<属性特効>水属性の敵単体へダメージ/350％",
		proc: ChainAttrAttack(3.5, 0, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<ガード>3ターン水属性のダメージを25％軽減する",
		turn: 8,
		proc: [ss_attr_guard([0,1,0,0,0], 0.25, 3)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へダメージ/450％",
		proc: ChainAttrAttack(4.5, 0, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<ガード>3ターン水属性のダメージを50％軽減する",
		turn: 12,
		proc: [ss_attr_guard([0,1,0,0,0], 0.5, 3)]
	},
}