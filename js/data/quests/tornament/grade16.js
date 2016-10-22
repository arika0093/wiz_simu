{
   id: "grade16",
   name: "陸式(トーナメント16段)",
   category: "tornament",
   category_jp: "通常トーナメント",
   overlap: false,
   aprnum: 5,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "紅鐵機鎧兵",
               hp: 25000,
               imageno: 8284,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フレアスティンガー",
               hp: 30000,
               imageno: 8294,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "紅鐵機鎧兵",
               hp: 25000,
               imageno: 8284,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 1, 1, true)/*nogambits*/
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
               name: "魔氷のハイ・マジクラート",
               hp: 20000,
               imageno: 8326,
               attr: 1,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フレアスティンガー",
               hp: 30000,
               imageno: 8294,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([0,1,0,0,0], 0.25, 4)/* Warning: 属性要確認： 水属性防御25%（3T） */),
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フレアスティンガー",
               hp: 30000,
               imageno: 8294,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
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
               name: "業炎のハイ・マジクラート",
               hp: 45000,
               imageno: 8324,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 2, 3))
                  ],
                  on_move: [
                     s_enemy_attack(300, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光輝のハイ・マジクラート",
               hp: 30000,
               imageno: 8330,
               attr: 3,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 2, 3))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "業炎のハイ・マジクラート",
               hp: 45000,
               imageno: 8324,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(600, 5, 3)),
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,1,0], 2, 3))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "紅鐵機鎧兵",
               hp: 60000,
               imageno: 8284,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フレアスティンガー",
               hp: 65000,
               imageno: 8294,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(5, 1))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "紅鐵機鎧兵",
               hp: 60000,
               imageno: 8284,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
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
               name: "グリムン・フレムン",
               hp: 180000,
               imageno: 8334,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(500, 4))
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "気高き意思の継承 ルベリ・クラクス",
               hp: 400000,
               imageno: 8282,
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 2)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(350, 1, 1, true),
                     s_enemy_attack(350, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(350, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "業炎のハイ・マジクラート",
               hp: 160000,
               imageno: 8324,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(800, 1, 1, true),
                     s_enemy_attack(800, 1, 1, true)
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