{
	name: "火薬の貴公子 ボワット・ボー",
	cardno: 7280,
	imageno: 9305,
	hp: 2554,
	atk: 4012,
	cost: 41,
	attr: [0,-1],
	species: [9],
	islegend: false,
	ape: "大魔道杯 in レディアント",
	is_dist: true,
	as1: {
		desc: "<属性特効連撃>雷属性の敵単体へ特効5連撃(350%)",
		proc: ChainDualAttrAttack(3.5, 0, 5, [0,0,1,0,0]),
	},
	ss1: {
		desc: "<多弾魔術>敵単体へ火属性の10回連続ダメージ(400%)",
		turn: 6,
		proc: [ss_damage_s(4.0, [0], 10)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Statusup(0,200),
		Attr_relief([0,0,1,0,0,],10),
		Statusup(200,0),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}