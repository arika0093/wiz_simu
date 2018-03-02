{
	name: "戦の天禀 ウォーブリンガー=ミリィ",
	cardno: 5836,
	imageno: 7642,
	hp: 3254,
	atk: 4876,
	cost: 49,
	attr: [0, -1],
	species: [8],
	islegend: true,
	disable: true,
	as1: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(350%)",
		proc: add_cond(ChainAttack(3.5, 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<反動大魔術>敵全体へ火属性のダメージ(500%)◆スキル使用後、1ターン封印状態に",
		turn: 5,
		proc: [ss_damage_all(5.0, [0]), ss_allsealed_own(1)],
	},
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		NEFTJOD(30),
		Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
		NEFTJOD(30),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Fastskill(2),
		Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(450%)",
		proc: add_cond(ChainAttack(4.5, 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<反動大魔術>敵全体へ火属性のダメージ(800%)◆スキル使用後、1ターン封印状態に",
		turn: 8,
		proc: [ss_damage_all(8.0, [0]), ss_allsealed_own(1)],
	},
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
	],
}