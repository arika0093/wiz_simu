{
	name: "煌めく星の神楽姫 キシャラ・オロル",
	cardno: 9880,
	imageno: 7234,
	hp: 4511,
	atk: 3527,
	cost: 40,
	attr: [0,-1],
	species: [9],
	islegend: true,
	as1: {
		desc: "<攻撃強化・ガード>3チェインで全属性のダメージを10%軽減し、デッキに単色の精霊が多いほど、攻撃力をアップ(15%)（上限:5段階)",
		proc: [as_guard(0.10, [1,1,1,1,1], 3), add_cond(ChainEnhance(0, [0,1,0,0,0], 3), as_singleattr_num(0, 0.15))],
	},
	ss1: {
		desc: "<状態異常回復>味方全体のHPを回復し(50%)、状態異常を回復する",
		turn: 7,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
	awakes: [
        Panel_boost([1,0,0,0,0,],4),
        Attr_statusup_oattr(0,300, [1,0,0,0,0,]),
        Attr_statusup_oattr(300,0, [1,0,0,0,0,]),
        Heal_afterbattle(10),
        Fastskill(1),
        NEFTJOD(30),
        Attr_statusup(0,300, [1,0,0,0,0,]),
        Attr_statusup(300,0, [1,0,0,0,0,]),
		Fastskill(2),
        NEFTJOD(30),
	],
	as2: {
        desc: "<攻撃強化・ガード>3チェインで全属性のダメージを10%軽減し、デッキに単色の精霊が多いほど、攻撃力をアップ(20%)（上限:5段階)",
        proc: [as_guard(0.10, [1,1,1,1,1], 3), add_cond(ChainEnhance(0, [0,1,0,0,0], 3), as_singleattr_num(0, 0.20))],
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを完全回復し、状態異常を回復する",
		turn: 10,
		proc: [ss_heal(1.0), ss_abstate_cure()],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(1000,0),
	],
}