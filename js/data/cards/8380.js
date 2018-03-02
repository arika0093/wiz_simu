{
	name: "甘さにまどろむ キワム&コヨミ",
	cardno: 8380,
	imageno: 7445,
	hp: 4611,
	atk: 3011,
	cost: 57,
	attr: [1,2],
	species: [8],
	islegend: true,
	ape: "グリコⅢ",
	as1: {
		desc: "<複属性攻撃強化>水属性の味方の攻撃力をアップ、複属性が雷だとさらにアップ(30%/80%)",
		proc: ChainEnhance_SubAttr(0.3, 0.8, [0,1,0,0,0], [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 7,
		proc: [ss_skillboost(2)],
	},
	as2: {
		desc: "<複属性攻撃強化>水属性の味方の攻撃力をアップ、複属性が雷だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [0,1,0,0,0], [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを3早める",
		turn: 10,
		proc: [ss_skillboost(3)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200,[0,1,1,0,0,]),
		Attr_statusup(200,0,[0,1,1,0,0,]),
		NEFTJOD(30),
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[0,0,1,0,0,]),
		Attr_statusup_sattr(100,0,[0,1,0,0,0,],300,0,[0,0,1,0,0,]),
		Fastskill(4),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	Lawake: [
		Attr_statusup(0,200,[0,1,1,0,0,]),
		Statusup(1000,0),
	],
}