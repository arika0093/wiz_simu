{
	name: "千紫万紅の幻想画聖 ラピスラ・モネ",
	cardno: 5881,
	imageno: 7698,
	hp: 5380,
	atk: 2038,
	cost: 55,
	attr: [1, 2],
	species: [9],
	islegend: true,
	as1: {
		desc: "<回復>水・雷属性の味方を回復(13%)、HP10%以下で全回復",
		proc: [Heal(0.12, [0, 1, 1, 0, 0], 0), add_cond(Heal(1.0, [0, 1, 1, 0, 0], 0), when_hp_less(0.10))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])],
	},
	awakes: [
		Statusup(0, 400),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		Statusup(400, 0),
		Fastskill(1),
		Costdown(4),
		Fastskill(2),
		Attr_statusup(200, 0, [0, 1, 1, 0, 0, ]),
		Attr_relief([1, 1, 1, 1, 1, ], 10),
		Heal_afterbattle(10),
		Attr_statusup(0, 200, [0, 1, 1, 0, 0, ]),
	],
	as2: {
		desc: "<回復>水・雷属性の味方を回復(17%)、HP10%以下で全回復",
		proc: [Heal(0.17, [0, 1, 1, 0, 0], 0), add_cond(Heal(1.0, [0, 1, 1, 0, 0], 0), when_hp_less(0.10))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・雷属性化し、ダメージ25%軽減の効果を付与。HP10%以下でさらにダメージ45%軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([0,1,1,0,0]), panel_attr_guard([1,1,1,1,1], ss_hp_less(0.10, 0.70, 0.25))],
	},
	Lawake: [
		Statusup(700, 0),
		Statusup(0, 300),
	],
}