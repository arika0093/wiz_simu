{
	name: "継承と雷霆の レナ・イラプション",
	cardno: 4700,
	imageno: 6370,
	hp: 1403,
	atk: 4823,
	cost: 45,
	attr: [2, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 0, 1, 0, 0], 1),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Fastskill(1),
		NEFTJOD(30),
		Attr_statusup(100, 0, [0, 0, 1, 0, 0]),
		NEFTJOD(30),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
		Panel_boost([0, 0, 1, 0, 0], 2),
		Fastskill(2),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
	],
	as1: {
		desc: "<属性特効>7チェインで水属性の敵単体へ特効ダメージ/775％",
		proc: ChainAttrAttack(7.75, 7, [0, 1, 0, 0, 0])
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [0, 0, 1, 0, 0]),
	],
	as2: {
		desc: "<属性特効>7チェインで水属性の敵単体へ特効ダメージ/875％",
		proc: ChainAttrAttack(8.75, 7, [0, 1, 0, 0, 0])
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス2の効果を付与",
		turn: 5,
		proc: [panel_chainplus(2)]
	},
}