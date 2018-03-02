{
	name: "輝く笑顔に魅せられて 初音ミク",
	cardno: 4958,
	imageno: 6693,
	hp: 2702,
	atk: 1832,
	cost: 26,
	attr: [0, 2],
	species: [9],
	disable: true,
	awakes: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Heal_afterbattle(10),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0]),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0]),
	],
	as1: {
		desc: "<回復>火・雷属性の味方のHPを回復/11％",
		proc: Heal(0.11, [1, 0, 1, 0, 0], 0),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 5,
		proc: [ss_delay_s(1)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<攻撃強化・回復>火・雷属性の味方のHPを回復、さらに火・雷属性の味方の攻撃力をアップ(回復：11％ / 攻撃力：+30％)",
		proc: [Heal(0.11, [1, 0, 1, 0, 0], 0), ChainEnhance(0.3, [1, 0, 1, 0, 0], 0)],
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_s(2)]
	},
}