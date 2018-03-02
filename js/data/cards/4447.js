{
	name: "轟雷の機弓 ニコラ・モーガン",
	cardno: 4447,
	imageno: 6140,
	hp: 3092,
	atk: 2787,
	cost: 45,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Statusup(200, 0),
		Statusup(200, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<回復>雷属性の味方を回復、5チェインで更に回復(通常：10％ / 5チェイン：15％)",
		proc: [Heal(0.10, [0,0,1,0,0], 0), Heal(0.15, [0,0,1,0,0], 5)],
	},
	ss1: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復、5チェインで更に回復(通常：13％ / 5チェイン：18％)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), Heal(0.18, [0,0,1,0,0], 5)],
	},
	ss2: {
		desc: "<遅延>攻撃ターンを3遅らせる、さらに味方全体のHPを回復する(50％)",
		turn: 13,
		proc: [ss_delay_all(3), ss_heal(0.5)],
	},
}