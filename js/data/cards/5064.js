{
	name: "海風流るる焔々と セイ&スオウ",
	cardno: 5064,
	imageno: 6804,
	hp: 2650,
	atk: 3323,
	cost: 45,
	attr: [1, 0],
	species: [1],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0], 1),
		Fastskill(1),
		Spec_statusup(0, 200, [1]),
		NEFTJOD(30),
		Attr_statusup(0, 200, [1, 1, 0, 0, 0]),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Attr_statusup(200, 0, [1, 1, 0, 0, 0]),
		Spec_statusup(200, 0, [1]),
	],
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(700％)",
		proc: ChainAttack(7.0, 10)
	},
	ss1: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵単体へ水属性ダメージ(240%×味方数)",
		turn: 10,
		proc: [ss_damage_s(ss_consume_all_cond(2.4, 0.5), [1], 1)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(800％)",
		proc: ChainAttack(8.0, 10)
	},
	ss2: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵単体へダメージ(300%×味方数)",
		turn: 12,
		proc: [ss_damage_s(ss_consume_all_cond(3.0, 0.5), [1], 1)]
	},
}