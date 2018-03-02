{
	name: "氷雨舞う碧光 リクシス・トラオム",
	cardno: 4213,
	imageno: 5907,
	hp: 2431,
	atk: 2732,
	cost: 43,
	attr: [1, -1],
	species: [0],
	ape: "大魔道杯 ギルドマスターズ",
	awakes: [
		Costdown(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(0, 200),
		Spec_statusup(200, 0, [0, ]),
		Spec_statusup(0, 200, [0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(200, 0, [0, ]),
		NEFTJOD(30),
		Fastskill(2),
		Spec_statusup(0, 200, [0, ]),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/400％",
		proc: ChainAttack(4.0, 5),
	},
	ss1: {
		desc: "<解答削り>解答選択肢を2つ削る",
		turn: 3,
		proc: [ss_answer_narrow(2)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/500％",
		proc: ChainAttack(5.0, 5),
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()]
	},
}