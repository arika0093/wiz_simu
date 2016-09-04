{
   id: "chromag6_b4",
   name: "覇級 覇色の試練",
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
               name: "炎のごとき略奪者",
               hp: 500000,
               imageno: 8911,
               attr: 0,
               spec: 8,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)/* Warning: ac2con5（分裂待機など） */
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 2000, 2000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(5000, 5, 1, true),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 2
               }
            },
            {
               name: "血の魔人 ソードデーモン",
               hp: 700000,
               imageno: 8906,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 3000)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 2000, 2000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(5000, 5, 1, true),
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "邪炎鳥",
               hp: 500000,
               imageno: 8917,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 3000)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 2000, 2000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(5000, 5, 1, true),
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