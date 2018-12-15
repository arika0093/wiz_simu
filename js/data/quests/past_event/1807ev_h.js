{
   id: "1807ev_h",
   name: "(2018/07)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   panelchainEnable: false,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ダークムエルテ",
               hp: 50000,
               imageno: 12917,
               imageno_prefix: "",
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([0,0,0,0,1], 1, 3))
                  ],
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)
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
               name: "アクアムエルテ",
               hp: 20,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(5, 1)),
                     m_enemy_once(impregnable(2))
                  ],
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)
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
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_discharge(5, 1))
                  ],
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアムエルテ",
               hp: 10000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
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
               name: "サンダームエルテ",
               hp: 20000,
               imageno: 2443,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "アクアムエルテ",
               hp: 30000,
               imageno: 2442,
               imageno_prefix: "",
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダームエルテ",
               hp: 20000,
               imageno: 2443,
               imageno_prefix: "",
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
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
            5
         ],
         enemy: [
            {
               name: "ダークムエルテ",
               hp: 400000,
               imageno: 12917,
               imageno_prefix: "",
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "九夏精霊探訪記 ナナ・クラリィ",
               hp: 1500000,
               imageno: 12864,
               imageno_prefix: "",
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(10, 99)),
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 10, 2)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_recoilAttack(300, 1, [0,0,0,1,0], 10, 5)
                  ],
                  on_angry: [
                     s_enemy_attack(50, 5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 1, 1, true),
                     s_enemy_attack(100, 1, 1, true),
                     s_enemy_attack(100, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ダークムエルテ",
               hp: 400000,
               imageno: 12917,
               imageno_prefix: "",
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ダークムエルテ",
               hp: 400000,
               imageno: 12917,
               imageno_prefix: "",
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)/* nogambits */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ダークムエルテ",
               hp: 400000,
               imageno: 12917,
               imageno_prefix: "",
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_forcedProgress(6))
                  ],
                  on_move: [
                     s_enemy_attack(50, 1, 1, true)
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