{
	name: "聖なる終戦騎士 セレサ・ラグヌス",
	cardno: 7824,
	imageno: 7222,
	hp: 3756,
	atk: 5234,
	cost: 56,
	attr: [1,-1],
	species: [8],
	islegend: true,
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ、リーダー時さらにアップ(350%/500%)",
		proc: [ChainAttack(3.5, 3), ChainAttack_Leader(5.0, 3)],
	},
	ss1: {
		desc: "<ガード>3ターン全属性のダメージを25%軽減する",
		turn: 5,
		proc: [ss_attr_guard([1,1,1,1,1], 0.25, 3)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Spec_statusup(0,300, [8,]),
		Spec_statusup(300,0, [8,]),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ、リーダー時さらにアップ(450%/600%)",
		proc: [ChainAttack(4.5, 3), ChainAttack_Leader(6.0, 3)],
	},
	ss2: {
		desc: "<ガード>3ターン全属性のダメージを50%軽減する",
		turn: 9,
		proc: [ss_attr_guard([1,1,1,1,1], 0.5, 3)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		NEFTJOD(30),
	],
}