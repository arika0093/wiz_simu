{
	name: "想いを告げるロンドンの夜 工藤新一",
	cardno: 5240,
	imageno: 6935,
	hp: 2001,
	atk: 4001,
	cost: 45,
	attr: [1, 2],
	species: [8],
	ape: "コラボ(コナン)",
	awakes: [
		Attr_statusup(100, 0, [0, 1, 1, 0, 0]),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Attr_statusup(200, 0, [0, 1, 1, 0, 0]),
		Fastskill(1),
		Attr_statusup(0, 200, [0, 1, 1, 0, 0]),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0], 2),
	],
	as1: {
		desc: "<チェイン攻撃>7チェインでダメージアップ(550%)",
		proc: ChainAttack(5.5, 7)
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<チェイン攻撃>7チェインでダメージアップ(650%)",
		proc: ChainAttack(6.5, 7)
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・雷属性化し、攻撃力アップの効果を付与(50%)",
		turn: 6,
		proc: [ss_panel_change([0,1,1,0,0]), panel_attackup(0.5)]
	},
}