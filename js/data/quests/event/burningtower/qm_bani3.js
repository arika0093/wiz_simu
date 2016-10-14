{
   id: "bani3",
   name: "超魔道バーニングタワー 第3階 道",
   category: "burningtower",
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
               name: "エンシャント・キマイラ",
               hp: 300000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 900, 5, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(900, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "リヴァターリーア",
               hp: 500000,
               imageno: 3576,
               attr: 1,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_ss_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(900, 5, 5, true)
                  ],
                  on_angry: [
                     s_enemy_resurrection(1)
                  ],
                  on_move_angry: [
                     s_enemy_attack(900, 5, 5, true),
                     s_enemy_attack(900, 5, 5, true),
                     s_enemy_attack(900, 5, 5, true),
                     s_enemy_attack(900, 5, 5, true),
                     s_enemy_attack(900, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 300000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 900, 5, 5, true))
                  ],
                  on_move: [
                     s_enemy_attack(900, 5, 5, true)
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