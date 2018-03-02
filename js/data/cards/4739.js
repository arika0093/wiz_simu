{
	name: "恋と炎の大爆裂 レナ・イラプション",
	cardno: 4739,
	imageno: 6578,
	hp: 3024,
	atk: 3476,
	cost: 47,
	attr: [0, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		NEFTJOD(30),
		Attr_relief([1,0,0,0,0], 10),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 2),
		Statusup(0, 200),
		Fastskill(2),
		Spec_statusup(200, 0, [9]),
		Spec_statusup(0, 200, [9]),
	],
	as1: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+30％ / 火+種族：+45％)",
		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.45, [1,0,0,0,0], [9], 0)]
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵全体へダメージ(260％)",
		turn: 7,
		proc: [ss_damage_all(2.6, [0]), ss_consume_own(0.5)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+40％ / 火+種族：+65％)",
		proc: [ChainEnhance(0.4, [1,0,0,0,0], 0), ChainSpecEnhance(0.65, [1,0,0,0,0], [9], 0)]
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵全体へダメージ(330％)",
		turn: 9,
		proc: [ss_damage_all(3.3, [0]), ss_consume_own(0.5)],
	},
}