{
	name: "真紅の降魔剣 イザーク・セラフィム",
	cardno: 3987,
	imageno: 5668,
	hp: 2339,
	atk: 2832,
	cost: 43,
	attr: [2, -1],
	species: [3],
	awakes: [
		Costdown(2),
		Statusup(0, 200),
		Fastskill(1),
		Costdown(2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0], 1),
		Fastskill(2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Spec_statusup(0, 200, [3]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/350％",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<割合削り>敵全体のHPを20％減少させる",
		turn: 9,
		proc: [ss_ratiodamage_all(0.2)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 3),
	},
	ss2: {
		desc: "<割合削り>敵全体のHPを25％減少させる",
		turn: 12,
		proc: [ss_ratiodamage_all(0.25)],
	},
}