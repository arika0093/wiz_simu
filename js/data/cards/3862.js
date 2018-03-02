{
	name: "妖精巫姫 ロレッタ・ミラージュ",
	cardno: 3862,
	imageno: 5482,
	hp: 2398,
	atk: 1865,
	cost: 25,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(200, 0),
		Fastskill(1),
		Costdown(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
	],
	as1: {
		desc: "<種族攻撃強化>水属性の味方の攻撃力をアップ、術士はさらにアップ(通常：+10％ / 種族：+30％)",
		proc: [ChainEnhance(0.10, [0,1,0,0,0], 0), ChainSpecEnhance(0.30, [0,1,0,0,0], [9], 0)],
	},
	ss1: {
		desc: "<蘇生>味方全体のHPを回復し、さらに水属性の味方を蘇生(回復：25％ / 蘇生：25％)",
		turn: 10,
		proc: [ss_heal(0.25), ss_resurrection([0,1,0,0,0], 0.25)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(400, 0),
		NEFTJOD(30),
	],
	as2: {
		desc: "<種族攻撃強化>水属性の味方の攻撃力をアップ、術士はさらにアップ(通常：+20％ / 種族：+40％)",
		proc: [ChainEnhance(0.20, [0,1,0,0,0], 0), ChainSpecEnhance(0.40, [0,1,0,0,0], [9], 0)],
	},
	ss2: {
		desc: "<蘇生>味方全体のHPを回復し、さらに水属性の味方を蘇生(回復：50％ / 蘇生：50％)",
		turn: 14,
		proc: [ss_heal(0.50), ss_resurrection([0,1,0,0,0], 0.50)]
	},
}