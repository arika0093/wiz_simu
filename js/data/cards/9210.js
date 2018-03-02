{
	name: "鏡合わせの私達 アッカ&トイボア",
	cardno: 9210,
	imageno: 8237,
	hp: 4537,
	atk: 2755,
	cost: 54,
	attr: [2,1],
	species: [8],
	islegend: true,
	ape: "幻魔特区スザクⅠ",
	as1: {
		desc: "<複属性攻撃強化>5チェインで雷属性の攻撃力をアップ(60%)、複属性が水属性だとさらにアップ(50%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [0,0,1,0,0], [0,1,0,0,0], 5),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(4),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Awake_noeffect("難易度ダウン",1),
	],
	as2: {
		desc: "<複属性攻撃強化>5チェインで雷属性の攻撃力をアップ(90%)、複属性が水属性だとさらにアップ(50%)",
		proc: ChainEnhance_SubAttr(0.9, 1.4, [0,0,1,0,0], [0,1,0,0,0], 5),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、チェインがプラス2の効果と攻撃力アップの効果を付与(50%)",
		turn: 7,
		proc: [
			ss_panel_change([1,1,1,0,0]),
			panel_multieffect([
				panel_attackup(0.5),
				panel_chainplus(2)
			]),
		],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_statusup(200,0, [0,1,1,0,0,]),
	],
}