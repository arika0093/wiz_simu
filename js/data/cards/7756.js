{
	name: "魔轟合体 テッケツオー",
	cardno: 7756,
	imageno: 9838,
	hp: 2541,
	atk: 3842,
	cost: 39,
	attr: [0,-1],
	species: [6],
	islegend: true,
	ape: "魔轟三鉄傑 対 地獄三十六歌仙",
	is_dist: true,
	as1: {
		desc: "<種族特効>4チェインでダメージアップ、物質の敵へさらにダメージアップ(300%/700%)",
		proc: [ChainAttack(3.0, 4), ChainSpecAttack(7.0, 4, [6])],
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの70%を使い敵単体へダメージ(1000%)、3チェインを消費しスキル反射を無視する",
		turn: 7,
		proc: [ss_damage_s(10, [0], 1), ss_consume_own(0.5), ss_chain_cost_skill(3, ss_ignore_skillcounter(), null)],
	},
	awakes: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		NEFTJOD(30),
		Statusup(0,200),
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(1),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<種族特効>4チェインでダメージアップ、物質の敵へさらにダメージアップ(400%/800%)",
		proc: [ChainAttack(4.0, 4), ChainSpecAttack(8.0, 4, [6])],
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの70%を使い敵単体へダメージ(1200%)、3チェインを消費しスキル反射を無視する",
		turn: 9,
		proc: [ss_damage_s(12, [0], 1), ss_consume_own(0.5), ss_chain_cost_skill(3, ss_ignore_skillcounter(), null)],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(400,0),
	],
}