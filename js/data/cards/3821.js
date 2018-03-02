{
	name: "前刻の蒼神 イレーナ・フリエル",
	cardno: 3821,
	imageno: 5419,
	hp: 2876,
	atk: 2521,
	cost: 42,
	attr: [1, -1],
	species: [1],
	disable: true,
	awakes: [
		Statusup(100, 0),
		Statusup(0, 200),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [1, ]),
		Spec_statusup(200, 0, [1, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [1, ]),
	],
	as1: {
		desc: "<回復>味方全員のHPを回復/13％",
		proc: Heal(0.13, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		NEFTJOD(30),
	],
	as2: {
		desc: "<攻撃強化・回復>味方全員のHPを回復し、さらに水属性の味方の攻撃力をアップ(回復：13％ / 攻撃力アップ：+30％)",
		proc: [Heal(0.13, [1,1,1,1,1], 0), ChainEnhance(0.30, [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
}