{
   id: "reloaded_h03",
   name: "上級 想いの体現",
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
               name: "Ｃヘルバ・スパーク",
               hp: 30000,
               imageno: 11433,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・スパーク",
               hp: 30000,
               imageno: 11433,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・サンダー",
               hp: 30000,
               imageno: 11432,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "Ｃヘルバ・ファイア",
               hp: 10000,
               imageno: 11428,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・スパーク",
               hp: 50000,
               imageno: 11433,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・フレイム",
               hp: 10000,
               imageno: 11429,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "Ｃインセクタ・スパーク",
               hp: 50,
               imageno: 11439,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・スパーク",
               hp: 40000,
               imageno: 11439,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_all(10, 99))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・サンダー",
               hp: 50,
               imageno: 11438,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
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
               name: "Ｃインセクタ・フレイム",
               hp: 50000,
               imageno: 11435,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "創痍の叛逆者 モルブ＆ソリトゥード",
               hp: 600000,
               imageno: 11416,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_multibarrier_own(20, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
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
               name: "Ｃヘルバ・スパーク",
               hp: 120000,
               imageno: 11433,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
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