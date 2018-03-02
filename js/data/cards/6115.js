{
	name: "忘郷の戦神翼姫 ヒルデ・レイルル",
	cardno: 6115,
	imageno: 7935,
	hp: 2434,
	atk: 4066,
	cost: 43,
	attr: [1, -1],
	species: [1],
	islegend: true,
	as1: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(400%/550%)",
		proc: ChainPanelsAttack(0, 4.0, 5.5, 3),
	},
	ss1: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵単体へ水属性のダメージ(240%×人数)",
		turn: 11,
		proc: [ss_damage_s(ss_consume_all_cond(2.4, 0.50), [1], 1)],
	},
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 500, [1, ]),
		Spec_statusup(500, 0, [1, ]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Awake_noeffect("心眼", 1),
	],
	as2: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(550%/700%)",
		proc: ChainPanelsAttack(0, 5.5, 7.0, 3),
	},
	ss2: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵単体へ水属性のダメージ(300%×人数)",
		turn: 13,
		proc: [ss_damage_s(ss_consume_all_cond(3.0, 0.50), [1], 1)],
	},
	Lawake: [
		Spec_statusup(0, 200, [1, ]),
	],
}