{
	name: "烈竜武侠 バス・ラシュール",
	cardno: 7441,
	imageno: 9426,
	hp: 2709,
	atk: 5544,
	cost: 51,
	attr: [0,-1],
	species: [0],
	islegend: true,
	ape: "神竜降臨Ⅱ",
	as1: {
		desc: "<ギャンブル攻撃>雷属性の敵単体へ特効ダメージ(300%)、さらにダメージがイチかバチかアップ(0~300%)",
		proc: [
			ChainStakesAttack(0, 3, 0),
			add_cond(ChainStakesAttack(3, 6, 0), when_enemyattr_match(2))
		],
	},
	ss1: {
		desc: "<ダメージ強化>1ターン溜めた後、1ターン火属性の味方の攻撃力をアップ(150%)",
		turn: 5,
		charged: 1,
		proc: [ss_enhance_all(1.5, 1, [1,0,0,0,0])],
	},
	awakes: [
		Statusup(0,200),
		Fastskill(1),
		Statusup(0,200),
		NEFTJOD(30),
		Attr_relief([1,0,0,0,0,],10),
		Panel_boost([1,0,0,0,0,],3),
		Fastskill(2),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<ギャンブル攻撃>雷属性の敵単体へ特効ダメージ(400%)、さらにダメージがイチかバチかアップ(0~300%)",
		proc: [
			ChainStakesAttack(0, 3, 0),
			add_cond(ChainStakesAttack(4, 7, 0), when_enemyattr_match(2))
		],
	},
	ss2: {
		desc: "<ダメージ強化>1ターン溜めた後、1ターン火属性の味方の攻撃力をアップ(200%)",
		turn: 8,
		charged: 1,
		proc: [ss_enhance_all(2.0, 1, [1,0,0,0,0])],
	},
	Lawake: [
		Statusup(0,1000),
	],
}