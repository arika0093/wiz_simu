{
	// -------------------------
	// 追加: 八百万神秘譚Ⅱ
	// -------------------------
	name: "牡丹微睡む夕月夜 ミコト・ウタヨミ",
	cardno: 5061,
	imageno: 6801,
	hp: 2241,
	atk: 3884,
	cost: 46,
	islegend: true,
	attr: [2, 1],
	species: [1],
	disable: true,
	awakes: [
		Fastskill(1),
		Awake_noeffect("経験値取得量アップ", 1),
		Attr_statusup(0, 200, [0, 1, 1, 0, 0]),
		Panel_boost([0, 0, 1, 0, 0], 1),
		NEFTJOD(30),
		Spec_statusup(0, 200, [1]),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Attr_statusup(200, 0, [0, 1, 1, 0, 0]),
		Fastskill(2),
		Spec_statusup(200, 0, [1]),
	],
	Lawake: [
		Statusup(300, 0),
		Statusup(0, 700),
		NEFTJOD(30),
	],
	as1: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃(450%)",
		proc: ChainDualAttack(4.5, 5, 3)
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ雷属性のダメージ(200%)、さらに水属性の敵には特効ダメージ(500%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0, 1, 0, 0, 0], 5.0, 2.0), [2])]
	},
	as2: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃(550%)",
		proc: ChainDualAttack(5.5, 5, 3)
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ雷属性のダメージ(200%)、さらに水属性の敵には特効ダメージ(900%)",
		turn: 9,
		proc: [ss_damage_all(special_attr([0, 1, 0, 0, 0], 9.0, 2.0), [2])]
	},
}