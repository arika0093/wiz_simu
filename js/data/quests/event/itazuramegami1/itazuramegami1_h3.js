{
   id: "itazuramegami1_h3",
   name: "上級 堅牢な盾",
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
               name: "火炎のマンティコア",
               hp: 50000,
               imageno: 1995,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤のタイタン",
               hp: 50000,
               imageno: 2001,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火炎のマンティコア",
               hp: 50000,
               imageno: 1995,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
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
               name: "水面のマンティコア",
               hp: 50000,
               imageno: 1997,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暴焔のマンティコア",
               hp: 50000,
               imageno: 1996,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "水面のマンティコア",
               hp: 50000,
               imageno: 1997,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 2, true)
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
               name: "暴焔のマンティコア",
               hp: 50000,
               imageno: 1996,
               attr: 0,
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
               name: "暴焔のマンティコア",
               hp: 80000,
               imageno: 1996,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([0,1,0,0,0], 0.5, 4)/*!*/),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤のタイタン",
               hp: 50000,
               imageno: 2001,
               attr: 0,
               spec: 5,
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
            4
         ],
         enemy: [
            {
               name: "紅緋のタイタン",
               hp: 150000,
               imageno: 2002,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 3)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "不屈の護神 バルバラ・フォス",
               hp: 500000,
               imageno: 9630,
               attr: 0,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1000, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "瑠璃のタイタン",
               hp: 100000,
               imageno: 2004,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 3, 3)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true)
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