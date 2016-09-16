{
   id: "darcmass2_h3",
   name: "上級 空の迷い路",
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
               name: "ドルキマス軍一等兵",
               hp: 60000,
               imageno: 9069,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ドルキマス軍上等兵",
               hp: 60000,
               imageno: 9070,
               attr: 0,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_chain_sealed(4),
                     s_enemy_attack(300, 3, 5, true)
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
               name: "防衛戦艦",
               hp: 50000,
               imageno: 9075,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_chain_sealed(4),
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "ドルキマス軍上等空兵",
               hp: 30000,
               imageno: 9072,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ハイリヒベルク麾下戦艦",
               hp: 50000,
               imageno: 9076,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
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
            3
         ],
         enemy: [
            {
               name: "ドルキマス軍二等空兵",
               hp: 40000,
               imageno: 9071,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_own, "-", 100, false, 10000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "防衛戦艦",
               hp: 100000,
               imageno: 9075,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ドルキマス軍上等空兵",
               hp: 40000,
               imageno: 9072,
               attr: 1,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_chain_sealed(4),
                     s_enemy_attack(150, 3, 5, true)
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
            4
         ],
         enemy: [
            {
               name: "ハイリヒベルク麾下戦艦",
               hp: 250000,
               imageno: 9076,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_break()),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "天空山の主 フィルマメント",
               hp: 550000,
               imageno: 9050,
               attr: 0,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_continue_damage(3, 1000, 1000)),
                     damage_switch(s_enemy_when_hpdown(0.3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  on_angry: [
                     damage_block_own(20000, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ドルキマス軍上等兵",
               hp: 200000,
               imageno: 9070,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true)
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