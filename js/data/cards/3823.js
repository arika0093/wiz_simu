{
	name: "時海の航海者 ダム・リフリス",
	cardno: 3823,
	imageno: 4268,
	hp: 2422,
	atk: 2812,
	cost: 42,
	attr: [0, -1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Costdown(2),
		Costdown(2),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Spec_statusup(0, 200, [9]),
	],
	as1: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、術士はさらにアップ(通常：20％ / 種族：40％)",
		proc: [ChainEnhance(0.2, [1,0,0,0,0], 0), ChainSpecEnhance(0.4, [1,0,0,0,0], [9], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・水属性化",
		turn: 5,
		proc: [ss_panel_change([1,1,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、術士はさらにアップ(通常：30％ / 種族：60％)",
		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.6, [1,0,0,0,0], [9], 0)],
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
}