// -------------------------
// クエストデータ
//	敵行動: turn->現在の待機ターン / wait->行動後の待機ターン
// -------------------------
Quests = [
	// -------------------------
	// イベントトーナメント(覇)
	// -------------------------
	{
		id: "1602ev_5",
		name: "(2016/02)イベントトーナメント 覇級",
		category: "event tornament",
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
						//s_enemy_attack(150, 5, 3, true),
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
						//s_enemy_attack(80, 5, 3, true),
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
						m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 2)),
						//s_enemy_attack(225, 5, 3, true),
					],
					atrandom: false,
					wait: 1,
					turn: 2,
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
						//s_enemy_attack(150, 3, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 2,
				},
			}, {
				name: "青春の苦味を知る とろ～りプリス",
				hp: 65000,
				imageno: 7411,
				attr: 4,
				spec: 2,
				move: {
					on_move: [
						//s_enemy_attack(150, 3, 3, true)
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
						//s_enemy_attack(300, 5, 3, true),
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
						skill_counter_func(s_enemy_attack, "全体5連撃", -1, false, 750, 5, 5),
					],
					on_move: [
						//s_enemy_attack(150, 5, 3, true)
					],
					atrandom: false,
					turn: 1,
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
						//s_enemy_attack(250, 3, 1, true)
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
				hp: 25000,
				imageno: 7405,
				attr: 4,
				spec: 2,
				move: {
					on_popup: [
						s_enemy_force_reservoir(),
					],
					on_move: [
						//m_enemy_once(s_enemy_attack(1500, 3, 1, true)),
						//s_enemy_attack(750, 3, 1, true),
					],
					atrandom: false,
					turn: 1,
					wait: 2,
				},
			}, {
				name: "シャドウおじいさん",
				hp: 45000,
				imageno: 7417,
				attr: 4,
				spec: 2,
				move: {
					on_move: [
						//s_enemy_attack(150, 5, 3, true)
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
						//s_enemy_attack(250, 3, 1, true)
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
						m_enemy_once(s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 2)),
						//s_enemy_attack(225, 5, 3, true),
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
					],
					on_move: [
						//s_enemy_attack(150, 5, 3, true)
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
						//s_enemy_attack(250, 3, 1, true)
					],
					atrandom: false,
					turn: 2,
					wait: 1,
				},
			}],
		}],
	},
	// -------------------------
	// イベントトーナメント(絶)
	// -------------------------
	{
		id: "1602ev_4",
		name: "(2016/02)イベントトーナメント 絶級",
		category: "event tornament",
		desc: "2016/02に開催された魔道杯:イベントトーナメントのHard:クイズ対決！です。",
		overlap: false,
		aprnum: 5,
		data: [{
			appearance: [1],
			enemy: [{
				name: "青いとろ～りプリス",
				hp: 30000,
				imageno: 7412,
				attr: 1,
				spec: 4,
				move: {
					on_move: [
						//s_enemy_attack(900, 2, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "青いとろ～りプリス",
				hp: 24,
				imageno: 7412,
				attr: 1,
				spec: 4,
				move: {
					on_popup: [
						impregnable(-1),
					],
					on_move: [
						//s_enemy_attack(225, 3, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 3,
				},
			}],
		}, {
			appearance: [2],
			enemy: [{
				name: "碧空のとろ～りプリス",
				hp: 30000,
				imageno: 7413,
				attr: 1,
				spec: 4,
				move: {
					on_move: [
						//s_enemy_attack(225, 2, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "碧空のとろ～りプリス",
				hp: 13,
				imageno: 7413,
				attr: 1,
				spec: 4,
				move: {
					on_popup: [
						impregnable(-1),
					],
					on_move: [
						//s_enemy_attack(300, 3, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 3,
				},
			}, {
				name: "イエローチューカリー",
				hp: 20000,
				imageno: 7408,
				attr: 2,
				spec: 4,
				move: {
					on_move: [
						//s_enemy_attack(300, 3, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}],
		}, {
			appearance: [3],
			enemy: [{
				name: "碧空のとろ～りプリス",
				hp: 30000,
				imageno: 7413,
				attr: 1,
				spec: 4,
				move: {
					on_popup: [
						damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
					],
					on_move: [
						s_enemy_attack(500, 3, 1, true),
						s_enemy_chain_break(),
					],
					on_move_angry: [
						s_enemy_attack(700, 3, 1, true),
						s_enemy_as_sealed(5, 3),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "碧空のとろ～りプリス",
				hp: 60000,
				imageno: 7413,
				attr: 1,
				spec: 4,
				move: {
					on_move: [
						s_enemy_force_reservoir(),
						s_enemy_attack(600, 2, 1, true)
					],
					atrandom: false,
					turn: 2,
					wait: 2,
				},
			}, {
				name: "碧空のとろ～りプリス",
				hp: 30000,
				imageno: 7413,
				attr: 1,
				spec: 4,
				move: {
					on_move: [
						//s_enemy_attack(300, 2, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}],
		}, {
			appearance: [4],
			enemy: [{
				name: "碧空のとろ～りプリス",
				hp: 30000,
				imageno: 7413,
				attr: 1,
				spec: 4,
				move: {
					on_popup: [
						damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
					],
					on_move: [
						s_enemy_attack(500, 3, 1, true),
						s_enemy_chain_break(),
					],
					on_move_angry: [
						s_enemy_attack(700, 3, 1, true),
						s_enemy_as_sealed(5, 3),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "碧空のとろ～りプリス",
				hp: 60000,
				imageno: 7413,
				attr: 1,
				spec: 4,
				move: {
					on_move: [
						s_enemy_force_reservoir(),
						s_enemy_attack(600, 2, 1, true)
					],
					atrandom: false,
					turn: 2,
					wait: 2,
				},
			}, {
				name: "碧空のとろ～りプリス",
				hp: 30000,
				imageno: 7413,
				attr: 1,
				spec: 4,
				move: {
					on_move: [
						//s_enemy_attack(300, 2, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}],
		}, {
			appearance: [5],
			enemy: [{
				name: "青いとろ～りプリス",
				hp: 40000,
				imageno: 7412,
				attr: 1,
				spec: 4,
				move: {
					on_move: [
						//s_enemy_attack(250, 3, 1, true),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "知性は巡る どこまでも ハカセ",
				hp: 280000,
				imageno: 7397,
				attr: 1,
				spec: 4,
				move: {
					on_popup: [
						damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true),
					],
					on_move: [
						m_enemy_once(skill_counter(9999, 11)),
						//s_enemy_attack(250, 3, 5, true),
						//s_enemy_attack(500, 3, 1, true),
					],
					on_move_angry: [
						m_enemy_once(s_enemy_ss_sealed()),
						//s_enemy_attack(250, 3, 5, true),
						//s_enemy_attack(1200, 1, 1, true),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "青いとろ～りプリス",
				hp: 30000,
				imageno: 7412,
				attr: 1,
				spec: 4,
				move: {
					on_popup: [
						damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
					],
					on_move: [
						m_enemy_once(attack_counter(800, -1)),
						// 攻撃
					],
					on_move_angry: [
						// 回復
						// 攻撃
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}],
		}],
	},
	// -------------------------
	// トーナメント: 伍式
	// -------------------------
	{
		id: "grade15",
		name: "伍式(トーナメント15段)",
		category: "tornament",
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
						damage_block_own(10000, 3),
					],
					on_move: [
						s_enemy_attack(250, 5, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 2,
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
					turn: 2,
					wait: 1,
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
						m_enemy_once(s_enemy_deathlimit(5, 6)),
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
					on_popup: [
						s_enemy_force_reservoir(),
					],
					on_move: [
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
					on_popup: [
						s_enemy_force_reservoir(),
					],
					on_move: [
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
					turn: 1,
					wait: 1,
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
						skill_counter_func(s_enemy_healrebase, "回復反転(50%)", -1, false, 0.5, 5),
						damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
					],
					on_move: [
						s_enemy_attack(250, 5, 3, true),
					],
					on_angry: [
						attr_change(3),
						s_enemy_attr_weaken([1,1,1,1,1], 1.25, 5, 2)
					],
					on_move_angry: [
						s_enemy_attack(100, 5, 3, true),
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
	},
	// -------------------------
	// トーナメント: 肆式
	// -------------------------
	{
		id: "grade14",
		name: "肆式(トーナメント14段)",
		category: "tornament",
		desc: "雷推奨のトーナメントです。1位入賞時4232pt。",
		overlap: false,
		aprnum: 5,
		data: [{
			appearance: [1],
			enemy: [{
				name: "スクワルボーン",
				hp: 21000,
				imageno: 5249,
				attr: 1,
				spec: 2,
				move: {
					on_move: [
						s_enemy_chain_sealed(7),
						s_enemy_attack(350, 5, 1, false),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "リラソハウスバウンサー",
				hp: 9500,
				imageno: 5242,
				attr: 1,
				spec: 5,
				move: {
					on_move: [
						s_enemy_attack(70, 3, 5, true),
						s_enemy_attack(200, 5, 1, false),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "リラソハウスバウンサー",
				hp: 9500,
				imageno: 5242,
				attr: 1,
				spec: 5,
				move: {
					on_move: [
						s_enemy_attack(70, 3, 5, true),
						s_enemy_attack(200, 5, 1, false),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, ],
		}, {
			appearance: [2],
			enemy: [{
				name: "ターコイズレンジャー",
				hp: 75000,
				imageno: 5231,
				attr: 1,
				spec: 0,
				move: {
					on_move: [
						s_enemy_attack(70, 3, 5, true),		// 要検証
						s_enemy_attack(200, 5, 1, false),
					],
					atrandom: false,
					turn: 2,
					wait: 1,
				},
			}, {
				name: "木負いガメ",
				hp: 15,
				imageno: 3743,
				attr: 1,
				spec: 7,
				move: {
					on_popup: [
						impregnable(-1),
					],
					on_move: [
						s_enemy_attack(100, 3, 5, true),
						s_enemy_attack(200, 5, 1, false),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				}
			}, {
				name: "リラソハウスバウンサー",
				hp: 36300,
				imageno: 5242,
				attr: 1,
				spec: 5,
				move: {
					on_move: [
						s_enemy_attack(70, 3, 5, true),
						s_enemy_attack(200, 5, 1, false),
					],
					atrandom: false,
					turn: 2,
					wait: 1,
				}
			}, ],
		}, {
			appearance: [3],
			enemy: [{
				name: "ターコイズサハギン",
				hp: 58000,
				imageno: 2544,
				attr: 1,
				spec: 5,
				move: {
					on_popup: [
						s_enemy_force_reservoir(),
					],
					on_move: [
						m_enemy_once(s_enemy_attack(500, 5, 1, true)),
						s_enemy_attack(250, 5, 1, false),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				}
			}, {
				name: "ターコイズサハギン",
				hp: 29000,
				imageno: 2544,
				attr: 1,
				spec: 5,
				move: {
					on_popup: [
						s_enemy_force_reservoir(),
					],
					on_move: [
						m_enemy_once(s_enemy_attack(500, 5, 1, true)),
						s_enemy_attack(250, 5, 1, false),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				}
			}, {
				name: "クリフゴート",
				hp: 36300,
				imageno: 3737,
				attr: 1,
				spec: 5,
				move: {
					on_move: [
						m_enemy_once(damage_block_own(30000, -1)),
						s_enemy_attack(250, 5, 1, false),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, ],
		}, {
			appearance: [4],
			enemy: [{
				name: "リラソハウスバウンサー",
				hp: 10000,
				imageno: 5242,
				attr: 1,
				spec: 5,
				move: {
					on_move: [
						s_enemy_attack(250, 5, 1, true),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "蒼鏡 サーチャー",
				hp: 63000,
				imageno: 3731,
				attr: 1,
				spec: 6,
				move: {
					on_move: [
						m_enemy_once(s_enemy_chain_break()),
						s_enemy_attack(70, 3, 5, true),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "リラソハウスバウンサー",
				hp: 36300,
				imageno: 5242,
				attr: 1,
				spec: 5,
				move: {
					on_move: [
						s_enemy_attack(250, 5, 1, true),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, ],
		}, {
			appearance: [5],
			enemy: [{
				name: "ロレッタ",
				hp: 100000,
				imageno: 5482,
				attr: 1,
				spec: 9,
				move: {
					on_move: [
						m_enemy_once(s_enemy_attr_weaken([0, 1, 0, 0, 0], 1.5, 5, 4)),
						s_enemy_attack(1400, 1, 1),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "ルシェ",
				hp: 600000,
				imageno: 5486,
				attr: 1,
				spec: 0,
				move: {
					on_move: [
						m_enemy_once(s_enemy_poison(500, 5, 5)),
						s_enemy_attack(1400, 1, 1, m_enemy_tgtype_maxhp()),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, {
				name: "ベルナデッタ",
				hp: 100000,
				imageno: 5494,
				attr: 1,
				spec: 9,
				move: {
					on_move: [
						m_enemy_once(s_enemy_as_sealed(5, 4)),
						s_enemy_attack(1400, 1, 1, m_enemy_tgtype_minhp()),
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				},
			}, ],
		}, ],
	},

	// -------------------------
	// トーナメント: 参式
	//   敵行動:. 要検証
	// -------------------------
	{
		id: "grade13",
		name: "参式(トーナメント13段)",
		category: "tornament",
		desc: "水推奨のトーナメントです。1位入賞時3640pt。",
		aprnum: 5,
		overlap: false,
		data: [{
			// 火龍 / 火龍
			appearance: [1, 2],
			enemy: [{
				name: "アッガローグ",
				hp: 35000,
				imageno: 5228,
				attr: 0,
				spec: 0,
			}, {
				name: "アッガローグ",
				hp: 35000,
				imageno: 5228,
				attr: 0,
				spec: 0,
			}, ],
		}, {
			// 水龍 / 火龍
			appearance: [1, 2],
			enemy: [{
				name: "水甲ウォーターリザード",
				hp: 21000,
				imageno: 5254,
				attr: 1,
				spec: 0,
			}, {
				name: "アッガローグ",
				hp: 35000,
				imageno: 5228,
				attr: 0,
				spec: 0,
			}, ],
		}, {
			// 水魔族 / 雷魔族 / 火亜人
			appearance: [3],
			enemy: [{
				name: "ボーンソルジャー・フリーズ",
				hp: 24000,
				imageno: 5248,
				attr: 1,
				spec: 2,
				move: {
					on_move: [
						s_enemy_attack(175, 1, 1)
					],
					atrandom: false,
					turn: 2,
					wait: 1,
				}
			}, {
				name: "ボーンソルジャー・チャード",
				hp: 16000,
				imageno: 5250,
				attr: 2,
				spec: 2,
				move: {
					on_move: [
						s_enemy_attack(250, 1, 1)
					],
					atrandom: false,
					turn: 2,
					wait: 1,
				}
			}, {
				name: "アクトハウスバウンサー",
				hp: 100000,
				imageno: 5240,
				attr: 0,
				spec: 5,
				move: {
					on_popup: [
						attack_counter(2000, -1),
					],
					on_move: [
						s_enemy_attack(700, 1, 1)
					],
					atrandom: false,
					turn: 2,
					wait: 1,
				}
			}, ],
		}, {
			// 火魔法生物
			appearance: [4],
			enemy: [{
				name: "杓岩のラーヴァスピリット",
				hp: 25,
				imageno: 5259,
				attr: 0,
				spec: 7,
				move: {
					on_popup: [
						impregnable(-1),
					]
				}
			}, ],
		}, {
			// (ボス)火魔法生物 / ティア
			appearance: [5],
			enemy: [{
				name: "杓岩のラーヴァスピリット",
				hp: 100000,
				imageno: 5259,
				attr: 0,
				spec: 7,
				move: {
					on_popup: [
						damage_block_own(9000, -1),
					]
				}
			}, {
				name: "ティア",
				imageno: 5223,
				hp: 360000,
				attr: 0,
				spec: 9,
				move: {
					on_popup: [
						skill_counter(9999, -1),
						damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry()),
					],
					on_move: [
						s_enemy_attack(1300, 1, 2, true)
					],
					on_angry: [
						attr_change(1),
					],
					on_move_angry: [
						// 要: 攻撃属性の検証
						s_enemy_attack(325, 4, 4, true)
					],
					atrandom: false,
					turn: 2,
					wait: 2,
				}
			}, ],
		}, ],
	},

	// -------------------------
	// トーナメント: 弐式
	//   敵行動:. 要検証
	// -------------------------
	{
		id: "grade12",
		name: "弐式(トーナメント12段)",
		category: "tornament",
		desc: "火推奨のトーナメントです。1位入賞時2600pt。入賞確実: 5-6t / タイム勝負: 7t-",
		aprnum: 5,
		overlap: false,
		data: [{
			// 雷牛 / 火タービン
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "黄毛クリフゴート",
				hp: 19800,
				imageno: 3738,
				attr: 2,
				spec: 7,
			}, {
				name: "紅鏡サーチャー",
				hp: 13200,
				imageno: 3728,
				attr: 0,
				spec: 6,
			}, ],
		}, {
			// 雷タービン / 火カーバンクル
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "黄鏡サーチャー",
				hp: 19800,
				imageno: 3732,
				attr: 2,
				spec: 6,
			}, {
				name: "柘榴フライングカーバンクル",
				hp: 13200,
				imageno: 3746,
				attr: 0,
				spec: 4,
			}, ],
		}, {
			// 雷カーバンクル / 水タービン
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "黄晶フライングカーバンクル",
				hp: 19800,
				imageno: 3750,
				attr: 2,
				spec: 4,
			}, {
				name: "水鏡サーチャー",
				hp: 6600,
				imageno: 3730,
				attr: 1,
				spec: 6,
			}, ],
		}, {
			// 雷タービン / 雷カーバンクル
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "黄鏡サーチャー",
				hp: 19800,
				imageno: 3732,
				attr: 2,
				spec: 6,
			}, {
				name: "黄晶フライングカーバンクル",
				hp: 19800,
				imageno: 3750,
				attr: 2,
				spec: 4,
			}, ],
		}, {
			// 火タービン / 火タービン
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "紅鏡サーチャー",
				hp: 13200,
				imageno: 3728,
				attr: 0,
				spec: 6,
			}, {
				name: "紅鏡サーチャー",
				hp: 13200,
				imageno: 3728,
				attr: 0,
				spec: 6,
			}, ],
		}, {
			// 雷牛 / 水牛
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "黄毛クリフゴート",
				hp: 19800,
				imageno: 3738,
				attr: 2,
				spec: 7,
			}, {
				name: "青冠クリフゴート",
				hp: 6600,
				imageno: 3736,
				attr: 1,
				spec: 7,
			}, ],
		}, {
			// (ボス)火タービン / オルネ / 水カーバンクル
			appearance: [5],
			enemy: [{
				name: "焔嵐タービネックス",
				imageno: 3723,
				hp: 35000,
				attr: 0,
				spec: 6,
				move: {
					on_popup: [
						skill_counter(9999, -1),
					],
				}
			}, {
				name: "オルネ",
				imageno: 4091,
				hp: 120000,
				attr: 2,
				spec: 9,
			}, {
				name: "蒼玉フライングカーバンクル",
				imageno: 3749,
				hp: 25000,
				attr: 1,
				spec: 7,
				move: {
					on_move: [
						s_enemy_ss_sealed(5, 2),
						null,
					],
					atrandom: false,
					turn: 1,
					wait: 1,
				}
			}, ],
		}, ],
	},

	// -------------------------
	// トーナメント: 壱式
	//   敵行動:. 要検証
	// -------------------------
	{
		id: "grade11",
		name: "壱式(トーナメント11段)",
		category: "tornament",
		desc: "雷推奨のトーナメントです。1位入賞時2500pt。",
		aprnum: 5,
		overlap: false,
		data: [{
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "燐光の骨狼",
				hp: 18000,
				imageno: 2527,
				attr: 2,
				spec: 7,
			}, ],
		}, {
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "氷雨の骨狼",
				hp: 30000,
				imageno: 2525,
				attr: 1,
				spec: 7,
			}, ],
		}, {
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "ブルーサハギン",
				hp: 17000,
				imageno: 2543,
				attr: 1,
				spec: 5,
			}, {
				name: "濁流のコカトリス",
				hp: 17000,
				imageno: 2537,
				attr: 1,
				spec: 2,
			},

			],
		}, {
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "氷毒のキラービー",
				hp: 17000,
				imageno: 2549,
				attr: 1,
				spec: 7,
			}, {
				name: "帯電するコカトリス",
				hp: 9000,
				imageno: 2539,
				attr: 2,
				spec: 2,
			},

			],
		}, {
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "イエローハーピー",
				hp: 9000,
				imageno: 2533,
				attr: 2,
				spec: 5,
			}, {
				name: "火吹きのコカトリス",
				hp: 8000,
				imageno: 2535,
				attr: 0,
				spec: 2,
			},

			],
		}, {
			appearance: [1, 2, 3, 4],
			enemy: [{
				name: "ブルーサハギン",
				hp: 17000,
				imageno: 2543,
				attr: 1,
				spec: 5,
			}, {
				name: "レッドハーピー",
				hp: 8000,
				imageno: 2529,
				attr: 0,
				spec: 5,
			},

			],
		}, {
			appearance: [5],
			enemy: [{
				name: "プラズマファントム",
				hp: 20000,
				imageno: 2522,
				attr: 2,
				spec: 2,
				move: {
					on_popup: [
						attack_counter(9999, -1),
					],
				},
			}, {
				name: "ベルナデッタ",
				hp: 200000,
				imageno: 2556,
				attr: 1,
				spec: 9,
				move: {
					on_move: [
						s_enemy_attack(1300, 1, 1),
						null, // HP全体回復(25%)
					],
					atrandom: false,
					turn: 2,
					wait: 2,
				},
			}, ],
		}, ],
	},


	// -------------------------
	// 過去のイベントトーナメント
	// -------------------------
	{
		id: "1601ev_z",
		name: "(2016/01)イベントトーナメント 絶級",
		category: "past event",
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
	},
];