{
	name: "眼差しの美獣 エストラ・ディミール",
	cardno: 9458,
	imageno: 11711,
	hp: 1875,
	atk: 3034,
	cost: 40,
	attr: [0,4],
	species: [2],
	islegend: true,
	ape: "大魔道杯 in ロストエデン",
	is_dist: true,
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃(200%)、解答が早いほどさらにアップ(70%)（上限:4段階)",
		proc: add_cond(ChainDualAttack(2.0, 0, 3), as_timedep(0.7)),
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを1早める",
		turn: 5,
		proc: [ss_skillboost(1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(2),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,0,0,0,1,]),
		Fastskill(2),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃(300%)、解答が早いほどさらにアップ(70%)（上限:4段階)",
		proc: add_cond(ChainDualAttack(3.0, 0, 3), as_timedep(0.7)),
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Abstate_invalid("discharge"),
	],
}