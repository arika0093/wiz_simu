{
	name: "アンタッチャBULL ミィア・ヤガダ",
	cardno: 8815,
	imageno: 11014,
	hp: 2715,
	atk: 7045,
	cost: 51,
	attr: [0,-1],
	species: [2],
	islegend: true,
	ape: "聖サタニック女学院2",
	as1: {
		desc: "<分散攻撃>敵全体へ分散攻撃(150%)、デッキに単色の精霊が多いほど、さらにダメージアップ(70%)（上限:5段階)",
		proc: add_cond(ChainVarianceAttack(1.5,0), as_singleattr_num(0, 0.7)),
	},
	ss1: {
		desc: "<残滅大魔術>敵全体へ火属性のダメージ(600%)、さらに15ターンの間、火属性のダメージ(100%)",
		turn: 4,
		proc: [ss_continue_damage(6.0, 1.0, [0], 15)],
	},
	as2: {
		desc: "<分散攻撃>敵全体へ分散攻撃(250%)、デッキに単色の精霊が多いほど、さらにダメージアップ(70%)（上限:5段階)",
		proc: add_cond(ChainVarianceAttack(2.5,0), as_singleattr_num(0, 0.7)),
	},
	ss2: {
		desc: "<残滅大魔術>敵全体へ火属性のダメージ(600%)、さらに15ターンの間、火属性のダメージ(100%)",
		turn: 4,
		proc: [ss_continue_damage(6.0, 1.0, [0], 15)],

	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,400,[1,0,0,0,0,]),
		Attr_statusup_oattr(400,0,[1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup(0,400,[1,0,0,0,0,]),
		Attr_statusup(400,0,[1,0,0,0,0,]),
		Abstate_invalid("as_sealed"),
	],
	Lawake: [
		NEFTJOD(30),
		Statusup(0,1500),
	],
}