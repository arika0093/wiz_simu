{
	name: "雷牙の機翔 スミオ&エクスマキナ",
	cardno: 6330,
	imageno: 8165,
	hp: 2380,
	atk: 3783,
	cost: 49,
	attr: [2,0],
	species: [8],
	islegend: true,
	disable: true,
	ape: "幻魔特区スザクⅢ",
	as1: {
		desc: "<複属性攻撃強化>残りHPが80%以上で雷属性の攻撃力をアップ、複属性が火属性だとさらにアップ(50%/100%)",
		proc: add_cond(ChainEnhance_SubAttr(0.5, 1.0, [0,0,1,0,0], [1,0,0,0,0], 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<反動大魔術>敵全体へ雷属性のダメージ(500%)◆スキル使用後、1ターン封印状態に",
		turn: 5,
		proc: [ss_damage_all(5.0, [2]), ss_allsealed_own(1)],
	},
	awakes: [
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup_sattr(200, 0, [0,0,1,0,0], 200, 0, [1,0,0,0,0]),

	],
	as2: {
		desc: "<複属性攻撃強化>残りHPが80%以上で雷属性の攻撃力をアップ、複属性が火属性だとさらにアップ(80%/130%)",
		proc: add_cond(ChainEnhance_SubAttr(0.8, 1.3, [0,0,1,0,0], [1,0,0,0,0], 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<反動大魔術>敵全体へ雷属性のダメージ(800%)◆スキル使用後、1ターン封印状態に",
		turn: 8,
		proc: [ss_damage_all(8.0, [2]), ss_allsealed_own(1)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [1,0,1,0,0,]),
	],
}