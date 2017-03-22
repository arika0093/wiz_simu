{
   id: "xderive_ex",
   name: "ANOTHER ONE",
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
               name: "Lost and Gone〈アナザー・ワン〉",
               hp: 1000000,
               imageno: 10231,
               attr: 0,
               spec: 6,
               isStrong: true,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 3000, 5, 10, true)),
                     s_enemy_reverse(0)
                  ],
                  on_move: [
                     m_enemy_once(damage_block_own(30000, 4)),
					 s_enemy_attack(1000, 5, 1, true),
                     s_enemy_chainreduce(2)
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
         name: "Lost and Gone〈アナザー・ワン〉",
         hp: 2000000,
         imageno: 10231,
         attr: 0,
         spec: 6,
         isStrong: true,
         move: {
            on_popup: [
               m_enemy_once(s_enemy_cursed(0, 5, 6, 1000)),
               m_enemy_once(s_enemy_as_sealed(5, 3)),
               damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true),
               s_enemy_reverse(1)
            ],
            on_move: [
               s_enemy_attack(2500, 5, 1, true)
            ],
            on_angry: [
               s_enemy_cursed(0, 5, 6, 1000)
            ],
            on_move_angry: [
               s_enemy_attack(2500, 5, 1, true),
               s_enemy_attack(2500, 5, 1, true),
               s_enemy_attack(2500, 5, 1, true),
               s_enemy_attack(2500, 5, 1, true),
               s_enemy_attack(2500, 5, 1, true)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      },
      {
         name: "Lost and Gone〈アナザー・ワン〉",
         hp: 2000000,
         imageno: 10232,
         attr: 4,
         spec: 6,
         isStrong: true,
         move: {
            on_popup: [
               m_enemy_once(skill_counter_func(s_enemy_attack, "-", 100, false, 1500, 5, 10, true)),
               m_enemy_once(s_enemy_chain_break()),
               damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
            ],
            on_move: [
               s_enemy_attack(2500, 5, 1, true)
            ],
            on_angry: [
               s_enemy_continue_damage(5, 1000, 1000)
            ],
            on_move_angry: [
               s_enemy_attack(3000, 5, 1, true),
               s_enemy_chain_break(),
               s_enemy_attack(2500, 5, 1, true),
               s_enemy_healreverse(0.5, 5)
            ],
            atrandom: false,
            turn: 1,
            wait: 1
         }
      }
   ]
}