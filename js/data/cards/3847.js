{
	name: "遠き夢の幻 エリカ・オイリン",
	cardno: 3847,
	imageno: 5457,
	hp: 2684,
	atk: 2477,
	cost: 47,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(1),
		Statusup(0, 200),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Statusup(200, 0),
		Statusup(0, 200),
		Statusup(200, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 100, [9, ]),
		Awake_noeffect("経験値取得量アップ", 1),
	],
	as1: {
		desc: "<種族数攻撃>術士の仲間の数だけダメージアップ/100+40％×種族数",
		proc: ChainDeckSpecsAttack(0.4, [9], 0),
	},
	ss1: {
		desc: "<割合削り>敵単体のHPを20％減少させる",
		turn: 8,
		proc: [ss_ratiodamage_s(0.20)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族数攻撃>術士の仲間の数だけダメージアップ/100+60％×種族数",
		proc: ChainDeckSpecsAttack(0.6, [9], 0)
	},
	ss2: {
		desc: "<割合削り>敵単体のHPを25％減少させる",
		turn: 10,
		proc: [ss_ratiodamage_s(0.25)],
	},
}