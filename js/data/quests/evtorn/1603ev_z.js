{
	id: "1603ev_z",
	name: "(2016/03)イベントトーナメント 絶級",
	category: "past event",
	desc: "2016/03に開催された魔道杯のイベントトーナメント絶級です。",
	overlap: false,
	aprnum: 5,
	data: [{
		appearance: [1],
		enemy: [{
			name: "赤い灯火 シャンデリッパー",
			hp: 45000,
			imageno: 7173,
			attr: 0,
			spec: 6,
			move: {
				on_move: [
					s_enemy_attack(300, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "青い灯火 シャンデリッパー",
			hp: 37500,
			imageno: 7175,
			attr: 1,
			spec: 6,
			move: {
				on_move: [
					m_enemy_once(s_enemy_attr_weaken([0, 1, 0, 0, 0], 1.5, 5, 4)),
					s_enemy_attack(200, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [2],
		enemy: [{
			name: "赤い灯火 シャンデリッパー",
			hp: 45000,
			imageno: 7173,
			attr: 0,
			spec: 6,
			move: {
				on_popup: [
					s_enemy_healreverse(0.5, 5)
				],
				on_move: [
					s_enemy_attack(300, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "血に染まる本 ザップテイル",
			hp: 30000,
			imageno: 7149,
			attr: 0,
			spec: 6,
			move: {
				on_move: [
					s_enemy_attack(500, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [3],
		enemy: [{
			name: "赤い灯火 シャンデリッパー",
			hp: 52500,
			imageno: 7173,
			attr: 0,
			spec: 6,
			move: {
				on_move: [
					s_enemy_attack(500, 1, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "赤い灯火 シャンデリッパー",
			hp: 52500,
			imageno: 7173,
			attr: 0,
			spec: 6,
			move: {
				on_move: [
					s_enemy_attack(500, 1, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, ],
	}, {
		appearance: [4],
		enemy: [{
			name: "血に染まる本 ザップテイル",
			hp: 30000,
			imageno: 7149,
			attr: 0,
			spec: 6,
			move: {
				on_popup: [
					s_enemy_healreverse(0.5, 3)
				],
				on_move: [
					s_enemy_attack(300, 5, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "青い灯火 シャンデリッパー",
			hp: 48800,
			imageno: 7175,
			attr: 1,
			spec: 6,
			move: {
				on_popup: [
					damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
				],
				on_move: [
					s_enemy_attack(125, 5, 1, true)
				],
				on_move_angry: [
					m_enemy_once(s_enemy_resurrection(0.5)),
					s_enemy_attack(60, 3, 5, true),
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "赤い灯火 シャンデリッパー",
			hp: 45000,
			imageno: 7173,
			attr: 0,
			spec: 6,
			move: {
				on_move: [
					s_enemy_attack(500, 1, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, ],
	}, {
		appearance: [5],
		enemy: [{
			name: "血塗られた物語 ザップテイル",
			hp: 30,
			imageno: 7150,
			attr: 0,
			spec: 6,
			move: {
				on_popup: [
					impregnable(-1),
				],
				on_move: [
					s_enemy_healreverse(0.5, 2),
					s_enemy_attack(350, 1, 1, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "燃え盛る灯火 シャンデリッパー",
			hp: 120000,
			imageno: 7174,
			attr: 0,
			spec: 6,
			move: {
				on_popup: [
					skill_counter_func(damage_block_all, "ダメブロ全体(20000)", -1, false, 20000, 10),
				],
				on_move: [
					s_enemy_attack(160, 5, 5, true)
				],
				atrandom: false,
				turn: 1,
				wait: 1,
			},
		}, {
			name: "血塗られた物語 ザップテイル",
			hp: 60000,
			imageno: 7150,
			attr: 0,
			spec: 6,
			move: {
				on_move: [
					s_enemy_attrguard_all([0, 1, 0, 0, 0], 0.5, 5),
					s_enemy_healreverse(0.5, 2),
					s_enemy_attack(350, 5, 1, true),
				],
				atrandom: false,
				turn: 1,
				wait: 2,
			},
		}, ],
	}],
}