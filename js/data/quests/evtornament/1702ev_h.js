{
	id: "1702ev_h",
	name: "(2017/02)イベントトーナメント 覇級",
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
               name: "炎のアングリーマフィン",
               hp: 20000,
               imageno: 1774,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "マフィンノワール",
               hp: 20000,
               imageno: 10081,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "炎のアングリーマフィン",
               hp: 10000,
               imageno: 1774,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 1))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
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
               name: "マフィンノワール",
               hp: 25000,
               imageno: 10081,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤のモンスターケーキ",
               hp: 25000,
               imageno: 1708,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "マフィンノワール",
               hp: 25000,
               imageno: 10081,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 3))
                  ],
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
            3
         ],
         enemy: [
            {
               name: "稲妻のアングリーマフィン",
               hp: 22000,
               imageno: 2139,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(66.75, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "深紅のモンスターケーキ",
               hp: 30000,
               imageno: 1709,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 1))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "稲妻のアングリーマフィン",
               hp: 22000,
               imageno: 2139,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(66.75, 5, 1, true)/*nogambits*/
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
               name: "深紅のモンスターケーキ",
               hp: 65000,
               imageno: 1709,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "炎のアングリーマフィン",
               hp: 150000,
               imageno: 1774,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(5, 3)),
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "深紅のモンスターケーキ",
               hp: 65000,
               imageno: 1709,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
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
               name: "灼熱のアングリーマフィン",
               hp: 250000,
               imageno: 1775,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 2))
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "奢靡を極めし悪虐 ムウマ・ホルスト",
               hp: 700000,
               imageno: 10053,
               attr: 0,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.25, 5, 4)/* Warning: 属性要確認： 火属性弱体化25%（3T） */),
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(300, 5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 1, true),
                     s_enemy_attack(300, 5, 1, true),
                     s_enemy_attack(300, 5, 1, true),
                     s_enemy_attack(300, 5, 1, true),
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "愛は悪魔の掌上 シビィ・サレルノ",
               hp: 280000,
               imageno: 10048,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 3, 2))
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)
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