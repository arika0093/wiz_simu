{
	name: "AbCd-Λλ:《甘く朽ち果てる闇 ニレイヌ》",
	cardno: 5040,
	imageno: 6779,
	hp: 3632,
	atk: 2710,
	cost: 49,
	attr: [0, 4],
	species: [11],
	disable: true,
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		NEFTJOD(30),
		Fastskill(1),
		Attr_statusup(200, 0, [1,0,0,0,0]),
		NEFTJOD(30),
		Attr_relief([0, 0, 0, 1, 1], 30),
		Attr_statusup(200, 0, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 2),
		Fastskill(2),
		Attr_statusup(0, 200, [1,0,0,0,0]),
	],
	as1: {
		desc: "<連撃>7チェインで敵単体を3回連続攻撃/計550％",
		proc: ChainDualAttack(5.5, 7, 3),
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを35％軽減する。HP20％以下でさらに3ターン軽減する。",
		turn: 6,
		proc: [ss_attr_guard([1,1,1,1,1], 0.35, ss_hp_less(0.2, 6, 3))],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<連撃>7チェインで敵単体を3回連続攻撃/計650％",
		proc: ChainDualAttack(6.5, 7, 3),
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50％軽減する。HP20％以下でさらに3ターン軽減する。",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, ss_hp_less(0.2, 6, 3))]
	},
}