{
	name: "美しく舞う勝利の翼 アンジェリカ",
	cardno: 4335,
	imageno: 6119,
	hp: 2880,
	atk: 2644,
	cost: 43,
	attr: [0, -1],
	species: [1],
	awakes: [
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Spec_statusup(200, 0, [1]),
		Costdown(2),
		Costdown(2),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(0, 400),
		Panel_boost([1,0,0,0,0], 1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(2),
		Spec_statusup(0, 200, [1]),
	],
	as1: {
		desc: "<回復>火属性の味方のHPを回復、パネルの色が増す度さらにアップ(1色：11％ / 2色：15％ / 3色：21％)",
		proc: ChainPanelsHeal(0.11, 0.15, 0.21, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火属性のダメージ(120％)",
		turn: 5,
		proc: [ss_damage_all(1.2, [0])],
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復、パネルの色が増す度さらにアップ(1色：13％ / 2色：17％ / 3色：24％)",
		proc: ChainPanelsHeal(0.13, 0.17, 0.24, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<大魔術>敵全体へ火属性のダメージ、更に味方のHPを回復(攻撃：180％ / 回復：30％)",
		turn: 8,
		proc: [ss_damage_all(1.8, [0]), ss_heal(0.3)],
	}
}