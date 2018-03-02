{
	name: "夜勤明けの嫁 モミジ・カキツバタ",
	cardno: 4083,
	imageno: 5811,
	hp: 2212,
	atk: 1812,
	cost: 34,
	attr: [1, 0],
	species: [1],
	awakes: [
		Awake_noeffect("ゴールド取得量アップ", 1),
		Fastskill(1),
		Spec_statusup(0, 200, [1, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Awake_noeffect("経験値取得量アップ", 1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(200, 0, [1, ]),
		Spec_statusup(0, 200, [1, ]),
	],
	as1: {
		desc: "<回復>水・火属性の味方を回復、神族なら更に回復(水火：10％ / 水火+種族：15％)",
		proc: [Heal(0.10, [1,1,0,0,0], 0), SpecHeal(0.15, [1,1,0,0,0], [1], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水&火属性化",
		turn: 5,
		proc: [ss_panel_change([1,1,0,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(400, 0),
		NEFTJOD(30),
	],
	as2: {
		desc: "<回復>水・火属性の味方を回復、神族なら更に回復(水火：13％ / 水火+種族：18％)",
		proc: [Heal(0.13, [1,1,0,0,0], 0), SpecHeal(0.18, [1,1,0,0,0], [1], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水&火属性化し、チェインがプラス1の効果を付与",
		turn: 9,
		proc: [ss_panel_change([1,1,0,0,0]), panel_chainplus(1)],
	},
}