{
	name: "電脳☆エンジェル アン・D・ロイド",
	cardno: 3753,
	imageno: 5367,
	hp: 2561,
	atk: 2127,
	cost: 29,
	attr: [2, -1],
	species: [6],
	awakes: [
		Fastskill(1),
		Fastskill(1),
		Costdown(2),
		Costdown(2),
		Costdown(2),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Spec_statusup(0, 200, [6, ]),
	],
	as1: {
		desc: "<攻撃強化>雷属性の味方の攻撃力をアップ/+30％",
		proc: ChainEnhance(0.30, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<シャッフル>ジャンルパネルをシャッフル",
		turn: 3,
		proc: [ss_panel_shuffle()]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(500, 0),
	],
	as2: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、物質はさらにアップ(通常時：+30、物質：+60％)",
		proc: [ChainEnhance(0.30, [0,0,1,0,0], 0), ChainSpecEnhance(0.60, [0,0,1,0,0], [6], 0)],
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 7,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
}