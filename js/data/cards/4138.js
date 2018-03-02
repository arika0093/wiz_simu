{
	name: "ミラクル超奇術 マギカ・ルーシュ",
	cardno: 4138,
	imageno: 5816,
	hp: 2567,
	atk: 932,
	cost: 45,
	attr: [1, -1],
	species: [9],
	awakes: [
		Costdown(2),
		Statusup(200, 0),
		Statusup(0, 100),
		Fastskill(1),
		Statusup(100, 0),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Awake_noeffect("経験値取得量アップ", 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ/+900％",
		proc: ChainAttack(9.0, 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・水属性化",
		turn: 5,
		proc: [ss_panel_change([1,1,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ、ジャンルパネルが3色だとさらにアップ(通常：+900％ / 3色：+1900％)",
		proc: ChainPanelsAttack(9.0, 9.0, 19.0, 0),
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
}