{
	name: "スリーツーワンで響く歌声 鏡音レン",
	cardno: 8028,
	imageno: 6606,
	hp: 4783,
	atk: 2532,
	cost: 54,
	attr: [2,1],
	species: [6],
	islegend: true,
	ape: "コラボ(ミク)",
	as1: {
		desc: "<複属性攻撃強化>3チェインで雷属性の攻撃力をアップ、複属性が水属性だとさらにアップ、物質はさらにアップ(30%/80%/130%)",
		proc: [
				ChainEnhance_SubAttr(0.3, 0.8, [0,0,1,0,0], [0,1,0,0,0], 3),
				add_cond(ChainEnhance_SubAttr(0.3, 1.3, [0,0,1,0,0], [0,1,0,0,0], 3), when_spec_match([6])),
		]
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_s(2)],
	},
	as2: {
		desc: "<複属性攻撃強化>3チェインで雷属性の攻撃力をアップ、複属性が水属性だとさらにアップ、物質はさらにアップ(60%/110%/160%)",
		proc: [
				ChainEnhance_SubAttr(0.6, 1.1, [0,0,1,0,0], [0,1,0,0,0], 3),
				add_cond(ChainEnhance_SubAttr(0.6, 1.6, [0,0,1,0,0], [0,1,0,0,0], 3), when_spec_match([6])),
		]
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_s(3)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup(0,200,[0,1,1,0,0,]),
		Attr_statusup(200,0,[0,1,1,0,0,]),
		Fastskill(2),
		Awake_Chainboost(1),
		Spec_statusup(0,300,[6,]),
		Spec_statusup(300,0,[6,]),
		Fastskill(2),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[0,0,1,0,0,]),
		Attr_statusup_sattr(100,0,[0,1,0,0,0,],300,0,[0,0,1,0,0,]),
	],
	Lawake: [
		Attr_statusup(0,200,[0,1,1,0,0,]),
		Statusup(500,0),
		NEFTJOD(30),
	],
}