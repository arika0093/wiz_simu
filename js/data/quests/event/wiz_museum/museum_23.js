{
   id: "museum_23",
   name: "23: 黒猫チャレンジ5",
   desc: "",
   overlap: false,
   aprnum: 3,
   battle_before: [{
      desc: "回復+50%",
	  proc: panel_healally(0.5),
	  isev: true,
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "思念侵蝕ドルキマス上等兵",
               hp: 100000,
               imageno: 11357,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000))
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
               name: "思念侵蝕ドルキマス軍曹",
               hp: 500000,
               imageno: 11358,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_x(2), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(5, 1000, 1000)
                  ],
                  on_move_angry: [
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
               name: "思念侵蝕ドルキマス上等兵",
               hp: 100000,
               imageno: 11357,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000))
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
               name: "思念侵蝕ドルキマス軍曹",
               hp: 800000,
               imageno: 11358,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_own(200000, 99)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
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
               name: "思念侵蝕ドルキマス軍曹",
               hp: 800000,
               imageno: 11358,
               attr: 1,
               spec: 8,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_barrier_own(200000, 99)),
                     damage_switch(s_enemy_when_dead_x(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(0.5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
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
               name: "荒鷲の艦隊 ブルーノ・シャルルリエ",
               hp: 1000000,
               imageno: 11375,
               attr: 1,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_healreverse(0.5, 5)),
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000))
                  ],
                  on_move: [
                     s_enemy_attack(3000, 5, 1, true)
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
               name: "荒鷲の艦隊 ブルーノ・シャルルリエ",
               hp: 1700000,
               imageno: 11376,
               attr: 3,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 5000, 5, 5)),
                     damage_switch(s_enemy_when_hpdown(0.75), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_discharge(5, 5),
                     s_enemy_continue_damage(5, 1000, 1000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 3, true),
                     s_enemy_attack(150, 5, 10, true),
                     s_enemy_discharge(5, 5)
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