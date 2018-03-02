{
	name: "マジカルアイドル エリーゼ・ハナエ",
	cardno: 3646,
	imageno: 2894,
	hp: 2567,
	atk: 2542,
	cost: 34,
	attr: [0, -1],
	species: [4],
	disable: true,
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(0, 200, [4]),
		Fastskill(2),
		Spec_statusup(200, 0, [4]),
		Spec_statusup(0, 200, [4]),
	],
	as1: {
		desc: "<種族数攻撃>天使と妖精の仲間の数だけダメージ大アップ(1体につき40％)",
		proc: ChainDeckSpecsAttack(0.40, [3, 4], 0)
	},
	ss1: {
		desc: "<割合削り>敵単体のHPを25％減少させる",
		turn: 9,
		proc: [ss_ratiodamage_s(0.25)],
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<種族数攻撃>天使と妖精の仲間の数だけダメージ絶大アップ(1体につき60％)",
		proc: ChainDeckSpecsAttack(0.60, [3, 4], 0)
	},
	ss2: {
		desc: "<割合削り>敵単体のHPを30％減少させる",
		turn: 12,
		proc: [ss_ratiodamage_s(0.3)],
	},
}