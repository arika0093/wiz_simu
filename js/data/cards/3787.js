{
	name: "宗匠紋章師 エトワール・ブリュネ",
	cardno: 3787,
	imageno: 4391,
	hp: 2331,
	atk: 2741,
	cost: 42,
	attr: [2, -1],
	species: [9],
	awakes: [
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(2),
		Costdown(2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<快調攻撃>残りHPが80％以上でダメージアップ、パネルの色が増す度さらにアップ(1色：300％、2色：400％、3色：550％)",
		proc: add_cond(ChainPanelsAttack(3.0, 4.0, 5.5, 0), when_hp_more(0.80)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火&雷属性化",
		turn: 6,
		proc: [ss_panel_change([1,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 400),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80％以上でダメージアップ、パネルの色が増す度さらにアップ(1色：400％、2色：500％、3色：650％)",
		proc: add_cond(ChainPanelsAttack(4.0, 5.0, 6.5, 0), when_hp_more(0.80)),
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 8,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
}