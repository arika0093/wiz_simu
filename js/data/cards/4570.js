{
	name: "金魚を眺む夏の涼 サーヤ・スズカゼ",
	cardno: 4570,
	imageno: 6290,
	hp: 2889,
	atk: 3171,
	cost: 45,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Costdown(2),
		Statusup(0, 200),
		Statusup(200, 0),
		Statusup(0, 100),
		Fastskill(1),
		Costdown(4),
		Attr_statusup(100, 0, [1,1,1,1,1]),
		Spec_statusup(200, 0, [9, ]),
		Attr_statusup(0, 100, [1,1,1,1,1]),
		Fastskill(2),
	],
	as1: {
		desc: "<回復>味方全体のHPを回復/13％",
		proc: Heal(0.13, [1,1,1,1,1], 0)
	},
	ss1: {
		desc: "<遅延大魔術>攻撃ターンを1遅らせ、敵全体へ水属性のダメージ(150％)",
		turn: 8,
		proc: [ss_damage_all(1.5, [1]), ss_delay_all(1)],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<攻撃強化・回復>味方全体のHPを回復、さらに水属性の味方の攻撃力をアップ(回復：16％ / 攻撃：+30％)",
		proc: [Heal(0.16, [1,1,1,1,1], 0), ChainEnhance(0.30, [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<遅延大魔術>攻撃ターンを1遅らせ、敵全体へ水属性のダメージ、さらに味方全体のHPを回復する(攻撃：150％ / 回復：25％)",
		turn: 12,
		proc: [ss_damage_all(1.5, [1]), ss_heal(0.25), ss_delay_all(1)],
	},
}