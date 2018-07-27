{
   id: "1806ev_h",
   name: "(18/06)イベントトーナメント 覇級",
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
               name: "光術戦闘官",
               hp: 10000,
               imageno: 8319,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
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
               name: "光術戦闘官",
               hp: 30000,
               imageno: 8319,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "昏術特戦技官",
               hp: 10000,
               imageno: 8322,
               imageno_prefix: "",
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(5, 99))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光術戦闘官",
               hp: 30000,
               imageno: 8319,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
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
               name: "光のマジクラート",
               hp: 50000,
               imageno: 8329,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黒のマジクラート",
               hp: 50000,
               imageno: 8331,
               imageno_prefix: "",
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
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
               name: "光輝のハイ・マジクラート",
               hp: 40000,
               imageno: 8330,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_ss_sealed(5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_discharge(5, 1)
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
               name: "光輝のハイ・マジクラート",
               hp: 200000,
               imageno: 8330,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "叡智の編纂者 ティア・ソピア",
               hp: 600000,
               imageno: 12856,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(0, 5, 3, 15000, true)),
                     damage_switch(s_enemy_when_chainValue(25, -1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(500, 5, 4, 0, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "光術戦闘官",
               hp: 200000,
               imageno: 8319,
               imageno_prefix: "",
               attr: 3,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "昏術特戦技官",
               hp: 200000,
               imageno: 8322,
               imageno_prefix: "",
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒のハイ・マジクラート",
               hp: 200000,
               imageno: 8332,
               imageno_prefix: "",
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 1, true),
                     s_enemy_attack(50, 5, 1, true)
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