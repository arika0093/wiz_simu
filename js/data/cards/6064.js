{
	name: "続く未来を歩んで ルミア・スア",
	cardno: 6064,
	imageno: 7891,
	hp: 2755,
	atk: 2280,
	cost: 25,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "覇眼戦線Ⅱ",
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方のHPを回復(11%)",
		proc: Heal(0.11, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルに25%軽減の効果を付与",
		turn: 6,
		proc: [panel_attr_guard([1, 1, 1, 1, 1], 0.25)]
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Statusup(200,0),
		Heal_afterbattle(10),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復(13%)",
		proc: Heal(0.13, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルに35%軽減の効果を付与",
		turn: 8,
		proc: [panel_attr_guard([1, 1, 1, 1, 1], 0.5)]
	},
	Lawake: [
		Statusup(500,0),
		NEFTJOD(30),
	],
}