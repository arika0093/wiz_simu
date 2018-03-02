{
	name: "迷走夢想の恋心 ニコラ・モーガン",
	cardno: 4465,
	imageno: 6159,
	hp: 2889,
	atk: 2960,
	cost: 43,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		NEFTJOD(30),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Spec_statusup(200, 0, [9, ]),
		Fastskill(1),
		Spec_statusup(0, 200, [9, ]),
		Fastskill(1),
	],
	as1: {
		desc: "<種族攻撃強化>3チェインで雷属性の味方の攻撃力をアップ、術士はさらにアップ(3チェイン：+40％ / 3チェイン+種族：+60％)",
		proc: [ChainEnhance(0.40, [0,0,1,0,0], 3), ChainSpecEnhance(0.60, [0,0,1,0,0], [9], 3)],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<種族攻撃強化>3チェインで雷属性の味方の攻撃力をアップ、術士はさらにアップ(3チェイン：+50％ / 3チェイン+種族：+70％)",
		proc: [ChainEnhance(0.50, [0,0,1,0,0], 3), ChainSpecEnhance(0.70, [0,0,1,0,0], [9], 3)],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを3早める",
		turn: 11,
		proc: [ss_skillboost(3)],
	},
}