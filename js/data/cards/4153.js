{
	name: "蒼星紋章士 メリエル・エクリプス",
	cardno: 4153,
	imageno: 5878,
	hp: 2344,
	atk: 2608,
	cost: 44,
	attr: [1, -1],
	species: [9],
	awakes: [
		Costdown(2),
		Statusup(0, 200),
		Costdown(2),
		Statusup(0, 200),
		Costdown(2),
		Fastskill(1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<パネル色数攻撃>7チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：650％ / 3色：800％)",
		proc: ChainPanelsAttack(0, 6.5, 8.0, 7),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<パネル色数攻撃>7チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：750％ / 3色：900％)",
		proc: ChainPanelsAttack(0, 7.5, 9.0, 7),
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
}