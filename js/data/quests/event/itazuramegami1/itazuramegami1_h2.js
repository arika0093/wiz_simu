{
   id: "itazuramegami1_h2",
   name: "中級 地底の蠍退治",
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
               name: "水面のマンティコア",
               hp: 30000,
               imageno: 1997,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "青のタイタン",
               hp: 40000,
               imageno: 2003,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     m_enemy_once(s_enemy_attack(1500, 5, 1, true)),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "水面のマンティコア",
               hp: 30000,
               imageno: 1997,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "青のタイタン",
               hp: 50000,
               imageno: 2003,
               attr: 1,
               spec: 5,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(3000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "青のタイタン",
               hp: 50000,
               imageno: 2003,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "迅風のマンティコア",
               hp: 50000,
               imageno: 1999,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(375, 5, 1, true)
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
               name: "迅風のマンティコア",
               hp: 50000,
               imageno: 1999,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(375, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "波濤のマンティコア",
               hp: 50000,
               imageno: 1998,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "波濤のマンティコア",
               hp: 50000,
               imageno: 1998,
               attr: 1,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(3000, 5, 1, true)
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
               name: "瑠璃のタイタン",
               hp: 100000,
               imageno: 2004,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_deathlimit(3, 2),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "聖なる激情 ベロニカ・ジマー",
               hp: 400000,
               imageno: 9629,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_all, "-", 100, false, 30000, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(800, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "騒黄のタイタン",
               hp: 100000,
               imageno: 2006,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_discharge(5, 3)),
                     s_enemy_attack(250, 5, 5, true)
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