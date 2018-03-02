{
	name: "AbCd-Σζ:《滾ることなき血潮 カルム》",
	cardno: 5030,
	imageno: 6767,
	hp: 3003,
	atk: 3014,
	cost: 47,
	attr: [1, 3],
	species: [11],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Attr_relief([0, 0, 0, 1, 1, ], 30),
		NEFTJOD(30),
		Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Fastskill(2),
		NEFTJOD(30),
		Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
		Statusup(0, 500),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・光属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,0,1,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/550％",
		proc: ChainAttack(5.5, 5),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・光属性化し、ダメージ25％軽減の効果を付与。HP20％以下でさらにダメージ35％軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([0,1,0,1,0]), panel_attr_guard([1,1,1,1,1], ss_hp_less(0.2, 0.60, 0.25))]
	},
}