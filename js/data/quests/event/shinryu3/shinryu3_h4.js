{
   id: "shinryu3_h4",
   name: "封魔級 真実を知って",
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
               name: "轟炎のヘイトフルドラゴン",
               hp: 50000,
               imageno: 9481,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "轟炎のヘイトフルドラゴン",
               hp: 50000,
               imageno: 9481,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "燃えるヒッポポドラゴン",
               hp: 50000,
               imageno: 9487,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
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
               name: "鱗水剛竜",
               hp: 50000,
               imageno: 9482,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "燃えるヒッポポドラゴン",
               hp: 70000,
               imageno: 9487,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1200, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火炎剛竜",
               hp: 90000,
               imageno: 9480,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(3000, 1, 1, true)
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
               name: "鱗酷のヘイトフルドラゴン",
               hp: 60000,
               imageno: 9483,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_absorb, "-", 100, false, 0.9, 5, 50000))
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "火炎剛竜",
               hp: 170000,
               imageno: 9480,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火河竜",
               hp: 170000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1200, 5, 5, true))
                  ],
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
            4
         ],
         enemy: [
            {
               name: "潤河竜",
               hp: 70000,
               imageno: 9488,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_as_sealed(5, 4)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_heal_all(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "狂乱の魔刃竜 ケルク＝ナダ",
               hp: 650000,
               imageno: 9465,
               attr: 0,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 1500, 1500)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack_ratio(0.2, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火河竜",
               hp: 100000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 6)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     damage_block_own(15000, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true)
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