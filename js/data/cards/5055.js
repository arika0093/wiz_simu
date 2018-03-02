{
	name: "暴風雷帝 ヘルミーナ・ブリッツ",
	cardno: 5055,
	imageno: 6795,
	hp: 2230,
	atk: 3508,
	cost: 43,
	attr: [2, -1],
	species: [8],
	awakes: [
		Costdown(2),
		Statusup(0, 200),
		Fastskill(1),
		Attr_relief([0, 1, 1, 0, 0, ], 10),
		Statusup(200, 0),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
	],
	as1: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
		proc: ChainPanelsAttack(0, 4.0, 5.5, 3),
	},
	ss1: {
		desc: "<解答削り>解答選択肢を2つ削る",
		turn: 3,
		proc: [ss_answer_narrow(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 2000),
	],
	as2: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：550％ / 3色：700％)",
		proc: ChainPanelsAttack(0, 5.5, 7.0, 3),
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()]
	},
}