{
   id: "losteden3_h01",
   name: "初級 リザ・リュディ・現在",
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
            }
         ]
      },
      {
         appearance: [
            2
         ],
         enemy: [
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
               name: "ピッカリのドミー軍上級団員",
               hp: 10,
               imageno: 11677,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
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
               name: "まっかなドミー軍団員",
               hp: 50000,
               imageno: 11672,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)/*nogambits*/
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
               name: "メラメラのドミー軍上級団員",
               hp: 50000,
               imageno: 11673,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)/*nogambits*/
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
               name: "まっかなドミー軍団員",
               hp: 50000,
               imageno: 11672,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)/*nogambits*/
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
               name: "まっきいろのドミー軍団員",
               hp: 50000,
               imageno: 11676,
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
               name: "ピッカリのドミー軍上級団員",
               hp: 200000,
               imageno: 11677,
               attr: 2,
               spec: 2,
               isStrong: true,
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
               name: "まっきいろのドミー軍団員",
               hp: 50000,
               imageno: 11676,
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
      }
   ]
}