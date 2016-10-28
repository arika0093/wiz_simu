{
   id: "chronicle1_h2",
   name: "中級 偉大なる王の教え",
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
               name: "トーノメスキート",
               hp: 30000,
               imageno: 4531,
               attr: 2,
               spec: 2,
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
               name: "トーノスコレッタ",
               hp: 40000,
               imageno: 4532,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "トーノメスキート",
               hp: 30000,
               imageno: 4531,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "トーノスコレッタ",
               hp: 50000,
               imageno: 4532,
               attr: 2,
               spec: 2,
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
               name: "ベーゼオウゲロッサ",
               hp: 40000,
               imageno: 4522,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 2, 5, 4)/* Warning: 属性要確認： 火属性弱体化100%（3T） */)
                  ],
                  on_move: [
                     s_enemy_attack(375, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "トーノスコレッタ",
               hp: 50000,
               imageno: 4532,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "ベーゼオウゲジャッロ",
               hp: 60000,
               imageno: 4526,
               attr: 2,
               spec: 2,
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
               name: "ベーゼオウゲロッサ",
               hp: 60000,
               imageno: 4522,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ベーゼオウゲジャッロ",
               hp: 60000,
               imageno: 4526,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "トーノスコレッタ",
               hp: 20,
               imageno: 4532,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(800, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "突撃侍従長 アクサナ・コルテ",
               hp: 400000,
               imageno: 9329,
               attr: 2,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_own, "-", 100, false, 30000, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(800, 5, 3, true),
                     s_enemy_attack(800, 5, 3, true),
                     s_enemy_attack(800, 5, 3, true),
                     s_enemy_attack(800, 5, 3, true),
                     s_enemy_attack(800, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ベーゼオウゲジャッロ",
               hp: 100000,
               imageno: 4526,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
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