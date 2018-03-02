{
	name: "思考型人造魂魄 シミラル",
	cardno: 7158,
	imageno: 9129,
	hp: 6709,
	atk: 999,
	cost: 48,
	attr: [0,-1],
	species: [2],
	disable: true,
	islegend: true,
	ape: "ロストエデンⅡ WWMF",
	as1: {
		desc: "<スキルコピー>左隣の精霊のアンサースキルを発動する",
		proc: as_copy(),
	},
	ss1: {
		desc: "<鉄壁・極>3ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
		turn: 7,
		proc: [ss_impregnable_all(3)],
	},
	awakes: [
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Fastskill(3),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Awake_noeffect("ゴールド取得量アップ",1),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Heal_afterbattle(10),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Awake_noeffect("経験値取得量アップ",1),
	],
	as2: {
		desc: "<スキルコピー>左隣の精霊のアンサースキルを発動する",
		proc: as_copy(),
	},
	ss2: {
		desc: "<鉄壁・極>3ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
		turn: 7,
		proc: [ss_impregnable_all(3)],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}