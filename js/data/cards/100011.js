{
	name: "奇想天外☆大満開 ナナ・クラリィ",
	cardno: 100011,
	imageno: 5903,
	hp: 2567,
	atk: 2104,
	cost: 50,
	attr: [2, 1],
	species: [9],
	ape: "大魔道杯 ギルドマスターズ",
	awakes: [
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Fastskill(1),
		NEFTJOD(30),
		Statusup(200, 0),
		Spec_statusup(200, 0, [9, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<攻撃強化>7チェインで水・雷属性の味方の攻撃力をアップ、15チェインで更にアップ(7チェイン：+60％ / 15チェイン：+140％)",
		proc: [ChainEnhance(0.60, [0,1,1,0,0], 7), ChainEnhance(1.4, [0,1,1,0,0], 15)],
	},
	ss1: {
		desc: "<パネル変換>1クエストに1回のみ、ジャンルパネルを水・雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化>7チェインで水・雷属性の味方の攻撃力をアップ、15チェインで更にアップ(7チェイン：+80％ / 15チェイン：+160％)",
		proc: [ChainEnhance(0.80, [0,1,1,0,0], 7), ChainEnhance(1.6, [0,1,1,0,0], 15)],
	},
	ss2: {
		desc: "<特殊パネル変換>1クエストに1回のみ、ジャンルパネルを水・雷属性化し、様々な効果を付与",
		turn: 8,
		proc: [ss_panel_change([0,1,1,0,0]), panel_attackup(0.30), panel_chainplus(3), panel_healally(0.20)],
	},
}