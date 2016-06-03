{
	id: "1605ev_h",
	name: "(2016/05)イベントトーナメント 覇級",
	category: "past event",
	overlap: false,
	aprnum: 5,
	panel_effect: [panel_chainplus(4)],
	data: [{
		appearance: [1],
		enemy: [{
			name: "魔界乙女の熱情のしずく",
			hp: 30000,
			imageno: 8053,
			attr: 0,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(110, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, {
			name: "痺れる月に吠える魔狼少女",
			hp: 50000,
			imageno: 8067,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(250, 3, 3, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "稲妻の魔狼少女",
			hp: 15000,
			imageno: 8066,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(220, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "魔界乙女のデンゲキのしずく",
			hp: 175000,
			imageno: 8057,
			attr: 2,
			spec: 2,
			move: {
				on_popup: [
					skill_counter(11000, -1),
				],
				on_move: [
					m_enemy_once(s_enemy_chain_break()),
					s_enemy_attack(250, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "魔界乙女のデンゲキのしずく",
			hp: 180000,
			imageno: 8057,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_chain_sealed(3)),
					s_enemy_attack(250, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "魔界乙女の熱情のしずく",
			hp: 13500,
			imageno: 8053,
			attr: 0,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(100, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "魔界乙女の熱情のしずく",
			hp: 22000,
			imageno: 8053,
			attr: 0,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(100, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "痺れる月に吠える魔狼少女",
			hp: 115000,
			imageno: 8067,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_as_sealed(5, 3)),
					s_enemy_attack(250, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "稲妻の魔狼少女",
			hp: 63000,
			imageno: 8066,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					s_enemy_attack(400, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "しびれるデーモンゼリー",
			hp: 100000,
			imageno: 8056,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_chain_break()),
					s_enemy_attack(250, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "魔界乙女のデンゲキのしずく",
			hp: 170000,
			imageno: 8057,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_chain_sealed(3)),
					s_enemy_attack(250, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "魔界乙女の熱情のしずく",
			hp: 30000,
			imageno: 8053,
			attr: 0,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_ss_sealed(5, 3)),
					s_enemy_attack(150, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, ],
	}, {
		appearance: [5],
		enemy: [{
			name: "痺れる月に吠える魔狼少女",
			hp: 150000,
			imageno: 8067,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_all_sealed(5, 2)),
					s_enemy_attack(150, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "たゆたいの幽姫 コレル・シュケル",
			hp: 190000,
			imageno: 8048,
			attr: 2,
			spec: 2,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_all_sealed, "全体封印(11T)", -1, false, 5, 11),
					damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
				],
				on_move: [
					s_enemy_attack(150, 3, 3, true),
				],
				on_angry: [
					attack_counter_dual(1000, 5)
				],
				on_move_angry: [
					m_enemy_once(s_enemy_attrguard_own([1, 0, 0, 0, 0], 0.5, 10)),
					s_enemy_attack(150, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "魔界乙女のデンゲキのしずく",
			hp: 130000,
			imageno: 8057,
			attr: 2,
			spec: 2,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_cursed, "のろい(-5000)", -1, false, 5000, 5, 10),
				],
				on_move: [
					s_enemy_attack(150, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, ],
}