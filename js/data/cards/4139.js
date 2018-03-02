{
	name: "万壊の竜巻姫 ニア・ファルール",
	cardno: 4139,
	imageno: 5817,
	hp: 2442,
	atk: 2667,
	cost: 43,
	attr: [2, -1],
	species: [8],
	awakes: [
		Statusup(0, 200),
		Costdown(2),
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(200, 0),
		Statusup(200, 0),
		Statusup(200, 0),
		Costdown(2),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ/700％",
		proc: ChainAttack(7.0, 10),
	},
	ss1: {
		desc: "<大魔術>敵全体へ雷属性のダメージ(180％)",
		turn: 8,
		proc: [ss_damage_all(1.8, [2])],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 1000),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ/800％",
		proc: ChainAttack(8.0, 10),
	},
	ss2: {
		desc: "<大魔術>敵全体へ雷属性のダメージ(260％)",
		turn: 12,
		proc: [ss_damage_all(2.6, [2])],
	},
}