{
	name: "運命の語り部 ミリエル・バーナム",
	cardno: 6151,
	imageno: 8005,
	hp: 2245,
	atk: 2843,
	cost: 43,
	attr: [1, 2],
	species: [9],
	islegend: true,
	as1: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色でさらにダメージアップ(400%/550%)",
		proc: ChainPanelsAttack(0, 4.0, 5.5, 3),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水&雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])],
	},
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(2),
		Fastskill(1),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(200, 0, [0, 1, 1, 0, 0, ]),
		Attr_statusup(0, 200, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
	],
	as2: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色でさらにダメージアップ(550%/700%)",
		proc: ChainPanelsAttack(0, 5.5, 7.0, 3),
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	Lawake: [
		Attr_statusup(0, 200, [0, 1, 1, 0, 0, ]),
	],
}