{
	name: "氷をつたう夏の滴 ピノ・マリアンヌ",
	cardno: 4627,
	imageno: 6408,
	hp: 3025,
	atk: 2978,
	cost: 44,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Fastskill(1),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<回復>味方全体のHPを回復、パネルの色が増す度さらに回復(1色：11％ / 2色：15％ / 3色：17％)",
		proc: ChainPanelsHeal(0.11, 0.15, 0.17, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復、パネルの色が増す度さらに回復(1色：13％ / 2色：17％ / 3色：20％)",
		proc: ChainPanelsHeal(0.13, 0.17, 0.20, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、回復の効果を付与(6％)",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0]), panel_healally(0.08)],
	},
}