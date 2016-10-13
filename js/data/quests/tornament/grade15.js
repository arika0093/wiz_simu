{
	id: "grade15",
	name: "伍式(トーナメント15段)",
	category: "tornament",
	category_jp: "通常トーナメント",
	desc: "火推奨のトーナメントです。1位入賞時4800pt。",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "覗かれる者の黄金の視線",
			hp: 15,
			imageno: 7160,
			attr: 2,
			spec: 6,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(250, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "花咲ける森の王 ビッグカリフー",
			hp: 25000,
			imageno: 7172,
			attr: 2,
			spec: 5,
			move: {
				on_popup: [
					damage_block_own(10000, 4),
				],
				on_move: [
					s_enemy_attack(200, 5, 1, true)
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "凶暴な閃翼魔のレリーフ",
			hp: 25000,
			imageno: 7166,
			attr: 2,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_chain_sealed(3)),
					s_enemy_attack(100, 5, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, {
			name: "肥沃な土地の魔草 プラティー",
			hp: 30000,
			imageno: 7184,
			attr: 2,
			spec: 7,
			move: {
				on_popup: [
					skill_counter_func(attack_counter_dual, "多段式カウンター(500)", -1, false, 500, 3),
					s_enemy_division(),
				],
				on_move: [
					s_enemy_attack(250, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			}
		}, {
			name: "凶暴な炎翼魔のレリーフ",
			hp: 20000,
			imageno: 7162,
			attr: 0,
			spec: 2,
			move: {
				on_move: [
					m_enemy_once(s_enemy_deathlimit(1, 7)),
					s_enemy_attack(100, 5, 3, true),
				],
				atrandom: false,
				turn: 2,
				wait: 1,
			}
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "橙色の灯火 シャンデリッパー",
			hp: 25000,
			imageno: 7177,
			attr: 2,
			spec: 6,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_attr_weaken, "雷属性弱体化(50%)", -1, false, [0, 0, 1, 0, 0], 1.5, 5, 3),
				],
				on_move: [
					s_enemy_attack(250, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			}
		}, {
			name: "朱に染まる森の王 ビッグカリフー",
			hp: 25000,
			imageno: 7168,
			attr: 0,
			spec: 5,
			move: {
				on_move: [
					m_enemy_once(s_enemy_force_reservoir()),
					m_enemy_once(s_enemy_attack(2000, 5, 1, true)),
					s_enemy_attack(1000, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			}
		}, {
			name: "花咲ける森の王 ビッグカリフー",
			hp: 30000,
			imageno: 7172,
			attr: 2,
			spec: 5,
			move: {
				on_move: [
					m_enemy_once(s_enemy_force_reservoir()),
					m_enemy_once(s_enemy_attack(2000, 5, 1, true)),
					s_enemy_attack(1000, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "覗かれる者の黄金の視線",
			hp: 20,
			imageno: 7160,
			attr: 2,
			spec: 6,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_attack(150, 5, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "激昂する伝説のスノウフッド",
			hp: 35000,
			imageno: 7186,
			attr: 0,
			spec: 5,
			move: {
				on_move: [
					m_enemy_once(s_enemy_poison(500, 5, 3)),
					s_enemy_attack(200, 5, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "橙色の灯火 シャンデリッパー",
			hp: 30000,
			imageno: 7177,
			attr: 2,
			spec: 6,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_discharge, "ディスチャージ(-2t)", -1, false, 5, 2),
				],
				on_move: [
					s_enemy_attack(300, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [5],
		enemy: [{
			name: "激昂する伝説のスノウフッド",
			hp: 90000,
			imageno: 7186,
			attr: 0,
			spec: 5,
			move: {
				on_popup: [
					s_enemy_ss_sealed(5, 1)
				],
				on_move: [
					m_enemy_once(s_enemy_force_reservoir()),
					m_enemy_once(s_enemy_attack(2000, 1, 1, true)),
					s_enemy_attack(1500, 1, 1, true),
				],
				atrandom: false,
				turn: 2,
				wait: 2,
			},
		}, {
			name: "儚き友諠の栞 キーラ・バルバレス",
			hp: 400000,
			imageno: 7148,
			attr: 2,
			subattr: 3,
			spec: 9,
			move: {
				on_popup: [
					skill_counter_func(s_enemy_healreverse, "回復反転(50%)", -1, false, 0.5, 5),
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(150, 5, 5, true),
				],
				on_angry: [
					attr_change(3),
					s_enemy_attr_weaken([1,1,1,1,1], 1.25, 5, 2),
				],
				on_move_angry: [
					s_enemy_attack(150, 5, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "遭遇する伝説のスノウフッド",
			hp: 80000,
			imageno: 7190,
			attr: 2,
			spec: 5,
			move: {
				on_popup: [
					attack_counter_dual(700, 3),
				],
				on_move: [
					s_enemy_attack(200, 5, 3, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, ],
}