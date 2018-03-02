{
	name: "明日を見つめるふたり 犬夜叉&かごめ",
	cardno: 4174,
	imageno: 5862,
	hp: 2502,
	atk: 2731,
	cost: 46,
	attr: [0, -1],
	species: [8],
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Spec_statusup(0, 200, [8]),
		Spec_statusup(200, 0, [8]),
		Awake_noeffect("経験値取得量アップ", 1),
	],
	as1: {
		desc: "<全体攻撃>3チェインで敵全体へダメージ/180％",
		proc: ChainAllAttack(1.8, 3),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせる",
		turn: 5,
		proc: [ss_delay_s(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ/180％",
		proc: ChainAllAttack(1.8, 0),
	},
	ss2: {
		desc: "<遅延大魔術>敵単体の攻撃ターンを1遅らせ、火属性のダメージ(180％)",
		turn: 6,
		proc: [ss_damage_s(1.8, [0]), ss_delay_s(1)],
	},
}