{
	name: "終に導く焔 ヴィヴィ・ナイトメア",
	cardno: 4140,
	imageno: 5818,
	hp: 2776,
	atk: 2556,
	cost: 41,
	attr: [0, -1],
	species: [9],
	awakes: [
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Statusup(0, 200),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(0, 200, [9]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(200, 0, [9]),
		Spec_statusup(0, 200, [9]),
	],
	as1: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、魔族・術士はさらにアップ(火：+20％ / 火+種族：+40％)",
		proc: [ChainEnhance(0.2, [1,0,0,0,0], 0), ChainSpecEnhance(0.4, [1,0,0,0,0], [2, 9], 0)],
	},
	ss1: {
		desc: "<シャッフル>ジャンルパネルをシャッフル",
		turn: 3,
		proc: [ss_panel_shuffle()]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 200, [1,0,0,0,0]),
		NEFTJOD(30),
	],
	as2: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、魔族・術士はさらにアップ(火：+30％ / 火+種族：+60％)",
		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.6, [1,0,0,0,0], [2, 9], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、チェインがプラス1の効果を付与",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,0]), panel_chainplus(1)],
	},
}