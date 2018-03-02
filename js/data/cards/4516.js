{
	name: "鉄剣開票係 ノア・アームストロング",
	cardno: 4516,
	imageno: 6186,
	hp: 2227,
	atk: 3432,
	cost: 46,
	attr: [0, -1],
	species: [8],
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Awake_noeffect("ゴールド取得量アップ", 1),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		NEFTJOD(30),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(2),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as1: {
		desc: "<チェイン攻撃>7チェインでダメージアップ/500％",
		proc: ChainAttack(5.0, 7),
	},
	ss1: {
		desc: "<効果解除>敵単体のガード&ダメージブロックを解除する",
		turn: 9,
		proc: [ss_break_attrguard(), ss_break_dblock()]
	},
	islegend: true,
	is_dist: true,
	Lawake: [
		Statusup(0, 600),
		Statusup(300, 0),
	],
	as2: {
		desc: "<チェイン攻撃>7チェインでダメージアップ/600％",
		proc: ChainAttack(6.0, 7),
	},
	ss2: {
		desc: "<効果解除大魔術>敵単体のガード&ダメージブロックを解除し、火属性のダメージ(400％)",
		turn: 13,
		proc: [ss_damage_s(4.0, [0], 1), ss_break_attrguard(), ss_break_dblock()],
	},
}