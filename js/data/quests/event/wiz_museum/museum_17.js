{
   id: "museum_17",
   name: "17: 空戦のドルキマス軍",
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
               name: "意思崩壊ドルキマス軍曹",
               hp: 63000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([1,0,0,0,0], 15, 75, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意思崩壊ドルキマス軍曹",
               hp: 84000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([1,0,0,0,0], 15, 75, 5))
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
               name: "意思崩壊ドルキマス上等兵",
               hp: 63000,
               imageno: 11359,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([1,0,0,0,0], 15, 75, 5))
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
               name: "異星から飛来した巡航艦",
               hp: 42000,
               imageno: 11365,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "異星から飛来した巡航艦",
               hp: 42000,
               imageno: 11365,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "意思崩壊ドルキマス軍曹",
               hp: 105000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "異星から飛来した戦艦",
               hp: 105000,
               imageno: 11366,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_all(300000, 99))
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
               name: "意思崩壊ドルキマス軍曹",
               hp: 105000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "精神汚染ドルキマス軍曹",
               hp: 63000,
               imageno: 11356,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chainreduce(2)),
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "精神汚染ドルキマス軍曹",
               hp: 63000,
               imageno: 11356,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(3, 3)),
                     s_enemy_attack(1000, 1, 1, true)
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
               name: "意思崩壊ドルキマス上等兵",
               hp: 105000,
               imageno: 11359,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意思崩壊ドルキマス軍曹",
               hp: 126000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 3, 3, true),
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意思崩壊ドルキマス上等兵",
               hp: 105000,
               imageno: 11359,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "異星から飛来した戦艦",
               hp: 84000,
               imageno: 11366,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_all(5, 99))
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
               name: "異星から飛来した戦艦",
               hp: 84000,
               imageno: 11366,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,0,0,0,0], 0.25, 4)),
                     s_enemy_heal_all(0.3),
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
               name: "異星から飛来した巡航艦",
               hp: 32,
               imageno: 11365,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_cursed(1000, 3, 2, 0)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "古代魔法同化ゲルトルーデ・リプヒム",
               hp: 1890000,
               imageno: 11354,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 10500, 5, 1, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_attrIncreaseGuard_own([1,0,0,0,0], 25, 75, 5),
                     s_enemy_resurrection(0.5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "異星から飛来した戦艦",
               hp: 630000,
               imageno: 11366,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(50000, 4)),
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir_ex(1)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意思崩壊ドルキマス軍曹",
               hp: 420000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(6000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "意思崩壊ドルキマス軍曹",
               hp: 420000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(6000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            }
         ]
      }
   ]
}