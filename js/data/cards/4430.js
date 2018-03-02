{
	name: "銀色に躍る フィリー・ハイウインド",
	cardno: 4430,
	imageno: 6175,
	hp: 2793,
	atk: 2675,
	cost: 31,
	attr: [1, -1],
	species: [4],
	awakes: [
		Statusup(0, 200),
		Costdown(2),
		Statusup(200, 0),
		Costdown(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(200, 0, [4, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [4, ]),
		Spec_statusup(200, 0, [4, ]),
	],
	as1: {
		desc: "<回復>水属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,1,0,0,0], 0)
	},
	ss1: {
		desc: "<回復>味方全体のHPを回復する(50％)",
		turn: 6,
		proc: [ss_heal(0.50)],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復する/15％",
		proc: Heal(0.15, [0,1,0,0,0], 0)
	},
	ss2: {
		desc: "<継続回復>味方全体のHPを回復する、さらに5ターン徐々に回復する(回復：35％ / 徐々に回復：15％×5T)",
		turn: 10,
		proc: [ss_heal(0.35), ss_regenerate(0.15, 5)],
	},
}