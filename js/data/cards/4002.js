{
	name: "伝説のセレニティ&エンディミオン",
	cardno: 4002,
	imageno: 5691,
	hp: 2643,
	atk: 2752,
	cost: 44,
	attr: [2, -1],
	species: [8],
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		NEFTJOD(30),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Spec_statusup(200, 0, [8, ]),
		Spec_statusup(0, 200, [8, ]),
		Awake_noeffect("経験値取得量アップ", 1),
	],
	as1: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、戦士はさらにアップ(雷：+20％ / 雷+種族：+40％)",
		proc: [ChainEnhance(0.20, [0,0,1,0,0], 0), ChainSpecEnhance(0.40, [0,0,1,0,0], [8], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、戦士はさらにアップ(雷：+30％ / 雷+種族：+60％)",
		proc: [ChainEnhance(0.30, [0,0,1,0,0], 0), ChainSpecEnhance(0.60, [0,0,1,0,0], [8], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、チェインがプラス1の効果を付与",
		turn: 8,
		proc: [ss_panel_change([1,1,1,0,0]), panel_chainplus(1)],
	},
}