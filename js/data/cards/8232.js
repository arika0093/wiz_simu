{
	name: "煌炎の白銀狐 ゲルデハイラ・アルバ",
	cardno: 8232,
	imageno: 7868,
	hp: 3689,
	atk: 5098,
	cost: 54,
	attr: [0,-1],
	species: [5],
	islegend: true,
	ape: "覇眼戦線Ⅰ",
	as1: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効8連撃(400%)",
		proc: ChainDualAttrAttack(4.0, 0, 8, [0, 0, 1, 0, 0]),
	},
	ss1: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(15%)",
		turn: 6,
		proc: [ss_regenerate(0.15, 5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Spec_statusup(0,500, [5,]),
		Spec_statusup(500,0, [5,]),
		Fastskill(3),
		Abstate_invalid("ss_sealed"),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効8連撃(500%)",
		proc: ChainDualAttrAttack(5.0, 0, 8, [0, 0, 1, 0, 0]),
	},
	ss2: {
		desc: "<継続回復>1ターン溜めた後、味方HPを完全回復し、さらに5ターン味方全体を徐々に回復する(30%)",
		turn: 8,
		charged: 1,
		proc: [ss_heal(1), ss_regenerate(0.30, 5)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		NEFTJOD(30),
	],
}