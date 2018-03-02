{
	name: "アイドラグナー エクセリア・クルス",
	cardno: 8426,
	imageno: 10576,
	hp: 2645,
	atk: 4173,
	cost: 56,
	attr: [1,3],
	species: [0],
	islegend: true,
	ape: "アイドルキャッツ！",
	as1: {
		desc: "<属性特効連撃・複属性攻撃強化>火・闇属性の敵単体へ特効3連撃(300%)、さらに水属性の攻撃力をアップ(10%)、複属性が光属性だとさらにアップ(30%)",
		proc: [ChainDualAttrAttack(3.0, 0, 3, [1,0,0,0,1]), ChainEnhance_SubAttr(0.1, 0.4, [0,1,0,0,0], [0,0,0,1,0], 0)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水・光属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [1,3]), ss_ignore_skillcounter()],
	},
	awakes: [
		Costdown(20),
		Fastskill(3),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],4),
		NEFTJOD(60),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [0,0,0,1,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<属性特効連撃・複属性攻撃強化>火・闇属性の敵単体へ特効3連撃(400%)、さらに水属性の攻撃力をアップ(10%)、複属性が光属性だとさらにアップ(30%)",
		proc: [ChainDualAttrAttack(4.0, 0, 3, [1,0,0,0,1]), ChainEnhance_SubAttr(0.1, 0.4, [0,1,0,0,0], [0,0,0,1,0], 0)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水・光属性のダメージ(150%)。HP20%以下の時、さらにダメージアップ(1500%)し、味方全体のHPを完全回復",
		turn: 6,
		proc: [ss_damage_all(ss_hp_less(0.2, 16.5, 1.5), [1,3]), ss_hp_less_skill(0.2, ss_heal(1)), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_relief([1,1,1,1,1,],10),
	],
}