{
	name: "芳しき恋の香り フェルチ・リリー",
	cardno: 100010,
	imageno: 5171,
	hp: 2722,
	atk: 2631,
	cost: 42,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(2),
		Costdown(2),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<回復>水・雷属性の味方を回復、HP50％以下なら更に回復(通常：11％ / 50％以下：20％)",
		proc: [Heal(0.11, [0,1,1,0,0], 0), add_cond(Heal(0.20, [0,1,1,0,0], 0), when_hp_less(0.5))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>水・雷属性の味方を回復、HP50％以下なら更に回復(通常：13％ / 50％以下：22％)",
		proc: [Heal(0.13, [0,1,1,0,0], 0), add_cond(Heal(0.22, [0,1,1,0,0], 0), when_hp_less(0.5))],
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
}