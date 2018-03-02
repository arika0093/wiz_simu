{
	name: "お茶の間大魔法 その",
	cardno: 4421,
	imageno: 6095,
	hp: 2887,
	atk: 2444,
	cost: 47,
	attr: [1, -1],
	species: [9],
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		NEFTJOD(30),
		Spec_statusup(0, 200, [9, ]),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(200, 0, [9, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<種族攻撃強化>水属性の味方の攻撃力をアップ、術士はさらにアップ(水：+20％ / 水+種族：+40％)",
		proc: [ChainEnhance(0.20, [0,1,0,0,0], 0), ChainSpecEnhance(0.40, [0,1,0,0,0], [9], 0)],
	},
	ss1: {
		desc: "<アンサースキル延長>3ターンの間、アンサースキル発動時間を10秒延長する",
		turn: 5,
		proc: [ss_astime_ext(10, 3)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<種族攻撃強化>水属性の味方の攻撃力をアップ、術士はさらにアップ(水：+30％ / 水+種族：+60％)",
		proc: [ChainEnhance(0.30, [0,1,0,0,0], 0), ChainSpecEnhance(0.60, [0,1,0,0,0], [9], 0)],
	},
	ss2: {
		desc: "<アンサースキル延長>5ターンの間、アンサースキル発動時間を15秒延長する",
		turn: 7,
		proc: [ss_astime_ext(15, 5)]
	},
}