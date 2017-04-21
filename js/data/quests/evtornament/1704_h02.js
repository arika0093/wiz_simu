{
   id: "1704_h02",
   name: "戦士挽歌[水]",
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
               name: "グルドラン帝国蒼鋭激兵",
               hp: 60000,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グルドラン帝国蒼鋭激兵",
               hp: 50000,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(50000, 2))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グルドラン帝国蒼鋭激兵",
               hp: 60000,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)/*nogambits*/
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
               name: "グルドラン帝国蒼鋭激兵",
               hp: 5,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グルドラン帝国蒼鋭激兵",
               hp: 140000,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 0, 5, 4, 5000))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グルドラン帝国紅炎焔兵",
               hp: 5,
               imageno: 10358,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 1, 3)),
                     m_enemy_once(impregnable(99)),
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
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
               name: "暗黒の淵にて嗤うもの",
               hp: 80000,
               imageno: 10361,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グルドラン帝国蒼鋭激兵",
               hp: 120000,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_all(100000, 99))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒の淵にて嗤うもの",
               hp: 80000,
               imageno: 10361,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(400, 5, 3, 0))
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
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
               name: "暗黒の淵にて嗤うもの",
               hp: 100000,
               imageno: 10361,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グルドラン帝国蒼鋭激兵",
               hp: 18,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     m_enemy_once(s_enemy_taunt(3)),
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒の淵にて嗤うもの",
               hp: 100000,
               imageno: 10361,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)/*nogambits*/
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
               name: "暗黒の淵にて嗤うもの",
               hp: 250000,
               imageno: 10361,
               attr: 4,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "蘇りし屍人たちの王 ヴァヌスス",
               hp: 400000,
               imageno: 10345,
               attr: 1,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1800, 5, 10, true)),
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_chain_break()
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 5, 3, true),
                     s_enemy_attack(200, 5, 3, true),
                     s_enemy_attack(200, 5, 3, true),
                     s_enemy_attack(200, 5, 3, true),
                     s_enemy_attack(200, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グルドラン帝国蒼鋭激兵",
               hp: 250000,
               imageno: 10359,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(500, 5, 2))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 1, true)
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