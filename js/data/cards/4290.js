{
	name: "幽遠の星海を渡る ソラナ・カルナ",
	cardno: 4290,
	imageno: 5883,
	hp: 2701,
	atk: 2556,
	cost: 46,
	attr: [1, -1],
	species: [9],
	alias: ["ちっぱい"],
	awakes: [
		Costdown(2),
		Attr_relief([0, 0, 1, 0, 0, ], 10),
		Fastskill(1),
		Costdown(2),
		Statusup(0, 100),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Spec_statusup(0, 200, [9, ]),
		Spec_statusup(200, 0, [9, ]),
	],
	as1: {
		desc: "<属性の加護>デッキの属性の数だけ攻撃力アップ(1属性：250％ / 2属性：400％ / 3属性：550％)",
		proc: ChainDeckAttrsAttack(2.5, 4.0, 5.5, 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<属性の加護>デッキの属性の数だけ攻撃力アップ(1属性：300％ / 2属性：500％ / 3属性：700％)",
		proc: ChainDeckAttrsAttack(3.0, 5.0, 7.0, 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、回復の効果を付与(5％)",
		turn: 8,
		proc: [ss_panel_change([1,1,1,0,0]), panel_healally(0.05)],
	},
}