// -------------------------
// クエストデータ
// -------------------------
Quests = [
	// -------------------------
	// トーナメント: 弐式
	// -------------------------
	{
		id: "grade12",
		name: "賢王【瞬】弐式(トーナメント十二段)",
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
					},
					{
						name: "火タービン",
						hp: 13200,
						imageno: -1,
						attr: 0,
						spec: 6,
					},
				],
			},
			{
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
					},
					{
						name: "火カーバンクル",
						hp: 13200,
						imageno: -1,
						attr: 0,
						spec: 4,
					},
				],
			},
			{
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
					},
					{
						name: "水タービン",
						hp: 6600,
						imageno: -1,
						attr: 1,
						spec: 6,
					},
				],
			},
			{
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
					},
					{
						name: "雷カーバンクル",
						hp: 19800,
						imageno: -1,
						attr: 2,
						spec: 4,
					},
				],
			},
			{
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
					},
					{
						name: "火タービン",
						hp: 13200,
						imageno: -1,
						attr: 0,
						spec: 6,
					},
				],
			},
			{
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
					},
					{
						name: "水牛",
						imageno: -1,
						hp: 6600,
						attr: 1,
						spec: 7,
					},
				],
			},
			{
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
					},
					{
						name: "オルネ",
						imageno: 4091,
						hp: 120000,
						attr: 2,
						spec: 9,
					},
					{
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