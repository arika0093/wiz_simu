{
	name: "恋☆メガトン エミリア・トドロキ",
	cardno: 4468,
	imageno: 6162,
	hp: 3064,
	atk: 2928,
	cost: 43,
	attr: [0, -1],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		NEFTJOD(30),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		NEFTJOD(30),
		Fastskill(2),
		Spec_statusup(200, 0, [9]),
		Spec_statusup(0, 200, [9]),
	],
	as1: {
		desc: "<種族攻撃強化>5チェインで火属性の味方の攻撃力をアップ、術士はさらにアップ(5チェイン：+40％ / 5チェイン+種族：+70％)",
		proc: multi_as(ChainEnhance(0.4, [1,0,0,0,0], 5), ChainSpecEnhance(0.7, [1,0,0,0,0], [9], 5)),
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25％軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		NEFTJOD(30),
		Statusup(300, 0),
	],
	as2: {
		desc: "<種族攻撃強化>5チェインで火属性の味方の攻撃力をアップ、術士はさらにアップ(5チェイン：+70％ / 5チェイン+種族：+100％)",
		proc: multi_as(ChainEnhance(0.7, [1,0,0,0,0], 5), ChainSpecEnhance(1.0, [1,0,0,0,0], [9], 5)),
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50％軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)]
	},
}