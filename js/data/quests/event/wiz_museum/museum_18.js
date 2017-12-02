{
   id: "museum_18",
   name: "18: ファングオブレイザー",
   desc: "",
   overlap: false,
   aprnum: 4,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "コールドグリフォン",
               hp: 136000,
               imageno: 10515,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1680, 1, 1, true),
                     s_enemy_heal_all(0.2),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "コールドグリフォン",
               hp: 170000,
               imageno: 10515,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir_ex(1))
                  ],
                  on_move: [
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアグリフォン",
               hp: 68000,
               imageno: 10513,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(466.5, 5, 1, true)/*nogambits*/
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
            2
         ],
         enemy: [
            {
               name: "コールドグリフォン",
               hp: 153000,
               imageno: 10515,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_ss_sealed(5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(1680, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "コールドグリフォン",
               hp: 204000,
               imageno: 10515,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1820, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "コールドグリフォン",
               hp: 153000,
               imageno: 10515,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(7000, 1, 1, m_enemy_tgtype_maxhp())
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
               name: "アイシクルグリフォン",
               hp: 204000,
               imageno: 10516,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4),
                     s_enemy_attack(1960, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アイシクルグリフォン",
               hp: 170000,
               imageno: 10516,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_taunt(10))
                  ],
                  on_move: [
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アイシクルグリフォン",
               hp: 170000,
               imageno: 10516,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_deathlimit(3, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1680, 5, 1, true)
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
               name: "アイシクルグリフォン",
               hp: 544000,
               imageno: 10516,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_all(50000, 99)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_chainreduce(5),
                     s_enemy_attack(1680, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1000, 5, 3, 0)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "トーテムキマイラ＝ミハネ",
               hp: 2040000,
               imageno: 10500,
               attr: 1,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(560, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_attrreverse(3, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4),
                     s_enemy_attack(560, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アイシクルグリフォン",
               hp: 680000,
               imageno: 10516,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 1500, 5, 3)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(420, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack(420, 5, 5, true),
                     s_enemy_attack(420, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      }
   ]
}