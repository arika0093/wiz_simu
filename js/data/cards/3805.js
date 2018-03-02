{
	name: "刻下の司神 セリーヌ・エヴァンス",
	cardno: 3805,
	imageno: 5409,
	hp: 2652,
	atk: 2843,
	cost: 40,
	attr: [2, -1],
	species: [1],
	disable: true,
	awakes: [
		NEFTJOD(30),
		Fastskill(1),
		Spec_statusup(200, 0, [1, 4, ]),
		Spec_statusup(0, 100, [1, 4, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(0, 200, [1, 4, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [1, 4, ]),
		Spec_statusup(200, 0, [1, 4, ]),
	],
	as1: {
		desc: "<種族数攻撃>3チェインで神族と妖精の仲間の数だけダメージアップ/100+種族数×60％",
		proc: ChainDeckSpecsAttack(0.60, [1,4], 3),
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25％軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族数攻撃・攻撃強化>3チェインで神族と妖精の仲間の数だけダメージアップ100+種族数×60％、さらに雷属性の味方の攻撃力をアップ+30％",
		proc: [ChainDeckSpecsAttack(0.60, [1,4], 3), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50％軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)]
	},
}