{
   id: "1703miku_01h",
   name: "青空級 澄み渡る場所",
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
               name: "ホット・パッディー",
               hp: 40000,
               imageno: 6710,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ホット・パッディー",
               hp: 40000,
               imageno: 6710,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  on_popup: [
                     s_enemy_division(0.5)
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
               name: "ホット・ノーティー",
               hp: 45000,
               imageno: 6716,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 3, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "クール・パッディー",
               hp: 20000,
               imageno: 6712,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "ホット・フォルパッディー",
               hp: 45000,
               imageno: 6711,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 3, 1, true)
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
               name: "ホット・ノーティー",
               hp: 50000,
               imageno: 6716,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 2000, 5, 3)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(900, 3, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ホット・フォルノーティー",
               hp: 60000,
               imageno: 6717,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_multibarrier_all(10, 99)),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤色タマゴ紳士",
               hp: 50000,
               imageno: 6728,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 2000, 5, 3, 0)),
                     s_enemy_division(0.5)
                  ],
                  on_move: [
                     s_enemy_attack(900, 3, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
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
               name: "ホット・ノーティー",
               hp: 90000,
               imageno: 6716,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     s_enemy_division(0.5)
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
               name: "レッドエッグ男爵",
               hp: 300000,
               imageno: 6729,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_deathlimit(5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 10)
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
               name: "ブルーエッグ男爵",
               hp: 60000,
               imageno: 6731,
               attr: 1,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attr_absorb([0,1,0,0,0], 2, 3),
                     s_enemy_healreverse(0.5, 5)
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
      }
   ]
}