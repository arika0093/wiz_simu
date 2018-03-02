{
	name: "ザ・元凶 ダンケル・アダムス",
	cardno: 4472,
	imageno: 6165,
	hp: 2601,
	atk: 2749,
	cost: 57,
	attr: [1, -1],
	species: [9],
	awakes: [
		Statusup(0, 200),
		NEFTJOD(30),
		Statusup(0, 200),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(200, 0),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：350％ / 3色：500％)",
		proc: ChainPanelsAttack(0, 3.5, 5.0, 3),
	},
	ss1: {
		desc: "<アンサースキル延長>3ターンの間、アンサースキル発動時間を10秒延長する",
		turn: 6,
		proc: [ss_astime_ext(10, 3)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：450％ / 3色：600％)",
		proc: ChainPanelsAttack(0, 4.5, 6.0, 3),
	},
	ss2: {
		desc: "<アンサースキル延長>5ターンの間、アンサースキル発動時間を15秒延長する",
		turn: 8,
		proc: [ss_astime_ext(15, 5)]
	},
}