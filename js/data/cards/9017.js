{
	name: "雄揮の翔竜 レイル＆フレーグ",
	cardno: 9017,
	imageno: 11228,
	hp: 2445,
	atk: 2771,
	cost: 41,
	attr: [2,0],
	species: [0],
	islegend: true,
	ape: "喰牙RIZEⅡ",
	is_dist: true,
	as1: {
		desc: "<回復・攻撃強化>雷属性の味方のHPを回復(11%)、さらに雷属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.11, [0,0,1,0,0], 0), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷・火属性のダメージ(100%)、さらに味方全体のHPを回復する(25%)",
		turn: 5,
		proc: [ss_damage_all(1.0, [2,0]), ss_heal(0.25), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(300,0),
		Fastskill(1),
		Statusup(0,300),
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Costdown(10),
		NEFTJOD(30),
	],
	as2: {
		desc: "<回復・攻撃強化>雷属性の味方のHPを回復(14%)、さらに雷属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.14, [0,0,1,0,0], 0), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷・火属性のダメージ(130%)、さらに味方全体のHPを回復する(25%)",
		turn: 7,
		proc: [ss_damage_all(1.3, [2,0]), ss_heal(0.25), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,400),
		Statusup(500,0),
	],
}