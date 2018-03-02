{
	name: "鏡合わせの私達 アッカ&トイボア",
	cardno: 3742,
	imageno: 5293,
	hp: 2758,
	atk: 2741,
	cost: 45,
	attr: [2, -1],
	species: [8],
	disable: true,
	awakes: [
		Statusup(200, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(200, 0, [8, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<攻撃強化>5チェインで雷属性の味方の攻撃力をアップ/+60％",
		proc: ChainEnhance(0.60, [0,0,1,0,0], 5),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃強化>5チェインで雷属性の味方の攻撃力をアップ/+90％",
		proc: ChainEnhance(0.90, [0,0,1,0,0], 5),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、チェインがプラス2の効果を付与",
		turn: 7,
		proc: [ss_panel_change([0,0,1,0,0]), panel_chainplus(2)],
	},
}