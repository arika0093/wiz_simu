{
	name: "万象殲滅の覇王 ユーム・フロイト",
	cardno: 4151,
	imageno: 5875,
	hp: 2500,
	atk: 2500,
	cost: 40,
	attr: [0, -1],
	species: [2],
	awakes: [
		NEFTJOD(30),
		Statusup(0, 200),
		Statusup(200, 0),
		Costdown(2),
		Costdown(2),
		Statusup(0, 200),
		Fastskill(2),
		Spec_statusup(0, 200, [2, ]),
		Spec_statusup(0, 200, [2, ]),
	],
	as1: {
		desc: "<ギャンブル攻撃>ダメージがイチかバチかアップ/0～500％",
		proc: ChainStakesAttack(0, 5.0, 1),
	},
	ss1: {
		desc: "<割合削り>敵単体のHPを20％減少させる",
		turn: 6,
		proc: [ss_ratiodamage_s(0.20)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		NEFTJOD(30),
	],
	as2: {
		desc: "<ギャンブル攻撃>ダメージがイチかバチかアップ/0～700％",
		proc: ChainStakesAttack(0, 7.0, 1),
	},
	ss2: {
		desc: "<割合削り>敵単体のHPを25％減少させる",
		turn: 8,
		proc: [ss_ratiodamage_s(0.25)],
	},
}