{
	name: "剛魔鋼の征神姫 ミシェル・ヴァイル",
	cardno: 6149,
	imageno: 8003,
	hp: 4701,
	atk: 2432,
	cost: 54,
	attr: [0, 2],
	species: [9],
	islegend: true,
	as1: {
		desc: "<複属性攻撃強化・回復>火属性の味方を回復(5%)し、攻撃力もアップ。複属性が雷属性だとさらに攻撃力アップ(30%/50%)",
		proc: [Heal(0.05, [1, 0, 0, 0, 0], 0), ChainEnhance_SubAttr(0.3, 0.5, [1, 0, 0, 0, 0], [0, 0, 1, 0, 0], 0)],
	},
	ss1: {
		desc: "<割合削り>スキル反射を無視し、敵単体のHPを15%減少させる",
		turn: 8,
		proc: [ss_ratiodamage_s(0.15), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0, 600),
		Attr_statusup(0, 200, [1, 0, 1, 0, 0, ]),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Costdown(2),
		Attr_relief([0, 1, 0, 0, 0, ], 10),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		Fastskill(2),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Attr_statusup(0, 200, [1, 0, 1, 0, 0, ]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<複属性攻撃強化・回復>火属性の味方を回復(5%)し、攻撃力もアップ。複属性が雷属性だとさらに攻撃力アップ(60%/80%)",
		proc: [Heal(0.05, [1, 0, 0, 0, 0], 0), ChainEnhance_SubAttr(0.6, 0.8, [1, 0, 0, 0, 0], [0, 0, 1, 0, 0], 0)],
	},
	ss2: {
		desc: "<割合削り>スキル反射を無視し、敵単体のHPを25%減少させる",
		turn: 10,
		proc: [ss_ratiodamage_s(0.25), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0, 200, [1, 0, 1, 0, 0, ]),
	],
}