{
	name: "誅戮の告別者 ハクア・デスサイズ",
	cardno: 6429,
	imageno: 5678,
	hp: 4988,
	atk: 2543,
	cost: 54,
	attr: [1,2],
	species: [8],
	disable: true,
	islegend: true,
	ape: "GW2015",
	as1: {
		desc: "<複属性攻撃強化>3チェインで水・雷属性の味方の攻撃力をアップ、複属性が雷属性だとさらにアップし、戦士はさらにアップ(30%/80%/110%)",
		proc: [
			ChainEnhance_SubAttr(0.3, 0.8, [0,1,0,0,0], [0,0,1,0,0], 3),
			add_cond(ChainEnhance_SubAttr(0.3, 1.1, [0,1,0,0,0], [0,0,1,0,0], 3), when_spec_match([8])),
		]
	},
	ss1: {
		desc: "<ブースト>8ターンの間、味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ(150%)。さらに極稀にクリティカル",
		turn: 10,
		proc: [ss_boost_enhance_all(1.5, 8, 0.1)],
	},
	awakes: [
		Fastskill(1),
		Costdown(2),
		Panel_boost([0,1,0,0,0,],1),
		Statusup(0,200),
		Attr_relief([0,0,1,0,0,],20),
		Attr_statusup_sattr(200, 0, [0,1,0,0,0], 200, 0, [0,0,1,0,0]),
		Panel_boost([0,1,0,0,0,],1),
		Fastskill(2),
		Attr_statusup_sattr(0, 200, [0,1,0,0,0], 0, 200, [0,0,1,0,0]),
		Spec_statusup(0,200, [8,]),
	],
	as2: {
		desc: "<複属性攻撃強化>3チェインで水・雷属性の味方の攻撃力をアップ、複属性が雷属性だとさらにアップし、戦士はさらにアップ(60%/110%/140%)",
		proc: [
			ChainEnhance_SubAttr(0.6, 1.1, [0,1,0,0,0], [0,0,1,0,0], 3),
			add_cond(ChainEnhance_SubAttr(0.6, 1.4, [0,1,0,0,0], [0,0,1,0,0], 3), when_spec_match([8])),
		]
	},
	ss2: {
		desc: "<ブースト>8ターンの間、味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ(200%)。さらに極稀にクリティカル",
		turn: 13,
		proc: [ss_boost_enhance_all(2.0, 8, 0.1)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [0,1,1,0,0,]),
	],
}