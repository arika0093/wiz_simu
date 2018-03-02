{
	name: "無我玉響 ティアライザー=コピシュ",
	cardno: 8633,
	imageno: 9358,
	hp: 3209,
	atk: 3612,
	cost: 54,
	attr: [1,0],
	species: [8],
	islegend: true,
	ape: "黄昏メアレスⅡ",
	as1: {
		desc: "<連撃・複属性攻撃強化>4チェインで敵単体を4回連続攻撃(350%)、さらに水属性の攻撃力をアップ(10%)、複属性が火属性だとさらにアップ(30%)",
		proc: [ChainDualAttack(3.5, 4, 4), ChainEnhance_SubAttr(0.1, 0.4, [0,1,0,0,0], [1,0,0,0,0], 4)],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のMAXHPの50%を使い、味方全体のスペシャルスキルの発動ターンを5早める",
		turn: 11,
		proc: [ss_skillboost(5), ss_consume_all(0.5)],
	},
	as2: {
		desc: "<連撃・複属性攻撃強化>4チェインで敵単体を4回連続攻撃(450%)、さらに水属性の攻撃力をアップ(10%)、複属性が火属性だとさらにアップ(30%)",
		proc: [ChainDualAttack(4.5, 4, 4), ChainEnhance_SubAttr(0.1, 0.4, [0,1,0,0,0], [1,0,0,0,0], 4)],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のMAXHPの50%を使い、味方全体のスペシャルスキルの発動ターンを5早める",
		turn: 11,
		proc: [ss_skillboost(5), ss_consume_all(0.5)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200,[1,1,0,0,0,]),
		Attr_statusup(200,0,[1,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Awake_noeffect("経験値取得量アップ",2),
		Fastskill(4),
		NEFTJOD(30),
		Attr_statusup_sattr(0,100,[0,1,0,0,0,],0,300,[1,0,0,0,0,]),
		Attr_statusup_sattr(100,0,[0,1,0,0,0,],300,0,[1,0,0,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	Lawake: [
		Attr_statusup(0,200,[1,1,0,0,0,]),
		Statusup(500,0),
		NEFTJOD(30),
	],
}