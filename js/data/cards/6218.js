{
	name: "神様のいたずら エンジェル・ギブン",
	cardno: 6218,
	imageno: 8041,
	hp: 2402,
	atk: 3898,
	cost: 38,
	attr: [0,-1],
	species: [3],
	islegend: true,
	is_dist: true,
	ape: "聖サタニック女学院",
	as1: {
		desc: "<連撃>敵単体を6回連続攻撃(250%)",
		proc: ChainDualAttack(2.5, 0, 6),
	},
	ss1: {
		desc: "<多弾魔術>敵単体へ火属性の10回連続ダメージ(180%)",
		turn: 6,
		proc: [ss_damage_s(1.8, [0], 10)],
	},
	awakes: [
		Statusup(0,200),
		Fastskill(1),
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],1),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Spec_statusup(300,0, [3,]),
		Spec_statusup(0,300, [3,]),
	],
	as2: {
		desc: "<連撃>敵単体を6回連続攻撃(350%)",
		proc: ChainDualAttack(3.5, 0, 6),
	},
	ss2: {
		desc: "<多弾魔術>敵単体へ火属性の10回連続ダメージ(320%)",
		turn: 9,
		proc: [ss_damage_s(3.2, [0], 10)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,400),
	],
}