{
	name: "深淵を覗いた悪魔 シビィ・サレルノ",
	cardno: 7950,
	imageno: 10063,
	hp: 3521,
	atk: 2034,
	cost: 41,
	attr: [0,3],
	species: [2],
	islegend: false,
	ape: "大魔道杯 in ショコラフォレスト",
	is_dist: true,
	as1: {
		desc: "<回復>味方全体のHPを回復(12%)",
		proc: Heal(0.12, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<複属性ダメージ強化>5ターンの間、火属性の味方の攻撃力をアップ、複属性が光属性だとさらにアップ(50%/100%)。さらに味方全体のHPを回復する(50%)",
		turn: 8,
		proc: [ss_enhance_all_subattr(0.5, 1.0, 5, [1,0,0,0,0], [0,0,0,1,0]), ss_heal(0.5)],
	},
	awakes: [
		Statusup(0,200),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],1),
		Statusup(200,0),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,100, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 100,0, [0,0,0,1,0,]),
	],
}