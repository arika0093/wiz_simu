{
   id: "zoba_h5",
   name: "絶級 降臨！魔道魔人！",
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
               hp: 80000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(500, 4))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "コールドハートサイボーグ歌仙",
               hp: 15000,
               imageno: 9868,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ライトニングサイボーグ歌仙",
               hp: 80000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(500, 4))
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
               name: "スイートハートサイボーグ歌仙",
               hp: 80000,
               imageno: 9870,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(500, 4))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "スイートハートサイボーグ歌仙",
               hp: 90000,
               imageno: 9870,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 1500, 1500))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_continue_damage(3, 500, 500)),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "スイートハートサイボーグ歌仙",
               hp: 80000,
               imageno: 9870,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(500, 4))
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
            3
         ],
         enemy: [
            {
               name: "コールドハートサイボーグ歌仙",
               hp: 20000,
               imageno: 9868,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ライトニングサイボーグ歌仙",
               hp: 110000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter(500, 4))
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "コールドハートサイボーグ歌仙",
               hp: 20000,
               imageno: 9868,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false)
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
            4
         ],
         enemy: [
            {
               name: "ライトニングサイボーグ歌仙",
               hp: 400000,
               imageno: 9864,
               attr: 2,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(500, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)/* Warning: 属性要確認： 全属性防御25%（3T） */
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
            },
            {
               name: "玉座魔歌仙 スローン・シート",
               hp: 900000,
               imageno: 9854,
               attr: 2,
               spec: 9,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 3000)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 1000, 1000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "コールドハートサイボーグ歌仙",
               hp: 100000,
               imageno: 9868,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     attack_counter_dual(500, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false),
                     s_enemy_attack_attrsp(833, 416.5, [1,0,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            }
         ]
      }
   ]
}