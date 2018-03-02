{
	name: "スリーツーワンで響く歌声 鏡音レン",
	cardno: 4892,
	imageno: 6606,
	hp: 3183,
	atk: 2532,
	cost: 34,
	attr: [2, -1],
	species: [6],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Spec_statusup(200, 0, [6, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Fastskill(2),
	],
	as1: {
		desc: "<種族攻撃強化>3チェインで雷属性の味方の攻撃力をアップ、物質は更にアップ(雷：+40％ / 雷+種族：+80％)",
		proc: [ChainEnhance(0.40, [0,0,1,0,0], 3), ChainSpecEnhance(0.80, [0,0,1,0,0], [8], 3)],
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_s(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<種族攻撃強化>3チェインで雷属性の味方の攻撃力をアップ、物質は更にアップ(雷：+70％ / 雷+種族：+110％)",
		proc: [ChainEnhance(0.70, [0,0,1,0,0], 3), ChainSpecEnhance(1.10, [0,0,1,0,0], [8], 3)],
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_s(3)]
	},
}