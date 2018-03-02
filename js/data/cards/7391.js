{
	name: "竜の誇りを継ぐ者 ミネバ・クロード",
	cardno: 7391,
	imageno: 9446,
	hp: 3189,
	atk: 3703,
	cost: 55,
	attr: [2,3],
	species: [0],
	islegend: true,
	ape: "心竜天翔 Rising Dragon",
	as1: {
		desc: "<チェイン攻撃・属性特効>4チェインでダメージアップ、闇属性の敵だとさらにダメージアップ(400%/600%)",
		proc: [ChainAttack(4.0, 4), ChainAttrAttack(6.0, 4, [0,0,0,0,1])],
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(60%)",
		turn: 2,
		proc: [panel_attackup(0.6)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Awake_noeffect("経験値取得量アップ",1),
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 200,0, [0,0,0,1,0,]),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [0,0,0,1,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"])
	],
	as2: {
		desc: "<チェイン攻撃・属性特効>4チェインでダメージアップ、闇属性の敵だとさらにダメージアップ(500%/700%)",
		proc: [ChainAttack(5.0, 4), ChainAttrAttack(7.0, 4, [0,0,0,0,1])],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(100%)",
		turn: 4,
		proc: [panel_attackup(1.0)],
	},
	Lawake: [
		Statusup(0,1000),
	],
}