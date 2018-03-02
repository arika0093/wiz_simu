{
	// -------------------------
	// 追加: コナンコラボ
	// -------------------------
	name: "真実を暴く鋭い推理 江戸川コナン",
	cardno: 5237,
	imageno: 6932,
	hp: 4530,
	atk: 2004,
	cost: 45,
	attr: [2, 3],
	species: [8],
	islegend: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<回復>雷属性の味方のHPを回復(13%)",
		proc: Heal(0.12, [0, 0, 1, 0, 0], 0),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)],
	},
	awakes: [
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Fastskill(1),
		Statusup(0, 200),
		Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Heal_afterbattle(10),
		Fastskill(2),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃強化・回復>雷属性の味方のHPを回復(16%)、さらに雷属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [0, 0, 1, 0, 0], 0), ChainEnhance(0.30, [0, 0, 1, 0, 0], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷&光属性化し、チェインがプラス1の効果を付与",
		turn: 6,
		proc: [ss_panel_change([0,0,1,1,0]), panel_chainplus(1)],
	},
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
}