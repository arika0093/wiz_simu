{
	name: "外道冥路の彷徨者 リセル・ルヘリア",
	cardno: 4587,
	imageno: 6313,
	hp: 2567,
	atk: 2331,
	cost: 49,
	attr: [2, 1],
	species: [9],
	disable: true,
	awakes: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(0, 200, [9, ]),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<攻撃強化>5チェインで水・雷属性の味方の攻撃力をアップ/+60％",
		proc: ChainEnhance(0.60, [0,1,1,0,0], 5),
	},
	ss1: {
		desc: "<毒>4ターン敵全体に毒のダメージを与える(5000ダメージ)",
		turn: 6,
		proc: [poison(5000, 4)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 200),
		Statusup(800, 0),
	],
	as2: {
		desc: "<攻撃強化>5チェインで水・雷属性の味方の攻撃力をアップ/+90％",
		proc: ChainEnhance(0.90, [0,1,1,0,0], 5),
	},
	ss2: {
		desc: "<毒>5ターン敵全体に毒のダメージを与える(9999ダメージ)",
		turn: 10,
		proc: [poison(9999, 5)],
	},
}