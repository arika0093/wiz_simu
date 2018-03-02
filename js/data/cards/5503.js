{
	name: "天上岬のしあわせ姫 エテルネ・ポム",
	cardno: 5503,
	imageno: 7288,
	hp: 2638,
	atk: 2134,
	cost: 35,
	attr: [0,2],
	species: [4],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<攻撃強化>5チェインで火・雷属性の味方の攻撃力をアップ(55%)",
		proc: ChainEnhance(0.55, [1,0,1,0,0], 5),
	},
	ss1: {
		desc: "<ガード>3ターン全属性ダメージを40%軽減する",
		turn: 8,
		proc: [ss_attr_guard([1,1,1,1,1], 0.4, 3)],
	},
	awakes: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Statusup(200,0),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<攻撃強化>5チェインで火・雷属性の味方の攻撃力をアップ(85%)",
		proc: ChainEnhance(0.85, [1,0,1,0,0], 5),
	},
	ss2: {
		desc: "<ガード>3ターン全属性ダメージを40%軽減する、10チェインを消費しさらに3ターン軽減",
		turn: 12,
		proc: [ss_attr_guard([1,1,1,1,1], 0.4, ss_chain_cost(10, 6, 3))],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(500,0),
	],
}