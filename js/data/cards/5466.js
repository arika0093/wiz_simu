{
	// -------------------------
	// 追加: ウィズセレ(戦え！魔轟三鉄傑)
	// -------------------------
	name: "鬼装妖幻術師 ダムザ・イナ",
	cardno: 5466,
	imageno: 7259,
	hp: 2467,
	atk: 3299,
	cost: 46,
	attr: [0,1],
	species: [9],
	disable: true,
	islegend: true,
	as1: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(350%)",
		proc: add_cond(ChainAttack(3.5, 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(200%/500%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0, 0, 1, 0, 0], 5.0, 2.0), [0])],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		NEFTJOD(30),
		Spec_statusup(0,200, [9,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Fastskill(2),
		Spec_statusup(200,0, [9,]),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(450%)",
		proc: add_cond(ChainAttack(4.5, 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ。3チェインを消費し雷属性の敵にはさらにダメージアップ(200%/500%/900%)",
		turn: 9,
		proc: [ss_damage_all(special_attr([0, 0, 1, 0, 0], ss_chain_cost(3, 9.0, 5.0), 2.0), [0])],
	},
	Lawake: [
		Statusup(300,0),
		Statusup(0,700),
	],
}