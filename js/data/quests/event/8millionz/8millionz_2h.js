{
   id: "8millionz_2h",
   name: "中級 ここは何処…？",
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
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 40000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 40000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 40000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
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
            2
         ],
         enemy: [
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 40000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 50000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 2, 4))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 45000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
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
               name: "暗き世界に潜み続ける魔物",
               hp: 45000,
               imageno: 8863,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 50000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(800, 5, 3)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 50000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
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
               name: "暗き世界に潜み続ける魔物",
               hp: 100000,
               imageno: 8863,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 350000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     damage_block_own(20000, 6)
                  ],
                  on_move_angry: [
                     s_enemy_attr_weaken([1,0,0,0,0], 1.5, 5, 4)/* Warning: 属性要確認： 火属性弱体化50%（3T） */,
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "灼熱に耐え続ける無敵の魔物",
               hp: 70000,
               imageno: 8842,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 2, 4))
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
      }
   ]
}