{
	name: "静々と響く海鳴り セイ・シラナミ",
	cardno: 4127,
	imageno: 5801,
	hp: 2667,
	atk: 2728,
	cost: 46,
	attr: [1, -1],
	species: [1],
	disable: true,
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Attr_relief([0, 0, 1, 0, 0, ], 20),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(2),
		Spec_statusup(200, 0, [1, ]),
		Spec_statusup(0, 200, [1, ]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/350％",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを1早める",
		turn: 6,
		proc: [ss_skillboost(1)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<回復・攻撃>敵単体へのダメージアップ、さらに水属性の味方のHPを回復(通常：350％ / 回復：5％)",
		proc: [ChainAttack(3.5, 0), Heal(0.05, [0,1,0,0,0], 0)],
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_s(3)]
	},
}