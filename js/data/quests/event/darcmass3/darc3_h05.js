{
   id: "darc3_h05",
   name: "絶級 ホラーツ提督の決断",
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
               name: "思念侵蝕ドルキマス上等兵",
               hp: 60000,
               imageno: 11357,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1400, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "星より流れ落つ戦艦",
               hp: 120000,
               imageno: 11364,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([0,0,1,0,0], 0.25, 0.75, 3))
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
               name: "思念侵蝕ドルキマス軍曹",
               hp: 60000,
               imageno: 11358,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1400, 1, 1, true)
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
               name: "思念侵蝕ドルキマス上等兵",
               hp: 60000,
               imageno: 11357,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "思念侵蝕ドルキマス軍曹",
               hp: 100000,
               imageno: 11358,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5))
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
               name: "星より降りたる戦艦",
               hp: 100000,
               imageno: 11362,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_panelchange([1,0,0,0,0])),
                     s_enemy_attack(333.25, 5, 1, true)
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
               name: "思念侵蝕ドルキマス軍曹",
               hp: 140000,
               imageno: 11358,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(impregnable(2)),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "星より流れ落つ巡航艦",
               hp: 100000,
               imageno: 11363,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_taunt(3))
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
               name: "星より流れ落つ戦艦",
               hp: 140000,
               imageno: 11364,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_poison(2000, 3, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
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
               name: "星より流れ落つ戦艦",
               hp: 700000,
               imageno: 11364,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_all(200000, 99))
                  ],
                  on_move: [
                     s_enemy_attack(1400, 5, 1, true),
                     s_enemy_attack(1400, 5, 1, true),
                     s_enemy_barrier_all(200000, 99)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "忠義の反旗 ホラーツ・アイスラー",
               hp: 1200000,
               imageno: 11351,
               attr: 1,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 10000, 5, 1, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attrreverse(2, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attack(2500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意思崩壊ドルキマス軍曹",
               hp: 400000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(5, 3))
                  ],
                  on_move: [
                     s_enemy_as_sealed(5, 3)
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