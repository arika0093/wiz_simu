{
	name: "聖なる未来の調べ アニエス・ノーラ",
	cardno: 5751,
	imageno: 7561,
	hp: 4323,
	atk: 3710,
	cost: 45,
	attr: [2, -1],
	species: [4],
	islegend: true,
	as1: {
		desc: "<攻撃強化>雷属性の味方の味方の攻撃力をアップ、パネルの色が3色でさらにアップ(30%/110%)",
		proc: ChainPanelsEnhance(0.30, 0.30, 1.1, [0, 0, 1, 0, 0], 0),
	},
	ss1: {
		desc: "<ダメージ強化>3ターン雷属性の味方の攻撃力をアップ、10チェインを消費しさらにアップ(60%/120%)",
		turn: 7,
		proc: [ss_chain_cost_skill(10, ss_enhance_all(1.20, 3, [0, 0, 1, 0, 0]), ss_enhance_all(0.60, 3, [0, 0, 1, 0, 0]))],
	},
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(2),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
		Spec_statusup(400, 0, [4, ]),
		Attr_relief([1, 1, 1, 1, 1, ], 10),
		NEFTJOD(30),
		Spec_statusup(0, 400, [4, ]),
		Awake_noeffect("心眼", 1),
	],
	as2: {
		desc: "<攻撃強化>雷属性の味方の味方の攻撃力をアップ、パネルの色が3色でさらにアップ(50%/130%)",
		proc: ChainPanelsEnhance(0.50, 0.50, 1.3, [0, 0, 1, 0, 0], 0),
	},
	ss2: {
		desc: "<ダメージ強化>3ターン雷属性の味方の攻撃力をアップ、10チェインを消費しさらにアップ(120%/220%)",
		turn: 10,
		proc: [ss_chain_cost_skill(10, ss_enhance_all(2.20, 3, [0, 0, 1, 0, 0]), ss_enhance_all(1.20, 3, [0, 0, 1, 0, 0]))],
	},
	Lawake: [
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
	],
}