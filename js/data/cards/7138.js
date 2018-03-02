{
	name: "或る魔王 ミカエラ・セラフィム(L2)",
	cardno: 7138,
	imageno: 6876,
	hp: 2155,
	atk: 3993,
	cost: 51,
	attr: [0,4],
	species: [3],
	islegend: true,
	ape: "ロストエデンⅠ",
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(450%)",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<効果解除>敵全体のカウンターを解除する",
		turn: 4,
		proc: [ss_break_attackcounter("all")],
	},
	awakes: [
		Fastskill(2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Statusup(200,0),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,0,0,0,1,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,0,0,0,1,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Spec_statusup(0,200, [2,3,]),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでMAXHP20%を使い、ダメージアップ(800%)",
		proc: ChainAttack_as_consume_own(8.0, 5, 0.2),
	},
	ss2: {
		desc: "<効果解除大魔術>スキル反射を無視し、敵全体のカウンターを解除し、火属性のダメージ。HP20%以下でさらにスキル反射を解除し、ダメージアップ(300%/900%)",
		turn: 7,
		proc: [
			ss_damage_all(ss_hp_less(0.2, 9, 3), [0]),
			ss_break_attackcounter("all"),
			ss_hp_less_skill(0.2, ss_break_skillcounter("all")),
			ss_ignore_skillcounter()
		],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}