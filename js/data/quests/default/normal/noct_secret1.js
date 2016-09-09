{
   id: "noct_secret1",
   name: "ノクトニアの使者",
   desc: "",
   overlap: false,
   aprnum: 3,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "紅鐵機鎧兵",
               hp: 14000,
               imageno: 8284,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "フレアスティンガー",
               hp: 14000,
               imageno: 8294,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "紅鐵機鎧兵",
               hp: 14000,
               imageno: 8284,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
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
               name: "紅鐵機鎧兵",
               hp: 14000,
               imageno: 8284,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "フレアスティンガー",
               hp: 14000,
               imageno: 8294,
               attr: 0,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "紅鐵機鎧兵",
               hp: 14000,
               imageno: 8284,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
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
               name: "神の名を刻む インベラトラス",
               hp: 1800000,
               imageno: 8376,
               attr: 0,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 3000, 5, 10)),
                     damage_switch(s_enemy_when_hpdown(0.4), m_enemy_angry(), true),
                     s_enemy_reverse(0)
                  ],
                  on_move: [
                     s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 6),
                     s_enemy_attack(1466.6666666666667, 3, 3, true),
                     s_enemy_statusup(false, 10, -1),
                     s_enemy_attack(6500, 5, 1, true),
                     s_enemy_attack(2200, 5, 1, true),
                     s_enemy_attack(3250, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(3)
                  ],
                  on_move_angry: [
                     m_enemy_once(s_enemy_heal_own(1)),
                     s_enemy_deathlimit(3, 6),
                     s_enemy_force_reservoir(),
                     s_enemy_attack(68200, 5, 1, true),
                     s_enemy_statusup(false, 10, -1),
                     s_enemy_attack(2200, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2200, 5, 1, true),
                     s_enemy_attack(2200, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
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
         name: "神の名を刻む インベラトラス",
         hp: 2000000,
         imageno: 8375,
         attr: 3,
         spec: 1,
         isStrong: true,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 1500, 1500))
            ],
            on_move: [
               m_enemy_once(s_enemy_continue_damage(20, 1000, 1000)),
               s_enemy_attrguard_all([1,1,1,0,0], 0.25, 6),
               s_enemy_attack(3000, 5, 1, true),
               s_enemy_deathlimit(3, 4),
               s_enemy_attack_attrsp(9000, 3000, [0,1,0,0,0], 1, 1, false)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}