{
	name: "不敵に笑うゼロ 安室透",
	cardno: 90007,
	imageno: 6959,
	hp: 2832,
	atk: 2503,
	cost: 46,
	attr: [0,1],
	species: [8],
	islegend: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(450%)",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火・水属性のダメージ、さらに味方全体のHPを回復する(120%/15%)",
		turn: 5,
		proc: [ss_damage_all(1.2, [0,1]), ss_heal(0.15)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Statusup(0,200),
		Statusup(200,0),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		NEFTJOD(30),
		Fastskill(2),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(550%)",
		proc: ChainAttack(5.5, 5),
	},
	ss2: {
		desc: "<大魔術>敵全体へ火・水属性のダメージ、さらに味方全体のHPを回復する(180%/25%)",
		turn: 8,
		proc: [ss_damage_all(1.8, [0,1]), ss_heal(0.25)],
	},
	Lawake: [
		Statusup(400,0),
		Attr_statusup(0,100, [1,1,0,0,0,]),
	],
}