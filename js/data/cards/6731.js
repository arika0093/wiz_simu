{
	name: "震天の雷神竜 タケミカヅチ",
	cardno: 6731,
	imageno: 8685,
	hp: 2587,
	atk: 4232,
	cost: 44,
	attr: [2,-1],
	species: [0],
	islegend: true,
	as1: {
		desc: "<チェイン攻撃>8チェインでダメージアップ(600%)",
		proc: ChainAttack(6.0, 8),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵単体へ雷属性のダメージ(700%)",
		turn: 9,
		proc: [ss_damage_s(7.0, [2], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(200,0),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Spec_statusup(0,300, [0,]),
		Fastskill(1),
		Costdown(2),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
	],
	as2: {
		desc: "<チェイン攻撃>8チェインでダメージアップ(700%)",
		proc: ChainAttack(7.0, 8),
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵単体へ雷属性のダメージ(1000%)",
		turn: 12,
		proc: [ss_damage_s(10.0, [2], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
	],
}