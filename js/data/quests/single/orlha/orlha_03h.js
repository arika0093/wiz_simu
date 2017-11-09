{
   id: "orlha_03",
   name: "OR03 覇級 狂狂ト舞ウ闇傀儡",
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
               name: "トテモクサイ種のハンナ",
               hp: 50000,
               imageno: 5093,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "トテモクサイ種のハンナ",
               hp: 50000,
               imageno: 5093,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ビリビリのオシャムン",
               hp: 100000,
               imageno: 5094,
               attr: 2,
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
            }
         ]
      },
      {
         appearance: [
            2
         ],
         enemy: [
            {
               name: "ならず者のベアクロウ",
               hp: 50000,
               imageno: 5096,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ビリビリのオシャムン",
               hp: 100000,
               imageno: 5094,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(1000, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ビリビリのオシャムン",
               hp: 100000,
               imageno: 5094,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
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
               name: "ビリビリのオシャムン",
               hp: 200000,
               imageno: 5094,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ならず者のベアクロウ",
               hp: 100000,
               imageno: 5096,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_poison(1000, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "小麦色のシリェーナ",
               hp: 50000,
               imageno: 4794,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(666.75, 5, 1, true)
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
               name: "ビリビリのオシャムン",
               hp: 400000,
               imageno: 5094,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(200, 5, 10, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂狂ト舞ウ闇傀儡 グヴェル・テラー",
               hp: 1000000,
               imageno: 6179,
               attr: 2,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([1,0,0,0,0], 0.25, 0.75, 100)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true),
                     s_enemy_reverse(0)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_barrier_all(300000, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
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
               name: "トテモクサイ種のハンナ",
               hp: 400000,
               imageno: 5093,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_ratio(0.4, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      }
   ],
   revData: [
      {
         name: "狂狂ト舞ウ闇傀儡 グヴェル・テラー",
         hp: 1500000,
         imageno: 6179,
         attr: 2,
         spec: 2,
         isStrong: true,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_attrguard_all, "-", 100, false, [1,0,0,0,0], 1, 100)),
               damage_switch(s_enemy_when_hpdown(0.8), m_enemy_angry(), true)
            ],
            on_move: [
               s_enemy_attack(2000, 5, 1, true)
            ],
            on_angry: [
               s_enemy_attr_weaken([0,0,1,0,0], 1.5, 5, 11)/* Warning: 属性要確認： 雷属性弱体化50%（10T） */,
               s_enemy_statusup(true, 0, -1)
            ],
            on_move_angry: [
               s_enemy_attack(400, 5, 10, true),
               s_enemy_barrier_own(200000, 99)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}