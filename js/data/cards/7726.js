{
	name: "焔狼と流狼の双刃 サクト・オオガミ",
	cardno: 7726,
	imageno: 7974,
	hp: 2789,
	atk: 3675,
	cost: 46,
	attr: [0, 1],
	species: [1],
	islegend: true,
	as1: {
		desc: "<連撃>6チェインで敵単体を3回攻撃(500%)",
		proc: ChainDualAttack(5.0, 6, 3),
	},
	ss1: {
		desc: "<斬撃大魔術>3ターン溜めた後、スキル反射を無視し、火・水属性の3連撃、さらに連撃数分チェインプラス(300%)",
		turn: 2,
		charged: 3,
		proc: [ss_damage_slash(3.0, [0, 1], 3), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Attr_statusup(0, 200, [1, 1, 0, 0, 0, ]),
		Fastskill(1),
		NEFTJOD(30),
		Statusup(200, 0),
		Attr_statusup(200, 0, [1, 1, 0, 0, 0, ]),
		Abstate_invalid("discharge"),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<連撃>6チェインで敵単体を3回攻撃(600%)",
		proc: ChainDualAttack(6.0, 6, 3),
	},
	ss2: {
		desc: "<多弾魔術>スキル反射を無視し、敵単体へ火・水属性の5回連続ダメージ(計650％)",
		turn: 8,
		proc: [ss_damage_s(6.5, [0, 1], 5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
	],
}