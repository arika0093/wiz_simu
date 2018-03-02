{
	name: "逆襲に染まった忘却 ゼノン",
	cardno: 4681,
	imageno: 6440,
	hp: 2612,
	atk: 3113,
	cost: 38,
	attr: [0, -1],
	species: [8],
	awakes: [
		Statusup(0, 200),
		Fastskill(1),
		Statusup(0, 100),
		Statusup(200, 0),
		Costdown(2),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 2),
		Spec_statusup(200, 0, [8]),
		Spec_statusup(0, 200, [8]),
	],
	as1: {
		desc: "<分散攻撃>敵全体へ分散攻撃/275％÷対象数",
		proc: ChainVarianceAttack(2.75, 0),
	},
	ss1: {
		desc: "<ガード>2ターン火・水属性のダメージを70％軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,0,0,0], 0.7, 2)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<分散攻撃>敵全体へ分散攻撃/375％÷対象数",
		proc: ChainVarianceAttack(3.75, 0),
	},
	ss2: {
		desc: "<ガード>3ターン火・水属性のダメージを70％軽減する",
		turn: 12,
		proc: [ss_attr_guard([1,1,0,0,0], 0.7, 3)]
	},
}