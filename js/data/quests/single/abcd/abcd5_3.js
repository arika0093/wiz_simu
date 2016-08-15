{
   id: "abcd5_3",
   name: "AbCd05 冥世の天蓋 真覇級",
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
               name: "code:リュジスモンノワール",
               hp: 60000,
               imageno: 5365,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "CODE:テネブル《亡念の匣》",
               hp: 100000,
               imageno: 5357,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 3))
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "code:リュジスモンノワール",
               hp: 60000,
               imageno: 5365,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
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
            2
         ],
         enemy: [
            {
               name: "code: スクレットシランス",
               hp: 150000,
               imageno: 5366,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "CODE:テネブル《滅者の檻》",
               hp: 150000,
               imageno: 5358,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 5))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 2, 4)),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "code:ラーワリア",
               hp: 100000,
               imageno: 5149,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(250, 3, 5, true)
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
               name: "code:リュジスモンノワール",
               hp: 150000,
               imageno: 5365,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "CODE:テネブル《永逝の封櫃》",
               hp: 200000,
               imageno: 5359,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(1000, 6))
                  ],
                  on_move: [
                     s_enemy_chain_break(),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "code: スクレットシランス",
               hp: 150000,
               imageno: 5366,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 750))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true)
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
               name: "code:ラーワリア",
               hp: 150000,
               imageno: 5149,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "AbCd-Ξ:《朽ちゆく神骸 テネブル》",
               hp: 900000,
               imageno: 6791,
               attr: 2,
               spec: 11,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 5000, 5, 6)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(3),
                     s_enemy_attack_ratio(0.9, 5, true)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "code: スクレットシランス",
               hp: 200000,
               imageno: 5366,
               attr: 2,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
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