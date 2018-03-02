{
	name: "組織の男 コードネーム:ジン",
	cardno: 5255,
	imageno: 6953,
	hp: 1599,
	atk: 4502,
	cost: 44,
	attr: [2, 4],
	species: [8],
	ape: "コラボ(コナン)",
	awakes: [
		NEFTJOD(30),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Fastskill(1),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Panel_boost([0, 0, 1, 0, 0], 2),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(0, 200, [0, 0, 1, 0, 0]),
		Statusup(0, 500),
	],
	as1: {
		desc: "<チェイン攻撃>7チェインでダメージアップ(550%)",
		proc: ChainAttack(5.5, 7)
	},
	ss1: {
		desc: "<犠牲魔術>味方全体のMAXHPの80%を使い敵全体へダメージ(120%×人数)",
		turn: 8,
		proc: [ss_damage_all(ss_consume_all_cond(1.2, 0.8), [2])],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 700),
		Statusup(300, 0),
	],
	as2: {
		desc: "<チェイン攻撃>7チェインでダメージアップ(650%)",
		proc: ChainAttack(6.5, 7)
	},
	ss2: {
		desc: "<犠牲魔術>味方全体のMAXHPの80%を使い敵全体へダメージ(160%×人数)",
		turn: 10,
		proc: [ss_damage_all(ss_consume_all_cond(1.6, 0.8), [2])],
	},
}