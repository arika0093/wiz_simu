{
	name: "収穫者 ヒミカ&アドミローラ",
	cardno: 4271,
	imageno: 5965,
	hp: 2039,
	atk: 2897,
	cost: 48,
	attr: [2, -1],
	species: [2],
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(200, 0, [2, ]),
		Spec_statusup(0, 200, [2, ]),
		NEFTJOD(30),
	],
	as1: {
		desc: "<種族特効>種族が魔族・物質の敵単体へダメージ/600％",
		proc: ChainSpecAttack(6.0, 0, [2,6]),
	},
	ss1: {
		desc: "<解答削り>解答選択肢を2つ削る",
		turn: 3,
		proc: [ss_answer_narrow(2)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<種族特効>種族が魔族・物質の敵単体へダメージ/700％",
		proc: ChainSpecAttack(7.0, 0, [2,6]),
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()]
	},
}