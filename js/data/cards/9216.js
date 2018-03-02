{
	name: "深淵の女王 ミュール&レベリオー",
	cardno: 9216,
	imageno: 5958,
	hp: 2950,
	atk: 3749,
	cost: 54,
	attr: [0,4],
	species: [2],
	islegend: true,
	ape: "幻魔特区スザクⅡ",
	as1: {
		desc: "<複属性攻撃強化>残りHPが80%以上で火属性の攻撃力をアップ(50%)、複属性が闇属性だとさらにアップ(50%)",
		proc: add_cond(ChainEnhance_SubAttr(0.5, 1.0, [1,0,0,0,0], [0,0,0,0,1], 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(3),
		NEFTJOD(60),
		Awake_noeffect("経験値取得量アップ",2),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,0,1,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>残りHPが80%以上で火属性の攻撃力をアップ(80%)、複属性が闇属性だとさらにアップ(50%)",
		proc: add_cond(ChainEnhance_SubAttr(0.8, 1.3, [1,0,0,0,0], [0,0,0,0,1], 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 9,
		proc: [ss_latest_copy()],
	},
	Lawake: [
		Statusup(0,1500),
		Statusup(500,0),
	],
}