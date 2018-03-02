{
	name: "聖刻に祈りを捧げる セティエ・レー",
	cardno: 5373,
	imageno: 7216,
	hp: 4357,
	atk: 2676,
	cost: 45,
	attr: [2,-1],
	species: [9],
	islegend: true,
	disable: true,
	as1: {
		desc: "<回復>雷属性の味方のHPを回復、リーダー時さらに回復(13%/17%)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), add_cond(Heal(0.17, [0,0,1,0,0], 0), when_leader())],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 7,
		proc: [ss_skillboost(2)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Fastskill(1),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Heal_afterbattle(10),
		Fastskill(2),
		Spec_statusup(300,0, [9,]),
		Panel_boost([0,0,1,0,0,],2),
	],
	as2: {
		desc: "<回復>雷属性の味方のHPを回復、リーダー時さらに回復(16%/20%)",
		proc: [Heal(0.16, [0,0,1,0,0], 0), add_cond(Heal(0.20, [0,0,1,0,0], 0), when_leader())],
	},
	ss2: {
		desc: "<スキルチャージ&遅延>味方全体のスペシャルスキルの発動ターンを2早め、敵単体の攻撃ターンを2遅らせる",
		turn: 9,
		proc: [ss_skillboost(2), ss_delay_s(2)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}