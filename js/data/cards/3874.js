{
	name: "救奉聖女 ベルナデッタ・イルマ",
	cardno: 3874,
	imageno: 5494,
	hp: 2479,
	atk: 2455,
	cost: 35,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(200, 0, [9, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Heal_afterbattle(10),
	],
	as1: {
		desc: "<種族特効>種族が魔族・魔法生物の敵単体へダメージ/350％",
		proc: ChainSpecAttack(3.5, 0, [2,7]),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水属性化",
		turn: 6,
		proc: [ss_panel_change([0,1,0,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族特効>種族が魔族・魔法生物の敵単体へダメージ/450％",
		proc: ChainSpecAttack(4.5, 0, [2,7]),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水属性化し、回復の効果を付与(8％)",
		turn: 8,
		proc: [ss_panel_change([0,1,0,0,0]), panel_healally(0.08)],
	},
}