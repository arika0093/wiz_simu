{
	name: "予定されていた結末 Mark.09",
	cardno: 6637,
	imageno: 8585,
	hp: 2342,
	atk: 2350,
	cost: 37,
	attr: [2,0],
	species: [6],
	islegend: true,
	ape: "コラボ(エヴァⅡ)",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(300%)",
		proc: ChainAttack(3.0, 3),
	},
	ss1: {
		desc: "<ガード>2ターン水属性ダメージを35%軽減する",
		turn: 6,
		proc: [ss_attr_guard([0,1,0,0,0], 0.35, 2)],
	},
	awakes: [
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],1),
		Statusup(200,0),
		Fastskill(1),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Attr_relief([0,1,0,0,0,],10),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Fastskill(1),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(400%)",
		proc: ChainAttack(4.0, 3),
	},
	ss2: {
		desc: "<ガード>2ターン水属性ダメージを25%軽減する、5チェインを消費しさらに15%軽減",
		turn: 9,
		proc: [ss_attr_guard([0,1,0,0,0], ss_chain_cost(5, 0.4, 0.25), 2)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(300,0),
	],
}