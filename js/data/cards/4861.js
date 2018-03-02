{
	name: "流星滑降少女 サクヤ・クランブル",
	cardno: 4861,
	imageno: 6596,
	hp: 2058,
	atk: 3420,
	cost: 43,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Statusup(0, 400),
		Costdown(2),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
	],
	as1: {
		desc: "<属性特効連撃>火属性の敵単体へ特効3連撃/計400％",
		proc: ChainDualAttrAttack(4, 0, 3, [1,0,0,0,0])
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 700),
		Statusup(300, 0),
	],
	as2: {
		desc: "<属性特効連撃>火属性の敵単体へ特効3連撃/計500％",
		proc: ChainDualAttrAttack(5, 0, 3, [1,0,0,0,0])
	},
	ss2: {
		desc: "<大魔術>チェインがプラス1の効果、さらに敵全体へ水属性のダメージ(150％)",
		turn: 7,
		proc: [ss_addchain(1), ss_damage_all(1.8, [1])]
	},
}