{
   id: "1606_h",
   name: "イベントトーナメント 覇級",
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
               name: "白兵型ブレードロード",
               hp: 600000,
               imageno: 5351,
               attr: 1,
               spec: 6,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_continue_damage, "継続大魔術（固定値：6000）3T ", 100, false, 3, 1500, 1500)),
                     damage_switch(s_enemy_when_after_turn(3), m_enemy_angry(), true)
                  ],
				  on_move: [
                     s_enemy_attack(250, 5, 1, true),
				  ],
                  on_angry: [
                     s_enemy_attack_ratio(0.99, 5, true)
                  ],
                  on_move_angry: [
                     s_enemy_attack(166.66666666666666, 3, 3, true),
                     s_enemy_attack(166.66666666666666, 3, 3, true),
                     s_enemy_attack(166.66666666666666, 3, 3, true),
                     s_enemy_attack(166.66666666666666, 3, 3, true),
                     s_enemy_attack(300, 5, 5, true)
                  ],
                  atrandom: false,
                  turn: 2,
                  wait: 2
               }
            },
            {
               name: "鳥だけにとりあえずの研究成果",
               hp: 1300000,
               imageno: 8276,
               attr: 1,
               spec: 4,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(skill_counter_func(s_enemy_cursed, "呪い 5体のHP5000減少×5ターン", 100, false, 5000, 5, 6)),
                     damage_switch(s_enemy_when_dead_l(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     m_enemy_once(s_enemy_attack_ratio(0.1, 5, true)),
                     s_enemy_attack(250, 2, 2, true)
                  ],
                  on_angry: [
                     attr_change(3)/* Warning: 属性に十分注意してください */,
                     s_enemy_as_sealed(5, 4)
                  ],
                  on_move_angry: [
                     s_enemy_attack(166.66666666666666, 3, 3, true),
                     s_enemy_attack(166.66666666666666, 3, 3, true),
                     s_enemy_attack(166.66666666666666, 3, 3, true),
                     s_enemy_attack(166.66666666666666, 3, 3, true),
                     s_enemy_absorb(0.9, 5, 500000)
                  ],
                  atrandom: false,
                  turn: 1,
                  wait: 1
               }
            },
            {
               name: "ルインコンダクター",
               hp: 45,
               imageno: 4070,
               attr: 2,
               spec: 2,
               isStrong: false,
               move: {
                  on_popup: [
                     m_enemy_once(impregnable(99)),
                     damage_switch(s_enemy_when_dead_s(), m_enemy_angry(), true)
                  ],
                  on_move: [
                     s_enemy_attack(150, 5, 1, true)
                  ],
                  on_angry: [
                     s_enemy_cursed(200, 5, 2)
                  ],
                  on_move_angry: [
                     s_enemy_attack_ratio(0.9, 5, true),
                     s_enemy_attack(100, 3, 3, true),
                     s_enemy_cursed(200, 5, 2),
                     s_enemy_attack(100, 3, 3, true),
                     s_enemy_cursed(200, 5, 2)
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