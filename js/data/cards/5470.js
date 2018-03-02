{
	// -------------------------
	// 追加: L実装(2016/01)
	// -------------------------
	name: "時と薫りを紡ぐ蝶姫 ファム・リリー",
	cardno: 5470,
	imageno: 7327,
	hp: 2509,
	atk: 4890,
	cost: 45,
	attr: [2, -1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ、リーダー時さらにアップ(350%/450%)",
		proc: [ChainAttrAttack(3.5, 0, [0, 1, 0, 0, 0]), add_cond(ChainAttrAttack(4.5, 0, [0, 1, 0, 0, 0]), when_leader())],
	},
	ss1: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)],
	},
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(2),
		Fastskill(1),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
		Panel_boost([0, 0, 1, 0, 0, ], 1),
		NEFTJOD(30),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0, ], 2),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ、リーダー時さらにアップ(450%/550%)",
		proc: [ChainAttrAttack(4.5, 0, [0, 1, 0, 0, 0]), add_cond(ChainAttrAttack(5.5, 0, [0, 1, 0, 0, 0]), when_leader())],
	},
	ss2: {
		desc: "<遅延大魔術>攻撃ターンを3遅らせ、敵全体へ雷属性のダメージ(180%)",
		turn: 15,
		proc: [ss_damage_all(1.8, [2]), ss_delay_all(3)],
	},
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
		Statusup(500, 0),
	],
}