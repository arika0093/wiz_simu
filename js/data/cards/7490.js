{
	name: "夢で夜更かし セシーリア・ヴェルレ",
	cardno: 7490,
	imageno: 6588,
	hp: 5253,
	atk: 3447,
	cost: 54,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "ハロウィン2014",
	as1: {
		desc: "<回復>雷属性の味方のHPを回復、リーダー時さらに回復(13%/17%)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), add_cond(Heal(0.17, [0,0,1,0,0], 0), when_leader())],
	},
	ss1: {
		desc: "<状態異常回復>味方全体のHPを回復し(50%)、状態異常を回復する",
		turn: 7,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
	awakes: [
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Heal_afterbattle(10),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Spec_statusup(0,300, [9,]),
		Spec_statusup(300,0, [9,]),
	],
	as2: {
		desc: "<回復>雷属性の味方のHPを回復、リーダー時さらに回復(16%/20%)",
		proc: [Heal(0.16, [0,0,1,0,0], 0), add_cond(Heal(0.20, [0,0,1,0,0], 0), when_leader())],
	},
	ss2: {
		desc: "<状態異常回復&蘇生>味方全体のHPを完全回復し、状態異常を回復、さらに雷属性の味方を100%で蘇生",
		turn: 11,
		proc: [ss_heal(1), ss_abstate_cure(), ss_resurrection([0,0,1,0,0], 1)],
	},
	Lawake: [
		Statusup(700,0),
		Statusup(0,300),
		Attr_relief([0,1,0,0,0,],20),
	],
}