{
	name: "愛の彗星 ターク・シューメイカー",
	cardno: 3937,
	imageno: 5589,
	hp: 2278,
	atk: 2845,
	cost: 49,
	attr: [2, -1],
	species: [4],
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(200, 0),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		Statusup(200, 0),
		Spec_statusup(0, 200, [4, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(0, 200, [4, ]),
	],
	as1: {
		desc: "<属性特効>12チェインで水属性の敵単体へ特効ダメージ/800％",
		proc: ChainAttrAttack(8.0, 12, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 6,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Spec_statusup(0, 100, [4, ]),
	],
	as2: {
		desc: "<属性特効>12チェインで水属性の敵単体へ特効ダメージ/900％",
		proc: ChainAttrAttack(9.0, 12, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、チェインがプラス2の効果を付与",
		turn: 10,
		proc: [ss_panel_change([0,0,1,0,0]), panel_chainplus(2)],
	},
}