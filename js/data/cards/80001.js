{
	name: "陽光の綺麗石 サティサ・テオトリ",
	cardno: 80001,
	imageno: 5373,
	hp: 2402,
	atk: 3023,
	cost: 49,
	attr: [0, -1],
	species: [4],
	ape: "魔道杯(その他)",
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(200, 0),
		Spec_statusup(200, 0, [1, 4]),
		Fastskill(2),
		Spec_statusup(0, 100, [1, 4]),
		Statusup(200, 0),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(0, 200, [1, 4]),
	],
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ/700％",
		proc: ChainAttack(7, 10),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ/800％",
		proc: ChainAttack(8, 10),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、攻撃力アップの効果を付与(30％)",
		turn: 7,
		proc: [ss_panel_change([1,0,0,0,0]), panel_attackup(0.3)],
	},
}