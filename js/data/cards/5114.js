{
	name: "滅屍冥刃 グリード・サクリファイス",
	cardno: 5114,
	imageno: 6857,
	hp: 3674,
	atk: 3576,
	cost: 48,
	attr: [0, -1],
	species: [8],
	awakes: [
		Costdown(2),
		Statusup(0, 100),
		Statusup(100, 0),
		Statusup(0, 200),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 2),
		Attr_statusup(0, 200, [1,0,0,0,0]),
		NEFTJOD(30),
		Fastskill(2),
		Attr_statusup(200, 0, [1,0,0,0,0]),
	],
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 5),
	},
	ss1: {
		desc: "<遅延>敵全体の攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_all(3)]
	},
	islegend: true,
	Lawake: [
		Statusup(500, 0),
		Statusup(0, 500),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ/550％",
		proc: ChainAttack(5.5, 5),
	},
	ss2: {
		desc: "<スキルチャージ&遅延>スペシャルスキルの発動ターンを3早め、敵全体の攻撃ターンを3遅らせる",
		turn: 15,
		proc: [ss_skillboost(3), ss_delay_all(3)],
	},
}