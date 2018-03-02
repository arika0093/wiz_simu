{
	name: "誘う幻想顕界 シエオラ&プラーミャ",
	cardno: 9478,
	imageno: 11730,
	hp: 2845,
	atk: 4053,
	cost: 56,
	attr: [0,3],
	species: [9],
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<連撃>味方のMAXHP10%を使い、敵単体を3回連続攻撃(600%)",
		proc: add_cond(ChainDualAttack(6.0, 0, 3), as_consume_all(0.10)),
	},
	ss1: {
		desc: "<複属性回復>火属性の味方のHPを回復(40%)、複属性が光属性だとさらに回復(40%)",
		turn: 3,
		proc: [ss_heal_subattr([1,0,0,0,0], 0.4, [0,0,0,1,0], 0.8)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,1,0,]),
		Abstate_invalid("ss_sealed"),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<連撃>味方のMAXHP10%を使い、敵単体を3回連続攻撃(700%)",
		proc: add_cond(ChainDualAttack(7.0, 0, 3), as_consume_all(0.10)),
	},
	ss2: {
		desc: "<複属性回復>チェインプラス2の効果、さらに火属性の味方のHPを回復(40%)、複属性が光属性だとさらに回復(40%)",
		turn: 6,
		proc: [ss_addchain(2), ss_heal_subattr([1,0,0,0,0], 0.4, [0,0,0,1,0], 0.8)],
	},
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}