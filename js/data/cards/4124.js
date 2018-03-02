{
	name: "燃盛る不尽焔嶺 スオウ・カグツチ",
	cardno: 4124,
	imageno: 5798,
	hp: 2532,
	atk: 2821,
	cost: 46,
	attr: [0, -1],
	species: [1],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Fastskill(1),
		Attr_relief([1,0,0,0,0], 10),
		Fastskill(1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Attr_relief([0, 1, 0, 0, 0], 10),
		Spec_statusup(200, 0, [1]),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(0, 200, [1]),
	],
	as1: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃/計450％",
		proc: ChainDualAttack(4.5, 5, 3),
	},
	ss1: {
		desc: "<ダメージブロック>5ターン600以下の全属性ダメージを無効化する",
		turn: 9,
		proc: [ss_damageblock_all(600, 5)],
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Statusup(0, 400),
	],
	as2: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃/計550％",
		proc: ChainDualAttack(5.0, 5, 3),
	},
	ss2: {
		desc: "<ダメージブロック>5ターン800以下の全属性ダメージを無効化する",
		turn: 12,
		proc: [ss_damageblock_all(800, 5)]
	},
}