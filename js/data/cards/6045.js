{
	name: "煌眼は勝利へ導く リヴェータ・イレ",
	cardno: 6045,
	imageno: 7872,
	hp: 4356,
	atk: 4345,
	cost: 49,
	attr: [0, -1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "覇眼戦線Ⅱ",
	as1: {
		desc: "<チェイン攻撃・攻撃強化>火属性の味方の攻撃力をアップし(30%)、6チェインでダメージアップ(400%)",
		proc: [ChainEnhance(0.30, [1, 0, 0, 0, 0], 0), ChainAttack(4.0, 6)],
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ、5チェイン消費しさらに特効ダメージ(200%/900%/1200%)",
		turn: 9,
		proc: [ss_chain_cost_skill(5, ss_damage_all(special_attr([0, 0, 1, 0, 0], 12.0, 2.0), [0]), ss_damage_all(special_attr([0, 0, 1, 0, 0], 9.0, 2.0), [0]))],
	},
	awakes: [
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Statusup(0, 200),
		Fastskill(1),
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		NEFTJOD(30),
		Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
		Fastskill(2),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
		Awake_noeffect("経験値取得量アップ", 1),
	],
	as2: {
		desc: "<チェイン攻撃・攻撃強化>火属性の味方の攻撃力をアップし(30%)、6チェインでダメージアップ(500%)",
		proc: [ChainEnhance(0.30, [1, 0, 0, 0, 0], 0), ChainAttack(5.0, 6)],
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ、5チェイン消費しさらに特効ダメージ(200%/1200%/1700%)",
		turn: 12,
		proc: [ss_chain_cost_skill(5, ss_damage_all(special_attr([0,0,1,0,0], 17.0, 2.0), [0]), ss_damage_all(special_attr([0,0,1,0,0], 12.0, 2.0), [0]))],
	},
	Lawake: [
		Attr_statusup(0, 200, [1, 1, 1, 1, 1, ]),
		// L時 HP50%回復
		Awake_SpecialSkill("ss_heal", 0.5),
	],
}