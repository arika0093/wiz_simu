{
	id: "1604ev_h",
	name: "(2016/04)イベントトーナメント 覇級",
	category: "past event",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "火:戦士",
			hp: 20000,
			imageno: 7911,
			attr: 0,
			spec: 8,
			move: {
				on_move: [
					s_enemy_attack(300, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, {
			name: "火:戦士",
			hp: 20000,
			imageno: 7912,
			attr: 0,
			spec: 8,
			move: {
				on_move: [
					s_enemy_chain_sealed(5),
					s_enemy_attack(1100, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "火:戦士",
			hp: 20000,
			imageno: 7911,
			attr: 0,
			spec: 8,
			move: {
				on_move: [
					s_enemy_attack(300, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "火:戦士",
			hp: 30000,
			imageno: 7912,
			attr: 0,
			spec: 8,
			move: {
				on_move: [
					s_enemy_chain_sealed(5),
					s_enemy_attack(1100, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "火:戦士",
			hp: 50000,
			imageno: 7920,
			attr: 0,
			spec: 8,
			move: {
				on_move: [
					s_enemy_attack(300, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "火:戦士",
			hp: 40000,
			imageno: 7919,
			attr: 0,
			spec: 8,
			move: {
				on_popup: [
					s_enemy_deathlimit(5, 4),
				],
				on_move: [
					s_enemy_attack(1100, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "雷:戦士",
			hp: 25000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_popup: [
					skill_counter_func(damage_block_own, "ダメブロ単体(15000)", -1, false, 15000, 4),
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(1100 / 3, 1, 2, true),
				],
				on_angry: [
					s_enemy_discharge(5, 2),
				],
				on_move_angry: [
					s_enemy_attack(1000 / 3, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "火:戦士(鉄壁)",
			hp: 15,
			imageno: 7919,
			attr: 0,
			spec: 8,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(1200, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "水:戦士",
			hp: 30000,
			imageno: 7921,
			attr: 1,
			spec: 8,
			move: {
				on_move: [
					m_enemy_once(attack_counter_dual(700, 3)),
					s_enemy_attack(1000 / 1.5, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "火:戦士",
			hp: 100000,
			imageno: 7920,
			attr: 0,
			spec: 8,
			move: {
				on_popup: [
					s_enemy_ss_sealed(5, 1),
				],
				on_move: [
					//null, // パネルシャッフル
					s_enemy_attack(250, 3, 5, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "火:戦士",
			hp: 40000,
			imageno: 7919,
			attr: 0,
			spec: 8,
			move: {
				on_popup: [
					skill_counter_func(attack_counter_dual, "多段式カウンター(900)", -1, false, 900, 6),
				],
				on_move: [
					s_enemy_attack(300, 3, 5, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [5],
		enemy: [{
			name: "水:戦士(鉄壁)",
			hp: 15,
			imageno: 7922,
			attr: 1,
			spec: 8,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_chain_break(),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "火:戦士",
			hp: 220000,
			imageno: 7910,
			attr: 0,
			subattr: 1,
			spec: 8,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_ss_sealed, "全体SP封印(3T)", -1, false, 5, 3),
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(400, 5, 5, true),
				],
				on_angry: [
					s_enemy_chain_sealed(6),
				],
				on_move_angry: [
					m_enemy_once(s_enemy_attr_weaken([1, 1, 1, 1, 1], 1.5, 5, 2)),
					s_enemy_attack(400 / 1.5, 5, 5, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "火:戦士",
			hp: 100000,
			imageno: 7919,
			attr: 0,
			spec: 8,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_discharge, "スキルディスチャージ(2T)", -1, false, 5, 2),
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(300, 3, 5, true),
				],
				on_angry: [
					attack_counter_dual(500, 3),
				],
				on_move_angry: [
					s_enemy_attack(300, 3, 5, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, ],
	}, ],
}