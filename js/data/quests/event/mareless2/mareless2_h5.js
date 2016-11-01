{
   id: "mareless2_h5",
   name: "絶級 残響dearless",
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
               name: "赤き血を求める夢",
               hp: 40000,
               imageno: 9390,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "闇にうごめく夢",
               hp: 40000,
               imageno: 9397,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 4, 3))
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
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
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
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
               name: "鮮血にまみれた夢",
               hp: 60000,
               imageno: 9391,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(1000, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "熱く邁進する夢",
               hp: 65000,
               imageno: 9399,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
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
            },
            {
               name: "熱を帯びたる夢",
               hp: 70000,
               imageno: 9398,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(3000, 1, 1, true)
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
               name: "鮮血にまみれた夢",
               hp: 60000,
               imageno: 9391,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ratio, "-", 100, false, 0.9, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "闇にうごめく夢",
               hp: 65000,
               imageno: 9397,
               attr: 4,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 4, 3)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_noeffect("スコア減少 2000")
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤き血を求める夢",
               hp: 70000,
               imageno: 9390,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(attack_counter_dual(700, 6)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 4)/* Warning: 属性要確認： 全属性弱体化50%（3T） */
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "濁流のごとく押し寄せる夢",
               hp: 180000,
               imageno: 9401,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_noeffect, "-", 100, false, "パネル変換")),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  on_angry: [
                     damage_block_all(20000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "〈オルタメア〉世界を変える夢",
               hp: 750000,
               imageno: 9380,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 750)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  on_angry: [
                     attack_counter_dual(1000, 6)
                  ],
                  on_move_angry: [
                     s_enemy_chain_sealed(4),
                     s_enemy_attrguard_all([0,1,0,0,0], 0.25, 4)/* Warning: 属性要確認： 水属性防御25%（3T） */,
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "闇を抱えた夢",
               hp: 150000,
               imageno: 9405,
               attr: 4,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_sealed(3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_noeffect("スコア減少 2000"),
                     s_enemy_noeffect("スコア減少 2000"),
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true)
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