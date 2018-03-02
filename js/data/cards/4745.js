{
	name: "乱れ咲きの銀吹雪 ツバキ&ハヅキ",
	cardno: 4745,
	imageno: 6581,
	hp: 2135,
	atk: 3242,
	cost: 42,
	attr: [1, 2],
	species: [8],
	disable: true,
	awakes: [
		Costdown(2),
		Fastskill(1),
		Statusup(200, 0),
		Awake_noeffect("経験値取得量アップ", 1),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Fastskill(2),
		Statusup(0, 100),
		Spec_statusup(0, 200, [8, ]),
		Spec_statusup(200, 0, [8, ]),
	],
	as1: {
		desc: "<属性特効連撃>3チェインで火属性の敵単体へ特効5連撃/計525％",
		proc: ChainDualAttrAttack(5.25, 3, 5, [1,0,0,0,0])
	},
	ss1: {
		desc: "<ダメージ強化>2ターン自分の攻撃力をアップ(+350％)",
		turn: 6,
		proc: [ss_enhance_own(3.5, 2)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効連撃>3チェインで火属性の敵単体へ特効5連撃/計625％",
		proc: ChainDualAttrAttack(6.25, 3, 5, [1,0,0,0,0])
	},
	ss2: {
		desc: "<ダメージ強化>2ターン自分の攻撃力をアップ(+500％)",
		turn: 8,
		proc: [ss_enhance_own(5.0, 2)],
	},
}