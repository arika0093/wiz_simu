{
	name: "常時共闘戦線 エミリア&カエデ",
	cardno: 4534,
	imageno: 6212,
	hp: 2331,
	atk: 2389,
	cost: 46,
	attr: [0, 2],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0]),
		Attr_relief([0, 0, 1, 0, 0], 10),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Awake_noeffect("経験値取得量アップ", 1),
		Fastskill(2),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(0, 200, [9]),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃/計350％",
		proc: ChainDualAttack(3.5, 3, 3),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにダメージ25％軽減の効果を付与",
		turn: 6,
		proc: [panel_attr_guard([1,1,1,1,1], 0.25)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃/計450％",
		proc: ChainDualAttack(4.5, 3, 3),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにダメージ50％軽減の効果を付与",
		turn: 10,
		proc: [panel_attr_guard([1,1,1,1,1], 0.5)]
	},
}