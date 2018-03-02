{
	name: "変装して逃げようとした エソラゴト",
	cardno: 9803,
	imageno: 12158,
	hp: 4875,
	atk: 2018,
	cost: 49,
	attr: [0,2],
	species: [1],
	islegend: true,
	ape: "新説桃娘伝2",
	is_dist: true,
	as1: {
		desc: "<回復>火・雷属性の味方のHPを回復(13%)",
		proc: Heal(0.13, [1,0,1,0,0], 0),
	},
	ss1: {
		desc: "<割合削り>スキル反射を無視し、敵単体のHPを10%減少させる",
		turn: 12,
		proc: [ss_ratiodamage_s(0.1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Awake_secondfast(4),
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,0,1,0,0,]),
		Awake_secondfast(4),
	],
	as2: {
		desc: "<回復>火・雷属性の味方のHPを回復(16%)",
		proc: Heal(0.16, [1,0,1,0,0], 0),
	},
	ss2: {
		desc: "<割合削り>スキル反射を無視し、敵単体のHPを10%減少させる",
		turn: 12,
		proc: [ss_ratiodamage_s(0.1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(1000,0),
		NEFTJOD(30),
	],
}