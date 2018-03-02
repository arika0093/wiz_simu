{
	name: "☆夜明けの巫女☆ キシャラ・オロル",
	cardno: 5449,
	imageno: 7103,
	hp: 2208,
	atk: 3801,
	cost: 45,
	attr: [2, 3],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0], 2),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0]),
		Fastskill(1),
		NEFTJOD(30),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Attr_relief([1, 0, 0, 0, 0, ], 20),
		Attr_statusup(200, 0, [0, 0, 1, 0, 0]),
		Fastskill(2),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0]),
	],
	as1: {
		desc: "<属性特効>4チェインで水属性の敵単体へ特効ダメージ/600％",
		proc: ChainAttrAttack(6, 4, [0,1,0,0,0])
	},
	ss1: {
		desc: "<多弾魔術>敵単体へ雷・光属性の5回連続ダメージ(180%)",
		turn: 5,
		proc: [ss_damage_s(1.8, [2,3], 5)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効>4チェインで水属性の敵単体へ特効ダメージ/700％",
		proc: ChainAttrAttack(7, 4, [0,1,0,0,0])
	},
	ss2: {
		desc: "<多弾魔術>敵単体へ雷・光属性の5回連続ダメージ(380%)、5チェインを消費しさらにダメージアップ(760%)",
		turn: 8,
		proc: [ss_damage_s(ss_chain_cost(5, 7.6, 3.8), [2, 3], 5)]
	},
}