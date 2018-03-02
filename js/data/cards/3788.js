{
	name: "式紙舞う花風 キリエ・ユウテンジ",
	cardno: 3788,
	imageno: 4213,
	hp: 2697,
	atk: 2495,
	cost: 38,
	attr: [1, -1],
	species: [9],
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Costdown(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(200, 0),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Heal_afterbattle(10),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<回復>水属性の味方を回復/13％",
		proc: Heal(0.13, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<ガード>水・雷属性ダメージを2ターンの間50％軽減する",
		turn: 7,
		proc: [ss_attr_guard([0,1,1,0,0], 0.5, 2)]
	},
	islegend: true,
	Lawake: [
		NEFTJOD(30),
		Statusup(400, 0),
	],
	as2: {
		desc: "<回復>水属性の味方を回復/15％",
		proc: Heal(0.15, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<ガード>水・雷属性ダメージを3ターンの間50％軽減する",
		turn: 10,
		proc: [ss_attr_guard([0,1,1,0,0], 0.5, 3)]
	},
}