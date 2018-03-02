{
	name: "今日も大漁！ シャーリー・コルト",
	cardno: 4460,
	imageno: 6154,
	hp: 2497,
	atk: 3302,
	cost: 44,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Fastskill(1),
		Spec_statusup(200, 0, [9, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ、HP80％以上でさらにダメージアップ(通常：300％ / HP80％以上：450％)",
		proc: [ChainAttrAttack(3.0, 0, [0,1,0,0,0]), add_cond(ChainAttrAttack(4.5, 0, [0,1,0,0,0]), when_hp_more(0.80))],
	},
	ss1: {
		desc: "<シャッフル>ジャンルパネルをシャッフル",
		turn: 3,
		proc: [ss_panel_shuffle()]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ、HP80％以上でさらにダメージアップ(通常：400％ / HP80％以上：550％)",
		proc: [ChainAttrAttack(4.0, 0, [0,1,0,0,0]), add_cond(ChainAttrAttack(5.5, 0, [0,1,0,0,0]), when_hp_more(0.80))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(+60％)",
		turn: 7,
		proc: [panel_attackup(0.60)],
	},
}