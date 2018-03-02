{
	name: "星彩の祝福 クレティア・ブライユ",
	cardno: 7513,
	imageno: 9556,
	hp: 6321,
	atk: 1990,
	cost: 58,
	attr: [1,3],
	species: [9],
	disable: true,
	islegend: true,
	ape: "エステレラⅠ",
	as1: {
		desc: "<回復>水属性の味方のHPを回復(14%)",
		proc: Heal(0.14, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<精霊強化>味方全体で1ターン溜めた後、5ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力アップ(20%/20%/200%)◆発動中行動不可",
		turn: 5,
		charged: 1,
		isallcharge: true,
		proc: [ss_reinforcement_all(5, [
			ss_attr_guard([1, 1, 1, 1, 1], 0.2, 1, "RF"),
			ss_enhance_all(2, 1, [1, 1, 1, 1, 1], "RF"),
			ss_regenerate(0.2, 1, "RF")
		])],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ",1),
		Heal_afterbattle(10),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,0,1,0,]),
		NEFTJOD(30),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復(17%)",
		proc: Heal(0.17, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<精霊強化>味方全体で1ターン溜めた後、5ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力アップ(20%/20%/200%)◆発動中行動不可",
		turn: 5,
		charged: 1,
		isallcharge: true,
		proc: [ss_reinforcement_all(5, [
			ss_attr_guard([1, 1, 1, 1, 1], 0.2, 1, "RF"),
			ss_enhance_all(2, 1, [1, 1, 1, 1, 1], "RF"),
			ss_regenerate(0.2, 1, "RF")
		])],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}