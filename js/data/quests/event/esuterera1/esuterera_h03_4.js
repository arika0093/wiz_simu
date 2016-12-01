{
   id: "esuterera_h03_4",
   name: "ハード3-4 星と、少女",
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
               name: "根は素直な青魚",
               hp: 25000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "根は素直な青魚",
               hp: 35000,
               imageno: 9586,
               attr: 1,
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
            }
         ]
      },
      {
         appearance: [
            2,3
         ],
         enemy: [
            {
               name: "根は素直な青魚",
               hp: 20000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_heal_all(0.2)),
                     s_enemy_heal_all(0.2)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "根は素直な青魚",
               hp: 50000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "根は素直な青魚",
               hp: 20000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(3, 4)),
                     s_enemy_attack(1400, 1, 1, true)
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
               name: "根は素直な青魚",
               hp: 30000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "根は素直な青魚",
               hp: 30000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_chain_sealed(4)),
                     s_enemy_attack(1400, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "根は素直な青魚",
               hp: 30000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 5, 2, true)
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
               name: "根は素直な青魚",
               hp: 12,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "根は素直な青魚",
               hp: 30000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(700, 2, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "根は素直な青魚",
               hp: 25000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
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
               name: "根は素直な青魚",
               hp: 30000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "根は素直な青魚",
               hp: 35000,
               imageno: 9586,
               attr: 1,
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
               name: "根は素直な青魚",
               hp: 25000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,1,0,0,0], 1.25, 5, 4)/* Warning: 属性要確認： 水属性弱体化25%（3T） */)
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
            2,3
         ],
         enemy: [
            {
               name: "根は素直な青魚",
               hp: 30000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "根は素直な青魚",
               hp: 30000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "根は素直な青魚",
               hp: 30000,
               imageno: 9586,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(600, 3, 3, true)
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
            4
         ],
         enemy: [
            {
               name: "ブルーサンシャインフィッシュ",
               hp: 40000,
               imageno: 9587,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "醜悪なる魔物の顕現 モーノー",
               hp: 200000,
               imageno: 9570,
               attr: 1,
               spec: 7,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 3))
                  ],
                  on_move: [
                     s_enemy_attack(400, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "意地っ張りな黄魚",
               hp: 55000,
               imageno: 9588,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(500, 4))
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
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