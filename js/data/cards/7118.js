{
	name: "闇の中で微笑む邪神 ルルベル",
	cardno: 7118,
	imageno: 6400,
	hp: 6076,
	atk: 2454,
	cost: 53,
	attr: [0,-1],
	species: [2],
	islegend: true,
	ape: "Blader",
	as1: {
		desc: "<回復>火属性の味方のHPを回復、パネルの色が増す度にさらに回復(11%/15%/17%)",
		proc: ChainPanelsHeal(0.11, 0.15, 0.17, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 3,
		proc: [ss_delay_s(1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Fastskill(1),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Spec_statusup(0,400, [2,]),
		Fastskill(2),
		Heal_afterbattle(10),
		Spec_statusup(400,0, [2,]),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復、パネルの色が増す度にさらに回復(13%/17%/20%)",
		proc: ChainPanelsHeal(0.13, 0.17, 0.20, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせ、20チェインで更に1遅らせる",
		turn: 10,
		proc: [ss_delay_s(ss_chain_cond(20, 4, 3))],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}