{
	name: "決意の蒼覇剣 イツキ・マスグレイヴ",
	cardno: 4445,
	imageno: 6139,
	hp: 2222,
	atk: 3288,
	cost: 40,
	attr: [1, -1],
	species: [8],
	awakes: [
		Statusup(0, 400),
		Statusup(400, 0),
		Costdown(2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Heal_afterbattle(10),
		Fastskill(2),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃、リーダー時さらにアップ(通常：計300％ / リーダー時：計350％)",
		proc: [ChainDualAttack(3.0, 3, 3), add_cond(ChainDualAttack(3.5, 3, 3), when_leader())],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,0,0,0])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃、リーダー時さらにアップ(通常：計400％ / リーダー時：計450％)",
		proc: [ChainDualAttack(4.0, 3, 3), add_cond(ChainDualAttack(4.5, 3, 3), when_leader())],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水属性化し、チェインがプラス1の効果を付与",
		turn: 7,
		proc: [ss_panel_change([0,1,0,0,0]), panel_chainplus(1)],
	},
}