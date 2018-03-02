{
	name: "優しき神々の冷酷 アウラ・アマタ",
	cardno: 4644,
	imageno: 6109,
	hp: 3162,
	atk: 2839,
	cost: 46,
	attr: [1, -1],
	species: [3],
	disable: true,
	awakes: [
		Costdown(2),
		Fastskill(1),
		Statusup(200, 0),
		Fastskill(1),
		Statusup(0, 200),
		Costdown(2),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Spec_statusup(0, 200, [3, ]),
	],
	as1: {
		desc: "<攻撃強化>3チェインで水属性の味方の攻撃力をアップ/+50％",
		proc: ChainEnhance(0.50, [0,1,0,0,0], 3),
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25％軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<攻撃強化>3チェインで水属性の味方の攻撃力をアップ/+70％",
		proc: ChainEnhance(0.70, [0,1,0,0,0], 3),
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50％軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)]
	},
}