{
	name: "AbCd-Θ:《夜藝尽焔天 ラヒルメ》",
	cardno: 6297,
	imageno: 8144,
	hp: 3614,
	atk: 3030,
	cost: 65,
	attr: [0,4],
	species: [11],
	disable: true,
	islegend: true,
	is_dist: true,
	ape: "レイド AbCd",
	as1: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(10%/120%)",
		proc: ChainEnhance_SubAttr(0.1, 1.2, [1,0,0,0,0], [0,0,0,0,1], 4),
	},
	ss1: {
		desc: "<精霊強化>10ターンの間、味方全体のダメージを軽減(25%)◆発動中行動不可",
		turn: 6,
		proc: [ss_reinforcement_all(10, [
			ss_attr_guard([1, 1, 1, 1, 1], 0.25, 1, "RF")
		])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],2),
		Statusup(200,0),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Attr_relief([0,1,0,0,0,],10),
		Spec_statusup(0,200, [11,]),
	],
	as2: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が闇属性だとさらにアップ(40%/150%)",
		proc: ChainEnhance_SubAttr(0.4, 1.5, [1,0,0,0,0], [0,0,0,0,1], 4),
	},
	ss2: {
		desc: "<精霊強化>10ターンの間、味方全体のダメージを軽減(40%)◆発動中行動不可",
		turn: 9,
		proc: [ss_reinforcement_all(10, [
			ss_attr_guard([1, 1, 1, 1, 1], 0.4, 1, "RF")
		])],
	},
	Lawake: [
		Attr_relief([1,1,1,1,1,],10),
		Statusup(0,500),
	],
}