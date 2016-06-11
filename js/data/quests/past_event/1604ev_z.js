{
	id: "1604ev_z",
	name: "(2016/04)イベントトーナメント 邪眼級",
	category: "past_event",
   category_jp: "過去のイベトナメ",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "雷:戦士",
			hp: 20000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_move: [
					s_enemy_attack(800, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "雷:戦士",
			hp: 35000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_move: [
					s_enemy_attack(650, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "雷:戦士",
			hp: 20000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_move: [
					m_enemy_once(s_enemy_healreverse(0.25, 5)),
					s_enemy_attack(800, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "雷:戦士",
			hp: 30000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_move: [
					s_enemy_attack(1000, 5, 1, true),
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
			hp: 20000,
			imageno: 7920,
			attr: 0,
			spec: 8,
			move: {
				on_popup: [
					s_enemy_healreverse(0.25, 5),
				],
				on_move: [
					s_enemy_attack(1000 / 1.5, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "雷:戦士",
			hp: 40000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_move: [
					s_enemy_attack(300, 3, 4, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, {
			name: "雷:戦士",
			hp: 30000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_healreverse, "回復反転(50%)", -1, false, 0.5, 5),
				],
				on_move: [
					s_enemy_attack(1000, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "雷:戦士",
			hp: 40000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_popup: [
					s_enemy_attrguard_own([1, 0, 0, 0, 0], 0.5, 3),
					s_enemy_division(0.5),
				],
				on_move: [
					m_enemy_once(s_enemy_attr_weaken([1, 1, 1, 0, 0], 1.25, 5, 4)),
					s_enemy_attack(300, 3, 4, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "雷:戦士",
			hp: 50000,
			imageno: 7920,
			attr: 2,
			spec: 8,
			move: {
				on_popup: [
					s_enemy_poison(1000, 5, 1),
				],
				on_move: [
					s_enemy_attack(300, 3, 3, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "雷:戦士",
			hp: 40000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_move: [
					s_enemy_attack(300, 3, 4, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [5],
		enemy: [{
			name: "水:戦士",
			hp: 35000,
			imageno: 7913,
			attr: 1,
			spec: 8,
			move: {
				on_move: [
					m_enemy_once(s_enemy_attack_attrsp(2000, 1000 / 3, 1, 5, 1, false)),
					s_enemy_attack(1000 / 3, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "雷:戦士",
			hp: 130000,
			imageno: 7907,
			attr: 2,
			spec: 8,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_as_sealed, "全体AS封印(6T)", -1, false, 5, 6),
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(500, 3, 4, true),
				],
				on_angry: [
					s_enemy_healreverse(0.5, 5),
				],
				on_move_angry: [
					s_enemy_attack(400, 5, 4, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "雷:戦士",
			hp: 90000,
			imageno: 7924,
			attr: 2,
			spec: 8,
			move: {
				on_popup: [
					s_enemy_attack_ratio(0.3, 5, false),
				],
				on_move: [
					m_enemy_once(s_enemy_heal_all(0.25)),
					s_enemy_attack(300, 3, 4, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, ],
	}, ],
}