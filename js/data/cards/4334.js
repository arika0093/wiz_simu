{
	name: "永劫に謳う歓びの歌 アンジェリカ",
	cardno: 4334,
	imageno: 6118,
	hp: 2820,
	atk: 2644,
	cost: 46,
	attr: [2, -1],
	species: [1],
	awakes: [
		Costdown(2),
		Statusup(200, 0),
		Spec_statusup(200, 0, [1, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(200, 0, [1, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
	],
	as1: {
		desc: "<回復>味方全体のHPを回復、リーダー時さらに回復(通常：13％ / リーダー時：17％)",
		proc: [Heal(0.13, [1,1,1,1,1], 0), add_cond(Heal(0.17, [1,1,1,1,1], 0), when_leader())],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復、リーダー時さらに回復(通常：16％ / リーダー時：20％)",
		proc: [Heal(0.16, [1,1,1,1,1], 0), add_cond(Heal(0.20, [1,1,1,1,1], 0), when_leader())],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、回復の効果を付与(5％)",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0]), panel_healally(0.05)],
	},
}