{
   id: "esuterera_h06_4",
   name: "ハード6-4 聖女",
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
               name: "迅雷の果実",
               hp: 40000,
               imageno: 9582,
               attr: 2,
               spec: 7,
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
               name: "迅雷の果実",
               hp: 40000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
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
            2,3
         ],
         enemy: [
            {
               name: "迅雷の果実",
               hp: 40000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_noeffect("s_enemy_panelchange([1,1,1,0,0])")
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "迅雷の果実",
               hp: 60000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "迅雷の果実",
               hp: 40000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_attr_weaken([0,0,1,0,0], 1.25, 5, 4)/* Warning: 属性要確認： 雷属性弱体化25%（3T） */
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
            2,3
         ],
         enemy: [
            {
               name: "迅雷の果実",
               hp: 35000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1800, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "迅雷の果実",
               hp: 60000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_noeffect("バリアウォール(20000dmg, 99T, 3体)"))
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
               name: "迅雷の果実",
               hp: 35000,
               imageno: 9582,
               attr: 2,
               spec: 7,
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
      },
      {
         appearance: [
            2,3
         ],
         enemy: [
            {
               name: "迅雷の果実",
               hp: 40000,
               imageno: 9582,
               attr: 2,
               spec: 7,
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
               name: "迅雷の果実",
               hp: 60000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_noeffect("バリアウォール(30000dmg, 99T, 3体)"))
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
               name: "氷結の果実",
               hp: 40000,
               imageno: 9580,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(450, 5, 1, true)
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
            2,3
         ],
         enemy: [
            {
               name: "迅雷の果実",
               hp: 45000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "迅雷の果実",
               hp: 45000,
               imageno: 9582,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
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
               name: "迅雷の果実",
               hp: 50000,
               imageno: 9582,
               attr: 2,
               spec: 7,
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
      },
      {
         appearance: [
            4
         ],
         enemy: [
            {
               name: "激怒するサンダーアップル",
               hp: 80000,
               imageno: 9583,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "不倒の信仰 エレンディ・トゥオノ",
               hp: 400000,
               imageno: 9566,
               attr: 2,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_noeffect("バリアウォール(80000dmg, 99T, 3体)")),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  on_angry: [
                     skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "激怒するサンダーアップル",
               hp: 80000,
               imageno: 9583,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
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