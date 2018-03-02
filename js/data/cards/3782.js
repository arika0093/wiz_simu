{
    name: "神滅叛帝 テスタメント・ヘイル",
    cardno: 3782,
    imageno: 5414,
    hp: 2386,
    atk: 2743,
    cost: 36,
    attr: [1, -1],
    species: [2],
    awakes: [
        Statusup(200, 0),
        Statusup(0, 100),
        Statusup(0, 200),
        Statusup(100, 0),
        Spec_statusup(0, 100, [2, ]),
        Panel_boost([0, 1, 0, 0, 0, ], 1),
        Fastskill(2),
        Spec_statusup(0, 200, [2, ]),
        Spec_statusup(0, 200, [2, ]),
    ],
    as1: {
    	desc: "<連撃>3チェインで敵単体を3回連続攻撃、パネルの色が増す度さらにダメージアップ(1色：計200％、2色：計300％、3色：計450％)",
    	proc: ChainPanelsDualAttack(2.0, 3.0, 4.5, 3, 3)
    },
    ss1: {
    	desc: "<大魔術>敵全体へ水属性のダメージ(150％)",
    	turn: 7,
    	proc: [ss_damage_all(1.5, [1])],
    },
    islegend: true,
    Lawake: [
        Statusup(0, 400),
        Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    ],
    as2: {
    	desc: "<連撃>3チェインで敵単体を3回連続攻撃、パネルの色が増す度さらにダメージアップ(1色：計300％、2色：計400％、3色：計550％)",
    	proc: ChainPanelsDualAttack(3.0, 4.0, 5.5, 3, 3)
    },
    ss2: {
    	desc: "<大魔術>敵全体へ水属性のダメージ(220％)",
    	turn: 10,
    	proc: [ss_damage_all(2.2, [1])],
    },
}