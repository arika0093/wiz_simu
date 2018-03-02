{
	name: "夢色の心贈る キワム&クロ",
	cardno: 5200,
	imageno: 7082,
	hp: 3221,
	atk: 3541,
	cost: 47,
	attr: [0, 2],
	species: [8],
	disable: true,
	awakes: [
		Panel_boost([1, 0, 0, 0, 0], 1),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Fastskill(1),
		NEFTJOD(30),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0]),
		Heal_afterbattle(10),
		Statusup(0, 200),
		Panel_boost([1, 0, 0, 0, 0], 2),
		Attr_statusup(0, 200, [1, 0, 1, 0, 0]),
		Fastskill(2),
	],
	as1: {
		desc: "<連撃>4チェインで敵単体を4回連続攻撃(400%)",
		proc: [ChainDualAttack(4, 4, 4)]
	},
	ss1: {
		desc: "<状態異常無効>2ターン敵の状態異常攻撃を無効化し、さらに味方全体のHPを回復(50%)",
		turn: 7,
		proc: [ss_absattack_disable(2), ss_heal(0.5)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<連撃>4チェインで敵単体を4回連続攻撃(500%)",
		proc: [ChainDualAttack(5, 4, 4)]
	},
	ss2: {
		desc: "<状態異常無効>3ターン敵の状態異常攻撃を無効化し、さらに味方全体のHPを回復(50%)",
		turn: 9,
		proc: [ss_absattack_disable(3), ss_heal(0.5)]
	},
}