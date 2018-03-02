{
	name: "煌きの艶麗華月 ユウギリ・アメノ",
	cardno: 4150,
	imageno: 5874,
	hp: 2433,
	atk: 2543,
	cost: 40,
	attr: [0, -1],
	species: [5],
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(2),
		Fastskill(1),
		Attr_relief([0, 1, 0, 0, 0], 10),
		Attr_relief([1,0,0,0,0], 10),
		Spec_statusup(0, 200, [5]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(200, 0, [5]),
	],
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ&敵HPを吸収する(攻撃：250％ / 吸収：敵に与えるダメージの5％)",
		proc: add_cond(ChainAttack(2.5, 0), as_hp_absorption(0.05)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<回復・攻撃>敵単体へのダメージアップ、さらに火属性の味方のHPを回復&敵HPを吸収する(攻撃：320％ / 回復：2％ / 吸収：与ダメージの5％)",
		proc: [add_cond(ChainAttack(3.2, 0), as_hp_absorption(0.05)), Heal(0.02, [1,0,0,0,0], 0)],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、回復の効果を付与(8％)",
		turn: 8,
		proc: [ss_panel_change([1,0,0,0,0]), panel_healally(0.08)],
	},
}