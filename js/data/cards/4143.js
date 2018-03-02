{
	name: "魅惑と銀盤の明星 ティファ・テーナ",
	cardno: 4143,
	imageno: 5821,
	hp: 2641,
	atk: 2321,
	cost: 34,
	attr: [1, -1],
	species: [9],
	awakes: [
		Fastskill(1),
		Statusup(200, 0),
		Costdown(2),
		Statusup(0, 200),
		Fastskill(1),
		Spec_statusup(200, 0, [9, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as1: {
		desc: "<回復>水属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：15％)",
		proc: [Heal(0.10, [0,1,0,0,0], 0), Heal(0.15, [0,1,0,0,0], 7)],
	},
	ss1: {
		desc: "<解答削り>解答選択肢を2つ削る",
		turn: 3,
		proc: [ss_answer_narrow(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<回復>水属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：18％)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), Heal(0.18, [0,1,0,0,0], 7)],
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()]
	},
}