{
	name: "AbCd-Λ:《冥黙の白鴉 ニレイヌ》",
	cardno: 5047,
	imageno: 6792,
	hp: 2603,
	atk: 3534,
	cost: 49,
	attr: [0, 4],
	species: [11],
	disable: true,
	awakes: [
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 1),
		Statusup(0, 200),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(200, 0),
		Panel_boost([1,0,0,0,0], 2),
		Spec_statusup(0, 200, [11]),
		Fastskill(2),
		Attr_statusup(0, 200, [1,0,0,0,0]),
	],
	as1: {
		desc: "<パネル色数攻撃>3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
		proc: ChainPanelsAttack(0, 4.0, 5.5, 3),
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせる。HP20％以下でさらに1遅らせる。",
		turn: 8,
		proc: [ss_delay_s(ss_hp_less(0.2, 3, 2))]
	},
	islegend: true,
	Lawake: [
		Statusup(0, 500),
		Attr_statusup(0, 100, [1,0,0,0,0]),
	],
	as2: {
		desc: "<パネル色数攻撃>パネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
		proc: ChainPanelsAttack(0, 4.0, 5.5, 0),
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせる。HP20％以下でさらに1遅らせる。",
		turn: 10,
		proc: [ss_delay_s(ss_hp_less(0.2, 4, 3))]
	},
}