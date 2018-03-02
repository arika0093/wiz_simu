{
	name: "本性は小悪魔 イーニア・ストラマー",
	cardno: 9271,
	imageno: 11536,
	hp: 3125,
	atk: 7145,
	cost: 54,
	attr: [0,-1],
	species: [9],
	islegend: true,
	ape: "UHG",
	as1: {
		desc: "<分散攻撃>敵全体へ分散攻撃(150%)、デッキに単色の精霊が多いほど、さらにダメージアップ(70%)（上限:5段階)",
		proc: add_cond(ChainVarianceAttack(1.5,0), as_singleattr_num(0, 0.7)),
	},
	ss1: {
		desc: "<炸裂大魔術>スキル反射を無視し、敵単体へ火属性のダメージ(950%)、さらに隣接する敵に火属性のダメージ(950%)",
		turn: 7,
		proc: [ss_damage_explosion(9.5, [0]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(60),
		Fastskill(3),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Abstate_invalid("as_sealed"),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<分散攻撃>敵全体へ分散攻撃(250%)、デッキに単色の精霊が多いほど、さらにダメージアップ(70%)（上限:5段階)",
		proc: add_cond(ChainVarianceAttack(2.5,0), as_singleattr_num(0, 0.7)),
	},
	ss2: {
		desc: "<炸裂大魔術>スキル反射を無視し、敵単体へ火属性のダメージ(1250%)、さらに隣接する敵に火属性のダメージ(1250%)",
		turn: 10,
		proc: [ss_damage_explosion(12.5, [0]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,2000),
	],
}