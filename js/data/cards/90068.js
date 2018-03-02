{
	name: "迎春 鬼狩りキュウマ",
	cardno: 90068,
	imageno: 9774,
	hp: 2245,
	atk: 4335,
	cost: 55,
	attr: [1,4],
	species: [8],
	islegend: true,
	ape: "謹賀新年2017",
	as1: {
		desc: "<攻撃>味方のMAXHP10%を使い、敵単体へのダメージアップ(600%)",
		proc: add_cond(ChainAttack(6.0, 0), as_consume_all(0.1)),
	},
	ss1: {
		desc: "<特効大魔術>敵単体へ水属性のダメージ、さらに火・光属性の敵には特効ダメージ(400%/1200%)",
		turn: 6,
		proc: [ss_damage_s(special_attr([1,0,0,1,0], 12, 4), [1], 1)],
	},
	awakes: [
		Fastskill(1),
		NEFTJOD(30),
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Fastskill(2),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,0,0,1,]),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [0,0,0,0,1,]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ(600%)",
		proc: ChainAttack(6.0, 0),
	},
	ss2: {
		desc: "<特効大魔術>敵単体へ水属性のダメージ、さらに火・光属性の敵には特効ダメージ(400%/1900%)",
		turn: 9,
		proc: [ss_damage_s(special_attr([1,0,0,1,0], 19, 4), [1], 1)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,100, [0,0,0,0,1,]),
		Attr_relief([0,0,0,1,0,],10),
	],
}