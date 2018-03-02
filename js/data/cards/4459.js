{
	name: "大海の獣と戯れる ヴォルフ・ロイ",
	cardno: 4459,
	imageno: 6153,
	hp: 3038,
	atk: 2920,
	cost: 46,
	attr: [0, -1],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Costdown(2),
		Fastskill(1),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0]),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(0, 200, [8]),
		Spec_statusup(200, 0, [8]),
	],
	as1: {
		desc: "<属性の加護>デッキの属性の数だけ攻撃力アップ(1属性：250％ / 2属性：400％ / 3属性：550％)",
		proc: ChainDeckAttrsAttack(2.5, 4.0, 5.5, 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・水属性化",
		turn: 5,
		proc: [ss_panel_change([1,1,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0]),
	],
	as2: {
		desc: "<属性の加護>デッキの属性の数だけ攻撃力アップ(1属性：300％ / 2属性：500％ / 3属性：700％)",
		proc: ChainDeckAttrsAttack(3.0, 5.0, 7.0, 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・水属性化し、ダメージ25％軽減の効果を付与",
		turn: 7,
		proc: [ss_panel_change([1,1,0,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)]
	},
}