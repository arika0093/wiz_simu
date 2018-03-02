{
	name: "知恵の翼、天高く レメモ・ビブリ",
	cardno: 7313,
	imageno: 9333,
	hp: 3108,
	atk: 2756,
	cost: 45,
	attr: [2,3],
	species: [3],
	islegend: true,
	ape: "訣別のクロニクル",
	is_dist: true,
	as1: {
		desc: "<種族数攻撃>天使の仲間の数だけダメージアップ、パネルの色が増す度さらにアップ(40%/60%/80%)",
		proc: [ChainDeckSpecsAttack(0.4, [3], 0), add_cond(ChainDeckSpecsAttack(0.6, [3], 0), as_panel_over2()), add_cond(ChainDeckSpecsAttack(0.8, [3], 0), as_panel_over3())],
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを雷・光属性化",
		turn: 4,
		proc: [ss_panel_change([0,0,1,1,0])],
	},
	awakes: [
		Statusup(0,200),
		Statusup(200,0),
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Statusup(0,200),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Fastskill(2),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,100, [0,0,0,1,0,]),
		Spec_statusup(300,0, [3,]),
	],
	as2: {
		desc: "<種族数攻撃>天使の仲間の数だけダメージアップ、パネルの色が増す度さらにアップ(60%/80%/100%)",
		proc: [ChainDeckSpecsAttack(0.6, [3], 0), add_cond(ChainDeckSpecsAttack(0.8, [3], 0), as_panel_over2()), add_cond(ChainDeckSpecsAttack(1.0, [3], 0), as_panel_over3())],
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()],
	},
	Lawake: [
		Abstate_invalid("as_sealed"),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}