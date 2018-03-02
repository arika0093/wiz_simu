{
	name: "AbCd-Ψ:《闇照す舞踏 ニティア》",
	cardno: 7126,
	imageno: 6787,
	hp: 4655,
	atk: 2504,
	cost: 53,
	attr: [1, 3],
	species: [11],
	ape: "AbCd",
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
		desc: "<回復>水属性の味方を回復、パネルの色が増す度さらに回復(11%/15%/17%)",
		proc: ChainPanelsHeal(0.11, 0.15, 0.17, [0,1,0,0,0], 0)
	},
	ss1: {
		desc: "<効果解除>敵全体のガード&ダメージブロックを解除する",
		turn: 4,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all")],
	},
	islegend: true,
	Lawake: [
		Statusup(1000, 0),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<回復>水属性の味方を回復、パネルの色が増す度さらに回復(13%/17%/20%)",
		proc: ChainPanelsHeal(0.13, 0.17, 0.20, [0,1,0,0,0], 0)
	},
	ss2: {
		desc: "<効果解除大魔術>スキル反射を無視し、敵全体のガード＆ダメージブロックを解除し、水属性のダメージ。HP20%以下でさらにダメージアップ(300%/1500%)",
		turn: 7,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all"), ss_damage_all(ss_hp_less(0.20, 15.0, 3.0), [1]), ss_ignore_skillcounter()],
	},
}