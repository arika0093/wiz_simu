{
	name: "緋炎凛閃 ガーネット・フレイム",
	cardno: 90023,
	imageno: 7460,
	hp: 2587,
	atk: 4876,
	cost: 42,
	attr: [0,-1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効3連続ダメージ、HP80%以上でさらにダメージアップ(300%/450%)",
		proc: [ChainDualAttrAttack(3.0, 0, 3, [0,0,1,0,0]), add_cond(ChainDualAttrAttack(4.5, 0, 3, [0,0,1,0,0]), when_hp_more(0.80))],
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(100%/300%)",
		turn: 4,
		proc: [ss_damage_all(special_attr([0,0,1,0,0], 3.0, 1.0), [0])],
	},
	awakes: [
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],2),
		Statusup(0,200),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Fastskill(2),
		Spec_statusup(0,300, [8,]),
		Attr_relief([0,0,1,0,0,],10),
	],
	as2: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効3連続ダメージ、HP80%以上でさらにダメージアップ(400%/550%)",
		proc: [ChainDualAttrAttack(4.0, 0, 3, [0,0,1,0,0]), add_cond(ChainDualAttrAttack(5.5, 0, 3, [0,0,1,0,0]), when_hp_more(0.80))],
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(200%/500%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0,0,1,0,0], 5.0, 2.0), [0])],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}