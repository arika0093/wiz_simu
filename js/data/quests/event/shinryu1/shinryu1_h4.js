{
   id: "shinryu1_h4",
   name: "竜帝級 雷鳴轟く至天塔",
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
               name: "ボルケーノドラゴン",
               hp: 45000,
               imageno: 1660,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(750, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ブリザードドラゴン",
               hp: 22500,
               imageno: 1662,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(666, 222, [1,0,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ライトニングドラゴン",
               hp: 90000,
               imageno: 1664,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_as_sealed(3, 3),
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
               name: "ライトニングドラゴン",
               hp: 90000,
               imageno: 1664,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_as_sealed(3, 3),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ルビードラゴン",
               hp: 52500,
               imageno: 1666,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ライトニングドラゴン",
               hp: 90000,
               imageno: 1664,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_as_sealed(3, 3),
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
               name: "ライトニングドラゴン",
               hp: 90000,
               imageno: 1664,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_as_sealed(3, 3)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "サファイアドラゴン",
               hp: 30000,
               imageno: 1668,
               attr: 1,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack_attrsp(840, 280, [1,0,0,0,0], 5, 1, false)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "ライトニングドラゴン",
               hp: 90000,
               imageno: 1664,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_as_sealed(3, 3)
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
               name: "ボルケーノドラゴン",
               hp: 60000,
               imageno: 1660,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(750, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "トパーズドラゴン",
               hp: 150000,
               imageno: 1670,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_as_sealed(3, 3),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(1500, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ボルケーノドラゴン",
               hp: 60000,
               imageno: 1660,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(750, 1, 1, true)
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
               name: "ボルケーノドラゴン",
               hp: 150000,
               imageno: 1660,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(1500, 1, 1, true),
                     s_enemy_attack(750, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "雷を司る竜帝 ワイバーン",
               hp: 900000,
               imageno: 1498,
               attr: 2,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1200, 5, 5, true)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attr_weaken([1,1,1,1,1], 1.5, 5, 4)/*!*/
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "トパーズドラゴン",
               hp: 450000,
               imageno: 1670,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_as_sealed, "-", 100, false, 5, 4))
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_as_sealed(5, 3),
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