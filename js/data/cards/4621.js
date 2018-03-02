{
	name: "僕を見つめる瞳 アーシア・ベネット",
	cardno: 4621,
	imageno: 6345,
	hp: 3328,
	atk: 2713,
	cost: 48,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Heal_afterbattle(10),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_relief([0, 0, 1, 0, 0, ], 20),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<回復>水属性の味方を回復/14％",
		proc: Heal(0.14, [0,1,0,0,0], 1),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 6,
		proc: [ss_delay_s(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<回復>水属性の味方を回復/17％",
		proc: Heal(0.17, [0,1,0,0,0], 1),
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせる",
		turn: 7,
		proc: [ss_delay_s(2)]
	},
}