{
	name: "夜空に輝く大魔道 メリィ・ミツボシ",
	cardno: 4719,
	imageno: 6459,
	hp: 2719,
	atk: 3150,
	cost: 49,
	attr: [1, -1],
	species: [9],
	awakes: [
		Statusup(0, 200),
		Fastskill(2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		NEFTJOD(30),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<属性特効>パネルが2色、3色で火属性の敵単体へ特効ダメージ(2色：550％ / 3色：700％)",
		proc: ChainPanelsAttrAttack(0, 5.5, 7.0, [1,0,0,0,0], 0)
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを1早める",
		turn: 7,
		proc: [ss_skillboost(1)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効>パネルが2色、3色で火属性の敵単体へ特効ダメージ(2色：700％ / 3色：900％)",
		proc: ChainPanelsAttrAttack(0, 7.0, 9.0, [1, 0, 0, 0, 0], 0)
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 9,
		proc: [ss_skillboost(2)],
	},
}