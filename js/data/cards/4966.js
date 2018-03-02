{
	name: "煌る命の確率論 レウィス・ジェメル",
	cardno: 4966,
	imageno: 6701,
	hp: 2778,
	atk: 2253,
	cost: 35,
	attr: [0, -1],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Statusup(200, 0),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
	],
	as1: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ/+30％",
		proc: ChainEnhance(0.3, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<アンサースキル延長>3ターンの間、アンサースキル発動時間を5秒延長する",
		turn: 3,
		proc: [ss_astime_ext(5, 3)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(400, 0),
	],
	as2: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ/+60％",
		proc: ChainEnhance(0.6, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()]
	},
}