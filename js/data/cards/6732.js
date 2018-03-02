{
	name: "双雷獣帝 イリ&ジン",
	cardno: 6732,
	imageno: 8686,
	hp: 4033,
	atk: 2754,
	cost: 42,
	attr: [2,-1],
	species: [5],
	islegend: true,
	as1: {
		desc: "<攻撃強化・回復>雷属性の味方のHPを回復(11%)、さらに雷属性の味方の攻撃力をアップ(20%)",
		proc: [Heal(0.20, [0,0,1,0,0], 0), ChainEnhance(0.20, [0,0,1,0,0], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷属性化",
		turn: 2,
		proc: [ss_panel_change([0,0,1,0,0])],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Statusup(200,0),
		Statusup(200,0),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Costdown(2),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
	],
	as2: {
		desc: "<攻撃強化・回復>雷属性の味方のHPを回復(11%)、さらに雷属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.20, [0,0,1,0,0], 0), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷属性化し、回復の効果を付与(10%)",
		turn: 6,
		proc: [ss_panel_change([0,0,1,0,0]), panel_healally(0.10)],
	},
	Lawake: [
		Statusup(1000,0),
	],
}