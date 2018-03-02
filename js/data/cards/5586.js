{
	name: "甘味同盟 アリエッタ&シャルロット",
	cardno: 5586,
	imageno: 7442,
	hp: 2804,
	atk: 3593,
	cost: 42,
	attr: [0,2],
	species: [9],
	islegend: true,
	disable: true,
	as1: {
		desc: "<分散攻撃>4チェインで敵全体へ分散攻撃(450%)",
		proc: ChainVarianceAttack(4.5, 4),
	},
	ss1: {
		desc: "<斬撃大魔術>スキル反射を無視し、火・雷属性の3連撃、さらに連撃数分チェインプラス(180%)",
		turn: 7,
		proc: [ss_damage_slash(1.8, [0,2], 3), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Attr_relief([0,1,0,0,0,],20),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<分散攻撃>4チェインで敵全体へ分散攻撃(550%)",
		proc: ChainVarianceAttack(5.5, 4),
	},
	ss2: {
		desc: "<斬撃大魔術>スキル反射を無視し、火・雷属性の5連撃、さらに連撃数分チェインプラス(380%)",
		turn: 10,
		proc: [ss_damage_slash(3.8, [0,2], 5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [1,0,1,0,0,]),
	],
}