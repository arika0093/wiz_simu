{
	name: "愛と甘美の砲火 シャーリー・コルト",
	cardno: 4466,
	imageno: 6160,
	hp: 2759,
	atk: 3021,
	cost: 46,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
		Fastskill(1),
	],
	as1: {
		desc: "<属性特効連撃>水属性の敵単体へ特効3連撃、HP80％以上でさらにダメージアップ(通常：計300％ / HP80％以上：計450％)",
		proc: [ChainDualAttrAttack(3.0, 0, 3, [0,1,0,0,0]), add_cond(ChainAttrAttack(4.5, 0, 3, [0,1,0,0,0]), when_hp_more(0.80))],
	},
	ss1: {
		desc: "<アンサースキル延長>3ターンの間、アンサースキル発動時間を10秒延長する",
		turn: 5,
		proc: [ss_astime_ext(10, 3)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<属性特効連撃>水属性の敵単体へ特効3連撃、HP80％以上でさらにダメージアップ(通常：計400％ / HP80％以上：計550％)",
		proc: [ChainDualAttrAttack(4.0, 0, 3, [0,1,0,0,0]), add_cond(ChainAttrAttack(5.5, 0, 3, [0,1,0,0,0]), when_hp_more(0.80))],
	},
	ss2: {
		desc: "<アンサースキル延長>5ターンの間、アンサースキル発動時間を15秒延長する",
		turn: 7,
		proc: [ss_astime_ext(15, 5)]
	},
}