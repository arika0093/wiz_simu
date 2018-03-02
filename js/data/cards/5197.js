{
	// -------------------------
	// 追加: 2015クリスマス精霊
	// -------------------------
	name: "永劫の白翼 アルドベリク&ルシエラ",
	cardno: 5197,
	imageno: 7079,
	hp: 3329,
	atk: 3321,
	cost: 43,
	attr: [0, 3],
	species: [3],
	disable: true,
	awakes: [
		Attr_statusup(100, 0, [1, 0, 0, 0, 0]),
		Panel_boost([1, 0, 0, 0, 0], 1),
		NEFTJOD(30),
		Fastskill(1),
		Statusup(0, 200),
		Heal_afterbattle(10),
		Panel_boost([1, 0, 0, 0, 0], 2),
		Attr_statusup(100, 0, [1, 0, 0, 0, 0]),
		Fastskill(2),
		Attr_statusup(0, 200, [1, 0, 0, 0, 0]),
	],
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(350％)、10チェインでさらにアップ(550%)",
		proc: [ChainAttack(3.5, 4), ChainAttack(5.5, 10)]
	},
	ss1: {
		desc: "<チェインガード>3ターンの間チェインを保護する",
		turn: 5,
		proc: [ss_chain_protect(3)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 0, 0, 0, 0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(450％)、10チェインでさらにアップ(650%)",
		proc: [ChainAttack(4.5, 4), ChainAttack(6.5, 10)]
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを2早め、敵単体の行動ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_s(2)]
	},
}