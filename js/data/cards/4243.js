{
	name: "傷だらけの銃爪 スミオ&トキオ",
	cardno: 4243,
	imageno: 5949,
	hp: 2567,
	atk: 3005,
	cost: 46,
	attr: [2, 0],
	species: [8],
	disable: true,
	awakes: [
		Fastskill(1),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
		Panel_boost([0, 0, 1, 0, 0], 1),
		Attr_relief([1, 0, 1, 0, 0], 10),
		Attr_statusup(100, 0, [1, 0, 1, 0, 0]),
		Statusup(200, 0),
		Fastskill(2),
		Spec_statusup(0, 200, [8]),
		Spec_statusup(200, 0, [8]),
	],
	as1: {
		desc: "<属性特効>5チェインで水属性の敵単体へ特効ダメージ/650％",
		proc: ChainAttrAttack(6.5, 5, [0, 1, 0, 0, 0])
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)]
	},
	islegend: true,
	Lawake: [
		Statusup(400, 0),
		Attr_statusup(0, 100, [1, 0, 1, 0, 0]),
	],
	as2: {
		desc: "<属性特効>5チェインで水属性の敵単体へ特効ダメージ/750％",
		proc: ChainAttrAttack(7.5, 5, [0, 1, 0, 0, 0])
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを3早める",
		turn: 11,
		proc: [ss_skillboost(3)]
	},
}