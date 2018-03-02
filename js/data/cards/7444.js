{
	name: "凛竜穿牙 パメラ・ホーク",
	cardno: 7444,
	imageno: 9429,
	hp: 5065,
	atk: 3821,
	cost: 55,
	attr: [2,-1],
	species: [0],
	islegend: true,
	ape: "神竜降臨Ⅱ",
	as1: {
		desc: "<嘆きの怒り>水属性の敵単体へ特効ダメージ(350%)、さらに戦闘不能の仲間の数だけ攻撃力アップ(300%/600%/900%/1200%/1500%)&敵HPを吸収する(4%)",
		proc: [add_cond(
			ChainDeckDeadsAttack(3, 0, 3.5),
			when_enemyattr_match(1),
			as_hp_absorption(0.04)
		)],
	},
	ss1: {
		desc: "<状態異常回復&蘇生>自分を犠牲に味方全体のHPを回復し(50%)、状態異常を回復、さらに味方を50%で蘇生",
		turn: 7,
		proc: [ss_heal(0.5), ss_abstate_cure(), ss_resurrection([1,1,1,1,1], 0.5), ss_consume_own(1)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],2),
		Statusup(0,200),
		NEFTJOD(30),
		Fastskill(1),
		Statusup(200,0),
		Spec_statusup(400,0, [0,]),
		Fastskill(2),
		Spec_statusup(0,400, [0,]),
	],
	as2: {
		desc: "<嘆きの怒り>水属性の敵単体へ特効ダメージ(450%)、さらに戦闘不能の仲間の数だけ攻撃力アップ(300%/600%/900%/1200%/1500%)&敵HPを吸収する(4%)",
		proc: [add_cond(
			ChainDeckDeadsAttack(3, 0, 4.5),
			when_enemyattr_match(1),
			as_hp_absorption(0.04)
		)],
	},
	ss2: {
		desc: "<状態異常回復&蘇生>自分を犠牲に味方全体のHPを完全回復し、状態異常を回復、さらに味方を75%で蘇生",
		turn: 10,
		proc: [ss_heal(1), ss_abstate_cure(), ss_resurrection([1,1,1,1,1], 0.75), ss_consume_own(1)],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
}