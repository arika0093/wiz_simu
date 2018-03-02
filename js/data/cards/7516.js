{
	name: "星の女神 サフィナ・ファウト",
	cardno: 7516,
	imageno: 9559,
	hp: 4673,
	atk: 2359,
	cost: 43,
	attr: [1,-1],
	species: [1],
	islegend: true,
	ape: "エステレラⅠ",
	awakes: [
		Fastskill(1),
		Statusup(200, 0),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [1, ]),
		Attr_relief([1,0,0,0,0,],10),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Spec_statusup(200, 0, [1, ]),
		Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
		Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
	],
	as1: {
		desc: "<攻撃強化・回復>5チェインで水属性の味方のHPを回復(10%)、さらに攻撃力をアップ(60%)",
		proc: [Heal(0.10, [0,1,0,0,0], 5), ChainEnhance(0.60, [0,1,0,0,0], 5)],
	},
	ss1: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復し(15%)、味方の攻撃力をアップ(100%)◆発動中行動不可",
		turn: 1,
		proc: [ss_reinforcement_all(4, [ss_enhance_all(1, 1, [1,1,1,1,1], "RF"), ss_regenerate(0.15, 1, "RF")])],

	},
	as2: {
		desc: "<攻撃強化・回復>5チェインで水属性の味方のHPを回復(10%)、さらに攻撃力をアップ(90%)",
		proc: [Heal(0.10, [0,1,0,0,0], 5), ChainEnhance(0.90, [0,1,0,0,0], 5)],
	},
	ss2: {
		desc: "<精霊強化>4ターンの間、味方全体のダメージを軽減(30%)◆発動中行動不可",
		turn: 6,
		proc: [ss_reinforcement_all(4, [ss_attr_guard([1,1,1,1,1], 0.3, 1, "RF")])],
	},
	Lawake: [
		Statusup(1000, 0),
	],
}