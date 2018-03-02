{
	name: "秘妖の朧月騎士 ゼリィ・ゼリィ",
	cardno: 7437,
	imageno: 9422,
	hp: 4183,
	atk: 2819,
	cost: 53,
	attr: [1,0],
	species: [0],
	islegend: true,
	ape: "神竜降臨Ⅱ",
	as1: {
		desc: "<複属性攻撃強化>水属性の攻撃力をアップ、複属性が火属性だとさらにアップ(20%/70%)、龍族はさらにアップ(40%)",
		proc: [
			ChainEnhance_SubAttr(0.2, 0.7, [0,1,0,0,0], [1,0,0,0,0], 0),
			add_cond(ChainEnhance_SubAttr(0.2, 1.1, [0,1,0,0,0], [1,0,0,0,0], 0), when_spec_match([0])),
		]
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(60%)",
		turn: 2,
		proc: [panel_attackup(0.6)],
	},
	awakes: [
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Statusup(0,200),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Statusup(200,0),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [1,0,0,0,0,]),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<複属性攻撃強化>水属性の攻撃力をアップ、複属性が火属性だとさらにアップ(50%/100%)、龍族はさらにアップ(40%)",
		proc: [
			ChainEnhance_SubAttr(0.5, 1.0, [0,1,0,0,0], [1,0,0,0,0], 0),
			add_cond(ChainEnhance_SubAttr(0.2, 1.4, [0,1,0,0,0], [1,0,0,0,0], 0), when_spec_match([0])),
		]
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(100%)",
		turn: 4,
		proc: [panel_attackup(1.0)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Statusup(500,0),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
}