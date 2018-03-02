{
	// -------------------------
	// 追加: 天井岬2
	// -------------------------
	name: "思い出を胸に秘める ファム・リリー",
	cardno: 89001,
	imageno: 7265,
	hp: 3434,
	atk: 3348,
	cost: 48,
	attr: [1,2],
	species: [9],
	islegend: true,
	ape: "天上岬Ⅱ",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(400%)",
		proc: ChainAttack(4, 4),
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを500アップ",
		turn: 5,
		proc: [ss_statusup_all([500, 500], [2000, 2000], -1)],
	},
	awakes: [
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_relief([1,0,0,0,0,],20),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Attr_statusup(100,0, [0,1,1,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(500%)",
		proc: ChainAttack(5, 4),
	},
	ss2: {
		desc: "<ステータスアップ>味方全体の攻撃力とHPを1000アップ",
		turn: 8,
		proc: [ss_statusup_all([1000, 1000], [2000, 2000], -1)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		NEFTJOD(30),
	],
}