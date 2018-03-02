{
	name: "滅魂の預言者 ヴェレフキナ・アマン",
	cardno: 7155,
	imageno: 9126,
	hp: 4601,
	atk: 2575,
	cost: 53,
	attr: [0,1],
	species: [2],
	disable: true,
	islegend: true,
	ape: "ロストエデンⅡ WWMF",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、8チェインで更にダメージアップ(350%/500%)",
		proc: [ChainAttack(3.5, 4), ChainAttack(5.0, 8)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを2000ダウンし、攻撃力を2000アップ(上限値:2000)",
		turn: 1,
		proc: [ss_statusup_all([-2000, 2000], [2000, 2000], -1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,1,0,0,0,]),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 200,0, [0,1,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(1),
		Awake_damage_multiple(1.1, 500)
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、8チェインで更にダメージアップ(450%/600%)",
		proc: [ChainAttack(4.5, 4), ChainAttack(6.0, 8)],
	},
	ss2: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ(150%)。さらに極稀にクリティカル",
		turn: 5,
		proc: [ss_boost_enhance_all(1.5, 4, 0.1, [1,1,1,1,1])],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(100,0, [1,1,0,0,0,]),
	],
}