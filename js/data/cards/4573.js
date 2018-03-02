{
	name: "灼けつく大地の帝王 ジン・サイード",
	cardno: 4573,
	imageno: 6291,
	hp: 2659,
	atk: 2791,
	cost: 40,
	attr: [2, -1],
	species: [8],
	awakes: [
		Statusup(0, 200),
		Attr_relief([1, 0, 1, 0, 0, ], 10),
		Statusup(200, 0),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ、さらに敵のHPを吸収(攻撃：350％ / 吸収：10％)",
		proc: add_cond(ChainAttack(3.5, 5), as_hp_absorption(0.10)),
	},
	ss1: {
		desc: "<ガード>火・雷属性ダメージを2ターンの間50％軽減する",
		turn: 7,
		proc: [ss_attr_guard([1,0,1,0,0], 0.5, 2)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ、さらに敵のHPを吸収(攻撃：450％ / 吸収：10％)",
		proc: add_cond(ChainAttack(4.5, 5), as_hp_absorption(0.10)),
	},
	ss2: {
		desc: "<ガード>火・雷属性ダメージを3ターンの間50％軽減する",
		turn: 10,
		proc: [ss_attr_guard([1,0,1,0,0], 0.5, 3)]
	},
}