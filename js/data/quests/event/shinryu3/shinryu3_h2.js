{
   id: "shinryu3_h2",
   name: "中級 峡谷を抜けろ",
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
               name: "鱗水剛竜",
               hp: 40000,
               imageno: 9482,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "鱗酷のヘイトフルドラゴン",
               hp: 50000,
               imageno: 9483,
               attr: 1,
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
               name: "潤河竜",
               hp: 40000,
               imageno: 9488,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
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
               name: "静かなヒッポポドラゴン",
               hp: 50000,
               imageno: 9489,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     m_enemy_once(s_enemy_attack(3000, 5, 1, true)),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "鱗水剛竜",
               hp: 60000,
               imageno: 9482,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_weaken([0,1,0,0,0], 1.5, 5, 3)/*!*/)
                  ],
                  on_move: [
                     s_enemy_attack(300, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "鱗水剛竜",
               hp: 60000,
               imageno: 9482,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
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
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
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
               name: "火河竜",
               hp: 30000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(802.5, 267.5, [0,0,1,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 1
               }
            },
            {
               name: "火河竜",
               hp: 60000,
               imageno: 9486,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     m_enemy_once(s_enemy_cursed(1000, 5, 3)),
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
            4
         ],
         enemy: [
            {
               name: "痺河竜",
               hp: 150000,
               imageno: 9490,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(700, 6))
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "潤河竜",
               hp: 450000,
               imageno: 9488,
               attr: 1,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(damage_block_all, "-", 100, false, 30000, 6)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 1000, 1000)
                  ],
                  on_move_angry: [
                     s_enemy_poison(1000, 5, 3),
                     s_enemy_attack(1500, 5, 1, true),
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
               name: "静かなヒッポポドラゴン",
               hp: 200000,
               imageno: 9489,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 6))
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_force_reservoir()),
                     m_enemy_once(s_enemy_attack(3000, 5, 1, true)),
                     s_enemy_attack(1500, 5, 1, true)
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