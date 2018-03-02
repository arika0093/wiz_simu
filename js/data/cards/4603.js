{
	name: "聖フリーダム騎士 チッタ・レニーノ",
	cardno: 4603,
	imageno: 6330,
	hp: 2801,
	atk: 1571,
	cost: 44,
	attr: [1, 3],
	species: [8],
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/300％",
		proc: ChainAttack(3.0, 3),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・光属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,0,1,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/400％",
		proc: ChainAttack(4.0, 3),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・光属性化し、攻撃力アップの効果を付与(+30％)",
		turn: 8,
		proc: [ss_panel_change([0,1,0,1,0]), panel_attackup(0.3)],
	},
}