{
   id: "kuugarize_vs02",
   name: "VS 烈刀激閃",
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
               name: "〈呪具盗り〉 ミハネ",
               hp: 500000,
               imageno: 10471,
               attr: 1,
               spec: 8,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_multibarrier_own(20, 99)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true),
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 10000, 10000)),
                  ],
                  on_move: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(12000, 5, 1, true),
                  ],
                  on_angry: [
                     s_enemy_multibarrier_all(15, 99)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2250, 5, 1, true),
                     s_enemy_discharge(5, 2),
                     s_enemy_attack(2250, 5, 1, true),
                     s_enemy_deathlimit(5, 2)
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