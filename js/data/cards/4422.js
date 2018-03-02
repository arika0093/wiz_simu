{
	name: "超ビッグ魔道少女 リルム・ロロット",
	cardno: 4422,
	imageno: 6167,
	hp: 2328,
	atk: 2971,
	cost: 44,
	attr: [0, -1],
	species: [9],
	awakes: [
		Fastskill(1),
		Attr_relief([0, 0, 1, 0, 0], 10),
		Panel_boost([1,0,0,0,0], 1),
		Costdown(2),
		Fastskill(1),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Panel_boost([1,0,0,0,0], 1),
		Spec_statusup(0, 200, [9]),
		Spec_statusup(200, 0, [9]),
	],
	as1: {
		desc: "<属性特効>3チェインで雷属性の敵単体へ特効ダメージ、10チェインで更に特効ダメージ(3チェイン：350％ / 10チェイン：850％)",
		proc: [ChainAttrAttack(3.5, 3, [0,0,1,0,0]), ChainAttrAttack(8.5, 10, [0,0,1,0,0])],
	},
	ss1: {
		desc: "<シャッフル>ジャンルパネルをシャッフル",
		turn: 3,
		proc: [ss_panel_shuffle()]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<属性特効>3チェインで雷属性の敵単体へ特効ダメージ、10チェインで更に特効ダメージ(3チェイン：450％ / 10チェイン：950％)",
		proc: [ChainAttrAttack(4.5, 3, [0,0,1,0,0]), ChainAttrAttack(9.5, 10, [0,0,1,0,0])],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、チェインがプラス1の効果を付与",
		turn: 5,
		proc: [ss_panel_change([1,0,0,0,0]), panel_chainplus(1)],
	},
}