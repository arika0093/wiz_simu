{
	name: "奪魂の怪炎 カーナ・リリ",
	cardno: 4852,
	imageno: 6587,
	hp: 3073,
	atk: 2732,
	cost: 41,
	attr: [0, -1],
	species: [9],
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Fastskill(1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(200, 0, [9]),
		Spec_statusup(0, 200, [9]),
		Panel_boost([1,0,0,0,0], 2),
	],
	as1: {
		desc: "<攻撃強化>5チェインで火属性の味方の攻撃力をアップ/+60％",
		proc: ChainEnhance(0.6, [1,0,0,0,0], 5)
	},
	ss1: {
		desc: "<アンサースキル延長>3ターンの間、アンサースキル発動時間を10秒延長する",
		turn: 5,
		proc: [ss_astime_ext(10, 3)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<攻撃強化>5チェインで火属性の味方の攻撃力をアップ/+90％",
		proc: ChainEnhance(0.9, [1,0,0,0,0], 5)
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()]
	},
}