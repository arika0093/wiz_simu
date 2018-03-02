{
	name: "チョコ滾る アキラ・マスグレイヴ",
	cardno: 4473,
	imageno: 6166,
	hp: 2409,
	atk: 2371,
	cost: 43,
	attr: [0, -1],
	species: [8],
	awakes: [
		Statusup(100, 0),
		Statusup(0, 100),
		Statusup(200, 0),
		Fastskill(1),
		Statusup(0, 200),
		Fastskill(1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Spec_statusup(0, 200, [8]),
	],
	as1: {
		desc: "<回復>味方全体のHPを回復、リーダー時さらに回復(通常：10％ / リーダー時：13％)",
		proc: multi_as(Heal(0.1, [1, 1, 1, 1, 1]), add_cond(Heal(0.13, [1, 1, 1, 1, 1]), when_leader())),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_delay_all(2)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復、リーダー時さらに回復(通常：13％ / リーダー時：16％)",
		proc: multi_as(Heal(0.13, [1, 1, 1, 1, 1]), add_cond(Heal(0.16, [1, 1, 1, 1, 1]), when_leader())),
	},
	ss2: {
		desc: "<遅延>攻撃ターンを2遅らせる、さらに味方全体のHPを回復する(50％)",
		turn: 13,
		proc: [ss_delay_all(2), ss_heal(0.5)],
	},
}