{
	name: "クィーン・オブ・アーモンド ファム",
	cardno: 4341,
	imageno: 6097,
	hp: 2323,
	atk: 2288,
	cost: 50,
	attr: [0, 2],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0]),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		NEFTJOD(30),
		Awake_noeffect("経験値取得量アップ", 1),
		Fastskill(2),
		Spec_statusup(0, 200, [9]),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃/計450％",
		proc: ChainDualAttack(4.5, 5, 3),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃/計550％",
		proc: ChainDualAttack(5.5, 5, 3),
	},
	ss2: {
		desc: "<遅延>攻撃ターンを2遅らせ、20チェインで更に2遅らせる",
		turn: 10,
		proc: [ss_delay_all(ss_chain_cond(20, 4, 2))]
	},
}