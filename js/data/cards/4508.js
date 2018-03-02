{
	name: "蒼の指揮官 イツキ・マスグレイヴ",
	cardno: 4508,
	imageno: 6248,
	hp: 2532,
	atk: 2467,
	cost: 38,
	attr: [1, -1],
	species: [8],
	awakes: [
		Panel_boost([0, 1, 0, 0, 0], 1),
		Heal_afterbattle(10),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0], 1),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
		Fastskill(2),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0]),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
		Awake_noeffect("経験値取得量アップ", 1),
	],
	as1: {
		desc: "<全体攻撃>3チェインで敵全体へダメージ/180％",
		proc: ChainAllAttack(1.8, 3)
	},
	ss1: {
		desc: "<継続回復>3ターン味方全体を徐々に回復する(15％×3T)",
		turn: 6,
		proc: [ss_regenerate(0.15, 3)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ/180％",
		proc: ChainAllAttack(1.8, 0)
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(20％×5T)",
		turn: 9,
		proc: [ss_regenerate(0.2, 5)]
	},
}