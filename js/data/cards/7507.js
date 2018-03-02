{
	name: "絶対☆恋ANGEL マーガレット・リル",
	cardno: 7507,
	imageno: 9550,
	hp: 1780,
	atk: 4490,
	cost: 54,
	attr: [0,3],
	species: [3],
	disable: true,
	islegend: true,
	ape: "エステレラⅠ",
	as1: {
		desc: "<属性特効>雷・闇属性の敵単体へ特効ダメージ、解答が早いほどさらにアップ(基本:350%, 3秒台:400%, 2秒台:450%, 1秒台:500%, 0秒台:550%)",
		proc: add_cond(ChainAttrAttack(3.5, 0, [0,0,1,0,1]), as_timedep(0.5)),
	},
	ss1: {
		desc: "<多弾魔術>1ターン溜めた後、スキル反射を無視し、敵単体へ火・光属性の7回連続ダメージ(450%)",
		turn: 3,
		charged: 1,
		proc: [ss_damage_s(4.5, [0,3], 7), ss_ignore_skillcounter()],
	},
	awakes: [
		NEFTJOD(30),
		Fastskill(1),
		Abstate_invalid("ss_sealed"),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,200, [0,0,0,1,0,]),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Awake_noeffect("経験値取得量アップ",2),
		Abstate_invalid("as_sealed"),
		Abstate_invalid("discharge"),
	],
	as2: {
		desc: "<属性特効>雷・闇属性の敵単体へ特効ダメージ、解答が早いほどさらにアップ(基本:450%, 3秒台:500%, 2秒台:550%, 1秒台:600%, 0秒台:650%)",
		proc: add_cond(ChainAttrAttack(4.5, 0, [0,0,1,0,1]), as_timedep(0.5)),
	},
	ss2: {
		desc: "<多弾魔術>1ターン溜めた後、スキル反射を無視し、敵単体へ火・光属性の7回連続ダメージ(650%)",
		turn: 5,
		charged: 1,
		proc: [ss_damage_s(6.5, [0,3], 7), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}