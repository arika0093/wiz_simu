{
	name: "真・猫族勇者 ルディ・レッドソル",
	cardno: 3901,
	imageno: 5581,
	hp: 2645,
	atk: 2627,
	cost: 43,
	attr: [0, -1],
	species: [5],
	awakes: [
		Attr_relief([0, 0, 1, 0, 0], 10),
		Spec_statusup(200, 0, [5]),
		Fastskill(1),
		Spec_statusup(0, 200, [5]),
		Attr_relief([0, 1, 0, 0, 0], 10),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(0, 200, [5]),
		Fastskill(2),
		Spec_statusup(200, 0, [5]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/350％",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<ガード>2ターン水・雷属性のダメージを50％軽減する",
		turn: 7,
		proc: [ss_attr_guard([0,1,1,0,0], 0.5, 2)]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Statusup(0, 400),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 3),
	},
	ss2: {
		desc: "<ガード>2ターン水・雷属性のダメージを75％軽減する",
		turn: 9,
		proc: [ss_attr_guard([0,1,1,0,0], 0.75, 2)]
	},
}