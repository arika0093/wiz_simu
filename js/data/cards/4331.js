{
	name: "ポッキー大好き魔法使い リコ",
	cardno: 4331,
	imageno: 6044,
	hp: 2129,
	atk: 2803,
	cost: 37,
	attr: [0, -1],
	species: [9],
	ape: "グリコⅠ",
	awakes: [
		Awake_noeffect("ゴールド取得量アップ", 1),
		Statusup(0, 100),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Attr_relief([0, 0, 1, 0, 0], 10),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<パネル色数攻撃>5チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：650％)",
		proc: ChainPanelsAttack(0, 4.0, 6.5, 5),
	},
	ss1: {
		desc: "<ガード>5ターン雷属性ダメージを25％軽減する",
		turn: 7,
		proc: [ss_attr_guard([0,0,1,0,0], 0.25, 5)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<パネル色数攻撃>パネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：650％)",
		proc: ChainPanelsAttack(0, 4.0, 6.5, 0),
	},
	ss2: {
		desc: "<ガード>5ターン水・雷属性ダメージを25％軽減する",
		turn: 9,
		proc: [ss_attr_guard([0,1,1,0,0], 0.25, 5)]
	},
}