{
   id: "1610ev_z",
   name: "(2016/10)イベントトーナメント 絶級",
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
               name: "イカズチボワボワ",
               hp: 12000,
               imageno: 9285,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(487.5, 162.5, [0,1,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "深紅の追想ハンター",
               hp: 25000,
               imageno: 9287,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(333.3333333333333, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "熱中した思い出ムシャムシャ",
               hp: 25000,
               imageno: 9286,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_force_reservoir()
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
               name: "ゴウカボワボワ",
               hp: 30000,
               imageno: 9281,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5))
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
               name: "ヒボーボ",
               hp: 30000,
               imageno: 9280,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(333.3333333333333, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ゴウカボワボワ",
               hp: 30000,
               imageno: 9281,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(800, 1, 1, true)
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
               name: "イカズチボワボワ",
               hp: 20000,
               imageno: 9285,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack_attrsp(900, 300, [0,1,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ヒボーボ",
               hp: 35000,
               imageno: 9280,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(240, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "深紅の追想ハンター",
               hp: 10,
               imageno: 9287,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
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
               name: "ゴウカボワボワ",
               hp: 30000,
               imageno: 9281,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5))
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
               name: "ヒボーボ",
               hp: 30000,
               imageno: 9280,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(333.3333333333333, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ゴウカボワボワ",
               hp: 30000,
               imageno: 9281,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(800, 1, 1, true)
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
               name: "深紅の追想ハンター",
               hp: 100000,
               imageno: 9287,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(800, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "不憶を吸い込み凶悪化したシャボンヌ",
               hp: 200000,
               imageno: 9276,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 750)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_deathlimit(5, 6)),
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_attr_absorb([1,0,0,0,1], 3, 5)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/* Warning: 属性要確認： 全属性防御25%（3T） */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ゴウカボワボワ",
               hp: 130000,
               imageno: 9281,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/* Warning: 属性要確認： 全属性防御25%（3T） */),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 5, 3, true),
                     s_enemy_attack(400, 5, 3, true),
                     s_enemy_attack(400, 5, 3, true),
                     s_enemy_attack(400, 5, 3, true),
                     s_enemy_attack(400, 5, 3, true)
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