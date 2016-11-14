{
   id: "bani14",
   name: "超魔道バーニングタワー 第14階 や",
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
               name: "捕縛型マニュピュレーター",
               hp: 25,
               imageno: 5352,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_after_turn(1), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 5000, 5, 5)),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(5000, 5, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ルインコンダクター",
               hp: 600000,
               imageno: 4070,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "-", 100, false, 5000, 5, 5)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 2, true)
                  ],
                  on_angry: [
                     s_enemy_ss_sealed(5, 3)
                  ],
                  on_move_angry: [
                     s_enemy_poison(1000, 5, 5),
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true),
                     s_enemy_attack(500, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ジズマントルチュ",
               hp: 700000,
               imageno: 3879,
               attr: 2,
               spec: 7,
               isStrong: false,
               move: {
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_popup: [
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 2000, 2000)
                  ],
                  on_move_angry: [
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(3000, 5, 1, true)
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