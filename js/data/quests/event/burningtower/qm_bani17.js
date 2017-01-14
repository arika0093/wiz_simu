{
   id: "bani_17",
   name: "超魔道バーニングタワー 第17階 迎",
   desc: "",
   overlap: false,
   aprnum: 1,
   battle_before: [{
      desc: "SPスキルが使用できる状態で開始",
	  proc: spskill_maxcharge()
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "ボラルグラナ",
               hp: 120000,
               imageno: 3878,
               attr: 2,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_cursed(0, 5, 4, 5000)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(0, 5, 4, 5000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "闇域の使徒",
               hp: 200000,
               imageno: 9725,
               attr: 4,
               spec: 3,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 750, 5, 10, true)),
                     damage_switch(s_enemy_when_after_turn(5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(83.33333333333333, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_attack(750, 5, 10, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(750, 5, 10, true),
                     s_enemy_attack(750, 5, 10, true),
                     s_enemy_attack(750, 5, 10, true),
                     s_enemy_attack(750, 5, 10, true),
                     s_enemy_attack(750, 5, 10, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ボラルグラナ",
               hp: 120000,
               imageno: 3878,
               attr: 2,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_discharge, "-", 100, false, 5, 5)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(0, 5, 4, 5000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true),
                     s_enemy_attack(250, 5, 1, true)
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