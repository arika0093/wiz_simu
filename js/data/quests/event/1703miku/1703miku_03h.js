{
   id: "1703miku_03h",
   name: "笑顔級 旅は道連れ",
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
               name: "赤色タマゴ紳士",
               hp: 50000,
               imageno: 6728,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "黄色タマゴ紳士",
               hp: 60000,
               imageno: 6732,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(damage_block_all(15000, 4)),
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄色タマゴ紳士",
               hp: 60000,
               imageno: 6732,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
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
               name: "イエロースパインスネーク",
               hp: 60000,
               imageno: 6726,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_chainreduce(5),
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "サンダースパインスネーク",
               hp: 70000,
               imageno: 6727,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_deathlimit(5, 4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダースパインスネーク",
               hp: 65000,
               imageno: 6727,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_cursed(0, 5, 4, 1000),
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
            3
         ],
         enemy: [
            {
               name: "赤色タマゴ紳士",
               hp: 75000,
               imageno: 6728,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(1, 5))
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フレイムスパインスネーク",
               hp: 95000,
               imageno: 6723,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_deathlimit, "-", 100, false, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(450, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダースパインスネーク",
               hp: 80000,
               imageno: 6727,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.25, 3)/* Warning: 属性要確認： 全属性防御25%（2T） */)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
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
               name: "イエローエッグ男爵",
               hp: 230000,
               imageno: 6733,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 3, 0))
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
               name: "イエローエッグ男爵",
               hp: 550000,
               imageno: 6733,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 10)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack_ratio(0.3, 5, true),
                     s_enemy_attack(500, 3, 4, true)
                  ],
                  on_angry: [
                     attack_counter_dual(700, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 4, true),
                     s_enemy_attack(500, 5, 4, true),
                     s_enemy_attack(500, 5, 4, true),
                     s_enemy_attack(500, 5, 4, true),
                     s_enemy_attack(500, 5, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤色タマゴ紳士",
               hp: 130000,
               imageno: 6728,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 4, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 3, 4, true),
                     s_enemy_attack(200, 3, 4, true),
                     s_enemy_attack(200, 3, 4, true),
                     s_enemy_attack(200, 3, 4, true),
                     s_enemy_attack(200, 3, 4, true)
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