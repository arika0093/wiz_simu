{
	name: "碧天の翼姫 グレイス・シグラー",
	cardno: 6172,
	imageno: 7992,
	hp: 5703,
	atk: 2367,
	cost: 47,
	attr: [0,-1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "GW2016",
	as1: {
		desc: "<攻撃強化・回復>火属性の味方を回復し(7%)、攻撃力もアップ(30%)",
		proc: [Heal(0.07, [1,0,0,0,0], 0), ChainEnhance(0.3, [1,0,0,0,0], 0)],
	},
	ss1: {
		desc: "<精霊強化>4ターンの間、味方の攻撃力をアップし(100%)、ダメージを軽減(10%)◆発動中行動不可",
		turn: 6,
		proc: [ss_reinforcement_all(4, [
			ss_attr_guard([1, 1, 1, 1, 1], 0.1, 1, "RF"),
			ss_enhance_all(1, 1, [1, 1, 1, 1, 1], "RF")
		])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Statusup(0,200),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Heal_afterbattle(10),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Awake_noeffect("心眼", 1),
	],
	as2: {
		desc: "<攻撃強化・回復>火属性の味方を回復し(7%)、攻撃力もアップ(60%)",
		proc: [Heal(0.07, [1,0,0,0,0], 0), ChainEnhance(0.6, [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<精霊強化>4ターンの間、味方の攻撃力をアップし(100%)、ダメージを軽減(10%)。5チェインを消費しさらに効果値アップ(200%、20%)◆発動中行動不可",
		turn: 9,
		proc: [ss_chain_cost_skill(5,
			ss_reinforcement_all(4, [
				ss_attr_guard([1, 1, 1, 1, 1], 0.2, 4, "RF"),
				ss_enhance_all(2.0, 4, [1, 1, 1, 1, 1], "RF")
			]),
			ss_reinforcement_all(4, [
				ss_attr_guard([1, 1, 1, 1, 1], 0.1, 4, "RF"),
				ss_enhance_all(1.0, 4, [1, 1, 1, 1, 1], "RF")
			])
		 )],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(500,0),
	],
}