{
   id: "itazuramegami1_h5",
   name: "絶域級 戦いを嗜む剣",
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
               name: "黄のタイタン",
               hp: 60000,
               imageno: 2005,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "瑠璃のタイタン",
               hp: 30000,
               imageno: 2004,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(325, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤のタイタン",
               hp: 40000,
               imageno: 2001,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 1, 1, true)
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
               name: "黄のタイタン",
               hp: 100000,
               imageno: 2005,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 2, 3)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "紅緋のタイタン",
               hp: 100000,
               imageno: 2002,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_continue_damage(3, 500, 500)),
                     s_enemy_attack(500, 5, 1, true)
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
                     s_enemy_attack(325, 5, 1, true)
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
               name: "青のタイタン",
               hp: 60000,
               imageno: 2003,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(325, 5, 1, true)
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
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "紅緋のタイタン",
               hp: 70000,
               imageno: 2002,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 500, 500))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "静心の弓弦 イングリット・レイ",
               hp: 100000,
               imageno: 9631,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "奮迅剣神 ライナー・バルハウス",
               hp: 700000,
               imageno: 9632,
               attr: 2,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 2000, 2000)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([1,0,0,0,0], 2, 5, 4)/*!*/,
                     s_enemy_attr_absorb([0,0,1,0,0], 2, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "不屈の護神 バルバラ・フォス",
               hp: 150000,
               imageno: 9630,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(damage_block_own(30000, 4)),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true)
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