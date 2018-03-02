{
	name: "魔巧技匠 ユニコ・ランドハイア",
	cardno: 3786,
	imageno: 4394,
	hp: 2531,
	atk: 2521,
	cost: 42,
	attr: [0, -1],
	species: [9],
	awakes: [
		Attr_relief([1, 1, 0, 0, 0], 10),
		Statusup(200, 0),
		Costdown(2),
		Statusup(200, 0),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<回復>火・雷属性の味方を回復、術士なら更に回復(通常:10% / 術士:15%)",
		proc: [Heal(0.10, [1, 0, 1, 0, 0], 0), SpecHeal(0.15, [1, 0, 1, 0, 0], [9], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<回復>火・雷属性の味方を回復、術士なら更に回復(通常:13% / 術士:18%)",
		proc: [Heal(0.13, [1, 0, 1, 0, 0], 0), SpecHeal(0.18, [1, 0, 1, 0, 0], [9], 0)],
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 7,
		proc: [ss_panel_change([1,0,1,0,0])]
	},
}