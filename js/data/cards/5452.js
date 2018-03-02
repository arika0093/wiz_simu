{
	name: "兄妹正月 クィントゥス&レノックス",
	cardno: 5452,
	imageno: 7106,
	hp: 2654,
	atk: 3890,
	cost: 44,
	attr: [0, 2],
	species: [2],
	disable: true,
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Panel_boost([1, 0, 0, 0, 0], 2),
		Statusup(0, 200),
		Statusup(200, 0),
		NEFTJOD(30),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0]),
		NEFTJOD(30),
		Panel_boost([1, 0, 0, 0, 0], 2),
		Fastskill(2),
		Attr_statusup(0, 200, [1, 0, 1, 0, 0]),
	],
	as1: {
		desc: "<チェイン攻撃>6チェインでダメージアップ(500％)",
		proc: ChainAttack(5, 6)
	},
	ss1: {
		desc: "<反動大魔術>敵全体へ火属性ダメージ(300%)、自身に1t封印",
		turn: 3,
		proc: [ss_damage_all(3, [0]), ss_allsealed_own(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
	],
	as2: {
		desc: "<チェイン攻撃>6チェインでダメージアップ(600％)",
		proc: ChainAttack(6, 6)
	},
	ss2: {
		desc: "<反動大魔術>敵全体へ火属性ダメージ(500%)、自身に1t封印",
		turn: 5,
		proc: [ss_damage_all(5, [0]), ss_allsealed_own(1)]
	},
}