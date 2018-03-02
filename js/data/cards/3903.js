{
	name: "涙色の絶大魔法 チカ・ストロベリ",
	cardno: 3903,
	imageno: 5583,
	hp: 2749,
	atk: 2343,
	cost: 46,
	attr: [1, -1],
	species: [4],
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		NEFTJOD(30),
		Spec_statusup(200, 0, [4, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [4, ]),
		Spec_statusup(200, 0, [4, ]),
		Spec_statusup(0, 200, [4, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<攻撃強化>7チェインで水属性の味方の攻撃力をアップ/+80％",
		proc: ChainEnhance(0.8, [0,1,0,0,0], 7),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<攻撃強化>水属性の味方の攻撃力をアップ/+80％",
		proc: ChainEnhance(0.8, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水属性化し、チェインがプラス2の効果を付与",
		turn: 7,
		proc: [ss_panel_change([0,1,0,0,0]), panel_chainplus(2)],
	},
}