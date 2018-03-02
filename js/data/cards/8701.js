{
	name: "時海の冒険者 ディー・リフリス",
	cardno: 8701,
	imageno: 10877,
	hp: 5143,
	atk: 2345,
	cost: 54,
	attr: [1,0],
	species: [9],
	islegend: true,
	ape: "エタクロⅠ",
	as1: {
		desc: "<回復>火・水属性の味方を回復(14%)",
		proc: Heal(0.14, [1,1,0,0,0], 0),
	},
	as2: {
		desc: "<回復>火・水属性の味方を回復(17%)",
		proc: Heal(0.17, [1,1,0,0,0], 0),
	},
	ss1: {
		desc: "<ガード>2ターン全属性のダメージを50％軽減する",
		turn: 6,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 2)],
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50％軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)],
	},
	awakes: [
		Costdown(20),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200,[0,1,0,0,0,]),
		Attr_statusup(200,0,[0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[1,0,0,0,0,]),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[1,0,0,0,0,]),
		Heal_afterbattle(10),
	],
	Lawake: [
		Statusup(500,0),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,200,[1,0,0,0,0,]),
	],
}