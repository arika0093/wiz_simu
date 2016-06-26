{
   id: "blader3-3",
   name: "Heretic Blader 覇級",
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
               name: "イクリプスジェム",
               hp: 80000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attack(400, 3, 5, true)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "クレセントシャドウ",
               hp: 45000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([0,0,1,0,0], 0.5, 4)/* Warning: 属性要確認： 雷属性防御50%（3T） */),
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "イクリプスジェム",
               hp: 80000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attack(400, 3, 5, true)),
                     s_enemy_attack(1000, 5, 1, true)
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
            2
         ],
         enemy: [
            {
               name: "イクリプスジェム",
               hp: 200000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(450, 3, 5, true),
                     s_enemy_attack(450, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "クレセントシャドウ",
               hp: 150000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 1500, 1500)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "イクリプスジェム",
               hp: 200000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(450, 3, 5, true),
                     s_enemy_attack(450, 3, 5, true)
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
               name: "クレセントシャドウ",
               hp: 150000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(1)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 3, 5, true),
                     s_enemy_attack(600, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "イクリプスジェム",
               hp: 90000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 1000, 1000))
                  ],
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "イクリプスジェム",
               hp: 90000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
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
               name: "イクリプスジェム",
               hp: 400000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 3, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_after_turn(5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(3, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 5, true),
                     s_enemy_attack(1200, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "墜月咆吼 リュコス・ヴォーダン",
               hp: 1000000,
               imageno: 6112,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1000, 5, 5, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ratio(0.9, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 5, true),
                     s_enemy_attack(1000, 5, 5, true)
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