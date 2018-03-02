{
	// -------------------------
	// 抜け補完: クロマグⅤ
	// -------------------------
	name: "静かに燃える決意 イツキ&リンカ",
	cardno: 4510,
	imageno: 6192,
	hp: 2438,
	atk: 2015,
	cost: 36,
	attr: [0,1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(400%)",
		proc: ChainAttack(4, 5),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火・水属性のダメージ(150%)",
		turn: 8,
		proc: [ss_damage_all(1.5, [1,0])],
	},
	awakes: [
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Awake_noeffect("経験値取得量アップ", 1),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(0,100, [1,1,0,0,0,]),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(500%)",
		proc: ChainAttack(5, 5),
	},
	ss2: {
		desc: "<大魔術>敵全体へ火・水属性のダメージ(220%)",
		turn: 11,
		proc: [ss_damage_all(2.2, [1,0])],
	},
	Lawake: [
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Statusup(0,400),
	],
}