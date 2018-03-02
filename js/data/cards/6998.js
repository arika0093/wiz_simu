{
	name: "迷走夢想の恋心 ニコラ・モーガン",
	cardno: 6998,
	imageno: 8996,
	hp: 2903,
	atk: 3762,
	cost: 54,
	attr: [2,1],
	species: [9],
	islegend: true,
	ape: "クロム・マグナⅣ",
	as1: {
		desc: "<複属性攻撃強化>3チェインで雷属性の攻撃力をアップ、複属性が水属性だとさらにアップ、術士はさらにアップ(30%/80%/110%)",
		proc: [
			ChainEnhance_SubAttr(0.3, 0.8, [0,0,1,0,0], [0,1,0,0,0], 3),
			add_cond(ChainEnhance_SubAttr(0.3, 1.1, [0,0,1,0,0], [0,1,0,0,0], 3), when_spec_match([9])),
		]
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 7,
		proc: [ss_skillboost(2)],
	},
	awakes: [
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Abstate_invalid("discharge"),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Spec_statusup(200,0, [9,]),
		Fastskill(2),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [0,1,0,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<複属性攻撃強化>3チェインで雷属性の攻撃力をアップ、複属性が水属性だとさらにアップ、術士はさらにアップ(60%/110%/140%)",
		proc: [
			ChainEnhance_SubAttr(0.6, 1.1, [0,0,1,0,0], [0,1,0,0,0], 3),
			add_cond(ChainEnhance_SubAttr(0.6, 1.4, [0,0,1,0,0], [0,1,0,0,0], 3), when_spec_match([9])),
		]
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを3早める",
		turn: 10,
		proc: [ss_skillboost(3)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}