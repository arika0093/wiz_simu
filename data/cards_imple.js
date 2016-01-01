// -------------------------
// 実装済の精霊データ
//   (参考用、実際には使用しません)
// -------------------------
Cards.Imples = [
	{
		name: "鎮まぬ魂の救い手 アカリ・ヨトバリ",
		cardno: 4684,
		imageno: 6443,
		hp: 2916,
		atk: 2892,
		cost: 42,
		attr: [0, -1],
		species: [9],
		awakes: [
			Panel_boost([1, 0, 0, 0, 0, ], 2),
			Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
			Fastskill(1),
			Costdown(2),
			Attr_relief([0, 1, 0, 0, 0, ], 10),
			Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
			Fastskill(2),
			Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
			Spec_statusup(200, 0, [9, ]),
			Spec_statusup(0, 200, [9, ]),
		],
		as1: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+30％ / 火+種族：+45％)",
    		proc: multi_as(ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.45, [1,0,0,0,0], [9], 0)),
		},
		ss1: {
    		desc: "2ターン火属性の味方の攻撃力をアップ(+40％)",
    		turn: 6,
    		proc: [ss_enhance_all(0.4, 2, [1,0,0,0,0])]
		},
		islegend: true,
		Lawake: [
			Statusup(0, 400),
			Statusup(400, 0),
		],
		as2: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+30％ / 火+種族：+65％)",
    		proc: multi_as(ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.65, [1,0,0,0,0], [9], 0)),
		},
		ss2: {
    		desc: "4ターン火属性の味方の攻撃力をアップ(+60％)",
    		turn: 9,
    		proc: [ss_enhance_all(0.6, 2)]
		},
	}, {
		name: "終に導く焔 ヴィヴィ・ナイトメア",
		cardno: 4140,
		imageno: 5818,
		hp: 2776,
		atk: 2556,
		cost: 41,
		attr: [0, -1],
		species: [9],
		awakes: [
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Statusup(0, 200),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
		],
		as1: {
			desc: "火属性の味方の攻撃力をアップ、魔族・術士はさらにアップ(火：+20％ / 火+種族：+40％)",
			proc: multi_as(ChainEnhance(0.2, [1, 0, 0, 0, 0], 0), ChainSpecEnhance(0.4, [1, 0, 0, 0, 0], [0, 9], 0)),
		},
		ss1: {
			desc: "ジャンルパネルをシャッフル",
			turn: 3,
			proc: null
		},
		islegend: true,
		Lawake: [
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
		],
		as2: {
			desc: "火属性の味方の攻撃力をアップ、魔族・術士はさらにアップ(火：+30％ / 火+種族：+60％)",
			proc: multi_as(ChainEnhance(0.3, [1, 0, 0, 0, 0], 0), ChainSpecEnhance(0.6, [1, 0, 0, 0, 0], [0, 9], 0)),
		},
		ss2: {
			desc: "ジャンルパネルを火属性化し、チェインがプラス1の効果を付与",
			turn: 5,
			proc: [panel_chainplus(1)],
		},
	}, {
		name: "甦りし古の災厄 エターナル・ロア",
		cardno: 4715,
		imageno: 6377,
		hp: 2681,
		atk: 3098,
		cost: 48,
		attr: [0, -1],
		species: [9],
		awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Statusup(200, 0),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
		],
		as1: {
			desc: "種族が術士・物質の敵単体へ特効ダメージ/600％",
			proc: ChainSpecAttack(6.0, 0, [6, 9]),
		},
		ss1: {
			desc: "敵全体に火属性ダメージ、5チェインを消費しさらにダメージアップ(通常：180％ / 5チェイン消費：230％)",
			turn: 8,
			proc: [ss_damage_all(ss_chain_cost(5, 2.3, 1.8), [0])],
		},
		islegend: true,
		Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		],
		as2: {
			desc: "種族が術士・物質の敵単体へ特効ダメージ/700％",
			proc: ChainSpecAttack(6.0, 0, [6, 9]),
		},
		ss2: {
			desc: "敵全体に火属性ダメージ、5チェインを消費しさらにダメージアップ(通常：260％ / 5チェイン消費：310％)",
			turn: 12,
			proc: [ss_damage_all(ss_chain_cost(5, 3.1, 2.6), [0])],
		},
	}, {
		name: "其は終焉の起源なり",
		cardno: 4021,
		imageno: 5726,
		hp: 2789,
		atk: 3654,
		cost: 72,
		attr: [0, -1],
		species: [0],
		awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 100, [0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [0, ]),
            Spec_statusup(0, 200, [0, ]),
		],
		as1: {
			desc: "5チェインで敵単体を3回連続攻撃、10チェインで更にダメージアップ(5チェイン：計450％ / 10チェイン：計750％)",
			proc: multi_as(ChainDualAttack(4.5, 5, 3), ChainDualAttack(7.5, 10, 3)),
		},
		ss1: {
			desc: "味方全体のMAXHPの50%を使い敵全体へダメージ(130％×味方の人数)",
			turn: 10,
			proc: [ss_damage_all(ss_consume_all_cond(1.3, 0.5), [0])],
		},
		islegend: true,
		Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		],
		as2: {
			desc: "5チェインで敵単体を3回連続攻撃、10チェインで更にダメージアップ(5チェイン：計550％ / 10チェイン：計850％)",
			proc: multi_as(ChainDualAttack(5.5, 5, 3), ChainDualAttack(8.5, 10, 3)),
		},
		ss2: {
			desc: "味方全体のMAXHPの50%を使い敵全体へダメージ(160％×味方の人数)",
			turn: 12,
			proc: [ss_damage_all(ss_consume_all_cond(1.6, 0.5), [0])],
		},
	}, {
    	name: "超越の大魔道怪獣 アリエッタ・トワ",
    	cardno: 4691,
    	imageno: 6361,
    	hp: 2302,
    	atk: 3038,
    	cost: 46,
    	attr: [0, 1],
    	species: [9],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_relief([1, 0, 0, 0, 0, ], 20),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
    	],
    	as1: {
    		desc: "3チェインで敵全体へダメージ/180％",
    		proc: ChainAllAttack(1.8, 3),
    	},
    	ss1: {
    		desc: "敵全体へ火・水属性のダメージ、5チェインを消費しさらにダメージアップ(通常：150％ / 5チェイン消費：230％)",
    		turn: 6,
    		proc: [ss_damage_all(ss_chain_cost(5, 2.3, 1.5), [0,1])],
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで敵全体へダメージ/220％",
    		proc: ChainAllAttack(2.2, 3),
    	},
    	ss2: {
    		desc: "敵全体へ火・水属性のダメージ、5チェインを消費しさらにダメージアップ(通常：220％ / 5チェイン消費：300％)",
    		turn: 9,
    		proc: [ss_damage_all(ss_chain_cost(5, 3.0, 2.2), [0, 1])],
    	},
	}, {
		name: "凍てついた孤毒 フリーレ・ギフト",
		cardno: 5053,
		imageno: 6793,
		hp: 3491,
		atk: 2638,
		cost: 45,
		attr: [1, -1],
		species: [9],
		awakes: [
            Fastskill(1),
            Attr_relief([1, 0, 1, 0, 0, ], 20),
            Costdown(2),
            Fastskill(1),
            Statusup(200, 0),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Heal_afterbattle(10),
            Spec_statusup(200, 0, [9, ]),
		],
		as1: {
			desc: "水属性の味方を回復/13％",
			proc: Heal(0.13, [0, 1, 0, 0, 0]),
		},
		ss1: {
			desc: "4ターン敵全体に毒のダメージを与える(5000ダメージ)",
			turn: 7,
			proc: [poison(5000, 4)],
		},
		islegend: true,
		Lawake: [
            Statusup(700, 0),
            Statusup(0, 300),
		],
		as2: {
			desc: "水属性の味方を回復/16％",
			proc: Heal(0.16, [0, 1, 0, 0, 0]),
		},
		ss2: {
			desc: "5ターン敵全体に毒のダメージを与える(9999ダメージ)",
			turn: 11,
			proc: [poison(9999, 4)],
		},
	}, {
		name: "激烈大魔法使い アリエッタ・トワ",
		cardno: 4156,
		imageno: 5900,
		hp: 1665,
		atk: 4179,
		cost: 45,
		attr: [1, 0],
		species: [9],
		awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Statusup(0, 200),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
		],
		as1: {
			desc: "3チェインで敵単体を3回連続攻撃/計350％",
			proc: ChainDualAttack(3.5, 3, 3),
		},
		ss1: {
			desc: "敵単体へ水・火属性の5回連続ダメージ(計180％)",
			turn: 5,
			proc: [ss_damage_s(1.8, [1, 0], 5)],
		},
		islegend: true,
		Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(0, 500),
		],
		as2: {
			desc: "3チェインで敵単体を3回連続攻撃/計450％",
			proc: ChainDualAttack(4.5, 3, 3),
		},
		ss2: {
			desc: "敵単体へ水・火属性の5回連続ダメージ(計380％)",
			turn: 8,
			proc: [ss_damage_s(3.8, [1, 0], 5)],
		},
	}, {
		name: "黎明天無獄帝 アスモデウス・トビト",
		cardno: 4751,
		imageno: 6573,
		hp: 3456,
		atk: 2744,
		cost: 78,
		attr: [0, 4],
		species: [2],
		awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
		],
		as1: {
			desc: "3チェインで敵全体へ分散攻撃/400％÷対象数",
			proc: ChainVarianceAttack(4.0, 3)
		},
		ss1: {
			desc: "味方全体のMAXHPの50％を使い、2ターン火属性の味方の攻撃力をアップ(+70％)",
			turn: 5,
			proc: [ss_consume_all(0.5), ss_enhance_all(0.7, 2, [1, 0, 0, 0, 0])]
		},
		islegend: true,
		Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 500),
		],
		as2: {
			desc: "3チェインで敵全体へ分散攻撃/500％÷対象数",
			proc: ChainVarianceAttack(5.0, 3)
		},
		ss2: {
			desc: "味方全体のMAXHPの50％を使い、4ターン火属性の味方の攻撃力をアップ(+100％)",
			turn: 8,
			proc: [ss_consume_all(0.5), ss_enhance_all(1.0, 4, [1, 0, 0, 0, 0])]
		},
	}, {
		name: "導かれる白馬姫 リミーラ・ネール",
		cardno: 4742,
		imageno: 6462,
		hp: 1878,
		atk: 3733,
		cost: 42,
		attr: [2, 1],
		species: [9],
		awakes: [
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
		],
		as1: {
			desc: "3チェインで敵単体を3回連続攻撃/計350％",
			proc: ChainDualAttack(3.5, 3, 3)
		},
		ss1: {
			desc: "敵単体のHPを20％減少させる、5チェインを消費しさらに15％減少させる",
			turn: 9,
			proc: [ss_ratiodamage_s(ss_chain_cost(5, 0.35, 0.20))]
		},
		islegend: true,
		Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(0, 500),
		],
		as2: {
			desc: "3チェインで敵単体を3回連続攻撃/計450％",
			proc: ChainDualAttack(4.5, 3, 3)
		},
		ss2: {
			desc: "敵単体のHPを25％減少させる、5チェインを消費しさらに15％減少させる",
			turn: 12,
			proc: [ss_ratiodamage_s(ss_chain_cost(5, 0.40, 0.25))]
		},
	}, {
		name: "牡丹微睡む夕月夜 ミコト・ウタヨミ",
		cardno: 5061,
		imageno: 6801,
		hp: 2241,
		atk: 3834,
		cost: 46,
		islegend: true,
		attr: [2, 1],
		species: [1],
		awakes: [
            Fastskill(1),
			{ /* 経験値取得量アップⅠ */ },
            Attr_statusup(0, 200, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Spec_statusup(0, 200, [1, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(200, 0, [0, 1, 1, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [1, ]),
		],
		Lawake: [
            Statusup(300, 0),
            Statusup(0, 700),
            NEFTJOD(30),
		],
		as1: {
			desc: "5チェインで敵単体を3回連続攻撃(450)",
			proc: ChainDualAttack(4.5, 5, 3)
		},
		ss1: {
			desc: "敵全体へ雷属性のダメージ(300)、さらに水属性の敵には特攻ダメージ(500)",
			turn: 6,
			proc: [ss_damage_all(special_attr([0, 1, 0, 0, 0], 5.0, 2.0), [2])]
		},
		as2: {
			desc: "5チェインで敵単体を3回連続攻撃(550)",
			proc: ChainDualAttack(5.5, 5, 3)
		},
		ss2: {
			desc: "敵全体へ雷属性のダメージ(300)、さらに水属性の敵には特攻ダメージ(900)",
			turn: 9,
			proc: [ss_damage_all(special_attr([0, 1, 0, 0, 0], 9.0, 2.0), [2])]
		},
	}, {
		name: "炯眼冷徹 ルートヴィッヒ・ロメオ",
		cardno: 4598,
		imageno: -1,
		hp: 2564,
		atk: 3052,
		cost: 46,
		attr: [0, -1],
		species: [-1],
		awakes: [
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Statusup(0, 200),
            Spec_statusup(100, 0, [8, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
		],
		as1: {
			desc: "3チェインでダメージアップ、HP80%以上でさらにダメージアップ(通常：300％：HP80％以上：400％)",
			proc: [ChainAttack(3, 3), add_cond(ChainAttack(4, 3), when_hp_more(0.8))]
		},
		ss1: {
			desc: "敵単体へ火属性の5回連続ダメージ(計180％)",
			turn: 6,
			proc: [ss_damage_s(1.8, [0], 5)]
		},
		islegend: true,
		Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
		],
		as2: {
			desc: "3チェインでダメージアップ、HP80%以上でさらにダメージアップ(通常：400％：HP80％以上：500％)",
			proc: [ChainAttack(4, 3), add_cond(ChainAttack(5, 3), when_hp_more(0.8))]
		},
		ss2: {
			desc: "敵単体へ火属性の5回連続ダメージ、10チェインで10回連続攻撃に(計380％)",
			turn: 9,
			proc: [ss_damage_s(3.8, [0], ss_chain_cond(10, 10, 5))]
		},
	}, {
		name: "蒼の指揮官 イツキ・マスグレイヴ",
		cardno: 4508,
		imageno: 6248,
		hp: 2532,
		atk: 2467,
		cost: 38,
		attr: [1, -1],
		species: [8],
		awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Heal_afterbattle(10),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
			{ /* 経験値取得量アップⅠ */ },
		],
		as1: {
			desc: "3チェインで敵全体へダメージ/180％",
			proc: ChainAllAttack(1.8, 3)
		},
		ss1: {
			desc: "3ターン味方全体を徐々に回復する(15％×3T)",
			turn: 6,
			proc: [ss_regenerate(0.15, 3)]
		},
		islegend: true,
		Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
		],
		as2: {
			desc: "敵全体へダメージ/180％",
			proc: ChainAllAttack(1.8, 0)
		},
		ss2: {
			desc: "5ターン味方全体を徐々に回復する(20％×5T)",
			turn: 9,
			proc: [ss_regenerate(0.2, 5)]
		},
	}, {
		name: "夏夢航路の女神様 シール・サンテ",
		cardno: 4162,
		imageno: 5891,
		hp: 1865,
		atk: 3834,
		cost: 47,
		attr: [1, -1],
		species: [8],
		awakes: [
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [8, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
		],
		as1: {
			desc: "5チェインで火属性の敵単体へダメージ/650％",
			proc: ChainAttrAttack(6.5, 5, [1, 0, 0, 0, 0])
		},
		ss1: {
			desc: "直前に発動したスペシャルスキルを発動する",
			turn: 9,
			proc: [ss_latest_copy()]
		},
		islegend: true,
		Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
		],
		as2: {
			desc: "5チェインで火属性の敵単体へダメージ/750％",
			proc: ChainAttrAttack(7.5, 5, [1, 0, 0, 0, 0])
		},
		ss2: {
			desc: "直前に発動したスペシャルスキルを発動する",
			turn: 9,
			proc: [ss_latest_copy()]
		},
	}, {
		name: "傷だらけの銃爪 スミオ＆トキオ",
		cardno: 4243,
		imageno: 5949,
		hp: 2567,
		atk: 3005,
		cost: 46,
		attr: [2, 0],
		species: [8],
		awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_relief([1, 0, 1, 0, 0, ], 10),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Statusup(200, 0),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
		],
		as1: {
			desc: "5チェインで水属性の敵単体へ特効ダメージ/650％",
			proc: ChainAttrAttack(6.5, 5, [0, 1, 0, 0, 0])
		},
		ss1: {
			desc: "味方全体のスペシャルスキルの発動ターンを2早める",
			turn: 8,
			proc: [ss_skillboost(2)]
		},
		islegend: true,
		Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
		],
		as2: {
			desc: "5チェインで水属性の敵単体へ特効ダメージ/750％",
			proc: ChainAttrAttack(7.5, 5, [0, 1, 0, 0, 0])
		},
		ss2: {
			desc: "味方全体のスペシャルスキルの発動ターンを3早める",
			turn: 11,
			proc: [ss_skillboost(3)]
		},
	}, {
		name: "収穫者 ウシュガ＆ウィアノーヴァ",
		cardno: 4274,
		imageno: 5961,
		hp: 2533,
		atk: 2433,
		cost: 53,
		attr: [0, -1],
		species: [2],
		awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(200, 0, [2, ]),
            Spec_statusup(0, 200, [2, ]),
            Spec_statusup(0, 200, [2, ]),
		],
		as1: {
			desc: "雷属性の敵単体へ特効ダメージ、HP50％以下でさらにダメージアップ(通常：300％ / HP50％以下：1300％)",
			proc: [ChainAttrAttack(3, 0, [0, 0, 1, 0, 0]), add_cond(ChainAttrAttack(13, 0, [0, 0, 1, 0, 0]), when_hp_less(0.5))]
		},
		ss1: {
			desc: "1ターン、致死ダメージを受けたら一度だけHP15％で起死回生",
			turn: 8,
			proc: [ss_revival(0.15, 1)]
		},
		islegend: true,
		Lawake: [
            Statusup(0, 400),
            NEFTJOD(30),
		],
		as2: {
			desc: "雷属性の敵単体へ特効ダメージ、HP50％以下でさらにダメージアップ(通常：400％ / HP50％以下：1900％)",
			proc: [ChainAttrAttack(4, 0, [0, 0, 1, 0, 0]), add_cond(ChainAttrAttack(19, 0, [0, 0, 1, 0, 0]), when_hp_less(0.5))]
		},
		ss2: {
			desc: "2ターン、致死ダメージを受けたら一度だけHP15％で起死回生",
			turn: 10,
			proc: [ss_revival(0.15, 2)]
		},
	},
];