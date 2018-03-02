{
	// -------------------------
	// 追加: 天井岬1
	// -------------------------
	name: "小麦のプリンス ブレド・クラフツ",
	cardno: 5494,
	imageno: 7332,
	hp: 3644,
	atk: 3421,
	cost: 44,
	attr: [0, -1],
	species: [8],
	islegend: true,
	ape: "天上岬Ⅰ",
	as1: {
		desc: "<回復>火属性の味方のHPを回復(13%)",
		proc: Heal(0.13, [1, 0, 0, 0, 0]),
	},
	ss1: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(20%)",
		turn: 8,
		proc: [ss_regenerate(0.2, 5)],
	},
	awakes: [
		Panel_boost([1, 0, 0, 0, 0, ], 3),
		Fastskill(2),
		Heal_afterbattle(10),
		NEFTJOD(30),
		Statusup(0, 200),
		Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [8, ]),
		Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃強化・回復>火属性の味方のHPを回復(16%)、さらに火属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.16, [1, 0, 0, 0, 0]), ChainEnhance(0.3, [1, 0, 0, 0, 0], 0)],
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する、HP50%以下でさらに回復(20%/30%)",
		turn: 10,
		proc: [ss_regenerate(ss_hp_less(0.5, 0.3, 0.2), 5)],
	},
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
	],
}