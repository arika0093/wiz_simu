{
	name: "業熱の召竜ロード マサキ・アシカガ",
	cardno: 5575,
	imageno: 7371,
	hp: 2263,
	atk: 4121,
	cost: 43,
	attr: [0,-1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<属性特効>5チェインで雷属性の敵単体へ特効ダメージ(650%)",
		proc: ChainAttrAttack(6.5, 5, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火属性のダメージ(180%)",
		turn: 8,
		proc: [ss_damage_all(1.8, [0])],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],1),
		Costdown(2),
		Fastskill(2),
		Statusup(0,200),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Spec_statusup(0,200, [9,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Spec_statusup(200,0, [9,]),
	],
	as2: {
		desc: "<属性特効>5チェインで雷属性の敵単体へ特効ダメージ(750%)",
		proc: ChainAttrAttack(7.5, 5, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<遅延大魔術>敵全体の攻撃ターンを1遅らせ、火属性のダメージ(180%)",
		turn: 10,
		proc: [ss_damage_all(1.8, [0]), ss_delay_all(1)],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}