{
	name: "V－day ユッカ・エンデ",
	cardno: 7927,
	imageno: 10030,
	hp: 2875,
	atk: 4105,
	cost: 57,
	attr: [2,1],
	species: [9],
	islegend: true,
	ape: "バレンタイン2017",
	as1: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が水だとさらにアップ(10%/100%)",
		proc: ChainEnhance_SubAttr(0.1, 1.0, [0,0,1,0,0], [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水・雷属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [2, 1]), ss_ignore_skillcounter()],
	},
	as2: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が水だとさらにアップ(40%/130%)",
		proc: ChainEnhance_SubAttr(0.4, 1.3, [0,0,1,0,0], [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<複属性ダメージ強化>4ターンの間、雷属性の攻撃力をアップ、複属性が水だとさらにアップ(50%/150%)",
		turn: 8,
		proc: [ss_enhance_all_subattr(0.5, 1.5, 4, [0,0,1,0,0], [0,1,0,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		NEFTJOD(30),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Fastskill(4),
		Attr_statusup(0,200,[0,1,1,0,0,]),
		Attr_statusup(200,0,[0,1,1,0,0,]),
		Fastskill(4),
		Awake_noeffect("心眼",1),
		Attr_statusup_sattr(0,100,[0,0,1,0,0,],0,300,[0,1,0,0,0,]),
		Attr_statusup_sattr(100,0,[0,0,1,0,0,],300,0,[0,1,0,0,0,]),
	],
	Lawake: [
		Attr_statusup_sattr(0,100,[0,0,1,0,0,],0,200,[0,1,0,0,0,]),
		Statusup(0,500),
	],
}