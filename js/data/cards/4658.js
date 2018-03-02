{
	name: "二心一閃の太刀筋 ウッド&リーリ",
	cardno: 4658,
	imageno: 6416,
	hp: 2189,
	atk: 2051,
	cost: 52,
	attr: [0, 2],
	species: [8],
	ape: "大魔道杯 with 境界騎士団",
	awakes: [
		Costdown(2),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(100, 0),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Panel_boost([1,0,0,0,0], 2),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0]),
		Statusup(0, 100),
		Fastskill(2),
		Spec_statusup(0, 200, [8]),
		Spec_statusup(200, 0, [8]),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/400％",
		proc: ChainAttack(4.0, 5),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 7,
		proc: [ss_delay_s(1)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<チェイン攻撃・回復>5チェインでダメージアップ、さらに火・雷属性の味方のHPを回復(攻撃：400％ / 回復：5％)",
		proc: [ChainAttack(4.0, 5), Heal(0.05, [1, 0, 1, 0, 0], 5)],
	},
	ss2: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを1遅らせ、火属性のダメージ(180％)",
		turn: 8,
		proc: [ss_damage_s(1.8, [0]), ss_delay_s(1)],
	},
}