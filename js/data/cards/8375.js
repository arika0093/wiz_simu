{
	name: "號なき混沌 トーテムキマイラ",
	cardno: 8375,
	imageno: 10558,
	hp: 5363,
	atk: 3012,
	cost: 52,
	attr: [2,-1],
	species: [1],
	islegend: true,
	ape: "喰牙RIZEⅠ",
	is_dist: true,
	as1: {
		desc: "<回復>味方全体のHPを回復(11%)、デッキに単色の精霊が多いほど、更に回復(1%)(上限:5段階)",
		proc: add_cond(Heal(0.11, [1, 1, 1, 1, 1]), as_singleattr_num(0, 0.01)),
	},
	ss1: {
		desc: "<状態異常無効>味方全体のMAXHPの50%を使い、1ターン敵の状態異常攻撃を無効化する",
		turn: 4,
		proc: [ss_absattack_disable(1), ss_consume_all(0.5)],
	},
	awakes: [
		Costdown(10),
		Fastskill(1),
		Attr_statusup(0,300, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(300,0, [0,0,1,0,0,]),
		NEFTJOD(30),
		Abstate_invalid("as_sealed"),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(14%)、デッキに単色の精霊が多いほど、更に回復(1%)(上限:5段階)",
		proc: add_cond(Heal(0.14, [1, 1, 1, 1, 1]), as_singleattr_num(0, 0.01)),
	},
	ss2: {
		desc: "<状態異常無効>味方全体のMAXHPの50%を使い、2ターン敵の状態異常攻撃を無効化する",
		turn: 6,
		proc: [ss_absattack_disable(2), ss_consume_all(0.5)],
	},
	Lawake: [
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}