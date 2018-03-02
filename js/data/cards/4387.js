{
	name: "夢と愛の結晶 アーモンドピーク",
	cardno: 4387,
	imageno: 6060,
	hp: 2536,
	atk: 2017,
	cost: 51,
	attr: [0, 1],
	species: [9],
	ape: "大魔道杯 in お菓子",
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0]),
		Fastskill(1),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0]),
		Heal_afterbattle(10),
		Statusup(200, 0),
		Fastskill(2),
		Spec_statusup(0, 200, [9]),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<回復>味方全員のHPを回復、術士はさらに回復、15チェインでさらに術士は回復(通常：5％ / 術士：10％ / 15チェイン+術士：25％)",
		proc: [Heal(0.05, [1, 1, 1, 1, 1], 0), SpecHeal(0.10, [1, 1, 1, 1, 1], [9], 0), SpecHeal(0.25, [1, 1, 1, 1, 1], [9], 15)],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 1, 0, 0, 0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<回復>味方全員のHPを回復、術士はさらに回復、15チェインでさらに術士は回復(通常：5％ / 術士：10％ / 15チェイン+術士：30％)",
		proc: [Heal(0.05, [1, 1, 1, 1, 1], 0), SpecHeal(0.10, [1, 1, 1, 1, 1], [9], 0), SpecHeal(0.30, [1, 1, 1, 1, 1], [9], 15)],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを3早める、20チェインでさらに1早める",
		turn: 12,
		proc: [ss_skillboost(ss_chain_cond(20, 4, 3))],
	},
}