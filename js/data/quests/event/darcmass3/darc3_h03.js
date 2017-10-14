{
   id: "darc3_h03",
   name: "上級 ウルガン公国の機動戦",
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
               name: "星より流れ落つ巡航艦",
               hp: 50000,
               imageno: 11363,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(700, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "星より流れ落つ戦艦",
               hp: 50000,
               imageno: 11364,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(700, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "精神汚染ドルキマス上等兵",
               hp: 30000,
               imageno: 11355,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(300, 5, 1, true)/*nogambits*/
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
               name: "精神汚染ドルキマス上等兵",
               hp: 15,
               imageno: 11355,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99))
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
               name: "星より流れ落つ巡航艦",
               hp: 55000,
               imageno: 11363,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "思念侵蝕ドルキマス上等兵",
               hp: 55000,
               imageno: 11357,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(750, 5, 1, true)/*nogambits*/
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
               name: "思念侵蝕ドルキマス軍曹",
               hp: 60000,
               imageno: 11358,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "星より流れ落つ戦艦",
               hp: 60000,
               imageno: 11364,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(800, 5, 1, true)/*nogambits*/
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "精神汚染ドルキマス軍曹",
               hp: 40000,
               imageno: 11356,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(333.25, 5, 1, true)/*nogambits*/
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
            4
         ],
         enemy: [
            {
               name: "精神汚染ドルキマス軍曹",
               hp: 150000,
               imageno: 11356,
               attr: 0,
               spec: 8,
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
               name: "異星より来た王 〈イグノビリウム〉",
               hp: 650000,
               imageno: 11343,
               attr: 1,
               spec: 2,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrIncreaseGuard_own([0,0,1,0,0], 0.15, 0.75, 5)),
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 0, 5, 4, 1500)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "星より流れ落つ戦艦",
               hp: 400000,
               imageno: 11364,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 2000, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(900, 5, 1, true),
                     s_enemy_attack(900, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.25, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true),
                     s_enemy_attack(1125, 5, 1, true)
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