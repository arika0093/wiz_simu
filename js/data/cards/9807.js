{
	name: "旧世界の大賢 ハツセ・ノ・シマコ",
	cardno: 9807,
	imageno: 9913,
	hp: 2815,
	atk: 4167,
	cost: 57,
	attr: [1,0],
	species: [8],
	islegend: true,
	ape: "新説桃娘伝",
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃(250%)、解答が早いほどさらにアップ(70%)(上限:4段階)",
		proc: add_cond(ChainDualAttack(2.5, 0, 3), as_timedep(0.7)),
	},
	ss1: {
		desc: "<カウンター>1ターンの間、スキルカウンター待機(カウンター時、ダメージアップ(200%))",
		turn: 5,
		proc: [ss_skillcounter(2.0, 1)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],20),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [1,0,0,0,0,]),
		Fastskill(3),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃(350%)、解答が早いほどさらにアップ(70%)(上限:4段階)",
		proc: add_cond(ChainDualAttack(3.5, 0, 3), as_timedep(0.7)),
	},
	ss2: {
		desc: "<カウンター>1ターンの間、スキルカウンター待機(カウンター時、ダメージアップ(300%))",
		turn: 7,
		proc: [ss_skillcounter(3.0, 1)],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,100, [1,0,0,0,0,]),
		Abstate_invalid("all_sealed"),
	],
}