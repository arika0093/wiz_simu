{
	name: "空飛ぶ大魔道 ソフィ・ハーネット",
	cardno: 4337,
	imageno: 6115,
	hp: 2074,
	atk: 3135,
	cost: 37,
	attr: [1, -1],
	species: [9],
	awakes: [
		Statusup(0, 100),
		Fastskill(1),
		Statusup(100, 0),
		Statusup(0, 200),
		Fastskill(1),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [9, ]),
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
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ/450％",
		proc: ChainAttack(4.5, 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(+60％)",
		turn: 7,
		proc: [panel_attackup(0.60)],
	},
}