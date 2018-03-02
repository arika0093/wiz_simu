{
	name: "悪徳の飛翼 ディール・ロクスビー",
	cardno: 4606,
	imageno: 6334,
	hp: 2500,
	atk: 1769,
	cost: 42,
	attr: [0, 4],
	species: [9],
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Statusup(0, 200),
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(200, 0),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(2),
		Spec_statusup(0, 200, [9]),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<回復>火属性の味方のHPを回復/12％",
		proc: Heal(0.12, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・闇属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,1])]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復/14％",
		proc: Heal(0.14, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・闇属性化し、回復の効果を付与(10％)",
		turn: 8,
		proc: [ss_panel_change([1,0,0,0,1]), panel_healally(0.10)],
	},
}