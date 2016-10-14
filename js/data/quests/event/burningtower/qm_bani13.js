{
   id: "bani_13",
   name: "超魔道バーニングタワー 第13階 で",
   category: "burningtower",
   desc: "",
   overlap: false,
   aprnum: 1,
   battle_before: [{
      desc: "SPスキルが使用できる状態で開始",
	  proc: spskill_maxcharge()
   }, {
      desc: "ch+7パネル付与",
	  proc: panel_chainplus(7)
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "ディバウアーゴーレム",
               hp: 100000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(125, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(5000, 5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_attack(270, 5, 5, true),
                     s_enemy_attack(270, 5, 5, true),
                     s_enemy_attack(270, 5, 5, true),
                     s_enemy_attack(270, 5, 5, true),
                     s_enemy_attack(270, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 850000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 2000, 2000)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_chain_sealed(4),
                     s_enemy_chain_break()
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_cursed(1000, 5, 3),
                     s_enemy_attack(1000, 5, 5, true),
                     s_enemy_attack(1000, 5, 5, true),
                     s_enemy_attack(1000, 5, 5, true),
                     s_enemy_attack(1000, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "エンシャント・キマイラ",
               hp: 450000,
               imageno: 2769,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 5000, 5, 3)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_panicshout(1000, 5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(800, 5, 5, true),
                     s_enemy_attack(800, 5, 5, true),
                     s_enemy_attack(800, 5, 5, true),
                     s_enemy_attack(800, 5, 5, true),
                     s_enemy_attack(800, 5, 5, true)
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