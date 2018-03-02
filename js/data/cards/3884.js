{
	name: "願いの届け人 カプレイ・シュシュ",
	cardno: 3884,
	imageno: 5562,
	hp: 2782,
	atk: 2558,
	cost: 44,
	attr: [2, -1],
	species: [4],
	disable: true,
	awakes: [
		Fastskill(1),
		Statusup(200, 0),
		Spec_statusup(0, 200, [4, 6, ]),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Spec_statusup(200, 0, [4, 6, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [4, 6, ]),
		Spec_statusup(0, 200, [4, 6, ]),
		Awake_noeffect("経験値取得量アップ", 1),
	],
	as1: {
		desc: "<回復>雷属性の味方を回復、5チェインで更に回復(通常：10％ / 5チェイン：15％)",
		proc: [Heal(0.10, [0,0,1,0,0], 0), Heal(0.15, [0,0,1,0,0], 5)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>雷属性の味方を回復、5チェインで更に回復(通常：13％ / 5チェイン：18％)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), Heal(0.18, [0,0,1,0,0], 5)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、ダメージ25％軽減の効果を付与",
		turn: 7,
		proc: [ss_panel_change([0,0,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)]
	},
}