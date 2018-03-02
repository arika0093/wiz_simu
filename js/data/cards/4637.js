{
	name: "闇の中で微笑む邪神 ルルベル",
	cardno: 4637,
	imageno: 6400,
	hp: 3676,
	atk: 2453,
	cost: 49,
	attr: [0, -1],
	species: [2],
	disable: true,
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 2),
		NEFTJOD(30),
		Spec_statusup(0, 200, [2]),
		Fastskill(2),
		Heal_afterbattle(10),
		Spec_statusup(200, 0, [2]),
	],
	as1: {
		desc: "<回復>火属性の味方のHPを回復、パネルの色が増す度さらに回復(1色：11％ / 2色：15％ / 3色：17％)",
		proc: ChainPanelsHeal(0.11, 0.15, 0.17, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 5,
		proc: [ss_delay_s(1)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復、パネルの色が増す度さらに回復(1色：13％ / 2色：17％ / 3色：20％)",
		proc: ChainPanelsHeal(0.13, 0.17, 0.20, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせ、20チェインで更に2遅らせる",
		turn: 10,
		proc: [ss_delay_s(ss_chain_cond(20, 4, 2))]
	},
}