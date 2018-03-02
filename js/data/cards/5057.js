{
	name: "雷刃翔星 サイラス・レイン",
	cardno: 5057,
	imageno: 6797,
	hp: 2738,
	atk: 3194,
	cost: 42,
	attr: [2, -1],
	species: [4],
	awakes: [
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Statusup(0, 200),
		Statusup(200, 0),
		Statusup(0, 200),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Fastskill(2),
		Spec_statusup(0, 500, [4, ]),
		Spec_statusup(500, 0, [4, ]),
	],
	as1: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ/400％",
		proc: ChainAttrAttack(4.0, 0, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 4,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 700),
		Statusup(300, 0),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ/500％",
		proc: ChainAttrAttack(5.0, 0, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・雷属性化し、チェインがプラス1の効果を付与",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0]), panel_chainplus(1)],
	},
}