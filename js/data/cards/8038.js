{
	name: "聡慧大賢者 ティア・ソピア",
	cardno: 8038,
	imageno: 7594,
	hp: 4324,
	atk: 2042,
	cost: 46,
	attr: [0,3],
	species: [9],
	islegend: true,
	ape: "ギルドマスターセレモニーズ",
	as1: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ、複属性が光属性だとさらにアップ(30%/80%)",
		proc: ChainEnhance_SubAttr(0.30, 0.80, [1,0,0,0,0], [0,0,0,1,0], 0)
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・光属性化",
		turn: 3,
		proc: [ss_panel_change([1,0,0,1,0])],
	},
	as2: {
		desc: "<複属性攻撃強化>火属性の攻撃力をアップ、複属性が光属性だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.60, 1.10, [1,0,0,0,0], [0,0,0,1,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・光属性化し、攻撃力アップの効果を付与(100%)",
		turn: 6,
		proc: [ss_panel_change([1,0,0,1,0]), panel_attackup(1.0)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		NEFTJOD(30),
		Attr_statusup(100,0,[1,0,0,0,0,]),
		Attr_statusup(0,100,[1,0,0,0,0,]),
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,200,[0,0,0,1,0,]),
		Attr_statusup_sattr(100,0,[1,0,0,0,0,],200,0,[0,0,0,1,0,]),
		Abstate_invalid("as_sealed"),
	],
	Lawake: [
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,100,[0,0,0,1,0,]),
		Statusup(500,0),
	],
}