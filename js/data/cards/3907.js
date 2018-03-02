{
	name: "蒼氷の智将 アルハル・リノマース",
	cardno: 3907,
	imageno: 5587,
	hp: 2645,
	atk: 1726,
	cost: 45,
	attr: [1, 0],
	species: [9],
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
		Spec_statusup(200, 0, [9, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
		Heal_afterbattle(10),
	],
	as1: {
		desc: "<種族攻撃強化>3チェインで火・水属性の味方の攻撃力をアップ、術士はさらにアップ(通常：+30％ / 種族：+60％)",
		proc: [ChainEnhance(0.30, [1,1,0,0,0], 3), ChainSpecEnhance(0.60, [1,1,0,0,0], [9], 3)],
	},
	ss1: {
		desc: "<ダメージ強化>2ターン火・水属性の味方の攻撃力をアップ(+40％)",
		turn: 5,
		proc: [ss_enhance_all(0.40, 2, [1,1,0,0,0])],
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<種族攻撃強化>3チェインで火・水属性の味方の攻撃力をアップ、術士はさらにアップ(通常：+40％ / 種族：+80％)",
		proc: [ChainEnhance(0.40, [1,1,0,0,0], 3), ChainSpecEnhance(0.80, [1,1,0,0,0], [9], 3)],
	},
	ss2: {
		desc: "<ダメージ強化>4ターン火・水属性の味方の攻撃力をアップ(+60％)",
		turn: 8,
		proc: [ss_enhance_all(0.60, 4, [1,1,0,0,0])],
	},
}