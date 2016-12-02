{
   id: "esuterera_h10_4",
   name: "ハード10-4 星をめぐる夜に",
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
               name: "意味深な壺",
               hp: 70000,
               imageno: 9590,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒から呼ぶ者",
               hp: 50000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 3))
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
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
            2,3
         ],
         enemy: [
            {
               name: "暗黒から呼ぶ者",
               hp: 55000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 1, 3)),
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意味深な壺",
               hp: 120000,
               imageno: 9590,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_chain_sealed(4))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "暗黒から呼ぶ者",
               hp: 55000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true),
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(2000, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 1, true)
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
               name: "暗黒から呼ぶ者",
               hp: 50000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 2, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意味深な壺",
               hp: 80000,
               imageno: 9590,
               attr: 0,
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
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "暗黒から呼ぶ者",
               hp: 50000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.5, 5, true))
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
            2,3
         ],
         enemy: [
            {
               name: "意味深な壺",
               hp: 100000,
               imageno: 9590,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_noeffect("s_enemy_panelchange([1,1,1,0,0])"),
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "意味深な壺",
               hp: 80000,
               imageno: 9590,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_deathlimit(3, 6)),
                     s_enemy_attack(1400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒から呼ぶ者",
               hp: 50000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/*!*/)
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
            2,3
         ],
         enemy: [
            {
               name: "意味深な壺",
               hp: 80000,
               imageno: 9590,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_chain_break(),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "暗黒から呼ぶ者",
               hp: 50000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attr_weaken([1,1,1,1,1], 1.25, 5, 4)/* Warning: 属性要確認： 全属性弱体化25%（3T） */),
                     s_enemy_attack(400, 3, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意味深な壺",
               hp: 80000,
               imageno: 9590,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(3, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
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
            2,3
         ],
         enemy: [
            {
               name: "意味深な壺",
               hp: 100000,
               imageno: 9590,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(500, 100))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "暗黒から呼ぶ者",
               hp: 55000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_noeffect("バリアウォール(10000dmg, 99T, 3体)")),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir(),
                  ],
                  on_move_angry: [
                     m_enemy_once(s_enemy_attack(1200, 5, 1, true)),
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意味深な壺",
               hp: 60000,
               imageno: 9590,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_healreverse(1, 5)),
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
            4
         ],
         enemy: [
            {
               name: "血涙を流す者",
               hp: 220000,
               imageno: 9591,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_heal_all(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_heal_all(0.2),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_heal_all(0.2),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "神の、なれの果て",
               hp: 1000000,
               imageno: 9599,
               attr: 0,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 300, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(3)/*!*/,
                     s_enemy_attack_ratio(0.99, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_cursed(1000, 5, 2),
                     s_enemy_attack(875, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(875, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒から呼ぶ者",
               hp: 165000,
               imageno: 9600,
               attr: 4,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 3000, 5, 5)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
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