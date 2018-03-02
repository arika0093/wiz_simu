{
	name: "結成！袖振り合うもデスティニーズ",
	cardno: 8430,
	imageno: 10580,
	hp: 7035,
	atk: 1327,
	cost: 56,
	attr: [2,3],
	species: [8],
	islegend: true,
	ape: "アイドルキャッツ！",
	as1: {
		desc: "<回復>味方全体のHPを回復(14%)",
		proc: Heal(0.14, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<精霊強化>5ターンの間、味方全体を徐々に回復(20%)、さらに攻撃力とHPを250アップ(上限値:2000)(発動中行動不可)",
		turn: 5,
		proc: [ss_reinforcement_all(5, [ss_regenerate(0.2, 1, "RF"), ss_statusup_all([250, 250], [2000, 2000], -1)]),],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Awake_noeffect("心眼",1),
		Abstate_invalid("ss_sealed"),
		Heal_afterbattle(10),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,0,0,1,0,]),
		Fastskill(3),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(17%)",
		proc: Heal(0.17, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<精霊強化>5ターンの間、味方全体を徐々に回復しダメージを軽減(20%,20%)、さらに攻撃力とHPを500アップ(上限値:2000)(発動中行動不可)",
		turn: 8,
		proc: [ss_reinforcement_all(5, [ss_regenerate(0.2, 1, "RF"), ss_attr_guard([1,1,1,1,1], 0.2, 1, "RF"), ss_statusup_all([500, 500], [2000, 2000], -1)]),],
	},
	Lawake: [
		Attr_statusup(0,300, [1,1,1,1,1,]),
		Attr_relief([1,1,1,1,1,],20),
	],
}