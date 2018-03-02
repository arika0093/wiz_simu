{
	name: "カップの中の恋人 プッチンプリン",
	cardno: 4359,
	imageno: 5999,
	hp: 2909,
	atk: 2432,
	cost: 43,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(200, 0),
		NEFTJOD(30),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Statusup(0, 200),
		Heal_afterbattle(10),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<回復>雷属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<ダメージブロック>5ターン600以下の全属性ダメージを無効化する",
		turn: 9,
		proc: [ss_damageblock_all(600, 5)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<回復>雷属性の味方のHPを回復/17％",
		proc: Heal(0.17, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<ダメージブロック>5ターン800以下の全属性ダメージを無効化する",
		turn: 12,
		proc: [ss_damageblock_all(800, 5)],
	},
}