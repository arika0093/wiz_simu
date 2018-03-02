{
	// -------------------------
	// 抜け補完: thanks @rinshandream
	// -------------------------
	name: "閃雷の銃撃 シャーリー・コルト",
	cardno: 90001,
	imageno: 6142,
	hp: 1996,
	atk: 3863,
	cost: 46,
	attr: [2, -1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<連撃>3チェインで単体を5回連続攻撃(350%)",
		proc: ChainDualAttack(3.5, 3, 5),
	},
	ss1: {
		desc: "<多弾魔術>敵単体へ雷属性の5回連続ダメージ(180%)",
		turn: 5,
		proc: [ss_damage_s(1.8, [2], 5)],
	},
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(0, 200),
		Costdown(2),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as2: {
		desc: "<連撃>3チェインで単体を7回連続攻撃(450%)",
		proc: ChainDualAttack(4.5, 3, 7),
	},
	ss2: {
		desc: "<大魔術>敵全体へ雷属性のダメージ(260%)",
		turn: 12,
		proc: [ss_damage_all(2.6, [2])],
	},
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 500),
	],
}