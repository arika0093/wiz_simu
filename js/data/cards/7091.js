{
	name: "勝利を支える翼 べティナ・ロロフ",
	cardno: 7091,
	imageno: 9097,
	hp: 2438,
	atk: 3737,
	cost: 38,
	attr: [2,-1],
	species: [8],
	islegend: false,
	ape: "大魔道杯 in ドルキマス",
	is_dist: true,
	as1: {
		desc: "<属性特効連撃>HP80%以上で水属性の敵単体へ特効5連撃(475%)",
		proc: [add_cond(ChainDualAttrAttack(4.75, 0, 5, [0,1,0,0,0]), when_hp_more(0.8))],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Attr_relief([0,1,0,0,0,],10),
		NEFTJOD(30),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Spec_statusup(0,200, [8,]),
	],
}