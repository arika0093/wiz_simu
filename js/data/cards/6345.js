{
	name: "永の守り手 アサギ&セルウス",
	cardno: 6345,
	imageno: 8180,
	hp: 3559,
	atk: 3056,
	cost: 50,
	attr: [2,3],
	species: [1],
	islegend: true,
	disable: true,
	ape: "幻魔特区スザクⅢ",
	as1: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が光だとさらにアップ(30%/80%)",
		proc: ChainEnhance_SubAttr(0.3, 0.8, [0,0,1,0,0], [0,0,0,1,0], 0),
	},
	ss1: {
		desc: "<ブースト>8ターンの間、味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ。さらに極稀にクリティカル(150%)",
		turn: 10,
		proc: [ss_boost_enhance_all(1.5, 8, 0.10, [1,1,1,1,1])],
	},
	awakes: [
		Statusup(0,200),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Fastskill(1),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_sattr(200, 0, [0,0,1,0,0], 200, 0, [0,0,0,1,0]),
		Attr_statusup_sattr(0, 200, [0,0,1,0,0], 0, 200, [0,0,0,1,0]),

	],
	as2: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が光だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [0,0,1,0,0], [0,0,0,1,0], 0),
	},
	ss2: {
		desc: "<ブースト>8ターンの間、味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ。さらに極稀にクリティカル(200%)",
		turn: 13,
		proc: [ss_boost_enhance_all(2.0, 8, 0.10, [1,1,1,1,1])],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}