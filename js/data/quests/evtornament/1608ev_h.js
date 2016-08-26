{
   id: "1608ev_h",
   name: "覇級 えきぞちっく大戦",
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
               name: "雷と街を占拠した者",
               hp: 40000,
               imageno: 8845,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "炎で街を焦がす者",
               hp: 20000,
               imageno: 8841,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
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
               name: "雷と街を占拠した者",
               hp: 40000,
               imageno: 8845,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
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
               name: "炎で街を焦がす者",
               hp: 35000,
               imageno: 8841,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)/*nogambits*/
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
               name: "雷と街を占拠した者",
               hp: 50000,
               imageno: 8845,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "炎で街を焦がす者",
               hp: 35000,
               imageno: 8841,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)/*nogambits*/
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
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
            3
         ],
         enemy: [
            {
               name: "雷と街を占拠した者",
               hp: 80000,
               imageno: 8845,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(800, 1, 1, true)
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
               name: "稲妻の如き疾風の魔物",
               hp: 80000,
               imageno: 8846,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_chain_break, "-", 100, false, 0)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "雷と街を占拠した者",
               hp: 80000,
               imageno: 8845,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 3)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_discharge(5, 2),
                     s_enemy_attack(500, 5, 1, true)
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
               name: "愛を知る神",
               hp: 20,
               imageno: 8847,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 3, true),
                     s_enemy_as_sealed(3, 3)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "雷と街を占拠した者",
               hp: 100000,
               imageno: 8845,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(2000, 1, 1, true)
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "愛を知る神",
               hp: 20,
               imageno: 8847,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 3, true),
                     s_enemy_as_sealed(3, 3)
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
            5
         ],
         enemy: [
            {
               name: "突撃キャンディ神 マリナ・ビヴロス",
               hp: 150000,
               imageno: 8817,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attrguard_all/* Warning: 属性要確認： 全属性防御50%（3T） */, "-", 100, false, [1,1,1,1,1], 0.5, 4))
                  ],
                  on_move: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/* Warning: 属性要確認： 全属性防御25%（3T） */,
                     s_enemy_attack(1000, 1, 1, true),
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "アトキンス一家推参！",
               hp: 150000,
               imageno: 8837,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_heal_all, "-", 100, false, 1)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "それは異国の標 ジェスロ・クワトリ",
               hp: 150000,
               imageno: 8820,
               attr: 2,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_statusup, "-", 100, false, true, 30, 3))
                  ],
                  on_move: [
                     s_enemy_statusup(true, 20, 3),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            }
         ]
      }
   ]
}