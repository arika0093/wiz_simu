{
	name: "怜悧の氷牙 ビルフォード・ロラン",
	cardno: 3993,
	imageno: 5674,
	hp: 2547,
	atk: 2219,
	cost: 35,
	attr: [1, -1],
	species: [8],
	awakes: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(0, 200),
		Statusup(200, 0),
		Statusup(200, 0),
		Costdown(2),
		Costdown(2),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<種族攻撃強化>水属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+20％ / 種族：+40％)",
		proc: [ChainEnhance(0.20, [0,1,0,0,0], 0), ChainSpecEnhance(0.40, [0,1,0,0,0], [8], 0)],
	},
	ss1: {
		desc: "<解答削り>解答選択肢を2つ削る",
		turn: 3,
		proc: [ss_answer_narrow(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族攻撃強化>水属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+30％ / 種族：+60％)",
		proc: [ChainEnhance(0.30, [0,1,0,0,0], 0), ChainSpecEnhance(0.60, [0,1,0,0,0], [8], 0)],
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()]
	},
}