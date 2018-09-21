{
   id: "museum_22",
   name: "22: 黒猫チャレンジ4",
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
               name: "思い出収集魔 シャボンヌ",
               hp: 200000,
               imageno: 9274,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_panelchange([0,1,0,0,0])
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ビリボーボ",
               hp: 200000,
               imageno: 9284,
               attr: 2,
               spec: 2,
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
               name: "イカズチボワボワ",
               hp: 30,
               imageno: 9285,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
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
            2
         ],
         enemy: [
            {
               name: "思い出収集魔 シャボンヌ",
               hp: 300000,
               imageno: 9274,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_panelchange([0,1,0,0,0])
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄金の追想ハンター",
               hp: 250000,
               imageno: 9291,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([1,0,0,0,0], 15, 75, 100))
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
               name: "ジャバボーボ",
               hp: 100000,
               imageno: 9282,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_multibarrier_own(5, 99)
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
               name: "思い出収集魔 シャボンヌ",
               hp: 400000,
               imageno: 9274,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_panelchange([0,1,0,0,0])
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "美しい思い出ムシャムシャ",
               hp: 300000,
               imageno: 9290,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_ss_sealed(2, 6))
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
               name: "深紅の追想ハンター",
               hp: 300000,
               imageno: 9287,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_barrier_all(100000, 99)
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
               name: "思い出収集魔 シャボンヌ",
               hp: 500000,
               imageno: 9274,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_panelchange([0,1,0,0,0])
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(2500, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(2500, 5, 1, true),
                     s_enemy_attack_ignoreguard(2500, 5, 1, true),
                     s_enemy_attack_ignoreguard(2500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "国家転覆を狙う反逆者 ムスティン",
               hp: 2200000,
               imageno: 9269,
               attr: 2,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_hpdown(0.3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(3500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_absorb([0,0,0,0,1], 2, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(4000, 5, 1, true),
                     s_enemy_attack_ignoreguard(4000, 5, 1, true),
                     s_enemy_attack_ignoreguard(4000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "イカズチボワボワ",
               hp: 1000000,
               imageno: 9285,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_heal_all(0.1)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_heal_all(0.2),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_heal_all(0.2)
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