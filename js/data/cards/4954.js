{
	name: "黒猫と魔法の世界へ 初音ミク",
	cardno: 4954,
	imageno: 6689,
	hp: 2653,
	atk: 2005,
	cost: 26,
	attr: [1, 2],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		NEFTJOD(30),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
	],
	as1: {
		desc: "<回復>水・雷属性の味方のHPを回復/11％",
		proc: Heal(0.11, [0,1,1,0,0], 0),
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを1遅らせる",
		turn: 5,
		proc: [ss_delay_all(1)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		NEFTJOD(30),
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<回復>水・雷属性の味方のHPを回復/14％",
		proc: Heal(0.14, [0,1,1,0,0], 0),
	},
	ss2: {
		desc: "<遅延大魔術>敵全体の攻撃ターンを1遅らせ、水属性のダメージ(120％)",
		turn: 6,
		proc: [ss_damage_all(1.2, [1]), ss_delay_all(1)],
	},
}