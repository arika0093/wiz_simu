{
	name: "傭兵仁義 フェリクス・シェーファー",
	cardno: 8299,
	imageno: 10447,
	hp: 6535,
	atk: 1555,
	cost: 50,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "GW2017",
	as1: {
		desc: "<回復>水属性の味方を回復(14％)、HP20%以下でさらに回復(39%)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), add_cond(Heal(0.38, [0,1,0,0,0], 0), when_hp_less(0.20))],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 7,
		proc: [ss_skillboost(2)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Abstate_invalid("heal_reverse"),
		Panel_boost([0,1,0,0,0,],2),
		Awake_noeffect("経験値取得量アップ",2),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Fastskill(4),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>水属性の味方を回復(17%)、HP20%以下でさらに回復(42%)",
		proc: [Heal(0.17, [0,1,0,0,0], 0), add_cond(Heal(0.42, [0,1,0,0,0], 0), when_hp_less(0.20))],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める。HP20%以下でさらに5早める。",
		turn: 9,
		proc: [ss_skillboost(ss_hp_less(0.2, 7, 2))],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
		NEFTJOD(30),
	],
}