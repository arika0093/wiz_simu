{
   id: "8million2_5h",
   name: "誤字神級 神様の戦い",
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
               name: "爆走キダマ大師",
               hp: 100000,
               imageno: 6843,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(750, 4500, 8250)
                  ],
                  atrandom: false,
                  turn: 5,
                  wait: 2
               }
            },
            {
               name: "爆走キダマ大師",
               hp: 100000,
               imageno: 6843,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(750, 4500, 8250)
                  ],
                  atrandom: false,
                  turn: 5,
                  wait: 2
               }
            },
            {
               name: "爆走キダマ大師",
               hp: 100000,
               imageno: 6843,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_deadgrudge(750, 4500, 8250)
                  ],
                  atrandom: false,
                  turn: 5,
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
               name: "爆走キダマ大師",
               hp: 49995,
               imageno: 6843,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_all, "-", 100, false, 50000, 11))
                  ],
                  on_move: [
                     s_enemy_attack(540, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "走るキダマ和尚",
               hp: 49995,
               imageno: 6842,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_all(30000, 6))
                  ],
                  on_move: [
                     s_enemy_attack(320, 3, 5, true)
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
               name: "煌めく兎と亀",
               hp: 5400,
               imageno: 6849,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_all_sealed(5, 3))
                  ],
                  on_move: [
                     s_enemy_deathlimit(1, 2),
                     s_enemy_all_sealed(5, 3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "爆走キダマ大師",
               hp: 5400,
               imageno: 6843,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_sealed(11))
                  ],
                  on_move: [
                     s_enemy_discharge(5, 15),
                     s_enemy_chain_sealed(11)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光る兎と亀",
               hp: 5400,
               imageno: 6848,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(700, 5, 6))
                  ],
                  on_move: [
                     s_enemy_chain_break(),
                     s_enemy_poison(700, 5, 6)
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
               name: "爆走キダマ大師",
               hp: 60000,
               imageno: 6843,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_own, "-", 100, false, 50000, 11))
                  ],
                  on_move: [
                     s_enemy_attack(540, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "全てをこの手に スクナ・フルクマ",
               hp: 60000,
               imageno: 6834,
               attr: 2,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 6))
                  ],
                  on_move: [
                     s_enemy_attack(2500, 1, 1, true)
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