{
	name: "天郷の輝光 ペガサスロード",
	cardno: 4135,
	imageno: 5813,
	hp: 2568,
	atk: 2432,
	cost: 40,
	attr: [1, -1],
	species: [1],
	awakes: [
		Statusup(200, 0),
		Statusup(0, 200),
		Statusup(0, 200),
		Costdown(2),
		Statusup(200, 0),
		Costdown(2),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Fastskill(2),
	],
	as1: {
		desc: "<回復>味方全員のHPを回復、神族はさらに回復(通常：9％ / 種族：16％)",
		proc: [Heal(0.09, [1,1,1,1,1], 0), SpecHeal(0.16, [1,1,1,1,1], [1], 0)],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 5,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Statusup(0, 400),
	],
	as2: {
		desc: "<回復>味方全員のHPを回復、神族はさらに回復(通常：12％ / 種族：19％)",
		proc: [Heal(0.12, [1,1,1,1,1], 0), SpecHeal(0.19, [1,1,1,1,1], [1], 0)],
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
}