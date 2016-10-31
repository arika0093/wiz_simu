{
   id: "mareless2_h2",
   name: "中級 取り戻す力",
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
               name: "熱く邁進する夢",
               hp: 35000,
               imageno: 9399,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_noeffect("スコア減少 2000"),
                     s_enemy_attack(300, 5, 4, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "赤き血を求める夢",
               hp: 40000,
               imageno: 9390,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "鮮血にまみれた夢",
               hp: 35000,
               imageno: 9391,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
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
               name: "赤き血を求める夢",
               hp: 40000,
               imageno: 9390,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(damage_block_all(15000, 4)),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "鮮血にまみれた夢",
               hp: 40000,
               imageno: 9391,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 3)/* Warning: 属性要確認： 火属性弱体化50%（2T） */)
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "赤き血を求める夢",
               hp: 40000,
               imageno: 9390,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(3000, 5, 1, true)
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
               name: "熱を帯びたる夢",
               hp: 40000,
               imageno: 9398,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attr_weaken/* Warning: 属性要確認： 全属性弱体化100%（3T） */, "-", 100, false, [1,1,1,1,1], 2, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "熱を帯びたる夢",
               hp: 25,
               imageno: 9398,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(1000, 5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 1, 1, true),
                     s_enemy_attack(2000, 1, 1, true),
                     s_enemy_attack(2000, 1, 1, true),
                     s_enemy_attack(2000, 1, 1, true),
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "鮮血にまみれた夢",
               hp: 50000,
               imageno: 9391,
               attr: 0,
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
            }
         ]
      },
      {
         appearance: [
            4
         ],
         enemy: [
            {
               name: "熱を帯びたる夢",
               hp: 180000,
               imageno: 9398,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     m_enemy_once(attack_counter_dual(700, 6)),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "〈ラスティメア〉取り戻す夢",
               hp: 400000,
               imageno: 9368,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 4000, 5, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "熱く邁進する夢",
               hp: 160000,
               imageno: 9399,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_noeffect, "スコア減少 5000", 100, false, "スコア減少 5000"))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
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