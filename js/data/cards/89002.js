{
	name: "天上岬の工房主 フェルチ・リリー",
	cardno: 89002,
	imageno: 7268,
	hp: 4501,
	atk: 2256,
	cost: 41,
	attr: [0,1],
	species: [9],
	islegend: true,
	ape: "天上岬Ⅱ",
	alias: ["ちっぱい"],
	as1: {
		desc: "<回復>味方全体のHPを回復(14%)",
		proc: Heal(0.14, [1,1,1,1,1]),
	},
	ss1: {
		desc: "<チェインガード>3ターンの間チェインを保護する",
		turn: 5,
		proc: [ss_chain_protect(3)],
	},
	awakes: [
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Fastskill(2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(17%)",
		proc: Heal(0.17, [1,1,1,1,1]),
	},
	ss2: {
		desc: "<チェインガード>6ターンの間チェインを保護する",
		turn: 8,
		proc: [ss_chain_protect(6)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [1,1,0,0,0,]),
	],
}