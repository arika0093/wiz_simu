{
   id: "zoba_h6",
   name: "ぞば級ーン 想像神覚醒",
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
               name: "ライトニングサイボーグ歌仙",
               hp: 15000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack_attrsp(666.5, 333.25, [0,1,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "バーニンハートサイボーグ歌仙",
               hp: 80000,
               imageno: 9866,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true),
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアーサイボーグ歌仙",
               hp: 60000,
               imageno: 9860,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
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
               name: "バーニンハートサイボーグ歌仙",
               hp: 90000,
               imageno: 9866,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_own(50000, 99))
                  ],
                  on_move: [
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアーサイボーグ歌仙",
               hp: 90000,
               imageno: 9860,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_chainreduce(5),
                     s_enemy_attack(500, 3, 3, true),
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ライトニングサイボーグ歌仙",
               hp: 15000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack_attrsp(666.5, 333.25, [0,1,0,0,0], 5, 1, false)
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
            3
         ],
         enemy: [
            {
               name: "バーニンハートサイボーグ歌仙",
               hp: 80000,
               imageno: 9866,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_own(50000, 99))
                  ],
                  on_move: [
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "バーニンハートサイボーグ歌仙",
               hp: 100000,
               imageno: 9866,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_own(50000, 99))
                  ],
                  on_move: [
                     s_enemy_force_reservoir()
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアーサイボーグ歌仙",
               hp: 80000,
               imageno: 9860,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 5))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
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
               name: "ライトニングサイボーグ歌仙",
               hp: 100000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,0,1,0,0], 3, 5)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack_attrsp(666.5, 333.25, [0,1,0,0,0], 5, 1, false)
                  ],
                  on_angry: [
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack_attrsp(666.5, 333.25, [0,1,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(666.5, 333.25, [0,1,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(666.5, 333.25, [0,1,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(666.5, 333.25, [0,1,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(666.5, 333.25, [0,1,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ナース機神 メカガトリン -想世-",
               hp: 1000000,
               imageno: 9857,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1200, 5, 5, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 3, 0)),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_barrier_own(300000, 99)
                  ],
                  on_move_angry: [
                     s_enemy_continue_damage(5, 500, 500),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_cursed(1000, 5, 3, 0),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ファイアーサイボーグ歌仙",
               hp: 250000,
               imageno: 9860,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 3, 5)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(500, 3, 3, true),
                     s_enemy_attack(500, 3, 3, true),
                     s_enemy_attack(500, 3, 3, true),
                     s_enemy_attack(500, 3, 3, true),
                     s_enemy_attack(500, 3, 3, true)
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