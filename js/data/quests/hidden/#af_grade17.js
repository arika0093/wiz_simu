{
   id: "af_grade7",
   name: "仮想漆式[デッキ構築テスト]",
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
               name: "無人戦艦",
               hp: 50000,
               imageno: 9077,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "ドルキマス軍上等空兵",
               hp: 60000,
               imageno: 9072,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
					 s_enemy_chain_sealed(7),
                     s_enemy_attack(2000, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "無人戦艦",
               hp: 30000,
               imageno: 9077,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 3)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            }
         ]
      },
      {
         appearance: [
            2
         ],
         enemy: [
             {
               name: "グルドラン帝国蒼鋭激兵",
               hp: 80000,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 7)
                  ],
                  on_move_angry: [
                     s_enemy_attack(150, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グルドラン帝国紅炎焔兵",
               hp: 60000,
               imageno: 10358,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(6000, 5, 1, true),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      },
      {
         appearance: [
            3
         ],
         enemy: [
            {
               name: "昏術特戦技官",
               hp: 2,
               imageno: 8322,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(6000, 5, 1, true),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔氷のハイ・マジクラート",
               hp: 150000,
               imageno: 8326,
               attr: 1,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 3, true)
                  ],
                  on_angry: [
                     m_enemy_once(s_enemy_cursed(0, 5, 4, 2000)),
                     s_enemy_as_sealed(5, 6),
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "昏術特戦技官",
               hp: 30000,
               imageno: 8322,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 1, 1))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_multibarrier_own(5, 99)),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      },
      {
         appearance: [
            4
         ],
         enemy: [
            {
			   name: "花咲ける森の王 ビッグカリフー",
			   hp: 120000,
			   imageno: 7831,
			   attr: 3,
			   spec: 5,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_as_sealed(5, 6),
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
               name: "超越の大魔道怪獣 アリエッタ・トワ",
               hp: 400000,
               imageno: 6361,
               attr: 0,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 900, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_all_sealed(5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(180, 5, 5, true),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄昏に咲く華 サンセット＝リフィル",
               hp: 600000,
               imageno: 9346,
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 900, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(180, 5, 5, true),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "叛逆の大元帥 ディートリヒ・ベルク",
               hp: 400000,
               imageno: 9024,
               attr: 2,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 900, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(180, 5, 5, true),
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