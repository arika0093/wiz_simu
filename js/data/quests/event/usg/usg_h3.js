{
   id: "usg_h3",
   name: "降槍級 槍の雨はやまない",
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
               name: "奉る魔道島民",
               hp: 40000,
               imageno: 8486,
               attr: 1,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_noeffect("タイム減少(20秒)")),
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 1
               }
            },
            {
               name: "超祈りを捧げる魔道島民",
               hp: 50000,
               imageno: 8487,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "超祈りを捧げる魔道島民",
               hp: 50000,
               imageno: 8487,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(400, 5, 3, true)
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
               name: "奉る魔道島民",
               hp: 40000,
               imageno: 8486,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "超祈りを捧げる魔道島民",
               hp: 45000,
               imageno: 8487,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_force_reservoir())
                  ],
                  on_move: [
                     s_enemy_attack(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "凶暴な魔道島民",
               hp: 20000,
               imageno: 8484,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 2, 3))
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 4, true)
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
               name: "超激怒した魔道島民",
               hp: 30000,
               imageno: 8485,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 2, 3))
                  ],
                  on_move: [
                     s_enemy_attack(100, 3, 4, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "超祈りを捧げる魔道島民",
               hp: 60000,
               imageno: 8487,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "超祈りを捧げる魔道島民",
               hp: 50000,
               imageno: 8487,
               attr: 1,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(350, 3, 3, true),
                     s_enemy_noeffect("タイム減少(20秒)")
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
               name: "超暴れ狂う魔道島民",
               hp: 150000,
               imageno: 8489,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 3000, 5, 5))
                  ],
                  on_move: [
                     s_enemy_attack(1000, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "今こそ我が力を グウィン・ネルビア",
               hp: 450000,
               imageno: 8462,
               attr: 1,
               spec: 9,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     skill_counter_func(s_enemy_cursed, "-", 100, false, 3000, 5, 5)
                  ],
                  on_move_angry: [
                     damage_block_own(15000, 5),
                     s_enemy_attr_weaken([0,1,0,0,0], 1.5, 5, 3)/* Warning: 属性要確認： 水属性弱体化50%（2T） */,
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(450, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "超祈りを捧げる魔道島民",
               hp: 200000,
               imageno: 8487,
               attr: 1,
               spec: 8,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_attack(300, 3, 5, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_noeffect("タイム減少(20秒)")
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true),
                     s_enemy_attack(300, 3, 5, true)
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