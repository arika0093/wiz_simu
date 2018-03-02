{
	name: "愛ゆえの暴虐 リヴェータ・イレ",
	cardno: 6892,
	imageno: 6782,
	hp: 3302,
	atk: 5501,
	cost: 55,
	attr: [0,-1],
	species: [8],
	disable: true,
	islegend: true,
	as1: {
		desc: "<属性特効連撃>3チェインで雷属性の敵単体へ特効3連撃(525%)",
		proc: ChainDualAttrAttack(5.25, 3, 3, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<ダメージ強化>3ターン自分の攻撃力をアップ(400%)",
		turn: 6,
		proc: [ss_enhance_own(4.0, 3)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],3),
		Fastskill(2),
		Statusup(200,0),
		Statusup(0,400),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Fastskill(2),
		Spec_statusup(0,200, [8,]),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Spec_statusup(200,0, [8,]),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<属性特効連撃>3チェインで雷属性の敵単体へ特効3連撃(625%)",
		proc: ChainDualAttrAttack(6.25, 3, 3, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<ダメージ強化>4ターン自分の攻撃力をアップ。HP20%以下の時、さらに自分の攻撃力をアップし、味方全体のHPを完全回復(600%/2500%)",
		turn: 8,
		proc: [ss_enhance_own(ss_hp_less(0.20, 25, 6.0), 4), ss_hp_less_skill(0.20, ss_heal(1.0))],
	},
	Lawake: [
		NEFTJOD(30),
		Statusup(500,0),
		Attr_statusup(0, 200, [1, 1, 1, 1, 1, ]),
		Awake_SpecialSkill("ss_heal", 0.5),
	],
}