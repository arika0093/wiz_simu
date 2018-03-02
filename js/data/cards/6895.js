{
	name: "輝きは雨の後で ウェリサマ&ハノメ",
	cardno: 6895,
	imageno: 8956,
	hp: 2658,
	atk: 3689,
	cost: 52,
	attr: [1,0],
	species: [1],
	islegend: true,
	ape: "大魔道杯 in YAOYORO Z",
	is_dist: true,
	as1: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃、10チェインでさらにダメージアップ(350%/550%)",
		proc: [ChainDualAttack(3.5, 4, 3),ChainDualAttack(5.5, 10, 3),],
	},
	ss1: {
		desc: "<多弾魔術>1ターン溜めた後、スキル反射を無視し、敵単体へ水・火属性の7回連続ダメージ(450%)",
		turn: 3,
		charged: 1,
		proc: [ss_damage_s(4.5, [1, 0], 7), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0,200),
		Fastskill(1),
		Awake_noeffect("経験値取得量アップ",1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],2),
		Abstate_invalid("ss_sealed"),
		Spec_statusup(400,0, [1,]),
		Spec_statusup(0,400, [1,]),
	],
	as2: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃、10チェインでさらにダメージアップ(450%/650%)",
		proc: [ChainDualAttack(4.5, 4, 3),ChainDualAttack(6.5, 10, 3),],
	},
	ss2: {
		desc: "<多弾魔術>1ターン溜めた後、スキル反射を無視し、敵単体へ水・火属性の7回連続ダメージ(650%)",
		turn: 5,
		charged: 1,
		proc: [ss_damage_s(6.5, [1, 0], 7), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [1,1,0,0,0,]),
	],
}