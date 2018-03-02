{
	name: "虹色の恋模様 アーシア・ベネット",
	cardno: 4469,
	imageno: 6163,
	hp: 3425,
	atk: 2579,
	cost: 48,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Heal_afterbattle(10),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(200, 0, [9, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<攻撃強化>水属性の味方の攻撃力をアップ、パネルの色が増す度さらにアップ(1色：+30％ / 2色：+50％ / 3色：+80％)",
		proc: ChainPanelsEnhance(0.3, 0.5, 0.8, [0,1,0,0,0], 1),
	},
	ss1: {
		desc: "<アンサースキル延長>3ターンの間、アンサースキル発動時間を10秒延長する",
		turn: 5,
		proc: [ss_astime_ext(10, 3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化>水属性の味方の攻撃力をアップ、パネルの色が増す度さらにアップ(1色：+50％ / 2色：+70％ / 3色：+100％)",
		proc: ChainPanelsEnhance(0.5, 0.7, 1.0, [0,1,0,0,0], 1),
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()]
	},
}