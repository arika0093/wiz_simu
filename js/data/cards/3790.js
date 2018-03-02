{
	name: "開花と生誕の地母神 ミューズ",
	cardno: 3790,
	imageno: 5416,
	hp: 2845,
	atk: 2534,
	cost: 43,
	attr: [1, -1],
	species: [1],
	disable: true,
	awakes: [
		Statusup(100, 0),
		Fastskill(1),
		Costdown(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Statusup(100, 0),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(200, 0, [1, ]),
		Spec_statusup(0, 200, [1, ]),
	],
	as1: {
		desc: "<種族攻撃強化>水属性の味方の攻撃力をアップ、神族なら更にアップ(水：+30％、水+神族：+50％)",
		proc: [ChainEnhance(0.30, [0,1,0,0,0], 0), ChainSpecEnhance(0.50, [0,1,0,0,0], [1], 0)],
	},
	ss1: {
		desc: "<遅延>攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族攻撃強化>水属性の味方の攻撃力をアップ、神族なら更にアップ(水：+40％、水+神族：+70％)",
		proc: [ChainEnhance(0.40, [0,1,0,0,0], 0), ChainSpecEnhance(0.70, [0,1,0,0,0], [1], 0)],
	},
	ss2: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
}