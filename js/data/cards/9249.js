{
	name: "狂イ光リ瞬ク フーガァー",
	cardno: 9249,
	imageno: 11514,
	hp: 3712,
	atk: 2515,
	cost: 47,
	attr: [2,3],
	species: [0],
	islegend: true,
	ape: "大魔道杯 the GATE",
	is_dist: true,
	as1: {
		desc: "<連撃>味方のMAXHP10%を使い、敵単体を3回連続攻撃(500%)",
		proc: add_cond(ChainDualAttack(5.0, 0, 3), as_consume_all(0.10)),
	},
	ss1: {
		desc: "<狂暴化> 5ターンの間、デタラメな方向に攻撃するようになるが、必ずクリティカルが出るようになる",
		turn: 1,
		proc: [ss_berserk_s(5)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Awake_noeffect("経験値取得量アップ",1),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(1),
		NEFTJOD(30),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,200, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 200,0, [0,0,0,1,0,]),
	],
	as2: {
		desc: "<連撃>味方のMAXHP10%を使い、敵単体を3回連続攻撃(600%)",
		proc: add_cond(ChainDualAttack(6.0, 0, 3), as_consume_all(0.10)),
	},
	ss2: {
		desc: "<多弾魔術>スキル反射を無視し、敵単体へ雷・光属性の5回連続ダメージ(650%)",
		turn: 7,
		proc: [ss_damage_s(6.5, [2,3], 5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(0,1000),
	],
}