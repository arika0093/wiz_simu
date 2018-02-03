{
   id: "1712ev_h",
   name: "(2017/12)イベントトーナメント 覇級",
   desc: "",
   overlap: false,
   aprnum: 5,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "祝祭のサンダーリブラ",
               hp: 30000,
               imageno: 11814,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "聖夜のサンダーキャンサー",
               hp: 50000,
               imageno: 11808,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "祝祭のサンダーリブラ",
               hp: 30000,
               imageno: 11814,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
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
               name: "聖夜のダークキャンサー",
               hp: 30000,
               imageno: 11816,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "祝祭のサンダーリブラ",
               hp: 50000,
               imageno: 11814,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "祝祭のレッドリブラ",
               hp: 5000,
               imageno: 11810,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([1,0,0,0,0], 1, 2))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
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
               name: "祝祭のサンダーリブラ",
               hp: 50000,
               imageno: 11814,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([0,0,1,0,0], 1, 4))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "聖夜のダークキャンサー",
               hp: 30000,
               imageno: 11816,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "祝祭のレッドリブラ",
               hp: 5000,
               imageno: 11810,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([1,0,0,0,0], 1, 2))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
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
               name: "聖夜のダークキャンサー",
               hp: 30000,
               imageno: 11816,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "聖夜のブライトキャンサー",
               hp: 30000,
               imageno: 11815,
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 1, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "祝祭のスノーリブラ",
               hp: 50000,
               imageno: 11812,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 1, 1))
                  ],
                  on_move: [
                     s_enemy_attack(33.25, 5, 1, true),
                     s_enemy_attack(33.25, 5, 1, true)
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
               name: "聖夜のブライトキャンサー",
               hp: 400000,
               imageno: 11815,
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 1, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "いい歳して覚醒 ドルティ・ローム",
               hp: 900000,
               imageno: 11911,
               attr: 2,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([0,0,1,0,0], 1, 4))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "祝祭のレッドリブラ",
               hp: 50000,
               imageno: 11810,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 1, 1))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
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