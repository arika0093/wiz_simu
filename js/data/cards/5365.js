{
	name: "師匠サンタ登場 リンリン&ポンタン",
	cardno: 5365,
	imageno: 7091,
	hp: 1856,
	atk: 4004,
	cost: 48,
	attr: [2, 1],
	species: [8],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0], 1),
		Fastskill(1),
		NEFTJOD(30),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0]),
		Statusup(0, 200),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Statusup(0, 200),
		Attr_statusup(0, 200, [0, 1, 1, 0, 0]),
		Fastskill(2),
	],
	as1: {
		desc: "<属性特効>HP80%以上で水属性の敵単体へ特効ダメージ(525%)",
		proc: [add_cond(ChainAttrAttack(5.25, 0, [0,1,0,0,0]), when_hp_more(0.8))]
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<属性特効>HP80%以上で水属性の敵単体へ特効ダメージ(625%)",
		proc: [add_cond(ChainAttrAttack(6.25, 0, [0,1,0,0,0]), when_hp_more(0.8))]
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・雷属性化し、攻撃力アップの効果を付与",
		turn: 6,
		proc: [ss_panel_change([0,1,1,0,0]), panel_attackup(0.5)]
	},
}