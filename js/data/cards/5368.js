{
	// -------------------------
	// 追加: 2015X-masギルマス
	// -------------------------
	name: "侠宴の覇者 ドゥーガ・ザムンタール",
	cardno: 5368,
	imageno: 7209,
	hp: 2279,
	atk: 3101,
	cost: 42,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Fastskill(1),
		Costdown(2),
		NEFTJOD(30),
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Fastskill(2),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0]),
		Spec_statusup(0, 200, [9]),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
	],
	as1: {
		desc: "<連撃>5チェインで敵単体を5回連続攻撃(400%)",
		proc: ChainDualAttack(4.0, 5, 5),
	},
	ss1: {
		desc: "<ダメージ強化>3ターン自分の攻撃力をアップ(150%)",
		turn: 7,
		proc: [ss_enhance_own(1.5, 3)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Statusup(0, 300),
	],
	as2: {
		desc: "<連撃>5チェインで敵単体を5回連続攻撃(500%)",
		proc: ChainDualAttack(5.0, 5, 5),
	},
	ss2: {
		desc: "<ダメージ強化>4ターン自分の攻撃力をアップ。毒状態の時、さらに自分の攻撃力をアップ(200%/1200%)",
		turn: 9,
		proc: [ss_enhance_own(ss_is_poison_own(12, 2), 4)],
	},
}