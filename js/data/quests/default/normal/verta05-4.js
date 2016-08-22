{
   id: "verta05-4",
   name: "ヴェルタ5-4 言の葉の王",
   desc: "ノーマルクエスト",
   overlap: false,
   aprnum: 4,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "青い灯火 シャンデリッパー",
               hp: 45000,
               imageno: 7175,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)/*case2*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "刺激的な本 ザップテイル",
               hp: 30000,
               imageno: 7153,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "青い灯火 シャンデリッパー",
               hp: 45000,
               imageno: 7175,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 1, 1, true)/*case2*/
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
               name: "青い灯火 シャンデリッパー",
               hp: 25,
               imageno: 7175,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "冷たい本 ザップテイル",
               hp: 60000,
               imageno: 7151,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_healreverse, "ゾンビ(5体)", 100, false, 0.5, 5))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_poison(1000, 5, 4)),
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "青い灯火 シャンデリッパー",
               hp: 25,
               imageno: 7175,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
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
               name: "青い灯火 シャンデリッパー",
               hp: 60000,
               imageno: 7175,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,1,0,0], 0.25, 5)/* Warning: 属性要確認： 雷属性防御25%（4T） */)
                  ],
                  on_move: [
                     s_enemy_attr_weaken([0,1,0,0,0], 1.25, 5, 4)/* Warning: 属性要確認： 水属性弱体化25%（3T） */,
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "冷たい本 ザップテイル",
               hp: 50000,
               imageno: 7151,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 2))
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
            4
         ],
         enemy: [
            {
               name: "橙炎の灯火 シャンデリッパー",
               hp: 90000,
               imageno: 7178,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_break())
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
               name: "言の葉の王 エリクラン",
               hp: 185000,
               imageno: 7194,
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_healreverse, "ゾンビ(5体)", 100, false, 0.5, 5)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attrguard_all([0,0,1,0,0], 0.5, 5)/* Warning: 属性要確認： 雷属性防御50%（4T） */
                  ],
                  on_move_angry: [
                     s_enemy_attrguard_all([0,0,1,0,0], 0.5, 5)/* Warning: 属性要確認： 雷属性防御50%（4T） */,
                     s_enemy_healreverse(0.5, 5),
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attack(400, 3, 5, true),
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "燃え盛る灯火 シャンデリッパー",
               hp: 40000,
               imageno: 7174,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,1,0,0], 0.5, 5)/* Warning: 属性要確認： 雷属性防御50%（4T） */)
                  ],
                  on_move: [
                     m_enemy_once(attack_counter_dual(700, 6)),
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