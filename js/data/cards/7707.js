{
	name: "封神の機剣 エリオット・シクス",
	cardno: 7707,
	imageno: 5894,
	hp: 2321,
	atk: 6320,
	cost: 54,
	attr: [1, -1],
	species: [8],
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Statusup(200, 0),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
		Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 300, [8, ]),
		Spec_statusup(300, 0, [8, ]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(350％)",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 4,
		proc: [ss_delay_s(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(450％)",
		proc: ChainAttack(4.5, 3),
	},
	ss2: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを1遅らせ、水属性のダメージ(300％)",
		turn: 5,
		proc: [ss_damage_s(3.0, [1], 1), ss_delay_s(1)],
	},
}