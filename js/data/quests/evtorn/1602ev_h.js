{
	id: "1602ev_5",
	name: "(2016/02)イベントトーナメント 覇級",
	category: "past event",
	desc: "2016/02に開催された魔道杯:イベントトーナメントのチャレンジクエストです。",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "ハイパービターチューカリー",
			hp: 30000,
			imageno: 7405,
			attr: 4,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_chain_sealed()),
					s_enemy_attack(150, 5, 3, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "青春の苦味を知る とろ～りプリス",
			hp: 75000,
			imageno: 7411,
			attr: 4,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(75, 5, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}],
	}, {
		appearance: [2],
		enemy: [{
			name: "燃焼のとろ～りプリス",
			hp: 25000,
			imageno: 7411,
			attr: 0,
			spec: 4,
			move: {
				on_move: [
					m_enemy_once(s_enemy_attr_weaken([1, 0, 0, 0, 0], 1.5, 5, 2)),
					s_enemy_attack(225, 5, 3, true),
				],
				atrandom: false,
				wait: 2,
				turn: 1,
			},
		}, {
			name: "ハイパービターチューカリー",
			hp: 25000,
			imageno: 7405,
			attr: 4,
			spec: 2,
			move: {
				on_popup: [
					attack_counter_dual(500, 4),
				],
				on_move: [
					s_enemy_attack(150, 5, 1, true)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "青春の苦味を知る とろ～りプリス",
			hp: 65000,
			imageno: 7411,
			attr: 4,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(200, 5, 3, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}],
	}, {
		appearance: [3],
		enemy: [{
			name: "燃焼のとろ～りプリス",
			hp: 25000,
			imageno: 7411,
			attr: 0,
			spec: 4,
			move: {
				on_popup: [
					damage_block_own(15000, 3),
				],
				on_move: [
					s_enemy_attack(200, 5, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "燃焼のとろ～りプリス",
			hp: 45000,
			imageno: 7411,
			attr: 0,
			spec: 4,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_attack, "全体5連撃", -1, false, 600, 5, 5),
				],
				on_move: [
					s_enemy_attack(500, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "青春の苦味を知る とろ～りプリス",
			hp: 20000,
			imageno: 7411,
			attr: 4,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_poison(1000, 5, 3)),
					s_enemy_attack(250, 5, 1, true)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}],
	}, {
		appearance: [4],
		enemy: [{
			name: "ハイパービターチューカリー",
			hp: 40000,
			imageno: 7405,
			attr: 4,
			spec: 2,
			move: {
				on_popup: [
					s_enemy_force_reservoir(),
				],
				on_move: [
					m_enemy_once(s_enemy_attack(1500, 3, 1, true)),
					s_enemy_attack(750, 3, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "シャドウおじいさん",
			hp: 45000,
			imageno: 7417,
			attr: 4,
			spec: 2,
			move: {
				on_popup: [
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(100, 5, 1, true)
				],
				on_angry: [
					s_enemy_attack_deadgrudge(0, 650, 1300, true),
				],
				on_move_angry: [
					s_enemy_attack(100, 5, 3, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "燃焼のとろ～りプリス",
			hp: 50000,
			imageno: 7411,
			attr: 0,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(200, 5, 3, true)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}],
	}, {
		appearance: [5],
		enemy: [{
			name: "シャドウおじいさん",
			hp: 50000,
			imageno: 7417,
			attr: 4,
			spec: 4,
			move: {
				on_move: [
					m_enemy_once(s_enemy_attr_weaken([1, 1, 1, 1, 1], 1.5, 5, 2)),
					s_enemy_attack(150, 5, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, {
			name: "お菓子は全部おれのもの デザートン",
			hp: 200000,
			imageno: 7381,
			attr: 4,
			spec: 4,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_deathlimit, "死の秒針", -1, false, 5, 3),
					damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true),
				],
				on_move: [
					m_enemy_once(s_enemy_attack(550, 5, 1, true)),
					s_enemy_attack(350, 5, 1, true),
				],
				on_angry: [
					damage_block_own(8000, 3),
				],
				on_move_angry: [
					m_enemy_once(s_enemy_cursed(1000, 5, 3)),
					s_enemy_attack(110, 5, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "シャドウおじいさん",
			hp: 50000,
			imageno: 7417,
			attr: 4,
			spec: 4,
			move: {
				on_move: [
					m_enemy_once(s_enemy_discharge(5, 2)),
					s_enemy_attack(200, 5, 3, true)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}],
	}],
}