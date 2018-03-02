{
	name: "AbCd-Ψ:《闇照す舞踏 ニティア》",
	cardno: 5046,
	imageno: 6787,
	hp: 4055,
	atk: 2504,
	cost: 46,
	attr: [1, 3],
	species: [11],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Statusup(200, 0),
		Attr_relief([0, 0, 0, 1, 1, ], 30),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		NEFTJOD(60),
		Attr_relief([1, 0, 0, 0, 0, ], 10),
		Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
		Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
		Fastskill(3),
	],
	as1: {
		desc: "<回復>水属性の味方のHPを回復、パネルの色が増す度さらに回復(1色：11％ / 2色：15％ / 3色：17％)",
		proc: ChainPanelsHeal(0.11, 0.15, 0.17, [0,1,0,0,0], 0)
	},
	ss1: {
		desc: "<効果解除>敵全体のガード&ダメージブロックを解除する",
		turn: 8,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all")],
	},
	islegend: true,
	Lawake: [
		Statusup(1000, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復、パネルの色が増す度さらに回復(1色：13％ / 2色：17％ / 3色：20％)",
		proc: ChainPanelsHeal(0.13, 0.17, 0.20, [0,1,0,0,0], 0)
	},
	ss2: {
		desc: "<効果解除大魔術>敵全体のガード&ダメージブロックを解除し、水属性のダメージ。HP20％以下でさらにダメージアップ(通常：180％ / HP20％以下：400％)",
		turn: 12,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all"), ss_damage_all(ss_hp_less(0.20, 4.0, 1.8), [1])],
	},
}