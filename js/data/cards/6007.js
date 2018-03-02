{
	name: "純真の嗜虐嬢 エル・メルフェゴール",
	cardno: 6007,
	imageno: 7833,
	hp: 3305,
	atk: 2401,
	cost: 45,
	attr: [0, 2],
	species: [2],
	islegend: true,
	as1: {
		desc: "<回復>火・雷属性の味方を回復(13%)",
		proc: Heal(0.13, [1, 0, 1, 0, 0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 4,
		proc: [ss_panel_change([1,0,1,0,0])],
	},
	awakes: [
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		NEFTJOD(30),
		Fastskill(1),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Spec_statusup(400, 0, [2, ]),
		Fastskill(1),
		Spec_statusup(0, 400, [2, ]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>火・雷属性の味方を回復(16%)",
		proc: Heal(0.16, [1, 0, 1, 0, 0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・雷属性化し、ダメージ25%軽減の効果を付与",
		turn: 8,
		proc: [ss_panel_change([1,0,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)],
	},
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Statusup(400, 0),
	],
}