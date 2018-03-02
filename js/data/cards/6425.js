{
	name: "破天荒双魔銃士 コフィ・ストライフ",
	cardno: 6425,
	imageno: 8364,
	hp: 2350,
	atk: 3011,
	cost: 42,
	attr: [0,1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<全体攻撃>敵の数に関わらず敵全体へダメージアップ(150%)",
		proc: ChainAllAttack(1.5, 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・水属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,0,0,0])],
	},
	awakes: [
		Statusup(200,0),
		Costdown(2),
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Spec_statusup(0,200, [8,]),
		Attr_statusup(100,0, [1,1,0,0,0,]),
	],
	as2: {
		desc: "<全体攻撃>敵の数に関わらず敵全体へダメージアップ(160%)",
		proc: ChainAllAttack(1.6, 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・水属性化し、攻撃力アップの効果を付与(50%)",
		turn: 7,
		proc: [ss_panel_change([1,1,0,0,0]), panel_attackup(0.5)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Statusup(0,300),
	],
}