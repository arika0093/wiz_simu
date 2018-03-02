{
	name: "黒鎧の魔戦獣 タウルケンド",
	cardno: 4611,
	imageno: 6322,
	hp: 2303,
	atk: 505,
	cost: 47,
	attr: [1, 4],
	species: [2],
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		NEFTJOD(30),
		Spec_statusup(0, 200, [2, ]),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(0, 200),
		Spec_statusup(200, 0, [2, ]),
	],
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ/225％",
		proc: ChainAttack(2.25, 0),
	},
	ss1: {
		desc: "<回復>味方全体のHPを500回復する",
		turn: 2,
		proc: [ss_heal_absolute(500)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 3000),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでMAXHP15％を使い、ダメージアップ/550％",
		proc: add_cond(ChainAttack(5.5, 3), as_consume_own(0.15)),
	},
	ss2: {
		desc: "<回復>味方全体のHPを1000回復する",
		turn: 3,
		proc: [ss_heal_absolute(1000)],
	},
}