{
   id: "reloaded_h04",
   name: "封魔級 ガルデニア大ロッド",
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
               name: "Ｃインセクタ・フリーズ",
               hp: 36000,
               imageno: 11437,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・ファイア",
               hp: 48000,
               imageno: 11434,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・ファイア",
               hp: 36000,
               imageno: 11434,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 3, true)
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
               name: "Ｃヘルバ・フレイム",
               hp: 60000,
               imageno: 11429,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・フレイム",
               hp: 120000,
               imageno: 11435,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(900, 5, 1, true)
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
                     s_enemy_attack(900, 5, 1, true)
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
               name: "Ｃヘルバ・アイス",
               hp: 60000,
               imageno: 11430,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "Ｃインセクタ・フレイム",
               hp: 180000,
               imageno: 11435,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "Ｃヘルバ・アイス",
               hp: 60000,
               imageno: 11430,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
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
               name: "Ｃヘルバ・フレイム",
               hp: 200000,
               imageno: 11429,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_cursed(1000, 5, 6, 0, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "無垢なる殺戮と健啖 メロウ",
               hp: 1000000,
               imageno: 11420,
               attr: 0,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 11000, 5, 1, true)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(0, 5, 6, 2000, true)
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
               name: "Ｃインセクタ・フリーズ",
               hp: 150000,
               imageno: 11437,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(50, 5, 5, true)
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