{
	name: "浄き炎神の剣 アイリス・ランティア",
	cardno: 4575,
	imageno: 6293,
	hp: 1722,
	atk: 3651,
	cost: 42,
	attr: [0, -1],
	species: [8],
	awakes: [
		Costdown(2),
		Statusup(200, 0),
		Costdown(2),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 2),
		Spec_statusup(0, 200, [8]),
		Heal_afterbattle(10),
	],
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃/計300％",
		proc: ChainDualAttack(3, 0, 3),
	},
	ss1: {
		desc: "<大魔術>敵単体へ火属性のダメージ(200％)",
		turn: 5,
		proc: [ss_damage_s(2, [0], 1)],
	},
	islegend: true,
	Lawake: [
		Statusup(200, 0),
		Statusup(0, 400),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃/計400％",
		proc: ChainDualAttack(4, 0, 3),
	},
	ss2: {
		desc: "<大魔術>敵単体へ火属性のダメージ(400％)",
		turn: 8,
		proc: [ss_damage_s(4, [0], 1)],
	},
}