{
	name: "光を求める歌姫 初音ミク",
	cardno: 4962,
	imageno: 6697,
	hp: 2243,
	atk: 2221,
	cost: 27,
	attr: [2, 3],
	species: [8],
	disable: true,
	awakes: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Fastskill(2),
		Attr_relief([0, 1, 0, 0, 0, ], 20),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
	],
	as1: {
		desc: "<攻撃強化>3チェインで雷属性の味方の攻撃力をアップ/+40％",
		proc: ChainEnhance(0.40, [0,0,1,0,0], 3),
	},
	ss1: {
		desc: "<状態異常無効>1ターン敵の状態異常攻撃を無効化する",
		turn: 5,
		proc: [ss_absattack_disable(1)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 400),
	],
	as2: {
		desc: "<攻撃強化>3チェインで雷属性の味方の攻撃力をアップ/+60％",
		proc: ChainEnhance(0.60, [0,0,1,0,0], 3),
	},
	ss2: {
		desc: "<状態異常無効>2ターン敵の状態異常攻撃を無効化する",
		turn: 7,
		proc: [ss_absattack_disable(2)],
	},
}