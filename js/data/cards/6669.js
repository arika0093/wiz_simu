{
	name: "星を見る少年たち シンジ&カヲル",
	cardno: 6669,
	imageno: 8533,
	hp: 4036,
	atk: 3049,
	cost: 54,
	attr: [2,4],
	species: [8],
	islegend: true,
	ape: "コラボ(エヴァⅡ)",
	as1: {
		desc: "<連撃・ガード>6チェインで敵単体を3回連続攻撃(400%)、さらに全属性のダメージを10%軽減",
		proc: [ChainDualAttack(4.0, 6, 3), as_guard(0.10, [1,1,1,1,1], 6)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷・闇属性化",
		turn: 3,
		proc: [ss_panel_change([0,0,1,0,1])],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_sattr(200, 0, [0,0,1,0,0], 200, 0, [0,0,0,0,1]),
		Attr_statusup_sattr(0, 200, [0,0,1,0,0], 0, 200, [0,0,0,0,1]),
	],
	as2: {
		desc: "<連撃・ガード>6チェインで敵単体を3回連続攻撃(500%)、さらに全属性のダメージを10%軽減",
		proc: [ChainDualAttack(5.0, 6, 3), as_guard(0.10, [1,1,1,1,1], 6)],
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()],
	},
	Lawake: [
		Attr_statusup_sattr(0, 100, [0,0,1,0,0], 0, 100, [0,0,0,0,1]),
		Statusup(0,500),
	],
}