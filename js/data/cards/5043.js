{
	name: "AbCd-Z:《闃寂の地平 カルム》",
	cardno: 5043,
	imageno: 6788,
	hp: 2998,
	atk: 3503,
	cost: 46,
	attr: [1, 3],
	species: [11],
	disable: true,
	awakes: [
		Attr_relief([0, 0, 0, 1, 1, ], 30),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
		Fastskill(3),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		NEFTJOD(30),
	],
	as1: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
		proc: ChainPanelsAttack(0, 4.0, 5.5, 3),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせる。HP20％以下でさらに1遅らせる。",
		turn: 8,
		proc: [ss_delay_s(ss_hp_less(0.2, 3, 2))]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：550％ / 3色：700％)",
		proc: ChainPanelsAttack(0, 5.5, 7.0, 3),
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせる。HP20％以下でさらに1遅らせる。",
		turn: 10,
		proc: [ss_delay_s(ss_hp_less(0.2, 4, 3))]
	},
}