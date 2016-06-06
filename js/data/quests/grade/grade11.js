{
	id: "grade11",
	name: "壱式(トーナメント11段)",
	category: "tornament",
   category_jp: "通常トーナメント",
	desc: "雷推奨のトーナメントです。1位入賞時2500pt。",
	aprnum: 5,
	overlap: false,
	data: [{
		appearance: [1, 2, 3, 4],
		enemy: [{
			name: "燐光の骨狼",
			hp: 18000,
			imageno: 2527,
			attr: 2,
			spec: 7,
		}, ],
	}, {
		appearance: [1, 2, 3, 4],
		enemy: [{
			name: "氷雨の骨狼",
			hp: 30000,
			imageno: 2525,
			attr: 1,
			spec: 7,
		}, ],
	}, {
		appearance: [1, 2, 3, 4],
		enemy: [{
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
		enemy: [{
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
		enemy: [{
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
		enemy: [{
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
		enemy: [{
			name: "プラズマファントム",
			hp: 20000,
			imageno: 2522,
			attr: 2,
			spec: 2,
			move: {
				on_popup: [
					attack_counter(9999, -1),
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
					s_enemy_heal_all(0.25),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, ],
	}, ],
}