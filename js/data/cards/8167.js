{
	name: "蒼空に子らと ヒビキ・マスグレイヴ",
	cardno: 8167,
	imageno: 10301,
	hp: 5877,
	atk: 1815,
	cost: 54,
	attr: [1,0],
	species: [8],
	islegend: true,
	ape: "新人王",
	as1: {
		desc: "<回復>火・水属性の味方のHPを回復(14%)",
		proc: Heal(0.14, [1,1,0,0,0], 0),
	},
	ss1: {
		desc: "<精霊強化>5ターンの間、味方全体を徐々に回復(20%)、さらに攻撃力とHPを250アップ(上限値:2000)◆発動中行動不可",
		turn: 5,
		proc: [ss_reinforcement_all(5, [ss_regenerate(0.2, 1, "RF"), ss_statusup_all([250, 250], [2000, 2000], -1)]),]
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_relief([1,0,0,0,0,],20),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復>火・水属性の味方のHPを回復(17%)",
		proc: Heal(0.17, [1,1,0,0,0], 0),
	},
	ss2: {
		desc: "<精霊強化>5ターンの間、味方全体を徐々に回復しダメージを軽減(20%,20%)、さらに攻撃力とHPを500アップ(上限値:2000)◆発動中行動不可",
		turn: 8,
		proc: [ss_reinforcement_all(5, [ss_regenerate(0.2, 1, "RF"), ss_attr_guard([1,1,1,1,1], 0.2, 1, "RF"), ss_statusup_all([500, 500], [2000, 2000], -1)]),]
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Abstate_invalid("discharge"),
	],
}