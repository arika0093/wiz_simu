{
	// -------------------------
	// 追加: 2015クリスマス聖夜精霊
	// -------------------------
	name: "いま花開く世界 シャロン・イェルグ",
	cardno: 5362,
	imageno: 7116,
	hp: 2945,
	atk: 3356,
	cost: 47,
	attr: [2, 3],
	species: [3],
	disable: true,
	awakes: [
		Attr_relief([0, 0, 0, 1, 1, ], 30),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0]),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Heal_afterbattle(10),
		Attr_statusup(200, 0, [0, 0, 1, 0, 0]),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0]),
		Fastskill(2),
	],
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(350％)、10チェインでさらにアップ(550%)",
		proc: [ChainAttack(3.5, 4), ChainAttack(5.5, 10)]
	},
	ss1: {
		desc: "<カウンター>5ターンの間スキルカウンター待機(300%)",
		turn: 12,
		proc: [ss_skillcounter(3, 5)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(450％)、10チェインでさらにアップ(650%)",
		proc: [ChainAttack(4.5, 4), ChainAttack(6.5, 10)]
	},
	ss2: {
		desc: "<カウンター>5ターンの間スキルカウンター待機(400%)",
		turn: 15,
		proc: [ss_skillcounter(4, 5)]
	},
}