{
	name: "繚焔の魔紅 カスミ・キサラギ",
	cardno: 4134,
	imageno: 5812,
	hp: 2467,
	atk: 2531,
	cost: 34,
	attr: [0, -1],
	species: [9],
	awakes: [
		Costdown(2),
		Statusup(100, 0),
		Statusup(0, 100),
		Costdown(2),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Panel_boost([1,0,0,0,0], 1),
	],
	as1: {
		desc: "<回復>火属性の味方のHPを回復、術士はさらに回復(火：10％ / 火+種族：15％)",
		proc: [Heal(0.10, [1,0,0,0,0]), SpecHeal(0.15, [1,0,0,0,0], [9])],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復、術士はさらに回復(火：13％ / 火+種族：18％)",
		proc: [Heal(0.13, [1,0,0,0,0]), SpecHeal(0.18, [1,0,0,0,0], [9])],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、攻撃力アップの効果を付与(+20％)",
		turn: 8,
		proc: [ss_panel_change([1,0,0,0,0]), panel_attackup(0.20)],
	},
}