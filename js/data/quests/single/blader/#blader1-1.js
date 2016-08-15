{
   id: "blader1-1",
   name: "Demon’s Blader 焔獄級",
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
               hp: 12000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 12000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 2, 2, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 9000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
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
               name: "エンシャント・キマイラ",
               hp: 30000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ヘルファイアドラゴン",
               hp: 40000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_all_sealed(3, 4)/* Warning: ターン数を確認してください： 3×3封印 */),
                     s_enemy_attack(300, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 3
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
               hp: 45000,
               imageno: 2772,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(900, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
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
                     s_enemy_force_reservoir(),
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
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
                     s_enemy_attack_ratio(0.8, 5, true)
                  ],
                  atrandom: false,
                  turn: 4,
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
               name: "ヘルファイアドラゴン",
               hp: 120000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attr_weaken([1,0,0,0,0], 2, 3, 3)/* Warning: 属性要確認： 弱体化（バルログ火） */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 3
               }
            },
            {
               name: "奈落の覇帝 アスモデウス・トビト",
               hp: 180000,
               imageno: 2767,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 4, 5, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 30000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_all_sealed(5, 2)/* Warning: ターン数を確認してください： 5×1T封印 */,
                     s_enemy_attack(325, 1, 1, true)/*case2*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            }
         ]
      }
   ]
}