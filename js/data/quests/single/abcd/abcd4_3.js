{
   id: "abcd4_3",
   name: "AbCd04 焼尽の陽光 真覇級",
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
               name: "code:ラーワリア",
               hp: 100000,
               imageno: 5149,
               attr: 0,
               spec: 11,
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
               name: "CODE:ラヒルメ《焦熱の女神》",
               hp: 120000,
               imageno: 5145,
               attr: 0,
               spec: 11,
               isStrong: true,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_deathlimit(5, 4)),
                     s_enemy_attack(1500, 1, 1, true)/* Warning: case 36 */
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 1
               }
            },
            {
               name: "code:ファルソル",
               hp: 100000,
               imageno: 5150,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_break, "-", 100, false, 0))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
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
               name: "ボラルグラナ",
               hp: 50000,
               imageno: 3878,
               attr: 2,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_break, "-", 100, false, 0))
                  ],
                  on_move: [
                     s_enemy_attack(283.3333333333333, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "CODE:ラヒルメ《紅焔の象徴》",
               hp: 140000,
               imageno: 5146,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     s_enemy_attack(1500, 1, 1, true)/* Warning: case 36 */,
                     s_enemy_attack_ratio(0.5, 5, true)
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
               name: "code:ファルソル",
               hp: 200000,
               imageno: 5150,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 2000, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(600, 2, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "AbCd-Θ:《日輪の炎神 ラヒルメ》",
               hp: 250000,
               imageno: 5147,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 2000, 5, 5)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_chain_sealed(6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 3, 5, true),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "リヴァターリーア",
               hp: 80000,
               imageno: 3576,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 100))
                  ],
                  on_move: [
                     s_enemy_discharge(5, 3),
                     s_enemy_attack(250, 3, 5, true)
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
            4
         ],
         enemy: [
            {
               name: "code:ラーワリア",
               hp: 350000,
               imageno: 5149,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_continue_damage(5, 3000, 750)),
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "AbCd-Θ:《万象焦尽天 ラヒルメ》",
               hp: 900000,
               imageno: 6784,
               attr: 0,
               spec: 11,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 3)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)/* Warning: case 36 */
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_chain_sealed(6)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 3, 1, true)/* Warning: case 36 */,
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
               name: "code:ファルソル",
               hp: 180000,
               imageno: 5150,
               attr: 0,
               spec: 11,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 6))
                  ],
                  on_move: [
                     s_enemy_heal_all(0.05),
                     s_enemy_attack(750, 1, 1, true)
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