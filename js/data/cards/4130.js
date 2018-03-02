{
	name: "貫く心のド真中 マトイ・ナヒサコ",
	cardno: 4130,
	imageno: 5804,
	hp: 2321,
	atk: 3122,
	cost: 48,
	attr: [1, -1],
	species: [1],
	disable: true,
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Spec_statusup(200, 0, [1]),
		Fastskill(1),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0], 1),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
		Spec_statusup(200, 0, [1]),
		Fastskill(2),
		Spec_statusup(0, 200, [1]),
	],
	as1: {
		desc: "<チェイン攻撃>8チェインでダメージアップ/600％",
		proc: ChainAttack(6.0, 8)
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス2の効果を付与",
		turn: 5,
		proc: [panel_chainplus(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
	],
	as2: {
		desc: "<チェイン攻撃>8チェインでダメージアップ/700％",
		proc: ChainAttack(7.0, 8)
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス3の効果を付与",
		turn: 8,
		proc: [panel_chainplus(3)]
	},
}