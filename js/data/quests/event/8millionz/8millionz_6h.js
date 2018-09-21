{
   id: "8millionz_6h",
   name: "覇級 顕現「神の中の神」",
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
               name: "愛を信じ続ける神",
               hp: 50000,
               imageno: 8848,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_as_sealed(5, 4)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "暗き世界に潜み続ける魔物",
               hp: 60000,
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
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "愛を信じ続ける神",
               hp: 60000,
               imageno: 8848,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
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
               name: "愛を信じ続ける神",
               hp: 60000,
               imageno: 8848,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(800, 3, 2, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "愛を信じ続ける神",
               hp: 80000,
               imageno: 8848,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([0,1,0,0,0], 0.5, 4)/* Warning: 属性要確認： 水属性防御50%（3T） */),
                     s_enemy_attack(3000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "暗き世界に潜み続ける魔物",
               hp: 65000,
               imageno: 8863,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 5))
                  ],
                  on_move: [
                     s_enemy_heal_all(0.3),
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
               name: "愛を信じ続ける神",
               hp: 100000,
               imageno: 8848,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(1000, 100))
                  ],
                  on_move: [
                     s_enemy_panelchange([1,1,1,0,0]),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "愛を信じ続ける神",
               hp: 120000,
               imageno: 8848,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 2, 3, true)
                  ],
                  on_angry: [
                     damage_block_own(20000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 3, 3, true),
                     s_enemy_attack(600, 3, 3, true),
                     s_enemy_attack(600, 3, 3, true),
                     s_enemy_attack(600, 3, 3, true),
                     s_enemy_attack(600, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗き世界に潜み続ける魔物",
               hp: 80000,
               imageno: 8863,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,0,0,1], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 5, true)
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
               name: "愛を信じ続ける神",
               hp: 160000,
               imageno: 8848,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 3)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(5, 1500, 1500)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 3, 3, true),
                     s_enemy_attack(600, 3, 3, true),
                     s_enemy_attack(600, 3, 3, true),
                     s_enemy_attack(600, 3, 3, true),
                     s_enemy_attack(600, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "巨体、ゆえに最強 リバティーヌ",
               hp: 500000,
               imageno: 8840,
               attr: 0,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_own, "-", 100, false, 30000, 6)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_attr_absorb([0,0,0,0,1], 3, 5)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "絶対に譲らない神",
               hp: 140000,
               imageno: 8850,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 3, 5)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 5, true)
                  ],
                  on_angry: [
                     damage_block_own(30000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(150, 5, 5, true),
                     s_enemy_attack(150, 5, 5, true),
                     s_enemy_attack(150, 5, 5, true),
                     s_enemy_attack(150, 5, 5, true),
                     s_enemy_attack(150, 5, 5, true)
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