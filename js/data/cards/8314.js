{
	name: "やわらかさの極致 ラパパヘヴン",
	cardno: 8314,
	imageno: 8372,
	hp: 5505,
	atk: 2342,
	cost: 56,
	attr: [2,3],
	species: [4],
	islegend: true,
	ape: "GW2015",
	as1: {
		desc: "<複属性攻撃強化・種族攻撃強化>3チェインで雷属性の攻撃力をアップ(30%)、複属性が光属性だとさらにアップ(50%)、神族・妖精はさらにアップ(50%)",
		proc: [ChainEnhance_SubAttr(0.3, 0.8, [0,0,1,0,0], [0,0,0,1,0], 3), add_cond(ChainEnhance_SubAttr(0.3, 1.3, [0,0,1,0,0], [0,0,0,1,0], 3), when_spec_match([1,4]))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷・光属性化",
		turn: 3,
		proc: [ss_panel_change([2,3])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(3),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [0,0,0,1,0,]),
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 200,0, [0,0,0,1,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化・種族攻撃強化>3チェインで雷属性の攻撃力をアップ(60%)、複属性が光属性だとさらにアップ(50%)、神族・妖精はさらにアップ(50%)",
		proc: [ChainEnhance_SubAttr(0.6, 1.1, [0,0,1,0,0], [0,0,0,1,0], 3), add_cond(ChainEnhance_SubAttr(0.6, 1.6, [0,0,1,0,0], [0,0,0,1,0], 3), when_spec_match([1,4]))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷・光属性化し、ダメージ軽減・SPチャージ・チェイン・攻撃力アップをランダムで付与(10~55%、1~2、1~4、75~150%)",
		turn: 7,
		proc: [ss_panel_change([2,3]), panel_skillboost(1), panel_skillboost(2), panel_chainplus(1), panel_chainplus(2), panel_chainplus(3), panel_chainplus(4), panel_attackup(0.75), panel_attackup(1), panel_attackup(1.25), panel_attackup(1.5), panel_attr_guard([1,1,1,1,1], 0.1), panel_attr_guard([1,1,1,1,1], 0.55)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
	],
}