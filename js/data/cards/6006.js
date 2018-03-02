{
	name: "不動なる剛烈刀 ミナカ･タケノカド",
	cardno: 6006,
	imageno: 7832,
	hp: 2999,
	atk: 3567,
	cost: 46,
	attr: [1, -1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<種族攻撃強化>3チェインで水属性の味方の攻撃力をアップ、戦士はさらにアップ(30%/60%)",
		proc: [ChainEnhance(0.30, [0, 1, 0, 0, 0], 3), ChainSpecEnhance(0.60, [0, 1, 0, 0, 0], [8], 3)],
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの50%を使い敵全体へダメージ(260%)",
		turn: 8,
		proc: [ss_damage_all(2.6, [1]), ss_consume_own(0.50)],
	},
	awakes: [
		Fastskill(1),
		Statusup(0, 100),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		NEFTJOD(30),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
		Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as2: {
		desc: "<種族攻撃強化>3チェインで水属性の味方の攻撃力をアップ、戦士はさらにアップ(40%/80%)",
		proc: [ChainEnhance(0.40, [0, 1, 0, 0, 0], 3), ChainSpecEnhance(0.80, [0, 1, 0, 0, 0], [8], 3)],
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの50%を使い敵全体へダメージ(330%)",
		turn: 10,
		proc: [ss_damage_all(3.3, [1]), ss_consume_own(0.50)],
	},
	Lawake: [
		Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
	],
}