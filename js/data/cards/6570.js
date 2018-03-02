{
	name: "魔道士を拒絶する怪物 エクシュ",
	cardno: 6570,
	imageno: 8466,
	hp: 3043,
	atk: 2442,
	cost: 34,
	attr: [2,-1],
	species: [2],
	islegend: true,
	ape: "USG",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(300%)、さらに敵のHPを吸収(15%)",
		proc: add_cond(ChainAttack(3.0, 4), as_hp_absorption(0.15)),
	},
	ss1: {
		desc: "<毒>4ターン敵全体に毒のダメージを与える(3000)",
		turn: 4,
		proc: [poison(3000, 4)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,200),
		Fastskill(1),
		Statusup(200,0),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Fastskill(2),
		Statusup(0,200),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(400%)、さらに敵のHPを吸収(15%)",
		proc: add_cond(ChainAttack(4.0, 4), as_hp_absorption(0.15)),
	},
	ss2: {
		desc: "<毒>4ターン敵全体に毒のダメージを与える(5000)",
		turn: 7,
		proc: [poison(5000, 4)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}