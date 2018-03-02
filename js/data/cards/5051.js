{
	name: "AbCd-Θ:《万象焦尽天 ラヒルメ》",
	cardno: 5051,
	imageno: 6784,
	hp: 2326,
	atk: 3080,
	cost: 60,
	attr: [0, 4],
	species: [11],
	awakes: [
		Costdown(4),
		Fastskill(1),
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		NEFTJOD(30),
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		Fastskill(2),
		Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
		Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
	],
	as1: {
		desc: "<種族数攻撃>AbCdの仲間の数だけダメージアップ/+60％×種族数(1体：160%/2体：220%/3体：280%/4体：340%/5体：400%)",
		proc: ChainDeckSpecsAttack(0.6, [11], 1),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・闇属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,1])]
	},
	islegend: true,
	is_dist: true,
	disable: true,
	Lawake: [
		NEFTJOD(30),
		Statusup(0, 500),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族数攻撃>AbCdの仲間の数だけダメージアップ/+80％×種族数(1体：180%/2体：260%/3体：340%/4体：420%/5体：500%)",
		proc: ChainDeckSpecsAttack(0.8, [11], 1),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・闇属性化し、攻撃力アップかダメージ25％軽減の効果を付与",
		turn: 7,
		proc: [ss_panel_change([1,0,0,0,1]), panel_attackup(0.4), panel_attr_guard([1,1,1,1,1], 0.25)],
	},
}