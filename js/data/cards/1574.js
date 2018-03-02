{
	name: "朱雀神将 テウティ・スーシェン",
	cardno: 1574,
	imageno: 1727,
	hp: 2211,
	atk: 2043,
	cost: 43,
	attr: [0,-1],
	species: [1],
	islegend: false,
	disable: true,
	as1: {
		desc: "<攻撃強化>火・雷属性の味方の攻撃力を大アップ(20%)",
		proc: ChainEnhance(0.20, [1,0,1,0,0], 0),
	},
	ss1: {
		desc: "<蘇生>火・雷属性の味方をHP30％で蘇生",
		turn: 10,
		proc: [ss_resurrection([1,0,1,0,0], 0.30)],
	},
	awakes: [
		Costdown(2),
		NEFTJOD(30),
		Statusup(100,0),
		Costdown(2),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Attr_statusup(100,0, [1,0,0,0,0,]),
	],
}