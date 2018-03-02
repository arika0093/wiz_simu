{
	name: "時を呼ぶ ステイシー・マーキュリー",
	cardno: 80003,
	imageno: 5403,
	hp: 2431,
	atk: 3142,
	cost: 43,
	attr: [0, -1],
	species: [1],
	disable: true,
	awakes: [
		Statusup(0, 200),
		Spec_statusup(0, 200, [1]),
		Fastskill(1),
		Spec_statusup(200, 0, [1]),
		Panel_boost([1,0,0,0,0], 1),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Spec_statusup(200, 0, [1]),
		Spec_statusup(0, 200, [1]),
	],
	as1: {
		desc: "<快調攻撃>残りHPが80％以上でダメージアップ/300％",
		proc: add_cond(ChainAttack(3.0, 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,0])]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<チェイン攻撃>残りHPが80％以上でダメージアップ300％、7チェインで更にアップ700％",
		proc: [add_cond(ChainAttack(3.0, 0), when_hp_more(0.8)), add_cond(ChainAttack(7.0, 0), when_hp_more(0.8))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、チェインがプラス2の効果を付与",
		turn: 7,
		proc: [ss_panel_change([1,0,0,0,0]), panel_chainplus(2)],
	},
}