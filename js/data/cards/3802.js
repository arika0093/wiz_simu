{
	name: "時思う司神 イレーナ・フリエル",
	cardno: 3802,
	imageno: 5406,
	hp: 2867,
	atk: 2831,
	cost: 46,
	attr: [1, -1],
	species: [1],
	disable: true,
	awakes: [
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Spec_statusup(200, 0, [1, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(200, 0, [1, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [1, ]),
		Spec_statusup(0, 200, [1, ]),
	],
	as1: {
		desc: "<回復>水属性の味方のHPを回復、神族はさらに回復(通常：10％ / 神族：17％)",
		proc: [Heal(0.10, [0,1,0,0,0], 0), SpecHeal(0.17, [0,1,0,0,0], [1], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(400, 0),
	],
	as2: {
		desc: "<回復>通常：13％ / 神族：20％",
		proc: [Heal(0.13, [0,1,0,0,0], 0), SpecHeal(0.20, [0,1,0,0,0], [1], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水属性化し、回復の効果を付与(10％)",
		turn: 7,
		proc: [ss_panel_change([0,1,0,0,0]), panel_healally(0.10)],
	},
}