{
	id: "1603ev_h",
	name: "(2016/03)イベントトーナメント 覇級",
	category: "past_event",
   category_jp: "過去のイベトナメ",
	desc: "2016/03に開催された魔道杯のイベントトーナメント覇級です。",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "花咲ける森の王 ビッグカリフー",
			hp: 15000,
			imageno: 7831,
			attr: 3,
			spec: 5,
			move: {
				on_move: [
					m_enemy_once(s_enemy_chain_sealed(3)),
					s_enemy_attack(500, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "花咲ける森の王 ビッグカリフー",
			hp: 30000,
			imageno: 7831,
			attr: 3,
			spec: 5,
			move: {
				on_move: [
					s_enemy_attack(200, 5, 3, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "肥えた大地の魔草 プラティー",
			hp: 25000,
			imageno: 7183,
			attr: 2,
			spec: 7,
			move: {
				on_move: [
					m_enemy_once(s_enemy_attrguard_all([1, 1, 1, 0, 0], 0.5, 4)),
					s_enemy_attack(300, 5, 3, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "花咲ける森の王 ビッグカリフー",
			hp: 25000,
			imageno: 7831,
			attr: 3,
			spec: 5,
			move: {
				on_popup: [
					attack_counter_dual(500, 4)
				],
				on_move: [
					s_enemy_attack(300, 5, 3, true)
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "肥えた大地の魔草 プラティー",
			hp: 10,
			imageno: 7183,
			attr: 2,
			spec: 7,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(300, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			}
		}, {
			name: "花咲ける森の王 ビッグカリフー",
			hp: 25000,
			imageno: 7831,
			attr: 3,
			spec: 5,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_attack, "全体400の5連撃", -1, false, 200, 5, 5),
				],
				on_move: [
					s_enemy_attack(500, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			}
		}, {
			name: "肥えた大地の魔草 プラティー",
			hp: 10,
			imageno: 7183,
			attr: 2,
			spec: 7,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(300, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			}
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "肥えた大地の魔草 プラティー",
			hp: 60000,
			imageno: 7183,
			attr: 2,
			spec: 7,
			move: {
				on_popup: [
					s_enemy_force_reservoir(),
				],
				on_move: [
					m_enemy_once(s_enemy_attack(3000, 5, 1, true)),
					s_enemy_attack(1500, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "遭遇する伝説のスノウフッド",
			hp: 120000,
			imageno: 7190,
			attr: 2,
			spec: 5,
			move: {
				on_popup: [
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(300, 5, 3, true),
					s_enemy_attack(600, 5, 1, true),
				],
				on_angry: [
					attr_change(3),
				],
				on_move_angry: [
					s_enemy_attack(400, 5, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "肥えた大地の魔草 プラティー",
			hp: 60000,
			imageno: 7183,
			attr: 2,
			spec: 7,
			move: {
				on_move: [
					s_enemy_force_reservoir(),
					s_enemy_attack(3000, 5, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, ],
	}, {
		appearance: [5],
		enemy: [{
			name: "肥えた大地の魔草 プラティー",
			hp: 15,
			imageno: 7183,
			attr: 2,
			spec: 7,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(300, 1, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "遭遇する伝説のスノウフッド",
			hp: 150000,
			imageno: 7830,
			attr: 3,
			spec: 5,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_deathlimit, "死の秒針(3T)", -1, false, 5, 3),
					damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(350, 5, 3, true),
				],
				on_angry: [
					s_enemy_attack_ratio(0.9, 5, false),
				],
				on_move_angry: [
					s_enemy_attack(350, 5, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "花咲ける森の王 ビッグカリフー",
			hp: 30000,
			imageno: 7831,
			attr: 3,
			spec: 5,
			move: {
				on_move: [
					m_enemy_once(s_enemy_healreverse(0.5, 2)),
					s_enemy_attack(200, 5, 3, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, ],
	}, ],
}