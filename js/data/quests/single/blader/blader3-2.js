{
   id: "blader3-2",
   name: "Heretic Blader 月墜級",
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
               name: "クレセントシャドウ",
               hp: 80000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true)/* Error: 未定義のActionです： 6 */
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 1
               }
            },
            {
               name: "イクリプスジェム",
               hp: 50000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,1,0,0], 0.5, 4)/* Warning: 属性要確認： 雷軽減50%×3T  */),
                     s_enemy_chain_break()
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "クレセントシャドウ",
               hp: 80000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true)/* Error: 未定義のActionです： 6 */
                  ],
                  atrandom: false,
                  turn: 3,
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
               name: "クレセントシャドウ",
               hp: 150000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "イクリプスジェム",
               hp: 100000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 3×3封印 */, "3体を3T封印", 100, false, 3, 4))
                  ],
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
               name: "クレセントシャドウ",
               hp: 120000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 5))
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "イクリプスジェム",
               hp: 60000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 3×3封印 */, "3体を3T封印", 100, false, 3, 4))
                  ],
                  on_move: [
                     s_enemy_attack(800, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "イクリプスジェム",
               hp: 60000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed/* Warning: ターン数を確認してください： 3×3封印 */, "3体を3T封印", 100, false, 3, 4))
                  ],
                  on_move: [
                     s_enemy_attack(800, 3, 5, true)
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
            4
         ],
         enemy: [
            {
               name: "イクリプスジェム",
               hp: 300000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "墜月咆吼 リュコス・ヴォーダン",
               hp: 700000,
               imageno: 6112,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "3体に5回連続攻撃", 100, false, 714.2857142857143, 3, 7, true))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 3, 5, true)
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