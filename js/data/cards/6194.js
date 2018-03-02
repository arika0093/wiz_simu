{
	name: "終末の白き音色 ウリシラ・ファーレ",
	cardno: 6194,
	imageno: 8017,
	hp: 4578,
	atk: 2067,
	cost: 46,
	attr: [1,0],
	species: [3],
	disable: true,
	islegend: true,
	ape: "聖サタニック女学院",
	as1: {
		desc: "<複属性攻撃強化>水属性の攻撃力をアップ、複属性が火属性だとさらにアップ(30%/80%)",
		proc: ChainEnhance_SubAttr(0.3, 0.8, [0,1,0,0,0], [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復し、ダメージを軽減(20%、10%)◆発動中行動不可",
		turn: 6,
		proc: [ss_reinforcement_all(4, [
			ss_regenerate(0.2, 4, "RF"),
			ss_attr_guard([1, 1, 1, 1, 1], 0.1, 4, "RF")
		])],
	},
	awakes: [
		Statusup(200,0),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
		Heal_afterbattle(10),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<複属性攻撃強化>水属性の攻撃力をアップ、複属性が火属性だとさらにアップ(60%/110%)",
		proc: ChainEnhance_SubAttr(0.6, 1.1, [0,1,0,0,0], [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<精霊強化>4ターンの間、味方全体を徐々に回復し、ダメージを軽減(30%、10%)。5チェインを消費しさらに攻撃力アップ(50%)◆発動中行動不可",
		turn: 9,
		proc: [ss_chain_cost_skill(5,
			ss_reinforcement_all(4, [
				ss_regenerate(0.3, 1, "RF"),
				ss_attr_guard([1, 1, 1, 1, 1], 0.1, 1, "RF"),
				ss_enhance_all(0.5, 1, [1, 1, 1, 1, 1], "RF")
			]),
			ss_reinforcement_all(4, [
				ss_regenerate(0.3, 1, "RF"),
				ss_attr_guard([1, 1, 1, 1, 1], 0.1, 1, "RF")
			])
		)],
	},
	Lawake: [
		Statusup(1000,0),
	],
}