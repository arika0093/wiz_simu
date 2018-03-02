{
	name: "紅蓮に燃ゆる煌眼 リヴェータ・イレ",
	cardno: 6041,
	imageno: 7865,
	hp: 3355,
	atk: 3253,
	cost: 50,
	attr: [0, -1],
	species: [8],
	islegend: true,
	ape: "覇眼戦線Ⅰ",
	is_dist: true,
	as1: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、戦士はさらにアップ(20%/40%)",
		proc: [ChainEnhance(0.20, [1, 0, 0, 0, 0], 0), ChainSpecEnhance(0.40, [1, 0, 0, 0, 0], [8], 0)],
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_delay_s(2)],
	},
	awakes: [
		Statusup(0, 200),
		Fastskill(1),
		Statusup(0, 200),
		Fastskill(2),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Spec_statusup(0, 200, [8, ]),
		Statusup(200, 0),
		Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		NEFTJOD(30),
	],
	as2: {
		desc: "<種族攻撃強化・回復>火属性の味方のHPを回復し(13%)、さらに攻撃力をアップ、戦士はさらにアップ(20%/40%)",
		proc: [Heal(0.13, [1, 0, 0, 0, 0], 0), ChainEnhance(0.20, [1, 0, 0, 0, 0], 0), ChainSpecEnhance(0.40, [1, 0, 0, 0, 0], [8], 0)],
	},
	ss2: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを2遅らせ、火属性のダメージ(400%)",
		turn: 12,
		proc: [ss_damage_s(4.0, [0], 1), ss_delay_s(2)],
	},
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		Statusup(0, 500),
	],
}