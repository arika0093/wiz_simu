{
	name: "恋は呪い エリス=マギア・シャルム",
	cardno: 7933,
	imageno: 10036,
	hp: 2325,
	atk: 6655,
	cost: 56,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "バレンタイン2017",
	as1: {
		desc: "<連撃>敵単体を6回連続攻撃、解答が早いほどさらにアップ(基本:250%, 3秒台:320%, 2秒台:390%, 1秒台:460%, 0秒台:530%)",
		proc: add_cond(ChainDualAttack(2.5, 0, 6), as_timedep(0.7)),
	},
	ss1: {
		desc: "<反動大魔術>スキル反射を無視し、敵全体に雷属性のダメージ(750%)◆スキル使用後、1ターン封印状態に",
		turn: 5,
		proc: [ss_damage_all(7.5, [2]), ss_allsealed_own(1), ss_ignore_skillcounter()],
	},
	as2: {
		desc: "<連撃>敵単体を6回連続攻撃、解答が早いほどさらにアップ(基本:350%, 3秒台:420%, 2秒台:490%, 1秒台:560%, 0秒台:630%)",
		proc: add_cond(ChainDualAttack(3.5, 0, 6), as_timedep(0.7)),
	},
	ss2: {
		desc: "<反動大魔術>スキル反射を無視し、敵全体へ雷属性のダメージ(1050%)◆スキル使用後、1ターン封印状態に",
		turn: 8,
		proc: [ss_damage_all(10.5, [2]), ss_allsealed_own(1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_relief([0,1,0,0,0,],20),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,400,[0,0,1,0,0,]),
		Attr_statusup(400,0,[0,0,1,0,0,]),
		NEFTJOD(30),
		Abstate_invalid("ss_sealed"),
		Fastskill(3),
		Awake_damage_multiple(1.1, 500)
	],
	Lawake: [
		Statusup(0,1000),
		Statusup(400,0),
		Attr_relief([1,1,1,1,1,],10),
	],
}