{
	name: "綺光と焔の絆 ベアトリーゼ&エルト",
	cardno: 5206,
	imageno: 7088,
	hp: 4139,
	atk: 2421,
	cost: 45,
	attr: [1, 0],
	species: [8],
	disable: true,
	awakes: [
		Panel_boost([0, 1, 0, 0, 0], 1),
		NEFTJOD(30),
		Attr_statusup(100, 0, [1, 1, 1, 1, 1]),
		Fastskill(1),
		Attr_statusup(0, 100, [1, 1, 1, 1, 1]),
		Statusup(0, 200),
		Panel_boost([0, 1, 0, 0, 0], 2),
		Fastskill(2),
		Attr_statusup(0, 200, [1, 1, 1, 1, 1]),
		Heal_afterbattle(10),
	],
	as1: {
		desc: "<回復>味方全体のHPを回復(11%)、HP50%以下でさらに回復(20%)",
		proc: [Heal(0.11, [1,1,1,1,1], 0), add_cond(Heal(0.20, [1,1,1,1,1], 0), when_hp_less(0.5))]
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインがプラス1の効果を付与",
		turn: 3,
		proc: [panel_chainplus(1)]
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 1, 1, 1, 1]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>味方全体のHPを回復(13%)、HP50%以下でさらに回復(22%)",
		proc: [Heal(0.13, [1,1,1,1,1], 0), add_cond(Heal(0.22, [1,1,1,1,1], 0), when_hp_less(0.5))]
	},
	ss2: {
		desc: "<ダメージ強化>4ターン味方全体の攻撃力をアップ(120%)、5チェイン消費しさらにアップ(180%)",
		turn: 12,
		proc: [ss_enhance_all(ss_chain_cost(5, 1.8, 1.2), 4, [1,1,1,1,1])]
	},
}