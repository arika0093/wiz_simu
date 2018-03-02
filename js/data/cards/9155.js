{
	name: "救世の星 レグル&サルヴァトル",
	cardno: 9155,
	imageno: 11391,
	hp: 2525,
	atk: 7745,
	cost: 54,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "幻魔特区RELOADED",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(350%)、リーダー時さらにアップ(250%)",
		proc: [ChainAttack(3.5, 4), ChainAttack_Leader(6.0, 4)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ無属性のダメージ(750%)",
		turn: 7,
		proc: [ss_damage_all(7.5, [-1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_relief([1,0,0,0,0,],20),
		Awake_secondfast(5),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(450%)、リーダー時さらにアップ(250%)",
		proc: [ChainAttack(4.5, 4), ChainAttack_Leader(7.0, 4)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ無属性のダメージ(750%)",
		turn: 7,
		proc: [ss_damage_all(7.5, [-1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
		NEFTJOD(60),
	],
}