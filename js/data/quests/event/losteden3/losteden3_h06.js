{
   id: "losteden3_h06",
   name: "覇級 「悪」の王",
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
               hp: 100000,
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
               name: "砂氷の魔騎士",
               hp: 150000,
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
               name: "青砂の魔兵",
               hp: 100000,
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
               name: "ピッカリのドミー軍上級団員",
               hp: 50000,
               imageno: 11677,
               attr: 2,
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
               name: "まっきいろのドミー軍団員",
               hp: 50000,
               imageno: 11676,
               attr: 2,
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
            2
         ],
         enemy: [
            {
               name: "青砂の魔兵",
               hp: 100000,
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
               name: "砂氷の魔騎士",
               hp: 150000,
               imageno: 11669,
               attr: 1,
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
               name: "青砂の魔兵",
               hp: 100000,
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
               name: "青砂の魔兵",
               hp: 100000,
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
            }
         ]
      },
      {
         appearance: [
            3
         ],
         enemy: [
            {
               name: "髑髑のドミー軍上級団員",
               hp: 200000,
               imageno: 11679,
               attr: 4,
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
                     s_enemy_discharge(5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
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
            },
            {
               name: "髑髑のドミー軍上級団員",
               hp: 200000,
               imageno: 11679,
               attr: 4,
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
                     s_enemy_cursed(0, 5, 6, 2000, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄砂の魔兵",
               hp: 50000,
               imageno: 11670,
               attr: 2,
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
               name: "髑髑のドミー軍上級団員",
               hp: 100000,
               imageno: 11679,
               attr: 4,
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
               name: "炎砂の魔騎士",
               hp: 30,
               imageno: 11667,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(5)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(333.25, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_multibarrier_own(15, 99),
                     s_enemy_statusup(false, 0, -1, 500000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(333.25, 5, 1, true),
                     s_enemy_attack(333.25, 5, 1, true),
                     s_enemy_attack(333.25, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔界大砂塵 ベリカント・スキゾール",
               hp: 1800000,
               imageno: 11665,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 10500, 5, 1, true)),
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(3000, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_barrier_own(100000, 99),
                     attack_counter_dual(700, 100)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2250, 5, 1, true),
                     s_enemy_attack(750, 5, 3, true),
                     s_enemy_attack(2250, 5, 1, true),
                     s_enemy_attack(750, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "砂氷の魔騎士",
               hp: 800000,
               imageno: 11669,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([0,0,1,0,0], 0.25, 0.75, 100))
                  ],
                  on_move: [
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "黄砂の魔兵",
               hp: 100000,
               imageno: 11670,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 5, true),
                     s_enemy_attack(100, 5, 5, true),
                     s_enemy_attack(100, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "髑髑のドミー軍上級団員",
               hp: 400000,
               imageno: 11679,
               attr: 4,
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