{
   id: "grade17",
   name: "",
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
               name: "ターコイズサハギン",
               hp: 60000,
               imageno: 2544,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "暗黒のハイ・マジクラート",
               hp: 70000,
               imageno: 8332,
               attr: 4,
               spec: 9,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ヘイズハーピー",
               hp: 60000,
               imageno: 2532,
               attr: 1,
               spec: 5,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
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
               name: "ターコイズレンジャー",
               hp: 75000,
               imageno: 5231,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "氷岩フラッペスピリット",
               hp: 90000,
               imageno: 5261,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 10, 7500, 7500))
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グラングラソバット",
               hp: 75000,
               imageno: 5237,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
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
               name: "ブラストスティンガー",
               hp: 75000,
               imageno: 8298,
               attr: 2,
               spec: 5,
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
               name: "魔氷のハイ・マジクラート",
               hp: 100000,
               imageno: 8326,
               attr: 1,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(15000, 4))
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
               name: "バーミリオン・ヘルムホプス",
               hp: 40000,
               imageno: 8304,
               attr: 0,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(333, 5, 1, true)
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
               name: "鳴術特戦技官",
               hp: 100000,
               imageno: 8318,
               attr: 2,
               spec: 9,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 10, 7500, 7500))
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "グリムン・シャドウ",
               hp: 150000,
               imageno: 8342,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "プラズマファントム",
               hp: 50000,
               imageno: 2522,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(5, 99))
                  ],
                  on_move: [
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
               name: "聡慧大賢者 ティア・ソピア",
               hp: 350000,
               imageno: 7594,
               attr: 0,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 2, 3)),
                     m_enemy_once(s_enemy_barrier_own(100000, 99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(333, 1, 1, true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 99)
                  ],
                  on_move_angry: [
                     skill_counter_func(s_enemy_attack, "-", 100, false, 333, 1, 1, true),
                     s_enemy_attack(333, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "新時代の牽引者 ルベリ・クラクス",
               hp: 1200000,
               imageno: 11248,
               attr: 4,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 3)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(333, 1, 1, m_enemy_tgtype_minhp())
                  ],
                  on_angry: [
                     s_enemy_attr_absorb([1,1,1,1,1], 2, 3)
                  ],
                  on_move_angry: [
                     skill_counter_func(s_enemy_attack, "-", 100, false, 333, 1, 1, true),
                     s_enemy_attack(333, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "救奉大聖女 ベルナデッタ・イルマ",
               hp: 350000,
               imageno: 7604,
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 2, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(333, 1, 1, m_enemy_tgtype_minhp())
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 99)
                  ],
                  on_move_angry: [
                     skill_counter_func(s_enemy_attack, "-", 100, false, 333, 1, 1, true),
                     s_enemy_attack(333, 1, 1, true)
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