{
	name: "神速の双輪 ヴァレンティナ・ダイア",
	cardno: 4574,
	imageno: 6292,
	hp: 2103,
	atk: 3372,
	cost: 37,
	attr: [2, -1],
	species: [8],
	awakes: [
		Costdown(2),
		Statusup(0, 100),
		Statusup(0, 200),
		Fastskill(1),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		Spec_statusup(200, 0, [8, ]),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<シャッフル>ジャンルパネルをシャッフル",
		turn: 3,
		proc: [ss_panel_shuffle()]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/550％",
		proc: ChainAttack(5.5, 5),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(+30％)",
		turn: 7,
		proc: [ss_panel_change([0,0,1,0,0]), panel_attackup(0.3)],
	},
}