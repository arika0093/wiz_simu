{
	name: "蛇骨の真王 トキオ&エクスアルバ",
	cardno: 3739,
	imageno: 5290,
	hp: 2357,
	atk: 3131,
	cost: 48,
	attr: [0, -1],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(200, 0),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(0, 200, [8]),
	],
	as1: {
		desc: "<属性特効>5チェインで雷属性の敵単体へ大ダメージ/650％",
		proc: ChainAttrAttack(6.5, 5, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<効果解除>敵全体のガードを解除する",
		turn: 6,
		proc: [ss_break_attrguard()]
	},
	islegend: true,
	Lawake: [
		NEFTJOD(30),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<属性特効>5チェインで雷属性の敵単体へ大ダメージ/750％",
		proc: ChainAttrAttack(7.5, 5, [0,0,1,0,0]),
	},
	ss2: {
		desc: "<効果解除>敵全体のガード&ダメージブロックを解除する",
		turn: 8,
		proc: [ss_break_attrguard(), ss_break_dblock()]
	},
}