{
   id: "losteden3_h05",
   name: "絶級 リュディ・リザ・未来",
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
               name: "黄砂の魔兵",
               hp: 100000,
               imageno: 11670,
               attr: 2,
               spec: 2,
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
               name: "雷砂の魔騎士",
               hp: 150000,
               imageno: 11671,
               attr: 2,
               spec: 2,
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
               name: "赤砂の魔兵",
               hp: 100000,
               imageno: 11666,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)/*nogambits*/
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
               name: "黄砂の魔兵",
               hp: 500000,
               imageno: 11670,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([1,0,0,0,0], 0.15, 0.75, 100))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 10, true),
                     s_enemy_attack(2500, 5, 1, true),
                     s_enemy_attrguard_all([1,0,0,0,0], 0.25, 3)
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
               name: "砂氷の魔騎士",
               hp: 100000,
               imageno: 11669,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_all(100000, 99))
                  ],
                  on_move: [
                     s_enemy_attack(266.6, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "雷砂の魔騎士",
               hp: 200000,
               imageno: 11671,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "雷砂の魔騎士",
               hp: 200000,
               imageno: 11671,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 5, true)
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
               name: "炎砂の魔騎士",
               hp: 600000,
               imageno: 11667,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_multibarrier_own(30, 99)
                  ],
                  on_move_angry: [
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
               name: "幻惑と魅惑 ティキー",
               hp: 1400000,
               imageno: 11662,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 10000, 5, 1, true)),
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([1,0,0,0,0], 0.15, 0.75, 100)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(1000, 5, 2),
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 11)
                  ],
                  on_move_angry: [
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_poison(1000, 5, 2),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_poison(1000, 5, 2)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄砂の魔兵",
               hp: 200000,
               imageno: 11670,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 5, true)
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