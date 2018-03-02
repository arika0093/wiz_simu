{
	name: "清霊神の聖心 セレサ・ラグヌス",
	cardno: 4539,
	imageno: 6289,
	hp: 2438,
	atk: 3065,
	cost: 43,
	attr: [1, -1],
	species: [8],
	awakes: [
		Costdown(2),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		Statusup(100, 0),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/350％",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(0, 400),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 3),
	},
	ss2: {
		desc: "<遅延大魔術>攻撃ターンを3遅らせ、敵全体へ水属性のダメージ(180％)",
		turn: 15,
		proc: [ss_damage_all(1.8, [1]), ss_delay_all(3)],
	},
}