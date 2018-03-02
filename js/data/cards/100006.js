{
	name: "《ザ・セブンを統べる船》",
	cardno: 100006,
	imageno: 6837,
	hp: 2051,
	atk: 2673,
	cost: 52,
	attr: [1, 4],
	species: [6],
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		NEFTJOD(30),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<チェイン攻撃>7チェインでダメージアップ/550％",
		proc: ChainAttack(5.5, 7),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水属性化",
		turn: 4,
		proc: [ss_panel_change([0,1,0,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<チェイン攻撃>7チェインでダメージアップ/650％",
		proc: ChainAttack(6.5, 7),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・闇属性化し、くじを引く",
		turn: 10,
		proc: [ss_panel_change([0, 1, 0, 0, 1]),
			panel_attackup(0.10),
			panel_attackup(10.0),
			panel_attackup(20.0),
			panel_chainplus(1),
			panel_chainplus(50),
			panel_healally(0.01),
			panel_healally(1)
		],
	},
}