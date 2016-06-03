{
	id: "grade14",
	name: "肆式(トーナメント14段)",
	category: "tornament",
	desc: "雷推奨のトーナメントです。1位入賞時4200pt。",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
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
		}, ],
	}, {
		appearance: [2],
		enemy: [{
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
				turn: 2,
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
				turn: 2,
				wait: 1,
			}
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "ターコイズサハギン",
			hp: 58000,
			imageno: 2544,
			attr: 1,
			spec: 5,
			move: {
				on_popup: [
					s_enemy_force_reservoir(),
				],
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
				on_popup: [
					s_enemy_force_reservoir(),
				],
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
		}, ],
	}, {
		appearance: [4],
		enemy: [{
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
		}, ],
	}, {
		appearance: [5],
		enemy: [{
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
		}, ],
	}, ],
}