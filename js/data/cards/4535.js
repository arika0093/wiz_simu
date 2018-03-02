{
	name: "真夏の熱視線 ニコラ・モーガン",
	cardno: 4535,
	imageno: 6152,
	hp: 3117,
	atk: 2772,
	cost: 43,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Costdown(2),
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Fastskill(1),
		Fastskill(2),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<回復>水・雷属性の味方のHPを回復、術士はさらに回復(水雷：10％ / 水雷+種族：15％)",
		proc: [Heal(0.10, [0,1,1,0,0], 0), SpecHeal(0.15, [0,1,1,0,0], [9], 0)],
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_s(3)]
	},
	islegend: true,
	Lawake: [
		NEFTJOD(30),
		Statusup(500, 0),
		Statusup(0, 300),
	],
	as2: {
		desc: "<回復>水・雷属性の味方のHPを回復、術士はさらに回復(水雷：13％ / 水雷+種族：18％)",
		proc: [Heal(0.13, [0,1,1,0,0], 0), SpecHeal(0.18, [0,1,1,0,0], [9], 0)],
	},
	ss2: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを3遅らせ、単体に雷属性のダメージ(400％)",
		turn: 15,
		proc: [ss_damage_s(4.0, [2], 1), ss_delay_s(3)],
	},
}