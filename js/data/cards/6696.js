{
	name: "大空に響き渡る関西弁 鈴原サクラ",
	cardno: 6696,
	imageno: 8560,
	hp: 4087,
	atk: 2349,
	cost: 48,
	attr: [0,2],
	species: [8],
	islegend: true,
	ape: "コラボ(エヴァⅡ)",
	as1: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(50%/100%)",
		proc: [ChainEnhance_SubAttr(0.5, 1.0, [1,0,0,0,0], [0,0,1,0,0], 4)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 3,
		proc: [ss_panel_change([1,0,1,0,0])],
	},
	awakes: [
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_relief([1,0,1,0,0,],10),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
	],
	as2: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(80%/130%)",
		proc: [ChainEnhance_SubAttr(0.8, 1.3, [1,0,0,0,0], [0,0,1,0,0], 4)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・雷属性化し、攻撃力アップの効果を付与(50%)",
		turn: 6,
		proc: [ss_panel_change([1,0,1,0,0]), panel_attackup(0.5)],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}