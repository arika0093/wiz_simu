{
	name: "夕闇の微笑 シャルロッテ・ロマネ",
	cardno: 4152,
	imageno: 5876,
	hp: 3034,
	atk: 1614,
	cost: 33,
	attr: [1, -1],
	species: [9],
	awakes: [
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(200, 0),
		NEFTJOD(30),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ、HP50％以下でさらにアップ(通常：250％ / HP50％以下：1000％)",
		proc: [ChainAttack(2.5, 0), add_cond(ChainAttack(10, 0), when_hp_less(0.5))],
	},
	ss1: {
		desc: "<大魔術>敵全体へ水属性のダメージ(150％)",
		turn: 7,
		proc: [ss_damage_all(1.5, [1])],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		NEFTJOD(30),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ、HP50％以下でさらにアップ(通常：320％ / HP50％以下：1300％)",
		proc: [ChainAttack(3.2, 0), add_cond(ChainAttack(13.0, 0), when_hp_less(0.5))],
	},
	ss2: {
		desc: "<大魔術>敵全体へ水属性のダメージ(230％)",
		turn: 11,
		proc: [ss_damage_all(2.2, [1])],
	},
}