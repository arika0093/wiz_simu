{
   id: "shinryu3_b1",
   name: "王竜級 竜に救われた命",
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
               name: "心竜公主 アーリア・バハムート",
               hp: 350000,
               imageno: 9434,
               attr: 2,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 3000)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true),
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 1, 3)),
                  ],
                  on_move: [
                     s_enemy_cursed(600, 5, 3),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 3000, 3000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "心竜老君 セト・バハムート",
               hp: 500000,
               imageno: 9433,
               attr: 2,
               spec: 0,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 3000)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true),
                     m_enemy_once(s_enemy_attr_absorb([1,0,0,0,0], 1, 3)),
                     s_enemy_reverse(0)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1000, 5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_ss_sealed(5, 3),
                     s_enemy_attack(333.3333333333333, 5, 3, true),
                     s_enemy_attack(333.3333333333333, 5, 3, true),
                     s_enemy_attack(333.3333333333333, 5, 3, true),
                     s_enemy_attack(333.3333333333333, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            }
         ]
      }
   ],
   revData: [
      {
         name: "心竜老君 セト・バハムート",
         hp: 400000,
         imageno: 9433,
         attr: 2,
         spec: 0,
         isStrong: true,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 1000, 5, 5)),
               damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
            ],
            on_move: [
               s_enemy_attack(700, 5, 5, true)
            ],
            on_angry: [
               s_enemy_as_sealed(5, 4)
            ],
            on_move_angry: [
               s_enemy_attack(700, 5, 5, true)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}