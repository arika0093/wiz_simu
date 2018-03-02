{
	name: "AbCd-γ:《絶望の聖地 スビェート》",
	cardno: 5049,
	imageno: 6789,
	hp: 2201,
	atk: 3004,
	cost: 60,
	attr: [2, 3],
	species: [11],
	awakes: [
		Costdown(6),
		Attr_relief([1, 1, 1, 1, 1, ], 10),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		Attr_relief([1, 1, 1, 1, 1, ], 10),
		NEFTJOD(30),
		Attr_relief([1, 1, 1, 1, 1, ], 10),
		Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
		Attr_relief([1, 1, 1, 1, 1, ], 10),
		NEFTJOD(30),
		Attr_relief([1, 1, 1, 1, 1, ], 10),
	],
	as1: {
		desc: "<快調攻撃>残りHPが90％以上でダメージアップ&敵HPを吸収(攻撃：360％ / 吸収：12％)",
		proc: add_cond(ChainAttack(3.6, 0), when_hp_more(0.90), as_hp_absorption(0.12))
	},
	ss1: {
		desc: "<大魔術>敵全体へ雷・光属性のダメージ(180％)",
		turn: 8,
		proc: [ss_damage_all(1.8, [2, 3])],
	},
	islegend: true,
	is_dist: true,
	disable: true,
	Lawake: [
		NEFTJOD(30),
		Statusup(0, 400),
		Statusup(500, 0),
	],
	as2: {
		desc: "<快調攻撃>残りHPが90％以上でダメージアップ&敵HPを吸収(攻撃：460％ / 吸収：12％)",
		proc: add_cond(ChainAttack(4.6, 0), when_hp_more(0.90), as_hp_absorption(0.12))
	},
	ss2: {
		desc: "<大魔術>敵全体へ雷・光属性のダメージ(260％)",
		turn: 12,
		proc: [ss_damage_all(2.6, [2, 3])],
	},
}