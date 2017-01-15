{
   id: "1612ev_h",
   name: "(2016/12)イベントトーナメント 覇級",
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
               name: "火術戦闘官",
               hp: 20000,
               imageno: 8313,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 3))
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
               name: "黒のマジクラート",
               hp: 35000,
               imageno: 8331,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_poison(500, 5, 3),
                     s_enemy_attack(250, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "火術戦闘官",
               hp: 20000,
               imageno: 8313,
               attr: 0,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 3))
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
            2
         ],
         enemy: [
            {
               name: "黒のマジクラート",
               hp: 20000,
               imageno: 8331,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒のハイ・マジクラート",
               hp: 20000,
               imageno: 8332,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 2))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "闇術戦闘官",
               hp: 20000,
               imageno: 8321,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
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
               name: "闇術戦闘官",
               hp: 30000,
               imageno: 8321,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔氷のハイ・マジクラート",
               hp: 10,
               imageno: 8326,
               attr: 1,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
                  ],
                  on_move: [
                     s_enemy_attack(500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "闇術戦闘官",
               hp: 30000,
               imageno: 8321,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_force_reservoir()
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
               name: "昏術特戦技官",
               hp: 30000,
               imageno: 8322,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir()
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔氷のハイ・マジクラート",
               hp: 60000,
               imageno: 8326,
               attr: 1,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 3))
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "昏術特戦技官",
               hp: 30000,
               imageno: 8322,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 2000, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true)
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
               name: "暗黒のハイ・マジクラート",
               hp: 150000,
               imageno: 8332,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(500, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     attack_counter_dual(500, 4)
                  ],
                  on_move_angry: [
                     m_enemy_once(attack_counter(500, 4)),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "束の間の静謐 ルベリ・クラクス",
               hp: 400000,
               imageno: 9655,
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 1500, 1500)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(150, 3, 5, true)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(150, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒のハイ・マジクラート",
               hp: 150000,
               imageno: 8332,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     s_enemy_force_reservoir(),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  on_angry: [
                     s_enemy_cursed(2000, 5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(500, 5, 1, true),
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