{
   id: "losteden3_h04",
   name: "封魔級 魂を救え！",
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
               name: "青砂の魔兵",
               hp: 50000,
               imageno: 11668,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
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
                     s_enemy_attack(500, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "炎砂の魔騎士",
               hp: 100000,
               imageno: 11667,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 1, 1, true)/*nogambits*/
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
               name: "赤砂の魔兵",
               hp: 100000,
               imageno: 11666,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(10, 99))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "砂氷の魔騎士",
               hp: 50000,
               imageno: 11669,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(1000, 5, 5))
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
               name: "赤砂の魔兵",
               hp: 100000,
               imageno: 11666,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 1, 1, true)/*nogambits*/
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
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "まっかなドミー軍団員",
               hp: 150000,
               imageno: 11672,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_all(10, 99))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "砂氷の魔騎士",
               hp: 100000,
               imageno: 11669,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
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
               name: "メラメラのドミー軍上級団員",
               hp: 300000,
               imageno: 11673,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_multibarrier_all(20, 99)
                  ],
                  on_move_angry: [
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
               name: "暴陰暴蝕 ベケット・ボウボア",
               hp: 900000,
               imageno: 11658,
               attr: 0,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 12000, 5, 1, true)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_healreverse(0.5, 5)
                  ],
                  on_move_angry: [
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
               name: "砂氷の魔騎士",
               hp: 200000,
               imageno: 11669,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/*nogambits*/
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