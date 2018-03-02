{
	name: "前代未聞の大奇術 マギカ・ルーシュ",
	cardno: 5446,
	imageno: 7100,
	hp: 2701,
	atk: 4651,
	cost: 45,
	attr: [1, -1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0], 2),
		Attr_statusup(100, 0, [0, 1, 0, 0, 0]),
		Fastskill(2),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Attr_relief([0, 1, 0, 0, 0], 20),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
		NEFTJOD(30),
		Attr_statusup(200, 0, [0, 1, 0, 0, 0]),
		Attr_statusup(0, 200, [0, 1, 0, 0, 0]),
		Fastskill(2),
	],
	as1: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ(525％)",
		proc: ChainAttrAttack(5.25, 3, [1,0,0,0,0])
	},
	ss1: {
		desc: "<カウンター>5ターンの間スキルカウンター待機(300%)",
		turn: 12,
		proc: [ss_skillcounter(3, 5)]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [0, 1, 0, 0, 0]),
	],
	as2: {
		desc: "<属性特効>3チェインで火属性の敵単体へ特効ダメージ(625％)",
		proc: ChainAttrAttack(6.25, 3, [1, 0, 0, 0, 0])
	},
	ss2: {
		desc: "<カウンター>5ターンの間スキルカウンター待機(400%)",
		turn: 15,
		proc: [ss_skillcounter(4, 5)]
	},
}