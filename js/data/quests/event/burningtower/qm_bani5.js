{
   id: "bani5",
   name: "超魔道バーニングタワー 第5階 頂",
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
               name: "イクリプスジェム",
               hp: 350000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack_ratio, "-", 100, false, 0.99, 5, true)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true),
                     s_enemy_division(1)
                  ],
                  on_move: [
                     s_enemy_chain_sealed(4),
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_panicshout(2000, 5, 3),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "クレセントシャドウ",
               hp: 600000,
               imageno: 2187,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_all_sealed(5, 4)
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
               name: "イクリプスジェム",
               hp: 350000,
               imageno: 2155,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 600, 5, 5, true)),
                     damage_switch(s_enemy_when_after_turn(2), m_enemy_angry(), true),
                     s_enemy_division(1)
                  ],
                  on_move: [
                     s_enemy_cursed(1000, 5, 3),
                     s_enemy_attack(200, 5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_panicshout(2000, 5, 3),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
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