{
	// -------------------------
	// 追加: 天界のロストエデン
	// -------------------------
	name: "永劫を超えて アルドベリク・ゴドー",
	cardno: 5126,
	imageno: 6868,
	hp: 3034,
	atk: 3053,
	cost: 49,
	attr: [2, 4],
	species: [2],
	islegend: true,
	disable: true,
	as1: {
		desc: "<種族特効>4チェインでダメージアップ、天使の敵へさらにダメージアップ(400%/600%)",
		proc: [ChainAttack(4.0, 4), ChainSpecAttack(6.0, 4, [3])],
	},
	ss1: {
		desc: "<ダメージ強化>4ターン雷属性の味方の攻撃力をアップ、5チェインを消費しさらにアップ(60%/100%)",
		turn: 9,
		proc: [ss_enhance_all(ss_chain_cost(5, 1.0, 0.60), 4, [0, 0, 1, 0, 0])],
	},
	awakes: [
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Statusup(0, 200),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		NEFTJOD(30),
		Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [2, 3, ]),
	],
	as2: {
		desc: "<種族特効>4チェインでダメージアップ、天使の敵へさらにダメージアップ(500%/700%)",
		proc: [ChainAttack(5.0, 4), ChainSpecAttack(7.0, 4, [3])],
	},
	ss2: {
		desc: "<ダメージ強化>4ターン雷属性の味方の攻撃力をアップ、5チェインを消費しさらにアップ(120%/180%)",
		turn: 12,
		proc: [ss_enhance_all(ss_chain_cost(5, 1.8, 1.2), 4, [0, 0, 1, 0, 0])],
	},
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
}