{
	name: "収穫者 ウシュガ&ウィアノーヴァ",
	cardno: 4274,
	imageno: 5961,
	hp: 2533,
	atk: 2433,
	cost: 53,
	attr: [0, -1],
	species: [2],
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(200, 0),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Spec_statusup(200, 0, [2]),
		Spec_statusup(0, 200, [2]),
		Spec_statusup(0, 200, [2]),
	],
	as1: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ、HP50％以下でさらにダメージアップ(通常：300％ / HP50％以下：1300％)",
		proc: multi_as(ChainAttrAttack(3, 0, [0,0,1,0,0]), add_cond(ChainAttrAttack(13, 0, [0,0,1,0,0]), when_hp_less(0.5))),
	},
	ss1: {
		desc: "<起死回生>1ターン、致死ダメージを受けたら一度だけHP15％で起死回生",
		turn: 8,
		proc: [ss_revival(0.15, 1)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		NEFTJOD(30),
	],
	as2: {
		desc: "<属性特効>雷属性の敵単体へ特効ダメージ、HP50％以下でさらにダメージアップ(通常：400％ / HP50％以下：1900％)",
		proc: multi_as(ChainAttrAttack(4, 0, [0,0,1,0,0]), add_cond(ChainAttrAttack(19, 0, [0,0,1,0,0]), when_hp_less(0.5))),
	},
	ss2: {
		desc: "<起死回生>2ターン、致死ダメージを受けたら一度だけHP15％で起死回生",
		turn: 10,
		proc: [ss_revival(0.15, 2)],
	},
}