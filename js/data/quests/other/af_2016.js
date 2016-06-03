{
	id: "af_2016",
	name: "仮想陸式(エイプリルフール)",
	category: "other",
	desc: "2016年度も頑張りましょう",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "花咲ける森の王 ビッグカリフー",
			hp: 20000,
			imageno: 7168,
			attr: 0,
			spec: 6,
			move: {
				on_popup: [
					s_enemy_division(),
				],
				on_move: [
					s_enemy_attack(100, 3, 3, true),
					s_enemy_chain_sealed(5),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "紅鏡サーチャー",
			hp: 25000,
			imageno: 3728,
			attr: 0,
			spec: 5,
			move: {
				on_popup: [
					damage_block_own(20000, 2),
					s_enemy_division(),
				],
				on_move: [
					s_enemy_attack(300, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "レナ(雷)",
			hp: 15000,
			imageno: 6370,
			attr: 2,
			spec: 9,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_ss_sealed, "SP封印", -1, false, 5, 6),
				],
				on_move: [
					s_enemy_force_reservoir(),
					s_enemy_attack(5000 / 3, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "レナ(火)",
			hp: 25,
			imageno: 5415,
			attr: 0,
			spec: 9,
			move: {
				on_popup: [
					impregnable(-1),
					s_enemy_division(),
				],
				on_move: [
					m_enemy_once(attack_counter_dual(700, 5)),
					s_enemy_attack(1000, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			}
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "エリス",
			hp: 90000,
			imageno: 6373,
			attr: 1,
			spec: 9,
			move: {
				on_popup: [
					s_enemy_chain_break(),
					skill_counter_func(s_enemy_chain_break, "チェイン解除", -1, false),
					damage_switch(s_enemy_when_hpdown(0.8), m_enemy_angry()),
				],
				on_move: [
					m_enemy_once(s_enemy_as_sealed(5, 7)),
					m_enemy_once(s_enemy_poison(1000, 5, 4)),
					s_enemy_attack(2000 / 2, 5, 1, true),
				],
				on_angry: [
					s_enemy_cursed(2500, 5, 3)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			}
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "リルム",
			hp: 100000,
			imageno: 6167,
			attr: 0,
			spec: 9,
			move: {
				on_move: [
					s_enemy_chain_break(),
					s_enemy_attack(1000, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "エターナル・ロア",
			hp: 160000,
			imageno: 6377,
			attr: 0,
			spec: 9,
			move: {
				on_popup: [
					attack_counter_dual(700, 3),
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(300, 3, 3, true),
				],
				on_angry: [
					attr_change(4)
				],
				on_move_angry: [
					s_enemy_attack(800, 3, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "ソフィ",
			hp: 50000,
			imageno: 6367,
			attr: 2,
			spec: 9,
			move: {
				on_popup: [
					damage_switch(s_enemy_when_dead(0), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(500 / 2.25, 1, 1, true),
				],
				on_angry: [
					skill_counter_func(s_enemy_attack, "全体6連撃", -1, false, 800 / 2.25, 5, 6),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [5],
		enemy: [{
			name: "アリエッタ(雷)",
			hp: 40000,
			imageno: 7576,
			attr: 2,
			spec: 9,
			move: {
				on_popup: [
					attack_counter_dual(700, 4),
				],
				on_move: [
					s_enemy_attack(300 / 2.25, 3, 5, true),
					s_enemy_chain_break(),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "アリエッタ(火)",
			hp: 600000,
			imageno: 6361,
			attr: 0,
			spec: 9,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_healreverse, "回復反転(50%)", -1, false, 0.5, 5),
					damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true),
				],
				on_move: [
					m_enemy_once(s_enemy_attack_ratio(0.9, 5, false)),
					s_enemy_attack(200, 3, 5, true),
				],
				on_angry: [
					attr_change(1),
				],
				on_move_angry: [
					m_enemy_once(s_enemy_attack_ratio(0.9, 5, false)),
					m_enemy_once(s_enemy_as_sealed(5, 7)),
					s_enemy_attack(500, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "アリエッタ(水)",
			hp: 160000,
			imageno: 5900,
			attr: 1,
			spec: 9,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_poison, "毒(1000)", -1, false, 1000, 5, 5),
				],
				on_move: [
					s_enemy_discharge(5, 2),
					s_enemy_attack(300 / 1.5, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, ],
}