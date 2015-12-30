// -------------------------
// 精霊データ
// -------------------------
Cards = [
    // 機械的に追加
    {
    	name: "浄き炎神の剣 アイリス・ランティア",
    	cardno: 4575,
    	imageno: -1,
    	hp: 1722,
    	atk: 3651,
    	cost: 42,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Costdown(2),
            Statusup(200, 0),
            Costdown(2),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(0, 200, [8, ]),
            Heal_afterbattle(10),
    	],
    	as1: {
    		desc: "敵単体を3回連続攻撃/計300％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火属性のダメージ(200％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(200, 0),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "敵単体を3回連続攻撃/計400％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火属性のダメージ(400％)",
    		turn: 8,
    		proc: null
    	},
    }, {
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
    		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.45, [1,0,0,0,0], [9], 0)],
    	},
    	ss1: {
    		desc: "2ターン火属性の味方の攻撃力をアップ(+40％)",
    		turn: 6,
    		proc: [ss_enhance_all(0.4, 2)]
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+30％ / 火+種族：+65％)",
    		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.65, [1,0,0,0,0], [9], 0)],
    	},
    	ss2: {
    		desc: "4ターン火属性の味方の攻撃力をアップ(+60％)",
    		turn: 9,
    		proc: [ss_enhance_all(0.6, 2)]
    	},
    }, {
    	name: "燃える屋台魂 アキラ・マスグレイヴ",
    	cardno: 4455,
    	imageno: -1,
    	hp: 2214,
    	atk: 2535,
    	cost: 40,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Costdown(2),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/300％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火・雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ/300％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火・雷属性化し、ダメージ25％軽減の効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "チョコ滾る アキラ・マスグレイヴ",
    	cardno: 4473,
    	imageno: -1,
    	hp: 2409,
    	atk: 2371,
    	cost: 43,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(100, 0),
            Statusup(0, 100),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "味方全体のHPを回復、リーダー時さらに回復(通常：10％ / リーダー時：13％)",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを2遅らせる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "味方全体のHPを回復、リーダー時さらに回復(通常：13％ / リーダー時：16％)",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを2遅らせる、さらに味方全体のHPを回復する(50％)",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "極獄の殲炎 アスモデウス・トビト",
    	cardno: 4648,
    	imageno: -1,
    	hp: 3110,
    	atk: 2870,
    	cost: 70,
    	attr: [0, -1],
    	species: [2],
    	awakes: [
            Statusup(0, 200),
            Costdown(4),
            Statusup(200, 0),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [2, ]),
            Spec_statusup(200, 0, [2, ]),
    	],
    	as1: {
    		desc: "敵の数に関わらず敵全体へダメージアップ/140％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 700),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "敵の数に関わらず敵全体へダメージアップ/150％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "上質な愛の時 アーモンドプレミオ",
    	cardno: 4391,
    	imageno: -1,
    	hp: 2332,
    	atk: 2997,
    	cost: 46,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Costdown(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_relief([1, 1, 0, 0, 0, ], 10),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の敵単体へ特効ダメージ、HP50％以上でさらにダメージアップ(通常：350％ / HP50％以上：400％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い、2ターン火属性の味方の攻撃力をアップ(+60％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の敵単体へ特効ダメージ、HP50％以上でさらにダメージアップ(通常：450％ / HP50％以上：500％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い、4ターン火属性の味方の攻撃力をアップ(+80％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "絶華却竜姫 アリューゼ・ヴェローナ",
    	cardno: 5112,
    	imageno: -1,
    	hp: 2556,
    	atk: 4654,
    	cost: 44,
    	attr: [0, -1],
    	species: [0],
    	awakes: [
            Fastskill(1),
            Statusup(0, 300),
            Costdown(2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(0, 200, [0, ]),
    	],
    	as1: {
    		desc: "5チェインかつパネルが2色でダメージアップ、3色でさらにアップ(2色：500％ / 3色：650％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(通常：200％ / 雷属性：500％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインかつパネルが2色でダメージアップ、3色でさらにアップ(2色：500％ / 3色：900％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ、さらに雷属性の敵には特効ダメージ(通常：200％ / 雷属性：900％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "鳳凰迅将 アルル・アーガイル",
    	cardno: 5056,
    	imageno: -1,
    	hp: 2729,
    	atk: 3292,
    	cost: 43,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Statusup(0, 200),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "雷属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス1の効果を付与",
    		turn: 4,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 700),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "雷属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火・雷属性化し、チェインがプラス1の効果を付与",
    		turn: 5,
    		proc: null
    	},
    }, {
    	name: "美しく舞う勝利の翼 アンジェリカ",
    	cardno: 4335,
    	imageno: -1,
    	hp: 2880,
    	atk: 2644,
    	cost: 43,
    	attr: [0, -1],
    	species: [1],
    	awakes: [
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(200, 0, [1, ]),
            Costdown(2),
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 400),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "火属性の味方のHPを回復、パネルの色が増す度さらにアップ(1色：11％ / 2色：15％ / 3色：21％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(120％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "火属性の味方のHPを回復、パネルの色が増す度さらにアップ(1色：13％ / 2色：17％ / 3色：24％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ、更に味方のHPを回復(攻撃：180％ / 回復：30％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "炎彗騎士 イグニス・ヴォルガノン",
    	cardno: 3626,
    	imageno: -1,
    	hp: 2232,
    	atk: 2432,
    	cost: 35,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(0, 200),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージ絶大アップ/250％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性の究極ダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "3チェインでダメージ極大アップ/350%",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性の超究極ダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "死喰の黒滅者 イザヴェリ・ヘイズ",
    	cardno: 3989,
    	imageno: -1,
    	hp: 2642,
    	atk: 2647,
    	cost: 46,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            NEFTJOD(30),
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(200, 0, [2, ]),
    	],
    	as1: {
    		desc: "3チェインで火属性の味方の攻撃力をアップ/+50％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "3チェインで火属性の味方の攻撃力をアップ/+70％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 0,
    		proc: null
    	},
    }, {
    	name: "飛天の神獣皇 ラオ・イーシェン",
    	cardno: 4425,
    	imageno: -1,
    	hp: 2697,
    	atk: 2623,
    	cost: 45,
    	attr: [0, -1],
    	species: [1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Fastskill(1),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Statusup(0, 200),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "火属性の味方のHPを回復、神族・天使はさらに回復(火：8％ / 火+種族：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに火属性の味方を30％で蘇生(回復：30％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "火属性の味方のHPを回復、神族・天使はさらに回復(火：11％ / 火+種族：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに火属性の味方を50％で蘇生(回復：50％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "明日を見つめるふたり 犬夜叉＆かごめ",
    	cardno: 4174,
    	imageno: -1,
    	hp: 2502,
    	atk: 2731,
    	cost: 46,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
			{ /* 経験値取得量アップⅠ */ },
    	],
    	as1: {
    		desc: "3チェインで敵全体へダメージ/180％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを1遅らせる",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "敵全体へダメージ/180％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを1遅らせ、火属性のダメージ(180％)",
    		turn: 6,
    		proc: null
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
    		proc: [ChainEnhance(0.2, [1,0,0,0,0], 0), ChainSpecEnhance(0.4, [1,0,0,0,0], [0,9], 0)],
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
    		proc: [ChainEnhance(0.3, [1,0,0,0,0], 0), ChainSpecEnhance(0.6, [1,0,0,0,0], [0,9], 0)],
    	},
    	ss2: {
    		desc: "ジャンルパネルを火属性化し、チェインがプラス1の効果を付与",
    		turn: 5,
    		proc: [panel_chainplus(1)],
    	},
    }, {
    	name: "死界の焔 ヴィヴィ＆イザヴェリ",
    	cardno: 4438,
    	imageno: -1,
    	hp: 3468,
    	atk: 2554,
    	cost: 46,
    	attr: [0, -1],
    	species: [2],
    	awakes: [
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [2, 9, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [2, 9, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [2, 9, ]),
            Spec_statusup(200, 0, [2, 9, ]),
    	],
    	as1: {
    		desc: "味方のMAXHP10％を使い、火属性の味方の攻撃力をアップ/+50％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "味方のMAXHP10％を使い、火属性の味方の攻撃力をアップ/+70％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "猛き獣の統率者 ヴォルフ・ロイ",
    	cardno: 4448,
    	imageno: -1,
    	hp: 3406,
    	atk: 2599,
    	cost: 47,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Statusup(200, 0),
            Statusup(200, 0),
            Statusup(200, 0),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(1),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ、10チェインで更にダメージアップ(5チェイン：350％ / 10チェイン：650％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン味方全体を徐々に回復する(15％×3T)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ、10チェインで更にダメージアップ(5チェイン：450％ / 10チェイン：750％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復する、さらに5ターン味方全体を徐々に回復する(回復：35％ / 徐々に回復：15％×5T)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "大海の獣と戯れる ヴォルフ・ロイ",
    	cardno: 4459,
    	imageno: -1,
    	hp: 3038,
    	atk: 2920,
    	cost: 46,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Costdown(2),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "デッキの属性の数だけ攻撃力アップ(1属性：250％ / 2属性：400％ / 3属性：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火・水属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "デッキの属性の数だけ攻撃力アップ(1属性：300％ / 2属性：500％ / 3属性：700％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火・水属性化し、ダメージ25％軽減の効果を付与",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "優しき獣と謳われる ヴォルフ・ロイ",
    	cardno: 4467,
    	imageno: -1,
    	hp: 2738,
    	atk: 3276,
    	cost: 48,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Statusup(200, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Statusup(0, 200),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインかつパネルが2色でダメージがイチかバチかアップ、3色でダメージがイチかバチかアップ(2色：350％～600％ / 3色：450％～850％)",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 0,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインかつパネルが2色でダメージがイチかバチかアップ、3色でダメージがイチかバチかアップ(2色：350％～900％ / 3色：450％～1150％)",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの75％を使い敵全体へダメージ、さらに味方全体のHPを回復する(攻撃：300％ / 回復：25％)",
    		turn: 10,
    		proc: null
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
    		proc: [ChainAttrAttack(3, 0, [0,0,1,0,0]), add_cond(ChainAttrAttack(13, 0, [0,0,1,0,0]), when_hp_less(0.5))]
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
    		proc: [ChainAttrAttack(4, 0, [0,0,1,0,0]), add_cond(ChainAttrAttack(19, 0, [0,0,1,0,0]), when_hp_less(0.5))]
    	},
    	ss2: {
    		desc: "2ターン、致死ダメージを受けたら一度だけHP15％で起死回生",
    		turn: 10,
    		proc: [ss_revival(0.15, 2)]
    	},
    }, {
    	name: "大地を穿つ竜魔獣 エスタロス",
    	cardno: 4666,
    	imageno: -1,
    	hp: 1781,
    	atk: 3898,
    	cost: 50,
    	attr: [0, -1],
    	species: [0],
    	awakes: [
            Fastskill(1),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Statusup(200, 0),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Statusup(0, 200),
            Spec_statusup(0, 200, [0, ]),
    	],
    	as1: {
    		desc: "HP全快で雷属性の敵単体へ特効3連撃/計500％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(150％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "HP全快で雷属性の敵単体へ特効3連撃/計600％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(220％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "覚醒の天元魔道士 エステル・モカ",
    	cardno: 4596,
    	imageno: -1,
    	hp: 2694,
    	atk: 2929,
    	cost: 43,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 200),
            Fastskill(2),
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "火属性の味方を回復、HP50%以下なら更に回復(通常時:11%/HP50%以下:20%)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50%を使い敵全体へダメージ(130％×味方の人数)",
    		turn: 11,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "火属性の味方を回復、HP50%以下なら更に回復(通常時:13%/HP50%以下:22%)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50%を使い敵全体へダメージ(160％×味方の人数)",
    		turn: 13,
    		proc: null
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
    	name: "「妹」の極み エミリア・トドロキ",
    	cardno: 4454,
    	imageno: -1,
    	hp: 3238,
    	atk: 2662,
    	cost: 48,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Costdown(2),
            Spec_statusup(0, 200, []),
            Spec_statusup(200, 0, []),
            Costdown(4),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "味方全員のHPを回復、術士はさらに回復(通常：11％ / 術士：16％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のHPを20％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "味方全員のHPを回復、術士はさらに回復(通常：13％ / 術士：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い、敵全体のHPを30％減少させる",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "恋☆メガトン エミリア・トドロキ",
    	cardno: 4468,
    	imageno: -1,
    	hp: 3064,
    	atk: 2928,
    	cost: 43,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "5チェインで火属性の味方の攻撃力をアップ、術士はさらにアップ(5チェイン：+40％ / 5チェイン+種族：+70％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン全属性のダメージを25％軽減する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "5チェインで火属性の味方の攻撃力をアップ、術士はさらにアップ(5チェイン：+70％ / 5チェイン+種族：+100％)",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン全属性のダメージを50％軽減する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "マジカルアイドル エリーゼ・ハナエ",
    	cardno: 3646,
    	imageno: -1,
    	hp: 2567,
    	atk: 2542,
    	cost: 34,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [4, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [4, ]),
            Spec_statusup(0, 200, [4, ]),
    	],
    	as1: {
    		desc: "天使と妖精の仲間の数だけダメージ大アップ",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体のHPを25％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "天使と妖精の仲間の数だけダメージ絶大アップ",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体のHPを30％減少させる",
    		turn: 0,
    		proc: null
    	},
    }, {
    	name: "焔騎士の忠誠 エルト・ファレンツ",
    	cardno: 3890,
    	imageno: -1,
    	hp: 2894,
    	atk: 2443,
    	cost: 45,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [8, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで火属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+30％ / 火戦士：+60％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを1早める",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで火属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+40％ / 火戦士：+80％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "ロード・オブ・ラグナロク・ゼロ",
    	cardno: 4016,
    	imageno: -1,
    	hp: 3189,
    	atk: 4004,
    	cost: 71,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Fastskill(1),
            Costdown(2),
            Costdown(2),
            Spec_statusup(0, 200, [0, ]),
            Spec_statusup(200, 0, [0, ]),
            Spec_statusup(0, 200, [0, ]),
            Spec_statusup(200, 0, [0, ]),
    	],
    	as1: {
    		desc: "3チェインで敵全体へ分散攻撃/350％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(180%)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで敵全体へ分散攻撃/450％÷対象数",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(260%)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "威風の魔銃斬 オーギュスト・ランゲ",
    	cardno: 4688,
    	imageno: -1,
    	hp: 2431,
    	atk: 3273,
    	cost: 45,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            NEFTJOD(30),
            Statusup(0, 100),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Statusup(200, 0),
            Costdown(2),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵単体へダメージ(380％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵単体へダメージ(500％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "繚焔の魔紅 カスミ・キサラギ",
    	cardno: 4134,
    	imageno: -1,
    	hp: 2467,
    	atk: 2531,
    	cost: 34,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(100, 0),
            Statusup(0, 100),
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
    	],
    	as1: {
    		desc: "火属性の味方のHPを回復、術士はさらに回復(火：10％ / 火+種族：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "火属性の味方のHPを回復、術士はさらに回復(火：13％ / 火+種族：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火属性化し、攻撃力アップの効果を付与(+20％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "奪魂の怪炎 カーナ・リリ",
    	cardno: 4852,
    	imageno: -1,
    	hp: 3073,
    	atk: 2732,
    	cost: 41,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
    	],
    	as1: {
    		desc: "5チェインで火属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、アンサースキル発動時間を10秒延長する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインで火属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "解答を見破る",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "迸る竜炎の朱 キャナル・エアガイツ",
    	cardno: 4571,
    	imageno: -1,
    	hp: 2965,
    	atk: 3031,
    	cost: 44,
    	attr: [0, -1],
    	species: [0],
    	awakes: [
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Statusup(200, 0),
            Statusup(0, 200),
            Costdown(4),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(0, 200, [0, ]),
    	],
    	as1: {
    		desc: "火・水属性の味方を回復、HP50％以下でさらに回復(通常：11％ / HP50％以下：21％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン全属性のダメージを25％軽減する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "火・水属性の味方を回復、HP50％以下でさらに回復(通常：13％ / HP50％以下：23％)",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン全属性のダメージを50％軽減する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "炎竜の進撃者 キャナル・エアガイツ",
    	cardno: 4763,
    	imageno: -1,
    	hp: 1453,
    	atk: 4802,
    	cost: 45,
    	attr: [0, -1],
    	species: [0],
    	awakes: [
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(0, 200, [0, ]),
            Statusup(0, 500),
    	],
    	as1: {
    		desc: "10チェインで雷属性の敵単体へ特効ダメージ/965％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い敵全体へダメージ(90％×味方の人数)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 700),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "10チェインで雷属性の敵単体へ特効ダメージ/1065％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い敵全体へダメージ(130％×味方の人数)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "世界断絶 キャンディーⅩⅢ",
    	cardno: 4137,
    	imageno: -1,
    	hp: 2280,
    	atk: 2763,
    	cost: 34,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "戦士の仲間の数だけダメージアップ/100+40％×種族数",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "戦士の仲間の数だけダメージアップ/100+60％×種族数",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "蒼焔風馳の鎌鼬 鬼狩りキュウマ",
    	cardno: 5054,
    	imageno: -1,
    	hp: 1621,
    	atk: 4029,
    	cost: 46,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            Costdown(2),
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            NEFTJOD(30),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(0, 200),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "HP15％以下でダメージアップ/1600％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの95％を使い敵全体へダメージ(330％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "HP15％以下でダメージアップ/2100％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの95％を使い敵全体へダメージ(450％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "不滅の主従 キワム＆アウデアムス",
    	cardno: 3730,
    	imageno: -1,
    	hp: 2457,
    	atk: 3031,
    	cost: 47,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(0, 200, [8, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "其は深淵の災い キワム＆鋼鉄の獣",
    	cardno: 4237,
    	imageno: -1,
    	hp: 2344,
    	atk: 3120,
    	cost: 47,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Spec_statusup(200, 0, [8, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のHPを20％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインでMAXHP15％を使い、ダメージアップ/650％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のHPを25％減少させる",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "滅屍冥刃 グリード・サクリファイス",
    	cardno: 5114,
    	imageno: -1,
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
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体の攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "スペシャルスキルの発動ターンを3早め、敵全体の攻撃ターンを3遅らせる",
    		turn: 15,
    		proc: null
    	},
    }, {
    	name: "紅き黄昏 クルス・ドラク",
    	cardno: 4576,
    	imageno: -1,
    	hp: 2701,
    	atk: 2821,
    	cost: 43,
    	attr: [0, -1],
    	species: [2],
    	awakes: [
            Statusup(0, 100),
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [2, ]),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "雷属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに火属性の味方を30％で蘇生(回復：30％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "雷属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに火属性の味方を50％で蘇生(回復：50％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "隔世の傍観者 サジェ・カムラナ",
    	cardno: 3696,
    	imageno: -1,
    	hp: 2665,
    	atk: 2723,
    	cost: 40,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 100),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(100, 0),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "5チェインで火属性の味方の攻撃力を超極大アップ/+60％(+60%)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、アンサースキル発動時間を10秒延長する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインで火属性の味方の攻撃力を超極大アップ、神族はさらにアップ(火：+60%/火＋同種族:+100%)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターンの間、アンサースキル発動時間を15秒延長する",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "陽光の綺麗石 サティサ・テオトリ",
    	cardno: -1,
    	imageno: -1,
    	hp: 2402,
    	atk: 3023,
    	cost: 49,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Spec_statusup(200, 0, [1, 4, ]),
            Fastskill(2),
            Spec_statusup(0, 100, [1, 4, ]),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [1, 4, ]),
    	],
    	as1: {
    		desc: "10チェインでダメージアップ/700％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "10チェインでダメージアップ/800％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火属性化し、攻撃力アップの効果を付与(30％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "拒絶の完全世界 シェイナ・メイヴ",
    	cardno: 4158,
    	imageno: -1,
    	hp: 1483,
    	atk: 4479,
    	cost: 47,
    	attr: [0, -1],
    	species: [2],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            NEFTJOD(30),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 200),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [2, ]),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "3チェインで味方のMAXHP10％を使い、ダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵単体へダメージ(380％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで味方のMAXHP10％を使い、ダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵単体へダメージ(500％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "絶門魔道の終端 シド・ハーロック",
    	cardno: 4680,
    	imageno: -1,
    	hp: 2582,
    	atk: 3021,
    	cost: 41,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Fastskill(1),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(150％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "雷属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(230％)",
    		turn: 11,
    		proc: null
    	},
    }, {
    	name: "妖しき夜行の領袖 シド・ハーロック",
    	cardno: 4629,
    	imageno: -1,
    	hp: 2762,
    	atk: 3251,
    	cost: 46,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Costdown(2),
            Statusup(0, 100),
            NEFTJOD(30),
            Fastskill(1),
            Costdown(2),
            Statusup(0, 100),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "味方のMAXHP10％を使い、雷属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "味方のMAXHP10％を使い、雷属性の敵単体へ特効ダメージ/600％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "命絶つ葬爪の華 シャミア・ルゥ",
    	cardno: 4142,
    	imageno: -1,
    	hp: 2003,
    	atk: 3212,
    	cost: 38,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Fastskill(1),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を3回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン自分の攻撃力をアップ(150％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(1000, 0),
    	],
    	as2: {
    		desc: "敵単体を3回連続攻撃/計350％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン自分の攻撃力をアップ(250％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "剛腕熱血番長 ジョージ・トドロキ",
    	cardno: 4456,
    	imageno: -1,
    	hp: 2352,
    	atk: 2433,
    	cost: 57,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Costdown(2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "7チェインで敵単体を4回連続攻撃/計450％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(180％)",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 800),
    	],
    	as2: {
    		desc: "7チェインで敵単体を4回連続攻撃/計550％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(260％)",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "鬼モテコーデ ジョージ・トドロキ",
    	cardno: 4471,
    	imageno: -1,
    	hp: 2850,
    	atk: 2830,
    	cost: 54,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(0, 100),
            Fastskill(1),
            Statusup(0, 200),
            Fastskill(1),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "敵単体を3回連続攻撃、HP80％以上でさらにダメージアップ(通常：計250％ / HP80％以上：計300％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火属性の5回連続ダメージ(計180％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "敵単体を3回連続攻撃、HP80％以上でさらにダメージアップ(通常：計350％ / HP80％以上：計400％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火属性の5回連続ダメージ(計380％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "燃える拳と鉄板 ジョージ＆アキラ",
    	cardno: 4495,
    	imageno: -1,
    	hp: 2005,
    	atk: 3053,
    	cost: 34,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Spec_statusup(100, 0, [8, ]),
    	],
    	as1: {
    		desc: "5チェインで敵単体を6回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの60％を使い、3ターン自分の攻撃力をアップ(150％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 600),
            Statusup(200, 0),
    	],
    	as2: {
    		desc: "敵単体を6回連続攻撃/計350％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの60％を使い、4ターン自分の攻撃力をアップ(250％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "燃盛る不尽焔嶺 スオウ・カグツチ",
    	cardno: 4124,
    	imageno: -1,
    	hp: 2532,
    	atk: 2821,
    	cost: 46,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Spec_statusup(200, 0, [1, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "5チェインで敵単体を3回連続攻撃/計450％",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン600以下の全属性ダメージを無効化する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "5チェインで敵単体を3回連続攻撃/計550％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン800以下の全属性ダメージを無効化する",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "悠の照神 ステイシー・マーキュリー",
    	cardno: -1,
    	imageno: -1,
    	hp: 2521,
    	atk: 2934,
    	cost: 41,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(100, 0),
            Fastskill(1),
            Fastskill(1),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "雷属性の敵単体へ特攻4連撃/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "雷属性の敵単体へ特攻4連撃/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火属性化し、攻撃力アップの効果を付与(+30％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "時を呼ぶ ステイシー・マーキュリー",
    	cardno: -1,
    	imageno: -1,
    	hp: 2431,
    	atk: 3142,
    	cost: 43,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Spec_statusup(0, 200, [1, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [1, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "残りHPが80％以上でダメージアップ/300％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "残りHPが80％以上でダメージアップ300％、7チェインで更にアップ700％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火属性化し、チェインがプラス2の効果を付与",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "灼角の破壊者 ズローヴァ・ヤガダ",
    	cardno: 3893,
    	imageno: -1,
    	hp: 2258,
    	atk: 3181,
    	cost: 46,
    	attr: [0, -1],
    	species: [2],
    	awakes: [
            Statusup(0, 100),
            Statusup(200, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Fastskill(2),
            Spec_statusup(200, 0, [2, ]),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "5チェインで雷属性の敵単体へ大ダメージ/650％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火属性のダメージ(200％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインで雷属性の敵単体へ大ダメージ/750％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火属性のダメージ(400％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "逆襲に染まった忘却 ゼノン",
    	cardno: 4681,
    	imageno: -1,
    	hp: 2612,
    	atk: 3113,
    	cost: 38,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Statusup(0, 100),
            Statusup(200, 0),
            Costdown(2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "敵全体へ分散攻撃/275％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン火・水属性のダメージを70％軽減する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "敵全体へ分散攻撃/375％÷対象数",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン火・水属性のダメージを70％軽減する",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "終へ誘う死霊術 セリナ・ナイトメア",
    	cardno: 4859,
    	imageno: -1,
    	hp: 2825,
    	atk: 2997,
    	cost: 47,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            NEFTJOD(30),
            Statusup(200, 0),
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [2, ]),
            Spec_statusup(200, 0, [2, ]),
    	],
    	as1: {
    		desc: "火属性の味方の攻撃力をアップ/+35％",
    		proc: null
    	},
    	ss1: {
    		desc: "4ターン敵全体に毒のダメージを与える(5000ダメージ)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ/+55％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン敵全体に毒のダメージを与える(9999ダメージ)",
    		turn: 11,
    		proc: null
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
    		proc: [ChainDualAttack(4.5, 5, 3), ChainDualAttack(7.5, 10, 3)],
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
    		proc: [ChainDualAttack(5.5, 5, 3), ChainDualAttack(8.5, 10, 3)],
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50%を使い敵全体へダメージ(160％×味方の人数)",
    		turn: 12,
    		proc: [ss_damage_all(ss_consume_all_cond(1.6, 0.5), [0])],
    	},
    }, {
    	name: "時海の航海者 ダム・リフリス",
    	cardno: 3823,
    	imageno: -1,
    	hp: 2422,
    	atk: 2812,
    	cost: 42,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Costdown(2),
            Costdown(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(通常：20％ / 種族：40％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火・水属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(通常：30％ / 種族：60％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "大人だけの秘密の魅力 チーザ",
    	cardno: 4363,
    	imageno: -1,
    	hp: 3332,
    	atk: 2111,
    	cost: 44,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(200, 0),
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "3チェインで火属性の味方の攻撃力をアップ、術士はさらにアップ(3チェイン：+30％ / 3チェイン+術士：+60％)",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン火属性の味方の攻撃力をアップ(+40％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで火属性の味方の攻撃力をアップ、術士はさらにアップ(3チェイン：+40％ / 3チェイン+術士：+80％)",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン火属性の味方の攻撃力をアップ(+60％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "叡智の編纂者 ティア・ソピア",
    	cardno: -1,
    	imageno: -1,
    	hp: 3003,
    	atk: 2543,
    	cost: 48,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            NEFTJOD(30),
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "7チェインで火属性の味方の攻撃力をアップ/+80％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス2の効果を付与",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "7チェインで火属性の味方の攻撃力をアップ/+100％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインがプラス3の効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "野生の獣撃 ドゥンバ・バ",
    	cardno: 4221,
    	imageno: -1,
    	hp: 2032,
    	atk: 3035,
    	cost: 44,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Spec_statusup(200, 0, [5, ]),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            NEFTJOD(30),
            Spec_statusup(0, 200, [5, ]),
            Spec_statusup(200, 0, [5, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [5, ]),
    	],
    	as1: {
    		desc: "3チェインで味方のMAXHP15％を使い、敵全体へ分散攻撃/450％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで味方のMAXHP15％を使い、敵全体へ分散攻撃/550％÷対象数",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "蛇骨の真王 トキオ＆エクスアルバ",
    	cardno: 3739,
    	imageno: -1,
    	hp: 2357,
    	atk: 3131,
    	cost: 48,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "5チェインで雷属性の敵単体へ大ダメージ/650％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のガードを解除する",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインで雷属性の敵単体へ大ダメージ/750％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のガード＆ダメージブロックを解除する",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "太陽ノ現身 ナユタ・ヒノカミ",
    	cardno: 4682,
    	imageno: -1,
    	hp: 3043,
    	atk: 2661,
    	cost: 39,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
            Statusup(200, 0),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            NEFTJOD(60),
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(200, 0, [9, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
    	],
    	as1: {
    		desc: "火属性の味方の攻撃力をアップ/+35％",
    		proc: null
    	},
    	ss1: {
    		desc: "自分を犠牲に全員をHP75％蘇生",
    		turn: 11,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ/+55％",
    		proc: null
    	},
    	ss2: {
    		desc: "自分を犠牲に全員をHP100％蘇生",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "炎の鋼鉄剣 ノア・アームストロング",
    	cardno: 4461,
    	imageno: 6186,
    	hp: 1952,
    	atk: 3248,
    	cost: 42,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            Costdown(2),
            NEFTJOD(30),
            Statusup(0, 100),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(100, 0),
            Fastskill(1),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "残りHPが80％以上でダメージアップ、リーダー時さらにアップ(HP80％以上：250％ / リーダー時：300％)",
    		proc: [add_cond(ChainAttack(2.5, 0), when_hp_more(0.8)), add_cond(ChainAttack(3, 0), when_leader(), when_hp_more(0.8))]
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "残りHPが80％以上でダメージアップ、リーダー時さらにアップ(HP80％以上：350％ / リーダー時：400％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "鉄剣開票係 ノア・アームストロング",
    	cardno: 4516,
    	imageno: -1,
    	hp: 2227,
    	atk: 3432,
    	cost: 46,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
			{ /* ゴールド取得量アップⅠ */ },
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "7チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体のガード＆ダメージブロックを解除する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 600),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "7チェインでダメージアップ/600％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体のガード＆ダメージブロックを解除し、火属性のダメージ(400％)",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "己の道を進む ライ・ハナビシ",
    	cardno: 4625,
    	imageno: -1,
    	hp: 2521,
    	atk: 2392,
    	cost: 31,
    	attr: [0, -1],
    	species: [9],
    	awakes: [{ /* 経験値取得量アップⅠ */ },
            Fastskill(1),
            Heal_afterbattle(10),
            Statusup(200, 0),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Statusup(0, 200),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 100, [9, ]),
            Fastskill(1),
    	],
    	as1: {
    		desc: "3チェインで敵全体へ分散攻撃/300％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火属性の5回連続ダメージ(150％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(100, 0),
            Statusup(0, 800),
    	],
    	as2: {
    		desc: "3チェインで敵全体へ分散攻撃/400％÷対象数",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火属性の5回連続ダメージ(350％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "復活の紅蓮道士 フー・シャオラン",
    	cardno: 3992,
    	imageno: -1,
    	hp: 2582,
    	atk: 2322,
    	cost: 36,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Fastskill(1),
            Fastskill(1),
            Statusup(100, 0),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [2, ]),
    	],
    	as1: {
    		desc: "火属性の味方を回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "火属性の味方を回復/15％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火属性化し、回復の効果を付与(8％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "破槍の獄炎帝 ブリューダイン・ギア",
    	cardno: 4651,
    	imageno: -1,
    	hp: 3183,
    	atk: 2801,
    	cost: 70,
    	attr: [0, -1],
    	species: [1],
    	awakes: [
            Statusup(200, 0),
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(200, 0, [0, 1, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [0, 1, ]),
            NEFTJOD(30),
    	],
    	as1: {
    		desc: "火属性の味方の攻撃力をアップ、神族と龍族はさらにアップ(火：+30％ / 火+種族：+40％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに火属性の味方を30％で蘇生(回復：30％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(700, 0),
            Statusup(0, 300),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ、神族と龍族はさらにアップ(火：+50％ / 火+種族：+80％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに火属性の味方を30％で蘇生、20チェインで100％蘇生(回復：50％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "ぷるぷるの王 ペンプッチン",
    	cardno: 4325,
    	imageno: -1,
    	hp: 2431,
    	atk: 2446,
    	cost: 47,
    	attr: [0, -1],
    	species: [4],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Costdown(2),
            Spec_statusup(200, 0, [4, ]),
            Spec_statusup(0, 200, [4, ]),
    	],
    	as1: {
    		desc: "5チェインで敵単体を3回連続攻撃、HP50％以下で5回連続攻撃になり更にダメージアップ(5チェイン：計400％ / HP50％以下：計600％)",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン500以下の全属性ダメージを無効化する",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "敵単体を3回連続攻撃、HP50％以下で5回連続攻撃になり更にダメージアップ(通常：計400％ / HP50％以下：計600％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン600以下の全属性ダメージを無効化する",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "あらぶる森の王様 ポポル",
    	cardno: 4856,
    	imageno: -1,
    	hp: 3522,
    	atk: 3309,
    	cost: 44,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Heal_afterbattle(10),
            Fastskill(2),
            Spec_statusup(0, 200, [4, ]),
            Spec_statusup(200, 0, [4, ]),
            Spec_statusup(200, 0, [4, ]),
    	],
    	as1: {
    		desc: "味方全体のHPを回復、妖精と天使はさらに回復(通常：11％ / 種族：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体のHPを25％減少させる、HP20％未満で更に15％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "味方全体のHPを回復、妖精と天使はさらに回復(通常：13％ / 種族：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体のHPを30％減少させる、HP20％未満で更に20％減少させる",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "全力の恋天使 マーガレット・リル",
    	cardno: 4033,
    	imageno: -1,
    	hp: 2404,
    	atk: 2965,
    	cost: 45,
    	attr: [0, -1],
    	species: [3],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(200, 0),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(0, 200, [3, 4, ]),
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [3, 4, ]),
            Spec_statusup(0, 200, [3, 4, ]),
    	],
    	as1: {
    		desc: "雷属性の敵単体へ特攻3連撃/計400％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火属性の5回連続ダメージ(計180％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の敵単体へ特攻3連撃/計500％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火属性の5回連続ダメージ(計380％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "黄金の双翼輪 ミカエラ・セラフィム",
    	cardno: 3986,
    	imageno: -1,
    	hp: 2663,
    	atk: 2673,
    	cost: 43,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Fastskill(1),
            Costdown(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [3, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "天地分かつ姉弟 ミカエラ＆イザーク",
    	cardno: 4744,
    	imageno: 6580,
    	hp: 2213,
    	atk: 3142,
    	cost: 43,
    	attr: [0, 2],
    	species: [3],
    	awakes: [
            Fastskill(2),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
            Attr_relief([1, 0, 1, 0, 0, ], 10),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(0, 200, [3, ]),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [3, ]),
    	],
    	as1: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
    		proc: ChainPanelsAttack(0, 4, 5.5, 3)
    	},
    	ss1: {
    		desc: "敵全体へ火・雷属性のダメージ(180％)",
    		turn: 8,
    		proc: [ss_damage_all(1.8, [0,2])]
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "MAXHP15％を使い、3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：900％)",
    		proc: add_cond(ChainPanelsAttack(0, 5, 9, 3), as_consume_own(0.15), as_consume_all(0.1))
    	},
    	ss2: {
    		desc: "敵全体へ火・雷属性のダメージ(260％)",
    		turn: 12,
    		proc: [ss_damage_all(2.6, [0,2])]
    	},
    }, {
    	name: "眩き天使の夏 ミカエラ・セラフィム",
    	cardno: 4626,
    	imageno: -1,
    	hp: 2835,
    	atk: 3192,
    	cost: 44,
    	attr: [0, -1],
    	species: [3],
    	awakes: [
            Fastskill(1),
            Costdown(2),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Statusup(0, 200),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [3, ]),
    	],
    	as1: {
    		desc: "火属性の味方の攻撃力をアップ、リーダー時さらにアップ(通常：+40％ / リーダー時：+50％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ、リーダー時さらにアップ(通常：+60％ / リーダー時：+70％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "追憶の聖王 ミカエラ・セラフィム",
    	cardno: 5026,
    	imageno: -1,
    	hp: 2543,
    	atk: 4583,
    	cost: 43,
    	attr: [0, -1],
    	species: [3],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            NEFTJOD(30),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 200),
            Spec_statusup(200, 0, [3, ]),
            Spec_statusup(0, 200, [3, ]),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "3チェインで敵全体へダメージ/180％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い敵全体へダメージ(90％×味方の人数)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 1000),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "3チェインで敵全体へダメージ/220％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い敵全体へダメージ(130％×味方の人数)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "ぼんぼり金魚と舞う夜空 初音ミク",
    	cardno: 4883,
    	imageno: -1,
    	hp: 3521,
    	atk: 2421,
    	cost: 46,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            NEFTJOD(30),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "5チェインで火属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス1の効果を付与",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインで火属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインがプラス2の効果を付与",
    		turn: 5,
    		proc: null
    	},
    }, {
    	name: "愛で繋いだ心の架け橋 ミミ＆ララ",
    	cardno: 5110,
    	imageno: -1,
    	hp: 4558,
    	atk: 2345,
    	cost: 44,
    	attr: [0, -1],
    	species: [3],
    	awakes: [
            Costdown(4),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Statusup(0, 200),
            Spec_statusup(0, 200, [3, ]),
            Attr_statusup(200, 0, [0, 0, 0, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [3, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "味方全体のHPを回復、HP50％以下でさらに回復(通常：11％ / HP50％以下：20％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 4,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "味方全体のHPを回復、HP50％以下でさらに回復(通常：13％ / HP50％以下：22％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化し、ダメージ25％軽減の効果を付与",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "深淵の女王 ミュール＆レベリオー",
    	cardno: 4249,
    	imageno: -1,
    	hp: 2905,
    	atk: 2323,
    	cost: 47,
    	attr: [0, -1],
    	species: [2],
    	awakes: [
            NEFTJOD(30),
            Spec_statusup(0, 100, [2, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(100, 0, [2, ]),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Spec_statusup(200, 0, [2, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "残りHPが80％以上で火属性の味方の攻撃力をアップ/+50％",
    		proc: null
    	},
    	ss1: {
    		desc: "直前に発動したスペシャルスキルを発動する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "残りHPが80％以上で火属性の味方の攻撃力をアップ/+70％",
    		proc: null
    	},
    	ss2: {
    		desc: "直前に発動したスペシャルスキルを発動する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "煌きの艶麗華月 ユウギリ・アメノ",
    	cardno: 4150,
    	imageno: -1,
    	hp: 2433,
    	atk: 2543,
    	cost: 40,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Fastskill(1),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Spec_statusup(0, 200, [5, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [5, ]),
    	],
    	as1: {
    		desc: "敵単体へのダメージアップ＆敵HPを吸収する(攻撃：250％ / 吸収：敵に与えるダメージの5％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ、さらに火属性の味方のHPを回復＆敵HPを吸収する(攻撃：320％ / 回復：2％ / 吸収：与ダメージの5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火属性化し、回復の効果を付与(8％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "時空の聖鎚 ユッカ・エンデ",
    	cardno: 3796,
    	imageno: -1,
    	hp: 2747,
    	atk: 2841,
    	cost: 43,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Statusup(0, 200),
            Spec_statusup(200, 0, [1, 9, ]),
            Spec_statusup(0, 200, [1, 9, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "7チェインで火属性の味方の攻撃力をアップ/+80％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを2遅らせる",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "7チェインで火属性の味方の攻撃力をアップ/+100％",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "獄冥の狂炎 ユリシーズ・ヴィクト",
    	cardno: 4538,
    	imageno: -1,
    	hp: 2585,
    	atk: 2928,
    	cost: 41,
    	attr: [0, -1],
    	species: [2],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Costdown(2),
            Costdown(2),
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [2, ]),
            Statusup(0, 200),
    	],
    	as1: {
    		desc: "火属性の味方のHPを回復、魔族はさらに回復(火：9％ / 火+種族：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、状態異常を回復する(50％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火属性の味方のHPを回復、魔族はさらに回復(火：12％ / 火+種族：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全回復し、状態異常を回復する",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "魔巧技匠 ユニコ・ランドハイア",
    	cardno: 3786,
    	imageno: -1,
    	hp: 2531,
    	atk: 2521,
    	cost: 42,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Attr_relief([1, 1, 0, 0, 0, ], 10),
            Statusup(200, 0),
            Costdown(2),
            Statusup(200, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "火・雷属性の味方を回復、術士なら更に回復(通常:10% / 術士:15%)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火・雷属性の味方を回復、術士なら更に回復(通常:13% / 術士:18%)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火・雷属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "万象殲滅の覇王 ユーム・フロイト",
    	cardno: 4151,
    	imageno: -1,
    	hp: 2500,
    	atk: 2500,
    	cost: 40,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            NEFTJOD(30),
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Statusup(0, 200),
            Fastskill(2),
            Spec_statusup(0, 200, [2, ]),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "ダメージがイチかバチかアップ/0～500％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体のHPを20％減少させる",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "ダメージがイチかバチかアップ/0～700％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体のHPを25％減少させる",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "蓋天の神罰者 ラト・ファルネーゼ",
    	cardno: 3637,
    	imageno: -1,
    	hp: 2508,
    	atk: 2649,
    	cost: 47,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Spec_statusup(0, 100, [1, 8, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(0, 200, [1, 8, ]),
            Spec_statusup(200, 0, [1, 8, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "神族と戦士の仲間の数だけダメージ大アップ+40％×種族数(1体：140% / 2体：180%/ 3体：220% 4体：260% 5体：300%)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性の究極ダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "神族と戦士の仲間の数だけダメージ絶大アップ/+60％×種族数(1体：160% / 2体：220%/ 3体：280% 4体：340% 5体：400%)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性の超究極ダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "煌眼覇軍の女帝 リヴェータ・イレ",
    	cardno: 4292,
    	imageno: -1,
    	hp: 2459,
    	atk: 2843,
    	cost: 45,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Costdown(2),
            Fastskill(1),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
    	],
    	as1: {
    		desc: "雷属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせ、敵全体へ火属性のダメージ(180％)",
    		turn: 15,
    		proc: null
    	},
    }, {
    	name: "愛ゆえの暴虐 リヴェータ・イレ",
    	cardno: 5027,
    	imageno: -1,
    	hp: 2702,
    	atk: 4199,
    	cost: 43,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Fastskill(1),
            Statusup(200, 0),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Statusup(0, 200),
            Spec_statusup(0, 200, [8, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで雷属性の敵単体へ特攻3連撃/計525％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン自分の攻撃力をアップ(150％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで雷属性の敵単体へ特攻3連撃/計625％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン自分の攻撃力をアップ。HP20％以下の時、さらに自分の攻撃力をアップ)(通常：200％ / HP20％以下：1200％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "ポッキー大好き魔法使い リコ",
    	cardno: 4331,
    	imageno: -1,
    	hp: 2129,
    	atk: 2803,
    	cost: 37,
    	attr: [0, -1],
    	species: [9],
    	awakes: [{ /* ゴールド取得量アップⅠ */ },
            Statusup(0, 100),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "5チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：650％)",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン雷属性ダメージを25％軽減する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "パネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：650％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン水・雷属性ダメージを25％軽減する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "超ビッグ魔道少女 リルム・ロロット",
    	cardno: 4422,
    	imageno: -1,
    	hp: 2328,
    	atk: 2971,
    	cost: 44,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Costdown(2),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "3チェインで雷属性の敵単体へ特攻ダメージ、10チェインで更に特攻ダメージ(3チェイン：350％ / 10チェイン：850％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをシャッフル",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで雷属性の敵単体へ特攻ダメージ、10チェインで更に特攻ダメージ(3チェイン：450％ / 10チェイン：950％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火属性化し、チェインがプラス1の効果を付与",
    		turn: 5,
    		proc: null
    	},
    }, {
    	name: "夏の日の涼風 リンカ・ワイアット",
    	cardno: 4457,
    	imageno: -1,
    	hp: 2921,
    	atk: 3060,
    	cost: 45,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Fastskill(1),
            Statusup(200, 0),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで火属性の味方の攻撃力をアップ、10チェインでさらにアップ(3チェイン：+40％ / 10チェイン：+100％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで火属性の味方の攻撃力をアップ、10チェインでさらにアップ(3チェイン：+60％ / 10チェイン：+120％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化し、チェインがプラス1の効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "胸焦がす乙女心 リンカ・ワイアット",
    	cardno: 4464,
    	imageno: -1,
    	hp: 2718,
    	atk: 3393,
    	cost: 46,
    	attr: [0, -1],
    	species: [8],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Statusup(0, 200),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン自分の攻撃力をアップ(150％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "MAXHP15％を使い、3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：900％)",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン自分の攻撃力をアップ(250％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "心優しき黄泉の使者 六道りんね",
    	cardno: 4196,
    	imageno: -1,
    	hp: 2085,
    	atk: 2133,
    	cost: 34,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Statusup(100, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を5回連続攻撃、HP90％以上でさらにダメージアップ(3チェイン：計300％ / HP90％以上：計350％)",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵単体へダメージ(260％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "敵単体を5回連続攻撃、HP90％以上でさらにダメージアップ(通常：計300％ / HP90％以上：計350％)",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵単体へダメージ(380％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "不思議な時に薫る歌 巡音ルカ",
    	cardno: 4895,
    	imageno: -1,
    	hp: 3102,
    	atk: 3003,
    	cost: 32,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
    	],
    	as1: {
    		desc: "3チェインで敵単体へのダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火属性のダメージ、さらに味方全体のHPを回復(攻撃：150％ / 回復：20％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで敵単体へのダメージアップ、さらに火属性の味方のHPを回復(攻撃：350％ / 回復：5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火属性のダメージ、さらに味方全体のHPを回復(攻撃：200％ / 回復：25％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "真・猫族勇者 ルディ・レッドソル",
    	cardno: 3901,
    	imageno: -1,
    	hp: 2645,
    	atk: 2627,
    	cost: 43,
    	attr: [0, -1],
    	species: [-1],
    	awakes: [
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Spec_statusup(200, 0, [5, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [5, ]),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [5, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [5, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン水・雷属性のダメージを50％軽減する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "2ターン水・雷属性のダメージを75％軽減する",
    		turn: 9,
    		proc: null
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
    	name: "闇の中で微笑む邪神 ルルベル",
    	cardno: 4637,
    	imageno: -1,
    	hp: 3676,
    	atk: 2453,
    	cost: 49,
    	attr: [0, -1],
    	species: [2],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            NEFTJOD(30),
            Spec_statusup(0, 200, [2, ]),
            Fastskill(2),
            Heal_afterbattle(10),
            Spec_statusup(200, 0, [2, ]),
    	],
    	as1: {
    		desc: "火属性の味方のHPを回復、パネルの色が増す度さらに回復(1色：11％ / 2色：15％ / 3色：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを1遅らせる",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "火属性の味方のHPを回復、パネルの色が増す度さらに回復(1色：13％ / 2色：17％ / 3色：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを2遅らせ、20チェインで更に2遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "煌る命の確率論 レウィス・ジェメル",
    	cardno: 4966,
    	imageno: 6701,
    	hp: 2778,
    	atk: 2253,
    	cost: 35,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Statusup(200, 0),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
    	],
    	as1: {
    		desc: "火属性の味方の攻撃力をアップ/+30％",
    		proc: ChainEnhance(0.3, [1,0,0,0,0], 0)
    	},
    	ss1: {
    		desc: "3ターンの間、アンサースキル発動時間を5秒延長する",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ/+60％",
    		proc: ChainEnhance(0.6, [1,0,0,0,0], 0)
    	},
    	ss2: {
    		desc: "解答を見破る",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "改新の大華焔 レナ・イラプション",
    	cardno: 4738,
    	imageno: -1,
    	hp: 2238,
    	atk: 4362,
    	cost: 45,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 100),
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
            Fastskill(2),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の敵単体へ特効ダメージ、HP80％以上でさらにダメージアップ(通常：300％ / HP80％以上：450％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体のHP20％減少させる、5チェインを消費しさらに15％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の敵単体へ特効ダメージ、HP80％以上でさらにダメージアップ(通常：400％ / HP80％以上：550％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体のHP25％減少させる、5チェインを消費しさらに15％減少させる",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "恋と炎の大爆裂 レナ・イラプション",
    	cardno: 4739,
    	imageno: -1,
    	hp: 3024,
    	atk: 3476,
    	cost: 47,
    	attr: [0, -1],
    	species: [9],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Statusup(0, 200),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+30％ / 火+種族：+45％)",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+40％ / 火+種族：+65％)",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "漆黒の極巨星 アルドベリク・ゴドー",
    	cardno: 4579,
    	imageno: -1,
    	hp: 2341,
    	atk: 2531,
    	cost: 48,
    	attr: [0, 2],
    	species: [2],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [2, ]),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "4チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い、敵単体へ火・雷属性の5回連続ダメージ(計250％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 700),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "4チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い、敵単体へ火・雷属性の5回連続ダメージ(計450％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "二心一閃の太刀筋 ウッド＆リーリ",
    	cardno: 4658,
    	imageno: -1,
    	hp: 2189,
    	atk: 2051,
    	cost: 52,
    	attr: [0, 2],
    	species: [8],
    	awakes: [
            Costdown(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(100, 0),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Statusup(0, 100),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを1遅らせる",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ、さらに火・雷属性の味方のHPを回復(攻撃：400％ / 回復：5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを1遅らせ、火属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "常時共闘戦線 エミリア＆カエデ",
    	cardno: 4534,
    	imageno: -1,
    	hp: 2331,
    	atk: 2389,
    	cost: 46,
    	attr: [0, 2],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
			{ /* 経験値取得量アップⅠ */ },
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を3回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにダメージ25％軽減の効果を付与",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで敵単体を3回連続攻撃/計450％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにダメージ50％軽減の効果を付与",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "空の昏き英雄 ディートリヒ・ベルク",
    	cardno: 4754,
    	imageno: -1,
    	hp: 2104,
    	atk: 3893,
    	cost: 46,
    	attr: [0, 2],
    	species: [8],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_relief([0, 1, 0, 0, 0, ], 20),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "4チェインで敵全体へ分散攻撃/450％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い、ジャンルパネルにチェインがプラス3の効果を付与",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "4チェインで敵全体へ分散攻撃/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い、ジャンルパネルにチェインがプラス4の効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "クィーン・オブ・アーモンド ファム",
    	cardno: 4341,
    	imageno: -1,
    	hp: 2323,
    	atk: 2288,
    	cost: 50,
    	attr: [0, 2],
    	species: [9],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            NEFTJOD(30),
			{ /* 経験値取得量アップⅠ */ },
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "5チェインで敵単体を3回連続攻撃/計450％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを2遅らせる",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインで敵単体を3回連続攻撃/計550％",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを2遅らせ、20チェインで更に2遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "想いを翼に乗せて 初音ミク",
    	cardno: 4866,
    	imageno: -1,
    	hp: 4030,
    	atk: 1998,
    	cost: 45,
    	attr: [0, 2],
    	species: [9],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_relief([0, 1, 0, 0, 0, ], 20),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Heal_afterbattle(10),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "火・雷属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "チェインプラス2の効果、さらに3ターン味方全体を徐々に回復する(15％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "火・雷属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "チェインプラス3の効果、さらに5ターン味方全体を徐々に回復する(20％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "輝く笑顔に魅せられて 初音ミク",
    	cardno: 4958,
    	imageno: -1,
    	hp: 2702,
    	atk: 1832,
    	cost: 26,
    	attr: [0, 2],
    	species: [9],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Heal_afterbattle(10),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "火・雷属性の味方のHPを回復/11％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを1遅らせる",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火・雷属性の味方のHPを回復、さらに火・雷属性の味方の攻撃力をアップ(回復：11％ / 攻撃力：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを2遅らせる",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "鏡に映る夢現世界 ミラノ・サリス",
    	cardno: 4591,
    	imageno: -1,
    	hp: 3008,
    	atk: 2005,
    	cost: 49,
    	attr: [0, 2],
    	species: [-1],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "火・雷属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、スキルカウンター待機",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 300),
            Statusup(700, 0),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "火・雷属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターンの間、スキルカウンター待機",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "シェアハピネスな魔法 リコ＆グリ",
    	cardno: 4309,
    	imageno: -1,
    	hp: 2436,
    	atk: 1414,
    	cost: 40,
    	attr: [0, 2],
    	species: [9],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "残りHPが80％以上でダメージアップ、パネルの色が増す度さらにアップ(1色：250％ / 2色：400％ / 3色：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火・雷属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "残りHPが80％以上でダメージアップ、パネルの色が増す度さらにアップ(1色：350％ / 2色：500％ / 3色：650％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火・雷属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "信頼と絆に結ばれる りんね＆桜",
    	cardno: 4170,
    	imageno: -1,
    	hp: 2867,
    	atk: 1832,
    	cost: 46,
    	attr: [0, 2],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
			{ /* ゴールド取得量アップⅠ */ },
            Statusup(0, 200),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Heal_afterbattle(10),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "7チェインで火・雷属性の味方の攻撃力をアップ/+80％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン火・雷属性の味方の攻撃力をアップ(+40％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火・雷属性の味方の攻撃力をアップ/+80％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン火・雷属性の味方の攻撃力をアップ(+60％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "夢と愛の結晶 アーモンドピーク",
    	cardno: 4387,
    	imageno: -1,
    	hp: 2536,
    	atk: 2017,
    	cost: 51,
    	attr: [0, 1],
    	species: [9],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Heal_afterbattle(10),
            Statusup(200, 0),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "味方全員のHPを回復、術士はさらに回復、15チェインでさらに術士は回復(通常：5％ / 術士：10％ / 15チェイン+術士：25％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "味方全員のHPを回復、術士はさらに回復、15チェインでさらに術士は回復(通常：5％ / 術士：10％ / 15チェイン+術士：30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを3早める、20チェインでさらに1早める",
    		turn: 12,
    		proc: null
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
    	name: "神戦に導く使徒 エアリル・セレ",
    	cardno: 4024,
    	imageno: -1,
    	hp: 2302,
    	atk: 2129,
    	cost: 45,
    	attr: [0, 1],
    	species: [-1],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Fastskill(1),
            Attr_relief([0, 1, 0, 0, 0, ], 20),
            Spec_statusup(200, 0, [3, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [3, ]),
            Spec_statusup(0, 200, [3, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を2回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルに攻撃力アップの効果を付与(+40％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで敵単体を2回連続攻撃/計450％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルに攻撃力アップの効果を付与(+80％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "伝説の装備！ ギザ勇者しょこたん",
    	cardno: 3899,
    	imageno: -1,
    	hp: 2333,
    	atk: 1735,
    	cost: 34,
    	attr: [0, 1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Statusup(200, 0),
            Costdown(2),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ、リーダー時さらにアップ(通常：300％ / リーダー時：350％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに火・水属性の味方を蘇生(回復：25％ / 蘇生：10％)",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ、リーダー時さらにアップ(通常：400％ / リーダー時：450％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに火・水属性の味方を蘇生(回復：25％ / 蘇生：25％)",
    		turn: 14,
    		proc: null
    	},
    }, {
    	name: "竜迅百騎将軍 ライサ・ナトゥル",
    	cardno: 4760,
    	imageno: -1,
    	hp: 3654,
    	atk: 2532,
    	cost: 48,
    	attr: [0, 1],
    	species: [0],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(200, 0, [0, ]),
            Spec_statusup(0, 200, [0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [0, ]),
            Spec_statusup(0, 200, [0, ]),
    	],
    	as1: {
    		desc: "5チェインで敵単体を3回連続攻撃/計450％",
    		proc: null
    	},
    	ss1: {
    		desc: "4ターン敵全体に毒のダメージを与える(5000ダメージ)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインで敵単体を3回連続攻撃/計550％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン敵全体に毒のダメージを与える(9999ダメージ)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "覇眼戦線 リヴェータ＆ルドヴィカ",
    	cardno: 4434,
    	imageno: -1,
    	hp: 2283,
    	atk: 2575,
    	cost: 52,
    	attr: [0, 1],
    	species: [8],
    	awakes: [
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Fastskill(1),
            Statusup(200, 0),
            NEFTJOD(30),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ、リーダー時さらにアップ(3チェイン：350％ / リーダー時：400％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火・水属性の5回連続ダメージ(計180％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ、リーダー時さらにアップ(3チェイン：450％ / リーダー時：500％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火・水属性の5回連続ダメージ(計380％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "誓いの凛炎 リンカ・ワイアット",
    	cardno: 4519,
    	imageno: -1,
    	hp: 2429,
    	atk: 2435,
    	cost: 49,
    	attr: [0, 1],
    	species: [8],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Attr_relief([0, 1, 0, 0, 0, ], 20),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス2の効果を付与",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 600),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "5チェインでMAXHP15％を使い、ダメージアップ/650％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインがプラス3の効果を付与",
    		turn: 8,
    		proc: null
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
    		proc: [ss_consume_all(0.5), ss_enhance_all(0.7, 2, [1,0,0,0,0])]
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
    		proc: [ss_consume_all(0.5), ss_enhance_all(1.0, 4, [1,0,0,0,0])]
    	},
    }, {
    	name: "AbCd-X:《闇鎧の虐帝 ウラガーン》",
    	cardno: 5048,
    	imageno: -1,
    	hp: 4513,
    	atk: 500,
    	cost: 60,
    	attr: [0, 4],
    	species: [-1],
    	awakes: [
            Costdown(4),
            Fastskill(1),
            NEFTJOD(60),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Costdown(2),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "敵単体へのダメージアップ/900％",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン敵全体に毒のダメージを与える(9999ダメージ)",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ/1000％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン敵全体に毒のダメージを与える(24999ダメージ)",
    		turn: 15,
    		proc: null
    	},
    }, {
    	name: "全てをいただく交渉術 覚醒のすじこ",
    	cardno: 4677,
    	imageno: -1,
    	hp: 2304,
    	atk: 2224,
    	cost: 36,
    	attr: [0, 4],
    	species: [9],
    	awakes: [{ /* ゴールド取得量アップⅠ */ },
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
			{ /* 経験値取得量アップⅠ */ },
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Costdown(2),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+20％ / 火+種族：+35％)",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン味方全体を徐々に回復する(15％×5T)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "火属性の味方の攻撃力をアップ、術士はさらにアップ(火：+25％ / 火+種族：+45％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン味方全体を徐々に回復する(20％×5T)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "悪徳の飛翼 ディール・ロクスビー",
    	cardno: 4606,
    	imageno: -1,
    	hp: 2500,
    	atk: 1769,
    	cost: 42,
    	attr: [0, 4],
    	species: [9],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Statusup(0, 200),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "火属性の味方のHPを回復/12％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火・闇属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "火属性の味方のHPを回復/14％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火・闇属性化し、回復の効果を付与(10％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "AbCd-M:《孤独の囚人 テルミド》",
    	cardno: 5044,
    	imageno: -1,
    	hp: 4210,
    	atk: 2433,
    	cost: 48,
    	attr: [0, 4],
    	species: [-1],
    	awakes: [
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            NEFTJOD(60),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Heal_afterbattle(10),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "火属性の味方のHPを回復、リーダー時さらに回復(通常：13％ / リーダー時：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "火属性の味方のHPを回復、リーダー時さらに回復(通常：16％ / リーダー時：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める。HP20％以下でさらに3早める。",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "AbCd-Μμ:《輝煌を拒絶する テルミド》",
    	cardno: -1,
    	imageno: -1,
    	hp: 2778,
    	atk: 3132,
    	cost: 48,
    	attr: [0, 4],
    	species: [-1],
    	awakes: [
            NEFTJOD(30),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            NEFTJOD(30),
            Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "5チェインで火属性の味方の攻撃力をアップ、パネルの色が2色以上でさらにアップ(単色：+60％ / 複色：+90％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火・闇属性の5回連続ダメージ。HP20％以下でさらにダメージアップ(通常：計180％ / HP20％以下：計360％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインで火属性の味方の攻撃力をアップ、パネルの色が2色以上でさらにアップ(単色：+90％ / 複色：+120％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火・闇属性の5回連続ダメージ。HP20％以下でさらにダメージアップ(通常：計380％ / HP20％以下：計760％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "AbCd-Λ:《冥黙の白鴉 ニレイヌ》",
    	cardno: 5047,
    	imageno: -1,
    	hp: 2603,
    	atk: 3534,
    	cost: 49,
    	attr: [0, 4],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Statusup(200, 0),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Spec_statusup(0, 200, [11, ]),
            Fastskill(2),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを2遅らせる。HP20％以下でさらに1遅らせる。",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "パネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを3遅らせる。HP20％以下でさらに1遅らせる。",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "AbCd-Λλ:《甘く朽ち果てる闇 ニレイヌ》",
    	cardno: 5040,
    	imageno: -1,
    	hp: 3632,
    	atk: 2710,
    	cost: 49,
    	attr: [0, 4],
    	species: [-1],
    	awakes: [
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Fastskill(1),
            Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Fastskill(2),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "7チェインで敵単体を3回連続攻撃/計550％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン全属性のダメージを35％軽減する。HP20％以下でさらに3ターン軽減する。",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "7チェインで敵単体を3回連続攻撃/計650％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン全属性のダメージを50％軽減する。HP20％以下でさらに3ターン軽減する。",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "儚き闇の夜に 初音ミク",
    	cardno: 4871,
    	imageno: -1,
    	hp: 2003,
    	atk: 3731,
    	cost: 50,
    	attr: [0, 4],
    	species: [2],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 0, 0, 0, ]),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Statusup(200, 0),
            NEFTJOD(30),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            Fastskill(2),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "10チェインでダメージアップ/700％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス3の効果を付与",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "10チェインでダメージアップ、さらに敵のHPを吸収(攻撃力/700％ / 吸収：3％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインがプラス4の効果を付与",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "AbCd-Θ:《万象焦尽天 ラヒルメ》",
    	cardno: 5051,
    	imageno: -1,
    	hp: 2326,
    	atk: 3080,
    	cost: 60,
    	attr: [0, 4],
    	species: [-1],
    	awakes: [
            Costdown(4),
            Fastskill(1),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Panel_boost([1, 0, 0, 0, 0, ], 1),
            Panel_boost([1, 0, 0, 0, 0, ], 2),
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(200, 0, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 200, [1, 0, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "AbCdの仲間の数だけダメージアップ/+60％×種族数(1体：160%/2体：220%/3体：280%/4体：340%/5体：400%)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火・闇属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "AbCdの仲間の数だけダメージアップ/+80％×種族数(1体：180%/2体：260%/3体：340%/4体：420%/5体：500%)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火・闇属性化し、攻撃力アップかダメージ25％軽減の効果を付与",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "蒼天の奔流 アヴィン・シュミット",
    	cardno: 4647,
    	imageno: -1,
    	hp: 2631,
    	atk: 3384,
    	cost: 48,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_relief([0, 1, 1, 0, 0, ], 20),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "種族が物質・魔法生物・神族の敵単体へ特効ダメージ、パネルの色が増す度さらにアップ(1色：550％ / 2色：700％ / 3色：800％)",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン己の力を高める(350％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "種族が物質・魔法生物・神族の敵単体へ特効ダメージ、パネルの色が増す度さらにアップ(1色：650％ / 2色：800％ / 3色：900％)",
    		proc: null
    	},
    	ss2: {
    		desc: "2ターン己の力を高める(500％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "凶を追う蒼穹 アヴィン・シュミット",
    	cardno: 4643,
    	imageno: -1,
    	hp: 2323,
    	atk: 4034,
    	cost: 47,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Heal_afterbattle(10),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [8, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "種族が物質・魔法生物・神族の敵単体へ特効ダメージ/600％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体のカウンターを解除する",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 1000),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "種族が物質・魔法生物・神族の敵単体へ特効ダメージ/700％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体のカウンターを解除し、水属性のダメージ(400％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "優しき神々の冷酷 アウラ・アマタ",
    	cardno: 4644,
    	imageno: -1,
    	hp: 3162,
    	atk: 2839,
    	cost: 46,
    	attr: [1, -1],
    	species: [3],
    	awakes: [
            Costdown(2),
            Fastskill(1),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Costdown(2),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [3, ]),
    	],
    	as1: {
    		desc: "3チェインで水属性の味方の攻撃力をアップ/+50％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン全属性のダメージを25％軽減する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで水属性の味方の攻撃力をアップ/+70％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン全属性のダメージを50％軽減する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "真理と安らぎの永劫 アウラ・アマタ",
    	cardno: 4634,
    	imageno: -1,
    	hp: 3038,
    	atk: 3104,
    	cost: 48,
    	attr: [1, -1],
    	species: [3],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Heal_afterbattle(10),
            Fastskill(2),
            Spec_statusup(0, 200, [3, ]),
            Spec_statusup(200, 0, [3, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を3回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン敵の状態異常攻撃を無効化する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで敵単体を3回連続攻撃/計450％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン敵の状態異常攻撃を無効化する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "虹色の恋模様 アーシア・ベネット",
    	cardno: 4469,
    	imageno: -1,
    	hp: 3425,
    	atk: 2579,
    	cost: 48,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Heal_afterbattle(10),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "水属性の味方の攻撃力をアップ、パネルの色が増す度さらにアップ(1色：+30％ / 2色：+50％ / 3色：+80％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、アンサースキル発動時間を10秒延長する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "水属性の味方の攻撃力をアップ、パネルの色が増す度さらにアップ(1色：+50％ / 2色：+70％ / 3色：+100％)",
    		proc: null
    	},
    	ss2: {
    		desc: "解答を見破る",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "僕を見つめる瞳 アーシア・ベネット",
    	cardno: 4621,
    	imageno: -1,
    	hp: 3328,
    	atk: 2713,
    	cost: 48,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Heal_afterbattle(10),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "水属性の味方を回復/14％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを1遅らせる",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "水属性の味方を回復/17％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを2遅らせる",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "神話に記された英雄 アスカ・イズモ",
    	cardno: 4683,
    	imageno: -1,
    	hp: 2739,
    	atk: 2862,
    	cost: 42,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(0, 100),
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "火属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水属性化し、攻撃力アップの効果を付与(+20％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "撃砕の鉄腕 アトヤ＆リベルタス",
    	cardno: 4246,
    	imageno: -1,
    	hp: 3134,
    	atk: 2327,
    	cost: 49,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [8, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにダメージ25％軽減の効果を付与",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにダメージ50％軽減の効果を付与",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "輝ける星霜の剣 アネモネ・フラル",
    	cardno: 4594,
    	imageno: -1,
    	hp: 3048,
    	atk: 2684,
    	cost: 45,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Statusup(0, 200),
            Fastskill(1),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [8, ]),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "水属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+20％ / 水+種族：+45％)",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン水属性の味方の攻撃力をアップ(+40％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "水属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+20％ / 水+種族：+65％)",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン水属性の味方の攻撃力をアップ(+60％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "鋼鉄の管理者 アムベル・ケイ",
    	cardno: 4499,
    	imageno: -1,
    	hp: 2350,
    	atk: 2942,
    	cost: 45,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(200, 0),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
    	],
    	as1: {
    		desc: "火属性の敵単体へ特効ダメージ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルに攻撃力アップの効果を付与(+40％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 200),
            Statusup(700, 0),
    	],
    	as2: {
    		desc: "MAXHP20％を使い、火属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルに攻撃力アップの効果を付与(+80％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "残酷な世界の覚醒 アンジェリカ",
    	cardno: 5111,
    	imageno: -1,
    	hp: 4056,
    	atk: 4132,
    	cost: 43,
    	attr: [1, -1],
    	species: [1],
    	awakes: [
            Spec_statusup(0, 200, [1, ]),
            Fastskill(1),
            Statusup(0, 100),
            Spec_statusup(200, 0, [1, ]),
            Costdown(4),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色でさらにアップ(2色：400％ / 3色：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性のダメージ、さらに味方全体を回復(攻撃：200％ / 回復：50％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 600),
    	],
    	as2: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色でさらにアップ(2色：550％ / 3色：700％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性のダメージ、さらに味方全体を全回復(攻撃：200％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "甘い夢色林檎 イヴ・フォルクロール",
    	cardno: 4148,
    	imageno: -1,
    	hp: 2727,
    	atk: 2219,
    	cost: 42,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(200, 0),
            Statusup(0, 200),
            Costdown(2),
            Costdown(2),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "水属性の味方を回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを1000回復する",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の味方を回復/15％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを2000回復する",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "攻究魔法の最終形 イズロム・ガドラ",
    	cardno: 4850,
    	imageno: -1,
    	hp: 2524,
    	atk: 3132,
    	cost: 41,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ水属性の5回連続ダメージ(計180％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ水属性の5回連続ダメージ(計380％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "決意の蒼覇剣 イツキ・マスグレイヴ",
    	cardno: 4445,
    	imageno: -1,
    	hp: 2222,
    	atk: 3288,
    	cost: 40,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 400),
            Statusup(400, 0),
            Costdown(2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Heal_afterbattle(10),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を3回連続攻撃、リーダー時さらにアップ(通常：計300％ / リーダー時：計350％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで敵単体を3回連続攻撃、リーダー時さらにアップ(通常：計400％ / リーダー時：計450％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水属性化し、チェインがプラス1の効果を付与",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "清澄の恋心 イツキ・マスグレイヴ",
    	cardno: 4470,
    	imageno: -1,
    	hp: 2397,
    	atk: 3113,
    	cost: 40,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ、HP80％以上でさらにダメージアップ(3チェイン：300％ / 3チェイン+HP80％以上：350％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体の状態異常を回復する",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "ダメージアップ、HP80％以上でさらにダメージアップ(通常：300％ / HP80％以上：350％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、状態異常を回復する(50％)",
    		turn: 9,
    		proc: null
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
    	name: "私だけの笑顔 イツキ・マスグレイヴ",
    	cardno: 4618,
    	imageno: -1,
    	hp: 2921,
    	atk: 3201,
    	cost: 48,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 200),
            Statusup(200, 0),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Heal_afterbattle(10),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで火属性の敵単体へ特効ダメージ/525％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、状態異常を回復する(回復：50％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで火属性の敵単体へ特効ダメージ/625％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全回復し、状態異常を回復する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "黒翼の使徒 イドラ・ダールベルク",
    	cardno: 3850,
    	imageno: -1,
    	hp: 2546,
    	atk: 2932,
    	cost: 40,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Spec_statusup(0, 200, [1, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "3チェインで火属性の敵単体へダメージ/525％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン自分の攻撃力をアップ(150％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで火属性の敵単体へダメージ/625％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン自分の攻撃力をアップ(250％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "前刻の蒼神 イレーナ・フリエル",
    	cardno: 3821,
    	imageno: -1,
    	hp: 2876,
    	atk: 2521,
    	cost: 42,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(100, 0),
            Statusup(0, 200),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(200, 0, [1, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "味方全員のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを2遅らせる",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "味方全員のHPを回復し、さらに水属性の味方の攻撃力をアップ(回復：13％ / 攻撃力アップ：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "時思う司神 イレーナ・フリエル",
    	cardno: 3802,
    	imageno: -1,
    	hp: 2867,
    	atk: 2831,
    	cost: 46,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Spec_statusup(200, 0, [1, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [1, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "水属性の味方のHPを回復、神族はさらに回復(通常：10％ / 神族：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "通常：13％ / 神族：20％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水属性化し、回復の効果を付与(10％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "双つ刃の潜行者 エマ・ユーイング",
    	cardno: 4528,
    	imageno: -1,
    	hp: 3332,
    	atk: 2645,
    	cost: 48,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
    	],
    	as1: {
    		desc: "5チェインで水属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "4ターン敵全体に毒のダメージを与える(5000ダメージ)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインで水属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン敵全体に毒のダメージを与える(9999ダメージ)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "封神の機剣 エリオット・シクス",
    	cardno: 4165,
    	imageno: -1,
    	hp: 1965,
    	atk: 3693,
    	cost: 45,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを1遅らせる",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを1遅らせ、水属性のダメージ(180％)",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "遠き夢の幻 エリカ・オイリン",
    	cardno: 3847,
    	imageno: -1,
    	hp: 2684,
    	atk: 2477,
    	cost: 47,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(200, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 100, [9, ]),
			{ /* 経験値取得量アップⅠ */ },
    	],
    	as1: {
    		desc: "術士の仲間の数だけダメージアップ/100+40％×種族数",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体のHPを20％減少させる",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "術士の仲間の数だけダメージアップ/100+60％×種族数",
    		proc: null
    	},
    	ss2: {
    		desc: "(必要正解数 10ターン)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "蒼星輝剣 カトレア・ラインハルト",
    	cardno: 3780,
    	imageno: -1,
    	hp: 2433,
    	atk: 2643,
    	cost: 38,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "敵単体へのダメージアップ250％、3チェインで更にアップ300％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ350％、3チェインで更にアップ＆敵HPを吸収する400％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "流水華聖神 カマラ・シャニ",
    	cardno: 4685,
    	imageno: -1,
    	hp: 2692,
    	atk: 2913,
    	cost: 43,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Costdown(2),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "敵の数に関わらず敵全体へダメージアップ/150％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火・水属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "敵の数に関わらず敵全体へダメージアップ/160％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "式紙舞う花風 キリエ・ユウテンジ",
    	cardno: 3788,
    	imageno: -1,
    	hp: 2697,
    	atk: 2495,
    	cost: 38,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Heal_afterbattle(10),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "水属性の味方を回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "水・雷属性ダメージを2ターンの間50％軽減する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "水属性の味方を回復/15％",
    		proc: null
    	},
    	ss2: {
    		desc: "水・雷属性ダメージを3ターンの間50％軽減する",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "蒼世界の双牙 クラヴィル・スティ",
    	cardno: 3887,
    	imageno: -1,
    	hp: 2551,
    	atk: 2756,
    	cost: 46,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Costdown(2),
            Statusup(200, 0),
            Spec_statusup(200, 0, [8, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "3チェインで敵全体へダメージ/180％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを1早める",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "敵全体へダメージ/180％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "流星滑降少女 サクヤ・クランブル",
    	cardno: 4861,
    	imageno: -1,
    	hp: 2058,
    	atk: 3420,
    	cost: 43,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(0, 400),
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "火属性の敵単体へ特効3連撃/計400％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス1の効果を付与",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 700),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "火属性の敵単体へ特効3連撃/計500％",
    		proc: null
    	},
    	ss2: {
    		desc: "チェインがプラス1の効果、さらに敵全体へ水属性のダメージ(150％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "光の聖女 サーシャ・スターライト",
    	cardno: 3627,
    	imageno: -1,
    	hp: 2368,
    	atk: 2356,
    	cost: 35,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージ絶大アップ/250％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性の究極ダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "3チェインでダメージ極大アップ/350%",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性の超究極ダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "《ザ・セブンを統べる船》",
    	cardno: 0,
    	imageno: -1,
    	hp: 2051,
    	atk: 2673,
    	cost: 52,
    	attr: [1, 4],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            NEFTJOD(30),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "7チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水属性化",
    		turn: 4,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "7チェインでダメージアップ/650％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水・闇属性化し、くじを引く",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "金魚を眺む夏の涼 サーヤ・スズカゼ",
    	cardno: 4570,
    	imageno: -1,
    	hp: 2889,
    	atk: 3171,
    	cost: 45,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(0, 100),
            Fastskill(1),
            Costdown(4),
            Attr_statusup(100, 0, [0, 0, 0, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Attr_statusup(0, 100, [0, 0, 0, 0, 0, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "味方全体のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを1遅らせ、敵全体へ水属性のダメージ(150％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "味方全体のHPを回復、さらに水属性の味方の攻撃力をアップ(回復：16％ / 攻撃：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを1遅らせ、敵全体へ水属性のダメージ、さらに味方全体のHPを回復する(攻撃：150％ / 回復：25％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "海原大魔道教授 ドン・サルーム",
    	cardno: 4555,
    	imageno: -1,
    	hp: 3102,
    	atk: 2698,
    	cost: 50,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
			{ /* 経験値取得量アップⅠ */ },
            NEFTJOD(30),
            Heal_afterbattle(10),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "火属性の敵単体へ特効5連撃、HP80％以上でさらにダメージアップ(通常：計300％ / HP80％以上：計400％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い、解答選択肢を2つ削る",
    		turn: 1,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "火属性の敵単体へ特効7連撃、HP80％以上でさらにダメージアップ(通常：計400％ / HP80％以上：計500％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い、解答を見破る",
    		turn: 2,
    		proc: null
    	},
    }, {
    	name: "滅龍冥刃 シャドウ・サーヴァント",
    	cardno: 4015,
    	imageno: -1,
    	hp: 2359,
    	atk: 3129,
    	cost: 46,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "7チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のHPを20％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のHPを25％減少させる",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "マジェスティック・シャドウ",
    	cardno: 4030,
    	imageno: -1,
    	hp: 2382,
    	atk: 3046,
    	cost: 44,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "7チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵単体へダメージ(380％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "7チェインでダメージアップ/650％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵単体へダメージ(500％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "夕闇の微笑 シャルロッテ・ロマネ",
    	cardno: 4152,
    	imageno: -1,
    	hp: 3034,
    	atk: 1614,
    	cost: 33,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "敵単体へのダメージアップ、HP50％以下でさらにアップ(通常：250％ / HP50％以下：1000％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性のダメージ(150％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ、HP50％以下でさらにアップ(通常：320％ / HP50％以下：1300％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性のダメージ(230％)",
    		turn: 11,
    		proc: null
    	},
    }, {
    	name: "其は新しき光 シャロン・イェルグ",
    	cardno: 3988,
    	imageno: -1,
    	hp: 2878,
    	atk: 2334,
    	cost: 46,
    	attr: [1, -1],
    	species: [3],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Costdown(2),
            Fastskill(1),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [3, ]),
            Spec_statusup(200, 0, [3, ]),
    	],
    	as1: {
    		desc: "味方全体のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン味方全体の攻撃力をアップ(+50％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "味方全体のHPを回復、さらに味方全体の攻撃力をアップ(回復：13％ / 攻撃力アップ：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "2ターン味方全体の攻撃力をアップ(+100％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "金猫色の弾痕 ジル・メイシー",
    	cardno: 4858,
    	imageno: -1,
    	hp: 2714,
    	atk: 3086,
    	cost: 42,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(0, 200, [5, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方のHPを回復/11％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性のダメージ、さらに味方全体のHPを回復(攻撃：140％ / 回復：20％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "水・雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性のダメージ、さらに味方全体のHPを回復(攻撃：150％ / 回復：20％)",
    		turn: 7,
    		proc: null
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
    		proc: ChainAttrAttack(6.5, 5, [1,0,0,0,0])
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
    		proc: ChainAttrAttack(7.5, 5, [1,0,0,0,0])
    	},
    	ss2: {
    		desc: "直前に発動したスペシャルスキルを発動する",
    		turn: 9,
    		proc: [ss_latest_copy()]
    	},
    }, {
    	name: "極美の刃 ステファーヌ・ライリー",
    	cardno: 4537,
    	imageno: -1,
    	hp: 2448,
    	atk: 2935,
    	cost: 40,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Costdown(2),
            Statusup(0, 100),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "火属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ水属性のダメージ(200％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "火属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ水属性のダメージ(400％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "静々と響く海鳴り セイ・シラナミ",
    	cardno: 4127,
    	imageno: -1,
    	hp: 2667,
    	atk: 2728,
    	cost: 46,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを1早める",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ、さらに水属性の味方のHPを回復(通常：350％ / 回復：5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "真の大妖怪 殺生丸",
    	cardno: 4178,
    	imageno: -1,
    	hp: 2230,
    	atk: 3210,
    	cost: 45,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            NEFTJOD(30),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "味方のMAXHP10％を使い、火属性の敵単体へダメージ/500％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い敵全体へダメージ(130％×味方の人数)",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "味方のMAXHP10％を使い、火属性の敵単体へダメージ/600％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い敵全体へダメージ(160％×味方の人数)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "清霊神の聖心 セレサ・ラグヌス",
    	cardno: 4539,
    	imageno: -1,
    	hp: 2438,
    	atk: 3065,
    	cost: 43,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Costdown(2),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Statusup(100, 0),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせ、敵全体へ水属性のダメージ(180％)",
    		turn: 15,
    		proc: null
    	},
    }, {
    	name: "討龍の輝神剣 ゾディアーク",
    	cardno: 4014,
    	imageno: -1,
    	hp: 2954,
    	atk: 2561,
    	cost: 52,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Fastskill(3),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで敵全体へ分散攻撃/350％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水＆雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで敵全体へ分散攻撃/450％÷対象数",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水＆雷属性化し、攻撃力アップの効果を付与(+20％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "インペリアル・ゾディアーク",
    	cardno: 4027,
    	imageno: -1,
    	hp: 2644,
    	atk: 2902,
    	cost: 44,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "5チェインで火属性の敵単体へダメージ/650％",
    		proc: null
    	},
    	ss1: {
    		desc: "1ターン、致死ダメージを受けたら一度だけHP25％で起死回生",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインで火属性の敵単体へダメージ/750％",
    		proc: null
    	},
    	ss2: {
    		desc: "2ターン、致死ダメージを受けたら一度だけHP25％で起死回生",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "お茶の間大魔法 その",
    	cardno: 4421,
    	imageno: -1,
    	hp: 2887,
    	atk: 2444,
    	cost: 47,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(0, 200, [9, ]),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "水属性の味方の攻撃力をアップ、術士はさらにアップ(水：+20％ / 水+種族：+40％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、アンサースキル発動時間を10秒延長する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "水属性の味方の攻撃力をアップ、術士はさらにアップ(水：+30％ / 水+種族：+60％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターンの間、アンサースキル発動時間を15秒延長する",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "空飛ぶ大魔道 ソフィ・ハーネット",
    	cardno: 4337,
    	imageno: -1,
    	hp: 2074,
    	atk: 3135,
    	cost: 37,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 100),
            Fastskill(1),
            Statusup(100, 0),
            Statusup(0, 200),
            Fastskill(1),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをシャッフル",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルに攻撃力アップの効果を付与(+60％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "祝祭の流星群 ソフィ・ハーネット",
    	cardno: 4737,
    	imageno: -1,
    	hp: 2281,
    	atk: 4219,
    	cost: 45,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
    	],
    	as1: {
    		desc: "5チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：650％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ水属性の5回連続ダメージ(計180％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：900％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ水属性の5回連続ダメージ、10チェインを消費しさらにダメージ(通常：計380％ / 10チェイン消費：760％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "幽遠の星海を渡る ソラナ・カルナ",
    	cardno: 4290,
    	imageno: -1,
    	hp: 2701,
    	atk: 2556,
    	cost: 46,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Costdown(2),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Fastskill(1),
            Costdown(2),
            Statusup(0, 100),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "デッキの属性の数だけ攻撃力アップ(1属性：250％ / 2属性：400％ / 3属性：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "デッキの属性の数だけ攻撃力アップ(1属性：300％ / 2属性：500％ / 3属性：700％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化し、回復の効果を付与(5％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "混沌を生む者 ダンケル・アダムス",
    	cardno: 4450,
    	imageno: -1,
    	hp: 2756,
    	atk: 2734,
    	cost: 57,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Costdown(2),
            Costdown(2),
            Costdown(2),
            Statusup(0, 200),
            Statusup(200, 0),
            Fastskill(2),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ、さらに敵のHPを吸収(攻撃：250％ / 吸収：5％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性のダメージ(150％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ、さらに敵のHPを吸収(攻撃：450％ / 吸収：5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性のダメージ(200％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "開け暗黒の夏 ダンケル・アダムス",
    	cardno: 4463,
    	imageno: -1,
    	hp: 2277,
    	atk: 3063,
    	cost: 55,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 200),
            Costdown(2),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "味方のMAXHP10％を使い、敵単体へダメージ/300％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ水属性のダメージ(100％)",
    		turn: 4,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "味方のMAXHP10％を使い、敵単体へダメージ/400％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ水属性のダメージ(250％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "ザ・元凶 ダンケル・アダムス",
    	cardno: 4472,
    	imageno: -1,
    	hp: 2601,
    	atk: 2749,
    	cost: 57,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            NEFTJOD(30),
            Statusup(0, 200),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：350％ / 3色：500％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、アンサースキル発動時間を10秒延長する",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：450％ / 3色：600％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターンの間、アンサースキル発動時間を15秒延長する",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "涙色の絶大魔法 チカ・ストロベリ",
    	cardno: 3903,
    	imageno: -1,
    	hp: 2749,
    	atk: 2343,
    	cost: 46,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(200, 0, [4, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [4, ]),
            Spec_statusup(200, 0, [4, ]),
            Spec_statusup(0, 200, [4, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "7チェインで水属性の味方の攻撃力をアップ/+80％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "水属性の味方の攻撃力をアップ/+80％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水属性化し、チェインがプラス2の効果を付与",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "乱れ咲きの銀吹雪 ツバキ＆ハヅキ",
    	cardno: 4745,
    	imageno: -1,
    	hp: 2135,
    	atk: 3242,
    	cost: 42,
    	attr: [1, 2],
    	species: [8],
    	awakes: [
            Costdown(2),
            Fastskill(1),
            Statusup(200, 0),
			{ /* 経験値取得量アップⅠ */ },
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Fastskill(2),
            Statusup(0, 100),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで火属性の敵単体へ特効5連撃/計525％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン自分の攻撃力をアップ(+350％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで火属性の敵単体へ特効5連撃/計625％",
    		proc: null
    	},
    	ss2: {
    		desc: "2ターン自分の攻撃力をアップ(+500％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "時海の冒険者 ディー・リフリス",
    	cardno: 3822,
    	imageno: -1,
    	hp: 2643,
    	atk: 2645,
    	cost: 43,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Costdown(2),
            Costdown(2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "火・水属性の味方を回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン火・水属性のダメージを50％軽減する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "火・水属性の味方を回復/15％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン火・水属性のダメージを50％軽減する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "魅惑と銀盤の明星 ティファ・テーナ",
    	cardno: 4143,
    	imageno: -1,
    	hp: 2641,
    	atk: 2321,
    	cost: 34,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Statusup(200, 0),
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Spec_statusup(200, 0, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "水属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "解答選択肢を2つ削る",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "解答を見破る",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "託翼の守護聖剣 テオドール・ザザ",
    	cardno: 4141,
    	imageno: -1,
    	hp: 2731,
    	atk: 2553,
    	cost: 43,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Costdown(2),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [3, ]),
            Spec_statusup(200, 0, [3, ]),
            Spec_statusup(0, 200, [3, ]),
            Spec_statusup(200, 0, [3, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "神滅叛帝 テスタメント・ヘイル",
    	cardno: 3782,
    	imageno: -1,
    	hp: 2386,
    	atk: 2743,
    	cost: 36,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 100),
            Statusup(0, 200),
            Statusup(100, 0),
            Spec_statusup(0, 100, []),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [2, ]),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を3回連続攻撃、パネルの色が増す度さらにダメージアップ(1色：計200％、2色：計300％、3色：計450％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性のダメージ(150％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで敵単体を3回連続攻撃、パネルの色が増す度さらにダメージアップ(1色：計300％、2色：計400％、3色：計550％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性のダメージ(220％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "金剛覇軍騎士 デューク・エイジス",
    	cardno: 4427,
    	imageno: -1,
    	hp: 3990,
    	atk: 1401,
    	cost: 43,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(200, 0),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "水属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "水・雷属性ダメージを50％軽減(継続：2ターン)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(2000, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の味方のHPを回復、戦士はさらに回復(水：13％ / 水+種族：17％)",
    		proc: null
    	},
    	ss2: {
    		desc: "水・雷属性ダメージを75％軽減(継続：2ターン)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "天郷の輝光 ペガサスロード",
    	cardno: 4135,
    	imageno: -1,
    	hp: 2568,
    	atk: 2432,
    	cost: 40,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(0, 200),
            Costdown(2),
            Statusup(200, 0),
            Costdown(2),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
    	],
    	as1: {
    		desc: "味方全員のHPを回復、神族はさらに回復(通常：9％ / 種族：16％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "味方全員のHPを回復、神族はさらに回復(通常：12％ / 種族：19％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "嗤う地獄姫 ニル・メルフェゴール",
    	cardno: 4338,
    	imageno: -1,
    	hp: 1126,
    	atk: 4046,
    	cost: 42,
    	attr: [1, -1],
    	species: [2],
    	awakes: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 200),
            Fastskill(1),
            Statusup(100, 0),
            Statusup(0, 100),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "味方のMAXHP10％を使い、敵単体を2回連続攻撃、3チェインで更にダメージアップ(通常：計300％ / 3チェイン：計350％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ水属性のダメージ、残りHPが50％以下でダメージアップ(通常：300％ / HP50％以下：500％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "味方のMAXHP10％を使い、敵単体を2回連続攻撃、3チェインで5回連続攻撃になり更にダメージアップ(通常：計400％ / 3チェイン：計450％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ水属性のダメージ、残りHPが50％以下でダメージアップ(通常：600％ / HP50％以下：800％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "咎魂の断罪鎌 ハクア・デスサイス",
    	cardno: 3785,
    	imageno: -1,
    	hp: 2391,
    	atk: 2801,
    	cost: 36,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Statusup(100, 0),
            Statusup(0, 100),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "5チェインで敵単体へのダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "宵の花鳥風月 ハヅキ・ユメガタリ",
    	cardno: 3985,
    	imageno: -1,
    	hp: 2211,
    	atk: 3088,
    	cost: 43,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Statusup(200, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を4回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン水属性の味方の攻撃力をアップ(+40％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "敵単体を4回連続攻撃/計350％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン水属性の味方の攻撃力をアップ(+60％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "浮遊島の守護者 ピエラ・サバタ",
    	cardno: 4847,
    	imageno: -1,
    	hp: 3249,
    	atk: 2701,
    	cost: 49,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "パネルが2色、3色で水属性の味方の攻撃力をアップ(2色：+60％ / 3色：+100％)",
    		proc: null
    	},
    	ss1: {
    		desc: "スペシャルスキルの発動ターンを1早め、敵全体の攻撃ターンを1遅らせる",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "パネルが2色、3色で水属性の味方の攻撃力をアップ(2色：+80％ / 3色：+120％)",
    		proc: null
    	},
    	ss2: {
    		desc: "スペシャルスキルの発動ターンを2早め、敵全体の攻撃ターンを2遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "想い、純色の雪華 ピノ・マリアンヌ",
    	cardno: 4144,
    	imageno: -1,
    	hp: 2568,
    	atk: 2632,
    	cost: 43,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 100),
            Statusup(100, 0),
            Costdown(2),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
    	],
    	as1: {
    		desc: "味方全員の味方のHPを回復、術士はさらに回復(通常：10％ / 種族：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "味方全員の味方のHPを回復、術士はさらに回復(通常：13％ / 種族：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "氷をつたう夏の滴 ピノ・マリアンヌ",
    	cardno: 4627,
    	imageno: -1,
    	hp: 3025,
    	atk: 2978,
    	cost: 44,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Fastskill(1),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "味方全体のHPを回復、パネルの色が増す度さらに回復(1色：11％ / 2色：15％ / 3色：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "味方全体のHPを回復、パネルの色が増す度さらに回復(1色：13％ / 2色：17％ / 3色：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化し、回復の効果を付与(6％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "怜悧の氷牙 ビルフォード・ロラン",
    	cardno: 3993,
    	imageno: -1,
    	hp: 2547,
    	atk: 2219,
    	cost: 35,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "水属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+20％ / 種族：+40％)",
    		proc: null
    	},
    	ss1: {
    		desc: "解答選択肢を2つ削る",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "水属性の味方の攻撃力をアップ、戦士はさらにアップ(通常：+30％ / 種族：+60％)",
    		proc: null
    	},
    	ss2: {
    		desc: "解答を見破る",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "銀色に躍る フィリー・ハイウインド",
    	cardno: 4430,
    	imageno: -1,
    	hp: 2793,
    	atk: 2675,
    	cost: 31,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Costdown(2),
            Statusup(200, 0),
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [4, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [4, ]),
            Spec_statusup(200, 0, [4, ]),
    	],
    	as1: {
    		desc: "水属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復する(50％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の味方のHPを回復する/15％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復する、さらに5ターン徐々に回復する(回復：35％ / 徐々に回復：15％×5T)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "聖皇の預言者 シャイア・フラクタル",
    	cardno: 3976,
    	imageno: -1,
    	hp: 2902,
    	atk: 2448,
    	cost: 49,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Spec_statusup(200, 0, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Heal_afterbattle(10),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "水属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、状態異常を回復する(回復：50％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、状態異常を回復、さらに水属性の味方を50％で蘇生(回復：50％)",
    		turn: 10,
    		proc: null
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
    		proc: Heal(0.13, [0,1,0,0,0]),
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
    		proc: [poison(9999, 5)],
    	},
    }, {
    	name: "天空の蒼刃 プルミエ・シエル",
    	cardno: 4849,
    	imageno: -1,
    	hp: 2212,
    	atk: 4422,
    	cost: 47,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Attr_relief([1, 0, 0, 0, 0, ], 20),
            Costdown(2),
            Spec_statusup(0, 200, [3, ]),
            Fastskill(2),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Heal_afterbattle(10),
    	],
    	as1: {
    		desc: "2チェインで敵単体を2回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン自分の攻撃力をアップ(+150％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "2チェインで敵単体を2回連続攻撃/計450％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン自分の攻撃力をアップ(+250％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "綺光の聖姫 ベアトリーゼ・テルラ",
    	cardno: 3640,
    	imageno: -1,
    	hp: 2642,
    	atk: 2546,
    	cost: 46,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 100, [3, 8, ]),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(200, 0, [3, 8, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [3, 8, ]),
    	],
    	as1: {
    		desc: "天使と戦士の仲間の数だけダメージ大アップ+40％×種族数(1体：140% / 2体：180%/ 3体：220% 4体：260% 5体：300%)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水属性の究極ダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "天使と戦士の仲間の数だけダメージ絶大アップ/+60％×種族数(1体：160% / 2体：220%/ 3体：280% 4体：340% 5体：400%)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水属性の超究極ダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "救奉聖女 ベルナデッタ・イルマ",
    	cardno: 3874,
    	imageno: -1,
    	hp: 2479,
    	atk: 2455,
    	cost: 35,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Heal_afterbattle(10),
    	],
    	as1: {
    		desc: "種族が魔族・魔法生物の敵単体へダメージ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "種族が魔族・魔法生物の敵単体へダメージ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水属性化し、回復の効果を付与(8％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "超ふんわりお嬢様 牧場しぼり",
    	cardno: 4355,
    	imageno: -1,
    	hp: 3003,
    	atk: 2432,
    	cost: 45,
    	attr: [1, -1],
    	species: [5],
    	awakes: [
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [5, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(0, 200, [5, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [5, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [5, ]),
    	],
    	as1: {
    		desc: "水属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに水属性の味方を蘇生(回復：25％ / 蘇生：25％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の味方のHPを回復、さらに水属性の味方の攻撃力をアップ(回復：16％ / 攻撃力：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに水属性の味方を蘇生(回復：50％ / 蘇生：50％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "貫く心のド真中 マトイ・ナヒサコ",
    	cardno: 4130,
    	imageno: 5804,
    	hp: 2321,
    	atk: 3122,
    	cost: 48,
    	attr: [1, -1],
    	species: [1],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Spec_statusup(200, 0, [1, ]),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [1, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "8チェインでダメージアップ/600％",
    		proc: ChainAttack(6.0, 8)
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス2の効果を付与",
    		turn: 5,
    		proc: [panel_chainplus(2)]
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "8チェインでダメージアップ/700％",
    		proc: ChainAttack(7.0, 8)
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインがプラス3の効果を付与",
    		turn: 8,
    		proc: [panel_chainplus(3)]
    	},
    }, {
    	name: "いつでも学園のヒロイン 初音ミク",
    	cardno: -1,
    	imageno: -1,
    	hp: 3023,
    	atk: 2538,
    	cost: 42,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Statusup(100, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Heal_afterbattle(10),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "水属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターンの間、チェインを保護する",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "水属性の味方のHPを回復/16％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターンの間、チェインを保護する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "夜空に輝く大魔道 メリィ・ミツボシ",
    	cardno: 4719,
    	imageno: -1,
    	hp: 2719,
    	atk: 3150,
    	cost: 49,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 200),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "パネルが2色、3色で火属性の敵単体へ特効ダメージ(2色：550％ / 3色：700％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを1早める",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "パネルが2色、3色で火属性の敵単体へ特効ダメージ(2色：700％ / 3色：900％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "開花と生誕の地母神 ミューズ",
    	cardno: 3790,
    	imageno: -1,
    	hp: 2845,
    	atk: 2534,
    	cost: 43,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(100, 0),
            Fastskill(1),
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(100, 0),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "水属性の味方の攻撃力をアップ、神族なら更にアップ(水：+30％、水+神族：+50％)",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを2遅らせる",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "水属性の味方の攻撃力をアップ、神族なら更にアップ(水：+40％、水+神族：+70％)",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "蒼星紋章士 メリエル・エクリプス",
    	cardno: 4153,
    	imageno: -1,
    	hp: 2344,
    	atk: 2608,
    	cost: 44,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Costdown(2),
            Statusup(0, 200),
            Costdown(2),
            Fastskill(1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "7チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：650％ / 3色：800％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "7チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：750％ / 3色：900％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "桜媛と巫女 ヤチヨ＆インフローレ",
    	cardno: 3736,
    	imageno: -1,
    	hp: 2757,
    	atk: 2631,
    	cost: 44,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Attr_relief([0, 1, 0, 0, 0, ], 20),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Heal_afterbattle(10),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Spec_statusup(200, 0, [8, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "水属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを2遅らせる",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "水属性の味方のHPを回復、さらに水属性の味方の攻撃力をアップ(回復：16％、攻撃力アップ：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "万物の龍神姫 ヤヨイ・クシナダ",
    	cardno: 4862,
    	imageno: -1,
    	hp: 4294,
    	atk: 2530,
    	cost: 45,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            Statusup(200, 0),
            Statusup(0, 200),
            Costdown(4),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(300, 0, [0, 0, 0, 0, 0, ]),
            NEFTJOD(30),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            Fastskill(1),
            Fastskill(2),
    	],
    	as1: {
    		desc: "味方全体のHPを回復/14％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、状態異常を回復する(回復：50％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            NEFTJOD(30),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "味方全体のHPを回復/17％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全回復し、状態異常を回復する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "禁界忌王 ユウェル・サクラリッジ",
    	cardno: 4423,
    	imageno: -1,
    	hp: 2599,
    	atk: 2725,
    	cost: 45,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 100),
            Costdown(2),
            Fastskill(1),
            Costdown(2),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Statusup(200, 0),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "3チェインで敵全体へ分散攻撃/350％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体のHPを25％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで敵全体へ分散攻撃/450％÷対象数",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体のHPを30％減少させる",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "闇を宿す氷眸 ユキヤ・コンラッド",
    	cardno: 4503,
    	imageno: -1,
    	hp: 2657,
    	atk: 2852,
    	cost: 47,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "3チェインで敵全体へ分散攻撃/300％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの80％を使い敵全体へダメージ(130％×味方の人数)",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "3チェインで味方のMAXHP15％を使い、敵全体へ分散攻撃/500％÷対象数",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの80％を使い敵全体へダメージ(150％×味方の人数)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "時忘れの新感覚 ユッカ",
    	cardno: 4346,
    	imageno: -1,
    	hp: 3494,
    	atk: 2212,
    	cost: 48,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Spec_statusup(200, 0, [9, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
    	],
    	as1: {
    		desc: "5チェインで水属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス1の効果を付与",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインで水属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインがプラス2の効果を付与",
    		turn: 5,
    		proc: null
    	},
    }, {
    	name: "高潔孤高の征魔士 ユピナ・レネ",
    	cardno: 4686,
    	imageno: -1,
    	hp: 2623,
    	atk: 3386,
    	cost: 40,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(0, 100),
            Costdown(2),
            NEFTJOD(30),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "デッキに水属性が自分だけの時、敵単体へダメージアップ/600％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "デッキに水属性が自分だけの時、敵単体へダメージアップ/700％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化し、チェインがプラス1の効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "超魔弾使い リィル・ライル",
    	cardno: 4678,
    	imageno: -1,
    	hp: 1980,
    	atk: 3622,
    	cost: 45,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "火属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ水属性のダメージ(200％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "火属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ水属性のダメージ(400％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "夏の七色水飛沫 リィル・ライル",
    	cardno: 4628,
    	imageno: -1,
    	hp: 1530,
    	atk: 4510,
    	cost: 44,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Statusup(0, 100),
            Fastskill(1),
            Statusup(200, 0),
            Costdown(4),
            Fastskill(1),
            Statusup(0, 100),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで火属性の敵単体へ特効ダメージ/525％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをシャッフル",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで火属性の敵単体へ特効ダメージ/625％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水属性化し、チェインがプラス1の効果を付与",
    		turn: 5,
    		proc: null
    	},
    }, {
    	name: "氷雨舞う碧光 リクシス・トラオム",
    	cardno: 4213,
    	imageno: -1,
    	hp: 2431,
    	atk: 2732,
    	cost: 43,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Spec_statusup(200, 0, [0, ]),
            Spec_statusup(0, 200, [0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(0, 200, [0, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "解答選択肢を2つ削る",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "解答を見破る",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "墜月咆吼 リュコス・ヴォーダン",
    	cardno: 4650,
    	imageno: -1,
    	hp: 2991,
    	atk: 3001,
    	cost: 70,
    	attr: [1, -1],
    	species: [1],
    	awakes: [
            Costdown(2),
            Fastskill(2),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Costdown(4),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "5チェインで火属性の敵単体へ特効ダメージ/650％",
    		proc: null
    	},
    	ss1: {
    		desc: "1クエストに1回のみ、敵全体のHPを30％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 700),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "5チェインで火属性の敵単体へ特効ダメージ/750％",
    		proc: null
    	},
    	ss2: {
    		desc: "1クエストに1回のみ、敵全体のHPを35％減少させる",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "破邪心滅の刃 ルヴァル・アウルム",
    	cardno: 4766,
    	imageno: -1,
    	hp: 2631,
    	atk: 3832,
    	cost: 46,
    	attr: [1, -1],
    	species: [1],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Attr_relief([0, 1, 0, 0, 0, ], 20),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "5チェインで火属性の敵単体へ特攻ダメージ/650％",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン味方全体を徐々に回復する(20％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインで火属性の敵単体へ特攻ダメージ/750％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン味方全体を徐々に回復する、HP50％未満でさらに回復(通常：20％ / HP50％未満：30％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "輝龍降臨 ルシェ・ワダツミ",
    	cardno: 3866,
    	imageno: -1,
    	hp: 2030,
    	atk: 2444,
    	cost: 25,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Spec_statusup(0, 200, [0, ]),
            Spec_statusup(200, 0, [0, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [0, ]),
            Spec_statusup(200, 0, [0, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へダメージ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン水属性のダメージを25％軽減する",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の敵単体へダメージ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン水属性のダメージを50％軽減する",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "凛眼戦勝の女帝 ルドヴィカ・ロア",
    	cardno: 4429,
    	imageno: -1,
    	hp: 2934,
    	atk: 2960,
    	cost: 43,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Costdown(2),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "水属性の味方の攻撃力をアップ、リーダー時さらにアップ(通常：+30％ / リーダー時：+45％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体の攻撃力をアップ(+50％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "水属性の味方の攻撃力をアップ、リーダー時さらにアップ(通常：+40％ / リーダー時：+65％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体の攻撃力をアップ(+70％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "ミラクル超奇術 マギカ・ルーシュ",
    	cardno: 4138,
    	imageno: -1,
    	hp: 2567,
    	atk: 932,
    	cost: 45,
    	attr: [1, -1],
    	species: [9],
    	awakes: [
            Costdown(2),
            Statusup(200, 0),
            Statusup(0, 100),
            Fastskill(1),
            Statusup(100, 0),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
			{ /* 経験値取得量アップⅠ */ },
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "敵単体へのダメージアップ/+900％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火・水属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ、ジャンルパネルが3色だとさらにアップ(通常：+900％ / 3色：+1900％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "妖精巫姫 ロレッタ・ミラージュ",
    	cardno: 3862,
    	imageno: -1,
    	hp: 2398,
    	atk: 1865,
    	cost: 25,
    	attr: [1, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Fastskill(1),
            Costdown(2),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "水属性の味方の攻撃力をアップ、術士はさらにアップ(通常：+10％ / 種族：+30％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに水属性の味方を蘇生(回復：25％ / 蘇生：25％)",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "水属性の味方の攻撃力をアップ、術士はさらにアップ(通常：+20％ / 種族：+40％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに水属性の味方を蘇生(回復：50％ / 蘇生：50％)",
    		turn: 14,
    		proc: null
    	},
    }, {
    	name: "制海の剣華 ローレン・ターナー大尉",
    	cardno: 5058,
    	imageno: -1,
    	hp: 2796,
    	atk: 3103,
    	cost: 48,
    	attr: [1, -1],
    	species: [8],
    	awakes: [
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Statusup(0, 200),
            Costdown(2),
            Statusup(0, 200),
            Statusup(0, 200),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "火属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のHPを20％減少させる",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "火属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のHPを20％減少させる、15チェインで更に10％減少させる",
    		turn: 12,
    		proc: null
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
    	name: "蒼氷の智将 アルハル・リノマース",
    	cardno: 3907,
    	imageno: -1,
    	hp: 2645,
    	atk: 1726,
    	cost: 45,
    	attr: [1, 0],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Heal_afterbattle(10),
    	],
    	as1: {
    		desc: "3チェインで火・水属性の味方の攻撃力をアップ、術士はさらにアップ(通常：+30％ / 種族：+60％)",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン火・水属性の味方の攻撃力をアップ(+40％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで火・水属性の味方の攻撃力をアップ、術士はさらにアップ(通常：+40％ / 種族：+80％)",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン火・水属性の味方の攻撃力をアップ(+60％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "響く歌、遠くまで KAITO＆MEIKO",
    	cardno: 4898,
    	imageno: -1,
    	hp: 2874,
    	atk: 2345,
    	cost: 35,
    	attr: [1, 0],
    	species: [9],
    	awakes: [
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
			{ /* 経験値取得量アップⅠ */ },
    	],
    	as1: {
    		desc: "5チェインで火・水属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のガードを解除する",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインで火・水属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のガード＆ダメージブロックを解除する",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "私たち、超無敵のソフィ＆リルム",
    	cardno: 4440,
    	imageno: -1,
    	hp: 2203,
    	atk: 2507,
    	cost: 47,
    	attr: [1, 0],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "4チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火・水属性のダメージ(150％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "4チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火・水属性のダメージ(220％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "破壊と凶滅の祖 アバド・ビジェック",
    	cardno: 4735,
    	imageno: -1,
    	hp: 2781,
    	atk: 2013,
    	cost: 50,
    	attr: [1, 0],
    	species: [2],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Fastskill(1),
            Statusup(200, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Statusup(0, 200),
            Spec_statusup(200, 0, [2, ]),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める、5チェインを消費してさらに1早める",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを3早める、5チェインを消費してさらに1早める",
    		turn: 11,
    		proc: null
    	},
    }, {
    	name: "海風流るる焔々と セイ＆スオウ",
    	cardno: 5064,
    	imageno: 6804,
    	hp: 2650,
    	atk: 3323,
    	cost: 45,
    	attr: [1, 0],
    	species: [1],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Spec_statusup(0, 200, [1]),
            NEFTJOD(30),
            Attr_statusup(0, 200, [1, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(200, 0, [1, 1, 0, 0, 0, ]),
            Spec_statusup(200, 0, [1]),
    	],
    	as1: {
    		desc: "10チェインでダメージアップ(700％)",
    		proc: ChainAttack(7.0, 10)
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50%を使い敵単体へ水属性ダメージ(240%×味方数)",
    		turn: 6,
    		proc: [ss_damage_s(ss_consume_all_cond(2.4, 0.5), [1], 1)]
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "10チェインでダメージアップ(800％)",
    		proc: ChainAttack(8.0, 10)
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50%を使い敵単体へダメージ(300%×味方数)",
    		turn: 8,
    		proc: [ss_damage_s(ss_consume_all_cond(3.0, 0.5), [1], 1)]
    	},
    }, {
    	name: "南国バーチャルシンガー ミク＆ルカ",
    	cardno: 4866,
    	imageno: -1,
    	hp: 3420,
    	atk: 2021,
    	cost: 45,
    	attr: [1, 0],
    	species: [9],
    	awakes: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
    	],
    	as1: {
    		desc: "5チェインで敵単体を3回連続攻撃/計450％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを1早める、5チェインを消費しさらに1早める",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインで敵単体を3回連続攻撃/計550％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める、5チェインを消費しさらに1早める",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "プレミオな和歌の神 ミコト",
    	cardno: 4343,
    	imageno: -1,
    	hp: 3101,
    	atk: 1743,
    	cost: 48,
    	attr: [1, 0],
    	species: [1],
    	awakes: [
            Fastskill(1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Heal_afterbattle(10),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "火・水属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン味方全体を徐々に回復する(15％×3T)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "火・水属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復する、さらに5ターン徐々に回復する(回復：35％ / 徐々に回復：15％×5T)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "夜勤明けの嫁 モミジ・カキツバタ",
    	cardno: 4083,
    	imageno: -1,
    	hp: 2212,
    	atk: 1812,
    	cost: 34,
    	attr: [1, 0],
    	species: [-1],
    	awakes: [
			{ /* ゴールド取得量アップⅠ */ },
            Fastskill(1),
            Spec_statusup(0, 200, [1, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
			{ /* 経験値取得量アップⅠ */ },
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "水・火属性の味方を回復、神族なら更に回復(水火：10％ / 水火+種族：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水＆火属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "水・火属性の味方を回復、神族なら更に回復(水火：13％ / 水火+種族：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水＆火属性化し、チェインがプラス1の効果を付与",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "無差別格闘早乙女流 早乙女乱馬",
    	cardno: 4172,
    	imageno: -1,
    	hp: 2430,
    	atk: 2261,
    	cost: 46,
    	attr: [1, 0],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Costdown(2),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ、10チェインで更にダメージアップ(5チェイン：350％ / 10チェイン：650％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火・水属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ、10チェインで更にダメージアップ(5チェイン：450％ / 10チェイン：750％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火・水属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "超革命魔道ガール リルム・ロロット",
    	cardno: 4694,
    	imageno: -1,
    	hp: 1910,
    	atk: 3231,
    	cost: 48,
    	attr: [1, 0],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "4チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い敵全体へダメージ(90％×味方の人数)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "4チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い敵全体へダメージ(130％×味方の人数)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "純真の象徴たる白 ルシエラ・フオル",
    	cardno: 4583,
    	imageno: -1,
    	hp: 2548,
    	atk: 2331,
    	cost: 48,
    	attr: [1, 0],
    	species: [3],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(100, 0, [1, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [3, ]),
            Spec_statusup(0, 200, [3, ]),
    	],
    	as1: {
    		desc: "4チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火・水属性のダメージ、さらに味方全体のHPを回復する(攻撃：150％ / 回復：20％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
            Statusup(600, 0),
    	],
    	as2: {
    		desc: "4チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火・水属性のダメージ、さらに味方全体のHPを回復する(攻撃：200％ / 回復：25％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "募る想いに彩られ アーシア＆ニコラ",
    	cardno: 4522,
    	imageno: -1,
    	hp: 3540,
    	atk: 1804,
    	cost: 46,
    	attr: [1, 2],
    	species: [9],
    	awakes: [
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Heal_afterbattle(10),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
    	],
    	as1: {
    		desc: "水・雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "スペシャルスキルの発動ターンを1早め、敵全体の攻撃ターンを1遅らせる",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "水・雷属性の味方のHPを回復、さらに水・雷属性の味方の攻撃力をアップ(回復：16％ / 攻撃：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "スペシャルスキルの発動ターンを2早め、敵全体の攻撃ターンを2遅らせる",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "縛眼の檻 エリス＝マギア・シャルム",
    	cardno: 4703,
    	imageno: -1,
    	hp: 3989,
    	atk: 1986,
    	cost: 45,
    	attr: [1, 2],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Heal_afterbattle(10),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方を回復、7チェインで更に回復(通常：10％ / 7チェイン：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い、2ターン水・雷属性の味方の攻撃力をアップ(+70％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "水・雷属性の味方を回復、7チェインで更に回復(通常：13％ / 7チェイン：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い、4ターン水・雷属性の味方の攻撃力をアップ(+100％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "虹色の姉妹 サーシャ＆シンシア",
    	cardno: 4444,
    	imageno: -1,
    	hp: 3500,
    	atk: 1500,
    	cost: 35,
    	attr: [1, 2],
    	species: [9],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(0, 200),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方のHPを回復/11％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水・雷属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "水・雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水・雷属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "心繋がる星の夜に ソラナ＆ヒカリ",
    	cardno: 4435,
    	imageno: -1,
    	hp: 3117,
    	atk: 2087,
    	cost: 50,
    	attr: [1, 2],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Statusup(200, 0),
            Heal_afterbattle(10),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "6チェインで水・雷属性の味方の攻撃力をアップ/+70％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、スキルカウンター待機",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "6チェインで水・雷属性の味方の攻撃力をアップ/+100％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターンの間、スキルカウンター待機",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "大魔道名誉教授 ニヴァナ・エライト",
    	cardno: 4543,
    	imageno: -1,
    	hp: 2653,
    	atk: 1947,
    	cost: 51,
    	attr: [1, 2],
    	species: [9],
    	awakes: [
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Heal_afterbattle(10),
            NEFTJOD(30),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "パネルが2色、3色で水・雷属性の味方のHPを回復(2色：30％ / 3色：34％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン全属性のダメージを25％軽減する、さらに味方全体のHPを回復する(25％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "パネルが2色、3色で水・雷属性の味方のHPを回復(2色：34％ / 3色：40％)",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン全属性のダメージを50％軽減する、さらに味方全体のHPを回復する(25％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "凶空の破壊者 旗艦ネフィリムンド",
    	cardno: 4839,
    	imageno: -1,
    	hp: 1500,
    	atk: 500,
    	cost: 48,
    	attr: [1, 2],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [6, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Statusup(0, 200),
            Spec_statusup(0, 200, [6, ]),
    	],
    	as1: {
    		desc: "5チェインで敵全体へ分散攻撃/450％÷対象数",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの100％を使い、5ターン800以下の全属性ダメージを無効化する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(1000, 0),
    	],
    	as2: {
    		desc: "5チェインで敵全体へ分散攻撃/550％÷対象数",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの100％を使い、5ターン1000以下の全属性ダメージを無効化する",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "争空に舞う天翼 プルミエ・シエル",
    	cardno: 4769,
    	imageno: -1,
    	hp: 2875,
    	atk: 2376,
    	cost: 45,
    	attr: [1, 2],
    	species: [3],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Fastskill(2),
            Spec_statusup(200, 0, [3, ]),
            Spec_statusup(0, 200, [3, ]),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "4チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・雷属性化",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "4チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水・雷属性化し、チェインがプラス1の効果を付与",
    		turn: 5,
    		proc: null
    	},
    }, {
    	name: "歌声よ届け、宇宙の果てに 初音ミク",
    	cardno: 4877,
    	imageno: -1,
    	hp: 3009,
    	atk: 2234,
    	cost: 48,
    	attr: [1, 2],
    	species: [3],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Spec_statusup(0, 200, [3, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方を回復、HP50％以下なら更に回復(通常：11％ / HP50％以下：20％)",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン600以下の全属性ダメージを無効化する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(700, 0),
            Statusup(0, 300),
    	],
    	as2: {
    		desc: "水・雷属性の味方を回復、HP50％以下なら更に回復(通常：13％ / HP50％以下：22％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン800以下の全属性ダメージを無効化する",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "優しい歌声と勇気が合言葉 初音ミク",
    	cardno: 5002,
    	imageno: -1,
    	hp: 2015,
    	atk: 2539,
    	cost: 44,
    	attr: [1, 2],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_relief([0, 1, 1, 0, 0, ], 10),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "4チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、4ターン自分の攻撃力をアップ(回復：50％ / 攻撃力：+100％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "4チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全回復し、6ターン自分の攻撃力をアップ。HP20％未満の時、さらに自分の攻撃力をアップ(通常：+100％ / HP20％未満：+1000％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "黒猫と魔法の世界へ 初音ミク",
    	cardno: 4954,
    	imageno: -1,
    	hp: 2653,
    	atk: 2005,
    	cost: 26,
    	attr: [1, 2],
    	species: [9],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方のHPを回復/11％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体の攻撃ターンを1遅らせる",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "水・雷属性の味方のHPを回復/14％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体の攻撃ターンを1遅らせ、水属性のダメージ(120％)",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "開かれた夏への扉 ヤチヨ＆アッカ",
    	cardno: 4240,
    	imageno: -1,
    	hp: 2929,
    	atk: 2457,
    	cost: 48,
    	attr: [1, 2],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
			{ /* 経験値取得量アップⅠ */ },
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "5チェインで水・雷属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインプラス2の効果を付与",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインで水・雷属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "AbCd-Z:《闃寂の地平 カルム》",
    	cardno: 5043,
    	imageno: -1,
    	hp: 2998,
    	atk: 3503,
    	cost: 46,
    	attr: [1, 3],
    	species: [-1],
    	awakes: [
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
            Fastskill(3),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            NEFTJOD(30),
    	],
    	as1: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを2遅らせる。HP20％以下でさらに1遅らせる。",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：550％ / 3色：700％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを3遅らせる。HP20％以下でさらに1遅らせる。",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "AbCd-Σζ:《滾ることなき血潮 カルム》",
    	cardno: 5030,
    	imageno: -1,
    	hp: 3003,
    	atk: 3014,
    	cost: 47,
    	attr: [1, 3],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            NEFTJOD(30),
            Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Fastskill(2),
            NEFTJOD(30),
            Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・光属性化",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水・光属性化し、ダメージ25％軽減の効果を付与。HP20％以下でさらにダメージ35％軽減の効果を付与",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "AbCd-Ψ:《闇照す舞踏 ニティア》",
    	cardno: 5046,
    	imageno: -1,
    	hp: 4055,
    	atk: 2504,
    	cost: 46,
    	attr: [1, 3],
    	species: [11],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            NEFTJOD(60),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
            Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(3),
    	],
    	as1: {
    		desc: "水属性の味方のHPを回復、パネルの色が増す度さらに回復(1色：11％ / 2色：15％ / 3色：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のガード＆ダメージブロックを解除する",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(1000, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の味方のHPを回復、パネルの色が増す度さらに回復(1色：13％ / 2色：17％ / 3色：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のガード＆ダメージブロックを解除し、水属性のダメージ。HP20％以下でさらにダメージアップ(通常：180％ / HP20％以下：400％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "AbCd-:Ψψ《絢爛の神舞 ニティア》",
    	cardno: 5039,
    	imageno: -1,
    	hp: 4554,
    	atk: 1987,
    	cost: 47,
    	attr: [1, 3],
    	species: [-1],
    	awakes: [
            Fastskill(2),
            Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Heal_afterbattle(10),
    	],
    	as1: {
    		desc: "水属性の味方を回復、HP20％以下でさらに回復(通常：13％ / HP20％以下：38％)",
    		proc: null
    	},
    	ss1: {
    		desc: "スペシャルスキルの発動ターンを1早め、敵単体の攻撃ターンを1遅らせる",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(700, 0),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の味方を回復、HP20％以下でさらに回復(通常：17％ / HP20％以下：42％)",
    		proc: null
    	},
    	ss2: {
    		desc: "スペシャルスキルの発動ターンを2早め、敵単体の攻撃ターンを2遅らせる",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "AbCd-A:《廃絶の鬼神バシレイデ》",
    	cardno: 5050,
    	imageno: -1,
    	hp: 0,
    	atk: 0,
    	cost: 60,
    	attr: [1, 3],
    	species: [11],
    	awakes: [
            Costdown(4),
            Statusup(0, 200),
            Fastskill(1),
            Statusup(200, 0),
            NEFTJOD(30),
            Fastskill(2),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Attr_statusup(0, 200, [0, 1, 0, 0, 0, ]),
            Attr_statusup(200, 0, [0, 1, 0, 0, 0, ]),
    	],
    	as1: {
    		desc: "HP80％以下で水属性の味方の攻撃力をアップ/+80％",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン600以下の全属性ダメージを無効化する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "HP80％以下で水属性の味方の攻撃力をアップ/+110％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン600以下の全属性ダメージを無効化し、HP20％以下の時、1200以下の全属性ダメージを無効化",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "聖フリーダム騎士 チッタ・レニーノ",
    	cardno: 4603,
    	imageno: -1,
    	hp: 2801,
    	atk: 1571,
    	cost: 44,
    	attr: [1, 3],
    	species: [8],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/300％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・光属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水・光属性化し、攻撃力アップの効果を付与(+30％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "白銀の翼が舞い降りる 初音ミク",
    	cardno: 4874,
    	imageno: -1,
    	hp: 2843,
    	atk: 3043,
    	cost: 46,
    	attr: [1, 3],
    	species: [3],
    	awakes: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 1, 0, 0, 0, ], 2),
            Spec_statusup(200, 0, [3, ]),
    	],
    	as1: {
    		desc: "4チェインでダメージアップ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、チェインを保護する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "4チェインでダメージアップ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "6ターンの間、チェインを保護する",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "侵食する闇の王 〈イグノビリウム〉",
    	cardno: 4836,
    	imageno: -1,
    	hp: 2404,
    	atk: 2214,
    	cost: 48,
    	attr: [1, 4],
    	species: [2],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Fastskill(1),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [2, ]),
    	],
    	as1: {
    		desc: "10チェインでダメージアップ、さらに敵のHPを吸収(攻撃：600％ / HP吸収：3％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの60％を使い敵単体へダメージ(240％×味方の人数)",
    		turn: 12,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "10チェインでダメージアップ、さらに敵のHPを吸収(攻撃：700％ / HP吸収：3％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの60％を使い敵単体へダメージ(300％×味方の人数)",
    		turn: 14,
    		proc: null
    	},
    }, {
    	name: "黒厄の災闇王剣 オディルン・バナド",
    	cardno: 4974,
    	imageno: -1,
    	hp: 2109,
    	atk: 2872,
    	cost: 40,
    	attr: [1, 4],
    	species: [-1],
    	awakes: [
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 0, 0, 0, ]),
            Fastskill(2),
            NEFTJOD(30),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/320％",
    		proc: null
    	},
    	ss1: {
    		desc: "5チェインを消費し、敵全体へ水属性のダメージ、チェインが満たない場合(5チェイン消費：400％ / チェインなし：200％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/420％",
    		proc: null
    	},
    	ss2: {
    		desc: "10チェインを消費し、敵全体へ水属性のダメージ、チェインが満たない場合(10チェイン消費：600％ / チェインなし：300％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "黒鎧の魔戦獣 タウルケンド",
    	cardno: 4611,
    	imageno: -1,
    	hp: 2303,
    	atk: 505,
    	cost: 47,
    	attr: [1, 4],
    	species: [2],
    	awakes: [
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(0, 200, [2, ]),
            Statusup(0, 200),
            Panel_boost([0, 1, 0, 0, 0, ], 1),
            Statusup(0, 200),
            Spec_statusup(200, 0, [2, ]),
    	],
    	as1: {
    		desc: "敵単体へのダメージアップ/225％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを500回復する",
    		turn: 2,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 3000),
    	],
    	as2: {
    		desc: "3チェインでMAXHP15％を使い、ダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを1000回復する",
    		turn: 3,
    		proc: null
    	},
    }, {
    	name: "鼓動するココロのままに アイ",
    	cardno: 4428,
    	imageno: -1,
    	hp: 2627,
    	atk: 2774,
    	cost: 42,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [6, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特攻5連撃/計400％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、状態異常を回復する(回復：50％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特攻7連撃/計500％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全回復し、状態異常を回復する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "人格なき悪意",
    	cardno: 4506,
    	imageno: -1,
    	hp: 3583,
    	atk: 3583,
    	cost: 70,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Spec_statusup(0, 200, [2, ]),
            Spec_statusup(200, 0, [2, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Spec_statusup(0, 200, [2, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [2, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "3チェインで種族が戦士・術士の敵単体へダメージ、リーダー時さらにダメージアップ(3チェイン：450％ / 3チェイン+リーダー時：650％)",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで種族が戦士・術士の敵単体へダメージ、リーダー時さらにダメージアップ(3チェイン：550％ / 3チェイン+リーダー時：750％)",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "歴史の見届け人 アサギ＆セルウス",
    	cardno: 4252,
    	imageno: -1,
    	hp: 2864,
    	atk: 2554,
    	cost: 48,
    	attr: [2, -1],
    	species: [1],
    	awakes: [
            Fastskill(1),
            Spec_statusup(0, 200, [1, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            NEFTJOD(30),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを中回復し、状態異常を回復する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全回復し、状態異常を回復する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "鏡合わせの私達 アッカ＆トイボア",
    	cardno: 3742,
    	imageno: -1,
    	hp: 2758,
    	atk: 2741,
    	cost: 45,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [8, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "5チェインで雷属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインで雷属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、チェインがプラス2の効果を付与",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "時の邂逅 アリス・スチュアート",
    	cardno: 3793,
    	imageno: -1,
    	hp: 2894,
    	atk: 2689,
    	cost: 45,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            NEFTJOD(30),
            Spec_statusup(200, 0, [1, 9, ]),
            Spec_statusup(0, 200, [1, 9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方の攻撃力をアップ、神族と術士はさらにアップ(通常：+20％ / 神族・術士：+40％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し(50％)、状態異常を回復する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の味方の攻撃力をアップ、神族と術士はさらにアップ(通常：+30％ / 神族・術士：+60％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全回復し、状態異常を回復する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "覇翔の天獣 アルビオン・イクシス",
    	cardno: 4149,
    	imageno: -1,
    	hp: 2464,
    	atk: 2524,
    	cost: 37,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "雷属性の味方を回復、神族なら更に回復(雷：9％ / 雷+種族：16％)",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン火属性ダメージを75％軽減する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "雷属性の味方を回復、神族なら更に回復(雷：12％ / 雷+種族：19％)",
    		proc: null
    	},
    	ss2: {
    		desc: "2ターン火属性ダメージを100％軽減する",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "聖樹の守護霊弓 アルティミシア",
    	cardno: 3781,
    	imageno: -1,
    	hp: 2843,
    	atk: 2422,
    	cost: 43,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Costdown(2),
            Statusup(200, 0),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Costdown(2),
            Spec_statusup(0, 200, [1, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Heal_afterbattle(10),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "味方全員を回復、神族なら更に回復(通常：10％ / 神族：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火＆雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "味方全員を回復、神族なら更に回復(通常：13％ / 神族：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "電脳☆エンジェル アン・D・ロイド",
    	cardno: 3753,
    	imageno: -1,
    	hp: 2561,
    	atk: 2127,
    	cost: 29,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Fastskill(1),
            Costdown(2),
            Costdown(2),
            Costdown(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [6, ]),
    	],
    	as1: {
    		desc: "雷属性の味方の攻撃力をアップ/+30％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをシャッフル",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方の攻撃力をアップ、物質はさらにアップ(通常時：+30、物質：+60％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "大志を貫く巨剣 アンジュ・エモニエ",
    	cardno: 5116,
    	imageno: -1,
    	hp: 2723,
    	atk: 2765,
    	cost: 33,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Costdown(2),
            Statusup(200, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Costdown(2),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 5),
    	],
    	as1: {
    		desc: "残りHPが80％以上でダメージアップ/300％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "残りHPが80％以上でダメージアップ/400％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(+30％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "永劫に謳う歓びの歌 アンジェリカ",
    	cardno: 4334,
    	imageno: -1,
    	hp: 2820,
    	atk: 2644,
    	cost: 46,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(200, 0),
            Spec_statusup(200, 0, [1, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [1, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
    	],
    	as1: {
    		desc: "味方全体のHPを回復、リーダー時さらに回復(通常：13％ / リーダー時：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "味方全体のHPを回復、リーダー時さらに回復(通常：16％ / リーダー時：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化し、回復の効果を付与(5％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "嬌艶幻夢 イルメイア・サニエ",
    	cardno: 3674,
    	imageno: -1,
    	hp: 2467,
    	atk: 2541,
    	cost: 45,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Spec_statusup(0, 100, [2, 9, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(100, 0, [2, 9, ]),
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [2, 9, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [2, 9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方の攻撃力を大幅アップ、HP80％以上でさらにアップ(80%以下:+30%/80%以上:+40%)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷属性の究極ダメージ(180%)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "雷属性の味方の攻撃力を超極大アップ、HP80％以上でさらにアップ(80%以下:+60%/80%以上:+70%)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷属性の超究極ダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "理を紡ぐ鋼竜神 ヴァルザイン",
    	cardno: 4540,
    	imageno: -1,
    	hp: 2807,
    	atk: 2758,
    	cost: 42,
    	attr: [2, -1],
    	species: [0],
    	awakes: [
            Costdown(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Attr_statusup(0, 100, [0, 1, 0, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [0, ]),
            Spec_statusup(0, 200, [0, ]),
    	],
    	as1: {
    		desc: "デッキの属性の数だけ攻撃力アップ(1色：250％ / 2色：400％ / 3色：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "デッキの属性の数だけ攻撃力アップ(1色：300％ / 2色：500％ / 3色：700％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "神速の双輪 ヴァレンティナ・ダイア",
    	cardno: 4574,
    	imageno: -1,
    	hp: 2103,
    	atk: 3372,
    	cost: 37,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Costdown(2),
            Statusup(0, 100),
            Statusup(0, 200),
            Fastskill(1),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをシャッフル",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(+30％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "不滅への方程式 ヴィラム・オルゲン",
    	cardno: 4775,
    	imageno: -1,
    	hp: 3233,
    	atk: 2833,
    	cost: 43,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
    	],
    	as1: {
    		desc: "雷属性の味方の攻撃力をアップ/+40％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを1遅らせる",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "味方のMAXHP20％を使い、雷属性の味方の攻撃力をアップ/+120％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを1遅らせ、雷属性のダメージ(180％)",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "宗匠紋章師 エトワール・ブリュネ",
    	cardno: 3787,
    	imageno: -1,
    	hp: 2331,
    	atk: 2741,
    	cost: 42,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "残りHPが80％以上でダメージアップ、パネルの色が増す度さらにアップ(1色：300％、2色：400％、3色：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火＆雷属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "残りHPが80％以上でダメージアップ、パネルの色が増す度さらにアップ(1色：400％、2色：500％、3色：650％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "儚きとこしえ エリアナ・グロス",
    	cardno: 4291,
    	imageno: 5884,
    	hp: 2222,
    	atk: 3055,
    	cost: 45,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Costdown(2),
            Fastskill(1),
            Costdown(2),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "5チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：650％)",
    		proc: ChainPanelsAttack(0, 5.0, 6.5, 5)
    	},
    	ss1: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "パネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：650％)",
    		proc: ChainPanelsAttack(0, 5.0, 6.5, 0)
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化し、攻撃力アップの効果を付与(+20％)",
    		turn: 8,
    		proc: [panel_attackup(0.2)]
    	},
    }, {
    	name: "超宇宙究極神輿 オオミコシガミ",
    	cardno: 4106,
    	imageno: -1,
    	hp: 2498,
    	atk: 2888,
    	cost: 52,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [6, ]),
    	],
    	as1: {
    		desc: "ダメージがイチかバチかアップ/160～300％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "ダメージがイチかバチかアップ/250～450％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、くじを引く",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "虹光悠風 オルネ・タンペート",
    	cardno: 3878,
    	imageno: -1,
    	hp: 2448,
    	atk: 2655,
    	cost: 40,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へダメージ、HP80％以上でさらにダメージアップ(通常：250％ / HP80％以上：400％)",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "水属性の敵単体へダメージ、HP80％以上でさらにダメージアップ(通常：350％ / HP80％以上：500％)",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "歪みに抗う尊き祈り オルハ・ゲート",
    	cardno: 4595,
    	imageno: -1,
    	hp: 2844,
    	atk: 2756,
    	cost: 44,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Statusup(200, 0),
            Costdown(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方を回復11%、HP20%以下でさらに回復29%",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン味方全体を徐々に回復する(20%)",
    		turn: 0,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [],
    	as2: {
    		desc: "雷属性の味方を回復13%、HP20%以下でさらに回復31%",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン味方全体を徐々に回復する(20%)、HP20%未満でさらに回復(40%)",
    		turn: 0,
    		proc: null
    	},
    }, {
    	name: "拳骨無頼之道 オロチ・ライオネル",
    	cardno: 5113,
    	imageno: -1,
    	hp: 1391,
    	atk: 6400,
    	cost: 44,
    	attr: [2, -1],
    	species: [5],
    	awakes: [
            Statusup(0, 200),
            Costdown(2),
            Costdown(2),
            Statusup(0, 200),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(500, 0, [5, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Spec_statusup(0, 500, [5, ]),
    	],
    	as1: {
    		desc: "敵単体を3回連続攻撃/計250％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ雷属性のダメージ(200％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 700),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "敵単体を3回連続攻撃、20チェインでさらに3回連続攻撃し、ダメージアップ(通常：計250％ / 20チェイン：計1750％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ雷属性のダメージ(400％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "真なる鉄壁 カエデ・ジングウジ",
    	cardno: 4453,
    	imageno: -1,
    	hp: 2874,
    	atk: 3003,
    	cost: 38,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(200, 0),
            Costdown(2),
            Attr_relief([1, 0, 0, 0, 0, ], 20),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "8チェインで敵単体を4回連続攻撃/計600％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン火属性ダメージを75％軽減する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "8チェインで敵単体を4回連続攻撃/計700％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン火属性ダメージを100％軽減する",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "願いの届け人 カプレイ・シュシュ",
    	cardno: 3884,
    	imageno: -1,
    	hp: 2782,
    	atk: 2558,
    	cost: 44,
    	attr: [2, -1],
    	species: [4],
    	awakes: [
            Fastskill(1),
            Statusup(200, 0),
            Spec_statusup(0, 200, [4, 6, ]),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [4, 6, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [4, 6, ]),
            Spec_statusup(0, 200, [4, 6, ]),
			{ /* 経験値取得量アップⅠ */ },
    	],
    	as1: {
    		desc: "雷属性の味方を回復、5チェインで更に回復(通常：10％ / 5チェイン：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方を回復、5チェインで更に回復(通常：13％ / 5チェイン：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、ダメージ25％軽減の効果を付与",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "世界のために闘う漢 GABANARIO",
    	cardno: 4399,
    	imageno: -1,
    	hp: 2000,
    	atk: 1500,
    	cost: 50,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Heal_afterbattle(10),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "敵単体を3回連続攻撃、5チェインで更にダメージアップ(通常：計250％ / 5チェイン：計350％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復(50％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 6000),
            Statusup(2000, 0),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "敵単体を3回連続攻撃、5チェインで更にダメージアップ(通常：計350％ / 5チェイン：計450％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷属性のダメージ、さらに味方全体のHPを完全に回復する(ダメージ：150％)",
    		turn: 15,
    		proc: null
    	},
    }, {
    	name: "浄き陰陽の輪光 クオン・リムゼ",
    	cardno: 4640,
    	imageno: -1,
    	hp: 2754,
    	atk: 3421,
    	cost: 47,
    	attr: [2, -1],
    	species: [1],
    	awakes: [
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Heal_afterbattle(10),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "3チェインで水属性の敵単体へ特効ダメージ/525％",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン600以下の全属性ダメージを無効化する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで水属性の敵単体へ特効ダメージ/625％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン600以下の全属性ダメージを無効化し、HP20％未満の時、1200以下の全属性ダメージを無効化",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "降り注ぐ月光の奇跡 クラリス・ルナ",
    	cardno: 4572,
    	imageno: -1,
    	hp: 3088,
    	atk: 2988,
    	cost: 39,
    	attr: [2, -1],
    	species: [1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [1, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Spec_statusup(200, 0, [1, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "雷属性の味方を回復、パネルの色が増す度さらに回復(1色：11％ / 2色：15％ / 3色：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "雷属性の味方を回復、パネルの色が増す度さらに回復(1色：13％ / 2色：17％ / 3色：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のガード＆ダメージブロックを解除し、雷属性のダメージ(180％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "プリッツを愛する魔法使い グリ",
    	cardno: 4330,
    	imageno: -1,
    	hp: 2995,
    	atk: 2067,
    	cost: 38,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 100),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(100, 0),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(1),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/11％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ雷属性の5回連続ダメージ(計180％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：11％ / 攻撃力：+20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ雷属性の5回連続ダメージ(計380％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "黄金色の空へ ゴールデンプッチン",
    	cardno: -1,
    	imageno: -1,
    	hp: 2838,
    	atk: 2275,
    	cost: 52,
    	attr: [2, -1],
    	species: [4],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [4, ]),
            Spec_statusup(200, 0, [4, ]),
            Heal_afterbattle(10),
    	],
    	as1: {
    		desc: "自分のMAXHP20％を使い、雷属性の味方の攻撃力をアップ、妖精はさらにアップ(雷：+30％ / 雷+種族：+70％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "自分のMAXHP20％を使い、雷属性の味方の攻撃力をアップ、妖精はさらにアップ(雷：+40％ / 雷+種族：+90％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(+20％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "雷刃翔星 サイラス・レイン",
    	cardno: 5057,
    	imageno: -1,
    	hp: 2738,
    	atk: 3194,
    	cost: 42,
    	attr: [2, -1],
    	species: [4],
    	awakes: [
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(0, 200),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(2),
            Spec_statusup(0, 500, [4, ]),
            Spec_statusup(500, 0, [4, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・雷属性化",
    		turn: 4,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 700),
            Statusup(300, 0),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水・雷属性化し、チェインがプラス1の効果を付与",
    		turn: 5,
    		proc: null
    	},
    }, {
    	name: "魂を刈り取る廃堕魔神 ザラジュラム",
    	cardno: 4649,
    	imageno: -1,
    	hp: 3244,
    	atk: 2727,
    	cost: 70,
    	attr: [2, -1],
    	species: [3],
    	awakes: [
            Costdown(4),
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(200, 0),
            Statusup(0, 200),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [3, ]),
            Spec_statusup(200, 0, [3, ]),
    	],
    	as1: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ、10チェインでさらにアップ(通常：+40％ / 10チェイン：+90％)",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(260％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ、10チェインで(通常：+60％ / 10チェイン：+110％)",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの50％を使い敵全体へダメージ(330％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "大甘味王 ジャイアントカプリコ",
    	cardno: 4333,
    	imageno: -1,
    	hp: 2535,
    	atk: 2333,
    	cost: 49,
    	attr: [2, -1],
    	species: [4],
    	awakes: [
            Statusup(0, 100),
            Fastskill(1),
            Costdown(2),
            Statusup(100, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Costdown(2),
            Fastskill(1),
            Spec_statusup(200, 0, [4, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [4, ]),
    	],
    	as1: {
    		desc: "デッキに雷属性が自分だけの時、味方全体を回復/25％",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン味方全体を徐々に回復する(15％×5T)",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "デッキに雷属性が自分だけの時、味方全体を回復、妖精なら更に回復(通常：25％ / 妖精：50％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン味方全体を徐々に回復する(20％×5T)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "今日も大漁！ シャーリー・コルト",
    	cardno: 4460,
    	imageno: -1,
    	hp: 2497,
    	atk: 3302,
    	cost: 44,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特効ダメージ、HP80％以上でさらにダメージアップ(通常：300％ / HP80％以上：450％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをシャッフル",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特効ダメージ、HP80％以上でさらにダメージアップ(通常：400％ / HP80％以上：550％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルに攻撃力アップの効果を付与(+60％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "愛と甘美の砲火 シャーリー・コルト",
    	cardno: 4466,
    	imageno: -1,
    	hp: 2759,
    	atk: 3021,
    	cost: 46,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Fastskill(1),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特効3連撃、HP80％以上でさらにダメージアップ(通常：計300％ / HP80％以上：計450％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、アンサースキル発動時間を10秒延長する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特効3連撃、HP80％以上でさらにダメージアップ(通常：計400％ / HP80％以上：計550％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターンの間、アンサースキル発動時間を15秒延長する",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "灼けつく大地の帝王 ジン・サイード",
    	cardno: 4573,
    	imageno: -1,
    	hp: 2659,
    	atk: 2791,
    	cost: 40,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Attr_relief([1, 0, 1, 0, 0, ], 10),
            Statusup(200, 0),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ、さらに敵のHPを吸収(攻撃：350％ / 吸収：10％)",
    		proc: null
    	},
    	ss1: {
    		desc: "火・雷属性ダメージを2ターンの間50％軽減する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ、さらに敵のHPを吸収(攻撃：450％ / 吸収：10％)",
    		proc: null
    	},
    	ss2: {
    		desc: "火・雷属性ダメージを3ターンの間50％軽減する",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "聖光舞姫 シンシア・スターライト",
    	cardno: 4136,
    	imageno: -1,
    	hp: 2499,
    	atk: 2478,
    	cost: 31,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 100),
            Statusup(100, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/12％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復/15％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、回復の効果を付与(8％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "悠遠の星間を繋ぐ ヒカリ・スフィア",
    	cardno: 4339,
    	imageno: -1,
    	hp: 2235,
    	atk: 2996,
    	cost: 38,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Statusup(200, 0),
            Fastskill(1),
            Statusup(0, 200),
            Statusup(0, 100),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ、さらに雷属性の味方のHPを回復(攻撃：400％ / 回復：5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、チェインプラス2の効果を付与",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "機神の操者 スミオ＆エクスマキナ",
    	cardno: 3733,
    	imageno: -1,
    	hp: 2836,
    	atk: 2559,
    	cost: 45,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Attr_relief([0, 0, 1, 0, 0, ], 20),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_relief([1, 0, 0, 0, 0, ], 20),
            Fastskill(2),
            Spec_statusup(200, 0, [8, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "7チェインで雷属性の味方の攻撃力をアップ/+80％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを1早める",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "7チェインで雷属性の味方の攻撃力をアップ/+100％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "伝説のセレニティ＆エンディミオン",
    	cardno: 4002,
    	imageno: -1,
    	hp: 2643,
    	atk: 2752,
    	cost: 44,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
			{ /* 経験値取得量アップⅠ */ },
    	],
    	as1: {
    		desc: "雷属性の味方の攻撃力をアップ、戦士はさらにアップ(雷：+20％ / 雷+種族：+40％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "雷属性の味方の攻撃力をアップ、戦士はさらにアップ(雷：+30％ / 雷+種族：+60％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化し、チェインがプラス1の効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "無敵の美少女戦士 セーラームーン",
    	cardno: 3995,
    	imageno: -1,
    	hp: 2259,
    	atk: 1932,
    	cost: 40,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(100, 0),
            Fastskill(1),
            Statusup(0, 100),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [8, ]),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
    	],
    	as1: {
    		desc: "敵全体へダメージ/130％",
    		proc: null
    	},
    	ss1: {
    		desc: "6ターン500以下の全属性ダメージを無効化する",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "敵全体へダメージ/140％",
    		proc: null
    	},
    	ss2: {
    		desc: "6ターン600以下の全属性ダメージを無効化する",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "深き夢の セシーリア・ヴェルレ",
    	cardno: 5115,
    	imageno: -1,
    	hp: 2954,
    	atk: 2434,
    	cost: 38,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 200),
            Statusup(100, 0),
            Statusup(200, 0),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(1),
            Spec_statusup(0, 100, [9, ]),
            Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに雷属性の味方を30％で蘇生(回復：30％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復/15％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに雷属性の味方を50％で蘇生(回復：50％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "聖女の証を継ぐ者 セティエ・レー",
    	cardno: 4687,
    	imageno: -1,
    	hp: 2941,
    	atk: 2861,
    	cost: 43,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Costdown(2),
            Fastskill(1),
            Statusup(200, 0),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：13％ / 攻撃力：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせ、さらに味方全体のHPを回復する(50％)",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "鎮魂の白銀騎士 セドリック・ブラン",
    	cardno: 4593,
    	imageno: -1,
    	hp: 2624,
    	atk: 2997,
    	cost: 45,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Fastskill(1),
            Statusup(0, 100),
            Statusup(100, 0),
            NEFTJOD(30),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特効ダメージ400%",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン雷属性の味方の攻撃力をアップ(+40％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特効ダメージ500%",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン雷属性の味方の攻撃力をアップ、リーダー時さらにアップ(通常：+50％ / リーダー：+70％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "御伽夢幻の凛花 セニア・ツァルカ",
    	cardno: 3994,
    	imageno: -1,
    	hp: 2611,
    	atk: 2447,
    	cost: 41,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方を回復、術士なら更に回復(通常：10％ / 種族：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "雷属性の味方を回復、術士なら更に回復(通常：13％ / 種族：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、回復の効果を付与(8％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "刻下の光神 セリーヌ・エヴァンス",
    	cardno: -1,
    	imageno: -1,
    	hp: 2872,
    	atk: 2410,
    	cost: 41,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(200, 0),
            Statusup(0, 100),
            Costdown(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [1, ]),
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "雷属性の味方の攻撃力をアップ、神族なら更にアップ(通常：+30％、種族：？％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 0,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "雷属性の味方の攻撃力をアップ、神族なら更にアップ(通常：+40％、種族：？％)",
    		proc: null
    	},
    	ss2: {
    		desc: "(必要正解数 ターン)",
    		turn: 0,
    		proc: null
    	},
    }, {
    	name: "刻下の司神 セリーヌ・エヴァンス",
    	cardno: 3805,
    	imageno: -1,
    	hp: 2652,
    	atk: 2843,
    	cost: 40,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            NEFTJOD(30),
            Fastskill(1),
            Spec_statusup(200, 0, [1, 4, ]),
            Spec_statusup(0, 100, [1, 4, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [1, 4, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [1, 4, ]),
            Spec_statusup(200, 0, [1, 4, ]),
    	],
    	as1: {
    		desc: "3チェインで神族と妖精の仲間の数だけダメージアップ/100+種族数×60％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン全属性のダメージを25％軽減する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "3チェインで神族と妖精の仲間の数だけダメージアップ100+種族数×60％、さらに雷属性の味方の攻撃力をアップ+30％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン全属性のダメージを50％軽減する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "愛の彗星 ターク・シューメイカー",
    	cardno: 3937,
    	imageno: -1,
    	hp: 2278,
    	atk: 2845,
    	cost: 49,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Statusup(200, 0),
            Spec_statusup(0, 200, [4, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [4, ]),
    	],
    	as1: {
    		desc: "12チェインで水属性の敵単体へ特攻ダメージ/800％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Spec_statusup(0, 100, [4, ]),
    	],
    	as2: {
    		desc: "12チェインで水属性の敵単体へ特攻ダメージ/900％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、チェインがプラス2の効果を付与",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "異邦の轟天大帝 タケル・ホシミ",
    	cardno: 3643,
    	imageno: -1,
    	hp: 2597,
    	atk: 2593,
    	cost: 48,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Statusup(200, 0),
            Fastskill(1),
            Spec_statusup(0, 100, [0, 9, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Spec_statusup(200, 0, [0, 9, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [0, 9, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "龍族と術士の仲間の数だけダメージ大アップ/+40％×種族数(1体：140% / 2体：180% / 3体：220% / 4体：260% / 5体：300%)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷属性の究極ダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "龍族と術士の仲間の数だけダメージ絶大アップ/+60％×種族数(1体：160% / 2体：220% / 3体：280% / 4体：340% / 5体：400%)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷属性の超究極ダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "南瓜のウィッカ タバサ・カトリーヌ",
    	cardno: 4857,
    	imageno: -1,
    	hp: 3343,
    	atk: 3457,
    	cost: 42,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(400, 0),
            Statusup(0, 200),
            Statusup(0, 200),
            Fastskill(1),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を3回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体への雷属性のダメージ(120％)",
    		turn: 4,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで敵単体を6回連続攻撃/計450％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のカウンターを解除し、雷属性のダメージ(180％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "屍霊の拳鬼 フー・チャパル",
    	cardno: 4536,
    	imageno: -1,
    	hp: 2074,
    	atk: 3311,
    	cost: 38,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            NEFTJOD(30),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "7チェインかつパネルが2色、3色でイチかバチかダメージアップ(2色：0～1200％ / 3色：0～1500％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ雷属性のダメージ(600％)",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "7チェインかつパネルが2色、3色でイチかバチかダメージアップ(2色：0～1550％ / 3色：0～1850％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ雷属性のダメージ(800％)",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "暗きを彷徨する隠の神 ツツノカミ",
    	cardno: 4426,
    	imageno: -1,
    	hp: 3051,
    	atk: 2272,
    	cost: 36,
    	attr: [2, -1],
    	species: [1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(200, 0),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復、さらに吸収(回復：11％ / 吸収：23％)",
    		proc: null
    	},
    	ss1: {
    		desc: "自分を犠牲に全員をHP50％蘇生",
    		turn: 11,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復、雷属性の攻撃力をアップ、さらに吸収(回復：13％ / 攻撃力：+20％ / 吸収：23％)",
    		proc: null
    	},
    	ss2: {
    		desc: "自分を犠牲に全員をHP100％蘇生",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "夜桜と舞う刀華 ツバキ・リンドウ",
    	cardno: 3783,
    	imageno: -1,
    	hp: 2022,
    	atk: 3023,
    	cost: 36,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "5チェインで戦士の仲間の数だけダメージアップ/100+種族数×70％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "戦士の仲間の数だけダメージアップ/100+種族数×70％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "戦場の冷血 ディートリヒ・ベルク",
    	cardno: 4848,
    	imageno: -1,
    	hp: 2447,
    	atk: 3213,
    	cost: 45,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
    	],
    	as1: {
    		desc: "3チェインで敵全体へダメージ/180％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン自分の攻撃力をアップ(+150％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで敵全体へダメージ/220％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン自分の攻撃力をアップ(+250％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "超熱剛拳 ドゥーガ・ザムンタール",
    	cardno: 3870,
    	imageno: -1,
    	hp: 2212,
    	atk: 2446,
    	cost: 29,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特攻5連撃/計300％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン敵の攻撃を自分に集めダメージを50％軽減する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特攻5連撃/計400％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン敵の攻撃を自分に集めダメージを75％軽減する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "光輝く金剛金華 トミ・コトブキ",
    	cardno: 4133,
    	imageno: -1,
    	hp: 2932,
    	atk: 2455,
    	cost: 44,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Heal_afterbattle(10),
            Spec_statusup(0, 200, [1, ]),
            Spec_statusup(200, 0, [1, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "1ターン、致死ダメージを受けたら一度だけHP25％で起死回生",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：16％ / 攻撃力アップ：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "2ターン、致死ダメージを受けたら一度だけHP25％で起死回生",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "極楽女将 トモエ・ムツラ",
    	cardno: 4462,
    	imageno: -1,
    	hp: 2333,
    	atk: 2264,
    	cost: 46,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Costdown(2),
            Attr_relief([1, 0, 0, 0, 0, ], 10),
            Statusup(0, 200),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "雷属性の味方を回復/11％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方を回復/14％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、ダメージ25％軽減の効果を付与",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "万壊の竜巻姫 ニア・ファルール",
    	cardno: 4139,
    	imageno: -1,
    	hp: 2442,
    	atk: 2667,
    	cost: 43,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Costdown(2),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(200, 0),
            Statusup(200, 0),
            Costdown(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "10チェインでダメージアップ/700％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 1000),
    	],
    	as2: {
    		desc: "10チェインでダメージアップ/800％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "轟雷の機弓 ニコラ・モーガン",
    	cardno: 4447,
    	imageno: -1,
    	hp: 3092,
    	atk: 2787,
    	cost: 45,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Statusup(200, 0),
            Statusup(200, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方を回復、5チェインで更に回復(通常：10％ / 5チェイン：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方を回復、5チェインで更に回復(通常：13％ / 5チェイン：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせる、さらに味方全体のHPを回復する(50％)",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "真夏の熱視線 ニコラ・モーガン",
    	cardno: 4535,
    	imageno: -1,
    	hp: 3117,
    	atk: 2772,
    	cost: 43,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Costdown(2),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Fastskill(1),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方のHPを回復、術士はさらに回復(水雷：10％ / 水雷+種族：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(500, 0),
            Statusup(0, 300),
    	],
    	as2: {
    		desc: "水・雷属性の味方のHPを回復、術士はさらに回復(水雷：13％ / 水雷+種族：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを3遅らせ、単体に雷属性のダメージ(400％)",
    		turn: 15,
    		proc: null
    	},
    }, {
    	name: "迷走夢想の恋心 ニコラ・モーガン",
    	cardno: 4465,
    	imageno: -1,
    	hp: 2889,
    	atk: 2960,
    	cost: 43,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [9, ]),
            Fastskill(1),
    	],
    	as1: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ、術士はさらにアップ(3チェイン：+40％ / 3チェイン+種族：+60％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを2早める",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ、術士はさらにアップ(3チェイン：+50％ / 3チェイン+種族：+70％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを3早める",
    		turn: 11,
    		proc: null
    	},
    }, {
    	name: "獅子公爵 バロン・ライオネル",
    	cardno: 3854,
    	imageno: -1,
    	hp: 1947,
    	atk: 2205,
    	cost: 17,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [{ /* 経験値取得量アップⅠ */ },
            Costdown(2),
            Statusup(0, 100),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(100, 0),
            Spec_statusup(0, 200, [5, ]),
            Spec_statusup(200, 0, [5, ]),
    	],
    	as1: {
    		desc: "敵単体へのダメージアップ/160％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復する(50％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ/190％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全に回復する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "なめらかで濃厚な牧場の恋 ピノ",
    	cardno: 4351,
    	imageno: -1,
    	hp: 3078,
    	atk: 2576,
    	cost: 46,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Heal_afterbattle(10),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにダメージ25％軽減の効果を付与",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：16％ / 攻撃力：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにダメージ50％軽減の効果を付与",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "収穫者 ヒミカ＆アドミローラ",
    	cardno: 4271,
    	imageno: -1,
    	hp: 2039,
    	atk: 2897,
    	cost: 48,
    	attr: [2, -1],
    	species: [2],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [2, ]),
            Spec_statusup(0, 200, [2, ]),
            NEFTJOD(30),
    	],
    	as1: {
    		desc: "種族が魔族・物質の敵単体へダメージ/600％",
    		proc: null
    	},
    	ss1: {
    		desc: "解答選択肢を2つ削る",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "種族が魔族・物質の敵単体へダメージ/700％",
    		proc: null
    	},
    	ss2: {
    		desc: "解答を見破る",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "芳しき天上の姉妹 ファム＆フェルチ",
    	cardno: 4746,
    	imageno: -1,
    	hp: 3819,
    	atk: 2643,
    	cost: 44,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(3),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
			{ /* ゴールド取得量アップⅠ */ },
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ/+55％",
    		proc: null
    	},
    	ss1: {
    		desc: "攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ/+75％",
    		proc: null
    	},
    	ss2: {
    		desc: "攻撃ターンを3遅らせ、20チェインで更に1遅らせる",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "とこしえに薫る想い ファム・リリー",
    	cardno: 5025,
    	imageno: -1,
    	hp: 3679,
    	atk: 3299,
    	cost: 44,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(1),
            NEFTJOD(30),
            Statusup(200, 0),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "5チェインで雷属性の味方の攻撃力をアップ、パネルの色が2色以上でさらにアップ(通常：+60％ / 2色以上：+90％)",
    		proc: null
    	},
    	ss1: {
    		desc: "スペシャルスキルの発動ターンを1早め、敵単体の攻撃ターンを1遅らせる",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(700, 0),
            NEFTJOD(30),
            Statusup(0, 300),
    	],
    	as2: {
    		desc: "5チェインで雷属性の味方の攻撃力をアップ、パネルの色が2色以上でさらにアップ(通常：+90％ / 2色以上：+120％)",
    		proc: null
    	},
    	ss2: {
    		desc: "スペシャルスキルの発動ターンを2早め、敵単体の攻撃ターンを2遅らせる",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "芳しき恋の香り フェルチ・リリー",
    	cardno: -1,
    	imageno: -1,
    	hp: 2722,
    	atk: 2631,
    	cost: 42,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方を回復、HP50％以下なら更に回復(通常：11％ / 50％以下：20％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水・雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "水・雷属性の味方を回復、HP50％以下なら更に回復(通常：13％ / 50％以下：22％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルをALL属性化",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "カップの中の恋人 プッチンプリン",
    	cardno: 4359,
    	imageno: -1,
    	hp: 2909,
    	atk: 2432,
    	cost: 43,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Statusup(200, 0),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Statusup(0, 200),
            Heal_afterbattle(10),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "5ターン600以下の全属性ダメージを無効化する",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復/17％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン800以下の全属性ダメージを無効化する",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "暴風雷帝 ヘルミーナ・ブリッツ",
    	cardno: 5055,
    	imageno: -1,
    	hp: 2230,
    	atk: 3508,
    	cost: 43,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Costdown(2),
            Statusup(0, 200),
            Fastskill(1),
            Attr_relief([0, 1, 1, 0, 0, ], 10),
            Statusup(200, 0),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：400％ / 3色：550％)",
    		proc: null
    	},
    	ss1: {
    		desc: "解答選択肢を2つ削る",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 2000),
    	],
    	as2: {
    		desc: "3チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：550％ / 3色：700％)",
    		proc: null
    	},
    	ss2: {
    		desc: "解答を見破る",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "お茶目怪盗 ヘレス・ブリリアント",
    	cardno: 3905,
    	imageno: -1,
    	hp: 2775,
    	atk: 2543,
    	cost: 39,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [2, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            NEFTJOD(30),
            Spec_statusup(0, 200, [2, ]),
            Spec_statusup(200, 0, [2, ]),
			{ /* 経験値取得量アップⅠ */ },
    	],
    	as1: {
    		desc: "火・雷属性の味方を回復、HP50％以下なら更に回復(通常：11％ / HP50％以下：20％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに火・雷属性の味方を蘇生(回復：25％ / 蘇生：25％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "火・雷属性の味方を回復、HP50％以下なら更に回復(通常：13％ / HP50％以下：22％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに火・雷属性の味方を蘇生(回復：50％ / 蘇生：50％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "踊り続ける生ける神話 Mr.ボブ",
    	cardno: 3961,
    	imageno: -1,
    	hp: 3089,
    	atk: 2249,
    	cost: 42,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
			{ /* 経験値取得量アップⅠ */ },
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/10％",
    		proc: null
    	},
    	ss1: {
    		desc: "MAXHPの100％を使い敵全体へダメージ(400％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：12％ / 攻撃力アップ：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "MAXHPの100％を使い敵全体へダメージ(800％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "至愛の屍術 マリー・エヴァレット",
    	cardno: 4289,
    	imageno: -1,
    	hp: 2433,
    	atk: 2505,
    	cost: 42,
    	attr: [2, -1],
    	species: [2],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Statusup(200, 0),
            Statusup(200, 0),
            Costdown(2),
            Costdown(2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [2, ]),
            Spec_statusup(200, 0, [2, ]),
    	],
    	as1: {
    		desc: "敵単体へのダメージアップ＆敵HPを吸収する(攻撃：250％ / 吸収：5％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し(20％)、さらに雷属性の味方を20％で蘇生",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ、さらに雷属性の味方のHPを回復＆敵HPを吸収する(攻撃：320％ / 回復：2％ / 吸収：5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し(30％)、さらに雷属性の味方を20％で蘇生",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "学園アイドル伝説 MIU☆MIU",
    	cardno: 4451,
    	imageno: -1,
    	hp: 2511,
    	atk: 3289,
    	cost: 43,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Statusup(0, 200),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特効ダメージ/400％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復する(75％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特効ダメージ/500％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを完全に回復し、更に3ターン雷属性の味方の攻撃力をアップ(+30％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "超絶夏ビキニ MIU☆MIU",
    	cardno: 4531,
    	imageno: -1,
    	hp: 3004,
    	atk: 2990,
    	cost: 49,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Heal_afterbattle(10),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(0, 200, [9, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン敵の状態異常攻撃を無効化する",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Statusup(600, 0),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ、さらに雷属性の味方のHPを回復(攻撃：350％ / 回復：5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン敵の状態異常攻撃を無効化する",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "大魔道音楽教授 ミュート・クラッセ",
    	cardno: 4547,
    	imageno: -1,
    	hp: 2415,
    	atk: 2849,
    	cost: 46,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Costdown(2),
            Fastskill(1),
            Costdown(2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(0, 200),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "術士の仲間の数だけダメージアップ、5チェインでさらにアップ(通常：+30％×種族数 / 5チェイン：+50％×種族数)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインプラス2の効果を付与",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "術士の仲間の数だけダメージアップ、5チェインでさらにアップ(通常：+50％×種族数 / 5チェイン：+70％×種族数)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインプラス3の効果を付与",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "超越の金剛龍 インフェルナグ",
    	cardno: 3628,
    	imageno: -1,
    	hp: 2630,
    	atk: 2144,
    	cost: 35,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [0, ]),
            Spec_statusup(200, 0, [0, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "3チェインでダメージ絶大アップ/250％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷属性の究極ダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 300),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "3チェインでダメージ極大アップ/350%",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷属性の超究極ダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "天網妖麗の巫術士 メーベル・テイラー",
    	cardno: 4679,
    	imageno: -1,
    	hp: 2666,
    	atk: 2854,
    	cost: 36,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Statusup(200, 0),
            Statusup(0, 200),
            Statusup(200, 0),
            Costdown(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(2),
            Costdown(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷属性のダメージ(150％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷属性のダメージ(220％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "永遠に続く愛 ラム＆あたる",
    	cardno: 4176,
    	imageno: -1,
    	hp: 2910,
    	atk: 2245,
    	cost: 47,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Spec_statusup(0, 200, [5, ]),
            Spec_statusup(200, 0, [5, ]),
            Heal_afterbattle(10),
			{ /* ゴールド取得量アップⅠ */ },
            Fastskill(2),
            Spec_statusup(200, 0, [5, ]),
            Spec_statusup(0, 200, [5, ]),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "1クエストに1回のみ、ジャンルパネルにチェインプラス2の効果を付与",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復し、さらに雷属性の味方の攻撃力をアップ(回復：16％ / 攻撃力：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "1クエストに1回のみ、ジャンルパネルにチェインプラス4の効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "甘くて冷たい微笑み リヴェータ",
    	cardno: 4349,
    	imageno: -1,
    	hp: 2435,
    	atk: 3205,
    	cost: 48,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特効3連撃/計400％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン全属性の味方の攻撃力をアップ(+40％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特効3連撃/計500％",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン全属性の味方の攻撃力をアップ、HP20％未満で更にアップ(通常：+60％ / HP20％未満：+200％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "白霊竜の金色の翼 リティカ・パス",
    	cardno: 4424,
    	imageno: -1,
    	hp: 2673,
    	atk: 2650,
    	cost: 38,
    	attr: [2, -1],
    	species: [0],
    	awakes: [
            Costdown(2),
            Fastskill(1),
            Attr_relief([0, 1, 1, 0, 0, ], 10),
            Statusup(100, 0),
            Attr_relief([0, 1, 1, 0, 0, ], 10),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [0, ]),
            Spec_statusup(200, 0, [0, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方のHPを回復、龍族・術士はさらに回復(水雷：10％ / 水雷+種族：14％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン全属性のダメージを25％軽減する",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "水・雷属性の味方のHPを回復、龍族・術士はさらに回復(水雷：13％ / 水雷+種族：17％)",
    		proc: null
    	},
    	ss2: {
    		desc: "3ターン全属性のダメージを50％軽減する",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "外天の人形師 リツェーレ・トノラ",
    	cardno: 4036,
    	imageno: -1,
    	hp: 2702,
    	atk: 2508,
    	cost: 45,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_relief([1, 0, 0, 0, 0, ], 20),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "5チェインで雷属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ雷属性のダメージ(200％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインで雷属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ雷属性のダメージ(400％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "魅惑の歌のワンツースリー 鏡音リン",
    	cardno: 4889,
    	imageno: -1,
    	hp: 3402,
    	atk: 2609,
    	cost: 35,
    	attr: [2, -1],
    	species: [6],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [6, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
    	],
    	as1: {
    		desc: "雷属性の味方を回復、物質はさらに回復(雷：10％ / 雷+種族：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン味方全体を徐々に回復する(15％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方を回復、物質はさらに回復(雷：13％ / 雷+種族：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン味方全体を徐々に回復する(20％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "穿神脚 師匠＆リンリン＆ポンタン",
    	cardno: 4288,
    	imageno: -1,
    	hp: 2345,
    	atk: 2634,
    	cost: 39,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            Statusup(0, 200),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "3チェインで敵単体を4回連続攻撃、HP80％以上でさらにダメージアップ(通常：計300％ / HP80％以上：計400％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ雷属性の5回連続ダメージ(計180％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで敵単体を4回連続攻撃、HP80％以上でさらにダメージアップ(通常：計400％ / HP80％以上：計500％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ雷属性の5回連続ダメージ(計380％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "喰滅されし根源 ルナリィ・ヘレラ",
    	cardno: 4168,
    	imageno: -1,
    	hp: 2143,
    	atk: 3545,
    	cost: 44,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Statusup(0, 200),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(200, 0),
            Fastskill(2),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "3チェインで水属性の敵単体へ特攻ダメージ/525％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のガード＆ダメージブロックを解除する",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで水属性の敵単体へ特攻ダメージ/625％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のガード＆ダメージブロックを解除し、雷属性のダメージ(180％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "神誅の黄金弓 ルフ・ファルネーゼ",
    	cardno: 4851,
    	imageno: -1,
    	hp: 2112,
    	atk: 3303,
    	cost: 43,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(200, 0),
            Statusup(0, 200),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Spec_statusup(200, 0, [8, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特効3連撃/計400％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターン自分の攻撃力をアップ(+150％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特効3連撃/計500％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン自分の攻撃力をアップ(+250％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "協奏の風光 ルミィ・エイプリル",
    	cardno: 3990,
    	imageno: -1,
    	hp: 2008,
    	atk: 3172,
    	cost: 41,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Statusup(200, 0),
            Costdown(2),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(0, 200),
            Fastskill(1),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を5回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン雷属性の味方の攻撃力をアップ(+40％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            NEFTJOD(30),
    	],
    	as2: {
    		desc: "敵単体を5回連続攻撃/計350％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン雷属性の味方の攻撃力をアップ(+60％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "鋼心王の座 ルーファス・ヴァイル",
    	cardno: 4287,
    	imageno: -1,
    	hp: 2439,
    	atk: 2510,
    	cost: 34,
    	attr: [2, -1],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Statusup(0, 100),
            Statusup(200, 0),
            Statusup(100, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(0, 200),
            Statusup(200, 0),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "雷属性の味方の攻撃力をアップ、戦士はさらにアップ(雷：+20％ / 雷+種族：+40％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方の攻撃力をアップ、戦士はさらにアップ(雷：+30％ / 雷+種族：+60％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷属性化し、攻撃力アップの効果を付与(+20％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "継承と雷霆の レナ・イラプション",
    	cardno: 4700,
    	imageno: 6370,
    	hp: 1403,
    	atk: 4823,
    	cost: 45,
    	attr: [2, -1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "7チェインで水属性の敵単体へ特効ダメージ/775％",
    		proc: ChainAttrAttack(7.75, 7, [0,1,0,0,0])
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス1の効果を付与",
    		turn: 3,
    		proc: [panel_chainplus(1)]
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "7チェインで水属性の敵単体へ特効ダメージ/875％",
    		proc: ChainAttrAttack(8.75, 7, [0,1,0,0,0])
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインがプラス2の効果を付与",
    		turn: 5,
    		proc: [panel_chainplus(2)]
    	},
    }, {
    	name: "スリーツーワンで響く歌声 鏡音レン",
    	cardno: 4892,
    	imageno: -1,
    	hp: 3183,
    	atk: 2532,
    	cost: 34,
    	attr: [2, -1],
    	species: [6],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Spec_statusup(200, 0, [6, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(2),
    	],
    	as1: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ、物質は更にアップ(雷：+40％ / 雷+種族：+80％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体の攻撃ターンを2遅らせる",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ、物質は更にアップ(雷：+70％ / 雷+種族：+110％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体の攻撃ターンを3遅らせる",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "空戦支配の片翼 ローヴィ・フロイセ",
    	cardno: 4757,
    	imageno: -1,
    	hp: 3565,
    	atk: 2765,
    	cost: 43,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(2),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Heal_afterbattle(10),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/13％",
    		proc: null
    	},
    	ss1: {
    		desc: "スペシャルスキルの発動ターンを1早め、敵全体の攻撃ターンを1遅らせる",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復、さらに雷属性の味方の攻撃力をアップ(回復：16％ / 攻撃力：+30％)",
    		proc: null
    	},
    	ss2: {
    		desc: "スペシャルスキルの発動ターンを2早め、敵全体の攻撃ターンを2遅らせる",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "唸る激嵐の双舞剣 ロベルト・カウズ",
    	cardno: 4597,
    	imageno: -1,
    	hp: 2396,
    	atk: 3223,
    	cost: 43,
    	attr: [2, -1],
    	species: [8],
    	awakes: [
            Fastskill(1),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_relief([0, 0, 1, 0, 0, ], 10),
            Fastskill(2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Spec_statusup(0, 200, [8, ]),
    	],
    	as1: {
    		desc: "水属性の敵単体へ特効3連撃計400％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50%を使い敵単体へダメージ(240％×味方の人数)",
    		turn: 11,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "水属性の敵単体へ特効3連撃計500％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50%を使い敵単体へダメージ(300％×味方の人数)",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "求めたのは本当の「自分」 アイ",
    	cardno: 3881,
    	imageno: -1,
    	hp: 2542,
    	atk: 2056,
    	cost: 45,
    	attr: [2, 0],
    	species: [-1],
    	awakes: [
            Spec_statusup(0, 200, [4, 6, ]),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Spec_statusup(200, 0, [4, 6, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(2),
            Spec_statusup(200, 0, [4, 6, ]),
            Heal_afterbattle(10),
            Spec_statusup(0, 200, [4, 6, ]),
    	],
    	as1: {
    		desc: "3チェインでダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "2ターン火・雷属性の味方の攻撃力をアップ(+40％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss2: {
    		desc: "4ターン火・雷属性の味方の攻撃力をアップ(+60％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "双星、芽生えたココロ アイ＆アイ",
    	cardno: 4432,
    	imageno: -1,
    	hp: 2328,
    	atk: 2432,
    	cost: 48,
    	attr: [2, 0],
    	species: [6],
    	awakes: [
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [6, ]),
            Spec_statusup(200, 0, [6, ]),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [6, ]),
            Spec_statusup(0, 200, [6, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルにチェインがプラス2の効果を付与",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "5チェインでMAXHP15％を使い、ダメージアップ/650％",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルにチェインがプラス3の効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "光を求めるふたり KAITO＆MEIKO",
    	cardno: 4970,
    	imageno: -1,
    	hp: 2423,
    	atk: 2008,
    	cost: 36,
    	attr: [2, 0],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
    	],
    	as1: {
    		desc: "3チェインで敵単体を2回連続攻撃/計300％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ火・雷属性のダメージ、さらに味方全体のHPを回復する(攻撃：120％ / 回復：20％)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "3チェインで敵単体を2回連続攻撃/計400％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ火・雷属性のダメージ、さらに味方全体のHPを回復する(攻撃：150％ / 回復：20％)",
    		turn: 9,
    		proc: null
    	},
    }, {
    	name: "絶対的勝者 クラリア・シャルルリエ",
    	cardno: 4772,
    	imageno: -1,
    	hp: 3091,
    	atk: 2210,
    	cost: 44,
    	attr: [2, 0],
    	species: [8],
    	awakes: [
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
            NEFTJOD(30),
    	],
    	as1: {
    		desc: "4チェインで敵単体を4回連続攻撃/計400％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの50％を使い、2ターン火・雷属性の味方の攻撃力をアップ(+70％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "4チェインで敵単体を4回連続攻撃/計500％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のMAXHPの50％を使い、4ターン火・雷属性の味方の攻撃力をアップ(+100％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "選ばれしさいかわんこ コロン",
    	cardno: 4299,
    	imageno: -1,
    	hp: 2111,
    	atk: 1888,
    	cost: 30,
    	attr: [2, 0],
    	species: [-1],
    	awakes: [{ /* 経験値取得量アップⅠ */ },
            Fastskill(1),
			{ /* ゴールド取得量アップⅠ */ },
            Statusup(100, 0),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(100, 0),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Heal_afterbattle(10),
    	],
    	as1: {
    		desc: "火・雷属性のHPを回復、戦士はさらに回復(火雷：8％ / 火雷+戦士：11％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、さらに火・雷属性の味方を蘇生(回復：25％ / 蘇生：10％)",
    		turn: 10,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "火・雷属性のHPを回復、戦士はさらに回復(火雷：11％ / 火雷+戦士：16％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、さらに火・雷属性の味方を蘇生(回復：25％ / 蘇生：25％)",
    		turn: 14,
    		proc: null
    	},
    }, {
    	name: "機獣の咆哮 シャーリー＆ヴォルフ",
    	cardno: 4525,
    	imageno: -1,
    	hp: 1826,
    	atk: 3035,
    	cost: 47,
    	attr: [2, 0],
    	species: [8],
    	awakes: [
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Statusup(0, 200),
            Spec_statusup(0, 200, [8, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(200, 0, [8, ]),
            Fastskill(2),
    	],
    	as1: {
    		desc: "味方のMAXHP10％を使い、敵単体へのダメージアップ/350％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火・雷属性の5回連続ダメージ(計180％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "敵単体へのダメージアップ/400％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火・雷属性の5回連続ダメージ(計380％)",
    		turn: 8,
    		proc: null
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
    		proc: ChainAttrAttack(6.5, 5, [0,1,0,0,0])
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
    		proc: ChainAttrAttack(7.5, 5, [0,1,0,0,0])
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを3早める",
    		turn: 11,
    		proc: [ss_skillboost(3)]
    	},
    }, {
    	name: "幻想に共鳴するメロディ 初音ミク",
    	cardno: 4880,
    	imageno: -1,
    	hp: 2754,
    	atk: 2649,
    	cost: 48,
    	attr: [2, 0],
    	species: [8],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_relief([0, 1, 0, 0, 0, ], 20),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
            NEFTJOD(30),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
    	],
    	as1: {
    		desc: "5チェインでダメージアップ/450％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体の攻撃力とHPを500アップ(上限値：2000)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "5チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体の攻撃力とHPを1000アップ(上限値：2000)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "声が想いを繋ぐ 初音ミク",
    	cardno: 4865,
    	imageno: -1,
    	hp: 3342,
    	atk: 2538,
    	cost: 43,
    	attr: [2, 0],
    	species: [6],
    	awakes: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "火・雷属性の味方を回復、5チェインで更に回復(通常：10％ / 5チェイン：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のHPを回復し、状態異常を回復する(回復：50％)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "火・雷属性の味方を回復、5チェインで更に回復(通常：13％ / 5チェイン：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のHPを回復し、状態異常を回復、さらに火・雷属性の味方を50％で蘇生(回復：50％)",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "春霞咲く花の歌 ミコト・ウタヨミ",
    	cardno: 4121,
    	imageno: -1,
    	hp: 2529,
    	atk: 2068,
    	cost: 45,
    	attr: [2, 0],
    	species: [-1],
    	awakes: [
            Statusup(0, 200),
            Fastskill(1),
            Spec_statusup(200, 0, [1, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            Spec_statusup(200, 0, [1, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
			{ /* 経験値取得量アップⅠ */ },
            Spec_statusup(0, 200, [1, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を3回連続攻撃/計350％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵単体へ火・雷属性の5回連続ダメージ(計180％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "3チェインで敵単体を3回連続攻撃/計450％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵単体へ火・雷属性の5回連続ダメージ(計380％)",
    		turn: 8,
    		proc: null
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
    		proc: [ss_damage_all(special_attr([0,1,0,0,0], 5.0, 2.0), [2])]
    	},
    	as2: {
    		desc: "5チェインで敵単体を3回連続攻撃(550)",
    		proc: ChainDualAttack(5.5, 5, 3)
    	},
    	ss2: {
    		desc: "敵全体へ雷属性のダメージ(300)、さらに水属性の敵には特攻ダメージ(900)",
    		turn: 9,
    		proc: [ss_damage_all(special_attr([0,1,0,0,0], 9.0, 2.0), [2])]
    	},
    }, {
    	name: "世界中の皆に元気をあげる 鏡音リン",
    	cardno: 5006,
    	imageno: -1,
    	hp: 2414,
    	atk: 2179,
    	cost: 43,
    	attr: [2, 0],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Statusup(0, 200),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Fastskill(2),
            Attr_statusup(100, 0, [1, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "5チェインで物質・戦士の仲間の数だけダメージアップ/+80％×種族数",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを火・雷属性化",
    		turn: 4,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [1, 0, 1, 0, 0, ]),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "5チェインで物質・戦士の仲間の数だけダメージアップ/+100％×種族数",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを火・雷属性化し、チェインがプラス1の効果を付与",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "夢を描く箒星 ソフィ・ハーネット",
    	cardno: 4697,
    	imageno: 6367,
    	hp: 2956,
    	atk: 2280,
    	cost: 46,
    	attr: [2, 1],
    	species: [9],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Spec_statusup(200, 0, [9, ]),
            NEFTJOD(30),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Statusup(0, 200),
            Fastskill(1),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "3チェインで敵単体を3回連続攻撃/計350％",
    		proc: ChainDualAttack(3.5, 3, 3)
    	},
    	ss1: {
    		desc: "直前に発動したスペシャルスキルを発動する",
    		turn: 9,
    		proc: [ss_latest_copy()],
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "3チェインで敵単体を3回連続攻撃/計450％",
    		proc: ChainDualAttack(4.5, 3, 3)
    	},
    	ss2: {
    		desc: "直前に発動したスペシャルスキルを発動する",
    		turn: 9,
    		proc: [ss_latest_copy()],
    	},
    }, {
    	name: "時空を超えた絆 Wセーラームーン",
    	cardno: 4001,
    	imageno: -1,
    	hp: 2546,
    	atk: 2045,
    	cost: 45,
    	attr: [2, 1],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Heal_afterbattle(10),
            Fastskill(2),
            Spec_statusup(0, 200, [8, ]),
            Spec_statusup(200, 0, [8, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方のHPを回復、戦士はさらに回復(水雷：10％ / 水雷+種族：15％)",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを水＆雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(400, 0),
    	],
    	as2: {
    		desc: "水・雷属性の味方のHPを回復、戦士はさらに回復(水雷：13％ / 水雷+種族：18％)",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを水＆雷属性化し、回復の効果を付与(5％)",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "奇想天外☆大満開 ナナ・クラリィ",
    	cardno: -1,
    	imageno: -1,
    	hp: 2567,
    	atk: 2104,
    	cost: 50,
    	attr: [2, 1],
    	species: [-1],
    	awakes: [
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Fastskill(1),
            NEFTJOD(30),
            Statusup(200, 0),
            Spec_statusup(200, 0, [9, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
    	],
    	as1: {
    		desc: "7チェインで水・雷属性の味方の攻撃力をアップ、15チェインで更にアップ(7チェイン：+60％ / 15チェイン：+140％)",
    		proc: null
    	},
    	ss1: {
    		desc: "1クエストに1回のみ、ジャンルパネルを水・雷属性化",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "7チェインで水・雷属性の味方の攻撃力をアップ、15チェインで更にアップ(7チェイン：+80％ / 15チェイン：+160％)",
    		proc: null
    	},
    	ss2: {
    		desc: "1クエストに1回のみ、ジャンルパネルを水・雷属性化し、様々な効果を付与",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "美味しく目覚める大天使 ミカエラ",
    	cardno: 4345,
    	imageno: -1,
    	hp: 2756,
    	atk: 1924,
    	cost: 46,
    	attr: [2, 1],
    	species: [3],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            NEFTJOD(30),
            Fastskill(1),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Fastskill(2),
            Spec_statusup(0, 200, [1, 3, ]),
            Spec_statusup(200, 0, [1, 3, ]),
    	],
    	as1: {
    		desc: "水・雷属性の味方のHPを回復、神族・天使はさらに回復(水雷：10％ / 水雷+種族：17％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ水・雷属性のダメージ、さらに味方全体のHPを回復する(攻撃：120％ / 回復：15％)",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 400),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "水・雷属性の味方のHPを回復、神族・天使はさらに回復(水雷：13％ / 水雷+種族：20％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ水・雷属性のダメージ、さらに味方全体のHPを回復する(攻撃：180％ / 回復：25％)",
    		turn: 8,
    		proc: null
    	},
    }, {
    	name: "外道冥路の彷徨者 リセル・ルヘリア",
    	cardno: 4587,
    	imageno: -1,
    	hp: 2567,
    	atk: 2331,
    	cost: 49,
    	attr: [2, 1],
    	species: [9],
    	awakes: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Spec_statusup(0, 200, [9, ]),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "5チェインで水・雷属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "4ターン敵全体に毒のダメージを与える(5000ダメージ)",
    		turn: 6,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 200),
            Statusup(800, 0),
    	],
    	as2: {
    		desc: "5チェインで水・雷属性の味方の攻撃力をアップ/+90％",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターン敵全体に毒のダメージを与える(9999ダメージ)",
    		turn: 10,
    		proc: null
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
    	name: "境界の幻視者 ルピラ・ヴィム",
    	cardno: 4654,
    	imageno: -1,
    	hp: 2419,
    	atk: 2048,
    	cost: 49,
    	attr: [2, 1],
    	species: [9],
    	awakes: [
            Fastskill(1),
            Statusup(0, 200),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            NEFTJOD(30),
            Attr_statusup(100, 0, [0, 1, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Fastskill(2),
            Spec_statusup(0, 200, [9, ]),
            Spec_statusup(200, 0, [9, ]),
    	],
    	as1: {
    		desc: "5チェインで水・雷属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss1: {
    		desc: "3ターンの間、スキルカウンター待機",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 1, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインで水・雷属性の味方の攻撃力をアップ、さらに水・雷属性の味方のHPを回復(攻撃：+60％ / 回復：5％)",
    		proc: null
    	},
    	ss2: {
    		desc: "5ターンの間、スキルカウンター待機",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "AbCd-γ:《絶望の聖地 スビェート》",
    	cardno: 5049,
    	imageno: -1,
    	hp: 2201,
    	atk: 3004,
    	cost: 60,
    	attr: [2, 3],
    	species: [11],
    	awakes: [
            Costdown(6),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            NEFTJOD(30),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
            NEFTJOD(30),
            Attr_relief([0, 0, 0, 0, 0, ], 10),
    	],
    	as1: {
    		desc: "残りHPが90％以上でダメージアップ＆敵HPを吸収(攻撃：360％ / 吸収：12％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体へ雷・光属性のダメージ(180％)",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            NEFTJOD(30),
            Statusup(0, 400),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "残りHPが90％以上でダメージアップ＆敵HPを吸収(攻撃：460％ / 吸収：12％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体へ雷・光属性のダメージ(260％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "AbCd:Γ《慈愛の根源 スビェート》",
    	cardno: 5121,
    	imageno: -1,
    	hp: 4101,
    	atk: 2431,
    	cost: 77,
    	attr: [2, 3],
    	species: [-1],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
            NEFTJOD(30),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(1),
    	],
    	as1: {
    		desc: "雷属性の味方のHPを回復/13%",
    		proc: null
    	},
    	ss1: {
    		desc: "ジャンルパネルを雷・光属性化",
    		turn: 3,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "雷属性の味方のHPを回復/15%",
    		proc: null
    	},
    	ss2: {
    		desc: "ジャンルパネルを雷・光属性化し、回復の効果を付与(回復：10％)",
    		turn: 6,
    		proc: null
    	},
    }, {
    	name: "光輪の虚神 エルデステリオ",
    	cardno: 4615,
    	imageno: -1,
    	hp: 2601,
    	atk: 1950,
    	cost: 50,
    	attr: [2, 3],
    	species: [6],
    	awakes: [
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Statusup(0, 200),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Statusup(200, 0),
            Fastskill(2),
            Statusup(0, 200),
            Spec_statusup(200, 0, [6, ]),
            Spec_statusup(0, 200, [6, ]),
    	],
    	as1: {
    		desc: "15チェインでダメージアップ/1000％",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のスペシャルスキルの発動ターンを3早める",
    		turn: 9,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "15チェインでダメージアップ/1100％",
    		proc: null
    	},
    	ss2: {
    		desc: "味方全体のスペシャルスキルの発動ターンを4早める",
    		turn: 13,
    		proc: null
    	},
    }, {
    	name: "AbCd-Ξ:《朽ちゆく神骸 テネブル》",
    	cardno: -1,
    	imageno: -1,
    	hp: 4210,
    	atk: 3004,
    	cost: 62,
    	attr: [2, 3],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            Statusup(0, 100),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Statusup(200, 0),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "戦闘不能の仲間の数だけ攻撃力アップ＆敵HPを吸収(戦闘不能人数×400％+100％ / 吸収：4％)(1体：500%/2体：900%/3体：1300%/4体：1700%：2100％)",
    		proc: null
    	},
    	ss1: {
    		desc: "味方全体のMAXHPの100％を使い敵全体へダメージ(150％×味方の人数)",
    		turn: 7,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(400, 0),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
    	],
    	as2: {
    		desc: "戦闘不能の仲間の数だけ攻撃力アップ＆敵HPを吸収(戦闘不能人数×450％+100％ / 吸収：4％)(1体：550%/2体：1000%/3体：1450%/4体：1900%：2350％)",
    		proc: null
    	},
    	ss2: {
    		desc: "自分を犠牲に全員をHP75％蘇生",
    		turn: 10,
    		proc: null
    	},
    }, {
    	name: "光を求める歌姫 初音ミク",
    	cardno: 4962,
    	imageno: -1,
    	hp: 2243,
    	atk: 2221,
    	cost: 27,
    	attr: [2, 3],
    	species: [8],
    	awakes: [
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            NEFTJOD(30),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Fastskill(1),
            Attr_statusup(100, 0, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Attr_relief([0, 1, 0, 0, 0, ], 20),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
    	],
    	as1: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ/+40％",
    		proc: null
    	},
    	ss1: {
    		desc: "1ターン敵の状態異常攻撃を無効化する",
    		turn: 5,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 400),
    	],
    	as2: {
    		desc: "3チェインで雷属性の味方の攻撃力をアップ/+60％",
    		proc: null
    	},
    	ss2: {
    		desc: "2ターン敵の状態異常攻撃を無効化する",
    		turn: 7,
    		proc: null
    	},
    }, {
    	name: "AbCd-Ω:《天に蠢く憤怒 カイン》",
    	cardno: 5045,
    	imageno: -1,
    	hp: 2765,
    	atk: 3004,
    	cost: 46,
    	attr: [2, 4],
    	species: [-1],
    	awakes: [
            Statusup(200, 0),
            Fastskill(1),
            Attr_statusup(0, 100, [0, 0, 1, 0, 0, ]),
            NEFTJOD(60),
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_relief([0, 1, 0, 0, 0, ], 10),
            Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
            Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "5チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：650％)",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のガード＆ダメージブロックを解除する",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(0, 500),
            Statusup(500, 0),
    	],
    	as2: {
    		desc: "5チェインかつパネルが2色でダメージアップ、3色で更にアップ(2色：500％ / 3色：900％)",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のガード＆ダメージブロックを解除し、雷属性のダメージ。HP20％以下でさらにダメージアップ(通常：180％ / HP20％以下：400％)",
    		turn: 12,
    		proc: null
    	},
    }, {
    	name: "AbCd-Ωω:《我が存在を滅す カイン》",
    	cardno: 5036,
    	imageno: -1,
    	hp: 2221,
    	atk: 3579,
    	cost: 46,
    	attr: [2, 4],
    	species: [-1],
    	awakes: [
            Fastskill(1),
            NEFTJOD(30),
            Attr_relief([0, 0, 0, 1, 1, ], 30),
            Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
            Panel_boost([0, 0, 1, 0, 0, ], 1),
            NEFTJOD(30),
            Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
            Fastskill(2),
            Panel_boost([0, 0, 1, 0, 0, ], 2),
            Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
    	],
    	as1: {
    		desc: "7チェインでダメージアップ/550％",
    		proc: null
    	},
    	ss1: {
    		desc: "敵全体のカウンターを解除する",
    		turn: 8,
    		proc: null
    	},
    	islegend: true,
    	Lawake: [
            Statusup(500, 0),
            Statusup(0, 500),
    	],
    	as2: {
    		desc: "7チェインでダメージアップ/650％",
    		proc: null
    	},
    	ss2: {
    		desc: "敵全体のカウンターを解除し、雷属性のダメージ。HP20％以下でさらにスキル反射を解除し、ダメージアップ(通常：180％ / HP20％以下：300％)",
    		turn: 13,
    		proc: null
    	},
    },

];