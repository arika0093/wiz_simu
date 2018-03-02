{
	name: "燃える屋台魂 アキラ・マスグレイヴ",
	cardno: 4455,
	imageno: 6148,
	hp: 2214,
	atk: 2535,
	cost: 40,
	attr: [0, -1],
	species: [8],
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Statusup(200, 0),
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Costdown(2),
		Fastskill(1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(0, 200, [8]),
		Spec_statusup(200, 0, [8]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/300％",
		proc: ChainAttack(3, 3),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,1,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ/300％",
		proc: ChainAttack(0, 3),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・雷属性化し、ダメージ25％軽減の効果を付与",
		turn: 8,
		proc: [ss_panel_change([1,0,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)]
	},
}