{
	name: "超宇宙究極神輿 オオミコシガミ",
	cardno: 4106,
	imageno: 5762,
	hp: 2498,
	atk: 2888,
	cost: 52,
	attr: [2, -1],
	species: [6],
	awakes: [
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Statusup(200, 0),
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Spec_statusup(0, 200, [6, ]),
	],
	as1: {
		desc: "<ギャンブル攻撃>ダメージがイチかバチかアップ/160～300％",
		proc: ChainStakesAttack(1.6, 3.0, 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<ギャンブル攻撃>ダメージがイチかバチかアップ/250～450％",
		proc: ChainStakesAttack(2.5, 4.5, 0),
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルを雷属性化し、くじを引く",
		turn: 7,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
}