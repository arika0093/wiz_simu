{
	name: "機巧×人間 ルツィア・タウンゼンド",
	cardno: 6818,
	imageno: 8777,
	hp: 3768,
	atk: 4682,
	cost: 52,
	attr: [2,-1],
	species: [8],
	disable: true,
	islegend: true,
	as1: {
		desc: "<チェイン攻撃・攻撃強化>味方の攻撃力をアップ(30%)し、4チェインでダメージアップ(300%)",
		proc: [ChainEnhance(0.30, [1,1,1,1,1], 0), ChainAttack(3.0, 4)],
	},
	ss1: {
		desc: "<弱体化大魔術>敵単体へ雷属性のダメージ(400%)、さらに5ターンの間、敵の防御力を弱体化(30%)",
		turn: 7,
		proc: [ss_damage_s(4.0, [2], 1), ss_attr_weaken_s([1,1,1,1,1], 0.3, 5)],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Awake_noeffect("精霊交替", 1),
	],
	as2: {
		desc: "<チェイン攻撃・攻撃強化>味方の攻撃力をアップ(30%)し、4チェインでダメージアップ(400%)",
		proc: [ChainEnhance(0.30, [1,1,1,1,1], 0), ChainAttack(4.0, 4)],
	},
	ss2: {
		desc: "<弱体化大魔術>スキル反射を無視し、敵単体へ雷属性のダメージ(800%)、さらに10ターンの間、敵の防御力を弱体化(30%)",
		turn: 12,
		proc: [ss_damage_s(8.0, [2], 1), ss_attr_weaken_s([1, 1, 1, 1, 1], 0.3, 10), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
	],
}