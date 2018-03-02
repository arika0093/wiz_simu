{
	name: "忠義に厚い隠密メイド ミー・マニィ",
	cardno: 7644,
	imageno: 9714,
	hp: 4321,
	atk: 1135,
	cost: 37,
	attr: [1,4],
	species: [8],
	islegend: true,
	ape: "その光は淡く碧く 第二章 儚き聖域",
	is_dist: true,
	as1: {
		desc: "<回復>味方全体のHPを回復、HP50%以下ならさらに回復(10%/18%)",
		proc: [Heal(0.10, [0,1,0,0,0], 0), add_cond(Heal(0.18, [0,1,0,0,0], 0), when_hp_less(0.50))],
	},
	ss1: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを毎ターン20%消費し、味方の攻撃力をアップ(150%)。さらに極稀にクリティカル",
		turn: 8,
		proc: [ss_boost_enhance_all(1.5, 4, 0.2, [1,1,1,1,1])],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ",1),
		Panel_boost([0,1,0,0,0,],1),
		Costdown(2),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復、HP50%以下ならさらに回復(12%/20%)",
		proc: [Heal(0.12, [0,1,0,0,0], 0), add_cond(Heal(0.20, [0,1,0,0,0], 0), when_hp_less(0.50))],
	},
	ss2: {
		desc: "<ブースト>5ターンの間、味方のMAXHPを毎ターン20%消費し、味方の攻撃力をアップ(200%)。さらに極稀にクリティカル",
		turn: 11,
		proc: [ss_boost_enhance_all(2.0, 4, 0.2, [1,1,1,1,1])],
	},
	Lawake: [
		Statusup(700,0),
	],
}