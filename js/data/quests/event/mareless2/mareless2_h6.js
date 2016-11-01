{
   id: "mareless2_h6",
   name: "覇級 ROADMARE",
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
               name: "闇にうごめく夢",
               hp: 40000,
               imageno: 9397,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "恐怖で青ざめさせる夢",
               hp: 50000,
               imageno: 9393,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_ss_sealed(5, 3)),
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
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
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
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
               name: "闇にうごめく夢",
               hp: 70000,
               imageno: 9397,
               attr: 4,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.5, 5, true))
                  ],
                  on_move: [
                     s_enemy_noeffect("スコア減少 2000"),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "闇にうごめく夢",
               hp: 50000,
               imageno: 9397,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/* Warning: 属性要確認： 全属性防御25%（3T） */)
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "闇にうごめく夢",
               hp: 50000,
               imageno: 9397,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
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
               name: "闇にうごめく夢",
               hp: 90000,
               imageno: 9397,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_sealed(4))
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
               name: "闇を抱えた夢",
               hp: 70000,
               imageno: 9405,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "闇にうごめく夢",
               hp: 70000,
               imageno: 9397,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 4)/* Warning: 属性要確認： 全属性弱体化50%（3T） */),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
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
               name: "闇を抱えた夢",
               hp: 160000,
               imageno: 9405,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(attack_counter_dual(1000, 4)),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/* Warning: 属性要確認： 全属性防御25%（3T） */
                  ],
                  on_move_angry: [
                     s_enemy_attack(625, 5, 1, true),
                     s_enemy_attack(625, 5, 1, true),
                     s_enemy_attack(625, 5, 1, true),
                     s_enemy_attack(625, 5, 1, true),
                     s_enemy_attack(625, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "〈ロードメア〉みなを導く夢",
               hp: 750000,
               imageno: 9383,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1200, 5, 5, true)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_cursed(1000, 5, 3)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_chain_sealed(4),
                     damage_block_own(15000, 4),
                     s_enemy_poison(2000, 5, 3),
                     s_enemy_attack(1000, 5, 1, true)
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
                     m_enemy_once(skill_counter_func(s_enemy_noeffect, "-", 100, false, "パネルチェンジ")),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(625, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(625, 5, 1, true),
                     s_enemy_noeffect("スコア減少 2000"),
                     s_enemy_attack(625, 5, 1, true),
                     s_enemy_noeffect("スコア減少 2000"),
                     s_enemy_attack(625, 5, 1, true)
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