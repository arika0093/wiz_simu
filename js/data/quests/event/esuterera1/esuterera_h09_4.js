{
   id: "esuterera_h09_4",
   name: "ハード9-4 救済の神様",
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
               name: "いわくありげな壺",
               hp: 40000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(0, 5, 4)),
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "いわくありげな壺",
               hp: 50000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(300, 100))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "いわくありげな壺",
               hp: 40000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 3)),
                     s_enemy_attack(1400, 5, 1, true)
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
            2,3
         ],
         enemy: [
            {
               name: "いわくありげな壺",
               hp: 100000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "いわくありげな壺",
               hp: 70000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "いわくありげな壺",
               hp: 70000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(0, 5, 6))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
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
            2,3
         ],
         enemy: [
            {
               name: "いわくありげな壺",
               hp: 70000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "いわくありげな壺",
               hp: 100000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "いわくありげな壺",
               hp: 70000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
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
            2,3
         ],
         enemy: [
            {
               name: "いわくありげな壺",
               hp: 80000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 1, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "いわくありげな壺",
               hp: 15,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     m_enemy_once(attack_counter_dual(500, 4)),
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "いわくありげな壺",
               hp: 80000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ratio(0.5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true)
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
            2,3
         ],
         enemy: [
            {
               name: "いわくありげな壺",
               hp: 80000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "とても豪華な壺",
               hp: 50000,
               imageno: 9594,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "いわくありげな壺",
               hp: 80000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(0, 5, 4)),
                     s_enemy_attack(1200, 5, 1, true)
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
            2,3
         ],
         enemy: [
            {
               name: "いわくありげな壺",
               hp: 70000,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 1, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "とても豪華な壺",
               hp: 50000,
               imageno: 9594,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(1500, 750, [0,0,1,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "いわくありげな壺",
               hp: 15,
               imageno: 9592,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1400, 5, 1, true)
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
               name: "雄叫びを上げる者",
               hp: 100000,
               imageno: 9593,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(500, 100)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_chain_sealed(4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "全て救済する神 ウルディラ・フレド",
               hp: 700000,
               imageno: 9574,
               attr: 1,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 3000)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 5, true)
                  ],
                  on_angry: [
                     attack_counter_dual(600, 100)
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 4, 5, true),
                     s_enemy_attack(400, 4, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 4, 5, true),
                     s_enemy_attack(400, 4, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "とても豪華な壺",
               hp: 80000,
               imageno: 9594,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attr_absorb, "-", 100, false, [0,0,1,0,0], 2, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 2, true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 2, true)
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