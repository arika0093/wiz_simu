{
	name: "煌流星の砲撃猫 ガンドゥ・ギギライ",
	cardno: 6033,
	imageno: 7867,
	hp: 4678,
	atk: 3065,
	cost: 52,
	attr: [1, 0],
	species: [5],
	disable: true,
	islegend: true,
	ape: "覇眼戦線Ⅰ",
	as1: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色でさらにダメージアップ(400%/550%)",
		proc: ChainPanelsAttack(0, 4.0, 5.5, 3),
	},
	ss1: {
		desc: "<解答削り>解答選択肢を2つ削り、3チェインを消費し解答を見破る",
		turn: 3,
		proc: [ss_chain_cost_skill(3, ss_answer_foresight(), ss_answer_narrow(2))],
	},
	awakes: [
		Statusup(200, 0),
		Costdown(2),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Spec_statusup(0, 500, [5, ]),
		Fastskill(2),
		Spec_statusup(500, 0, [5, ]),
		NEFTJOD(60),
	],
	as2: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色でさらにダメージアップ(550%/700%)",
		proc: ChainPanelsAttack(0, 5.5, 7.0, 3),
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()],
	},
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
}