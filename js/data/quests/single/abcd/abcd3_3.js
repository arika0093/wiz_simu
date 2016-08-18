{
   id: "abcd3_3",
   name: "AbCd03 生まれ堕つ無 真覇級",
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
               name: "リヴァターリーア",
               hp: 50000,
               imageno: 3576,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/* Warning: case 36 */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "CODE:バシレイデ《拡散する我執》",
               hp: 100000,
               imageno: 4377,
               attr: 1,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_deathlimit(5, 6)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "リヴァターリーア",
               hp: 50000,
               imageno: 3576,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/* Warning: case 36 */
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
               name: "セプティージーズ",
               hp: 60000,
               imageno: 3575,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 3))
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "CODE:バシレイデ《不吉なる神格》",
               hp: 180000,
               imageno: 4378,
               attr: 1,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ratio, "-", 100, false, 0.9, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)/* Warning: case 36 */
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
               name: "リヴァターリーア",
               hp: 100000,
               imageno: 3576,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 3))
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
               name: "AbCd-Α:《反逆の異神 バシレイデ》",
               hp: 200000,
               imageno: 4500,
               attr: 1,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_deathlimit, "-", 100, false, 5, 2)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  on_angry: [
                     damage_block_all(30000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 1, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(2000, 1, 1, true)/* Warning: case 36 */,
                     s_enemy_attack_deadgrudge(2000, 12000, 22000),
                     s_enemy_attack(2000, 1, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(2000, 1, 1, true)/* Warning: case 36 */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "セプティージーズ",
               hp: 60000,
               imageno: 3575,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(10000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/* Warning: case 36 */
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
               name: "リヴァターリーア",
               hp: 200000,
               imageno: 3576,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.9, 5, true)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(damage_block_own(20000, 3)),
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */
                  ],
                  on_angry: [
                     s_enemy_poison(2000, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "AbCd-Α:《廃絶の鬼神バシレイデ》",
               hp: 800000,
               imageno: 6790,
               attr: 1,
               spec: 11,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 5)),
                     damage_switch(s_enemy_when_hpdown(0.4), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(3),
                     damage_block_own(10000, 3)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(1000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(1000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(1000, 5, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(1000, 5, 1, true)/* Warning: case 36 */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "イェンフレイン",
               hp: 180000,
               imageno: 3577,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 2000, 2000)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(800, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir()
                  ],
                  on_move_angry: [
                     s_enemy_attack(2400, 1, 1, true),
                     s_enemy_attack(1200, 1, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(1200, 1, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(1200, 1, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(1200, 1, 1, true)/* Warning: case 36 */,
                     s_enemy_attack(1200, 1, 1, true)/* Warning: case 36 */
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