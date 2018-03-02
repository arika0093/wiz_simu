{
	name: "一路邁進の烈風 オルネ･タンペート",
	cardno: 6477,
	imageno: 8417,
	hp: 2812,
	atk: 3721,
	cost: 45,
	attr: [2,-1],
	species: [9],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃・攻撃強化>雷属性の味方の攻撃力をアップし(30%)、4チェインでダメージアップ(200%)",
		proc: [ChainEnhance(0.30, [0,0,1,0,0], 0), ChainAttack(2.0, 4)],
	},
	ss1: {
		desc: "<割合削り>敵単体のHPを25%減少させる",
		turn: 9,
		proc: [ss_ratiodamage_s(0.25)],
	},
	awakes: [
		Costdown(2),
		Fastskill(2),
		Statusup(0,100),
		NEFTJOD(30),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Spec_statusup(0,200, [9,]),
		Guild_statusup(0, 1000),
		Guild_statusup(1000, 0),
	],
	as2: {
		desc: "<チェイン攻撃・攻撃強化>雷属性の味方の攻撃力をアップし(30%)、4チェインでダメージアップ(300%)",
		proc: [ChainEnhance(0.30, [0,0,1,0,0], 0), ChainAttack(3.0, 4)],
	},
	ss2: {
		desc: "<割合削り>スキル反射を無視し、敵単体のHPを25%減少させる",
		turn: 10,
		proc: [ss_ratiodamage_s(0.25), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(400,0),
	],
}