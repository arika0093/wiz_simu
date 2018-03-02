{
	name: "不思議な時に薫る歌 巡音ルカ",
	cardno: 4895,
	imageno: 6609,
	hp: 3102,
	atk: 3003,
	cost: 32,
	attr: [0, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(2),
		Panel_boost([1,0,0,0,0], 2),
	],
	as1: {
		desc: "<攻撃>3チェインで敵単体へのダメージアップ/350％",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火属性のダメージ、さらに味方全体のHPを回復(攻撃：150％ / 回復：20％)",
		turn: 6,
		proc: [ss_damage_all(1.5, [0]), ss_heal(0.2)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復・攻撃>敵単体へのダメージアップ、さらに火属性の味方のHPを回復(攻撃：350％ / 回復：5％)",
		proc: [ChainAttack(3.5, 0), Heal(0.05, [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<大魔術>敵全体へ火属性のダメージ、さらに味方全体のHPを回復(攻撃：200％ / 回復：25％)",
		turn: 9,
		proc: [ss_damage_all(2.0, [0]), ss_heal(0.25)],
	},
}