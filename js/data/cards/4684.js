{
	name: "鎮まぬ魂の救い手 アカリ・ヨトバリ",
	cardno: 4684,
	imageno: 6443,
	hp: 2916,
	atk: 2892,
	cost: 42,
	attr: [0, -1],
	species: [9],
	awakes: [
		Panel_boost([1,0,0,0,0], 2),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(1),
		Costdown(2),
		Attr_relief([0, 1, 0, 0, 0], 10),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(2),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(200, 0, [9]),
		Spec_statusup(0, 200, [9]),
	],
	as1: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+30％ / 火+種族：+45％)",
		proc: multi_as(ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.45, [1,0,0,0,0], [9], 0)),
	},
	ss1: {
		desc: "<ダメージ強化>2ターン火属性の味方の攻撃力をアップ(+40％)",
		turn: 6,
		proc: [ss_enhance_all(0.4, 2, [1,0,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+30％ / 火+種族：+65％)",
		proc: multi_as(ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.65, [1,0,0,0,0], [9], 0)),
	},
	ss2: {
		desc: "<ダメージ強化>4ターン火属性の味方の攻撃力をアップ(+60％)",
		turn: 9,
		proc: [ss_enhance_all(0.6, 2, [1,0,0,0,0])]
	},
}