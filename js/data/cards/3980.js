{
	// -------------------------
	// 抜け補完: 2015GW
	// -------------------------
	name: "誅戮の告別者 ハクア・デスサイス",
	cardno: 3980,
	imageno: 5678,
	hp: 2856,
	atk: 1654,
	cost: 47,
	attr: [1, 2],
	species: [8],
	disable: true,
	awakes: [
		Attr_statusup(100, 0, [0, 1, 1, 0, 0]),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Attr_statusup(200, 0, [0, 1, 1, 0, 0]),
		Fastskill(1),
		Attr_statusup(0, 200, [0, 1, 1, 0, 0]),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0], 2),
	],
	as1: {
		desc: "<種族攻撃強化>3チェインで水・雷属性の味方の攻撃力をアップ、戦士は更にアップ(30%/60%)",
		proc: [ChainEnhance(0.3, [0, 1, 1, 0, 0], 3), ChainSpecEnhance(0.3, [0, 1, 1, 0, 0], [8], 3), ]
	},
	ss1: {
		desc: "<ダメージ強化>2ターン水・雷属性の味方の攻撃力をアップ(40%)",
		turn: 5,
		proc: [ss_enhance_all(0.4, 2, [0, 1, 1, 0, 0])]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<種族攻撃強化>3チェインで水・雷属性の味方の攻撃をアップ、戦士は更にアップ(40%/80%)",
		proc: [ChainEnhance(0.4, [0, 1, 1, 0, 0], 3), ChainSpecEnhance(0.8, [0, 1, 1, 0, 0], [8], 3), ]
	},
	ss2: {
		desc: "<ダメージ強化>4ターン水・雷属性の味方の攻撃力をアップ(60%)",
		turn: 6,
		proc: [ss_enhance_all(0.6, 4, [0, 1, 1, 0, 0])]
	},
}