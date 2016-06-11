{
	id: "grade13",
	name: "参式(トーナメント13段)",
	category: "tornament",
   category_jp: "通常トーナメント",
	desc: "水推奨のトーナメントです。1位入賞時3640pt。",
	aprnum: 5,
	overlap: false,
	data: [{
		// 火龍 / 火龍
		appearance: [1, 2],
		enemy: [{
			name: "アッガローグ",
			hp: 35000,
			imageno: 5228,
			attr: 0,
			spec: 0,
			move: {
				on_move: [
					s_enemy_attack(400, 3, 3)
				],
				atrandom: false,
				turn: 3,
				wait: 1,
			}
		}, {
			name: "アッガローグ",
			hp: 35000,
			imageno: 5228,
			attr: 0,
			spec: 0,
			move: {
				on_move: [
					s_enemy_attack(400, 3, 3)
				],
				atrandom: false,
				turn: 3,
				wait: 1,
			}
		}, ],
	}, {
		// 水龍 / 火龍
		appearance: [1, 2],
		enemy: [{
			name: "水甲ウォーターリザード",
			hp: 21000,
			imageno: 5254,
			attr: 1,
			spec: 0,
			move: {
				on_move: [
					s_enemy_attack(200, 1, 1)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			}
		}, {
			name: "アッガローグ",
			hp: 35000,
			imageno: 5228,
			attr: 0,
			spec: 0,
			move: {
				on_move: [
					s_enemy_attack(400, 3, 3)
				],
				atrandom: false,
				turn: 3,
				wait: 1,
			}
		}, ],
	}, {
		// 水魔族 / 雷魔族 / 火亜人
		appearance: [3],
		enemy: [{
			name: "ボーンソルジャー・フリーズ",
			hp: 24000,
			imageno: 5248,
			attr: 1,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(175, 1, 1)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			}
		}, {
			name: "ボーンソルジャー・チャード",
			hp: 16000,
			imageno: 5250,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(250, 1, 1)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			}
		}, {
			name: "アクトハウスバウンサー",
			hp: 100000,
			imageno: 5240,
			attr: 0,
			spec: 5,
			move: {
				on_popup: [
					attack_counter(2000, -1),
				],
				on_move: [
					s_enemy_attack(700, 1, 1)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			}
		}, ],
	}, {
		// 火魔法生物
		appearance: [4],
		enemy: [{
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
		}, ],
	}, {
		// (ボス)火魔法生物 / ティア
		appearance: [5],
		enemy: [{
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
					skill_counter(9999, -1),
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
		}, ],
	}, ],
}