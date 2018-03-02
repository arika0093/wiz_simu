{
	name: "そっと絡まる機械の指先 アイ",
	cardno: 90062,
	imageno: 7550,
	hp: 4736,
	atk: 2911,
	cost: 54,
	attr: [2,0],
	species: [6],
	islegend: true,
	as1: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が火属性だとさらにアップ(30%/80%)",
		proc: ChainEnhance_SubAttr(0.3, 0.8, [0,0,1,0,0], [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<ダメージ強化>4ターンの間、味方の攻撃力をアップ、5チェインを消費してさらにアップ(100%/150%)",
		turn: 7,
		proc: [ss_enhance_all(ss_chain_cost(5, 1.5, 1.0), 4, [1,1,1,1,1])],
	},
	awakes: [
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 200,0, [1,0,0,0,0,]),
		Costdown(10),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [1,0,0,0,0,]),
		Fastskill(1),
		Fastskill(2),
		Spec_statusup(400,0, [6,]),
		Panel_boost([0,0,1,0,0,],2),
		Spec_statusup(0,400, [6,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<複属性攻撃強化>雷属性の攻撃力をアップ、複属性が火属性だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [0,0,1,0,0], [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<ダメージ強化>5ターンの間、味方の攻撃力をアップ、5チェインを消費してさらにアップ(100%/200%)",
		turn: 10,
		proc: [ss_enhance_all(ss_chain_cost(5, 2.0, 1.0), 5, [1,1,1,1,1])],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,1,0,0,]),
	],
}