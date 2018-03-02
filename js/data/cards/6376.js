{
	name: "我が独道 ウシュガ&ウィアノーヴァ",
	cardno: 6376,
	imageno: 8202,
	hp: 3890,
	atk: 3530,
	cost: 50,
	attr: [0,-1],
	species: [2],
	islegend: true,
	is_dist: true,
	ape: "幻魔特区スザクⅢ",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(400%)",
		proc: ChainAttack(4.0, 4),
	},
	ss1: {
		desc: "<ステータスアップ>味方全体の攻撃力を750ダウンし、HPを1000アップ(上限値:2000)",
		turn: 5,
		proc: [ss_statusup_all([1000, -750], [2000, 2000], -1)],
	},
	awakes: [
		Fastskill(1),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([0,0,1,0,0,],20),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		NEFTJOD(30),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(500%)",
		proc: ChainAttack(5.0, 4),
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(20%)",
		turn: 8,
		proc: [ss_regenerate(0.2, 5)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(0,500),
	],
}