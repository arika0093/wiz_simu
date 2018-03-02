{
	name: "世界中の皆に元気をあげる 鏡音リン",
	cardno: 5006,
	imageno: 6745,
	hp: 2414,
	atk: 2179,
	cost: 43,
	attr: [2, 0],
	species: [6],
	ape: "大魔道杯 feat. 初音ミク",
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Fastskill(2),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
	],
	as1: {
		desc: "<種族数攻撃>5チェインで物質・戦士の仲間の数だけダメージアップ/+80％×種族数",
		proc: ChainDeckSpecsAttack(0.80, [6,8], 5),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 4,
		proc: [ss_panel_change([1,0,1,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Statusup(0, 400),
	],
	as2: {
		desc: "<種族数攻撃>5チェインで物質・戦士の仲間の数だけダメージアップ/+100％×種族数",
		proc: ChainDeckSpecsAttack(1.0, [6,8], 5),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・雷属性化し、チェインがプラス1の効果を付与",
		turn: 6,
		proc: [ss_panel_change([1,0,1,0,0]), panel_chainplus(1)],
	},
}