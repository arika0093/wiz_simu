{
	name: "修羅か夜叉か ギンガ・カノン",
	cardno: 5459,
	imageno: 7240,
	hp: 1553,
	atk: 5873,
	cost: 52,
	attr: [2, -1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<属性特効>4チェインで水属性の敵単体へ特効ダメージ、さらに敵HPを吸収する(600%/6%)",
		proc: add_cond(ChainAttrAttack(6.0, 4, [0, 1, 0, 0, 0]), as_hp_absorption(0.06)),
	},
	ss1: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵単体へダメージ(240%×人数)",
		turn: 10,
		proc: [ss_damage_s(ss_consume_all_cond(2.4, 0.5), [2], 1)],
	},
	awakes: [
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		Costdown(6),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Fastskill(1),
		Fastskill(1),
		Fastskill(2),
		NEFTJOD(30),
		NEFTJOD(30),
	],
	as2: {
		desc: "<属性特効>4チェインで水属性の敵単体へ特効ダメージ、さらに敵HPを吸収する(700%/6%)",
		proc: add_cond(ChainAttrAttack(7.0, 4, [0, 1, 0, 0, 0]), as_hp_absorption(0.06)),
	},
	ss2: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵単体へダメージ(300%×人数)",
		turn: 12,
		proc: [ss_damage_s(ss_consume_all_cond(3.0, 0.5), [2], 1)],
	},
	Lawake: [
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
	],
}