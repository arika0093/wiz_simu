{
	name: "時空の聖鎚 ユッカ・エンデ",
	cardno: 3796,
	imageno: 5400,
	hp: 2747,
	atk: 2841,
	cost: 43,
	attr: [0, -1],
	species: [9],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		NEFTJOD(30),
		Statusup(0, 200),
		Spec_statusup(200, 0, [1, 9]),
		Spec_statusup(0, 200, [1, 9]),
		Fastskill(2),
	],
	as1: {
		desc: "<攻撃強化>7チェインで火属性の味方の攻撃力をアップ/+80％",
		proc: ChainEnhance(0.8, [1,0,0,0,0], 7),
	},
	ss1: {
		desc: "<遅延>攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_delay_all(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<攻撃強化>7チェインで火属性の味方の攻撃力をアップ/+100％",
		proc: ChainEnhance(1.0, [1,0,0,0,0], 7),
	},
	ss2: {
		desc: "<遅延>攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
}