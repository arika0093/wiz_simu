Quests = [
	// -------------------------
	// AbCd01 hard
	// -------------------------
	{
		id: "abcd01_h",
		name: "AbyssCode01 黒殻の王『真覇級』",
		category: "abysscode",
		desc: "",
		aprnum: 4,
		overlap: false,
		hidden: true,
		data: [{
			appearance: [1],
			enemy: [{
				name: "ファハシュヴァイル",
				hp: 30000,
				imageno: 4067,
				attr: 0,
				spec: 2,
				move: {
					on_move: [
						s_enemy_attack(400, 3, 4, true),
						s_enemy_attr_weaken([1, 0, 1, 0, 0], 1.5, 5, 5),
					],
					turn: 1,
					wait: 2,
				}
			}, {
				name: "ウラガーン(S)",
				hp: 50000,
				imageno: 3707,
				attr: 0,
				spec: 11,
				move: {
					on_move: [
						s_enemy_attack(750, 5, 1, true),
						s_enemy_attack(750, 5, 1, true),
						s_enemy_chain_break(),
					],
					turn: 1,
					wait: 1,
				}
			}, ],
		}, {
			appearance: [2],
			enemy: [{
				name: "ルインコンダクター",
				hp: 15000,
				imageno: 4070,
				attr: 2,
				spec: 2,
				move: {
					on_move: [
						// パネルチェンジ(雷)
						s_enemy_attack_attrsp(3300, 550, [0, 1, 0, 0, 0], 5, 1, true),
					],
					turn: 2, // 暫定処置
					wait: 2,
				}
			}, {
				name: "ウラガーン(S+)",
				hp: 90000,
				imageno: 3708,
				attr: 0,
				spec: 11,
				move: {
					on_popup: [
						s_enemy_attack_ratio(0.9, 5, true),
						damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
					],
					on_move: [
						s_enemy_chain_sealed(5),
						s_enemy_poison(1000, 5, 6),
					],
					on_angry: [
						attr_change(4),
					],
					on_move_angry: [
						s_enemy_attack(600, 3, 5, true),
					],
					turn: 1,
					wait: 1,
				}
			}, ],
		}, {
			appearance: [3],
			enemy: [{
				name: "リジョンディッシェル",
				hp: 50000,
				imageno: 4069,
				attr: 1,
				spec: 7,
				move: {
					on_popup: [
						skill_counter_func(s_enemy_all_sealed, "全体封印", -1, false, 5, 5),
					],
					on_move: [
						s_enemy_ss_sealed(5, 6),
						s_enemy_chain_break(),
					],
					turn: 1,
					wait: 1,
				},
			}, {
				name: "ウラガーン(SS)",
				hp: 120000,
				imageno: 4066,
				attr: 0,
				spec: 11,
				move: {
					on_move: [
						m_enemy_once(s_enemy_poison(1000, 5, 6)),
						s_enemy_attack(2000, 1, 1, m_enemy_tgtype_maxhp()),
					],
					turn: 2,
					wait: 1,
				},
			}, {
				name: "ファングサーラ",
				hp: 30000,
				imageno: 4068,
				attr: 0,
				spec: 5,
				move: {
					on_popup: [
						damage_block_own(20000, 6)
					],
					on_move: [
						s_enemy_attack(2000, 1, 1, m_enemy_tgtype_maxhp()),
					],
					turn: 2,
					wait: 2,
				},
			}, ],
		}, {
			appearance: [4],
			enemy: [{
				name: "ファハシュヴァイル",
				hp: 100000,
				imageno: 4067,
				attr: 0,
				spec: 2,
				move: {
					on_popup: [
						s_enemy_attack_ratio(0.9, 5, true),
					],
					on_move: [
						s_enemy_attack(2000, 5, 1, true),
						s_enemy_attack(1500, 5, 1, true),
					],
					turn: 1,
					wait: 1,
				}
			}, {
				name: "ウラガーン(L)",
				hp: 500000,
				imageno: 6783,
				attr: 0,
				spec: 11,
				move: {
					on_popup: [
						skill_counter_func(s_enemy_all_sealed, "全体封印", -1, false, 5, 11),
						damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry()),
					],
					on_move: [
						s_enemy_attack(2000, 1, 1, m_enemy_tgtype_maxhp()),
					],
					on_angry: [
						attr_change(4),
					],
					on_move_angry: [
						s_enemy_attack_ratio(0.9, 5, true),
						/* 全属性ガード */
						s_enemy_attack_deadgrudge(2400, 3600, 4800, true),
					],
					turn: 1,
					wait: 1,
				}
			}, {
				name: "ファングサーラ",
				hp: 80000,
				imageno: 4068,
				attr: 0,
				spec: 7,
				move: {
					on_popup: [
						attack_counter_dual(1000, -1),
					],
					on_move: [
						s_enemy_chain_sealed(5),
						s_enemy_chain_break(),
					],
					turn: 1,
					wait: 1,
				}
			}, ],
		}, ],
	},
	// -------------------------
	// AbCd01 normal
	// -------------------------
	{
		id: "abcd01_n",
		name: "AbyssCode01 黒殻の王『黒業級』",
		category: "abysscode",
		desc: "",
		aprnum: 4,
		overlap: false,
		hidden: true,
		data: [{
			appearance: [1],
			enemy: [{
				name: "ファハシュヴァイル",
				hp: 30000,
				imageno: 4067,
				attr: 0,
				spec: 0,
			}, {
				name: "ウラガーン",
				hp: 40000,
				imageno: 3706,
				attr: 0,
				spec: 11,
			}, {
				name: "ファングサーラ",
				hp: 20000,
				imageno: 4068,
				attr: 0,
				spec: 7,
				move: {
					on_move: [
						m_enemy_once(s_enemy_poison(500, 5, 3)),
					],
					turn: 1,
					wait: 1,
				},
			}, ],
		}, {
			appearance: [2],
			enemy: [{
				name: "ルインコンダクター",
				hp: 15000,
				imageno: 4070,
				attr: 2,
				spec: 0,
				move: {
					on_popup: [
						skill_counter(9999, -1),
					]
				}
			}, {
				name: "ウラガーン",
				hp: 60000,
				imageno: 3707,
				attr: 0,
				spec: 11,
			}, ],
		}, {
			appearance: [3],
			enemy: [{
				name: "ファングサーラ",
				hp: 35000,
				imageno: 4068,
				attr: 0,
				spec: 7,
				move: {
					on_move: [
						s_enemy_poison(500, 5, 3),
					],
					turn: 1,
					wait: 3,
				},
			}, {
				name: "ウラガーン",
				hp: 90000,
				imageno: 3708,
				attr: 0,
				spec: 11,
				move: {
					on_popup: [
						s_enemy_force_reservoir(),
					],
				},
			}, {
				name: "リジョンディッシェル",
				hp: 60000,
				imageno: 4069,
				attr: 1,
				spec: 5,
			}, ],
		}, {
			appearance: [4],
			enemy: [{
				name: "ファハシュヴァイル",
				hp: 60000,
				imageno: 4067,
				attr: 0,
				spec: 0,
				move: {
					on_popup: [
						skill_counter(9999, -1),
					]
				}
			}, {
				name: "ウラガーン",
				hp: 180000,
				imageno: 4066,
				attr: 0,
				spec: 11,
				move: {
					on_popup: [
						s_enemy_attr_weaken([1, 0, 0, 0, 0], 1.25, 5, -1),
					]
				}
			}, {
				name: "ファングサーラ",
				hp: 35000,
				imageno: 4068,
				attr: 0,
				spec: 7,
				move: {
					on_popup: [
						skill_counter(9999, -1),
					]
				}
			}, ],
		}, ],
	},
];