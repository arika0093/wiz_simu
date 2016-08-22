{
   id: "blader3-1",
   name: "Heretic Blader 狂月級",
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
               name: "イクリプスジェム",
               hp: 30000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ルナスケルトン",
               hp: 17000,
               imageno: 3473,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([0,1,1,0,0], 0.75, 6)/* Warning: 属性要確認： 水雷75%防御 */),
                     s_enemy_attack(600, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "イクリプスジェム",
               hp: 30000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
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
               name: "クレセントシャドウ",
               hp: 35000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter(1200, 100))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ルナスケルトン",
               hp: 40000,
               imageno: 3473,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 4,
                  wait: 4
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
               name: "モーントヴォルフ",
               hp: 35000,
               imageno: 3371,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1350, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 4,
                  wait: 3
               }
            },
            {
               name: "ルナスケルトン",
               hp: 30000,
               imageno: 3473,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_heal_all(0.1)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 2
               }
            },
            {
               name: "クレセントシャドウ",
               hp: 30000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_all_sealed(5, 2)/* Warning: ターン数を確認してください： 5×1T封印 */
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
               name: "イクリプスジェム",
               hp: 28000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2200, 1, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "月を墜とす牙 リュコス・ヴォーダン",
               hp: 155000,
               imageno: 3171,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_heal_all(0.05),
                     s_enemy_attack(1000, 1, 1, true)/* Error: 未定義のActionです： 7 */,
                     s_enemy_attack(1000, 1, 1, true)/* Error: 未定義のActionです： 6 */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ルナスケルトン",
               hp: 55000,
               imageno: 3473,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attrguard_all([0,0,1,0,0], 0.5, 6)/* Warning: 属性要確認： 雷防御 */
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 2
               }
            }
         ]
      }
   ]
}