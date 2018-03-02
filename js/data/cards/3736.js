{
	name: "桜媛と巫女 ヤチヨ&インフローレ",
	cardno: 3736,
	imageno: 5296,
	hp: 2757,
	atk: 2631,
	cost: 44,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		Attr_relief([0, 1, 0, 0, 0, ], 20),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Heal_afterbattle(10),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Attr_relief([0, 0, 1, 0, 0, ], 20),
		Spec_statusup(200, 0, [8, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<回復>水属性の味方のHPを回復/13％",
		proc: Heal(0.13, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(400, 0),
	],
	as2: {
		desc: "<攻撃強化・回復>水属性の味方のHPを回復、さらに水属性の味方の攻撃力をアップ(回復：16％、攻撃力アップ：+30％)",
		proc: [Heal(0.16, [0,1,0,0,0], 0), ChainEnhance(0.30, [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
}