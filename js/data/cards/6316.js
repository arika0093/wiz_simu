{
	name: "開かれた夏の扉 ヤチヨ&アッカ",
	cardno: 6316,
	imageno: 5946,
	hp: 3803,
	atk: 2745,
	cost: 55,
	attr: [1,2],
	species: [8],
	islegend: true,
	disable: true,
	ape: "幻魔特区スザクⅡ",
	as1: {
		desc: "<攻撃強化・ガード>5チェインで水・雷属性の味方の攻撃力をアップ(60%)し、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.6, [0,1,1,0,0], 5), as_guard(0.10, [1,1,1,1,1], 5)],
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインプラス2の効果を付与",
		turn: 5,
		proc: [panel_chainplus(2)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		NEFTJOD(30),
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Awake_noeffect("経験値取得量アップ", 1),
		Spec_statusup(200,0, [8,]),
		Spec_statusup(0,200, [8,]),
		Fastskill(2),
	],
	as2: {
		desc: "<攻撃強化・ガード>5チェインで水・雷属性の味方の攻撃力をアップ(90%)し、さらに全属性のダメージを10%軽減",
		proc: [ChainEnhance(0.9, [0,1,1,0,0], 5), as_guard(0.10, [1,1,1,1,1], 5)],
	},
	ss2: {
		desc: "<遅延>攻撃を3ターン遅らせ、20チェインで更に1遅らせる",
		turn: 10,
		proc: [ss_delay_all(ss_chain_cond(20, 4, 3))],
	},
	Lawake: [
		Statusup(0,400),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Attr_statusup(100,0, [0,1,1,0,0,]),
	],
}