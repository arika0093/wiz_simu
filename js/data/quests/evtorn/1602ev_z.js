{
	id: "1602ev_4",
	name: "(2016/02)イベントトーナメント 絶級",
	category: "past_event",
   category_jp: "過去のイベトナメ",
	desc: "2016/02に開催された魔道杯:イベントトーナメントのHard:クイズ対決！です。",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "青いとろ～りプリス",
			hp: 30000,
			imageno: 7412,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					m_enemy_once(s_enemy_attack(900, 1, 1, m_enemy_tgtype_minhp())),
					s_enemy_attack(300, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "青いとろ～りプリス",
			hp: 24,
			imageno: 7412,
			attr: 1,
			spec: 4,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(225, 5, 1, true)
				],
				atrandom: false,
				turn: 3,
				wait: 1,
			},
		}],
	}, {
		appearance: [2],
		enemy: [{
			name: "碧空のとろ～りプリス",
			hp: 30000,
			imageno: 7413,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(225, 1, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "碧空のとろ～りプリス",
			hp: 13,
			imageno: 7413,
			attr: 1,
			spec: 4,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(300, 5, 1, true)
				],
				atrandom: false,
				turn: 3,
				wait: 1,
			},
		}, {
			name: "イエローチューカリー",
			hp: 20000,
			imageno: 7408,
			attr: 2,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(300, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}],
	}, {
		appearance: [3],
		enemy: [{
			name: "碧空のとろ～りプリス",
			hp: 30000,
			imageno: 7413,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(500, 3, 1, true),
					s_enemy_chain_break(),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "碧空のとろ～りプリス",
			hp: 60000,
			imageno: 7413,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					s_enemy_force_reservoir(),
					s_enemy_attack(600, 5, 1, true),
					s_enemy_attack(300, 1, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "碧空のとろ～りプリス",
			hp: 30000,
			imageno: 7413,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(300, 1, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}],
	}, {
		appearance: [4],
		enemy: [{
			name: "碧空のとろ～りプリス",
			hp: 30000,
			imageno: 7413,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(500, 3, 1, true),
					s_enemy_chain_break(),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "碧空のとろ～りプリス",
			hp: 60000,
			imageno: 7413,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					s_enemy_force_reservoir(),
					s_enemy_attack(600, 5, 1, true),
					s_enemy_attack(300, 1, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "碧空のとろ～りプリス",
			hp: 30000,
			imageno: 7413,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(300, 1, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}],
	}, {
		appearance: [5],
		enemy: [{
			name: "青いとろ～りプリス",
			hp: 40000,
			imageno: 7412,
			attr: 1,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(250, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "知性は巡る どこまでも ハカセ",
			hp: 280000,
			imageno: 7397,
			attr: 1,
			spec: 4,
			move: {
				on_popup: [
					damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true),
				],
				on_move: [
					m_enemy_once(skill_counter(9999, 11)),
					s_enemy_attack(100, 3, 5, true),
					s_enemy_attack(500, 3, 1, true),
				],
				on_move_angry: [
					m_enemy_once(s_enemy_ss_sealed(3, 4)),
					s_enemy_attack(250, 5, 5, true),
					s_enemy_attack(1200, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "青いとろ～りプリス",
			hp: 30000,
			imageno: 7412,
			attr: 1,
			spec: 4,
			move: {
				on_popup: [
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(500, 5, 1, true),
					m_enemy_once(attack_counter(800, -1)),
				],
				on_move_angry: [
					s_enemy_attack(750, 5, 1, true),
					s_enemy_heal_all(0.1),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}],
	}],
}