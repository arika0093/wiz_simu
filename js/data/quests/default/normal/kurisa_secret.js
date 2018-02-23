{
   id: "kurisa_secret",
   name: "クルイサSecret 復活",
   desc: "",
   overlap: false,
   aprnum: 11,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "ミスティアン",
               hp: 100000,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 300000,
               imageno: 12042,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 100000,
               imageno: 12042,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 150000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_healreverse(1, 5)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 150000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrreverse(5, 5)),
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "陰鬱なソウルスクリーマー",
               hp: 600000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 600000,
               imageno: 12043,
               attr: 4,
               spec: 4,
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
               name: "フォグレンブル",
               hp: 600000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 300000,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 300000,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
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
               name: "陰鬱なソウルスクリーマー",
               hp: 100000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天光巧 サプラーディー",
               hp: 100000,
               imageno: 12057,
               attr: 3,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(10000, 5, 10, 0))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_attack_ignoreguard(550, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 100000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 25,
               imageno: 12042,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 25,
               imageno: 12042,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
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
               name: "ミスティアン",
               hp: 500000,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 10, true),
                     s_enemy_attack(50, 5, 10, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天闇巧 サプラーディー",
               hp: 100000,
               imageno: 12058,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_all(30, 99))
                  ],
                  on_move: [
                     s_enemy_multibarrier_all(30, 99)
                  ],
                  on_dead: [
                     s_enemy_attack_ignoreguard(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 7,
                  wait: 7
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 500000,
               imageno: 12042,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 10, true),
                     s_enemy_attack(50, 5, 10, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 500000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 10, true),
                     s_enemy_attack(100, 5, 10, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 500000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 10, true),
                     s_enemy_attack(100, 5, 10, true)
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
            5
         ],
         enemy: [
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 1000000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天雷巧 サプラーディー",
               hp: 3000000,
               imageno: 12003,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(2500, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 1000000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
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
            6
         ],
         enemy: [
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天火巧 サプラーディー",
               hp: 3000000,
               imageno: 12001,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(2500, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
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
            7
         ],
         enemy: [
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天水巧 サプラーディー",
               hp: 3000000,
               imageno: 12002,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(2500, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 1000000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 1000000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_attack(750, 5, 1, true),
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
            8
         ],
         enemy: [
            {
               name: "驚天闇巧 サプラーディー",
               hp: 3000000,
               imageno: 12060,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(1),
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天闇巧 サプラーディー",
               hp: 3000000,
               imageno: 12059,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(0),
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天闇巧 サプラーディー",
               hp: 3000000,
               imageno: 12061,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(2),
                     s_enemy_statusup(false, 0, -1, 5000000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 1000000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_discharge(5, 10)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグレンブル",
               hp: 1000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_chain_break()
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
            9
         ],
         enemy: [
            {
               name: "驚天雷巧 サプラーディー",
               hp: 4000000,
               imageno: 12003,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(2000, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(2000, 5, 1, true),
                     s_enemy_attack_ignoreguard(2000, 5, 1, true),
                     s_enemy_attack_ignoreguard(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天火巧 サプラーディー",
               hp: 4000000,
               imageno: 12001,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(2000, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(2000, 5, 1, true),
                     s_enemy_attack_ignoreguard(2000, 5, 1, true),
                     s_enemy_attack_ignoreguard(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "驚天水巧 サプラーディー",
               hp: 4000000,
               imageno: 12002,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ignoreguard(2000, 5, 1, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(2000, 5, 1, true),
                     s_enemy_attack_ignoreguard(2000, 5, 1, true),
                     s_enemy_attack_ignoreguard(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 1000000,
               imageno: 12042,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 1000000,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)/*nogambits*/
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
            10
         ],
         enemy: [
            {
               name: "ミスティアン",
               hp: 100,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光のマジタンポックル",
               hp: 100,
               imageno: 12047,
               attr: 3,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_allySkillCharge(5, 10)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 100,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 100,
               imageno: 12042,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 100,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)/*nogambits*/
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
            11
         ],
         enemy: [
            {
               name: "フォグレンブル",
               hp: 3000000,
               imageno: 12041,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     attack_counter_dual(500, 100)
                  ],
                  on_move_angry: [
                     s_enemy_attack_deadgrudge(500, 3000, 5500, true, 5),
                     s_enemy_attack_deadgrudge(500, 3000, 5500, true, 5),
                     s_enemy_attack_deadgrudge(500, 3000, 5500, true, 5)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "驚天闇巧 サプラーディー",
               hp: 50000000,
               imageno: 12058,
               attr: 4,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     m_enemy_once(s_enemy_attack_ratio(0.5, 5, true)),
                     s_enemy_attack(2500, 5, 1, true),
                     m_enemy_once(impregnable(3))
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 5, true),
                     s_enemy_attack(10000, 5, 1, true),
                     s_enemy_attack(1000, 5, 5, true),
                     s_enemy_attack_ignoreguard(2500, 5, 1, true),
                     s_enemy_attack_ignoreguard(2500, 5, 1, true),
                     impregnable(3),
                     s_enemy_heal_all(0.05)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "陰鬱なソウルスクリーマー",
               hp: 5000000,
               imageno: 12043,
               attr: 4,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_cursed(0, 5, 1, 500)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(500, 5, 1, true),
                     s_enemy_attack_ignoreguard(500, 5, 1, true),
                     s_enemy_attack_ignoreguard(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ミスティアン",
               hp: 2000000,
               imageno: 12040,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attack_ratio(0.99, 5, true)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack_ratio(0.1, 5, true)
                  ],
                  on_angry: [
                     s_enemy_multibarrier_all(10, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ignoreguard(1000, 5, 1, true),
                     s_enemy_attack_ignoreguard(1000, 5, 1, true),
                     s_enemy_attack_ignoreguard(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "狂気のソウルスクリーマー",
               hp: 2000000,
               imageno: 12042,
               attr: 3,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_fear(5, 0, 0.3, [1,1,1,1,1])),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack_ratio(0.1, 5, true)
                  ],
                  on_angry: [
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack_ratio(0.2, 5, true),
                     s_enemy_attack_ratio(0.2, 5, true),
                     s_enemy_attack_ratio(0.2, 5, true)
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