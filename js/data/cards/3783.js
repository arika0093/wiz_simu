{
	name: "夜桜と舞う刀華 ツバキ・リンドウ",
	cardno: 3783,
	imageno: 5411,
	hp: 2022,
	atk: 3023,
	cost: 36,
	attr: [2, -1],
	species: [8],
	awakes: [
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<種族数攻撃>5チェインで戦士の仲間の数だけダメージアップ/100+種族数×70％",
		proc: ChainDeckSpecsAttack(0.70, [8], 5),
	},
	ss1: {
		desc: "<大魔術>敵全体へ雷属性のダメージ(180％)",
		turn: 8,
		proc: [ss_damage_all(1.8, [2])],
	},
	islegend: true,
	Lawake: [
		NEFTJOD(30),
		Statusup(0, 400),
	],
	as2: {
		desc: "<種族数攻撃>戦士の仲間の数だけダメージアップ/100+種族数×70％",
		proc: ChainDeckSpecsAttack(0.70, [8], 0),
	},
	ss2: {
		desc: "<大魔術>敵全体へ雷属性のダメージ(260％)",
		turn: 12,
		proc: [ss_damage_all(2.6, [2])],
	},
}