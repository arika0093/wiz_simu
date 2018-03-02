{
	name: "血と戯れの妖劔雨 ラーミナ・ミレレ",
	cardno: 90008,
	imageno: 7071,
	hp: 2873,
	atk: 2796,
	cost: 44,
	attr: [2, -1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<攻撃強化>5チェインで雷属性の味方の攻撃力をアップ(60%)",
		proc: ChainEnhance(0.60, [0, 0, 1, 0, 0], 5),
	},
	ss1: {
		desc: "<解答削り>解答選択肢を2つ削る",
		turn: 3,
		proc: [ss_answer_narrow(2)],
	},
	awakes: [
		Fastskill(1),
		Statusup(0, 100),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃強化>5チェインで雷属性の味方の攻撃力をアップ(90%)",
		proc: ChainEnhance(0.90, [0, 0, 1, 0, 0], 5),
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()],
	},
	Lawake: [
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
	],
}