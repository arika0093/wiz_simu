{
   id: "radiant1_h3",
   name: "上級 追想の中の巫女",
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
               name: "ゴウカボワボワ",
               hp: 50000,
               imageno: 9281,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.25, 5))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ヒボーボ",
               hp: 70000,
               imageno: 9280,
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
               hp: 70000,
               imageno: 9281,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_poison(500, 5, 3)),
                     s_enemy_attack(1000, 5, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ヒボーボ",
               hp: 50000,
               imageno: 9280,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.25, 5))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "美しい思い出ムシャムシャ",
               hp: 30000,
               imageno: 9290,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_attrsp, "-", 100, false, 962.5, 175, [0,1,0,0,0], 5, 1, false))
                  ],
                  on_move: [
                     s_enemy_attack_attrsp(700, 175, [0,1,0,0,0], 5, 1, false)
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
               name: "ゴウカボワボワ",
               hp: 80000,
               imageno: 9281,
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
               name: "ヒボーボ",
               hp: 100000,
               imageno: 9280,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.25, 5))
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "爽やかな思い出ムシャムシャ",
               hp: 40000,
               imageno: 9288,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(250, 3, 3, true)
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
               name: "ゴウカボワボワ",
               hp: 250000,
               imageno: 9281,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.25, 5)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_force_reservoir()
                  ],
                  on_angry: [
                     s_enemy_attack(3000, 1, 1, true),
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "高飛車お嬢様魔道士 カルロマ・シィ",
               hp: 550000,
               imageno: 9265,
               attr: 0,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_deathlimit(5, 6)),
                     s_enemy_attack(500, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_poison(1000, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_discharge(5, 2),
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "爽やかな思い出ムシャムシャ",
               hp: 100000,
               imageno: 9288,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 3000, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(250, 3, 3, true),
                     s_enemy_attack(250, 3, 3, true),
                     s_enemy_statusup(false, 20, -1)
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