{
   id: "radiant1_h1",
   name: "初級 魔道研究所調査団",
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
               name: "黄金の追想ハンター",
               hp: 40000,
               imageno: 9291,
               attr: 2,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_as_sealed(1, 4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "深紅の追想ハンター",
               hp: 15000,
               imageno: 9287,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 500, 500))
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
            2
         ],
         enemy: [
            {
               name: "美しい思い出ムシャムシャ",
               hp: 40000,
               imageno: 9290,
               attr: 2,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_as_sealed(1, 4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "熱中した思い出ムシャムシャ",
               hp: 15000,
               imageno: 9286,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 500, 500))
                  ],
                  on_move: [
                     s_enemy_attack(250, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "美しい思い出ムシャムシャ",
               hp: 40000,
               imageno: 9290,
               attr: 2,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 3))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_as_sealed(1, 4)
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
               name: "熱中した思い出ムシャムシャ",
               hp: 20000,
               imageno: 9286,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 500, 500)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(250, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "黄金の追想ハンター",
               hp: 60000,
               imageno: 9291,
               attr: 2,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 3)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_as_sealed(1, 4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "深紅の追想ハンター",
               hp: 20000,
               imageno: 9287,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 500, 500)),
                     s_enemy_division(0.5)
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
               name: "熱中した思い出ムシャムシャ",
               hp: 75000,
               imageno: 9286,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(250, 3, 5, true)
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
               name: "美しい思い出ムシャムシャ",
               hp: 400000,
               imageno: 9290,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 2000, 2000)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_force_reservoir()
                  ],
                  on_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "深紅の追想ハンター",
               hp: 100000,
               imageno: 9287,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(1000, 3))
                  ],
                  on_move: [
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