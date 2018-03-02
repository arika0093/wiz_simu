{
	name: "悠遠の星間を繋ぐ ヒカリ・スフィア",
	cardno: 4339,
	imageno: 6116,
	hp: 2235,
	atk: 2996,
	cost: 38,
	attr: [2, -1],
	species: [9],
	awakes: [
		Statusup(200, 0),
		Fastskill(1),
		Statusup(0, 200),
		Statusup(0, 100),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/350％",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<チェイン攻撃・回復>3チェインでダメージアップ、さらに雷属性の味方のHPを回復(攻撃：400％ / 回復：5％)",
		proc: [ChainAttack(4.0, 3), Heal(0.05, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、チェインプラス2の効果を付与",
		turn: 7,
		proc: [ss_panel_change([0,0,1,0,0]), panel_chainplus(2)],
	},
}