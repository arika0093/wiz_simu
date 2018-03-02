{
	name: "天地分かつ姉弟 ミカエラ&イザーク",
	cardno: 9882,
	imageno: 6580,
	hp: 2213,
	atk: 4520,
	cost: 57,
	attr: [0,2],
	species: [3],
	islegend: true,
	ape: "DL限定",
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(350%)、パネルの色が増す度ダメージアップ(100%、250%)",
		proc: ChainPanelsAttack(3.5, 4.5, 6.0, 3),
	},
	ss1: {
		desc: "<炸裂大魔術>スキル反射を無視し、敵単体へ火・雷属性のダメージ(700%)、さらに隣接する敵に火・雷属性のダメージ(700%)",
		turn: 7,
		proc: [ss_damage_explosion(7.0, [0,2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Fastskill(2),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Fastskill(2),
		Attr_relief([1,0,1,0,0,],10),
		Panel_boost([1,0,0,0,0,],4),
		Spec_statusup(0,200, [3,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,1,0,0,]),
		Spec_statusup(200,0, [3,]),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ(450%)、パネルの色が増す度ダメージアップ(100%、250%)",
		proc: ChainPanelsAttack(4.5, 5.5, 7.0, 3),
	},
	ss2: {
		desc: "<炸裂大魔術>スキル反射を無視し、敵単体へ火・雷属性のダメージ(1000%)、さらに隣接する敵に火・雷属性のダメージ(1000%)",
		turn: 10,
		proc: [ss_damage_explosion(10.0, [0,2]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_statusup(0,100, [1,0,1,0,0,]),
	],
}