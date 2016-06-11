{
   id: "bani4",
   name: "超魔道バーニングタワー 第4階 天",
   category: "burningtower",
   desc: "",
   overlap: false,
   aprnum: 1,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "オーソナパトナ",
               hp: 30,
               imageno: 3574,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack_ratio(0.9, 5, true)
                  ],
                  on_angry: [
                     s_enemy_deathlimit(5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "強襲型マインソルジャー",
               hp: 300000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(attack_counter_dual, "99ターンの間、多段式カウンター（固定1500DMG）", 100, false, 1500, 100)),
                     damage_switch(s_enemy_when_hpdown(0.8), m_enemy_angry(), true)
                  ],
                  on_move: [
                     skill_counter_func(attack_counter_dual, "99ターンの間、多段式カウンター（固定1500DMG）", 100, false, 1500, 100)
                  ],
                  on_angry: [
                     attr_change(1)/* Warning: 属性に十分注意してください */,
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "オーソナパトナ",
               hp: 180000,
               imageno: 3574,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(1500, 6)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack_ratio(0.9, 5, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 1)
                  ],
                  on_move_angry: [
                     s_enemy_poison(2000, 5, 4),
                     s_enemy_attack(200, 3, 3, true),
                     s_enemy_attack(200, 3, 3, true),
                     s_enemy_attack(200, 3, 3, true),
                     s_enemy_attack(200, 3, 3, true)
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