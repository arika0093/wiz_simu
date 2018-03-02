{
	name: "気配を断つ影忍び ユイ・クサナギ",
	cardno: 6146,
	imageno: 7999,
	hp: 2003,
	atk: 3076,
	cost: 55,
	attr: [2, 4],
	species: [8],
	islegend: true,
	as1: {
		desc: "<連撃>6チェインで敵単体を3回連続攻撃(500%)",
		proc: ChainDualAttack(5.0, 6, 3),
	},
	ss1: {
		desc: "<斬撃大魔術>スキル反射を無視し、雷・闇属性の5連撃(380%)、さらに連撃数分チェインプラス",
		turn: 10,
		proc: [ss_damage_slash(3.8, [2,4], 5), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(400, 0),
		Statusup(0, 400),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Fastskill(1),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<連撃>6チェインで敵単体を3回連続攻撃(600%)",
		proc: ChainDualAttack(6.0, 6, 3),
	},
	ss2: {
		desc: "<斬撃大魔術>スキル反射を無視し、雷・闇属性の10連撃(760%)、さらに連撃数分チェインプラス",
		turn: 15,
		proc: [ss_damage_slash(7.6, [2,4], 10), ss_ignore_skillcounter()]
	},
	Lawake: [
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
	],
}