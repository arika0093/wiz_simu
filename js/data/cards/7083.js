{
	name: "マーチ&デストロイ ナディ・ロイス",
	cardno: 7083,
	imageno: 9089,
	hp: 4301,
	atk: 2504,
	cost: 50,
	attr: [0,2],
	species: [8],
	islegend: true,
	ape: "大魔道杯 in ドルキマス",
	is_dist: true,
	as1: {
		desc: "<回復>味方全体のHPを回復(14%)",
		proc: Heal(0.14, [1,1,1,1,1], 0),
	},
	ss1: {
		desc: "<ブースト>4ターンの間味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ、平均解答が早いほどさらにアップ。さらに極稀にクリティカル(基本:90%, 3秒台:130%, 2秒台:170%, 1秒台:210%, 0秒台:250%)",
		turn: 7,
		proc: [ss_boost_enhance_all(ss_answertime(0.9, 0.4), 4, 0.1, [1,1,1,1,1])]
	},
	awakes: [
		Fastskill(1),
		Awake_noeffect("経験値取得量アップ",1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([0,1,0,0,0,],10),
		Attr_statusup(100,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Fastskill(2),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,0,1,0,0,]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(17%)",
		proc: Heal(0.17, [1,1,1,1,1], 0),
	},
	ss2: {
		desc: "<ブースト>5ターンの間味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ、平均解答が早いほどさらにアップ。さらに極稀にクリティカル(基本:140%, 3秒台:180%, 2秒台:220%, 1秒台:260%, 0秒台:300%)",
		turn: 10,
		proc: [ss_boost_enhance_all(ss_answertime(1.4, 0.4), 5, 0.1, [1,1,1,1,1])]
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Statusup(500,0),
	],
}