{
   id: "chromag6_b2",
   name: "覇級 黄雷の試練",
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
               name: "ブレイズアンデッド",
               hp: 300000,
               imageno: 8923,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(damage_block_own(20000, 5)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(attack_counter(1000, 4)),
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     attr_change(4),
                     s_enemy_attr_weaken([1,1,1,0,0], 2, 5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "魔剣少女 フェルム",
               hp: 700000,
               imageno: 8898,
               attr: 2,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(800, 5, 1, true),
                     s_enemy_attack(800, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_poison(2000, 1, 5)
                  ],
                  on_move_angry: [
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(1500, 5, 1, true),
                     s_enemy_attack(5000, 5, 1, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "邪雷鳥",
               hp: 200000,
               imageno: 8921,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "-", 100, false, 3, 3000, 750)),
                     damage_switch(s_enemy_when_after_turn(4), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_continue_damage(3, 3000, 750)
                  ],
                  on_move_angry: [
                     s_enemy_force_reservoir(),
                     s_enemy_attack(3000, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(500, 5, 1, true),
                     s_enemy_attack(5000, 5, 1, true)
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