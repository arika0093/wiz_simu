// -------------------------
// クエストデータ
// -------------------------
Quests = [
	// -------------------------
	// test
	// -------------------------
	/*
	{
		id: "test",
		name: "テスト用クエスト",
		category: "test",
		desc: "1戦しかありません。",
		overlap: false,
		hidden: true,
		aprnum: 1,
		data: [
			{
				appearance: [1],
				enemy: [
					{
						name: "火ハーピィ",
						hp: 19800,
						imageno: 1,
						attr: 0,
						spec: 5,
						move: {
							// 先制行動
							on_popup: [
								attack_counter_dual(1000, 3),
							],
							// 通常行動(ターンの値は1多くすること)
							// 1ターン中に複数行動させたいなら配列で並べて記載
							on_move: [
								damage_block_all(2000, 2),
								impregnable(5),
							],
							// ランダム行動
							atrandom: false,
							// 初期待機ターン
							turn: 2,
							// 行動周期
							wait: 1,
						},
					},
				],
			},
		],
	},
	*/
	// -------------------------
	// トーナメント: 肆式
	// -------------------------
	{
		id: "grade14",
		name: "賢王【朧】肆式(トーナメント14段)",
		category: "tornament",
		desc: "雷推奨のトーナメントです。1位入賞時4232pt。",
		overlap: false,
		aprnum: 5,
		data: [
			{
				appearance: [1],
				enemy: [
					{
						name: "スクワルボーン",
						hp: 21000,
						imageno: 5249,
						attr: 1,
						spec: 2,
						move: {
							on_move: [
								s_enemy_chain_sealed(7),
								s_enemy_attack(350, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					}, {
						name: "リラソハウスバウンサー",
						hp: 9500,
						imageno: 5242,
						attr: 1,
						spec: 5,
						move: {
							on_move: [
								s_enemy_attack(70, 3, 5, true),
								s_enemy_attack(200, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					}, {
						name: "リラソハウスバウンサー",
						hp: 9500,
						imageno: 5242,
						attr: 1,
						spec: 5,
						move: {
							on_move: [
								s_enemy_attack(70, 3, 5, true),
								s_enemy_attack(200, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					},
				],
			}, {
				appearance: [2],
				enemy: [
					{
						name: "ターコイズレンジャー",
						hp: 75000,
						imageno: 5231,
						attr: 1,
						spec: 0,
						move: {
							on_move: [
								s_enemy_attack(70, 3, 5, true),		// 要検証
								s_enemy_attack(200, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					}, {
						name: "木負いガメ",
						hp: 15,
						imageno: 3743,
						attr: 1,
						spec: 7,
						move: {
							on_popup: [
								impregnable(-1),
							],
							on_move: [
								s_enemy_attack(100, 3, 5, true),
								s_enemy_attack(200, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						}
					}, {
						name: "リラソハウスバウンサー",
						hp: 36300,
						imageno: 5242,
						attr: 1,
						spec: 5,
						move: {
							on_move: [
								s_enemy_attack(70, 3, 5, true),
								s_enemy_attack(200, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						}
					},
				],
			}, {
				appearance: [3],
				enemy: [
					{
						name: "ターコイズサハギン",
						hp: 58000,
						imageno: 2544,
						attr: 1,
						spec: 5,
						move: {
							on_move: [
								m_enemy_once(s_enemy_attack(500, 5, 1, true)),
								s_enemy_attack(250, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						}
					}, {
						name: "ターコイズサハギン",
						hp: 29000,
						imageno: 2544,
						attr: 1,
						spec: 5,
						move: {
							on_move: [
								m_enemy_once(s_enemy_attack(500, 5, 1, true)),
								s_enemy_attack(250, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						}
					}, {
						name: "クリフゴート",
						hp: 36300,
						imageno: 3737,
						attr: 1,
						spec: 5,
						move: {
							on_move: [
								m_enemy_once(damage_block_own(30000, -1)),
								s_enemy_attack(250, 5, 1, false),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					},
				],
			}, {
				appearance: [4],
				enemy: [
					{
						name: "リラソハウスバウンサー",
						hp: 10000,
						imageno: 5242,
						attr: 1,
						spec: 5,
						move: {
							on_move: [
								s_enemy_attack(250, 5, 1, true),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					}, {
						name: "蒼鏡 サーチャー",
						hp: 63000,
						imageno: 3731,
						attr: 1,
						spec: 6,
						move: {
							on_move: [
								m_enemy_once(s_enemy_chain_break()),
								s_enemy_attack(70, 3, 5, true),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					}, {
						name: "リラソハウスバウンサー",
						hp: 36300,
						imageno: 5242,
						attr: 1,
						spec: 5,
						move: {
							on_move: [
								s_enemy_attack(250, 5, 1, true),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					},
				],
			}, {
				appearance: [5],
				enemy: [
					{
						name: "ロレッタ",
						hp: 100000,
						imageno: 5482,
						attr: 1,
						spec: 9,
						move: {
							on_move: [
								m_enemy_once(s_enemy_attr_weaken([0, 1, 0, 0, 0], 1.5, 5, 4)),
								s_enemy_attack(1400, 1, 1),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					}, {
						name: "ルシェ",
						hp: 600000,
						imageno: 5486,
						attr: 1,
						spec: 0,
						move: {
							on_move: [
								m_enemy_once(s_enemy_poison(500, 5, 5)),
								s_enemy_attack(1400, 1, 1, m_enemy_tgtype_maxhp()),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					}, {
						name: "ベルナデッタ",
						hp: 100000,
						imageno: 5494,
						attr: 1,
						spec: 9,
						move: {
							on_move: [
								m_enemy_once(s_enemy_as_sealed(5, 4)),
								s_enemy_attack(1400, 1, 1, m_enemy_tgtype_minhp()),
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						},
					},
				],
			},
		],
	},

	// -------------------------
	// トーナメント: 参式
	//   敵行動:. 要検証
	// -------------------------
	{
		id: "grade13",
		name: "賢王【煉】参式(トーナメント13段)",
		category: "tornament",
		desc: "水推奨のトーナメントです。1位入賞時3640pt。",
		aprnum: 5,
		overlap: false,
		data: [
			{
				// 火龍 / 火龍
				appearance: [1, 2],
				enemy: [
					{
						name: "アッガローグ",
						hp: 35000,
						imageno: 5228,
						attr: 0,
						spec: 0,
					}, {
						name: "アッガローグ",
						hp: 35000,
						imageno: 5228,
						attr: 0,
						spec: 0,
					},
				],
			}, {
				// 水龍 / 火龍
				appearance: [1, 2],
				enemy: [
					{
						name: "水甲ウォーターリザード",
						hp: 21000,
						imageno: 5254,
						attr: 1,
						spec: 0,
					}, {
						name: "アッガローグ",
						hp: 35000,
						imageno: 5228,
						attr: 0,
						spec: 0,
					},
				],
			}, {
				// 水魔族 / 雷魔族 / 火亜人
				appearance: [3],
				enemy: [
					{
						name: "ボーンソルジャー・フリーズ",
						hp: 24000,
						imageno: 5248,
						attr: 1,
						spec: 2,
					}, {
						name: "ボーンソルジャー・チャード",
						hp: 16000,
						imageno: 5250,
						attr: 2,
						spec: 2,
					}, {
						name: "アクトハウスバウンサー",
						hp: 100000,
						imageno: 5240,
						attr: 0,
						spec: 5,
						move: {
							on_popup: [
								attack_counter(2000, -1),
							]
						}
					},
				],
			}, {
				// 火魔法生物
				appearance: [4],
				enemy: [
					{
						name: "杓岩のラーヴァスピリット",
						hp: 25,
						imageno: 5259,
						attr: 0,
						spec: 7,
						move: {
							on_popup: [
								impregnable(-1),
							]
						}
					},
				],
			}, {
				// (ボス)火魔法生物 / ティア
				appearance: [5],
				enemy: [
					{
						name: "杓岩のラーヴァスピリット",
						hp: 100000,
						imageno: 5259,
						attr: 0,
						spec: 7,
						move: {
							on_popup: [
								damage_block_own(9000, -1),
							]
						}
					}, {
						name: "ティア",
						imageno: 5223,
						hp: 360000,
						attr: 0,
						spec: 9,
						move: {
							on_popup: [
								skill_counter(-1 - 1 - 1, -1),
								damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry()),
							],
							on_move: [
								s_enemy_attack(1300, 1, 2, true)
							],
							on_angry: [
								attr_change(1),
							],
							on_move_angry: [
								// 要: 攻撃属性の検証
								s_enemy_attack(325, 4, 4, true)
							],
							atrandom: false,
							turn: 2,
							wait: 2,
						}
					},
				],
			},
		],
	},

	// -------------------------
	// トーナメント: 弐式
	//   敵行動:. 要検証
	// -------------------------
	{
		id: "grade12",
		name: "賢王【瞬】弐式(トーナメント12段)",
		category: "tornament",
		desc: "火推奨のトーナメントです。1位入賞時2600pt。入賞確実: 5-6t / タイム勝負: 7t-",
		aprnum: 5,
		overlap: false,
		data: [
			{
				// 雷牛 / 火タービン
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "黄毛クリフゴート",
						hp: 19800,
						imageno: 3738,
						attr: 2,
						spec: 7,
					}, {
						name: "紅鏡サーチャー",
						hp: 13200,
						imageno: 3728,
						attr: 0,
						spec: 6,
					},
				],
			}, {
				// 雷タービン / 火カーバンクル
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "黄鏡サーチャー",
						hp: 19800,
						imageno: 3732,
						attr: 2,
						spec: 6,
					}, {
						name: "柘榴フライングカーバンクル",
						hp: 13200,
						imageno: 3746,
						attr: 0,
						spec: 4,
					},
				],
			}, {
				// 雷カーバンクル / 水タービン
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "黄晶フライングカーバンクル",
						hp: 19800,
						imageno: 3750,
						attr: 2,
						spec: 4,
					}, {
						name: "水鏡サーチャー",
						hp: 6600,
						imageno: 3730,
						attr: 1,
						spec: 6,
					},
				],
			}, {
				// 雷タービン / 雷カーバンクル
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "黄鏡サーチャー",
						hp: 19800,
						imageno: 3732,
						attr: 2,
						spec: 6,
					}, {
						name: "黄晶フライングカーバンクル",
						hp: 19800,
						imageno: 3750,
						attr: 2,
						spec: 4,
					},
				],
			}, {
				// 火タービン / 火タービン
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "紅鏡サーチャー",
						hp: 13200,
						imageno: 3728,
						attr: 0,
						spec: 6,
					}, {
						name: "紅鏡サーチャー",
						hp: 13200,
						imageno: 3728,
						attr: 0,
						spec: 6,
					},
				],
			}, {
				// 雷牛 / 水牛
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "黄毛クリフゴート",
						hp: 19800,
						imageno: 3738,
						attr: 2,
						spec: 7,
					}, {
						name: "青冠クリフゴート",
						hp: 6600,
						imageno: 3736,
						attr: 1,
						spec: 7,
					},
				],
			}, {
				// (ボス)火タービン / オルネ / 水カーバンクル
				appearance: [5],
				enemy: [
					{
						name: "焔嵐タービネックス",
						imageno: 3723,
						hp: 35000,
						attr: 0,
						spec: 6,
						move: {
							on_popup: [
								skill_counter(-1 - 1, -1),
							],
						}
					}, {
						name: "オルネ",
						imageno: 4091,
						hp: 120000,
						attr: 2,
						spec: 9,
					}, {
						name: "蒼玉フライングカーバンクル",
						imageno: 3749,
						hp: 25000,
						attr: 1,
						spec: 7,
						move: {
							on_move: [
								s_enemy_ss_sealed(5, 2),
								null,
							],
							atrandom: false,
							turn: 1,
							wait: 1,
						}
					},
				],
			},
		],
	},

	// -------------------------
	// トーナメント: 壱式
	//   敵行動:. 要検証
	// -------------------------
	{
		id: "grade11",
		name: "賢王【暁】壱式(トーナメント11段)",
		category: "tornament",
		desc: "雷推奨のトーナメントです。1位入賞時2500pt。",
		aprnum: 5,
		overlap: false,
		data: [
			{
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "燐光の骨狼",
						hp: 18000,
						imageno: 2527,
						attr: 2,
						spec: 7,
					},
				],
			}, {
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "氷雨の骨狼",
						hp: 30000,
						imageno: 2525,
						attr: 1,
						spec: 7,
					},
				],
			}, {
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "ブルーサハギン",
						hp: 17000,
						imageno: 2543,
						attr: 1,
						spec: 5,
					}, {
						name: "濁流のコカトリス",
						hp: 17000,
						imageno: 2537,
						attr: 1,
						spec: 2,
					},

				],
			}, {
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "氷毒のキラービー",
						hp: 17000,
						imageno: 2549,
						attr: 1,
						spec: 7,
					}, {
						name: "帯電するコカトリス",
						hp: 9000,
						imageno: 2539,
						attr: 2,
						spec: 2,
					},

				],
			}, {
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "イエローハーピー",
						hp: 9000,
						imageno: 2533,
						attr: 2,
						spec: 5,
					}, {
						name: "火吹きのコカトリス",
						hp: 8000,
						imageno: 2535,
						attr: 0,
						spec: 2,
					},

				],
			}, {
				appearance: [1, 2, 3, 4],
				enemy: [
					{
						name: "ブルーサハギン",
						hp: 17000,
						imageno: 2543,
						attr: 1,
						spec: 5,
					}, {
						name: "レッドハーピー",
						hp: 8000,
						imageno: 2529,
						attr: 0,
						spec: 5,
					},

				],
			}, {
				appearance: [5],
				enemy: [
					{
						name: "プラズマファントム",
						hp: 20000,
						imageno: 2522,
						attr: 2,
						spec: 2,
						move: {
							on_popup: [
								attack_counter(-1 - 19, -1),
							],
						},
					}, {
						name: "ベルナデッタ",
						hp: 200000,
						imageno: 2556,
						attr: 1,
						spec: 9,
						move: {
							on_move: [
								s_enemy_attack(1300, 1, 1),
								null, // HP全体回復(25%)
							],
							atrandom: false,
							turn: 2,
							wait: 2,
						},
					},
				],
			},
		],
	},

	// -------------------------
	// AbCd01 normal
	// -------------------------
	{
		id: "abcd01_n",
		name: "AbyssCode01 黒殻の王『黒業級』",
		category: "abysscode",
		desc: "",
		aprnum: 4,
		overlap: false,
		hidden: true,
		data: [
			{
				appearance: [1],
				enemy: [
					{
						name: "ファハシュヴァイル",
						hp: 30000,
						imageno: 4067,
						attr: 0,
						spec: 0,
					}, {
						name: "ウラガーン",
						hp: 40000,
						imageno: 3706,
						attr: 0,
						spec: 11,
					}, {
						name: "ファングサーラ",
						hp: 20000,
						imageno: 4068,
						attr: 0,
						spec: 7,
					},
				],
			}, {
				appearance: [2],
				enemy: [
					{
						name: "ルインコンダクター",
						hp: 15000,
						imageno: 4070,
						attr: 2,
						spec: 0,
						move: {
							on_popup: [
								skill_counter(9999, -1),
							]
						}
					}, {
						name: "ウラガーン",
						hp: 60000,
						imageno: 3707,
						attr: 0,
						spec: 11,
					},
				],
			}, {
				appearance: [3],
				enemy: [
					{
						name: "ファングサーラ",
						hp: 25000,
						imageno: 4068,
						attr: 0,
						spec: 7,
					}, {
						name: "ウラガーン",
						hp: 90000,
						imageno: 3708,
						attr: 0,
						spec: 11,
					}, {
						name: "リジョンディッシェル",
						hp: 60000,
						imageno: 4069,
						attr: 0,
						spec: 5,
					},
				],
			}, {
				appearance: [4],
				enemy: [
					{
						name: "ファハシュヴァイル",
						hp: 60000,
						imageno: 4067,
						attr: 0,
						spec: 0,
						move: {
							on_popup: [
								skill_counter(9999, -1),
							]
						}
					}, {
						name: "ウラガーン",
						hp: 180000,
						imageno: 4066,
						attr: 0,
						spec: 11,
					}, {
						name: "ファングサーラ",
						hp: 35000,
						imageno: 4068,
						attr: 0,
						spec: 7,
						move: {
							on_popup: [
								skill_counter(9999, -1),
							]
						}
					},
				],
			}
		],
	},
];