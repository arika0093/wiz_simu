{
   id: "mareless2_h3",
   name: "上級 内なる炎を意地として",
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
               name: "濁流のごとく押し寄せる夢",
               hp: 40000,
               imageno: 9401,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_noeffect("スコア減少 2000")),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "流れゆく夢",
               hp: 40000,
               imageno: 9400,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "恐怖で青ざめさせる夢",
               hp: 40000,
               imageno: 9393,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 3, true)
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
               name: "恐怖で青ざめさせる夢",
               hp: 40000,
               imageno: 9393,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 6))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "恐怖で青ざめさせる夢",
               hp: 55000,
               imageno: 9393,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "塵芥をまとう夢",
               hp: 35000,
               imageno: 9394,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 3, true)
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
               name: "鮮血にまみれた夢",
               hp: 25000,
               imageno: 9391,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 4, 3))
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "流れゆく夢",
               hp: 50000,
               imageno: 9400,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "濁流のごとく押し寄せる夢",
               hp: 60000,
               imageno: 9401,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true),
                     s_enemy_noeffect("スコア減少 2000")
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
               name: "鮮血にまみれた夢",
               hp: 80000,
               imageno: 9391,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 4, 3))
                  ],
                  on_move: [
                     s_enemy_attack_attrsp(465, 232.5, [0,0,1,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "〈ラウズメア〉解き放つ夢",
               hp: 500000,
               imageno: 9372,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 500, 5, 5)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(2000, 5, 5)
                  ],
                  on_move_angry: [
                     damage_block_own(30000, 3),
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attr_weaken([0,1,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 水属性弱体化50%（3T） */,
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "濁流のごとく押し寄せる夢",
               hp: 200000,
               imageno: 9401,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_noeffect, "-", 100, false, "スコア減少 5000")),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_noeffect("スコア減少 2000")
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
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