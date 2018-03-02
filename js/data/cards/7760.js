{
	name: "外道大臣 ゲスタイガー",
	cardno: 7760,
	imageno: 9842,
	hp: 3803,
	atk: 2232,
	cost: 37,
	attr: [2,-1],
	species: [5],
	islegend: true,
	ape: "魔轟三鉄傑 対 地獄三十六歌仙",
	is_dist: true,
	as1: {
		desc: "<回復>雷属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与、4チェインを消費しさらに効果値アップ(30%/60%)",
		turn: 3,
		proc: [panel_attackup(ss_chain_cost(4, 0.6, 0.3))],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,100),
		Statusup(100,0),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復(14%)",
		proc: Heal(0.14, [0,0,1,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与、3チェインを消費しさらに効果値アップ(50%/100%)",
		turn: 5,
		proc: [panel_attackup(ss_chain_cost(3, 1.0, 0.5))],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(400,0),
	],
}