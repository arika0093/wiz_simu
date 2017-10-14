{
   id: "darc3_h02",
   name: "中級 フェルゼン上空戦",
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
               name: "意思崩壊ドルキマス上等兵",
               hp: 40000,
               imageno: 11359,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "異星から飛来した巡航艦",
               hp: 10,
               imageno: 11365,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意思崩壊ドルキマス上等兵",
               hp: 40000,
               imageno: 11359,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
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
               name: "異星から飛来した巡航艦",
               hp: 10,
               imageno: 11365,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "異星から飛来した巡航艦",
               hp: 10,
               imageno: 11365,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意思崩壊ドルキマス上等兵",
               hp: 40000,
               imageno: 11359,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
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
               name: "意思崩壊ドルキマス軍曹",
               hp: 45000,
               imageno: 11360,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "異星から飛来した戦艦",
               hp: 15,
               imageno: 11366,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "異星から飛来した戦艦",
               hp: 15,
               imageno: 11366,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
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
               name: "異星から飛来した戦艦",
               hp: 25,
               imageno: 11366,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_deathlimit(5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ガライド軍中将 アクロイス・リンデ",
               hp: 450000,
               imageno: 11339,
               attr: 2,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 5, true),
                     s_enemy_attack(225, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "異星から飛来した戦艦",
               hp: 20,
               imageno: 11366,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
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