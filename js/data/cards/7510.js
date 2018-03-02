{
	name: "拳に秘めた情熱 リアラ・ローム",
	cardno: 7510,
	imageno: 9553,
	hp: 6021,
	atk: 1678,
	cost: 53,
	attr: [1,2],
	species: [9],
	disable: true,
	islegend: true,
	ape: "エステレラⅠ",
	as1: {
		desc: "<攻撃強化・ガード>5チェインで水・雷属性の味方の攻撃力をアップ(60%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.6, [0,1,1,0,0], 5), as_guard(0.1, [1,1,1,1,1], 5)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力を1000ダウンし、味方全体のHPを2000アップ(上限値:2000)、さらにHPを回復(50%)",
		turn: 5,
		proc: [ss_statusup_all([2000, -1000], [2000, 2000], -1), ss_heal(0.5)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Statusup(0,200),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Heal_afterbattle(10),
		Abstate_invalid("discharge"),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,1,0,0,]),
		Fastskill(3),
	],
	as2: {
		desc: "<攻撃強化・ガード>5チェインで水・雷属性の味方の攻撃力をアップ(90%)、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.9, [0,1,1,0,0], 5), as_guard(0.1, [1,1,1,1,1], 5)],
	},
	ss2: {
		desc: "<ガード>6ターン全属性のダメージを35%軽減し、さらにHPを回復(50%)",
		turn: 10,
		proc: [ss_attr_guard([1,1,1,1,1], 0.35, 6), ss_heal(0.5)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Statusup(500,0),
	],
}