{
	name: "悲劇の螺旋 サッド・アルドベリク",
	cardno: 5159,
	imageno: 6902,
	hp: 2421,
	atk: 2873,
	cost: 46,
	attr: [2, 4],
	species: [2],
	awakes: [
		Panel_boost([0, 0, 1, 0, 0], 1),
		Fastskill(1),
		NEFTJOD(30),
		Statusup(200, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0]),
		Statusup(0, 200),
		Spec_statusup(0, 200, [2]),
		Fastskill(2),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/400％",
		proc: ChainAttack(4, 5)
	},
	ss1: {
		desc: "<特効大魔術>味方のMAXHP50%を使い、敵全体へ雷属性のダメージ(200%)、さらに水属性の敵には特効ダメージ(500%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0, 1, 0, 0, 0], 5.0, 2.0), [2]), ss_consume_all(0.5)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 700),
		Statusup(300, 0),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/500％",
		proc: ChainAttack(5, 5)
	},
	ss2: {
		desc: "<特効大魔術>味方のMAXHP50%を使い、敵全体へ雷属性のダメージ(200%)、さらに水属性の敵には特効ダメージ(900%)",
		turn: 9,
		proc: [ss_damage_all(special_attr([0, 1, 0, 0, 0], 9.0, 2.0), [2]), ss_consume_all(0.5)]
	},
}