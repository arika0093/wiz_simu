{
	name: "凛眼に覇道を宿す ルドヴィカ・ロア",
	cardno: 6048,
	imageno: 7875,
	hp: 3989,
	atk: 2789,
	cost: 48,
	attr: [1, 0],
	species: [8],
	disable: true,
	islegend: true,
	ape: "覇眼戦線Ⅱ",
	as1: {
		desc: "<種族特効>4チェインでダメージアップ、戦士の敵へさらにダメージアップ(400%/700%)",
		proc: [ChainAttack(4.0, 4), ChainSpecAttack(7.0, 4, [8])],
	},
	ss1: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを2早め、敵単体の攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_s(2)],
	},
	awakes: [
		Panel_boost([0, 1, 0, 0, 0, ], 1),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
		Fastskill(1),
		Panel_boost([0, 1, 0, 0, 0, ], 2),
		NEFTJOD(30),
		Attr_statusup(200, 0, [1, 1, 0, 0, 0, ]),
		Fastskill(2),
		Attr_statusup(0, 200, [1, 1, 0, 0, 0, ]),
	],
	as2: {
		desc: "<種族特効>4チェインでダメージアップ、戦士の敵へさらにダメージアップ(500%/800%)",
		proc: [ChainAttack(5.0, 4), ChainSpecAttack(8.0, 4, [8])],
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを3早め、敵単体の攻撃ターンを3遅らせる",
		turn: 12,
		proc: [ss_skillboost(3), ss_delay_s(3)],
	},
	Lawake: [
		// L時 ダメージブロック(400/5t)
		Awake_SpecialSkill("ss_damageblock_all", 400, 5, "ringan"),
	],
}