// -------------------------
// クエストデータ
// -------------------------
Quests = [
	// -------------------------
	// test
	// -------------------------
	{
		id: "test",
		name: "テスト用クエスト",
		category: "test",
		desc: "1戦しかありません。",
		aprnum: 1,
		data: [
			{
				appearance: [1],
				overlap: false,
				enemy: [
					{
						name: "火ハーピィ",
						hp: 19800,
						imageno: 1,
						attr: 0,
						spec: 5,
						on_popup: [
							attack_counter(10000, 1),
						],
					}, {
						name: "水ハーピィ",
						hp: 10,
						imageno: 3,
						attr: 1,
						spec: 5,
						on_popup: [
							impregnable(99),
						],
					},
				],
			},
		],
	},

	// -------------------------
	// トーナメント: 参式
	// -------------------------
	{
		id: "grade14",
		name: "賢王【朧】肆式(トーナメント14段)",
		category: "tornament",
		desc: "雷推奨のトーナメントです。1位入賞時4232pt。",
		aprnum: 5,
		data: [
			{
				appearance: [1],
				overlap: false,
				enemy: [
					{
						name: "水魔族",
						hp: 21000,
						imageno: -1,
						attr: 1,
						spec: 2,
					}, {
						name: "水亜人",
						hp: 9500,
						imageno: -1,
						attr: 1,
						spec: 5,
					}, {
						name: "水亜人",
						hp: 9500,
						imageno: -1,
						attr: 1,
						spec: 5,
					},
				],
			}, {
				appearance: [2],
				overlap: false,
				enemy: [
					{
						name: "水龍族",
						hp: 75000,
						imageno: -1,
						attr: 1,
						spec: 0,
					}, {
						name: "水魔法生物",
						hp: 15,
						imageno: -1,
						attr: 1,
						spec: 7,
						on_popup: [
							impregnable(99),
						]
					}, {
						name: "水亜人",
						hp: 36300,
						imageno: -1,
						attr: 1,
						spec: 5,
					},
				],
			}, {
				appearance: [3],
				overlap: false,
				enemy: [
					{
						name: "水亜人",
						hp: 58000,
						imageno: -1,
						attr: 1,
						spec: 5,
					}, {
						name: "水亜人",
						hp: 29000,
						imageno: -1,
						attr: 1,
						spec: 5,
					}, {
						name: "水魔法生物",
						hp: 36300,
						imageno: -1,
						attr: 1,
						spec: 5,
						on_popup: [
							damage_block_own(30000, 99),
						]
					},
				],
			}, {
				appearance: [4],
				overlap: false,
				enemy: [
					{
						name: "水亜人",
						hp: 10000,
						imageno: -1,
						attr: 1,
						spec: 5,
					}, {
						name: "水物質",
						hp: 63000,
						imageno: -1,
						attr: 1,
						spec: 6,
					}, {
						name: "水亜人",
						hp: 36300,
						imageno: -1,
						attr: 1,
						spec: 5,
					},
				],
			}, {
				appearance: [5],
				overlap: false,
				enemy: [
					{
						name: "ロレッタ",
						hp: 100000,
						imageno: -1,
						attr: 1,
						spec: 9,
					}, {
						name: "ルシェ",
						hp: 600000,
						imageno: -1,
						attr: 1,
						spec: 0,
					}, {
						name: "ベルナデッタ",
						hp: 100000,
						imageno: -1,
						attr: 1,
						spec: 9,
					},
				],
			},
		],
	},

	// -------------------------
	// トーナメント: 参式
	// -------------------------
	{
		id: "grade13",
		name: "賢王【煉】参式(トーナメント13段)",
		category: "tornament",
		desc: "水推奨のトーナメントです。1位入賞時3640pt。",
		aprnum: 5,
		data: [
			{
				// 火龍 / 火龍
				appearance: [1, 2],
				overlap: false,
				enemy: [
					{
						name: "火龍",
						hp: 35000,
						imageno: -1,
						attr: 0,
						spec: 0,
					}, {
						name: "火龍",
						hp: 35000,
						imageno: -1,
						attr: 0,
						spec: 0,
					},
				],
			}, {
				// 水龍 / 火龍
				appearance: [1, 2],
				overlap: false,
				enemy: [
					{
						name: "水龍",
						hp: 21000,
						imageno: -1,
						attr: 1,
						spec: 0,
					}, {
						name: "火龍",
						hp: 35000,
						imageno: -1,
						attr: 0,
						spec: 0,
					},
				],
			}, {
				// 水魔族 / 雷魔族 / 火亜人
				appearance: [3],
				overlap: false,
				enemy: [
					{
						name: "水魔族",
						hp: 24000,
						imageno: -1,
						attr: 1,
						spec: 2,
					}, {
						name: "雷魔族",
						hp: 16000,
						imageno: -1,
						attr: 2,
						spec: 2,
					}, {
						name: "火亜人",
						hp: 100000,
						imageno: -1,
						attr: 0,
						spec: 5,
						on_popup: [
							attack_counter(2000, 99),
						]
					},
				],
			}, {
				// 火魔法生物
				appearance: [4],
				overlap: false,
				enemy: [
					{
						name: "火魔法生物",
						hp: 25,
						imageno: -1,
						attr: 0,
						spec: 7,
						on_popup: [
							impregnable(99),
						]
					},
				],
			}, {
				// (ボス)火魔法生物 / ティア
				appearance: [5],
				overlap: false,
				enemy: [
					{
						name: "火魔法生物",
						hp: 100000,
						imageno: -1,
						attr: 0,
						spec: 7,
						on_popup: [
							damage_block_own(9000, 99),
						]
					}, {
						name: "ティア",
						imageno: -1,
						hp: 360000,
						attr: 0,
						spec: 9,
						on_popup: [
							skill_counter(999999, 99),
							damage_switch(when_hpdown(0.5), attr_change(1)),
						]
					},
				],
			},
		],
	},

	// -------------------------
	// トーナメント: 弐式
	// -------------------------
	{
		id: "grade12",
		name: "賢王【瞬】弐式(トーナメント12段)",
		category: "tornament",
		desc: "火推奨のトーナメントです。1位入賞時2600pt。入賞確実: 5-6t / タイム勝負: 7t-",
		aprnum: 5,
		data: [
			{
				// 雷牛 / 火タービン
				appearance: [1, 2, 3, 4],
				overlap: false,
				enemy: [
					{
						name: "雷牛",
						hp: 19800,
						imageno: -1,
						attr: 2,
						spec: 7,
					}, {
						name: "火タービン",
						hp: 13200,
						imageno: -1,
						attr: 0,
						spec: 6,
					},
				],
			}, {
				// 雷タービン / 火カーバンクル
				appearance: [1, 2, 3, 4],
				overlap: false,
				enemy: [
					{
						name: "雷タービン",
						hp: 19800,
						imageno: -1,
						attr: 2,
						spec: 6,
					}, {
						name: "火カーバンクル",
						hp: 13200,
						imageno: -1,
						attr: 0,
						spec: 4,
					},
				],
			}, {
				// 雷カーバンクル / 水タービン
				appearance: [1, 2, 3, 4],
				overlap: false,
				enemy: [
					{
						name: "雷カーバンクル",
						hp: 19800,
						imageno: -1,
						attr: 2,
						spec: 4,
					}, {
						name: "水タービン",
						hp: 6600,
						imageno: -1,
						attr: 1,
						spec: 6,
					},
				],
			}, {
				// 雷タービン / 雷カーバンクル
				appearance: [1, 2, 3, 4],
				overlap: false,
				enemy: [
					{
						name: "雷タービン",
						hp: 19800,
						imageno: -1,
						attr: 2,
						spec: 6,
					}, {
						name: "雷カーバンクル",
						hp: 19800,
						imageno: -1,
						attr: 2,
						spec: 4,
					},
				],
			}, {
				// 火タービン / 火タービン
				appearance: [1, 2, 3, 4],
				overlap: false,
				enemy: [
					{
						name: "火タービン",
						hp: 13200,
						imageno: -1,
						attr: 0,
						spec: 6,
					}, {
						name: "火タービン",
						hp: 13200,
						imageno: -1,
						attr: 0,
						spec: 6,
					},
				],
			}, {
				// 雷牛 / 水牛
				appearance: [1, 2, 3, 4],
				overlap: false,
				enemy: [
					{
						name: "雷牛",
						hp: 19800,
						imageno: -1,
						attr: 2,
						spec: 7,
					}, {
						name: "水牛",
						imageno: -1,
						hp: 6600,
						attr: 1,
						spec: 7,
					},
				],
			}, {
				// (ボス)火タービン / オルネ / 水カーバンクル
				appearance: [5],
				overlap: false,
				enemy: [
					{
						name: "火タービン",
						imageno: -1,
						hp: 35000,
						attr: 0,
						spec: 6,
						on_popup: [
							skill_counter(9999, 99),
						],
					}, {
						name: "オルネ",
						imageno: 4091,
						hp: 120000,
						attr: 2,
						spec: 9,
					}, {
						name: "水カーバンクル",
						imageno: -1,
						hp: 25000,
						attr: 1,
						spec: 7,
					},
				],
			},
		],
	},
];