{
	name: "穿神脚 師匠&リンリン&ポンタン",
	cardno: 4288,
	imageno: 5877,
	hp: 2345,
	atk: 2634,
	cost: 39,
	attr: [2, -1],
	species: [8],
	awakes: [
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(0, 200),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<連撃>3チェインで敵単体を4回連続攻撃、HP80％以上でさらにダメージアップ(通常：計300％ / HP80％以上：計400％)",
		proc: [ChainDualAttack(3.0, 3, 4), add_cond(ChainDualAttack(4.0, 3, 4), when_hp_more(0.80))]
	},
	ss1: {
		desc: "<多弾魔術>敵単体へ雷属性の5回連続ダメージ(計180％)",
		turn: 5,
		proc: [ss_damage_s(1.8, [2], 5)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<連撃>3チェインで敵単体を4回連続攻撃、HP80％以上でさらにダメージアップ(通常：計400％ / HP80％以上：計500％)",
		proc: [ChainDualAttack(4.0, 3, 4), add_cond(ChainDualAttack(5.0, 3, 4), when_hp_more(0.80))]
	},
	ss2: {
		desc: "<多弾魔術>敵単体へ雷属性の5回連続ダメージ(計380％)",
		turn: 8,
		proc: [ss_damage_s(3.8, [2], 5)],
	},
}