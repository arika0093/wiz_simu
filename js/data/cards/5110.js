{
	name: "愛で繋いだ心の架け橋 ミミ&ララ",
	cardno: 5110,
	imageno: 6861,
	hp: 4558,
	atk: 2345,
	cost: 44,
	attr: [0, -1],
	species: [3],
	awakes: [
		Costdown(4),
		Statusup(200, 0),
		Panel_boost([1,0,0,0,0], 1),
		Panel_boost([1,0,0,0,0], 2),
		Statusup(0, 200),
		Spec_statusup(0, 200, [3]),
		Attr_statusup(200, 0, [1, 1, 1, 1, 1]),
		Fastskill(1),
		Spec_statusup(200, 0, [3]),
		Fastskill(2),
	],
	as1: {
		desc: "<回復>味方全体のHPを回復、HP50％以下でさらに回復(通常：11％ / HP50％以下：20％)",
		proc: [Heal(0.11, [1, 1, 1, 1, 1], 0), add_cond(Heal(0.20, [1, 1, 1, 1, 1], 0), when_hp_less(0.5))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 1, 1, 1, 1]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復、HP50％以下でさらに回復(通常：13％ / HP50％以下：22％)",
		proc: [Heal(0.13, [1, 1, 1, 1, 1], 0), add_cond(Heal(0.22, [1, 1, 1, 1, 1], 0), when_hp_less(0.5))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、ダメージ25％軽減の効果を付与",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)]
	},
}