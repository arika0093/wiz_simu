{
	name: "惺眼の行方を追う アシュタル・ラド",
	cardno: 8180,
	imageno: 10318,
	hp: 2155,
	atk: 6625,
	cost: 54,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "覇眼戦線Ⅲ",
	as1: {
		desc: "<連撃>敵単体を8回連続攻撃,15チェインでさらにダメージアップ(200%/1100%)",
		proc: [ChainDualAttack(2.0, 0, 8), ChainDualAttack(11.0, 15, 8)],
	},
	ss1: {
		desc: "<残滅大魔術>味方全体で1ターン溜めた後、スキル反射を無視し、敵全体へ水属性のダメージ(200%)、さらに3ターンの間、水属性のダメージ(200%)",
		turn: 3,
        	charged: 1,
        	isallcharge: true,
		proc: [ss_continue_damage(2.0, 2.0, [1], 3), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Costdown(20),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(60),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Attr_relief([1,0,0,0,0,],20),
		Fastskill(2),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<連撃>敵単体を8回連続攻撃,15チェインでさらにダメージアップ(200%/1200%)",
		proc: [ChainDualAttack(2.0, 0, 8), ChainDualAttack(12.0, 15, 8)],
	},
	ss2: {
		desc: "<残滅大魔術>味方全体で1ターン溜めた後、スキル反射を無視し、敵全体へ水属性のダメージ(300%)、さらに3ターンの間、水属性のダメージ(300%)",
		turn: 6,
        	charged: 1,
        	isallcharge: true,
		proc: [ss_continue_damage(3.0, 3.0, [1], 3), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,1000),
		Abstate_invalid("as_sealed"),
	],
}