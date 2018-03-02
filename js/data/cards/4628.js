{
	name: "夏の七色水飛沫 リィル・ライル",
	cardno: 4628,
	imageno: 6407,
	hp: 1530,
	atk: 4510,
	cost: 44,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		Statusup(0, 100),
		Fastskill(1),
		Statusup(200, 0),
		Costdown(4),
		Fastskill(1),
		Statusup(0, 100),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		NEFTJOD(30),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ/525％",
		proc: ChainAttrAttack(5.25, 0, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<シャッフル>ジャンルパネルをシャッフル",
		turn: 3,
		proc: [ss_panel_shuffle()]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ/625％",
		proc: ChainAttrAttack(6.25, 0, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水属性化し、チェインがプラス1の効果を付与",
		turn: 5,
		proc: [ss_panel_change([0,1,0,0,0]), panel_chainplus(1)],
	},
}