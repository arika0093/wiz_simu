{
	name: "大志を貫く巨剣 アンジュ・エモニエ",
	cardno: 5116,
	imageno: 6856,
	hp: 2723,
	atk: 2765,
	cost: 33,
	attr: [2, -1],
	species: [8],
	alias: ["ちっぱい"],
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Costdown(2),
		Statusup(200, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Costdown(2),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 5),
	],
	as1: {
		desc: "<快調攻撃>残りHPが80％以上でダメージアップ/300％",
		proc: add_cond(ChainAttack(3.0, 0), when_hp_more(0.80)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,0,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80％以上でダメージアップ/400％",
		proc: add_cond(ChainAttack(4.0, 0), when_hp_more(0.80)),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(+30％)",
		turn: 8,
		proc: [ss_panel_change([0,0,1,0,0]), panel_attackup(0.30)],
	},
}