{
   id: "itazuramegami1_h4",
   name: "封域級 貫徹する矢",
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
               name: "水面のマンティコア",
               hp: 60000,
               imageno: 1997,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "青のタイタン",
               hp: 60000,
               imageno: 2003,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(700, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "水面のマンティコア",
               hp: 60000,
               imageno: 1997,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 3, true)
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
               name: "水面のマンティコア",
               hp: 70000,
               imageno: 1997,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "波濤のマンティコア",
               hp: 70000,
               imageno: 1998,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "迅風のマンティコア",
               hp: 50000,
               imageno: 1999,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_as_sealed(5, 4),
                     s_enemy_attack(1250, 1, 1, true)
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
               name: "黄のタイタン",
               hp: 50000,
               imageno: 2005,
               attr: 2,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_deathlimit(5, 4),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "青のタイタン",
               hp: 80000,
               imageno: 2003,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "瑠璃のタイタン",
               hp: 80000,
               imageno: 2004,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 3, true)
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
               name: "瑠璃のタイタン",
               hp: 20,
               imageno: 2004,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_as_sealed(5, 4),
                     s_enemy_attack(300, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_panicshout(0, 5, 3),
                     s_enemy_attack(300, 5, 3, true),
                     s_enemy_panicshout(0, 5, 3),
                     s_enemy_attack(300, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "静心の弓弦 イングリット・レイ",
               hp: 600000,
               imageno: 9631,
               attr: 1,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 1000, 5, 4)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "波濤のマンティコア",
               hp: 120000,
               imageno: 1998,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 4))
                  ],
                  on_move: [
                     s_enemy_poison(2000, 5, 3),
                     s_enemy_attack(1000, 5, 1, true)
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