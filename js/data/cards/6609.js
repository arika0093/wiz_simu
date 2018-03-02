{
	name: "にじりよる大壁 第10の使徒",
	cardno: 6609,
	imageno: 8652,
	hp: 3817,
	atk: 3039,
	cost: 52,
	attr: [2,-1],
	species: [3],
	islegend: true,
	ape: "コラボ(エヴァⅠ)",
	is_dist: true,
	as1: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、天使はさらにアップ(30%/90%)",
		proc: [ChainEnhance(0.30, [0,0,1,0,0], 0), ChainSpecEnhance(0.90, [0,0,1,0,0], [3], 0)],
	},
	ss1: {
		desc: "<ガード>2ターン雷属性ダメージを75%軽減する",
		turn: 7,
		proc: [ss_attr_guard([0,0,1,0,0], 0.75, 2)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Attr_relief([1,1,1,1,1,],10),
		NEFTJOD(30),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Fastskill(2),
		Spec_statusup(200,0, [3,]),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Spec_statusup(200,0, [3,]),
	],
	as2: {
		desc: "<種族攻撃強化>雷属性の味方の攻撃力をアップ、天使はさらにアップ(60%/120%)",
		proc: [ChainEnhance(0.60, [0,0,1,0,0], 0), ChainSpecEnhance(1.20, [0,0,1,0,0], [3], 0)],
	},
	ss2: {
		desc: "<ガード>3ターン雷属性ダメージを75%軽減する、5チェインを消費しさらに火属性のダメージを75%軽減",
		turn: 9,
		proc: [ss_attr_guard([0,0,1,0,0], 0.75, 2), ss_chain_cost_skill(5, ss_attr_guard([1,0,1,0,0], 0.75, 2), null)],
	},
	Lawake: [
		Statusup(400,0),
		Attr_relief([0,1,0,0,0,],10),
	],
}