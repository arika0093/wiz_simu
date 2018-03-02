{
	name: "神話に記された英雄 アスカ・イズモ",
	cardno: 4683,
	imageno: 6442,
	hp: 2739,
	atk: 2862,
	cost: 42,
	attr: [1, -1],
	species: [8],
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Statusup(0, 100),
		Costdown(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [8, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ/400％",
		proc: ChainAttrAttack(4.0, 0, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ/500％",
		proc: ChainAttrAttack(5.0, 0, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水属性化し、攻撃力アップの効果を付与(+20％)",
		turn: 8,
		proc: [ss_panel_change([0,1,0,0,0]), panel_attackup(0.2)],
	},
}