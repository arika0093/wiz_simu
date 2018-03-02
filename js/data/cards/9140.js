{
	name: "荒鷲の艦隊 ブルーノ・シャルルリエ",
	cardno: 9140,
	imageno: 11375,
	hp: 4355,
	atk: 2346,
	cost: 49,
	attr: [1,3],
	species: [8],
	islegend: true,
	ape: "ドルキマスⅢ",
	is_dist: true,
	as1: {
		desc: "<回復>水属性の味方を回復(8%)、複属性が光属性だとさらに回復(8%)",
		proc: [Heal(0.08, [0,1,0,0,0], 0), add_cond(Heal(0.16, [0,1,0,0,0], 0), when_subattr_match([0,1,0,0,0], [0,0,0,1,0]))],
	},
	ss1: {
		desc: "<複属性ダメージ強化>3ターン溜めた後、10ターンの間、水属性の攻撃力をアップ(150%)、複属性が光属性だとさらにアップ(250%)",
		turn: 10,
		charged: 3,
		proc: [ss_enhance_all_subattr(1.5, 4.0, 10, [0,1,0,0,0], [0,0,0,1,0])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Heal_afterbattle(10),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [0,0,0,1,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復>水属性の味方を回復(11%)、複属性が光属性だとさらに回復(8%)",
		proc: [Heal(0.11, [0,1,0,0,0], 0), add_cond(Heal(0.19, [0,1,0,0,0], 0), when_subattr_match([0,1,0,0,0], [0,0,0,1,0]))],
	},
	ss2: {
		desc: "<複属性ダメージ強化>1ターン溜めた後、10ターンの間、水属性の攻撃力をアップ(150%)、複属性が光属性だとさらにアップ(250%)",
		turn: 13,
		charged: 1,
		proc: [ss_enhance_all_subattr(1.5, 4.0, 10, [0,1,0,0,0], [0,0,0,1,0])],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [0,0,0,1,0,]),
	],
}