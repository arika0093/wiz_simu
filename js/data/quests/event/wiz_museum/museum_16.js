{
   id: "museum_16",
   name: "16: 古代都市の真実",
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
               name: "ダクリュウボワボワ",
               hp: 90000,
               imageno: 9283,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_as_sealed(3, 4)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "爽やかな思い出ムシャムシャ",
               hp: 90000,
               imageno: 9288,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(540, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "ジャバボーボ",
               hp: 90000,
               imageno: 9282,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_as_sealed(3, 4)
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
               name: "爽やかな思い出ムシャムシャ",
               hp: 108000,
               imageno: 9288,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_discharge(5, 1),
                     s_enemy_attack(540, 3, 3, true),
                     s_enemy_attack(540, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ビリボーボ",
               hp: 63000,
               imageno: 9284,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_attack(900, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "爽やかな思い出ムシャムシャ",
               hp: 108000,
               imageno: 9288,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_discharge(5, 1),
                     s_enemy_attack(540, 3, 3, true),
                     s_enemy_attack(540, 3, 3, true)
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
               name: "ビリボーボ",
               hp: 90000,
               imageno: 9284,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_attack(900, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "イカズチボワボワ",
               hp: 108000,
               imageno: 9285,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_attack(900, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ビリボーボ",
               hp: 90000,
               imageno: 9284,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_attack(900, 5, 1, true)
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
            4
         ],
         enemy: [
            {
               name: "黄金の追想ハンター",
               hp: 180000,
               imageno: 9291,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_absorb(0.2, 5, 20000),
                     s_enemy_attack(900, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "忘れ去られた機械少年 レダ",
               hp: 1440000,
               imageno: 9273,
               attr: 1,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 500, 5, 3)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(2),
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1800, 5, 1, true),
                     s_enemy_attack(1800, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "蒼空の追想ハンター",
               hp: 450000,
               imageno: 9289,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_discharge(5, 2)),
                     s_enemy_attack(540, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            }
         ]
      }
   ]
}