{
	name: "想い、純色の雪華 ピノ・マリアンヌ",
	cardno: 9878,
	imageno: 5822,
	hp: 4018,
	atk: 4141,
	cost: 40,
	attr: [1, -1],
	species: [9],
	awakes: [
        Panel_boost([0, 1, 0, 0, 0, ], 4),
        Attr_statusup_oattr(0, 300, [0, 1, 0, 0, 0, ]),
        Attr_statusup_oattr(300, 0, [0, 1, 0, 0, 0, ]),
        Heal_afterbattle(10),
        Fastskill(1),
        NEFTJOD(30),
        Attr_statusup(0,300, [0,1,0,0,0,]),
        Attr_statusup(300,0, [0,1,0,0,0,]),
		Fastskill(2),
        Abstate_invalid("ss_sealed"),
	],
	as1: {
		desc: "<回復>味方全体のHPを回復(10%)、デッキに単色の精霊が多いほど、さらに回復(1%)（上限:5段階)",
		proc: add_cond(Heal(0.10, [1, 1, 1, 1, 1]), as_singleattr_num(0, 0.01)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(1000, 0),
		Statusup(0, 500),
	],
	as2: {
        desc: "<回復>味方全体のHPを回復(13%)、デッキに単色の精霊が多いほど、さらに回復(1%)（上限:5段階)",
        proc: add_cond(Heal(0.13, [1, 1, 1, 1, 1]), as_singleattr_num(0, 0.01)),
	},
	ss2: {
		desc: "<パネル変換>ジャンルパネルをALL属性化し、ダメージ25%軽減の効果を付与",
		turn: 7,
		proc: [ss_panel_change([1,1,1,0,0]), panel_attr_guard([1,1,1,1,1], 0.25)]
	},
}