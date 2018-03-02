{
	name: "討龍の輝神剣 ゾディアーク",
	cardno: 4014,
	imageno: 5721,
	hp: 2954,
	atk: 2561,
	cost: 52,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Statusup(0, 200),
		Statusup(200, 0),
		Statusup(200, 0),
		Costdown(2),
		Costdown(2),
		Fastskill(3),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<分散攻撃>3チェインで敵全体へ分散攻撃/350％÷対象数",
		proc: ChainVarianceAttack(3.5, 3),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水&雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<分散攻撃>3チェインで敵全体へ分散攻撃/450％÷対象数",
		proc: ChainVarianceAttack(4.5, 3),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水&雷属性化し、攻撃力アップの効果を付与(+20％)",
		turn: 8,
		proc: [ss_panel_change([0,1,1,0,0]), panel_attackup(0.20)],
	},
}