{
	id: "tq_001",
	name: "[デッキ構築Q 01: こーりみ出題]",
	desc: "",
	overlap: false,
	aprnum: 5,
	data: [
	{
		appearance: [
			1
		],
		enemy: [
			{
				name: "時の発動兎王 ルドルフ・マイヤー",
				hp: 80000,
				imageno: 5433,
				attr: 1,
				spec: 6,
				isStrong: false,
				move: {
					on_popup: [
						s_enemy_attrguard_all([0,0,1,0,0], 0.75, 5)
					],
					on_move: [
						s_enemy_heal_all(0.25),
						s_enemy_attack(300, 5, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 2
				}
			},
			{
				name: "時の空賊 マダム・ヴァイオレッタ",
				hp: 200000,
				imageno: 5430,
				attr: 2,
				spec: 9,
				isStrong: false,
				move: {
					on_popup: [
						skill_counter_func(s_enemy_all_sealed, "全体封印(3T)", -1, false, 5, 3),
					],
					on_move: [
						s_enemy_attack_attrsp(6000, 400, [0,0,1,0,0], 5, 1, false),
						s_enemy_attack(700, 1, 4, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
		]
	},
	{
		appearance: [
			2
		],
		enemy: [
			{
				name: "遠き夢の幻 エリカ・オイリン",
				hp: 120000,
				imageno: 5457,
				attr: 1,
				spec: 9,
				isStrong: false,
				move: {
					on_move: [
						s_enemy_attack_ratio(0.35, 5, false),
						s_enemy_attack(550, 1, 1, true),
						s_enemy_attack(200, 5, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
		]
	},
	{
		appearance: [
			3
		],
		enemy: [
			{
				name: "因果の悲しみ ミュウ・レイヴェン",
				hp: 160000,
				imageno: 5431,
				attr: 0,
				spec: 9,
				isStrong: false,
				move: {
					on_popup: [
						s_enemy_ss_sealed(5, 1)
					],
					on_move: [
						s_enemy_attack(50, 5, 1, true),
						s_enemy_attack(100, 5, 1, true),
						s_enemy_ss_sealed(5, 1)
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
			{
				name: "移ろいの儚さ ミュウ・フォルトゥナ",
				hp: 200000,
				imageno: 5432,
				attr: 0,
				spec: 9,
				isStrong: false,
				move: {
					on_popup: [
						m_enemy_once(skill_counter_func(s_enemy_attr_absorb, "-", 100, false, [1,1,0,0,0], 2, 3)),
					],
					on_move: [
						s_enemy_attack(100, 5, 3, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
		]
	},
	{
		appearance: [
			4
		],
		enemy: [
			{
				name: "覇焔忠魔 エイミー・キャロル",
				hp: 70000,
				imageno: 5434,
				attr: 0,
				spec: 3,
				move: {
					on_popup: [
						m_enemy_once(s_enemy_multibarrier_own(3, 99)),
						damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
					],
					on_move: [
						s_enemy_heal_all(0.5),
						s_enemy_heal_all(0.3),
						s_enemy_attack(100, 5, 1, true),
					],
					on_angry: [
						s_enemy_all_sealed(5, 2)
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
			{
				name: "聖刻忠魔 エイミー・キャロル",
				hp: 300000,
				imageno: 5438,
				attr: 3,
				spec: 5,
				move: {
					on_popup: [
						m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 1, 3)),
						damage_switch(s_enemy_when_hpdown(0.4), m_enemy_angry(), true)
					],
					on_move: [
						s_enemy_attack(500, 1, 1, m_enemy_tgtype_maxhp()),
						s_enemy_attack(300, 5, 1, true),
					],
					on_angry: [
						m_enemy_once(s_enemy_multibarrier_own(5, 99)),
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
		]
	},
	{
		appearance: [
			5
		],
		enemy: [
			{
				name: "悠の照神 ステイシー・マーキュリー",
				hp: 180000,
				imageno: 5418,
				attr: 0,
				spec: 3,
				isStrong: true,
				move: {
					on_popup: [
						s_enemy_attack(250, 1, 1, m_enemy_tgtype_maxhp()),
					],
					on_move: [
						s_enemy_attack(100, 5, 1, true),
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
			{
				name: "刻下の光神 セリーヌ・エヴァンス",
				hp: 500000,
				imageno: 5420,
				attr: 1,
				spec: 9,
				isStrong: true,
				move: {
					on_popup: [
						m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1000, 5, 10, true)),
					],
					on_move: [
						s_enemy_attack(100, 1, 1, true),
						s_enemy_attack(200, 5, 1, true)
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
			{
				name: "前刻の蒼神 イレーナ・フリエル",
				hp: 100000,
				imageno: 5419,
				attr: 2,
				spec: 8,
				isStrong: true,
				move: {
					on_popup: [
						m_enemy_once(s_enemy_multibarrier_own(5, 99)),
						damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
					],
					on_move: [
						s_enemy_attack_ratio(0.2),
						s_enemy_attack(100, 1, 1, true),
						s_enemy_attack(50, 5, 1, true)
					],
					on_angry: [
						s_enemy_resurrection(0.6)
					],
					atrandom: false,
					turn: 1,
					wait: 1
				}
			},
		]
	},
]
}