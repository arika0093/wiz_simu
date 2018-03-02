{
	name: "竜迅百騎将軍 ライサ・ナトゥル",
	cardno: 4760,
	imageno: 6475,
	hp: 3654,
	atk: 2532,
	cost: 48,
	attr: [0, 1],
	species: [0],
	disable: true,
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0]),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 2),
		Spec_statusup(200, 0, [0]),
		Spec_statusup(0, 200, [0]),
		Fastskill(2),
		Spec_statusup(200, 0, [0]),
		Spec_statusup(0, 200, [0]),
	],
	as1: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃/計450％",
		proc: ChainDualAttack(4.5, 5, 3)
	},
	ss1: {
		desc: "<毒>4ターン敵全体に毒のダメージを与える(5000ダメージ)",
		turn: 6,
		proc: [poison(5000, 4)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 1, 0, 0, 0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃/計550％",
		proc: ChainDualAttack(5.5, 5, 3)
	},
	ss2: {
		desc: "<毒>4ターン敵全体に毒のダメージを与える(9999ダメージ)",
		turn: 10,
		proc: [poison(9999, 4)],
	},
}