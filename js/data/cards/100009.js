{
	name: "刻下の光神 セリーヌ・エヴァンス",
	cardno: 100009,
	imageno: 5420,
	hp: 2872,
	atk: 2410,
	cost: 41,
	attr: [2, -1],
	species: [1],
	disable: true,
	awakes: [
		Costdown(2),
		Statusup(0, 200),
		Statusup(200, 0),
		Statusup(200, 0),
		Statusup(0, 100),
		Costdown(2),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(200, 0, [1, ]),
		Spec_statusup(0, 200, [1, ]),
	],
	as1: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、神族なら更にアップ(通常：+30％、種族：50％)",
		proc: [ChainEnhance(0.30, [0,0,1,0,0], 0), ChainSpecEnhance(0.50, [0,0,1,0,0], [1], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、神族なら更にアップ(通常：+40％、種族：70％)",
		proc: [ChainEnhance(0.40, [0,0,1,0,0], 0), ChainSpecEnhance(0.70, [0,0,1,0,0], [1], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、回復の効果を付与(8％)",
		turn: 7,
		proc: [ss_panel_change([0,0,1,0,0]), panel_healally(0.08)],
	},
}