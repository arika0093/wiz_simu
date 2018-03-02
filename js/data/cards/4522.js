{
	name: "募る想いに彩られ アーシア&ニコラ",
	cardno: 4522,
	imageno: 6200,
	hp: 3540,
	atk: 1804,
	cost: 46,
	attr: [1, 2],
	species: [9],
	disable: true,
	awakes: [
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Heal_afterbattle(10),
		Fastskill(1),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
	],
	as1: {
		desc: "<回復>水・雷属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,1,1,0,0], 0)
	},
	ss1: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを1早め、敵全体の攻撃ターンを1遅らせる",
		turn: 6,
		proc: [ss_skillboost(1), ss_delay_all(1)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<攻撃強化・回復>水・雷属性の味方のHPを回復、さらに水・雷属性の味方の攻撃力をアップ(回復：16％ / 攻撃：+30％)",
		proc: [Heal(0.16, [0,1,1,0,0], 0), ChainEnhance(0.30, [0,1,1,0,0], 0)],
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを2早め、敵全体の攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_all(2)],
	},
}