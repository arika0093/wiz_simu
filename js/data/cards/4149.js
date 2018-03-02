{
	name: "覇翔の天獣 アルビオン・イクシス",
	cardno: 4149,
	imageno: 5871,
	hp: 2464,
	atk: 2524,
	cost: 37,
	attr: [2, -1],
	species: [1],
	awakes: [
		Statusup(0, 200),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Attr_relief([0, 0, 1, 0, 0, ], 10),
		Spec_statusup(200, 0, [1, ]),
		Spec_statusup(0, 200, [1, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [1, ]),
	],
	as1: {
		desc: "<回復>雷属性の味方を回復、神族なら更に回復(雷：9％ / 雷+種族：16％)",
		proc: [Heal(0.09, [0,0,1,0,0], 0), SpecHeal(0.16, [0,0,1,0,0], [1], 0)],
	},
	ss1: {
		desc: "<ガード>2ターン火属性ダメージを75％軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,0,0,0,0], 0.75, 2)]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		NEFTJOD(30),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復、神族なら更に回復(雷：12％ / 雷+種族：19％)",
		proc: [Heal(0.12, [0,0,1,0,0], 0), SpecHeal(0.19, [0,0,1,0,0], [1], 0)],
	},
	ss2: {
		desc: "<ガード>2ターン火属性ダメージを100％軽減する",
		turn: 8,
		proc: [ss_attr_guard([1,0,0,0,0], 1, 2)]
	},
}