{
	name: "或る魔王 ミカエラ・セラフィム(L3)",
	cardno: 9434,
	imageno: 6876,
	hp: 2585,
	atk: 4003,
	cost: 54,
	attr: [0,4],
	species: [3],
	islegend: true,
	ape: "ロストエデンⅠ",
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(450%)、10チェインで更にダメージアップ(150%)",
		proc: [ChainAttack(4.5, 5), ChainAttack(6.0, 10)],
	},
	ss1: {
		desc: "<効果解除>スキル反射を無視し、敵全体のカウンターを解除する",
		turn: 4,
		proc: [ss_break_attackcounter("all")],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(4),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,0,1,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(550%)、10チェインで更にダメージアップ(150%)",
		proc: [ChainAttack(5.5, 5), ChainAttack(7.0, 10)],
	},
	ss2: {
		desc: "<効果解除大魔術>スキル反射を無視し、敵全体のカウンターを解除し、火属性のダメージ(300%)。HP20%以下でさらにスキル反射を解除し、ダメージアップ(600%)",
		turn: 6,
		proc: [ss_damage_all(ss_hp_less(0.2, 9, 3), [0]), ss_break_attackcounter("all"), ss_hp_less_skill(0.2, ss_break_skillcounter("all")), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,300, [1,0,0,0,0,]),
	],
}