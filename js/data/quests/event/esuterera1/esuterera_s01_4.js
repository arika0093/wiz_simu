{
   id: "esuterera_s01_4",
   name: "シークレット1-4",
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
               name: "激怒するサンダーアップル",
               hp: 20000,
               imageno: 9583,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーボルトフィッシュ",
               hp: 20000,
               imageno: 9589,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true)
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
               name: "怒りに震える者",
               hp: 20000,
               imageno: 9595,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,0,1,0,0], 1.25, 5, 4)/*!*/)
                  ],
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "激怒するサンダーアップル",
               hp: 25000,
               imageno: 9583,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_noeffect("s_enemy_panelchange([1,1,1,0,0])")
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "サンダーボルトフィッシュ",
               hp: 20000,
               imageno: 9589,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(700, 5, 1, true)
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
            3,3
         ],
         enemy: [
            {
               name: "怒りに震える者",
               hp: 20000,
               imageno: 9595,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 1000, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(900, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "激怒するサンダーアップル",
               hp: 20000,
               imageno: 9583,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(700, 5, 1, true),
                     s_enemy_chain_sealed(3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "猛りを抑えきれぬ赤魚",
               hp: 14000,
               imageno: 9585,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true),
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
            2,3
         ],
         enemy: [
            {
               name: "サンダーボルトフィッシュ",
               hp: 20000,
               imageno: 9589,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_healreverse(1, 5)),
                     s_enemy_attack(200, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "怒りに震える者",
               hp: 25000,
               imageno: 9595,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 2000, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "激怒するサンダーアップル",
               hp: 20000,
               imageno: 9583,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 4))
                  ],
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
               name: "サンダーボルトフィッシュ",
               hp: 25000,
               imageno: 9589,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack(3500, 5, 1, true)),
                     s_enemy_attack(1750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "怒りに震える者",
               hp: 10,
               imageno: 9595,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(2500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "血涙を流す者",
               hp: 15000,
               imageno: 9591,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_deathlimit, "-", 100, false, 5, 6))
                  ],
                  on_move: [
                     s_enemy_attack(250, 3, 3, true)
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
               name: "激怒するサンダーアップル",
               hp: 25000,
               imageno: 9583,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack(3500, 5, 1, true)),
                     s_enemy_attack(1750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーボルトフィッシュ",
               hp: 30000,
               imageno: 9589,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_deathlimit, "-", 100, false, 5, 6))
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
               name: "怒りに震える者",
               hp: 25000,
               imageno: 9595,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 4))
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
               name: "激怒するサンダーアップル",
               hp: 120000,
               imageno: 9583,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_break, "-", 100, false, 0)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(350, 3, 3, true)
                  ],
                  on_angry: [
                     damage_block_own(30000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(350, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ネタバレ",//"撃砕の父親力 ドルティ・ローム",
               hp: 600000,
               imageno: 5,//9577,
               attr: 2,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1000, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サンダーボルトフィッシュ",
               hp: 140000,
               imageno: 9589,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1600, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1200, 5, 1, true)
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