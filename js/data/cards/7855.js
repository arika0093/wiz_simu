{
	name: "旧世界の大賢 ハツセ・ノ・シマコ",
	cardno: 7855,
	imageno: 9913,
	hp: 2815,
	atk: 4025,
	cost: 56,
	attr: [1,0],
	species: [9],
	disable: true,
	islegend: true,
	ape: "桃娘伝Ⅱ",
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃、解答が早いほどさらにアップ(基本:250%, 3秒台:320%, 2秒台:390%, 1秒台:460%, 0秒台:530%)",
		proc: add_cond(ChainDualAttack(2.5, 0, 3), as_timedep(0.7)),
	},
	ss1: {
		desc: "<カウンター>1ターンの間、スキルカウンター待機(200%)",
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
		desc: "<連撃>敵単体を3回連続攻撃、解答が早いほどさらにアップ(基本:350%, 3秒台:420%, 2秒台:490%, 1秒台:560%, 0秒台:630%)",
		proc: add_cond(ChainDualAttack(3.5, 0, 3), as_timedep(0.7)),
	},
	ss2: {
		desc: "<カウンター>1ターンの間、スキルカウンター待機(300%)",
		turn: 7,
		proc: [ss_skillcounter(3.0, 1)],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [1,0,0,0,0,]),
		Awake_noeffect("all_sealed",0),
	],
}