{
	name: "鋼鉄の純真 ミュール&レベリオー",
	cardno: 9167,
	imageno: 11403,
	hp: 6385,
	atk: 1685,
	cost: 56,
	attr: [0,4],
	species: [2],
	islegend: true,
	ape: "幻魔特区RELOADED",
	as1: {
		desc: "<複属性攻撃強化>味方のMAXHP10%を使い、火属性の攻撃力をアップ(90%) 、複属性が闇属性だとさらにアップ(50%)",
		proc: add_cond(ChainEnhance_SubAttr(0.9, 1.4, [1,0,0,0,0], [0,0,0,0,1], 0), as_consume_all(0.1)),
	},
	ss1: {
		desc: "<ブースト>1ターン溜めた後、1ターンの間、味方のMAXHPを毎ターン20%消費し、味方の攻撃力をアップ(200%)。さらに極稀にクリティカル",
		turn: 1,
		charged: 1,
		proc: [ss_boost_enhance_all(2.0, 1, 0.2)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(3),
		NEFTJOD(60),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,0,1,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>味方のMAXHP10%を使い、火属性の攻撃力をアップ(120%) 、複属性が闇属性だとさらにアップ(50%)",
		proc: add_cond(ChainEnhance_SubAttr(1.2, 1.7, [1,0,0,0,0], [0,0,0,0,1], 0), as_consume_all(0.1)),
	},
	ss2: {
		desc: "<弱体化大魔術>スキル反射を無視し、敵全体へ火属性のダメージ(100%)、さらに15ターンの間、敵の防御力を弱体化(15%)",
		turn: 4,
		proc: [ss_damage_all(1.0, [0]), ss_attr_weaken_all(null, 0.15, 15), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,0,1,]),
	],
}