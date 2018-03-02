{
	name: "時忘れの新感覚 ユッカ",
	cardno: 4346,
	imageno: 6103,
	hp: 3494,
	atk: 2212,
	cost: 48,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Spec_statusup(200, 0, [9, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		NEFTJOD(30),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [9, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
	],
	as1: {
		desc: "<攻撃強化>5チェインで水属性の味方の攻撃力をアップ/+60％",
		proc: ChainEnhance(0.6, [0,1,0,0,0], 5)
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化>5チェインで水属性の味方の攻撃力をアップ/+90％",
		proc: ChainEnhance(0.9, [0,1,0,0,0], 5)
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス2の効果を付与",
		turn: 5,
		proc: [panel_chainplus(2)]
	},
}