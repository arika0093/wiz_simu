{
	name: "芳しき天上の姉妹 ファム&フェルチ",
	cardno: 4746,
	imageno: 6582,
	hp: 3819,
	atk: 2643,
	cost: 44,
	attr: [2, -1],
	species: [9],
	alias: ["ちっぱい"],
	awakes: [
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Fastskill(3),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Awake_noeffect("ゴールド取得量アップ", 1),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Spec_statusup(200, 0, [9, ]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Spec_statusup(0, 200, [9, ]),
	],
	as1: {
		desc: "<攻撃強化>3チェインで雷属性の味方の攻撃力をアップ/+55％",
		proc: ChainEnhance(0.55, [0,0,1,0,0], 3),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<攻撃強化>3チェインで雷属性の味方の攻撃力をアップ/+75％",
		proc: ChainEnhance(0.75, [0,0,1,0,0], 3),
	},
	ss2: {
		desc: "<遅延>攻撃ターンを3遅らせ、20チェインで更に1遅らせる",
		turn: 13,
		proc: [ss_delay_all(ss_chain_cond(20, 4, 3))]
	},
}