{
    	name: "大甘味王 ジャイアントカプリコ",
    	cardno: 4333,
    	imageno: 6047,
    	hp: 2535,
    	atk: 2333,
    	cost: 49,
    	attr: [2, -1],
    	species: [4],
    	awakes: [
            Statusup(0, 100),
            Fastskill(1),
            Costdown(2),
            Statusup(100, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Costdown(2),
            Fastskill(1),
            Spec_statusup(200, 0, [4, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [4, ]),
    	],
    	as1: {
    		desc: "<回復>デッキに雷属性が自分だけの時、味方全体を回復/25％",
    		proc: add_cond(Heal(0.25, [1,1,1,1,1], 0), when_deckattr_less([0,0,1,0,0], 1))
    	},
    	ss1: {
    		desc: "<継続回復>5ターン味方全体を徐々に回復する(15％×5T)",
    		turn: 9,
    		proc: [ss_regenerate(0.15, 5)],
    	},
    	islegend: true,
	is_dist: true,
	ape: "グリコⅠ",
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "<回復>デッキに雷属性が自分だけの時、味方全体を回復、妖精なら更に回復(通常：25％ / 妖精：50％)",
    		proc: [add_cond(Heal(0.25, [1,1,1,1,1], 0), when_deckattr_less([0,0,1,0,0], 1)), add_cond(SpecHeal(0.5, [1,1,1,1,1], [5], 0), when_deckattr_less([0,0,1,0,0], 1))]
    	},
    	ss2: {
    		desc: "<継続回復>5ターン味方全体を徐々に回復する(20％×5T)",
    		turn: 10,
    		proc: [ss_regenerate(0.20, 5)],
    	},
}