{
   id: "bani16",
   name: "超魔道バーニングタワー 第16階 歓",
   desc: "",
   overlap: false,
   aprnum: 1,
   battle_before: [{
      desc: "SPスキルが使用できる状態で開始",
	  proc: spskill_maxcharge()
   }, {
      desc: "ch+3パネル付与",
	  proc: panel_chainplus(3)
   }],
   data: [
      {
         appearance: [
            1
         ],
         enemy: [
            {
               name: "グランフランバット",
               hp: 200000,
               imageno: 5235,
               attr: 0,
               spec: 7,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 1, 3)),
                     damage_switch(s_enemy_when_after_turn(1), m_enemy_angry(), true)
                  ],
                  on_move: [
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
               name: "グリムン・ダーク",
               hp: 500000,
               imageno: 8341,
               attr: 4,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_all_sealed, "-", 100, false, 5, 6)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(250, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_attack_ratio(0.9, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ボーンソルジャー・チャード",
               hp: 200000,
               imageno: 5246,
               attr: 0,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(s_enemy_attr_absorb([0,1,0,0,0], 1, 3)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(500, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_all_sealed(5, 6)
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