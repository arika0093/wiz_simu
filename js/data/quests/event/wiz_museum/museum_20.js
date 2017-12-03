{
   id: "museum_20",
   name: "20: 黒猫チャレンジ2",
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
               name: "アイスガンフィーンド",
               hp: 200000,
               imageno: 10214,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エレクトロガンフィーンド",
               hp: 150000,
               imageno: 10217,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([0,0,1,0,0], 15, 75, 100))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アイスガンフィーンド",
               hp: 200000,
               imageno: 10214,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
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
               name: "エレクトロガンフィーンド",
               hp: 150000,
               imageno: 10217,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([0,0,1,0,0], 15, 75, 100))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーガンフィーンド",
               hp: 150000,
               imageno: 10216,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーガンフィーンド",
               hp: 150000,
               imageno: 10216,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
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
               name: "アイスガンフィーンド",
               hp: 250000,
               imageno: 10214,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(50000, 11))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フリーズガンフィーンド",
               hp: 250000,
               imageno: 10215,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アイスガンフィーンド",
               hp: 250000,
               imageno: 10214,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
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
               name: "エレクトロガンフィーンド",
               hp: 500000,
               imageno: 10217,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attrguard_all, "-", 100, false, [1,1,1,1,1], 0.5, 100))
                  ],
                  on_move: [
                     s_enemy_heal_all(0.05),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Dual Rhythm ラズリィ＆ダズリィ",
               hp: 1800000,
               imageno: 10208,
               attr: 1,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 4, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 5, true),
                     s_enemy_attack(1000, 5, 5, true),
                     s_enemy_attack(1000, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 4,
                  wait: 4
               }
            },
            {
               name: "サンダーガンフィーンド",
               hp: 500000,
               imageno: 10216,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attrIncreaseGuard_all, "-", 100, false, [0,0,1,0,0], 25, 75, 100))
                  ],
                  on_move: [
                     s_enemy_heal_all(0.05),
                     s_enemy_attack(250, 5, 1, true)
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