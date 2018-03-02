{
	name: "大切な人たちとの聖夜 ルチル・メイ",
	cardno: 9864,
	imageno: 9661,
	hp: 3580,
	atk: 3562,
	cost: 56,
	attr: [1,0],
	species: [9],
	islegend: true,
	ape: "Christmas2016",
	as1: {
		desc: "<複属性攻撃強化>4チェインで水属性の攻撃力をアップ(30%)、複属性が火属性だとさらにアップ(110%)",
		proc: ChainEnhance_SubAttr(0.3, 1.4 ,[0,1,0,0,0], [1,0,0,0,0], 4),
	},
	ss1: {
		desc: "<複属性ダメージ強化>8ターンの間、水属性の攻撃力をアップ(250%)、複属性が火属性だとさらにアップ(150%)",
		turn: 10,
		proc: [ss_enhance_all_subattr(1.5, 4.0, 8, [0,1,0,0,0], [1,0,0,0,0])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		Fastskill(3),
		NEFTJOD(30),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
		Abstate_invalid("all_sealed"),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,400, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 400,0, [1,0,0,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<複属性攻撃強化>4チェインで水属性の攻撃力をアップ(60%)、複属性が火属性だとさらにアップ(110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.7 ,[0,1,0,0,0], [1,0,0,0,0], 4),
	},
	ss2: {
		desc: "<複属性ダメージ強化>8ターンの間、水属性の攻撃力をアップ(250%)、複属性が火属性だとさらにアップ(150%)",
		turn: 10,
		proc: [ss_enhance_all_subattr(1.5, 4.0, 8, [0,1,0,0,0], [1,0,0,0,0])],
	},
	Lawake: [
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Statusup(500,0),
		Statusup(0,500),
	],
}