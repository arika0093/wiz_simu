{
   id: "darc3_h04",
   name: "封魔級 要塞防衛戦",
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
               name: "精神汚染ドルキマス上等兵",
               hp: 60000,
               imageno: 11355,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "星より降りたる巡航艦",
               hp: 80000,
               imageno: 11361,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(900, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "精神汚染ドルキマス上等兵",
               hp: 60000,
               imageno: 11355,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
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
               name: "精神汚染ドルキマス軍曹",
               hp: 70000,
               imageno: 11356,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "星より降りたる巡航艦",
               hp: 80000,
               imageno: 11361,
               attr: 0,
               spec: 6,
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
               name: "精神汚染ドルキマス軍曹",
               hp: 70000,
               imageno: 11356,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)
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
               name: "星より降りたる巡航艦",
               hp: 80000,
               imageno: 11361,
               attr: 0,
               spec: 6,
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
               name: "星より降りたる戦艦",
               hp: 80000,
               imageno: 11362,
               attr: 0,
               spec: 6,
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
               name: "精神汚染ドルキマス軍曹",
               hp: 60000,
               imageno: 11356,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
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
               name: "星より降りたる戦艦",
               hp: 200000,
               imageno: 11362,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 5)),
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 1, 2)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1400, 5, 1, true),
                     s_enemy_attack(1400, 5, 1, true),
                     s_enemy_attack(1400, 5, 1, true),
                     s_enemy_attack(1400, 5, 1, true),
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "鉄壁提督 エルンスト・バルフェット",
               hp: 850000,
               imageno: 11347,
               attr: 0,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 24000, 5, 1, true)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack_ignoreguard(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir()
                  ],
                  on_move_angry: [
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "精神汚染ドルキマス上等兵",
               hp: 500000,
               imageno: 11355,
               attr: 0,
               spec: 8,
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
      }
   ]
}