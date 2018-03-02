{
	name: "鋼心王の座 ルーファス・ヴァイル",
	cardno: 4287,
	imageno: 5873,
	hp: 2439,
	atk: 2510,
	cost: 34,
	attr: [2, -1],
	species: [8],
	awakes: [
		Statusup(0, 200),
		Fastskill(1),
		Statusup(0, 100),
		Statusup(200, 0),
		Statusup(100, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 200),
		Statusup(200, 0),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、戦士はさらにアップ(雷：+20％ / 雷+種族：+40％)",
		proc: [ChainEnhance(0.20, [0,0,1,0,0], 0), ChainSpecEnhance(0.40, [0,0,1,0,0], [8], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、戦士はさらにアップ(雷：+30％ / 雷+種族：+60％)",
		proc: [ChainEnhance(0.30, [0,0,1,0,0], 0), ChainSpecEnhance(0.60, [0,0,1,0,0], [8], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(+20％)",
		turn: 8,
		proc: [ss_panel_change([0,0,1,0,0]), panel_attackup(0.20)],
	},
}