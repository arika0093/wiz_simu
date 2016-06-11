{
	id: "grade12",
	name: "弐式(トーナメント12段)",
	category: "tornament",
   category_jp: "通常トーナメント",
	desc: "火推奨のトーナメントです。1位入賞時2600pt。入賞確実: 5-6t / タイム勝負: 7t-",
	aprnum: 5,
	overlap: false,
	data: [{
		// 雷牛 / 火タービン
		appearance: [1, 2, 3, 4],
		enemy: [{
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
		}, ],
	}, {
		// 雷タービン / 火カーバンクル
		appearance: [1, 2, 3, 4],
		enemy: [{
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
		}, ],
	}, {
		// 雷カーバンクル / 水タービン
		appearance: [1, 2, 3, 4],
		enemy: [{
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
		}, ],
	}, {
		// 雷タービン / 雷カーバンクル
		appearance: [1, 2, 3, 4],
		enemy: [{
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
		}, ],
	}, {
		// 火タービン / 火タービン
		appearance: [1, 2, 3, 4],
		enemy: [{
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
		}, ],
	}, {
		// 雷牛 / 水牛
		appearance: [1, 2, 3, 4],
		enemy: [{
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
		}, ],
	}, {
		// (ボス)火タービン / オルネ / 水カーバンクル
		appearance: [5],
		enemy: [{
			name: "焔嵐タービネックス",
			imageno: 3723,
			hp: 35000,
			attr: 0,
			spec: 6,
			move: {
				on_popup: [
					skill_counter(9999, -1),
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
		}, ],
	}, ],
}