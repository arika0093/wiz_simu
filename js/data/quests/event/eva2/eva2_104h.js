{
   id: "eva2_104h",
   name: "10-4 姫と騎士(HARD)",
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
               name: "暗黒空間幾何生物",
               hp: 35000,
               imageno: 8677,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "剛炎竜巻く幾何生物",
               hp: 50000,
               imageno: 8611,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(416.6666666666667, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "暗黒空間幾何生物",
               hp: 35000,
               imageno: 8677,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 5))
                  ],
                  on_move: [
                     s_enemy_healreverse(0.5, 5),
                     s_enemy_attack(250, 5, 3, true)
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
               name: "剛炎竜巻く幾何生物",
               hp: 130000,
               imageno: 8611,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack(416.6666666666667, 5, 3, true),
                     s_enemy_attack(416.6666666666667, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒空間幾何生物",
               hp: 78000,
               imageno: 8677,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 5))
                  ],
                  on_move: [
                     s_enemy_delay_attack(625, 5),
                     s_enemy_delay_attack(625, 5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "剛炎竜巻く幾何生物",
               hp: 130000,
               imageno: 8611,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(416.6666666666667, 5, 3, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attack(416.6666666666667, 5, 3, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(416.6666666666667, 5, 3, true),
                     s_enemy_attack(416.6666666666667, 5, 3, true),
                     s_enemy_attack(416.6666666666667, 5, 3, true),
                     s_enemy_attack(416.6666666666667, 5, 3, true),
                     s_enemy_attack(416.6666666666667, 5, 3, true)
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
               name: "暗黒空間幾何生物",
               hp: 78000,
               imageno: 8677,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(0.5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_delay_attack(1500, 3),
                     s_enemy_delay_attack(1500, 3),
                     s_enemy_delay_attack(1500, 3),
                     s_enemy_delay_attack(1500, 3),
                     s_enemy_delay_attack(1500, 3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "剛炎竜巻く幾何生物",
               hp: 130000,
               imageno: 8611,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_delay_attack(1250, 5)),
                     s_enemy_deathlimit(5, 6),
                     s_enemy_delay_attack(1250, 5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒空間幾何生物",
               hp: 78000,
               imageno: 8677,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 5))
                  ],
                  on_move: [
                     s_enemy_healreverse(0.5, 5),
                     s_enemy_attack(250, 5, 3, true)
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
               name: "暗黒空間幾何生物",
               hp: 140000,
               imageno: 8677,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_delay_attack(1000, 5)),
                     s_enemy_delay_attack(1000, 5)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_deathlimit(5, 6),
                     s_enemy_delay_attack(1500, 5),
                     s_enemy_delay_attack(1500, 5),
                     s_enemy_delay_attack(1500, 5),
                     s_enemy_delay_attack(1500, 5)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Mark.09 覚醒後",
               hp: 600000,
               imageno: 8597,
               attr: 0,
               spec: 3,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1800, 5, 5, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true),
                     s_enemy_reverse(0)
                  ],
                  on_move: [
                     s_enemy_delay_attack(1500, 5)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_delay_attack(2500, 3),
                     s_enemy_attack_ratio(0.5, 5, true),
                     s_enemy_delay_attack(2500, 3),
                     s_enemy_discharge(5, 3),
                     s_enemy_delay_attack(2500, 3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒空間幾何生物",
               hp: 140000,
               imageno: 8677,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 5)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(350, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(1, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(525, 3, 3, true),
                     s_enemy_attack(525, 3, 3, true),
                     s_enemy_attack(525, 3, 3, true),
                     s_enemy_attack(525, 3, 3, true),
                     s_enemy_attack(525, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      }
   ],
   revData: [
      {
         name: "Mark.09 覚醒後",
         hp: 300000,
         imageno: 8679,
         attr: 4,
         spec: 3,
         isStrong: true,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_delay_attack, "-", 100, false, 12500, 5)),
               damage_switch(s_enemy_when_hpdown(0.3), m_enemy_angry(), true)
            ],
            on_move: [
               s_enemy_attack(250, 5, 10, true),
               s_enemy_delay_attack(1500, 5)
            ],
            on_angry: [
               s_enemy_healreverse(0.5, 5)
            ],
            on_move_angry: [
               s_enemy_absorb(0.4, 5, 30000),
               s_enemy_attack(250, 5, 10, true),
               s_enemy_absorb(0.8, 5, 80),
               s_enemy_delay_attack(1250, 3),
               s_enemy_absorb(0.8, 5, 80)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}