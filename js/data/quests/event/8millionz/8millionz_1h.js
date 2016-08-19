{
   id: "8millionz_1h",
   name: "初級 異国へ",
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
               name: "濁流を物ともしない強き魔物",
               hp: 35000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "濁流を物ともしない強き魔物",
               hp: 35000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
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
               name: "濁流を物ともしない強き魔物",
               hp: 35000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "濁流を物ともしない強き魔物",
               hp: 30000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "濁流を物ともしない強き魔物",
               hp: 35000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
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
            3
         ],
         enemy: [
            {
               name: "濁流を物ともしない強き魔物",
               hp: 35000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "稲妻の如き疾風の魔物",
               hp: 30000,
               imageno: 8846,
               attr: 2,
               spec: 2,
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
               name: "濁流を物ともしない強き魔物",
               hp: 40000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(5, 3)),
                     s_enemy_attack(700, 1, 1, true)
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
               name: "稲妻の如き疾風の魔物",
               hp: 50000,
               imageno: 8846,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 3)/* Warning: 属性要確認： 雷属性弱体化50%（2T） */)
                  ],
                  on_move: [
                     s_enemy_attack(400, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "濁流を物ともしない強き魔物",
               hp: 300000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir()
                  ],
                  on_move_angry: [
                     s_enemy_attack(2400, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true),
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "濁流を物ともしない強き魔物",
               hp: 60000,
               imageno: 8844,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
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