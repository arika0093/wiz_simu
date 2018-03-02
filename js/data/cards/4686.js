{
    	name: "高潔孤高の征魔士 ユピナ・レネ",
    	cardno: 4686,
    	imageno: 6445,
    	hp: 2623,
    	atk: 3386,
    	cost: 40,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            Statusup(0, 100),
            Costdown(2),
            NEFTJOD(30),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "<攻撃>デッキに水属性が自分だけの時、敵単体へダメージアップ/600％",
    		proc: add_cond(ChainAttack(6.0, 0), when_deckattr_less([0,1,0,0,0], 1))
    	},
    	ss1: {
    		desc: "<パネル変換>ジャンルパネルをALL属性化",
    		turn: 6,
    		proc: [ss_panel_change([1,1,1,0,0])]
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "<攻撃>デッキに水属性が自分だけの時、敵単体へダメージアップ/700％",
    		proc: add_cond(ChainAttack(7.0, 0), when_deckattr_less([0,1,0,0,0], 1))
    	},
    	ss2: {
    		desc: "<特殊パネル変換>ジャンルパネルをALL属性化し、チェインがプラス1の効果を付与",
    		turn: 8,
    		proc: [ss_panel_change([1,1,1,0,0]), panel_chainplus(1)],
    	},
}