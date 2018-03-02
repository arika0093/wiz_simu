{
	name: "夢を彩る和歌の神 ミコト・ウタヨミ",
	cardno: 8536,
	imageno: 8808,
	hp: 4036,
	atk: 3402,
	cost: 57,
	attr: [1,3],
	species: [1],
	islegend: true,
	ape: "八百万神秘譚Ⅲ(Z)",
	as1: {
		desc: "<チェイン攻撃・属性特効>4チェインでダメージアップ(400%)、闇属性の敵だとさらにダメージアップ(200%)",
		proc: [ChainAttack(4.0, 4), ChainAttrAttack(6.0, 4, [0,0,0,0,1])],
	},
	ss1: {
		desc: "<弱体化大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(400%)、さらに5ターンの間、敵の防御力を弱体化(30%)",
		turn: 11,
		proc: [ss_damage_all(4.0, [1]), ss_attr_weaken_all(null, 0.3, 5), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		NEFTJOD(60),
		Fastskill(3),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,0,1,0,]),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [0,0,0,1,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<チェイン攻撃・属性特効>4チェインでダメージアップ(500%)、闇属性の敵だとさらにダメージアップ(200%)",
		proc: [ChainAttack(5.0, 4), ChainAttrAttack(7.0, 4, [0,0,0,0,1])],
	},
	ss2: {
		desc: "<弱体化大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(700%)、さらに5ターンの間、敵の防御力を弱体化(30%)",
		turn: 14,
		proc: [ss_damage_all(7.0, [1]), ss_attr_weaken_all(null, 0.3, 5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,1000),
	],
}