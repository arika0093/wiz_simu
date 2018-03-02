{
	name: "桜の魔法剣士 エニグマチェリー",
	cardno: 5816,
	imageno: 7621,
	hp: 3045,
	atk: 3562,
	cost: 47,
	attr: [2,3],
	species: [8],
	islegend: true,
	is_dist: true,
	alias: ["ハルコ"],
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、パネルの色が増す度ダメージアップ(350%/450%/600%)",
		proc: ChainPanelsAttack(3.5, 4.5, 6.0, 4),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷・光属性化",
		turn: 3,
		proc: [ss_panel_change([0,0,1,1,0])],
	},
	awakes: [
		Fastskill(1),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],2),
		Statusup(0,200),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、パネルの色が増す度ダメージアップ(450%/550%/700%)",
		proc: ChainPanelsAttack(4.5, 5.5, 7.0, 4),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを雷・光属性化し、攻撃力アップの効果を付与(50%)",
		turn: 6,
		proc: [ss_panel_change([0,0,1,1,0]), panel_attackup(0.50)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
}