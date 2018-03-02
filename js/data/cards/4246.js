{
	name: "撃砕の鉄腕 アトヤ&リベルタス",
	cardno: 4246,
	imageno: 5952,
	hp: 3134,
	atk: 2327,
	cost: 49,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [8, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにダメージ25％軽減の効果を付与",
		turn: 6,
		proc: [panel_attr_guard([1, 1, 1, 1, 1], 0.25)]
	},
	islegend: true,
	Lawake: [
		NEFTJOD(30),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ/450％",
		proc: ChainAttack(4.5, 1),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにダメージ50％軽減の効果を付与",
		turn: 10,
		proc: [panel_attr_guard([1, 1, 1, 1, 1], 0.5)]
	},
}