{
	name: "黄金色の空へ ゴールデンプッチン",
	cardno: 100008,
	imageno: 6042,
	hp: 2838,
	atk: 2275,
	cost: 52,
	attr: [2, -1],
	species: [4],
	ape: "グリコⅠ",
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Statusup(200, 0),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(0, 200, [4, ]),
		Spec_statusup(200, 0, [4, ]),
		Heal_afterbattle(10),
	],
	as1: {
		desc: "<種族攻撃強化>自分のMAXHP20％を使い、雷属性の味方の攻撃力をアップ、妖精はさらにアップ(雷：+30％ / 雷+種族：+70％)",
		proc: [add_cond(ChainEnhance(0.30, [0,0,1,0,0], 0, as_consume_own(0.2))), add_cond(ChainSpecEnhance(0.70, [0,0,1,0,0], [4], 0), as_consume_own(0.2))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(400, 0),
		NEFTJOD(30),
	],
	as2: {
		desc: "<種族攻撃強化>自分のMAXHP20％を使い、雷属性の味方の攻撃力をアップ、妖精はさらにアップ(雷：+40％ / 雷+種族：+90％)",
		proc: [add_cond(ChainEnhance(0.40, [0,0,1,0,0], 0, as_consume_own(0.2))), add_cond(ChainSpecEnhance(0.90, [0,0,1,0,0], [4], 0), as_consume_own(0.2))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(+20％)",
		turn: 8,
		proc: [ss_panel_change([0,0,1,0,0]), panel_attackup(0.20)],
	},
}