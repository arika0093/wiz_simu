{
	// -------------------------
	// 雷属性 (thanks @rinshandream)
	// -------------------------
	name: "儚きとこしえ エリアナ・グロス",
	cardno: 4291,
	imageno: 5884,
	hp: 2222,
	atk: 3055,
	cost: 45,
	attr: [2, -1],
	species: [9],
	awakes: [
		Fastskill(1),
		Attr_relief([0, 1, 0, 0, 0], 10),
		Costdown(2),
		Fastskill(1),
		Costdown(2),
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0], 1),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0], 1),
		Spec_statusup(0, 200, [9]),
	],
	as1: {
		desc: "<パネル色数攻撃>5チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：650％)",
		proc: ChainPanelsAttack(0, 5.0, 6.5, 5)
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 6,
		proc: [ss_panel_change([1,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
	],
	as2: {
		desc: "<パネル色数攻撃>パネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：650％)",
		proc: ChainPanelsAttack(0, 5.0, 6.5, 0)
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、攻撃力アップの効果を付与(+20％)",
		turn: 8,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attackup(0.2)]
	},
}