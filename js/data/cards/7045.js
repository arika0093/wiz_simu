{
	name: "倫理なき天才 レベッカ・アーレント",
	cardno: 7045,
	imageno: 9042,
	hp: 5709,
	atk: 2321,
	cost: 50,
	attr: [2,-1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "ドルキマスⅡ",
	as1: {
		desc: "<回復>味方全体のHPを回復(14%)",
		proc: Heal(0.14, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<鉄壁・極>3ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
		turn: 7,
		proc: [ss_impregnable_all(3)],
	},
	awakes: [
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Fastskill(3),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		NEFTJOD(30),
		Awake_noeffect("ゴールド取得量アップ",1),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Spec_statusup(200,0, [8,]),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Spec_statusup(0,200, [8,]),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(17%)",
		proc: Heal(0.17, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<鉄壁・極>3ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
		turn: 7,
		proc: [ss_impregnable_all(3)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
}