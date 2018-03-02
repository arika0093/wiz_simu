{
	name: "聖夜航路の女神様 シール・サンテ",
	cardno: 5203,
	imageno: 7085,
	hp: 2456,
	atk: 4754,
	cost: 49,
	attr: [1, -1],
	species: [8],
	disable: true,
	awakes: [
		NEFTJOD(30),
		Panel_boost([0, 1, 0, 0, 0], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0]),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Attr_statusup(200, 0, [0, 1, 0, 0, 0]),
		Attr_statusup(0, 200, [0, 1, 0, 0, 0]),
		Fastskill(2),
	],
	as1: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ(525%)",
		proc: [ChainAttrAttack(5.25, 3, [1,0,0,0,0])]
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ(200%)、さらに火属性の敵には特効ダメージ(500%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([1, 0, 0, 0, 0], 5.0, 2.0), [1])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 800),
		Statusup(200, 0),
	],
	as2: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ(625%)",
		proc: [ChainAttrAttack(6.25, 3, [1, 0, 0, 0, 0])]
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ水属性のダメージ(200%)、さらに火属性の敵には特効ダメージ(900%)",
		turn: 9,
		proc: [ss_damage_all(special_attr([1, 0, 0, 0, 0], 9.0, 2.0), [1])]
	},
}