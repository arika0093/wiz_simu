{
	name: "半神の幻視者 レイフェル・ユリーマ",
	cardno: 5143,
	imageno: 6886,
	hp: 4234,
	atk: 1557,
	cost: 43,
	attr: [2,4],
	species: [3],
	islegend: true,
	is_dist: true,
	ape: "ロストエデンⅠ",
	as1: {
		desc: "<回復>雷属性の味方のHPを回復、魔族・天使はさらに回復(9%/15%)",
		proc: [Heal(0.09, [0,0,1,0,0], 0), SpecHeal(0.15, [0,0,1,0,0], [2,3], 0)],
	},
	ss1: {
		desc: "<ガード>4ターン全属性のダメージを25%軽減",
		turn: 6,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 4)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Statusup(200,0),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Statusup(200,0),
		Statusup(0,200),
		Spec_statusup(200,0, [3,]),
		Fastskill(2),
	],
	as2: {
		desc: "<回復>雷属性の味方のHPを回復、魔族・天使はさらに回復(12%/18%)",
		proc: [Heal(0.12, [0,0,1,0,0], 0), SpecHeal(0.18, [0,0,1,0,0], [2,3], 0)],
	},
	ss2: {
		desc: "<ガード>4ターン全属性のダメージを35%軽減",
		turn: 10,
		proc: [ss_attr_guard([1,1,1,1,1], 0.35, 4)],
	},
	Lawake: [
		Statusup(700,0),
		Statusup(0,300),
	],
}