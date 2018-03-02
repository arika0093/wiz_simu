{
	name: "双牙剛炎 ラディウス・レヴィス",
	cardno: 8983,
	imageno: 11191,
	hp: 3505,
	atk: 6735,
	cost: 54,
	attr: [0,-1],
	species: [8],
	islegend: true,
	ape: "喰牙RIZEⅡ",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(300%)、HP50%以上でさらにダメージアップ(200%)",
		proc: [ChainAttack(3.0, 4), add_cond(ChainAttack(5.0, 4), when_hp_more(0.5))],
	},
	ss1: {
		desc: "<一閃斬撃大魔術>スキル反射を無視し、敵全体へ火属性のダメージ(650%)、さらに攻撃した敵の数が多いほどチェインプラス(上限:5体、最大31チェイン) ",
		turn: 8,
		proc: [ss_damage_slash_all(6.5, [0]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(0,400, [1,0,0,0,0,]),
		Attr_statusup_oattr(400,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Awake_noeffect("経験値取得量アップ",2),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(400%)、HP50%以上でさらにダメージアップ(200%)",
		proc: [ChainAttack(4.0, 4), add_cond(ChainAttack(6.0, 4), when_hp_more(0.5))],
	},
	ss2: {
		desc: "<一閃斬撃大魔術>スキル反射を無視し、敵全体へ火属性のダメージ(950%)、さらに攻撃した敵の数が多いほどチェインプラス(上限:5体、最大31チェイン) ",
		turn: 11,
		proc: [ss_damage_slash_all(9.5, [0]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}