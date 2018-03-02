{
	name: "流水華聖神 カマラ・シャニ",
	cardno: 4685,
	imageno: 6444,
	hp: 2692,
	atk: 2913,
	cost: 43,
	attr: [1, -1],
	species: [9],
	awakes: [
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(200, 0),
		Costdown(2),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<全体攻撃>敵の数に関わらず敵全体へダメージアップ/150％",
		proc: ChainAllAttack(1.5, 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・水属性化",
		turn: 5,
		proc: [ss_panel_change([1,1,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<全体攻撃>敵の数に関わらず敵全体へダメージアップ/160％",
		proc: ChainAllAttack(1.6, 0),
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
}