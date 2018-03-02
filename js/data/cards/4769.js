{
	name: "争空に舞う天翼 プルミエ・シエル",
	cardno: 4769,
	imageno: 6484,
	hp: 2875,
	atk: 2376,
	cost: 45,
	attr: [1, 2],
	species: [3],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		NEFTJOD(30),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Fastskill(2),
		Spec_statusup(200, 0, [3, ]),
		Spec_statusup(0, 200, [3, ]),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
	],
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ/400％",
		proc: ChainAttack(4.0, 4)
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ/500％",
		proc: ChainAttack(5.0, 4)
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・雷属性化し、チェインがプラス1の効果を付与",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0]), panel_chainplus(1)],
	},
}