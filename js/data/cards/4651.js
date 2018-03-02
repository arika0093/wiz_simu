{
	name: "破槍の獄炎帝 ブリューダイン・ギア",
	cardno: 4651,
	imageno: 6114,
	hp: 3183,
	atk: 2801,
	cost: 70,
	attr: [0, -1],
	species: [1],
	disable: true,
	awakes: [
		Statusup(200, 0),
		Fastskill(1),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0], 2),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(200, 0, [0, 1]),
		Fastskill(2),
		Spec_statusup(0, 200, [0, 1]),
		NEFTJOD(30),
	],
	as1: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、神族と龍族はさらにアップ(火：+30％ / 火+種族：+40％)",
		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.4, [1,0,0,0,0], [0, 1], 0)],
	},
	ss1: {
		desc: "<蘇生>味方全体のHPを回復し、さらに火属性の味方を30％で蘇生(回復：30％)",
		turn: 8,
		proc: [ss_heal(0.3), ss_resurrection([1,0,0,0,0], 0.3)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(700, 0),
		Statusup(0, 300),
	],
	as2: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、神族と龍族はさらにアップ(火：+50％ / 火+種族：+80％)",
		proc: [ChainEnhance(0.5, [1,0,0,0,0], 0), ChainSpecEnhance(0.8, [1,0,0,0,0], [0, 1], 0)],
	},
	ss2: {
		desc: "<蘇生>味方全体のHPを回復し、さらに火属性の味方を30％で蘇生、20チェインで100％蘇生(回復：50％)",
		turn: 10,
		proc: [ss_heal(0.5), ss_resurrection([1,0,0,0,0], ss_chain_cond(20, 1, 0.3))],
	},
}