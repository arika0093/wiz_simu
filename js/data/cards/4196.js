{
	name: "心優しき黄泉の使者 六道りんね",
	cardno: 4196,
	imageno: 5870,
	hp: 2085,
	atk: 2133,
	cost: 34,
	attr: [0, -1],
	species: [8],
	awakes: [
		Costdown(2),
		Statusup(0, 200),
		Statusup(100, 0),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(200, 0),
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Spec_statusup(0, 200, [8]),
	],
	as1: {
		desc: "<連撃>3チェインで敵単体を5回連続攻撃、HP90％以上でさらにダメージアップ(3チェイン：計300％ / HP90％以上：計350％)",
		proc: [ChainDualAttack(3.0, 3, 5), add_cond(ChainDualAttack(3.5, 3, 5), when_hp_more(0.9))]
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵単体へダメージ(260％)",
		turn: 5,
		proc: [ss_damage_s(2.6, [0], 1), ss_consume_own(0.5)],
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Statusup(400, 0),
	],
	as2: {
		desc: "<連撃>敵単体を5回連続攻撃、HP90％以上でさらにダメージアップ(通常：計300％ / HP90％以上：計350％)",
		proc: [ChainDualAttack(3.0, 0, 5), add_cond(ChainDualAttack(3.5, 0, 5), when_hp_more(0.9))]
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵単体へダメージ(380％)",
		turn: 7,
		proc: [ss_damage_s(3.8, [0], 1), ss_consume_own(0.5)],
	},
}