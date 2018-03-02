{
	name: "煌眼覇軍の女帝 リヴェータ・イレ",
	cardno: 4292,
	imageno: 5885,
	hp: 2459,
	atk: 2843,
	cost: 45,
	attr: [0, -1],
	species: [8],
	disable: true,
	awakes: [
		Costdown(2),
		Fastskill(1),
		Attr_relief([1,0,0,0,0], 10),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(2),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Spec_statusup(0, 200, [8]),
		Panel_boost([1,0,0,0,0], 1),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0], 1),
	],
	as1: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ/400％",
		proc: ChainAttrAttack(4.0, 0, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Statusup(500, 0),
	],
	as2: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ/500％",
		proc: ChainAttrAttack(5.0, 0, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<遅延大魔術>攻撃ターンを3遅らせ、敵全体へ火属性のダメージ(180％)",
		turn: 15,
		proc: [ss_delay_all(3), ss_damage_all(1.8, [0])],
	},
}