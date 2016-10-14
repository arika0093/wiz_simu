{
   id: "bani9",
   name: "超魔道バーニングタワー 第9階 塔",
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
               name: "ヘルファイアドラゴン",
               hp: 150000,
               imageno: 2770,
               attr: 0,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_absorb, "-", 100, false, 0.9, 5, 150000)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_cursed(200, 5, 1),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     attack_counter_dual(700, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 5, 5, true),
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
               name: "ヴォルテックスドラゴン",
               hp: 400000,
               imageno: 2772,
               attr: 2,
               spec: 0,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_panicshout, "-", 100, false, 2000, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(3),
                     s_enemy_attack_ratio(0.9, 5, true)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true),
                     s_enemy_attack(600, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ルインコンダクター",
               hp: 300000,
               imageno: 4070,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_cursed(200, 5, 1),
                     s_enemy_attack(1000, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     attr_change(0),
                     attack_counter_dual(700, 4)/* Warning: 属性に十分注意してください */
                  ],
                  on_move_angry: [
                     s_enemy_attack(400, 5, 5, true),
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