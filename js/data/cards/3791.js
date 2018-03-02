{
	name: "始焔の継承者 レナ・イラプション",
	cardno: 3791,
	imageno: 5415,
	hp: 2045,
	atk: 3025,
	cost: 36,
	attr: [0, -1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<種族数攻撃>2チェインで術士の仲間の数だけダメージアップ(150%/200%/250%/300%/350%)",
		proc: ChainDeckSpecsAttack(0.50, [9], 2),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火属性のダメージ(180%)",
		turn: 8,
		proc: [ss_damage_all(1.8, [0])],
	},
	awakes: [
		Statusup(0, 200),
		Costdown(2),
		Statusup(200, 0),
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Statusup(0, 200),
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Fastskill(1),
		Spec_statusup(0, 200, [9, ]),
	],
	as2: {
		desc: "<種族数攻撃>2チェインで術士の仲間の数だけダメージアップ(170%/240%/310%/380%/450%)",
		proc: ChainDeckSpecsAttack(0.70, [9], 2),
	},
	ss2: {
		desc: "<大魔術>敵全体へ火属性のダメージ(260%)",
		turn: 12,
		proc: [ss_damage_all(2.6, [0])],
	},
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		Statusup(0, 400),
	],
}