{
	name: "至高の勇王 アーサー・キャメロット",
	cardno: 5694,
	imageno: 7515,
	hp: 2638,
	atk: 2364,
	cost: 44,
	attr: [2,3],
	species: [8],
	islegend: true,
	as1: {
		desc: "<回復>雷属性の味方のHPを回復(13%)",
		proc: Heal(0.13, [0,0,1,0,0], 0),
	},
	ss1: {
		desc: "<状態異常回復>味方全体の状態異常を回復する",
		turn: 4,
		proc: [ss_abstate_cure()],
	},
	awakes: [
		Statusup(200,0),
		Statusup(0,300),
		Fastskill(1),
		Statusup(200,0),
		Costdown(2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Fastskill(2),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<攻撃強化・回復>雷属性の味方のHPを回復(13%)、さらに雷属性の味方の攻撃力をアップ(30%)",
		proc: [Heal(0.13, [0,0,1,0,0], 0), ChainEnhance(0.30, [0,0,1,0,0], 0)],
	},
	ss2: {
		desc: "<犠牲魔術>味方全体のMAXHPの50%を使い敵全体へ雷属性のダメージ(90%×人数)",
		turn: 8,
		proc: [ss_damage_all(ss_consume_all_cond(0.90, 0.5), [2])],
	},
	Lawake: [
		Statusup(2000,0),
		Statusup(0,2000),
		Abstate_invalid("ss_sealed"),
		Abstate_invalid("as_sealed"),
	],
}