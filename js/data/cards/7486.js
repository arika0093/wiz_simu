{
	name: "心繋がる星の夜に ソラナ&ヒカリ",
	cardno: 7486,
	imageno: 6130,
	hp: 4891,
	atk: 2223,
	cost: 51,
	attr: [1, 2],
	species: [9],
	ape: "DL限定精霊",
	alias: ["ちっぱい"],
	awakes: [
		Awake_Chainboost(1),
		Fastskill(1),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,1,0,0,]),
		Abstate_invalid("discharge"),
		Heal_afterbattle(10),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [0,0,1,0,0,]),
		Panel_boost([0, 1, 0, 0, 0, ], 4),
		Fastskill(2),
		Spec_statusup(300, 0, [9, ]),
		Spec_statusup(0, 300, [9, ]),
	],
	as1: {
		desc: "<複属性攻撃強化>6チェインで水属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(70%/120%)",
		proc: ChainEnhance_SubAttr(0.7, 1.2, [0,1,0,0,0], [0,0,1,0,0], 6),
	},
	ss1: {
		desc: "<カウンター>3ターンの間、スキルカウンター待機(200%)",
		turn: 7,
		proc: [ss_skillcounter(2, 3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Statusup(500, 0),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>6チェインで水属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(100%/150%)",
		proc: ChainEnhance_SubAttr(1.0, 1.5, [0,1,0,0,0], [0,0,1,0,0], 6),
	},
	ss2: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機(200%)",
		turn: 10,
		proc: [ss_skillcounter(2, 5)]
	},
}