{
	name: "愛を導く麗弓神 ステラ・フェリクス",
	cardno: 8282,
	imageno: 10430,
	hp: 3133,
	atk: 4003,
	cost: 58,
	attr: [2,0],
	species: [1],
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(300%)し、7チェインで更にダメージアップ(200%)、さらに敵のHPを吸収(4%)",
		proc: [add_cond(ChainAttack(3.0, 3), as_hp_absorption(0.04)), add_cond(ChainAttack(5.0, 7), as_hp_absorption(0.04))],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・雷属性化",
		turn: 3,
		proc: [ss_panel_change([1,0,1,0,0])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Heal_afterbattle(10),
		Fastskill(3),
		Attr_statusup_sattr(100,0, [1,0,1,0,0,], 100,0, [1,0,0,0,0,]),
		Attr_statusup_sattr(0,100, [1,0,1,0,0,], 0,100, [1,0,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(400%)し、7チェインで更にダメージアップ(200%)、さらに敵のHPを吸収(4%)",
		proc: [add_cond(ChainAttack(4.0, 3), as_hp_absorption(0.04)), add_cond(ChainAttack(6.0, 7), as_hp_absorption(0.04))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・雷属性化し、チェインがプラス2の効果と攻撃力アップの効果を付与(50%)",
		turn: 6,
		proc: [ss_panel_change([1,0,1,0,0]), panel_chainplus(2), panel_attackup(0.5)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Statusup(500,0),
		Attr_relief([0,1,0,0,0,],10),
	],
}