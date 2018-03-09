{
   id: "grade18",
   name: "捌式(トーナメント18段)",
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
               name: "赤いバンダナのナイフマン",
               hp: 80000,
               imageno: 12004,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "爆炎の外道魔法使い",
               hp: 100000,
               imageno: 12011,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "朱に染まるはぐれ魔道士",
               hp: 80000,
               imageno: 12010,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
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
            2
         ],
         enemy: [
            {
               name: "朱に染まるはぐれ魔道士",
               hp: 100000,
               imageno: 12010,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "青マントの引き裂き男",
               hp: 20000,
               imageno: 12007,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 1, 3))
                  ],
                  on_move: [
                     s_enemy_attack(50, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "赤マントの切り裂き男",
               hp: 100000,
               imageno: 12005,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([0,0,0,1,0], 1, 2))
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
            3
         ],
         enemy: [
            {
               name: "怨みのスクリーマー",
               hp: 20000,
               imageno: 12034,
               attr: 0,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "レッドモックラット",
               hp: 100000,
               imageno: 12016,
               attr: 0,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(5, 99))
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
               name: "ミストフィッシュ・レド",
               hp: 20000,
               imageno: 12022,
               attr: 0,
               spec: 4,
               isStrong: false,
               move: {
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
               name: "怨念のソウルスクリーマー",
               hp: 15,
               imageno: 12035,
               attr: 0,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(3)),
                     damage_switch(s_enemy_when_hpdown(0.95), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_absorb([1,1,1,1,1], 1, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_dead: [
                     s_enemy_cursed(500, 5, 2, 0)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "フォグント・レド",
               hp: 200000,
               imageno: 12029,
               attr: 0,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attr_absorb([1,1,1,1,1], 1, 3)
                  ],
                  on_move_angry: [
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
               name: "ミストビースト・レド",
               hp: 200000,
               imageno: 12028,
               attr: 0,
               spec: 4,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attr_absorb([1,1,1,1,1], 1, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
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
            5
         ],
         enemy: [
            {
               name: "モックラット・クリムゾン",
               hp: 300000,
               imageno: 12017,
               attr: 0,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_fear(5, 0, 0.5, [0,1,0,0,0]))
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
               name: "花様風流之時 アヤナ・ミナミカタ",
               hp: 1000000,
               imageno: 12322,
               attr: 0,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrreverse(3, 5)),
                     m_enemy_once(skill_counter_func(s_enemy_attack_ratio, "-", 100, false, 0.99, 5, true)),
                     damage_switch(s_enemy_when_hpdown(0.95), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(100, 5, 1, true)
                  ],
                  on_angry: [
                     impregnable(2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true),
                     s_enemy_attack(100, 5, 1, true)
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