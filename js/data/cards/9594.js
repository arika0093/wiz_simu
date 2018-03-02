{
	name: "終極の聖祈 シャロン＆テオドール",
	cardno: 9594,
	imageno: 11860,
	hp: 2675,
	atk: 4295,
	cost: 58,
	attr: [1,0],
	species: [3],
	islegend: true,
	ape: "その光は淡く碧く 最終章 終極の聖祈",
	is_dist: true,
	as1: {
		desc: "<複属性攻撃強化>水属性の攻撃力をアップ(10%)、複属性が火属性だとさらにアップ(90%)",
		proc: ChainEnhance_SubAttr(0.1, 1.0, [0,1,0,0,0], [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ火・水属性のダメージ(120%)",
		turn: 4,
		proc: [ss_damage_all(1.2, [1, 0]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		Costdown(20),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Fastskill(4),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Fastskill(4),
		Awake_noeffect("心眼",1),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<複属性攻撃強化>水属性の攻撃力をアップ(40%)、複属性が火属性だとさらにアップ(90%)",
		proc: ChainEnhance_SubAttr(0.4, 1.5, [0,1,0,0,0], [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<複属性ダメージ強化>4ターンの間、水属性の攻撃力をアップ(50%)、複属性が火属性だとさらにアップ(100%)",
		turn: 8,
		proc: [ss_enhance_all_subattr(0.5, 1.5, 4, [0,1,0,0,0], [1,0,0,0,0])],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [1,0,0,0,0,]),
		Statusup(0,500),
		Abstate_invalid([
			"as_sealed", "ss_sealed", "poison", "attr_weaken",
			"death_limit", "all_sealed", "heal_reverse", "panic_shout", "attr_reverse"
		]),
	],
}