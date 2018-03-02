{
	name: "実は泣き虫 ラスメティー・ナッシュ",
	cardno: 7288,
	imageno: 9313,
	hp: 2541,
	atk: 2421,
	cost: 39,
	attr: [0,2],
	species: [9],
	islegend: false,
	ape: "大魔道杯 in レディアント",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が雷属性だとさらにアップ(40%/90%)",
		proc: ChainEnhance_SubAttr(0.4, 0.9, [1,0,0,0,0], [0,0,1,0,0], 4),
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力を500アップ(上限値:2000)、さらにHPを回復(50%)",
		turn: 6,
		proc: [ss_statusup_all([0, 500], [2000, 2000], -1), ss_heal(0.5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Attr_relief([0,0,1,0,0,],10),
		NEFTJOD(30),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Statusup(200,0),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
	],
}