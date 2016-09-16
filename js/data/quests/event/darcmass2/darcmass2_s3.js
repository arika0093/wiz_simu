{
   id: "darcmass2_s3",
   name: "覇級 五翼放射空挺大隊陣",
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
               name: "ドルキマス軍技術上等兵",
               hp: 70000,
               imageno: 9074,
               attr: 2,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "ドルキマス軍上等兵",
               hp: 70000,
               imageno: 9070,
               attr: 0,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(350, 3, 3, true)
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ドルキマス国反旗の戦艦",
               hp: 70000,
               imageno: 9080,
               attr: 2,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)/*nogambits*/
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
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
               name: "ドルキマス軍上等兵",
               hp: 35000,
               imageno: 9070,
               attr: 0,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 3)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ドルキマス国反旗の戦艦",
               hp: 80000,
               imageno: 9080,
               attr: 2,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4)),
                     s_enemy_division(0.5)
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
               name: "甲型爆撃戦艦",
               hp: 15000,
               imageno: 9078,
               attr: 1,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 4)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
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
               name: "ドルキマス軍技術上等兵",
               hp: 80000,
               imageno: 9074,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 4))
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
               name: "ドルキマス国反旗の戦艦",
               hp: 100000,
               imageno: 9080,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(1000, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "甲型爆撃戦艦",
               hp: 20,
               imageno: 9078,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack_attrsp(750, 250, [1,0,0,0,0], 5, 1, false)
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
               name: "ドルキマス軍上等兵",
               hp: 150000,
               imageno: 9070,
               attr: 0,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_break, "-", 100, false, 0)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "王子 アルトゥール・ハイリヒベルク",
               hp: 800000,
               imageno: 9063,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 5)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 500, 500)
                  ],
                  on_move_angry: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ドルキマス国反旗の戦艦",
               hp: 350000,
               imageno: 9080,
               attr: 2,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_heal_all, "-", 100, false, 1)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true),
                     s_enemy_attack(1000, 1, 1, true)
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