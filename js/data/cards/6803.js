{
	name: "深智の守護神官　ラルルラ・キシュ",
	cardno: 6803,
	imageno: 8786,
	hp: 3550,
	atk: 3450,
	cost: 43,
	attr: [0,-1],
	species: [4],
	islegend: true,
	ape: "図鑑報酬",
	as1: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、神族と妖精はさらにアップ(30%/90%)",
		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.9, [1,0,0,0,0], [1,4], 0)],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
	awakes: [
		Spec_statusup(0,200, [4,]),
		Fastskill(1),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		Spec_statusup(100,0, [4,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Spec_statusup(0,300, [4,]),
		Spec_statusup(300,0, [4,]),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<種族攻撃強化>火属性の味方の攻撃力をアップ、神族と妖精はさらにアップ(50%/110%)",
		proc: [ChainEnhance(0.5, [1,0,0,0,0], 0), ChainSpecEnhance(1.1, [1,0,0,0,0], [1,4], 0)],
	},
	ss2: {
		desc: "<スキルチャージ&遅延>味方全体のスペシャルスキルの発動ターンを2早め、敵単体の攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_s(2)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}