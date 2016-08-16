{
   id: "8million2_3h",
   name: "最上級 れえすの行方は",
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
               name: "滅却する兎と亀",
               hp: 100000,
               imageno: 6847,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(5000, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 2
               }
            },
            {
               name: "冷たい兎と亀",
               hp: 50000,
               imageno: 6846,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_chain_break()
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(700, 5, 1, true),
                     s_enemy_as_sealed(5, 3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "冷たい兎と亀",
               hp: 60000,
               imageno: 6846,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true)
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
               name: "光る兎と亀",
               hp: 65000,
               imageno: 6848,
               attr: 2,
               spec: 1,
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
               name: "爆走アオダマ大師",
               hp: 60000,
               imageno: 6841,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_poison(300, 5, 10)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_deadgrudge(1500, 3000, 4500)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "光る兎と亀",
               hp: 65000,
               imageno: 6848,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
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
               name: "走るアオダマ和尚",
               hp: 70000,
               imageno: 6840,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(900, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "冷たい兎と亀",
               hp: 24,
               imageno: 6846,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            },
            {
               name: "走るアオダマ和尚",
               hp: 70000,
               imageno: 6840,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(900, 1, 1, true)
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
               name: "滅却する兎と亀",
               hp: 70000,
               imageno: 6847,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1250, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "酒車の狸神 ヒャクヤク・シュクスイ",
               hp: 300000,
               imageno: 6826,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter(9999, 11)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true),
                     skill_counter(9999, 11)
                  ],
                  on_move_angry: [
                     m_enemy_once(s_enemy_ss_sealed(3, 4)),
                     s_enemy_attack(500, 3, 5, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "滅却する兎と亀",
               hp: 150000,
               imageno: 6847,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_attack(500, 1, 1, true),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     attack_counter(800, 100)
                  ],
                  on_move_angry: [
                     s_enemy_attack(700, 1, 1, true),
                     s_enemy_heal_all(0.1)
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