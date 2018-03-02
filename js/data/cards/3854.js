{
	name: "獅子公爵 バロン・ライオネル",
	cardno: 3854,
	imageno: 5474,
	hp: 1947,
	atk: 2205,
	cost: 17,
	attr: [2, -1],
	species: [5],
	disable: true,
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Costdown(2),
		Statusup(0, 100),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(100, 0),
		Spec_statusup(0, 200, [5, ]),
		Spec_statusup(200, 0, [5, ]),
	],
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ/160％",
		proc: ChainAttack(1.6, 0),
	},
	ss1: {
		desc: "<回復>味方全体のHPを回復する(50％)",
		turn: 7,
		proc: [ss_heal(0.5)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ/190％",
		proc: ChainAttack(1.9, 0),
	},
	ss2: {
		desc: "<回復>味方全体のHPを完全に回復する",
		turn: 9,
		proc: [ss_heal(1.0)],
	},
}