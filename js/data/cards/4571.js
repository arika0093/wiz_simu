{
	name: "迸る竜炎の朱 キャナル・エアガイツ",
	cardno: 4571,
	imageno: 6295,
	hp: 2965,
	atk: 3031,
	cost: 44,
	attr: [0, -1],
	species: [0],
	awakes: [
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 2),
		Statusup(200, 0),
		Statusup(0, 200),
		Costdown(4),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(2),
		NEFTJOD(30),
		Fastskill(2),
		Spec_statusup(0, 200, [0]),
	],
	as1: {
		desc: "<回復>火・水属性の味方を回復、HP50％以下でさらに回復(通常：11％ / HP50％以下：21％)",
		proc: [Heal(0.11, [1, 1, 0, 0, 0]), add_cond(Heal(0.21, [1, 1, 0, 0, 0]), when_hp_less(0.5))],
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25％軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(0, 400),
	],
	as2: {
		desc: "<回復>火・水属性の味方を回復、HP50％以下でさらに回復(通常：13％ / HP50％以下：23％)",
		proc: [Heal(0.13, [1, 1, 0, 0, 0]), add_cond(Heal(0.23, [1, 1, 0, 0, 0]), when_hp_less(0.5))],
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50％軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)]
	},
}