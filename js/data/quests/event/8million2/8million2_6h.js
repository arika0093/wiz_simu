{
   id: "8million2_6h",
   name: "幸福級 福はここにあり",
   desc: "",
   overlap: false,
   aprnum: 1,
   panel_effect: [
      panel_attackup(0.01),
	  panel_attackup(10),
	  panel_attackup(20),
	  panel_chainplus(1),
	  panel_chainplus(50),
	  panel_chainplus(100),
	  panel_healally(0.01),
	  panel_healally(0.5),
	  panel_healally(1),
	  panel_skillboost(5),
	  panel_skillboost(50),
	  panel_attr_guard([1,1,1,1,1], 0.01),
	  panel_attr_guard([1,1,1,1,1], 0.5),
	  panel_attr_guard([1,1,1,1,1], 1)
   ],
   battle_before_def: -1,
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "爆走アオダマ大師",
               hp: 500000,
               imageno: 6841,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(50000, 6)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_as_sealed(5, 3)
                  ],
                  on_move_angry: [
                     m_enemy_once(skill_counter(9999, 6)),
                     s_enemy_attack(1300, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "《ザ・セブンを統べる船》",
               hp: 1000000,
               imageno: 6837,
               attr: 1,
               spec: 6,
               isStrong: true,
               move: {
                  on_move: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(5400, 5, 1, true),
                     s_enemy_attack_ratio(0.9, 5, true),
                     s_enemy_attack(360, 5, 10, true),
                     s_enemy_resurrection(1)
                  ],
                  atrandom: false,
                  turn: 5,
                  wait: 1
               }
            },
            {
               name: "爆走アオダマ大師",
               hp: 500000,
               imageno: 6841,
               attr: 1,
               spec: 1,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(50000, 6)),
                     damage_switch(s_enemy_when_hpdown(0.5), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_deathlimit(1, 6)
                  ],
                  on_move_angry: [
                     m_enemy_once(attack_counter_dual(700, 6)),
                     s_enemy_attack(1300, 1, 1, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            }
         ]
      }
   ]
}