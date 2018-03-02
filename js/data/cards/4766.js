{
	name: "破邪心滅の刃 ルヴァル・アウルム",
	cardno: 4766,
	imageno: 6481,
	hp: 2631,
	atk: 3832,
	cost: 46,
	attr: [1, -1],
	species: [1],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
		NEFTJOD(30),
		Fastskill(2),
		Attr_relief([0, 1, 0, 0, 0, ], 20),
		Spec_statusup(200, 0, [1, ]),
		Spec_statusup(0, 200, [1, ]),
	],
	as1: {
		desc: "<属性特効>5チェインで火属性の敵単体へ特効ダメージ/650％",
		proc: ChainAttrAttack(6.5, 5, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(20％)",
		turn: 8,
		proc: [ss_regenerate(0.20, 5)],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<属性特効>5チェインで火属性の敵単体へ特効ダメージ/750％",
		proc: ChainAttrAttack(7.5, 5, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する、HP50％未満でさらに回復(通常：20％ / HP50％未満：30％)",
		turn: 10,
		proc: [ss_regenerate(ss_hp_less(0.5, 0.3, 0.2), 5)],
	}
}