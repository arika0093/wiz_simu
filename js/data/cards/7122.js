{
	name: "凶を追う蒼穹 アヴィン・シュミット",
	cardno: 7122,
	imageno: 6403,
	hp: 3723,
	atk: 4534,
	cost: 51,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "Blader",
	as1: {
		desc: "<種族特効>種族が物質・魔法生物・神族の敵単体へ特効ダメージ(800%)",
		proc: ChainSpecAttack(8.0, 0, [1,6,7]),
	},
	ss1: {
		desc: "<効果解除>敵単体のカウンターを解除する",
		turn: 4,
		proc: [ss_break_attackcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],1),
		Heal_afterbattle(10),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Spec_statusup(400,0, [8,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Spec_statusup(0,400, [8,]),
	],
	as2: {
		desc: "<種族特効>種族が物質・魔法生物・神族の敵単体へ特効ダメージ(900%)",
		proc: ChainSpecAttack(9.0, 0, [1,6,7]),
	},
	ss2: {
		desc: "<効果解除大魔術>スキル反射を無視し、敵単体のカウンターを解除し、水属性のダメージ(600%)",
		turn: 7,
		proc: [ss_break_attackcounter(), ss_damage_s(6.0, [1], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		NEFTJOD(30),
	],
}