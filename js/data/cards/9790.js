{
	name: "描いた絵を現実とする神 エソラゴト",
	cardno: 9790,
	imageno: 12104,
	hp: 5025,
	atk: 1471,
	cost: 45,
	attr: [2,1],
	species: [1],
	islegend: true,
	ape: "新説桃娘伝2",
	is_dist: true,
	as1: {
		desc: "<回復・ガード>水・雷属性の味方のHPを回復(10%)、5チェインで更に全属性のダメージを10%軽減",
		proc: [Heal(0.10, [0,1,1,0,0], 0), as_guard(0.10, [1,1,1,1,1], 5)],
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにスキルチャージプラス1の効果を付与（スキルチャージの効果は、SPスキルを使うまで重複しません）",
		turn: 6,
		proc: [panel_skillboost(1)],
	},
	awakes: [
		Fastskill(2),
		Attr_statusup(0,200, [0,1,1,0,0,]),
		Attr_statusup(200,0, [0,1,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(3),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [1,0,1,0,0,], 0,200, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,1,0,0,], 200,0, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復・ガード>水・雷属性の味方のHPを回復(13%)、5チェインで更に全属性のダメージを10%軽減",
		proc: [Heal(0.13, [0,1,1,0,0], 0), as_guard(0.10, [1,1,1,1,1], 5)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにスキルチャージプラス1の効果を付与（スキルチャージの効果は、SPスキルを使うまで重複しません）",
		turn: 6,
		proc: [panel_skillboost(1)],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}