{
	name: "春風の麗桜姫 フィオナ・カリーナ",
	cardno: 7106,
	imageno: 9191,
	hp: 6645,
	atk: 2352,
	cost: 56,
	attr: [1,-1],
	species: [4],
	islegend: true,
	ape: "古の森の千年桜",
	as1: {
		desc: "<回復>味方全体のHPを回復(14%)",
		proc: Heal(0.14, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを1遅らせる",
		turn: 4,
		proc: [ss_delay_all(1)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(1),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Attr_statusup(0,300, [0,1,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(300,0, [0,1,0,0,0,]),
		Fastskill(3),
		Spec_statusup(500,0, [4,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(17%)",
		proc: Heal(0.17, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<遅延>敵全体の攻撃ターンを3遅らせ、20チェインで更に1遅らせる",
		turn: 10,
		proc: [ss_delay_all(ss_chain_cond(20, 4, 3))],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}