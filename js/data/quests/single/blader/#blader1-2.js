{
   id: "blader1-2",
   name: "Demon’s Blader 殲炎級",
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
               name: "ディバウアーゴーレム",
               hp: 90000,
               imageno: 2771,
               attr: 0,
               spec: 7,
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
               name: "ヘルファイアドラゴン",
               hp: 30000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 2, 4, true),
                     s_enemy_chain_break()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ディバウアーゴーレム",
               hp: 45000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ratio(0.9, 5, true)
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
               name: "ディバウアーゴーレム",
               hp: 100000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack/* Error: 未定義のActionです： 9 */, "5回連続攻撃", 100, false, 300, 3, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 150000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_ss_sealed(3, 4),
                     s_enemy_as_sealed(3, 6),
                     s_enemy_ss_sealed(3, 4)/* Error: 未定義のActionです： 7 */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 100000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(6000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 5, true)
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
            3
         ],
         enemy: [
            {
               name: "ヴォルテックスドラゴン",
               hp: 120000,
               imageno: 2772,
               attr: 2,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(2025, 5, 1, true),
                     s_enemy_force_reservoir()/* Info: 先制行動を再使用します */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 25,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(4500, 1, 1, true)
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
               name: "ヘルファイアドラゴン",
               hp: 100000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(8000, 5))
                  ],
                  on_move: [
                     damage_block_own(8000, 5)/* Error: 未定義のActionです： 7 */,
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "極獄の殲炎アスモデウス・トビト",
               hp: 600000,
               imageno: 6113,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 封印5体×2T */, "2ターンの間、全体の攻撃を封印する", 100, false, 5, 3))
                  ],
                  on_move: [
                     s_enemy_deathlimit(5, 3),
                     skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 封印5体×2T */, "2ターンの間、全体の攻撃を封印する", 100, false, 5, 3),
                     s_enemy_attack(650, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 100000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_ss_sealed(3, 4))
                  ],
                  on_move: [
                     s_enemy_poison(1200, 5, 4),
                     s_enemy_ss_sealed(3, 4)/* Error: 未定義のActionです： 6 */,
                     s_enemy_attack(100, 3, 5, true)
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