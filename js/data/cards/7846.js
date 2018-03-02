{
	name: "神姫武桃 スモモ・プルーム",
	cardno: 7846,
	imageno: 9904,
	hp: 2875,
	atk: 4075,
	cost: 57,
	attr: [0,2],
	species: [8],
	disable: true,
	islegend: true,
	ape: "桃娘伝Ⅱ",
	as1: {
		desc: "<連撃>10チェインで敵単体を5回連続攻撃、リーダー時さらにダメージアップ(800%/950%)",
		proc: [ChainDualAttack(8.0, 10, 5), add_cond(ChainDualAttack(9.5, 10, 5), when_leader())],
	},
	ss1: {
		desc: "<激化大魔術>敵単体へ火・雷属性の5回連続ダメージ、発動する度に効果値が2倍アップ(800%/1600%/3200%/6400%)(上限:3段階)",
		turn: 11,
		proc: [ss_damage_s(ss_intenselyval(0, 8.0, 64), [0,2], 5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],4),
		NEFTJOD(30),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Awake_secondfast(4),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,1,0,0,]),
		Awake_secondfast(5),
		Abstate_invalid("discharge"),
		Awake_noeffect("スキル反射見破り",1),
	],
	as2: {
		desc: "<連撃>10チェインで敵単体を5回連続攻撃、リーダー時さらにダメージアップ(900%/1050%)",
		proc: [ChainDualAttack(9.0, 10, 5), add_cond(ChainDualAttack(10.5, 10, 5), when_leader())],
	},
	ss2: {
		desc: "<激化大魔術>敵単体へ火・雷属性の5回連続ダメージ、発動する度に効果値が2倍アップ(800%/1600%/3200%/6400%)(上限:3段階)",
		turn: 11,
		proc: [ss_damage_s(ss_intenselyval(0, 8.0, 64), [0,2], 5)],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_statusup(0,100, [1,0,1,0,0,]),
	],
}