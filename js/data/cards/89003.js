{
	name: "胸に誇りの薫香を！ ナルナ・カスタ",
	cardno: 89003,
	imageno: 7277,
	hp: 3567,
	atk: 3006,
	cost: 47,
	attr: [0, 1],
	species: [8],
	islegend: true,
	ape: "天上岬Ⅱ",
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(450%)",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(20%)",
		turn: 8,
		proc: [ss_regenerate(0.2, 5)],
	},
	awakes: [
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
		Fastskill(1),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
		NEFTJOD(30),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
		Heal_afterbattle(10),
		Fastskill(2),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでMAXHP15%を使い、ダメージアップ(650%)",
		proc: add_cond(ChainAttack(4.5, 5), as_consume_own(0.15)),
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する、3チェインを消費しさらに回復(20%/30%)",
		turn: 10,
		proc: [ss_regenerate(ss_chain_cost(3, 0.3, 0.2), 5)],
	},
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
}