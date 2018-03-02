{
	// -------------------------
	// 追加: 2016正月精霊
	// -------------------------
	name: "黄昏の空戦記 ディートリヒ・ベルク",
	cardno: 5443,
	imageno: 7097,
	hp: 2001,
	atk: 4001,
	cost: 45,
	attr: [1, 2],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		NEFTJOD(30),
		Statusup(0, 200),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0]),
		Attr_relief([0, 0, 1, 0, 0], 20),
		Fastskill(2),
		Attr_statusup(200, 0, [0, 1, 1, 0, 0]),
		Attr_statusup(0, 200, [0, 1, 1, 0, 0]),
	],
	as1: {
		desc: "<連撃>6チェインで敵単体を3回連続攻撃(400％)",
		proc: ChainDualAttack(4, 6, 3)
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ(200%)、さらに火属性の敵には特効ダメージ(500%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([1, 0, 0, 0, 0], 5.0, 2.0), [1])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<連撃>6チェインで敵単体を3回連続攻撃(500％)",
		proc: ChainDualAttack(5, 6, 3)
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ(200%)、さらに火属性の敵には特効ダメージ(900%)",
		turn: 9,
		proc: [ss_damage_all(special_attr([1, 0, 0, 0, 0], 9.0, 2.0), [1])]
	},
}