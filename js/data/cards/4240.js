{
	name: "開かれた夏への扉 ヤチヨ&アッカ",
	cardno: 4240,
	imageno: 5946,
	hp: 2929,
	atk: 2457,
	cost: 48,
	attr: [1, 2],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
		NEFTJOD(30),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Awake_noeffect("経験値取得量アップ", 1),
		Spec_statusup(200, 0, [8, ]),
		Spec_statusup(0, 200, [8, ]),
		Fastskill(2),
	],
	as1: {
		desc: "<攻撃強化>5チェインで水・雷属性の味方の攻撃力をアップ/+60％",
		proc: ChainEnhance(0.6, [0,1,1,0,0], 5),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインプラス2の効果を付与",
		turn: 5,
		proc: [panel_chainplus(2)],
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
	],
	as2: {
		desc: "<攻撃強化>5チェインで水・雷属性の味方の攻撃力をアップ/+90％",
		proc: ChainEnhance(0.9, [0,1,1,0,0], 5),
	},
	ss2: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
}