{
	name: "不滅への方程式 ヴィラム・オルゲン",
	cardno: 4775,
	imageno: 6490,
	hp: 3233,
	atk: 2833,
	cost: 43,
	attr: [2, -1],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_relief([0, 0, 1, 0, 0, ], 20),
	],
	as1: {
		desc: "<攻撃強化>雷属性の味方の攻撃力をアップ/+40％",
		proc: ChainEnhance(0.40, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 5,
		proc: [ss_delay_s(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化>味方のMAXHP20％を使い、雷属性の味方の攻撃力をアップ/+120％",
		proc: add_cond(ChainEnhance(1.20, [0,0,1,0,0], 0), as_consume_all(0.20)),
	},
	ss2: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを1遅らせ、雷属性のダメージ(180％)",
		turn: 6,
		proc: [ss_damage_s(1.8, [0,0,1,0,0]), ss_delay_s(1)],
	},
}