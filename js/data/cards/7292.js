{
	name: "究極お節介妹 リューリュー・ブック[火]",
	cardno: 7292,
	imageno: 9317,
	hp: 6023,
	atk: 545,
	cost: 41,
	attr: [0,-1],
	species: [9],
	islegend: true,
	ape: "大魔道杯 in レディアント",
	is_dist: true,
	as1: {
		desc: "<回復>味方全体のHPを回復(13%)",
		proc: Heal(0.13, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<挑発>3ターン敵の攻撃を自分に集めダメージを50%軽減する",
		turn: 6,
		proc: [ss_provocate(0.5, 3)],
	},
	awakes: [
		Fastskill(1),
		Heal_afterbattle(10),
		Panel_boost([1,0,0,0,0,],1),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(2),
		NEFTJOD(30),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(16%)",
		proc: Heal(0.16, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<挑発>3ターン敵の攻撃を自分に集めダメージを75%軽減する、さらに味方全体のHPを回復(25%)",
		turn: 9,
		proc: [ss_provocate(0.75, 3), ss_heal(0.25)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(500,0),
	],
}