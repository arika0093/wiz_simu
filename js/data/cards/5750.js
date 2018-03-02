{
	name: "奇跡と祝福の聖夜 ジゼル・フルール",
	cardno: 5750,
	imageno: 7560,
	hp: 4432,
	atk: 2514,
	cost: 43,
	attr: [1, 2],
	species: [9],
	islegend: true,
	as1: {
		desc: "<回復>水・雷属性の味方を回復(13%)",
		proc: Heal(0.13, [0, 1, 1, 0, 0], 0),
	},
	ss1: {
		desc: "<シャッフル>ジャンルパネルをシャッフル",
		turn: 1,
		proc: [ss_panel_shuffle()],
	},
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(2),
		Fastskill(1),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(200, 0, [0, 1, 1, 0, 0, ]),
		Attr_relief([0, 0, 1, 0, 0, ], 10),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(0, 200, [0, 1, 1, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃強化・回復>水・雷属性の味方を回復(16%)、さらに水・雷属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [0, 1, 1, 0, 0], 0), ChainEnhance(0.30, [0, 1, 1, 0, 0], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)],
	},
	Lawake: [
		Statusup(1000, 0),
	],
}