{
   id: "museum_19",
   name: "19: 黒猫チャレンジ1",
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
               name: "からくり暴留〈黄〉",
               hp: 120000,
               imageno: 9948,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "エレクトリックからくりGGE",
               hp: 120000,
               imageno: 9954,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "からくり暴留〈黄〉",
               hp: 120000,
               imageno: 9948,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,0,0,0,0], 0.25, 3)),
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
               name: "からくり暴留〈赤〉",
               hp: 80000,
               imageno: 9944,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([1,0,0,0,0], 0.5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エレクトリックからくりGGE",
               hp: 120000,
               imageno: 9954,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "からくり暴留〈百日紅〉",
               hp: 80000,
               imageno: 9945,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([1,0,0,0,0], 0.5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
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
               name: "からくり暴留〈山吹〉",
               hp: 160000,
               imageno: 9949,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_poison(1000, 5, 5)
                  ],
                  on_move_angry: [
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
               name: "からくり暴留〈赤〉",
               hp: 80000,
               imageno: 9944,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrguard_own([1,0,0,0,0], 1, 4))
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
               name: "ハイボルテージからくりGGE",
               hp: 160000,
               imageno: 9955,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_attack_ratio(0.5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
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
               name: "からくり暴留〈紫陽花〉",
               hp: 400000,
               imageno: 9947,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_statusup(true, 0, -1, 300000)),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_statusup(true, 30, 5, 0)
                  ],
                  on_move_angry: [
                     s_enemy_attack(666.5, 5, 1, true),
                     s_enemy_attack(666.5, 5, 1, true),
                     s_enemy_attack(666.5, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "かわいい豆腐小娘 キヌ",
               hp: 1600000,
               imageno: 9940,
               attr: 2,
               spec: 5,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ignoreguard, "-", 100, false, 20000, 5, 1, true)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(2000, 1, 1, true)
                  ],
                  on_angry: [
                     s_enemy_force_reservoir_ex(2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(4000, 5, 1, true),
                     s_enemy_attack(4000, 5, 1, true),
                     s_enemy_attack(4000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "からくり暴留〈山吹〉",
               hp: 600000,
               imageno: 9949,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_heal_all, "-", 100, false, 1)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_heal_all(0.3)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.5, 6)
                  ],
                  on_move_angry: [
                     s_enemy_heal_all(0.3),
                     s_enemy_heal_all(0.3),
                     s_enemy_heal_all(0.3)
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