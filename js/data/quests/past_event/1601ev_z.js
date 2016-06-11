{
	id: "1601ev_z",
	name: "(2016/01)イベントトーナメント 絶級",
	category: "past_event",
   category_jp: "過去のイベトナメ",
	desc: "2016/01に開催された魔道杯のイベントトーナメント絶級です。",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "朝日の妖精",
			hp: 25000,
			imageno: 7304,
			attr: 0,
			spec: 4,
			move: {
				on_move: [
					m_enemy_once(s_enemy_chain_sealed(5)),
					s_enemy_attack(1200, 1, 1, false),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "朝日の妖精",
			hp: 25000,
			imageno: 7304,
			attr: 0,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(1000, 5, 1, false),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "翡翠のドライアド",
			hp: 25000,
			imageno: 413,
			attr: 1,
			spec: 7,
			move: {
				on_popup: [
					s_enemy_division(),
				],
				on_move: [
					m_enemy_once(s_enemy_attack_attrsp(2400, 600, 1, 1, 1, false)),
					s_enemy_attack(600, 1, 1, false),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, {
			name: "暁のフェアリー",
			hp: 30000,
			imageno: 7305,
			attr: 0,
			spec: 4,
			move: {
				on_popup: [
					damage_block_own(6000, 5),
				],
				on_move: [
					s_enemy_attack(350, 3, 5, false),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "朝日の妖精",
			hp: 35000,
			imageno: 7304,
			attr: 0,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(800, 5, 1, false),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "暁のフェアリー",
			hp: 20,
			imageno: 7305,
			attr: 0,
			spec: 4,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(800, 5, 1, false),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "緋色のドライアド",
			hp: 40000,
			imageno: 410,
			attr: 0,
			spec: 7,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_as_sealed, "AS封印", -1, false, 5, 6),
					s_enemy_division(),
				],
				on_move: [
					s_enemy_attack(350, 3, 5, false),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "緋色のドライアド",
			hp: 40000,
			imageno: 410,
			attr: 0,
			spec: 7,
			move: {
				on_popup: [
					s_enemy_division(),
				],
				on_move: [
					m_enemy_once(s_enemy_as_sealed(3, 3)),
					s_enemy_attack(1200, 1, 1, false),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "朝日の妖精",
			hp: 25000,
			imageno: 7304,
			attr: 0,
			spec: 4,
			move: {
				on_move: [
					m_enemy_once(s_enemy_chain_sealed(5)),
					s_enemy_attack(1200, 1, 1, false),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "朝日の妖精",
			hp: 25000,
			imageno: 7304,
			attr: 0,
			spec: 4,
			move: {
				on_move: [
					s_enemy_attack(1000, 5, 1, false),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [5],
		enemy: [{
			name: "湖畔のフェアリー",
			hp: 30000,
			imageno: 7307,
			attr: 1,
			spec: 4,
			move: {
				on_popup: [
					s_enemy_cursed(400, 5, 3),
				],
				on_move: [
					s_enemy_attack_attrsp(3000, 750, 1, 1, 1, false),
					s_enemy_attack(750, 1, 1, false),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "非業背負いし宿星 エリーク・ハネス",
			hp: 120000,
			imageno: 7300,
			attr: 0,
			spec: 8,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_cursed, "呪い", -1, false, 2000, 5, 6),
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(300, 5, 5, false),
				],
				on_angry: [
					damage_block_own(10000, -1),
				],
				on_move_angry: [
					s_enemy_attr_weaken([1, 0, 0, 0, 0], 1.5, 5, 3),
					s_enemy_attack(300, 5, 5, false),
					s_enemy_attack(300, 5, 5, false),
					s_enemy_attack(300, 5, 5, false),
					s_enemy_attack(300, 5, 5, false),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "暁のフェアリー",
			hp: 50000,
			imageno: 7305,
			attr: 0,
			spec: 4,
			move: {
				on_move: [
					s_enemy_force_reservoir(),
					s_enemy_attack(3000, 5, 1, false),
					s_enemy_attack(1000, 5, 1, false),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, ],
}