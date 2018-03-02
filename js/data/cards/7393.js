{
	name: "黎明の皇竜魔 ミネバ・クロード",
	cardno: 7393,
	imageno: 9448,
	hp: 3634,
	atk: 3642,
	cost: 57,
	attr: [2,3],
	species: [0],
	islegend: true,
	ape: "心竜天翔 Rising Dragon",
	as1: {
		desc: "<全体攻撃>敵全体へダメージ、5チェインで更にダメージアップ(150%/200%)",
		proc: [ChainAllAttack(1.5, 0), ChainAllAttack(2.0, 5)],
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ光属性のダメージ、さらに闇属性の敵には特効ダメージ(800%/1700%)",
		turn: 3,
		proc: [ss_damage_all(special_attr([0,0,0,0,1], 17, 8), [3])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(3),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		NEFTJOD(30),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([0,0,0,0,1,],20),
		Abstate_invalid("all_sealed"),
		Abstate_invalid(["poison", "attr_weaken", "death_limit"]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ、5チェインで更にダメージアップ(180%/230%)",
		proc: [ChainAllAttack(1.8, 0), ChainAllAttack(2.3, 5)],
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ光属性のダメージ、さらに闇属性の敵には特効ダメージ(800%/2200%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0,0,0,0,1], 22, 8), [3])],
	},
	Lawake: [
		Awake_dragonmode(2000, 1.5) ,
	],
}