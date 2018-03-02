{
	name: "夢を描く箒星 ソフィ・ハーネット",
	cardno: 4697,
	imageno: 6367,
	hp: 2956,
	atk: 2280,
	cost: 46,
	attr: [2, 1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0], 2),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0]),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Spec_statusup(200, 0, [9]),
		NEFTJOD(30),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Statusup(0, 200),
		Fastskill(1),
		Spec_statusup(0, 200, [9]),
	],
	as1: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃/計350％",
		proc: ChainDualAttack(3.5, 3, 3)
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃/計450％",
		proc: ChainDualAttack(4.5, 3, 3)
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
}