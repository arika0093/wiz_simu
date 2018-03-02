{
	name: "夏の日の涼風 リンカ・ワイアット",
	cardno: 4457,
	imageno: 6151,
	hp: 2921,
	atk: 3060,
	cost: 45,
	attr: [0, -1],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(0, 200),
		Fastskill(1),
		Statusup(200, 0),
		Fastskill(1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Spec_statusup(0, 200, [8]),
		Spec_statusup(200, 0, [8]),
	],
	as1: {
		desc: "<攻撃強化>3チェインで火属性の味方の攻撃力をアップ、10チェインでさらにアップ(3チェイン：+40％ / 10チェイン：+100％)",
		proc: [ChainEnhance(0.4, [1,0,0,0,0], 3), ChainEnhance(1.0, [1,0,0,0,0], 10)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<攻撃強化>3チェインで火属性の味方の攻撃力をアップ、10チェインでさらにアップ(3チェイン：+60％ / 10チェイン：+120％)",
		proc: [ChainEnhance(0.6, [1,0,0,0,0], 3), ChainEnhance(1.2, [1,0,0,0,0], 10)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、チェインがプラス1の効果を付与",
		turn: 8,
		proc: [ss_panel_change([1,1,1,0,0]), panel_chainplus(1)],
	},
}