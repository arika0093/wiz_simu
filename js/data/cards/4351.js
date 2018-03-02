{
	name: "なめらかで濃厚な牧場の恋 ピノ",
	cardno: 4351,
	imageno: 6107,
	hp: 3078,
	atk: 2576,
	cost: 46,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Heal_afterbattle(10),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(2),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<回復>雷属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにダメージ25％軽減の効果を付与",
		turn: 6,
		proc: [panel_attr_guard([1, 1, 1, 1, 1], 0.25)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化・回復>雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：16％ / 攻撃力：+30％)",
		proc: [Heal(0.16, [0,0,1,0,0], 0), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにダメージ50％軽減の効果を付与",
		turn: 10,
		proc: [panel_attr_guard([1, 1, 1, 1, 1], 0.5)]
	},
}