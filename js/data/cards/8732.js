{
	name: "揺らめく夏の幻 エリカ・オイリン",
	cardno: 8732,
	imageno: 10908,
	hp: 7845,
	atk: 1532,
	cost: 48,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "大魔道杯 in エタクロⅢ",
	is_dist: true,
	as1: {
		desc: "<回復>味方全体のHPを回復(7%)、デッキに単色の精霊が多いほど、さらに回復(2%)（上限:5段階)",
		proc: add_cond(Heal(0.07, [1, 1, 1, 1, 1]), as_singleattr_num(0, 0.02)),
	},
	ss1: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力をアップ(15%,15%,100%)(発動中行動不可)",
		turn: 4,
		proc: [ss_reinforcement_all(4, [ss_regenerate(0.15, 1, "RF"), ss_attr_guard([1, 1, 1, 1, 1], 0.15, 1, "RF"), ss_enhance_all(1.0, 1, [1, 1, 1, 1, 1], "RF")])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Abstate_invalid("heal_reverse"),
		Abstate_invalid("ss_sealed"),
		Fastskill(3),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(10%)、デッキに単色の精霊が多いほど、さらに回復(2%)（上限:5段階)",
		proc: add_cond(Heal(0.10, [1, 1, 1, 1, 1]), as_singleattr_num(0, 0.02)),
	},
	ss2: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力をアップ(25%,25%,150%)(発動中行動不可)",
		turn: 6,
		proc: [ss_reinforcement_all(4, [ss_regenerate(0.25, 1, "RF"), ss_attr_guard([1, 1, 1, 1, 1], 0.25, 1, "RF"), ss_enhance_all(1.5, 1, [1, 1, 1, 1, 1], "RF")])],
	},
	Lawake: [
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
	],
}