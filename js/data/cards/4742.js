{
	name: "導かれる白馬姫 リミーラ・ネール",
	cardno: 4742,
	imageno: 6462,
	hp: 1878,
	atk: 3733,
	cost: 42,
	attr: [2, 1],
	species: [9],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0], 1),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([0, 0, 1, 0, 0], 1),
		Attr_statusup(100, 0, [0, 1, 1, 0, 0]),
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Fastskill(2),
		Panel_boost([0, 0, 1, 0, 0], 2),
	],
	as1: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃/計350％",
		proc: ChainDualAttack(3.5, 3, 3)
	},
	ss1: {
		desc: "<割合削り>敵単体のHPを20％減少させる、5チェインを消費しさらに15％減少させる",
		turn: 9,
		proc: [ss_ratiodamage_s(ss_chain_cost(5, 0.35, 0.20))]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [0, 1, 1, 0, 0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃/計450％",
		proc: ChainDualAttack(4.5, 3, 3)
	},
	ss2: {
		desc: "<割合削り>敵単体のHPを25％減少させる、5チェインを消費しさらに15％減少させる",
		turn: 12,
		proc: [ss_ratiodamage_s(ss_chain_cost(5, 0.40, 0.25))]
	},
}