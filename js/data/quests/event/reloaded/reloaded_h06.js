{
   id: "reloaded_h06",
   name: "覇級 救世の星",
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
               name: "Ｃヘルバ・フレイム",
               hp: 60000,
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
            },
            {
               name: "Ｃインセクタ・フレイム",
               hp: 60000,
               imageno: 11435,
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
               name: "Ｃヘルバ・フレイム",
               hp: 60000,
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
            },
            {
               name: "Ｃインセクタ・ファイア",
               hp: 60000,
               imageno: 11434,
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
               name: "Ｃヘルバ・フレイム",
               hp: 60000,
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
            2
         ],
         enemy: [
            {
               name: "Ｃインセクタ・フレイム",
               hp: 100000,
               imageno: 11435,
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
               name: "Ｃインセクタ・ファイア",
               hp: 25,
               imageno: 11434,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
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
               name: "Ｃインセクタ・フレイム",
               hp: 100000,
               imageno: 11435,
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
               name: "Ｃインセクタ・フレイム",
               hp: 100000,
               imageno: 11435,
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
               name: "Ｃヘルバ・フリーズ",
               hp: 60000,
               imageno: 11431,
               attr: 1,
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
            }
         ]
      },
      {
         appearance: [
            3
         ],
         enemy: [
            {
               name: "Ｃインセクタ・フリーズ",
               hp: 20000,
               imageno: 11437,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(20, 99))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・フレイム",
               hp: 200000,
               imageno: 11429,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・アイス",
               hp: 20000,
               imageno: 11430,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(20, 99))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・フレイム",
               hp: 200000,
               imageno: 11435,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・フレイム",
               hp: 200000,
               imageno: 11429,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 3, true)
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
               hp: 300000,
               imageno: 11435,
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
               name: "生命を喰らい尽くす凶星 ヴラフォス",
               hp: 1700000,
               imageno: 11427,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 15000, 5, 1, true)),
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([0,1,0,0,0], 0.25, 0.75, 100)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  on_angry: [
                     s_enemy_absorb(0.8, 5, 80)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・フリーズ",
               hp: 150000,
               imageno: 11431,
               attr: 1,
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
               name: "Ｃヘルバ・アイス",
               hp: 50000,
               imageno: 11430,
               attr: 1,
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
               name: "Ｃヘルバ・スパーク",
               hp: 200000,
               imageno: 11433,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(350, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_attack_attrsp(1050, 350, [0,1,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(1050, 350, [0,1,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(1050, 350, [0,1,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(1050, 350, [0,1,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(1050, 350, [0,1,0,0,0], 5, 1, false)
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