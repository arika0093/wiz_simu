{
   id: "chromag6_b3",
   name: "覇級 紅火の試練",
   desc: "",
   overlap: false,
   aprnum: 1,
   battle_before: [{
      desc: "SPスキルが使用できる状態で開始",
	  proc: spskill_maxcharge()
   }],
   panel_effect: [panel_chainplus(3)],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "アイシクルアンデッド",
               hp: 250000,
               imageno: 8925,
               attr: 1,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(attack_counter_dual(500, 6)),
                     damage_switch(s_enemy_when_after_turn(7), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_cursed(3000, 5, 5)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            },
            {
               name: "災いの具象 ソードデーモン",
               hp: 700000,
               imageno: 8905,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 0, 5, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_deathlimit(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_as_sealed(5, 2),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(200, 5, 5, true),
                     s_enemy_attack(400, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "邪炎鳥",
               hp: 250000,
               imageno: 8917,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_poison, "-", 100, false, 5000, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(200, 3, 3, true)
                  ],
                  on_angry: [
                     s_enemy_attack(960, 5, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(960, 5, 5, true),
                     s_enemy_attack(960, 5, 5, true),
                     s_enemy_attack(960, 5, 5, true),
                     s_enemy_attack(960, 5, 5, true),
                     s_enemy_attack(960, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 3,
                  wait: 3
               }
            }
         ]
      }
   ]
}