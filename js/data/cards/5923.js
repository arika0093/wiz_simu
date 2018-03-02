{
	name: "明けの明星 ブレラ・スターン",
	cardno: 5923,
	imageno: 7795,
	hp: 2102,
	atk: 2401,
	cost: 33,
	attr: [0,4],
	species: [8],
	islegend: true,
	ape: "コラボ(マクロス)",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(300%)",
		proc: ChainAttack(3.0, 4),
	},
	ss1: {
		desc: "<カウンター>3ターンの間、スキルカウンター待機(100%)",
		turn: 8,
		proc: [ss_skillcounter(1.0, 3)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(200,0),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Spec_relief([6], 20),
		Statusup(200,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(350%)",
		proc: ChainAttack(3.5, 4),
	},
	ss2: {
		desc: "<カウンター>5ターンの間、スキルカウンター待機(100%)",
		turn: 10,
		proc: [ss_skillcounter(1.0, 5)],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}