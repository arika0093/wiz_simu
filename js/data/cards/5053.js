{
	// -------------------------
	// 水属性 (thanks @rinshandream)
	// -------------------------
	name: "凍てついた孤毒 フリーレ・ギフト",
	cardno: 5053,
	imageno: 6793,
	hp: 3491,
	atk: 2638,
	cost: 45,
	attr: [1, -1],
	species: [9],
	awakes: [
		Fastskill(1),
		Attr_relief([1, 0, 1, 0, 0], 20),
		Costdown(2),
		Fastskill(1),
		Statusup(200, 0),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0]),
		Heal_afterbattle(10),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<回復>水属性の味方を回復/13％",
		proc: Heal(0.13, [0, 1, 0, 0, 0]),
	},
	ss1: {
		desc: "<毒>4ターン敵全体に毒のダメージを与える(5000ダメージ)",
		turn: 7,
		proc: [poison(5000, 4)],
	},
	islegend: true,
	Lawake: [
		Statusup(700, 0),
		Statusup(0, 300),
	],
	as2: {
		desc: "<回復>水属性の味方を回復/16％",
		proc: Heal(0.16, [0, 1, 0, 0, 0]),
	},
	ss2: {
		desc: "<毒>5ターン敵全体に毒のダメージを与える(9999ダメージ)",
		turn: 11,
		proc: [poison(9999, 4)],
	},
}