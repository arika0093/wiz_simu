{
   id: "kuugarize_x01",
   name: "トーテムキマイラ",
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
               name: "號なき混沌 トーテムキマイラ",
               hp: 3200000,
               imageno: 10558,
               attr: 2,
               spec: 1,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attrreverse(99, 5)),
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 5, 7500, 7500)),
                     damage_switch(s_enemy_when_hpdown(0.6), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_multibarrier_own(30, 99),
                     s_enemy_attack(1750, 3, 2, true),
                     s_enemy_poison(1500, 5, 5),
                     s_enemy_attack(1750, 5, 1, true),
                     s_enemy_attack(1750, 3, 2, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(1600, 5, 5, 0)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1750, 5, 1, true)
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