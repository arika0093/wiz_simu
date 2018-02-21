{
   id: "outlander_h5",
   name: "絶級 天も裂けよと",
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
               name: "ライトニングレッサーデーモン",
               hp: 100000,
               imageno: 12198,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアスイートガーダー",
               hp: 40000,
               imageno: 12199,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダースイートガーダー",
               hp: 100000,
               imageno: 12203,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/* nogambits */
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
               name: "ライトニングスイートガーダー",
               hp: 100000,
               imageno: 12204,
               attr: 2,
               spec: 6,
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
               name: "ライトニングレッサーデーモン",
               hp: 150000,
               imageno: 12198,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーレッサーデーモン",
               hp: 100000,
               imageno: 12197,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
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
               name: "ブレイズレッサーデーモン",
               hp: 100000,
               imageno: 12194,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     impregnable(3),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーレッサーデーモン",
               hp: 200000,
               imageno: 12197,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_all(200000, 99))
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
               name: "サンダースイートガーダー",
               hp: 150000,
               imageno: 12203,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,1,0,0], 0.5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
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
               name: "ライトニングレッサーデーモン",
               hp: 200000,
               imageno: 12198,
               attr: 2,
               spec: 2,
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
               name: "忠勇の神装機 ヴィティ・ラブルスカ",
               hp: 4200000,
               imageno: 12190,
               attr: 2,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     m_enemy_once(s_enemy_barrier_own(200000, 99)),
                     damage_switch(s_enemy_when_hpdown(0.9), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_recoilAttack(2004, 5, [1,0,0,0,0], 4, 99)
                  ],
                  on_move_angry: [
                     s_enemy_recoilAttack(4008, 5, [1,0,0,0,0], 1, 99),
                     s_enemy_attack(800, 3, 3, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_recoilAttack(4008, 5, [1,0,0,0,0], 4, 99),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_barrier_own(500000, 99)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダースイートガーダー",
               hp: 200000,
               imageno: 12203,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/* nogambits */
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