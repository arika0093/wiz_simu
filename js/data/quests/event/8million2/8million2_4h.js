{
   id: "8million2_4h",
   name: "競争級 どこまでも走る",
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
               name: "爆走アカダマ大師",
               hp: 150000,
               imageno: 6839,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(11)),
                     s_enemy_chain_break()
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 2
               }
            },
            {
               name: "走るアカダマ和尚",
               hp: 200000,
               imageno: 6838,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 100)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true),
                     attack_counter_dual(700, 100)
                  ],
                  on_move_angry: [
                     m_enemy_once(damage_block_all(6000, 4)),
                     s_enemy_attack(500, 3, 5, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
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
               name: "燃える兎と亀",
               hp: 150000,
               imageno: 6844,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 10, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "滾る兎と亀",
               hp: 200000,
               imageno: 6845,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 10, true)
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
               name: "走るアカダマ和尚",
               hp: 150000,
               imageno: 6838,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(750, 4500, 8250)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "走るアカダマ和尚",
               hp: 150000,
               imageno: 6838,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(750, 4500, 8250)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "走るアカダマ和尚",
               hp: 150000,
               imageno: 6838,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(750, 4500, 8250)
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
               name: "最速の境地へ テルイ・フィオン",
               hp: 500000,
               imageno: 6830,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_break, "-", 100, false))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 10, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "燃える兎と亀",
               hp: 300000,
               imageno: 6844,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_sealed, "-", 100, false, 11))
                  ],
                  on_move: [
                     s_enemy_deathlimit(1, 3)
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