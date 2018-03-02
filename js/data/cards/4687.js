{
	name: "聖女の証を継ぐ者 セティエ・レー",
	cardno: 4687,
	imageno: 6446,
	hp: 2941,
	atk: 2861,
	cost: 43,
	attr: [2, -1],
	species: [9],
	awakes: [
		Costdown(2),
		Fastskill(1),
		Statusup(200, 0),
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<回復>雷属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<攻撃強化・回復>雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：13％ / 攻撃力：+30％)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<遅延>攻撃ターンを3遅らせ、さらに味方全体のHPを回復する(50％)",
		turn: 13,
		proc: [ss_heal(0.50), ss_delay_all(3)],
	},
}