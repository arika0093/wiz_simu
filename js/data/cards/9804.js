{
	name: "神姫武桃 スモモ・プルーム",
	cardno: 9804,
	imageno: 9904,
	hp: 2875,
	atk: 4315,
	cost: 59,
	attr: [0,2],
	species: [8],
	islegend: true,
	ape: "新説桃娘伝",
	as1: {
		desc: "<連撃>10チェインで敵単体を5回連続攻撃(800%)、リーダー時さらにダメージアップ(150%)",
		proc: [ChainDualAttack(8.0, 10, 5), add_cond(ChainDualAttack(9.5, 10, 5), when_leader())],
	},
	ss1: {
		desc: "<激化大魔術>敵単体へ火・雷属性の5回連続ダメージ(800%)、発動する度に効果値が2倍アップ(上限:3段階)",
		turn: 11,
		proc: [ss_damage_s(ss_intenselyval(0, 8.0, 64), [0,2], 5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],4),
		NEFTJOD(30),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Awake_secondfast(4),
		Attr_statusup_sattr(100,0, [1,0,1,0,0,], 300,0, [0,0,0,0,0,]),
		Attr_statusup_sattr(0,100, [1,0,1,0,0,], 0,300, [0,0,0,0,0,]),
		Awake_secondfast(5),
		Abstate_invalid("discharge"),
		Awake_noeffect("スキル反射見破り",1),
	],
	as2: {
		desc: "<連撃>10チェインで敵単体を5回連続攻撃(900%)、リーダー時さらにダメージアップ(150%)",
		proc: [ChainDualAttack(9.0, 10, 5), add_cond(ChainDualAttack(9.5, 10, 5), when_leader())],
	},
	ss2: {
		desc: "<激化大魔術>敵単体へ火・雷属性の5回連続ダメージ(800%)、発動する度に効果値が2倍アップ(上限:3段階)",
		turn: 11,
		proc: [ss_damage_s(ss_intenselyval(0, 8.0, 64), [0,2], 5)],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_statusup(0,100, [1,0,1,0,0,]),
	],
}