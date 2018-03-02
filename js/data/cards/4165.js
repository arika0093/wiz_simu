{
	name: "封神の機剣 エリオット・シクス",
	cardno: 4165,
	imageno: 5894,
	hp: 1965,
	atk: 3693,
	cost: 45,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(200, 0),
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/350％",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 5,
		proc: [ss_delay_s(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 3),
	},
	ss2: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを1遅らせ、水属性のダメージ(180％)",
		turn: 6,
		proc: [ss_damage_s(1.8, [1], 1), ss_delay_s(1)],
	},
}