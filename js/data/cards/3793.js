{
	name: "時の邂逅 アリス・スチュアート",
	cardno: 3793,
	imageno: 5397,
	hp: 2894,
	atk: 2689,
	cost: 45,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		NEFTJOD(30),
		Spec_statusup(200, 0, [1, 9, ]),
		Spec_statusup(0, 200, [1, 9, ]),
	],
	as1: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、神族と術士はさらにアップ(通常：+20％ / 神族・術士：+40％)",
		proc: [ChainEnhance(0.20, [0,0,1,0,0], 0), ChainSpecEnhance(0.40, [0,0,1,0,0], [1,9], 0)],
	},
	ss1: {
		desc: "<状態異常回復>味方全体のHPを回復し(50％)、状態異常を回復する",
		turn: 7,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、神族と術士はさらにアップ(通常：+30％ / 神族・術士：+60％)",
		proc: [ChainEnhance(0.30, [0,0,1,0,0], 0), ChainSpecEnhance(0.60, [0,0,1,0,0], [1,9], 0)]
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを完全回復し、状態異常を回復する",
		turn: 9,
		proc: [ss_heal(1.0), ss_abstate_cure()],
	},
}