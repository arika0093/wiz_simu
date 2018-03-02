{
	name: "超ふんわりお嬢様 牧場しぼり",
	cardno: 4355,
	imageno: 5991,
	hp: 3003,
	atk: 2432,
	cost: 45,
	attr: [1, -1],
	species: [5],
	disable: true,
	awakes: [
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [5, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [5, ]),
		Fastskill(1),
		Spec_statusup(200, 0, [5, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [5, ]),
	],
	as1: {
		desc: "<回復>水属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,1,0,0,0], 0)
	},
	ss1: {
		desc: "<蘇生>味方全体のHPを回復し、さらに水属性の味方を蘇生(回復：25％ / 蘇生：25％)",
		turn: 7,
		proc: [ss_heal(0.25), ss_resurrection([0,1,0,0,0], 0.25)],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃強化・回復>水属性の味方のHPを回復、さらに水属性の味方の攻撃力をアップ(回復：16％ / 攻撃力：+30％)",
		proc: [Heal(0.16, [0,1,0,0,0], 0), ChainEnhance(0.3, [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<蘇生>味方全体のHPを回復し、さらに水属性の味方を蘇生(回復：50％ / 蘇生：50％)",
		turn: 9,
		proc: [ss_heal(0.50), ss_resurrection([0,1,0,0,0], 0.50)],
	},
}