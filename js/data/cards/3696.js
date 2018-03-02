{
	name: "隔世の傍観者 サジェ・カムラナ",
	cardno: 3696,
	imageno: 5356,
	hp: 2665,
	atk: 2723,
	cost: 40,
	attr: [0, -1],
	species: [1],
	awakes: [
		Statusup(0, 100),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Statusup(100, 0),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(0, 200, [1]),
	],
	as1: {
		desc: "<攻撃強化>5チェインで火属性の味方の攻撃力を超極大アップ/+60％(+60%)",
		proc: ChainEnhance(0.6, [1,0,0,0,0], 5),
	},
	ss1: {
		desc: "<アンサースキル延長>3ターンの間、アンサースキル発動時間を10秒延長する",
		turn: 5,
		proc: [ss_astime_ext(10, 3)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(400, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<種族攻撃強化>5チェインで火属性の味方の攻撃力を超極大アップ、神族はさらにアップ(火：+60%/火＋同種族:+100%)",
		proc: [ChainEnhance(0.6, [1,0,0,0,0], 5), ChainSpecEnhance(1.0, [1,0,0,0,0], [1], 5)],
	},
	ss2: {
		desc: "<アンサースキル延長>5ターンの間、アンサースキル発動時間を15秒延長する",
		turn: 7,
		proc: [ss_astime_ext(15, 5)]
	},
}