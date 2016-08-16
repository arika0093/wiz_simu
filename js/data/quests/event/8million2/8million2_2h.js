{
   id: "8million2_2h",
   name: "禍福級 お金持ちになるまで",
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
               name: "走るキダマ和尚",
               hp: 100000,
               imageno: 6842,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(666.6666666666666, 2, 3, true),
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "爆走キダマ大師",
               hp: 40000,
               imageno: 6843,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_all(10000, 6))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "走るキダマ和尚",
               hp: 100000,
               imageno: 6842,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(666.6666666666666, 2, 3, true),
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
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
               name: "爆走アカダマ大師",
               hp: 25,
               imageno: 6839,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(2500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "走るキダマ和尚",
               hp: 100000,
               imageno: 6842,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(666.6666666666666, 2, 3, true),
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
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
               name: "走るキダマ和尚",
               hp: 30000,
               imageno: 6842,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_all(15000, 11))
                  ],
                  on_move: [
                     s_enemy_attack(2500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "爆走アカダマ大師",
               hp: 5,
               imageno: 6839,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(3500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "光る兎と亀",
               hp: 50000,
               imageno: 6848,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(3, 3)),
                     s_enemy_attack(1500, 5, 1, true)
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
               name: "煌めく兎と亀",
               hp: 100000,
               imageno: 6849,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter(9999, 100))
                  ],
                  on_move: [
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "爆走キダマ大師",
               hp: 200000,
               imageno: 6843,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.8), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "滾る兎と亀",
               hp: 35,
               imageno: 6845,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 4,
                  wait: 4
               }
            }
         ]
      }
   ]
}