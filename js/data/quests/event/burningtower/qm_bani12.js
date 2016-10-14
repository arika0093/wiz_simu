{
   id: "bani_12",
   name: "超魔道バーニングタワー 第12階 い",
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
               name: "強襲型マインソルジャー",
               hp: 350000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(30000, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attrguard_all([1,1,1,1,1], 0.75, 4)/* Warning: 属性要確認： 全属性防御75%（3T） */
                  ],
                  on_move_angry: [
                     s_enemy_ss_sealed(5, 4),
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
               name: "ディバウアーゴーレム",
               hp: 300000,
               imageno: 2771,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 5000, 5, 3)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(300, 5, 3, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ratio(0.9, 5, true),
                     s_enemy_attack(900, 5, 3, true),
                     s_enemy_attack(900, 5, 3, true),
                     s_enemy_attack(900, 5, 3, true),
                     s_enemy_attack(900, 5, 3, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "強襲型マインソルジャー",
               hp: 350000,
               imageno: 5350,
               attr: 0,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 4)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attrguard_all([1,1,1,1,1], 0.75, 4)/* Warning: 属性要確認： 全属性防御75%（3T） */),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(4, 2500, 2500)
                  ],
                  on_move_angry: [
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true),
                     s_enemy_attack(2000, 5, 1, true)
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