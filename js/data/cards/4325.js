{
	name: "ぷるぷるの王 ペンプッチン",
	cardno: 4325,
	imageno: 6039,
	hp: 2431,
	atk: 2446,
	cost: 47,
	attr: [0, -1],
	species: [4],
	ape: "グリコⅠ",
	awakes: [
		Statusup(0, 200),
		Statusup(200, 0),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(0, 200),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(200, 0),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Costdown(2),
		Spec_statusup(200, 0, [4]),
		Spec_statusup(0, 200, [4]),
	],
	as1: {
		desc: "<連撃>5チェインで敵単体を3回連続攻撃、HP50％以下で5回連続攻撃になり更にダメージアップ(5チェイン：計400％ / HP50％以下：計600％)",
		proc: [ChainDualAttack(4.0, 5, 3), add_cond(ChainDualAttack(6.0, 5, 5), when_hp_less(0.5))],
	},
	ss1: {
		desc: "<ダメージブロック>5ターン500以下の全属性ダメージを無効化する",
		turn: 8,
		proc: [ss_damageblock_all(500, 5)]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 400),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃、HP50％以下で5回連続攻撃になり更にダメージアップ(通常：計400％ / HP50％以下：計600％)",
		proc: [ChainDualAttack(4.0, 0, 3), add_cond(ChainDualAttack(6.0, 0, 5), when_hp_less(0.5))],
	},
	ss2: {
		desc: "<ダメージブロック>5ターン600以下の全属性ダメージを無効化する",
		turn: 10,
		proc: [ss_damageblock_all(600, 5)]
	},
}