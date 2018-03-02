{
	name: "ユニバーサルバニー シェリル",
	cardno: 5955,
	imageno: 7737,
	hp: 2245,
	atk: 4044,
	cost: 44,
	attr: [0,3],
	species: [9],
	islegend: true,
	ape: "コラボ(マクロス)",
	as1: {
		desc: "<チェイン攻撃>7チェインでダメージアップ(550%)",
		proc: ChainAttack(5.5, 7),
	},
	ss1: {
		desc: "<ダメージ強化>5ターン溜めた後、4ターン火属性の味方の攻撃力をアップ(200%)",
		turn: 5,
		charged: 5,
		proc: [ss_enhance_all(2.0, 4, [1, 0, 0, 0, 0])]
	},
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Fastskill(2),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>7チェインでダメージアップ(650%)",
		proc: ChainAttack(6.5, 7),
	},
	ss2: {
		desc: "<ダメージ強化>5ターン溜めた後、5ターン火属性の味方の攻撃力をアップ(250%)",
		turn: 8,
		charged: 5,
		proc: [ss_enhance_all(2.5, 5, [1, 0, 0, 0, 0])]
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,500),
	],
}