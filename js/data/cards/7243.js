{
	name: "高飛車お嬢様魔道士 カルロマ・シィ",
	cardno: 7243,
	imageno: 9265,
	hp: 3211,
	atk: 1521,
	cost: 29,
	attr: [0,-1],
	species: [9],
	islegend: true,
	ape: "追憶のレディアント",
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方のHPを回復(11%)",
		proc: Heal(0.11, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<回復>味方一人のHPを完全に回復する",
		turn: 2,
		proc: [ss_toselect_one(ss_heal(1))],
	},
	awakes: [
		Costdown(10),
		Panel_boost([1,0,0,0,0,],1),
		Statusup(200,0),
		Statusup(0,200),
		Fastskill(1),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		NEFTJOD(30),
		Spec_statusup(200,0, [9,]),
		Fastskill(2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復(13%)",
		proc: Heal(0.13, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<状態異常回復&蘇生>味方一人のHPを完全回復し、状態異常を回復、さらに50%で蘇生",
		turn: 4,
		proc: [
			ss_toselect_one(ss_heal(1)),
			ss_toselect_one(ss_abstate_cure()),
			ss_toselect_one(ss_resurrection([1, 1, 1, 1, 1], 0.5))
		],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}